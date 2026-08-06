import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { assertPayloadPath } from './payload.js';

const resourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('allows an intentional ProbeJS typing snapshot', () => {
  assert.equal(
    assertPayloadPath('kubejs/probe/server/generated.d.ts'),
    'kubejs/probe/server/generated.d.ts',
  );
});

test('continues to reject KubeJS runtime logs', () => {
  assert.throws(
    () => assertPayloadPath('kubejs/logs/server.log'),
    /Generated KubeJS content cannot be owned by the overlay/u,
  );
});

test('FTB Quests base policies accept verified Linux LF variants', async () => {
  const policy = JSON.parse(await readFile(path.join(resourceRoot, 'payload-policy.json'), 'utf8')) as {
    files: Record<string, { expectedExistingHashes?: string[] }>;
  };
  const expectedLinuxHashes: Record<string, string> = {
    'config/ftbquests/quests/chapters/Applied Energistics.snbt':
      '7bef764a72cc83c864f50fe080d06e6cf8894115f21724a442140f0931b95555',
    'config/ftbquests/quests/reward_tables/0414572B7C36F04F.snbt':
      'cb852d7501b1611f9eb588b5c9938a0a3c28890053dd3a982788721ae54b2397',
    'config/ftbquests/quests/reward_tables/145BAF105E285CD0.snbt':
      '458e3588b994497c22aa565c564fa88d7d1cdf6c7b4472eb2bc8626feccbfeed',
    'config/ftbquests/quests/reward_tables/1D6F040D6822FC7F.snbt':
      '7351323a9c3dc3c5ac02fd5e2db7adced2a25cde5390cfc8aac4156fbb800ce2',
    'config/ftbquests/quests/reward_tables/2C400654E7B41B6A.snbt':
      '8342f79482610362960beb76e824decd562fbe650ae07bc55ab7d96e0c497160',
    'config/ftbquests/quests/reward_tables/303299C956CA9C80.snbt':
      '0a067a1012ba8fcfd857030df03b1fbac5ae6d16451cff38eda0c9eb44517083',
  };

  for (const [relative, hash] of Object.entries(expectedLinuxHashes)) {
    assert.ok(policy.files[relative]?.expectedExistingHashes?.includes(hash), relative);
  }
});
