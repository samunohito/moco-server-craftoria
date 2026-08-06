import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validatePrismInstance } from './instance.js';
import { findResourceRoot, hashFile, pathExists, readJson, resolveInside, writeJson } from './lib.js';
import { assertPayloadPath, assertRegularFile, payloadSources, rawPayloadPolicy } from './payload.js';
import { refreshProbeTypingSnapshot } from './probe-typings.js';
import type { OverlayManifest } from './types.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

interface DevOptions {
  instancePath?: string;
  dryRun?: boolean;
  forceConflict?: boolean;
}

interface DevState {
  schemaVersion: number;
  syncedAt: string;
  files: Record<string, string>;
}

async function context(instancePath?: string): Promise<{ resourceRoot: string; minecraft: string }> {
  const resourceRoot = await findResourceRoot(scriptDirectory, 'payload-policy.json');
  const manifest = await readJson<OverlayManifest>(path.join(resourceRoot, 'overlay.template.json'));
  const defaultInstance = path.resolve(resourceRoot, '..', '..');
  const instance = await validatePrismInstance(instancePath ?? defaultInstance, manifest.target);
  return { resourceRoot, minecraft: path.join(instance, 'minecraft') };
}

function timestamp(): string {
  return new Date().toISOString().replace(/[-:]/gu, '').replace(/\.\d{3}Z$/u, 'Z').replace('T', '-');
}

async function readDevState(minecraft: string): Promise<DevState | null> {
  const statePath = path.join(minecraft, '.craftoria-overlay', 'dev-state.json');
  if (!await pathExists(statePath)) return null;
  return await readJson<DevState>(statePath);
}

export async function syncPayload({ instancePath, dryRun = false, forceConflict = false }: DevOptions = {}): Promise<void> {
  const { resourceRoot, minecraft } = await context(instancePath);
  const sources = await payloadSources(resourceRoot);
  const previous = await readDevState(minecraft);
  const backupRoot = path.join(minecraft, '.craftoria-overlay', 'backups', `dev-${timestamp()}`);
  const nextFiles: Record<string, string> = {};
  const plans: Array<{ action: 'Install' | 'Skip'; path: string; source: string; destination: string; hash: string; existing: string | null }> = [];

  for (const entry of sources) {
    const destination = resolveInside(minecraft, entry.path);
    const hash = await hashFile(entry.source, entry.hashAlgorithm);
    let existing: string | null = null;
    if (await pathExists(destination)) existing = await hashFile(destination, entry.hashAlgorithm);
    if (existing === hash) {
      plans.push({ action: 'Skip', path: entry.path, source: entry.source, destination, hash, existing });
      nextFiles[entry.path] = hash;
      continue;
    }
    const previouslyOwned = existing !== null && previous?.files[entry.path] === existing;
    const expectedBase = existing !== null && entry.expectedExistingHashes.includes(existing);
    if (existing !== null && entry.replacePolicy !== 'backup' && !previouslyOwned && !expectedBase && !forceConflict) {
      throw new Error(`Conflict at ${entry.path} (hash ${existing}). Review it or use --force-conflict.`);
    }
    plans.push({ action: 'Install', path: entry.path, source: entry.source, destination, hash, existing });
    nextFiles[entry.path] = hash;
  }

  console.log(`Target: ${minecraft}`);
  for (const plan of plans) console.log(`${plan.action.padEnd(8)} ${plan.path}`);
  if (dryRun) return;

  let backupMade = false;
  for (const plan of plans) {
    if (plan.action !== 'Install') continue;
    if (plan.existing !== null) {
      const backup = resolveInside(backupRoot, plan.path);
      await mkdir(path.dirname(backup), { recursive: true });
      await copyFile(plan.destination, backup);
      backupMade = true;
    }
    await mkdir(path.dirname(plan.destination), { recursive: true });
    await copyFile(plan.source, plan.destination);
    if (await hashFile(plan.destination) !== plan.hash) throw new Error(`Post-copy verification failed: ${plan.path}`);
  }

  await writeJson(path.join(minecraft, '.craftoria-overlay', 'dev-state.json'), {
    schemaVersion: 1,
    syncedAt: new Date().toISOString(),
    files: nextFiles,
  } satisfies DevState);
  console.log('Payload synchronized successfully.');
  if (backupMade) console.log(`Backup: ${backupRoot}`);
}

