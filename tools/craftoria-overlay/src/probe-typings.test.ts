import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { pathExists } from './lib.js';
import { refreshProbeTypingSnapshot } from './probe-typings.js';

async function fixture(): Promise<{ root: string; source: string; destination: string }> {
  const root = await mkdtemp(path.join(os.tmpdir(), 'craftoria-probe-typings-'));
  const source = path.join(root, '.probe');
  const destination = path.join(root, 'payload', 'kubejs', 'probe');
  for (const directory of ['@package/ca/teamdman/sfml/ast', '@side-only/client', '@special/types', 'source_jars']) {
    await mkdir(path.join(source, directory), { recursive: true });
  }
  await writeFile(
    path.join(source, '@package/ca/teamdman/sfml/ast/index.d.ts'),
    'export type Limit = {} | [with?: $With_, limit?: $Limit_, resourceIds?: $ResourceIdSet, ];\n',
  );
  await writeFile(path.join(source, '@side-only/client/index.d.ts'), 'export type ClientOnly = true;\n');
  await writeFile(path.join(source, '@special/types/index.d.ts'), 'export type Special = string;\n');
  await writeFile(path.join(source, 'source_jars/cache.jar'), 'not distributed\n');
  return { root, source, destination };
}

test('refreshes only ProbeJS declarations and applies the known TypeScript compatibility fix', async (context) => {
  const { root, source, destination } = await fixture();
  context.after(async () => await rm(root, { recursive: true, force: true }));
  await mkdir(destination, { recursive: true });
  await writeFile(path.join(destination, 'stale.d.ts'), 'stale\n');

  const result = await refreshProbeTypingSnapshot({
    sourceRoot: source,
    destinationRoot: destination,
    readme: '# snapshot\n',
  });

  assert.equal(result.declarations, 3);
  assert.ok(result.bytes > 0);
  assert.equal(result.compatibilityFixes, 1);
  assert.equal(await pathExists(path.join(destination, 'stale.d.ts')), false);
  assert.equal(await pathExists(path.join(destination, 'source_jars/cache.jar')), false);
  assert.equal(await readFile(path.join(destination, 'README.md'), 'utf8'), '# snapshot\n');
  assert.match(
    await readFile(path.join(destination, '@package/ca/teamdman/sfml/ast/index.d.ts'), 'utf8'),
    /\[withClause\?: \$With_/u,
  );
});

test('dry-run inspects a ProbeJS snapshot without changing the destination', async (context) => {
  const { root, source, destination } = await fixture();
  context.after(async () => await rm(root, { recursive: true, force: true }));
  await mkdir(destination, { recursive: true });
  await writeFile(path.join(destination, 'kept.d.ts'), 'kept\n');

  const result = await refreshProbeTypingSnapshot({
    sourceRoot: source,
    destinationRoot: destination,
    readme: '# snapshot\n',
    dryRun: true,
  });

  assert.equal(result.declarations, 3);
  assert.equal(await readFile(path.join(destination, 'kept.d.ts'), 'utf8'), 'kept\n');
  assert.equal(await pathExists(path.join(destination, 'README.md')), false);
});
