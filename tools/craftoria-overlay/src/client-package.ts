import { chmod, copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { assertSafeRelative, hashFile, resolveInside, writeJson } from './lib.js';
import { portableStateText } from './installed-state.js';
import type { PayloadSource } from './payload.js';
import type { OverlayFile, OverlayManifest, RemovedOverlayFile } from './types.js';

const planHeader = ['action', 'kind', 'policy', 'algorithm', 'hash', 'path', 'source', 'expected'].join('\t');

function field(value: unknown, label: string): string {
  const text = String(value);
  if (text === '' || /[\t\r\n]/u.test(text)) throw new Error(`${label} is not portable installer data: ${text}`);
  return text;
}

function portableRelative(value: unknown, label: string): string {
  const relative = assertSafeRelative(field(value, label)).replaceAll('\\', '/');
  if (relative.split('/').some((segment) => segment === '' || segment === '.')) {
    throw new Error(`${label} contains an unsupported path segment: ${relative}`);
  }
  return relative;
}

function validateHash(entry: OverlayFile | RemovedOverlayFile): void {
  const length = entry.hashAlgorithm === 'SHA256' ? 64 : 128;
  if (!new RegExp(`^[0-9a-f]{${length}}$`, 'u').test(String(entry.hash).toLowerCase())) {
    throw new Error(`Invalid ${entry.hashAlgorithm} for ${entry.path}: ${entry.hash}`);
  }
  if ('expectedExistingHashes' in entry) {
    for (const expected of entry.expectedExistingHashes ?? []) {
      if (!new RegExp(`^[0-9a-f]{${length}}$`, 'u').test(expected.toLowerCase())) {
        throw new Error(`Invalid expected ${entry.hashAlgorithm} for ${entry.path}: ${expected}`);
      }
    }
  }
}

export function clientInstallPlan(manifest: OverlayManifest): string {
  const lines = [planHeader];
  for (const entry of manifest.files) {
    validateHash(entry);
    const relative = portableRelative(entry.path, 'Overlay path');
    let source: string;
    if (entry.url !== undefined) {
      const url = new URL(entry.url);
      if (url.protocol !== 'https:') throw new Error(`Client downloads must use HTTPS: ${entry.url}`);
      source = `url:${entry.url}`;
    } else {
      if (entry.payload === undefined) throw new Error(`Payload location is missing: ${relative}`);
      source = `payload:${portableRelative(entry.payload, 'Payload path')}`;
    }
    lines.push([
      'file',
      field(entry.kind, 'Overlay kind'),
      field(entry.replacePolicy ?? 'known-base-only', 'Replace policy'),
      field(entry.hashAlgorithm, 'Hash algorithm'),
      field(String(entry.hash).toLowerCase(), 'Hash'),
      field(relative, 'Overlay path'),
      field(source, 'Installer source'),
      field((entry.expectedExistingHashes ?? []).map((hash) => hash.toLowerCase()).join(',') || '-', 'Expected hashes'),
    ].join('\t'));
  }
  for (const entry of manifest.remove ?? []) {
    validateHash(entry);
    lines.push([
      'remove',
      '-',
      '-',
      field(entry.hashAlgorithm, 'Hash algorithm'),
      field(String(entry.hash).toLowerCase(), 'Hash'),
      portableRelative(entry.path, 'Removed path'),
      '-',
      '-',
    ].join('\t'));
  }
  return `${lines.join('\n')}\n`;
}

function replacements(manifest: OverlayManifest, packageName: string): Record<string, string> {
  return {
    '@@ADDON_VERSION@@': manifest.addonVersion,
    '@@PACKAGE_NAME@@': packageName,
    '@@MANAGED_PACK_ID@@': manifest.target.managedPackId,
    '@@MANAGED_PACK_VERSION_ID@@': manifest.target.managedPackVersionId,
    '@@MANAGED_PACK_VERSION@@': manifest.target.managedPackVersion,
    '@@MINECRAFT@@': manifest.target.minecraft,
    '@@NEOFORGE@@': manifest.target.neoForge,
  };
}

async function renderTemplate(
  templateRoot: string,
  name: string,
  values: Record<string, string>,
): Promise<string> {
  let rendered = await readFile(path.join(templateRoot, name), 'utf8');
  for (const [token, value] of Object.entries(values)) rendered = rendered.replaceAll(token, value);
  if (/@@[A-Z0-9_]+@@/u.test(rendered)) throw new Error(`Unresolved client template token in ${name}.`);
  return rendered;
}

export async function writeClientPackage(
  resourceRoot: string,
  packageRoot: string,
  packageName: string,
  manifest: OverlayManifest,
  sources: PayloadSource[],
): Promise<void> {
  const templateRoot = path.join(resourceRoot, 'client-templates');
  const installerRoot = path.join(packageRoot, '.installer');
  const expectedPayloads = new Set(
    manifest.files
      .filter((entry) => entry.payload !== undefined)
      .map((entry) => portableRelative(entry.path, 'Overlay path')),
  );
  const payloadEntries = new Map(
    manifest.files
      .filter((entry) => entry.payload !== undefined)
      .map((entry) => [portableRelative(entry.path, 'Overlay path'), entry]),
  );
  const providedPayloads = new Set(sources.map((entry) => portableRelative(entry.path, 'Payload source path')));
  for (const entry of manifest.files) {
    if (entry.payload === undefined) continue;
    const relative = portableRelative(entry.path, 'Overlay path');
    if (entry.payload.replaceAll('\\', '/') !== `payload/${relative}`) {
      throw new Error(`Client payload must mirror its minecraft path: ${entry.payload}`);
    }
    if (!providedPayloads.has(relative)) throw new Error(`Client payload source is missing: ${relative}`);
  }
  for (const relative of providedPayloads) {
    if (!expectedPayloads.has(relative)) throw new Error(`Unused client payload source: ${relative}`);
  }
  await mkdir(installerRoot, { recursive: true });
  const values = replacements(manifest, packageName);

  const bat = (await renderTemplate(templateRoot, 'install.bat', values)).replace(/\r?\n/gu, '\r\n');
  const powerShell = (await renderTemplate(templateRoot, 'install.ps1', values)).replace(/\r?\n/gu, '\r\n');
  const shell = (await renderTemplate(templateRoot, 'install.sh', values)).replace(/\r\n/gu, '\n');
  const readme = await renderTemplate(templateRoot, 'README.md', values);
  await writeFile(path.join(packageRoot, 'install.bat'), bat, 'utf8');
  await writeFile(path.join(installerRoot, 'install.ps1'), powerShell, 'utf8');
  await writeFile(path.join(packageRoot, 'install.sh'), shell, 'utf8');
  await chmod(path.join(packageRoot, 'install.sh'), 0o755);
  await writeFile(path.join(packageRoot, 'README.md'), readme, 'utf8');
  await writeJson(path.join(packageRoot, 'manifest.json'), manifest);
  await writeFile(path.join(installerRoot, 'install-plan.tsv'), clientInstallPlan(manifest), 'utf8');
  await writeFile(path.join(installerRoot, 'installed-files.tsv'), portableStateText(manifest), 'utf8');
  await writeJson(path.join(installerRoot, 'installed-state.template.json'), {
    addonVersion: manifest.addonVersion,
    installedAt: null,
    target: null,
    backup: null,
    files: manifest.files.map(({ path: filePath, hash, hashAlgorithm }) => ({ path: filePath, hash, hashAlgorithm })),
  });

  for (const entry of sources) {
    const destination = resolveInside(path.join(packageRoot, 'payload'), entry.path);
    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(entry.source, destination);
    const manifestEntry = payloadEntries.get(entry.path.replaceAll('\\', '/'));
    if (manifestEntry === undefined) throw new Error(`Payload manifest entry is missing: ${entry.path}`);
    const actual = await hashFile(destination, manifestEntry.hashAlgorithm);
    if (actual !== manifestEntry.hash.toLowerCase()) {
      throw new Error(`Payload changed while exporting ${entry.path}: ${actual}`);
    }
  }
}
