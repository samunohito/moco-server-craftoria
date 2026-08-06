import { readFile, realpath } from 'node:fs/promises';
import path from 'node:path';
import { pathExists, readJson } from './lib.js';
import type { MmcPack, OverlayManifest } from './types.js';

type Target = OverlayManifest['target'];

export async function validatePrismInstance(instancePath: string, target: Target): Promise<string> {
  const instance = await realpath(path.resolve(instancePath));
  const configPath = path.join(instance, 'instance.cfg');
  const mmcPath = path.join(instance, 'mmc-pack.json');
  if (!await pathExists(configPath) || !await pathExists(mmcPath)) {
    throw new Error(`Not a PrismLauncher instance: ${instance}`);
  }

  const configText = await readFile(configPath, 'utf8');
  for (const required of [
    `ManagedPackID=${target.managedPackId}`,
    `ManagedPackVersionID=${target.managedPackVersionId}`,
    `ManagedPackVersionName=${target.managedPackVersion}`,
  ]) {
    if (!configText.split(/\r?\n/u).includes(required)) {
      throw new Error(`Unsupported instance; required marker is missing: ${required}`);
    }
  }

  const mmcPack = await readJson<MmcPack>(mmcPath);
  if (!mmcPack.components?.some(({ uid, version }) => uid === 'net.minecraft' && version === target.minecraft)) {
    throw new Error(`Expected Minecraft ${target.minecraft}.`);
  }
  if (!mmcPack.components?.some(({ uid, version }) => uid === 'net.neoforged' && version === target.neoForge)) {
    throw new Error(`Expected NeoForge ${target.neoForge}.`);
  }
  return instance;
}

