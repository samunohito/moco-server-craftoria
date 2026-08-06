import { mkdtemp } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeClientPackage } from './client-package.js';
import { validatePrismInstance } from './instance.js';
import { createZip, findResourceRoot, pathExists, removeOwnedScratch } from './lib.js';
import { overlayArchiveName, prepareOverlay } from './manifest.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

export interface ExportClientOptions {
  sourceInstance?: string;
  output?: string;
}

export async function exportClientOverlay({ sourceInstance, output }: ExportClientOptions = {}): Promise<void> {
  const resourceRoot = await findResourceRoot(scriptDirectory, 'overlay.template.json');
  const defaultInstance = path.resolve(resourceRoot, '..', '..');
  const { manifest, sources } = await prepareOverlay(resourceRoot);
  await validatePrismInstance(sourceInstance ?? defaultInstance, manifest.target);

  const packageName = overlayArchiveName(manifest, true);
  const outputPath = path.resolve(output ?? path.join(resourceRoot, 'dist', `${packageName}.zip`));
  if (await pathExists(outputPath)) throw new Error(`Output already exists: ${outputPath}`);

  const stage = await mkdtemp(path.join(os.tmpdir(), 'craftoria-client-export-'));
  try {
    await writeClientPackage(resourceRoot, path.join(stage, packageName), packageName, manifest, sources);
    await createZip(stage, outputPath, { executablePaths: [`${packageName}/install.sh`] });
    console.log(`Created client package: ${outputPath}`);
    console.log(`Additional mods: ${manifest.files.filter(({ kind }) => kind === 'mod').length}; payload files: ${sources.length}`);
  } finally {
    await removeOwnedScratch(stage);
  }
}