export async function diffPayload({ instancePath }: Pick<DevOptions, 'instancePath'> = {}): Promise<void> {
  const { resourceRoot, minecraft } = await context(instancePath);
  const sources = await payloadSources(resourceRoot);
  let differences = 0;
  console.log(`Target: ${minecraft}`);
  for (const entry of sources) {
    const destination = resolveInside(minecraft, entry.path);
    if (!await pathExists(destination)) {
      console.log(`MISSING  ${entry.path}`);
      differences += 1;
      continue;
    }
    const [sourceHash, destinationHash] = await Promise.all([hashFile(entry.source), hashFile(destination)]);
    const status = sourceHash === destinationHash ? 'MATCH' : 'MODIFIED';
    console.log(`${status.padEnd(8)} ${entry.path}`);
    if (status !== 'MATCH') differences += 1;
  }
  console.log(differences === 0 ? 'No differences.' : `${differences} difference(s).`);
}

interface CaptureOptions extends Pick<DevOptions, 'instancePath' | 'dryRun'> {
  paths: string[];
  force?: boolean;
}

export async function capturePayload({ paths, instancePath, dryRun = false, force = false }: CaptureOptions): Promise<void> {
  const { resourceRoot, minecraft } = await context(instancePath);
  const payloadRoot = path.join(resourceRoot, 'payload');
  const policy = await rawPayloadPolicy(resourceRoot);
  const captures: Array<{ relative: string; source: string; destination: string; hash: string }> = [];

  for (const input of paths) {
    const relative = assertPayloadPath(input.replaceAll('\\', '/'));
    const source = resolveInside(minecraft, relative);
    if (!await pathExists(source)) throw new Error(`Source file does not exist: ${source}`);
    await assertRegularFile(source);
    const destination = resolveInside(payloadRoot, relative);
    const hash = await hashFile(source);
    if (await pathExists(destination)) {
      const existingPayloadHash = await hashFile(destination);
      if (existingPayloadHash !== hash && !force) {
        throw new Error(`Payload already differs at ${relative}. Use --force only after reviewing both files.`);
      }
    }
    captures.push({ relative, source, destination, hash });
  }

  for (const capture of captures) console.log(`Capture  ${capture.relative}`);
  if (dryRun) return;

  for (const capture of captures) {
    await mkdir(path.dirname(capture.destination), { recursive: true });
    await copyFile(capture.source, capture.destination);
    if (capture.relative.startsWith('kubejs/')) {
      const current = policy.files[capture.relative] ?? {};
      policy.files[capture.relative] = {
        ...current,
        replacePolicy: current.replacePolicy ?? 'known-base-only',
        expectedExistingHashes: [...new Set([...(current.expectedExistingHashes ?? []), capture.hash])].sort(),
      };
    }
  }
  await writeJson(path.join(resourceRoot, 'payload-policy.json'), policy);
  console.log('Captured into the tracked payload.');
}

interface CaptureProbeTypingsOptions extends Pick<DevOptions, 'instancePath' | 'dryRun'> {}

type ProbeScriptSide = 'client' | 'server' | 'startup';

