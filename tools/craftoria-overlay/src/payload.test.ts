import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { overlayFileAppliesToTarget } from './install-overlay.js';
import { assertPayloadPath } from './payload.js';
import type { OverlayTemplate } from './types.js';

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

test('dedicated-server bootstrap excludes current client-only rendering mods', async () => {
  const serverSetup = await readFile(
    path.join(resourceRoot, 'server-bootstrap/server-setup-config.yaml'),
    'utf8',
  );

  for (const projectId of ['394468', '447673', '1374153', '574123', '532127']) {
    assert.match(serverSetup, new RegExp(`- ${projectId}(?:\\s|$)`, 'u'), projectId);
  }
});

test('BrokenDevices avoids array spread unsupported by the bundled Rhino runtime', async () => {
  const script = await readFile(
    path.join(resourceRoot, 'payload/kubejs/server_scripts/Mods/Craftoria/BrokenDevices.js'),
    'utf8',
  );

  assert.doesNotMatch(script, /\.\.\.disabledQuarryCards/u);
  assert.match(script, /disabledQuarryCards\.concat/u);
});

test('ProbeJS is pinned as a client-only overlay mod', async () => {
  const template = JSON.parse(
    await readFile(path.join(resourceRoot, 'overlay.template.json'), 'utf8'),
  ) as OverlayTemplate;
  const probe = template.files.find(({ path: filePath }) => filePath === 'mods/ProbeJS-8.0.3.jar');

  assert.ok(probe);
  assert.equal(probe.side, 'client');
  assert.equal(overlayFileAppliesToTarget(probe, 'client'), true);
  assert.equal(overlayFileAppliesToTarget(probe, 'server'), false);
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

test('base policies retain verified Craftoria text line-ending variants', async () => {
  const policy = JSON.parse(await readFile(path.join(resourceRoot, 'payload-policy.json'), 'utf8')) as {
    files: Record<string, { expectedExistingHashes?: string[] }>;
  };
  const expectedHashes: Record<string, string[]> = {
    'config/advanced_ae-common.toml': [
      'a8a9ecfd4d9e535897e3cdf5c383edcc870dadff1b5ef7f5572b3e287f4e5eca',
    ],
    'config/artifacts/relics/vampiric_glove.yaml': [
      '890653999730dda46193974e03024e44bfff184c18d4a9978dae9179638cf4db',
    ],
    'config/cataclysm.toml': [
      '523ad93a8cf9fdfbc1b1a18070a87e63d6361446f0438786a41aea0a8b31e77e',
    ],
    'config/eternal_starlight.json': [
      '67787b73a7b480c8d6ca84f9b48dbaa077281818aa3298bbdf16ce2036d3c88e',
    ],
    'config/irons_spellbooks-server.toml': [
      '75b2fa2072c3442ff34b86986f42e50cf57eba6c2332f7a9c059f119789879fd',
    ],
    'config/powah.json5': [
      '2d217907ba94cdb507e557d8a47fe33dcbc3ea668c18f9fd0b7c67a72cc0cb3c',
    ],
    'config/twilightforest-common.toml': [
      '59f87c27b7d493835dcf3e4c1ef2c9df138b1cb31ee0708cd7df7c0ca43fe7dd',
    ],
    'kubejs/server_scripts/Mods/Craftoria/ConflictFixes.js': [
      '58d26b7ccd9615310f49b0f8576fb56084c15367898144a8152fc4f975163cca',
      '58bd0d9526fb57490637252553d0a5d1137792c2972033f91679909d1ad774ed',
    ],
    'kubejs/server_scripts/Mods/HostileNeuralNetworks/DataModels.js': [
      '305ef3bba383cf31cc9932476898e534d9f27e342a5a39dfc1ad0b36c50b9d7c',
    ],
    'kubejs/server_scripts/Mods/IndustrialForegoing/Recipes.js': [
      'bda19039569dd81428a7c096c2d8ee29ad993eeaf56674d2d226030514bbf428',
    ],
    'kubejs/server_scripts/Mods/Mekanism/DataMaps.js': [
      '1bcd6fa6bde35e63a78b54a3e9a1a64f7df4a762a4a964cbe7c8ee5cd06b869e',
      '73c3f642d3ba10304ff3bc57cfb4600423bb848b00966e75f45b916150dfc611',
    ],
    'kubejs/server_scripts/Mods/ModernIndustrialization/CustomMachines/ModelSynthesizer.js': [
      'b33c3609ca3482ecab332bbea2294289038c8d640cefa52f33d01128bf00786a',
    ],
    'kubejs/server_scripts/Mods/ModernIndustrialization/ReplicatorBlacklist.js': [
      '23c3f2b1b2e1bb1688fa6df1795531ec5cb10a923748bc21b1744b3445588b74',
      'f74d6232a6a578bc340cffd61db626408da9efffccab1cce5ade6d5b879515ef',
    ],
    'kubejs/server_scripts/tags.js': [
      'b832abd582bffbe1aa15dfc0a0b83253d01872d7b0a29f9675d2a9e5eeb05f0e',
    ],
    'kubejs/server_scripts/unify/Knife.js': [
      '01239a96ff206220a5d8b5d6b5f946be2de02575eef146553bc7ac136bcc01dc',
      'c542a0df3f5ea9a7cd1dd62e6cc9a94b8ec33dafc7b9df42bb8c42a0659ec390',
    ],
  };

  for (const [relative, hashes] of Object.entries(expectedHashes)) {
    const allowed = policy.files[relative]?.expectedExistingHashes ?? [];
    for (const hash of hashes) assert.ok(allowed.includes(hash), `${relative}: ${hash}`);
  }
});
