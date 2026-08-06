import { randomUUID } from 'node:crypto';
import { copyFile, mkdir, mkdtemp, readFile, readdir, rename, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathExists, resolveInside } from './lib.js';

const declarationRoots = ['@package', '@side-only', '@special'] as const;
const sfmlResourceLimit = '@package/ca/teamdman/sfml/ast/index.d.ts';
const invalidSfmlTuple = '| [with?: $With_, limit?: $Limit_, resourceIds?: $ResourceIdSet, ]';
const fixedSfmlTuple = '| [withClause?: $With_, limit?: $Limit_, resourceIds?: $ResourceIdSet, ]';

export interface ProbeTypingSnapshotOptions {
  sourceRoot: string;
  destinationRoot: string;
  readme: string;
  dryRun?: boolean;
}

export interface ProbeTypingSnapshotResult {
  declarations: number;
  bytes: number;
  compatibilityFixes: number;
}

interface DeclarationFile {
  relative: string;
  source: string;
  bytes: number;
}

async function declarationFiles(sourceRoot: string): Promise<DeclarationFile[]> {
  const files: DeclarationFile[] = [];

  async function visit(rootName: string, current: string): Promise<void> {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const source = path.join(current, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`ProbeJS typing snapshot cannot contain symbolic links: ${source}`);
      if (entry.isDirectory()) {
        await visit(rootName, source);
      } else if (entry.isFile()) {
        if (!entry.name.endsWith('.d.ts')) throw new Error(`Unexpected ProbeJS typing file: ${source}`);
        const relativeWithinRoot = path.relative(path.join(sourceRoot, rootName), source).split(path.sep).join('/');
        files.push({
          relative: `${rootName}/${relativeWithinRoot}`,
          source,
          bytes: (await stat(source)).size,
        });
      }
    }
  }

  for (const rootName of declarationRoots) {
    const root = path.join(sourceRoot, rootName);
    if (!await pathExists(root) || !(await stat(root)).isDirectory()) {
      throw new Error(`ProbeJS declaration root is missing: ${root}`);
    }
    await visit(rootName, root);
  }

  if (files.length === 0) throw new Error(`No ProbeJS declarations were found under: ${sourceRoot}`);
  return files.sort((left, right) => left.relative.localeCompare(right.relative));
}

async function compatibilityFixCount(files: DeclarationFile[]): Promise<number> {
  const sfml = files.find(({ relative }) => relative === sfmlResourceLimit);
  if (sfml === undefined) return 0;
  const declaration = await readFile(sfml.source, 'utf8');
  return declaration.includes(invalidSfmlTuple) ? 1 : 0;
}

export async function refreshProbeTypingSnapshot({
  sourceRoot,
  destinationRoot,
  readme,
  dryRun = false,
}: ProbeTypingSnapshotOptions): Promise<ProbeTypingSnapshotResult> {
  const files = await declarationFiles(sourceRoot);
  const result = {
    declarations: files.length,
    bytes: files.reduce((total, file) => total + file.bytes, 0),
    compatibilityFixes: await compatibilityFixCount(files),
  };
  if (dryRun) return result;

  const destinationParent = path.dirname(destinationRoot);
  await mkdir(destinationParent, { recursive: true });
  const stage = await mkdtemp(path.join(destinationParent, '.probe-stage-'));
  const backup = `${destinationRoot}.previous-${randomUUID()}`;
  let movedExisting = false;

  try {
    for (const file of files) {
      const destination = resolveInside(stage, file.relative);
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(file.source, destination);
    }

    if (result.compatibilityFixes > 0) {
      const sfml = resolveInside(stage, sfmlResourceLimit);
      const declaration = await readFile(sfml, 'utf8');
      await writeFile(sfml, declaration.replace(invalidSfmlTuple, fixedSfmlTuple), 'utf8');
    }
    await writeFile(path.join(stage, 'README.md'), readme, 'utf8');

    if (await pathExists(destinationRoot)) {
      await rename(destinationRoot, backup);
      movedExisting = true;
    }
    await rename(stage, destinationRoot);
    if (movedExisting) await rm(backup, { recursive: true, force: true });
  } catch (error: unknown) {
    if (await pathExists(stage)) await rm(stage, { recursive: true, force: true });
    if (movedExisting && !await pathExists(destinationRoot) && await pathExists(backup)) {
      await rename(backup, destinationRoot);
    }
    throw error;
  }

  return result;
}