function probeJsConfig(side: ProbeScriptSide): string {
  return `${JSON.stringify({
    compilerOptions: {
      plugins: [],
      checkJs: false,
      skipLibCheck: true,
      target: 'ES2022',
      lib: ['ES2022'],
      module: 'commonjs',
      paths: {
        '@package': ['../probe/@package'],
        '@package/*': ['../probe/@package/*'],
        [`@side-only/${side}`]: [`../probe/@side-only/${side}`],
        [`@side-only/${side}/*`]: [`../probe/@side-only/${side}/*`],
        '@special': ['../probe/@special'],
        '@special/*': ['../probe/@special/*'],
      },
    },
    typeAcquisition: { enable: false },
    include: [
      './**/*.js',
      './**/*.d.ts',
      '../probe/@package/**/*.d.ts',
      `../probe/@side-only/${side}/**/*.d.ts`,
      '../probe/@special/**/*.d.ts',
    ],
  }, null, 2)}\n`;
}

async function detectedModVersion(modsRoot: string, pattern: RegExp): Promise<string> {
  const matches = (await readdir(modsRoot))
    .map((name) => pattern.exec(name)?.[1])
    .filter((version): version is string => version !== undefined);
  if (matches.length > 1) throw new Error(`Multiple matching mod JARs found in ${modsRoot}: ${matches.join(', ')}`);
  return matches[0] ?? 'not-detected';
}

export async function captureProbeTypings({
  instancePath,
  dryRun = false,
}: CaptureProbeTypingsOptions = {}): Promise<void> {
  const { resourceRoot, minecraft } = await context(instancePath);
  const payloadRoot = path.join(resourceRoot, 'payload');
  const probeRoot = path.join(minecraft, '.probe');
  const destinationRoot = path.join(payloadRoot, 'kubejs', 'probe');
  const modsRoot = path.join(minecraft, 'mods');
  const manifest = await readJson<OverlayManifest>(path.join(resourceRoot, 'overlay.template.json'));
  const [probeVersion, kubeJsVersion] = await Promise.all([
    detectedModVersion(modsRoot, /^ProbeJS-(.+)\.jar$/iu),
    detectedModVersion(modsRoot, /^kubejs-neoforge-(.+)\.jar$/iu),
  ]);
  const readme = `# Craftoria ProbeJS typing snapshot

Generated with ProbeJS ${probeVersion} for Craftoria ${manifest.target.managedPackVersion}, Minecraft ${manifest.target.minecraft},
NeoForge ${manifest.target.neoForge}, and KubeJS ${kubeJsVersion}.

Only the generated TypeScript declarations are distributed. ProbeJS caches,
source JARs, workspace snippets, and runtime logs are intentionally excluded.

The declarations were relocated from ProbeJS 8's \`.probe/\` directory to
\`kubejs/probe/\`; the adjacent script-side \`jsconfig.json\` files contain the
corresponding relative path mappings.
`;
  const result = await refreshProbeTypingSnapshot({
    sourceRoot: probeRoot,
    destinationRoot,
    readme,
    dryRun,
  });

  console.log(`ProbeJS source: ${probeRoot}`);
  console.log(`Typing snapshot: ${result.declarations} declarations, ${result.bytes} bytes`);
  console.log(`Compatibility fixes: ${result.compatibilityFixes}`);
  for (const side of ['client', 'server', 'startup'] as const) {
    console.log(`Capture  kubejs/${side}_scripts/jsconfig.json`);
  }
  if (dryRun) return;

  const policy = await rawPayloadPolicy(resourceRoot);
  for (const side of ['client', 'server', 'startup'] as const) {
    const relative = `kubejs/${side}_scripts/jsconfig.json`;
    const destination = resolveInside(payloadRoot, relative);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, probeJsConfig(side), 'utf8');

    const liveConfig = resolveInside(minecraft, relative);
    if (await pathExists(liveConfig)) {
      await assertRegularFile(liveConfig);
      const liveHash = await hashFile(liveConfig);
      const current = policy.files[relative] ?? {};
      policy.files[relative] = {
        ...current,
        replacePolicy: current.replacePolicy ?? 'known-base-only',
        expectedExistingHashes: [...new Set([...(current.expectedExistingHashes ?? []), liveHash])].sort(),
      };
    }
  }
  await writeJson(path.join(resourceRoot, 'payload-policy.json'), policy);
  console.log('ProbeJS typings captured into the tracked payload.');
}
