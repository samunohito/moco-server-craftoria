import { copyFile, cp, mkdtemp, realpath, writeFile } from 'node:fs/promises';
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
} from './lib.js';
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
}

export function lolipopOutputPath(resourceRoot: string, manifest: OverlayManifest, output?: string): string {
  return path.resolve(output ?? path.join(resourceRoot, 'dist', `Craftoria-Lolipop-Server-${manifest.addonVersion}.zip`));
}

function isServerPayloadPath(relativePath: string): boolean {
  const normalized = relativePath.replaceAll('\\', '/');
  return !normalized.startsWith('kubejs/assets/')
    && !normalized.startsWith('kubejs/client_scripts/')
    && !normalized.startsWith('kubejs/probe/');
}

async function validatePreparedServer(sourceServer: string, manifest: OverlayManifest): Promise<string> {
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

  for (const entry of manifest.files) {
    if (!isServerPayloadPath(String(entry.path))) continue;
    const installed = path.join(root, String(entry.path));
    if (!await pathExists(installed)) {
      throw new Error(`Overlay file is missing from the prepared server: ${entry.path}. Apply the overlay before exporting.`);
    }
    const actual = await hashFile(installed, entry.hashAlgorithm);
    if (actual !== String(entry.hash).toLowerCase()) {
      throw new Error(`Overlay file does not match the release manifest: ${entry.path} (${actual}).`);
    }
  }

  for (const entry of manifest.remove ?? []) {
    if (isServerPayloadPath(String(entry.path)) && await pathExists(path.join(root, String(entry.path)))) {
      throw new Error(`A file removed by the overlay is still present: ${entry.path}. Apply the overlay before exporting.`);
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
}: WriteLolipopArchiveOptions): Promise<void> {
  if (await pathExists(outputPath)) throw new Error(`Output already exists: ${outputPath}`);
  const source = await validatePreparedServer(sourceServer, manifest);
  const stage = await mkdtemp(path.join(os.tmpdir(), 'craftoria-lolipop-export-'));

  try {
    for (const directory of serverDirectories) {
      const from = path.join(source, directory);
      if (!await pathExists(from)) continue;
      await cp(from, path.join(stage, directory), {
        recursive: true,
        filter: (candidate) => {
          const relative = path.relative(source, candidate).replaceAll('\\', '/');
          return isServerPayloadPath(relative)
            && !relative.startsWith('kubejs/logs/')
            && !relative.endsWith('.log');
        },
      });
    }

    await copyFile(starterJar, path.join(stage, 'server.jar'));
    await writeFile(path.join(stage, 'run.sh'), lolipopRunScript(manifest.target.neoForge), 'utf8');
    await writeFile(
      path.join(stage, 'LOLIPOP-README.txt'),
      `Craftoria ${manifest.target.managedPackVersion} / add-on ${manifest.addonVersion}\n`
      + 'サーバーを停止してから、このZIPの中身を /opt/minecraft/current/ へ上書き配置してください。\n'
      + 'world、server.properties、ops/whitelist/ban情報、ログはこのZIPに含まれません。\n'
      + 'ロリポップ側のJavaは21または25を選択してください。メモリ量は管理画面の設定が使われます。\n',
      'utf8',
    );
    await createZip(stage, outputPath, { executablePaths: ['run.sh'] });
  } finally {
    await removeOwnedScratch(stage);
  }
}

export async function exportLolipopServer({ serverPath, output }: ExportLolipopOptions = {}): Promise<void> {
  if (serverPath === undefined) throw new Error('--server is required.');
  const resourceRoot = await findResourceRoot(scriptDirectory, 'overlay.template.json');
  const packagedManifest = path.join(resourceRoot, 'manifest.json');
  const manifest = await pathExists(packagedManifest)
    ? await readJson<OverlayManifest>(packagedManifest)
    : (await prepareOverlay(resourceRoot)).manifest;
  const outputPath = lolipopOutputPath(resourceRoot, manifest, output);
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-lolipop-starter-'));

  try {
    const starterJar = path.join(scratch, 'server.jar');
    await downloadFile(serverStarterUrl, starterJar);
    const actual = await hashFile(starterJar, 'SHA256');
    if (actual !== serverStarterSha256) {
      throw new Error(`NeoForge ServerStarterJar hash verification failed: ${actual}`);
    }
    await writeLolipopArchive({ sourceServer: serverPath, outputPath, starterJar, manifest });
    console.log(`Created: ${outputPath}`);
  } finally {
    await removeOwnedScratch(scratch);
  }
}
