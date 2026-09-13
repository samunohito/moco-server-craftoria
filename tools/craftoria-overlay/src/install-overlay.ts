import { randomUUID } from 'node:crypto';
import { copyFile, mkdir, readFile, realpath, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  assertSafeRelative,
  downloadFile,
  findResourceRoot,
  hashFile,
  pathExists,
  readJson,
  removeOwnedScratch,
  resolveInside,
} from './lib.js';
import { validateClientInstallation } from './instance.js';
import { readPreviouslyInstalled, writeInstalledState } from './installed-state.js';
import { prepareOverlay } from './manifest.js';
import type { OverlayFile, OverlayManifest, RemovedOverlayFile } from './types.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

interface InstallOverlayOptions {
  instancePath?: string;
  serverPath?: string;
  dryRun?: boolean;
  forceConflict?: boolean;
}

type InstallPlan = {
  action: 'Install' | 'Skip';
  entry: OverlayFile;
  destination: string;
  existingHash: string | null;
};

type RemovePlan = {
  action: 'Remove';
  entry: RemovedOverlayFile;
  destination: string;
  existingHash: string;
};

type OverlayPlan = InstallPlan | RemovePlan;

export function overlayFileAppliesToTarget(
  entry: OverlayFile,
  target: 'client' | 'server',
): boolean {
  return entry.side === undefined || entry.side === 'both' || entry.side === target;
}

async function backupFile(source: string, relative: string, backupRoot: string): Promise<void> {
  const backup = resolveInside(backupRoot, relative);
  await mkdir(path.dirname(backup), { recursive: true });
  await copyFile(source, backup);
}

function timestamp(): string {
  return new Date().toISOString().replace(/[-:]/gu, '').replace(/\.\d{3}Z$/u, 'Z').replace('T', '-');
}

