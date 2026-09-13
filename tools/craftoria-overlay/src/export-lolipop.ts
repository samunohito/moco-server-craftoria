import { copyFile, cp, mkdir, mkdtemp, realpath, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createZip,
  downloadFile,
  findResourceRoot,
  hashFile,
  pathExists,
  readJson,
  removeOwnedScratch,
  resolveInside,
} from './lib.js';
import { overlayFileAppliesToTarget } from './install-overlay.js';
import { prepareOverlay } from './manifest.js';
import type { OverlayManifest } from './types.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

export const serverStarterVersion = '0.1.34';
export const serverStarterUrl = `https://github.com/neoforged/ServerStarterJar/releases/download/${serverStarterVersion}/server.jar`;
export const serverStarterSha256 = '1f6b5cfde510ebd1de35fa15a8b1e3828a2178827508810fb737cf73878084b2';

const serverDirectories = [
  'config',
  'coremods',
  'defaultconfigs',
  'kubejs',
  'libraries',
  'local',
  'mods',
  'moonlight-global-datapacks',
  'patchouli_books',
  'resources',
  'scripts',
  'versions',
] as const;

export interface ExportLolipopOptions {
  serverPath?: string;
  output?: string;
}

interface WriteLolipopArchiveOptions {
  sourceServer: string;
  outputPath: string;
  starterJar: string;
  manifest: OverlayManifest;
  overlaySources?: ReadonlyMap<string, string>;
}

export function lolipopOutputPath(resourceRoot: string, manifest: OverlayManifest, output?: string): string {
  return path.resolve(output ?? path.join(resourceRoot, 'dist', `${lolipopArchiveName(manifest)}.zip`));
}

export function lolipopArchiveName(manifest: OverlayManifest): string {
  return `Craftoria-Lolipop-Server-${manifest.addonVersion}`;
}

function isServerPayloadPath(relativePath: string): boolean {
  const normalized = relativePath.replaceAll('\\', '/');
  return !normalized.startsWith('kubejs/assets/')
    && !normalized.startsWith('kubejs/client_scripts/')
    && !normalized.startsWith('kubejs/probe/');
}

function normalizedPath(filePath: string): string {
  return filePath.replaceAll('\\', '/');
}

function serverOverlayFiles(manifest: OverlayManifest) {
  return manifest.files.filter(
    (entry) => overlayFileAppliesToTarget(entry, 'server') && isServerPayloadPath(String(entry.path)),
  );
}

async function validatePreparedServer(
  sourceServer: string,
  manifest: OverlayManifest,
  overlaySources: ReadonlyMap<string, string>,
): Promise<string> {
  const root = await realpath(path.resolve(sourceServer));
  for (const required of ['config', 'kubejs', 'libraries', 'mods']) {
    if (!await pathExists(path.join(root, required))) {
      throw new Error(`Prepared Craftoria server directory is missing: ${required}/`);
    }
  }

  const unixArgs = path.join(
    root,
    'libraries',
    'net',
    'neoforged',
    'neoforge',
    manifest.target.neoForge,
    'unix_args.txt',
  );
  if (!await pathExists(unixArgs)) {
    throw new Error(`NeoForge ${manifest.target.neoForge} unix_args.txt is missing. Finish the official server installation first.`);
  }

  for (const entry of serverOverlayFiles(manifest)) {
    if (overlaySources.has(normalizedPath(String(entry.path)))) continue;
    const installed = path.join(root, String(entry.path));
    if (!await pathExists(installed)) {
      throw new Error(`Overlay file is missing from the prepared server: ${entry.path}. Apply the overlay before exporting.`);
    }
    const actual = await hashFile(installed, entry.hashAlgorithm);
    if (actual !== String(entry.hash).toLowerCase()) {
      throw new Error(`Overlay file does not match the release manifest: ${entry.path} (${actual}).`);
    }
  }

  return root;
}

export function lolipopRunScript(neoForgeVersion: string): string {
  return `#!/bin/bash

# This unreachable command lets NeoForge ServerStarterJar discover the modular launch arguments.
# Lolipop's launcher still executes the screen command below and supplies the actual JVM memory flags.
if false; then
    \${JAVA_HOME}/bin/java @libraries/net/neoforged/neoforge/${neoForgeVersion}/unix_args.txt
fi

# check environment variables
if [[ -z \${MOD} || -z \${JAVA_HOME} || -z \${MCMAXMEM} || -z \${MCMINMEM} ]]; then
    echo "Environment variables are not set."
    exit 1
fi

ARGS="-Xmx\${MCMAXMEM} -Xms\${MCMINMEM} -XX:+UseG1GC -XX:ParallelGCThreads=2 -XX:MinHeapFreeRatio=5 -XX:MaxHeapFreeRatio=10"

# run minecraft server
/usr/bin/screen -DmS minecraft-je \${JAVA_HOME}/bin/java -server \${ARGS} -jar /opt/minecraft/current/server.jar --nogui
`;
}

