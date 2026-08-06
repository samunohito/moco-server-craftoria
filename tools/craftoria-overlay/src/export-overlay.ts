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
import { validatePrismInstance } from './instance.js';
import { overlayArchiveName, prepareOverlay } from './manifest.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

export interface ExportOverlayOptions {
  sourceInstance?: string;
  output?: string;
}

export async function exportOverlay({ sourceInstance, output }: ExportOverlayOptions = {}): Promise<void> {
  const resourceRoot = await findResourceRoot(scriptDirectory, 'overlay.template.json');
  const defaultInstance = path.resolve(resourceRoot, '..', '..');
  const { manifest, sources } = await prepareOverlay(resourceRoot);
  const instance = await validatePrismInstance(sourceInstance ?? defaultInstance, manifest.target);
  const outputPath = path.resolve(output ?? path.join(instance, `${overlayArchiveName(manifest)}.zip`));

  if (await pathExists(outputPath)) throw new Error(`Output already exists: ${outputPath}`);
  const stage = await mkdtemp(path.join(os.tmpdir(), 'craftoria-overlay-export-'));

  try {
    await cp(path.join(resourceRoot, 'src'), path.join(stage, 'src'), { recursive: true });
    for (const projectFile of ['package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'tsconfig.json']) {
      await copyFile(path.join(resourceRoot, projectFile), path.join(stage, projectFile));
    }
    await copyFile(path.join(resourceRoot, 'payload-policy.json'), path.join(stage, 'payload-policy.json'));
    await copyFile(path.join(resourceRoot, 'overlay.template.json'), path.join(stage, 'overlay.template.json'));
    await copyFile(path.join(resourceRoot, 'README.md'), path.join(stage, 'README.md'));
    await cp(path.join(resourceRoot, 'server-bootstrap'), path.join(stage, 'server-bootstrap'), { recursive: true });
    await cp(path.join(resourceRoot, 'client-templates'), path.join(stage, 'client-templates'), { recursive: true });

    for (const entry of sources) {
      const destination = resolveInside(path.join(stage, 'payload'), entry.path);
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(entry.source, destination);
    }

    await writeJson(path.join(stage, 'manifest.json'), manifest);
    await createZip(stage, outputPath);
    console.log(`Created: ${outputPath}`);
    const kubeCount = sources.filter(({ kind }) => kind === 'kubejs').length;
    console.log(`Included KubeJS files: ${kubeCount}; config files: ${sources.length - kubeCount}`);
  } finally {
    await removeOwnedScratch(stage);
  }
}
