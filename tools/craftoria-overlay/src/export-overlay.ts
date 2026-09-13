import { copyFile, cp, mkdir, mkdtemp } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createZip,
  findResourceRoot,
  pathExists,
  removeOwnedScratch,
  resolveInside,
  writeJson,
} from './lib.js';
import { validateClientInstallation } from './instance.js';
import { overlayArchiveName, prepareOverlay } from './manifest.js';
import type { OverlayManifest } from './types.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

export interface ExportOverlayOptions {
  sourceInstance?: string;
  output?: string;
}

export function overlayOutputPath(
  resourceRoot: string,
  manifest: OverlayManifest,
  output?: string,
): string {
  return path.resolve(output ?? path.join(resourceRoot, 'dist', `${overlayArchiveName(manifest)}.zip`));
}

export async function exportOverlay({ sourceInstance, output }: ExportOverlayOptions = {}): Promise<void> {
  const resourceRoot = await findResourceRoot(scriptDirectory, 'overlay.template.json');
  const defaultInstance = path.resolve(resourceRoot, '..', '..');
  const { manifest, sources } = await prepareOverlay(resourceRoot);
  await validateClientInstallation(sourceInstance ?? defaultInstance, manifest.target);
  const outputPath = overlayOutputPath(resourceRoot, manifest, output);
  const packageName = overlayArchiveName(manifest);

  if (await pathExists(outputPath)) throw new Error(`Output already exists: ${outputPath}`);
  const stage = await mkdtemp(path.join(os.tmpdir(), 'craftoria-overlay-export-'));
  const packageRoot = path.join(stage, packageName);

  try {
    await mkdir(packageRoot, { recursive: true });
    await cp(path.join(resourceRoot, 'src'), path.join(packageRoot, 'src'), { recursive: true });
    for (const projectFile of ['package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'tsconfig.json']) {
      await copyFile(path.join(resourceRoot, projectFile), path.join(packageRoot, projectFile));
    }
    await copyFile(path.join(resourceRoot, 'payload-policy.json'), path.join(packageRoot, 'payload-policy.json'));
    await copyFile(path.join(resourceRoot, 'overlay.template.json'), path.join(packageRoot, 'overlay.template.json'));
    await copyFile(path.join(resourceRoot, 'README.md'), path.join(packageRoot, 'README.md'));
    await cp(path.join(resourceRoot, 'server-bootstrap'), path.join(packageRoot, 'server-bootstrap'), { recursive: true });
    await cp(path.join(resourceRoot, 'client-templates'), path.join(packageRoot, 'client-templates'), { recursive: true });

    for (const entry of sources) {
      const destination = resolveInside(path.join(packageRoot, 'payload'), entry.path);
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(entry.source, destination);
    }

    await writeJson(path.join(packageRoot, 'manifest.json'), manifest);
    await createZip(stage, outputPath);
    console.log(`Created: ${outputPath}`);
    const kubeCount = sources.filter(({ kind }) => kind === 'kubejs').length;
    const configCount = sources.filter(({ kind }) => kind === 'config').length;
    const bundledModCount = sources.filter(({ kind }) => kind === 'mod').length;
    console.log(`Included KubeJS files: ${kubeCount}; config files: ${configCount}; bundled mods: ${bundledModCount}`);
  } finally {
    await removeOwnedScratch(stage);
  }
}