export async function installOverlay({
  instancePath,
  serverPath,
  dryRun = false,
  forceConflict = false,
}: InstallOverlayOptions): Promise<void> {
  if (Boolean(instancePath) === Boolean(serverPath)) {
    throw new Error('Specify exactly one of --instance or --server.');
  }

  const resourceRoot = await findResourceRoot(scriptDirectory, 'overlay.template.json');
  const packagedManifest = path.join(resourceRoot, 'manifest.json');
  const manifest = await pathExists(packagedManifest)
    ? await readJson<OverlayManifest>(packagedManifest)
    : (await prepareOverlay(resourceRoot)).manifest;
  let root: string;

  if (instancePath !== undefined) {
    root = await validateClientInstallation(instancePath, manifest.target);
  } else {
    const resolvedServerPath = serverPath;
    if (resolvedServerPath === undefined) throw new Error('--server is required.');
    root = await realpath(path.resolve(resolvedServerPath));
    const serverConfigPath = path.join(root, 'server-setup-config.yaml');
    if (!await pathExists(serverConfigPath) || !await pathExists(path.join(root, 'mods'))) {
      throw new Error('The official Craftoria server base is not installed yet. Run startserver first, stop it, then apply the overlay.');
    }
    const serverConfig = await readFile(serverConfigPath, 'utf8');
    const expectedPack = `Craftoria-${manifest.target.managedPackVersion}.zip`;
    const expectedLoader = `loaderVersion: ${manifest.target.neoForge}`;
    if (!serverConfig.includes(expectedPack) || !serverConfig.includes(expectedLoader)) {
      throw new Error(
        `The server base is not Craftoria ${manifest.target.managedPackVersion} / NeoForge ${manifest.target.neoForge}.`,
      );
    }
  }

  root = path.resolve(root);
  const controlRoot = path.join(root, '.craftoria-overlay');
  const backupRoot = path.join(controlRoot, 'backups', timestamp());
  const stageRoot = path.join(controlRoot, 'staging', randomUUID());
  const plans: OverlayPlan[] = [];
  const previouslyInstalled = await readPreviouslyInstalled(controlRoot);
  const installTarget = serverPath === undefined ? 'client' : 'server';
  const applicableFiles = manifest.files.filter((entry) => overlayFileAppliesToTarget(entry, installTarget));

  for (const entry of applicableFiles) {
    const relative = assertSafeRelative(String(entry.path));
    const destination = resolveInside(root, relative);
    let existingHash: string | null = null;
    if (await pathExists(destination)) {
      existingHash = await hashFile(destination, entry.hashAlgorithm);
      if (existingHash === String(entry.hash).toLowerCase()) {
        plans.push({ action: 'Skip', entry, destination, existingHash });
        continue;
      }
      const allowed = (entry.expectedExistingHashes ?? []).includes(existingHash)
        || previouslyInstalled.get(relative) === existingHash;
      const policy = entry.replacePolicy ?? 'known-base-only';
      if (!allowed && policy !== 'backup' && !forceConflict) {
        throw new Error(`Conflict at ${relative} (hash ${existingHash}). Use --force-conflict only after reviewing it.`);
      }
    }
    plans.push({ action: 'Install', entry, destination, existingHash });
  }

  for (const entry of manifest.remove ?? []) {
    const relative = assertSafeRelative(String(entry.path));
    const destination = resolveInside(root, relative);
    if (await pathExists(destination)) {
      const existingHash = await hashFile(destination, entry.hashAlgorithm);
      if (existingHash !== String(entry.hash).toLowerCase() && !forceConflict) {
        throw new Error(`Refusing to remove an unexpected file at ${relative} (hash ${existingHash}).`);
      }
      plans.push({ action: 'Remove', entry, destination, existingHash });
    }
  }

  console.log(`Target: ${root}`);
  for (const plan of plans) console.log(`${plan.action.padEnd(8)} ${plan.entry.path}`);
  if (dryRun) return;

  await mkdir(stageRoot, { recursive: true });
  let backupMade = false;
  try {
    for (const plan of plans) {
      if (plan.action !== 'Install') continue;
      const staged = resolveInside(stageRoot, String(plan.entry.path));
      await mkdir(path.dirname(staged), { recursive: true });
      if (plan.entry.url !== undefined) await downloadFile(plan.entry.url, staged);
      else {
        if (plan.entry.payload === undefined) throw new Error(`Payload location is missing: ${plan.entry.path}`);
        const payload = resolveInside(resourceRoot, plan.entry.payload);
        if (!await pathExists(payload)) throw new Error(`Payload is missing: ${payload}`);
        await copyFile(payload, staged);
      }
      const actual = await hashFile(staged, plan.entry.hashAlgorithm);
      if (actual !== String(plan.entry.hash).toLowerCase()) {
        throw new Error(`Hash verification failed for ${plan.entry.path}: ${actual}`);
      }
    }

    for (const plan of plans) {
      if (plan.action !== 'Install') continue;
      if (await pathExists(plan.destination)) {
        await backupFile(plan.destination, String(plan.entry.path), backupRoot);
        backupMade = true;
      }
      await mkdir(path.dirname(plan.destination), { recursive: true });
      await copyFile(resolveInside(stageRoot, String(plan.entry.path)), plan.destination);
      const verified = await hashFile(plan.destination, plan.entry.hashAlgorithm);
      if (verified !== String(plan.entry.hash).toLowerCase()) {
        throw new Error(`Post-copy verification failed for ${plan.entry.path}.`);
      }
    }

    for (const plan of plans) {
      if (plan.action !== 'Remove') continue;
      await backupFile(plan.destination, String(plan.entry.path), backupRoot);
      backupMade = true;
      await rm(plan.destination, { force: true });
    }

    await writeInstalledState(controlRoot, { ...manifest, files: applicableFiles }, {
      installedAt: new Date().toISOString(),
      target: root,
      backup: backupMade ? backupRoot : null,
    });
    console.log(`Overlay ${manifest.addonVersion} installed successfully.`);
    if (backupMade) console.log(`Backup: ${backupRoot}`);
  } finally {
    await removeOwnedScratch(stageRoot);
  }
}