export async function writeLolipopArchive({
  sourceServer,
  outputPath,
  starterJar,
  manifest,
  overlaySources = new Map(),
}: WriteLolipopArchiveOptions): Promise<void> {
  if (await pathExists(outputPath)) throw new Error(`Output already exists: ${outputPath}`);
  const source = await validatePreparedServer(sourceServer, manifest, overlaySources);
  const stage = await mkdtemp(path.join(os.tmpdir(), 'craftoria-lolipop-export-'));
  const packageName = lolipopArchiveName(manifest);
  const packageRoot = path.join(stage, packageName);
  const clientOnlyFiles = new Set(
    manifest.files
      .filter((entry) => !overlayFileAppliesToTarget(entry, 'server'))
      .map((entry) => String(entry.path).replaceAll('\\', '/')),
  );
  const removedFiles = new Set(
    (manifest.remove ?? []).map((entry) => normalizedPath(String(entry.path))),
  );

  try {
    await mkdir(packageRoot, { recursive: true });
    for (const directory of serverDirectories) {
      const from = path.join(source, directory);
      if (!await pathExists(from)) continue;
      await cp(from, path.join(packageRoot, directory), {
        recursive: true,
        filter: (candidate) => {
          const relative = path.relative(source, candidate).replaceAll('\\', '/');
          return isServerPayloadPath(relative)
            && !clientOnlyFiles.has(relative)
            && !removedFiles.has(relative)
            && !relative.startsWith('kubejs/logs/')
            && !relative.endsWith('.log');
        },
      });
    }

    for (const entry of serverOverlayFiles(manifest)) {
      const relative = normalizedPath(String(entry.path));
      const overlaySource = overlaySources.get(relative);
      if (overlaySource === undefined) continue;
      if (!await pathExists(overlaySource)) throw new Error(`Overlay source is missing: ${overlaySource}`);
      const destination = resolveInside(packageRoot, relative);
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(overlaySource, destination);
    }

    for (const entry of serverOverlayFiles(manifest)) {
      const relative = normalizedPath(String(entry.path));
      const staged = resolveInside(packageRoot, relative);
      if (!await pathExists(staged)) throw new Error(`Overlay file is missing from the Lolipop archive: ${relative}`);
      const actual = await hashFile(staged, entry.hashAlgorithm);
      if (actual !== String(entry.hash).toLowerCase()) {
        throw new Error(`Overlay file does not match the release manifest in the Lolipop archive: ${relative} (${actual}).`);
      }
    }

    await copyFile(starterJar, path.join(packageRoot, 'server.jar'));
    await writeFile(path.join(packageRoot, 'run.sh'), lolipopRunScript(manifest.target.neoForge), 'utf8');
    await writeFile(
      path.join(packageRoot, 'LOLIPOP-README.txt'),
      `Craftoria ${manifest.target.managedPackVersion} / add-on ${manifest.addonVersion}\n`
      + 'サーバーを停止してから、このZIPの中身を /opt/minecraft/current/ へ上書き配置してください。\n'
      + 'world、server.properties、ops/whitelist/ban情報、ログはこのZIPに含まれません。\n'
      + 'ロリポップ側のJavaは21または25を選択してください。メモリ量は管理画面の設定が使われます。\n',
      'utf8',
    );
    await createZip(stage, outputPath, { executablePaths: [`${packageName}/run.sh`] });
  } finally {
    await removeOwnedScratch(stage);
  }
}

export async function exportLolipopServer({ serverPath, output }: ExportLolipopOptions = {}): Promise<void> {
  if (serverPath === undefined) throw new Error('--server is required.');
  const resourceRoot = await findResourceRoot(scriptDirectory, 'overlay.template.json');
  const packagedManifest = path.join(resourceRoot, 'manifest.json');
  let manifest: OverlayManifest;
  const overlaySources = new Map<string, string>();
  if (await pathExists(packagedManifest)) {
    manifest = await readJson<OverlayManifest>(packagedManifest);
    for (const entry of manifest.files) {
      if (entry.payload !== undefined) {
        overlaySources.set(normalizedPath(String(entry.path)), resolveInside(resourceRoot, entry.payload));
      }
    }
  } else {
    const prepared = await prepareOverlay(resourceRoot);
    manifest = prepared.manifest;
    for (const entry of prepared.sources) overlaySources.set(normalizedPath(entry.path), entry.source);
  }
  const outputPath = lolipopOutputPath(resourceRoot, manifest, output);
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-lolipop-starter-'));

  try {
    const starterJar = path.join(scratch, 'server.jar');
    await downloadFile(serverStarterUrl, starterJar);
    const actual = await hashFile(starterJar, 'SHA256');
    if (actual !== serverStarterSha256) {
      throw new Error(`NeoForge ServerStarterJar hash verification failed: ${actual}`);
    }
    await writeLolipopArchive({ sourceServer: serverPath, outputPath, starterJar, manifest, overlaySources });
    console.log(`Created: ${outputPath}`);
  } finally {
    await removeOwnedScratch(scratch);
  }
}
