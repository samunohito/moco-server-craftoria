import { copyFile, cp, mkdir, mkdtemp, realpath, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createZip,
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

const serverDirectories = [
  'config',
  'coremods',
  'defaultconfigs',
  'kubejs',
  'local',
  'mods',
  'moonlight-global-datapacks',
  'patchouli_books',
  'resources',
  'scripts',
] as const;

export interface ExportLolipopOptions {
  serverPath?: string;
  output?: string;
}

interface WriteLolipopArchiveOptions {
  sourceServer: string;
  outputPath: string;
  manifest: OverlayManifest;
  overlaySources?: ReadonlyMap<string, string>;
}

export function lolipopOutputPath(resourceRoot: string, manifest: OverlayManifest, output?: string): string {
  return path.resolve(output ?? path.join(resourceRoot, 'dist', `${lolipopArchiveName(manifest)}.zip`));
}

export function lolipopArchiveName(manifest: OverlayManifest): string {
  return `Craftoria-Lolipop-NeoForge-Patch-${manifest.addonVersion}`;
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

export async function writeLolipopArchive({
  sourceServer,
  outputPath,
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

    await writeFile(
      path.join(packageRoot, 'LOLIPOP-README.txt'),
      `Craftoria ${manifest.target.managedPackVersion} / add-on ${manifest.addonVersion}\n`
      + 'サーバーを停止し、readlink -f /opt/minecraft/current でWebGUIが選択した実体を確認してください。\n'
      + 'このディレクトリの中身を、表示されたneoforge-1.21.1-*ディレクトリへ上書き配置してください。\n'
      + 'currentシンボリックリンク自体は変更しないでください。\n'
      + 'NeoForge本体のlibraries、server.jar、run.shはこのZIPに含まれず、WebGUI側のものを使用します。\n'
      + 'world、server.properties、ops/whitelist/ban情報、ログはこのZIPに含まれません。\n'
      + 'ロリポップ側のJavaは21または25を選択してください。メモリ量は管理画面の設定が使われます。\n',
      'utf8',
    );
    await createZip(stage, outputPath);
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
  await writeLolipopArchive({ sourceServer: serverPath, outputPath, manifest, overlaySources });
  console.log(`Created: ${outputPath}`);
}
