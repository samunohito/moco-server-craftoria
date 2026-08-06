import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathExists, readJson, writeJson } from './lib.js';
import type { OverlayManifest } from './types.js';

export const portableStateFileName = 'installed-files.tsv';

interface InstalledState {
  files?: Array<{ path: string; hash: string; hashAlgorithm: string }>;
}

function assertPortableField(value: string, label: string): string {
  if (/[\t\r\n]/u.test(value)) throw new Error(`${label} cannot contain tabs or newlines: ${value}`);
  return value;
}

export function portableStateText(manifest: OverlayManifest): string {
  const lines = ['algorithm\thash\tpath'];
  for (const entry of manifest.files) {
    lines.push([
      assertPortableField(String(entry.hashAlgorithm), 'Hash algorithm'),
      assertPortableField(String(entry.hash).toLowerCase(), 'Hash'),
      assertPortableField(String(entry.path).replaceAll('\\', '/'), 'Overlay path'),
    ].join('\t'));
  }
  return `${lines.join('\n')}\n`;
}

export async function readPreviouslyInstalled(controlRoot: string): Promise<Map<string, string>> {
  const installed = new Map<string, string>();
  const jsonPath = path.join(controlRoot, 'installed-state.json');
  if (await pathExists(jsonPath)) {
    const state = await readJson<InstalledState>(jsonPath);
    for (const file of state.files ?? []) {
      installed.set(String(file.path).replaceAll('\\', '/'), String(file.hash).toLowerCase());
    }
  }

  const portablePath = path.join(controlRoot, portableStateFileName);
  if (await pathExists(portablePath)) {
    const lines = (await readFile(portablePath, 'utf8')).split(/\r?\n/u);
    for (const [index, line] of lines.entries()) {
      if (line === '' || (index === 0 && line === 'algorithm\thash\tpath')) continue;
      const fields = line.split('\t');
      if (fields.length !== 3) throw new Error(`Invalid portable installed state at line ${index + 1}.`);
      const hash = fields[1];
      const filePath = fields[2];
      if (hash === undefined || filePath === undefined) throw new Error(`Invalid portable installed state at line ${index + 1}.`);
      installed.set(filePath.replaceAll('\\', '/'), hash.toLowerCase());
    }
  }
  return installed;
}

export async function writeInstalledState(
  controlRoot: string,
  manifest: OverlayManifest,
  metadata: { installedAt: string; target: string; backup: string | null },
): Promise<void> {
  await writeJson(path.join(controlRoot, 'installed-state.json'), {
    addonVersion: manifest.addonVersion,
    ...metadata,
    files: manifest.files.map(({ path: filePath, hash, hashAlgorithm }) => ({
      path: filePath,
      hash,
      hashAlgorithm,
    })),
  });
  await writeFile(path.join(controlRoot, portableStateFileName), portableStateText(manifest), 'utf8');
}
