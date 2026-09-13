import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { installSourcePath } from './install-overlay.js';
import type { PayloadSource } from './payload.js';
import type { OverlayFile } from './types.js';

const entry: OverlayFile = {
  path: 'mods/mekanism-overclock.jar',
  kind: 'mod',
  payload: 'payload/mods/mekanism-overclock.jar',
  hashAlgorithm: 'SHA256',
  hash: '0'.repeat(64),
};

test('source-tree installs use the bundled mod build output', () => {
  const builtMod = path.resolve('tools', 'mekanism-overclock', 'build', 'libs', 'mekanism-overclock.jar');
  const source: PayloadSource = {
    path: entry.path,
    source: builtMod,
    kind: 'mod',
    hashAlgorithm: 'SHA256',
    replacePolicy: 'known-base-only',
    expectedExistingHashes: [],
  };

  assert.equal(installSourcePath('/overlay', entry, new Map([[entry.path, source]])), builtMod);
});

test('packaged installs use the bundled payload copy', () => {
  assert.equal(
    installSourcePath('/overlay', entry, new Map()),
    path.resolve('/overlay', 'payload', 'mods', 'mekanism-overclock.jar'),
  );
});
