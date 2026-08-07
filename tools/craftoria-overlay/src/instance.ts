import { realpath, stat } from 'node:fs/promises';
import path from 'node:path';
import { pathExists, readJson } from './lib.js';
import type { OverlayManifest } from './types.js';

type Target = OverlayManifest['target'];

interface VersionInfo {
  version?: unknown;
}

async function assertDirectory(directory: string): Promise<void> {
  if (!await pathExists(directory) || !(await stat(directory)).isDirectory()) {
    throw new Error(`Required Craftoria directory is missing: ${directory}`);
  }
}

export async function validateClientInstallation(inputPath: string, target: Target): Promise<string> {
  const input = await realpath(path.resolve(inputPath));
  let minecraft: string | null = null;
  for (const candidate of [input, path.join(input, 'minecraft')]) {
    if (await pathExists(path.join(candidate, 'version_info.json'))) {
      minecraft = await realpath(candidate);
      break;
    }
  }
  if (minecraft === null) {
    throw new Error(
      `Not a Craftoria game directory: ${input}. Expected version_info.json here or below minecraft/.`,
    );
  }

  const versionInfo = await readJson<VersionInfo>(path.join(minecraft, 'version_info.json'));
  if (String(versionInfo.version) !== target.managedPackVersion) {
    throw new Error(`Expected Craftoria ${target.managedPackVersion}.`);
  }
  for (const directory of ['mods', 'config', 'kubejs']) await assertDirectory(path.join(minecraft, directory));

  return minecraft;
}
