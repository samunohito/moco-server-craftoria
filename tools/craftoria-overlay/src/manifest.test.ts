import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { writeClientPackage } from './client-package.js';
import { prepareOverlay } from './manifest.js';

const templatesRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('prepareOverlay bundles a locally built mod from a sibling tools project', async (context) => {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-bundled-mod-test-'));
  context.after(async () => await rm(scratch, { recursive: true, force: true }));

  const toolsRoot = path.join(scratch, 'tools');
  const resourceRoot = path.join(toolsRoot, 'craftoria-overlay');
  const modSource = path.join(toolsRoot, 'craftoria-mekanism-overclock', 'build', 'libs', 'overclock.jar');
  await mkdir(path.dirname(modSource), { recursive: true });
  await mkdir(resourceRoot, { recursive: true });
  await writeFile(modSource, 'locally built mod', 'utf8');
  await writeFile(path.join(resourceRoot, 'payload-policy.json'), JSON.stringify({ schemaVersion: 1, files: {} }), 'utf8');
  await writeFile(path.join(resourceRoot, 'overlay.template.json'), JSON.stringify({
    schemaVersion: 1,
    addonVersion: 'test',
    target: {
      managedPackId: 'test', managedPackVersionId: 'test', managedPackVersion: 'test',
      minecraft: '1.21.1', neoForge: '21.1.249',
    },
    files: [],
    bundledFiles: [{
      source: 'craftoria-mekanism-overclock/build/libs/overclock.jar',
      path: 'mods/craftoria-mekanism-overclock.jar',
      kind: 'mod',
    }],
  }), 'utf8');

  const { manifest, sources } = await prepareOverlay(resourceRoot);
  assert.equal(manifest.files.length, 1);
  assert.deepEqual(manifest.files[0], {
    path: 'mods/craftoria-mekanism-overclock.jar',
    kind: 'mod',
    payload: 'payload/mods/craftoria-mekanism-overclock.jar',
    hashAlgorithm: 'SHA256',
    hash: '6450c26f15101ac80e96a3978d8ec14ac6e68f97eff21bc9c325190941e0c5ea',
    replacePolicy: 'known-base-only',
    expectedExistingHashes: [],
  });
  assert.equal(sources.length, 1);
  assert.equal(sources[0]?.source, modSource);
  assert.equal('bundledFiles' in manifest, false);

  const packageRoot = path.join(scratch, 'client-package');
  await writeClientPackage(templatesRoot, packageRoot, 'Craftoria-Client-Addon-test', manifest, sources);
  assert.equal(
    await readFile(path.join(packageRoot, 'payload', 'mods', 'craftoria-mekanism-overclock.jar'), 'utf8'),
    'locally built mod',
  );
  assert.match(
    await readFile(path.join(packageRoot, '.installer', 'install-plan.tsv'), 'utf8'),
    /payload:payload\/mods\/craftoria-mekanism-overclock\.jar/u,
  );
});

test('prepareOverlay rejects bundled mods outside the tools directory', async (context) => {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-bundled-mod-path-test-'));
  context.after(async () => await rm(scratch, { recursive: true, force: true }));
  const resourceRoot = path.join(scratch, 'tools', 'craftoria-overlay');
  await mkdir(resourceRoot, { recursive: true });
  await writeFile(path.join(resourceRoot, 'payload-policy.json'), JSON.stringify({ schemaVersion: 1, files: {} }), 'utf8');
  await writeFile(path.join(resourceRoot, 'overlay.template.json'), JSON.stringify({
    schemaVersion: 1,
    addonVersion: 'test',
    target: { managedPackId: 'test', managedPackVersionId: 'test', managedPackVersion: 'test', minecraft: '1.21.1', neoForge: '21.1.249' },
    files: [],
    bundledFiles: [{ source: '../outside.jar', path: 'mods/outside.jar', kind: 'mod' }],
  }), 'utf8');

  await assert.rejects(prepareOverlay(resourceRoot), /relative to tools|Unsafe relative path/u);
});
