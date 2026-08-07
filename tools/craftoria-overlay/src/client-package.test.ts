import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { clientInstallPlan, writeClientPackage } from './client-package.js';
import { exportClientOverlay } from './export-client.js';
import { exportOverlay, overlayOutputPath } from './export-overlay.js';
import { validateClientInstallation } from './instance.js';
import { readPreviouslyInstalled, writeInstalledState } from './installed-state.js';
import type { PayloadSource } from './payload.js';
import type { OverlayManifest } from './types.js';

const resourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function sha256(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}

function fixtureManifest(configContent: string, kubeContent: string): OverlayManifest {
  return {
    schemaVersion: 1,
    addonVersion: '9.8.7-test',
    target: {
      managedPackId: 'test-pack',
      managedPackVersionId: 'test-file',
      managedPackVersion: '1.31.0-test',
      minecraft: '1.21.1-test',
      neoForge: '21.1.230-test',
    },
    files: [
      {
        path: 'config/test-common.toml',
        kind: 'config',
        payload: 'payload/config/test-common.toml',
        hashAlgorithm: 'SHA256',
        hash: sha256(configContent),
        replacePolicy: 'backup',
      },
      {
        path: 'kubejs/server_scripts/Test.js',
        kind: 'kubejs',
        payload: 'payload/kubejs/server_scripts/Test.js',
        hashAlgorithm: 'SHA256',
        hash: sha256(kubeContent),
        replacePolicy: 'known-base-only',
        expectedExistingHashes: [sha256('official base\n')],
      },
    ],
    remove: [{ path: 'mods/old.jar', hashAlgorithm: 'SHA256', hash: sha256('old mod') }],
  };
}

async function run(
  command: string,
  arguments_: string[],
  cwd: string,
  environment: NodeJS.ProcessEnv = process.env,
): Promise<{ code: number; output: string }> {
  return await new Promise((resolve, reject) => {
    const child = spawn(command, arguments_, { cwd, env: environment, windowsHide: true });
    let output = '';
    child.stdout.on('data', (chunk: Buffer) => { output += chunk.toString(); });
    child.stderr.on('data', (chunk: Buffer) => { output += chunk.toString(); });
    child.once('error', reject);
    child.once('close', (code) => resolve({ code: code ?? -1, output }));
  });
}

interface ZipEntry {
  name: string;
  mode: number;
}

async function zipEntries(zipPath: string): Promise<ZipEntry[]> {
  const archive = await readFile(zipPath);
  let endOffset = archive.length - 22;
  while (endOffset >= 0 && archive.readUInt32LE(endOffset) !== 0x06054b50) endOffset -= 1;
  assert.ok(endOffset >= 0, 'ZIP end record was not found');
  const count = archive.readUInt16LE(endOffset + 10);
  let offset = archive.readUInt32LE(endOffset + 16);
  const entries: ZipEntry[] = [];
  for (let index = 0; index < count; index += 1) {
    assert.equal(archive.readUInt32LE(offset), 0x02014b50);
    const nameLength = archive.readUInt16LE(offset + 28);
    const extraLength = archive.readUInt16LE(offset + 30);
    const commentLength = archive.readUInt16LE(offset + 32);
    entries.push({
      name: archive.subarray(offset + 46, offset + 46 + nameLength).toString('utf8'),
      mode: (archive.readUInt32LE(offset + 38) >>> 16) & 0xffff,
    });
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

async function listFiles(root: string, current = root): Promise<string[]> {
  const result: string[] = [];
  for (const entry of await readdir(current, { withFileTypes: true })) {
    const full = path.join(current, entry.name);
    if (entry.isDirectory()) result.push(...await listFiles(root, full));
    else result.push(path.relative(root, full).replaceAll('\\', '/'));
  }
  return result;
}

test('client install plan contains files, policies, sources, and removals', () => {
  const manifest = fixtureManifest('config value\n', 'ServerEvents.recipes(() => {})\n');
  const plan = clientInstallPlan(manifest);
  assert.match(plan, /file\tconfig\tbackup\tSHA256/u);
  assert.match(plan, /payload:payload\/kubejs\/server_scripts\/Test\.js/u);
  assert.match(plan, /remove\t-\t-\tSHA256/u);
});

test('generated POSIX installer includes Linux and macOS hash fallbacks', async () => {
  const shell = await readFile(path.join(resourceRoot, 'client-templates/install.sh'), 'utf8');
  for (const expected of ['sha256sum', 'sha512sum', 'shasum -a 256', 'shasum -a 512', 'openssl dgst -sha256', 'openssl dgst -sha512']) {
    assert.ok(shell.includes(expected), `missing hash fallback: ${expected}`);
  }
});

test('client validation accepts a launcher-independent game directory', async () => {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-client-root-test-'));
  try {
    const gameRoot = path.join(scratch, 'ATLauncher-Craftoria');
    for (const directory of ['mods', 'config', 'kubejs']) {
      await mkdir(path.join(gameRoot, directory), { recursive: true });
    }
    const manifest = fixtureManifest('config value\n', 'test script\n');
    await writeFile(
      path.join(gameRoot, 'version_info.json'),
      JSON.stringify({ version: manifest.target.managedPackVersion }),
      'utf8',
    );
    await writeFile(path.join(scratch, 'instance.cfg'), 'ManagedPackVersionName=some-other-pack\n', 'utf8');
    await writeFile(path.join(scratch, 'mmc-pack.json'), JSON.stringify({ components: [] }), 'utf8');

    assert.equal(await validateClientInstallation(gameRoot, manifest.target), gameRoot);

    await writeFile(path.join(gameRoot, 'version_info.json'), JSON.stringify({ version: 'wrong-version' }), 'utf8');
    await assert.rejects(
      validateClientInstallation(gameRoot, manifest.target),
      /Expected Craftoria 1\.31\.0-test/u,
    );
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }
});

test('portable installers do not require PrismLauncher metadata', async () => {
  for (const name of ['install.ps1', 'install.sh']) {
    const installer = await readFile(path.join(resourceRoot, 'client-templates', name), 'utf8');
    assert.doesNotMatch(installer, /instance\.cfg|mmc-pack\.json/u, name);
    assert.match(installer, /version_info\.json/u, name);
  }
});

test('portable installed state remains compatible with legacy JSON state', async () => {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-state-test-'));
  try {
    const manifest = fixtureManifest('config value\n', 'test script\n');
    await writeFile(path.join(scratch, 'installed-state.json'), JSON.stringify({
      files: [{ path: 'legacy/file.txt', hash: sha256('legacy'), hashAlgorithm: 'SHA256' }],
    }), 'utf8');
    assert.equal((await readPreviouslyInstalled(scratch)).get('legacy/file.txt'), sha256('legacy'));
    await writeInstalledState(scratch, manifest, {
      installedAt: '2026-08-06T00:00:00.000Z',
      target: '/test/minecraft',
      backup: null,
    });
    const installed = await readPreviouslyInstalled(scratch);
    assert.equal(installed.get('config/test-common.toml'), sha256('config value\n'));
    assert.match(await readFile(path.join(scratch, 'installed-files.tsv'), 'utf8'), /^algorithm\thash\tpath/mu);
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }
});

test('export-client creates a minimal versioned ZIP and preserves install.sh mode', async () => {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-client-zip-test-'));
  try {
    const output = path.join(scratch, 'client.zip');
    await exportClientOverlay({ sourceInstance: path.resolve(resourceRoot, '..', '..'), output });
    const entries = await zipEntries(output);
    const names = entries.map(({ name }) => name);
    const prefix = 'Craftoria-Client-Addon-1.2.2/';
    assert.ok(names.includes(`${prefix}install.bat`));
    assert.ok(names.includes(`${prefix}install.sh`));
    assert.ok(names.includes(`${prefix}.installer/install.ps1`));
    assert.ok(names.includes(`${prefix}manifest.json`));
    assert.ok(names.includes(`${prefix}payload/mods/mekanism-overclock-0.1.1.jar`));
    assert.ok(!names.some((name) => /(?:package\.json|pnpm-lock|src\/|server-bootstrap)/u.test(name)));
    assert.equal(entries.find(({ name }) => name === `${prefix}install.sh`)?.mode, 0o100755);
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }
});

test('toolkit export defaults to the dist directory', () => {
  const manifest = fixtureManifest('config value\n', 'test script\n');
  assert.equal(
    overlayOutputPath(resourceRoot, manifest),
    path.join(resourceRoot, 'dist', 'Craftoria-Addon-9.8.7-test.zip'),
  );
});

test('legacy toolkit export still contains the Node CLI, server bootstrap, and client templates', async () => {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-toolkit-zip-test-'));
  try {
    const output = path.join(scratch, 'toolkit.zip');
    await exportOverlay({ sourceInstance: path.resolve(resourceRoot, '..', '..'), output });
    const names = (await zipEntries(output)).map(({ name }) => name);
    assert.ok(names.includes('src/cli.ts'));
    assert.ok(names.includes('server-bootstrap/startserver.sh'));
    assert.ok(names.includes('server-bootstrap/systemd/craftoria.service'));
    assert.ok(names.includes('server-bootstrap/systemd/README.md'));
    assert.ok(names.includes('client-templates/install.sh'));
    assert.ok(names.includes('package.json'));
    assert.ok(names.includes('manifest.json'));
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }
});

test('systemd unit uses the dedicated server root and clean Minecraft shutdown', async () => {
  const unit = await readFile(path.join(resourceRoot, 'server-bootstrap', 'systemd', 'craftoria.service'), 'utf8');
  assert.match(unit, /^User=minecraft$/mu);
  assert.match(unit, /^WorkingDirectory=\/srv\/craftoria$/mu);
  assert.match(unit, /^ExecStart=\/srv\/craftoria\/startserver\.sh$/mu);
  assert.match(unit, /^KillSignal=SIGINT$/mu);
  assert.match(unit, /^Restart=on-failure$/mu);
  assert.match(unit, /^ReadWritePaths=\/srv\/craftoria$/mu);
});

test('generated Windows installer supports dry-run, install, backup, conflict refusal, and force', {
  skip: process.platform !== 'win32',
}, async () => {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-client-windows-test-'));
  const configContent = 'enabled=true\n';
  const kubeContent = 'ServerEvents.recipes(event => event.remove({ id: "test" }))\n';
  try {
    const minecraftRoot = path.join(scratch, 'minecraft');
    const packageName = 'Craftoria-Client-Addon-9.8.7-test';
    const packageRoot = path.join(minecraftRoot, packageName);
    const sourceRoot = path.join(scratch, 'sources');
    await mkdir(sourceRoot, { recursive: true });
    const configSource = path.join(sourceRoot, 'config.toml');
    const kubeSource = path.join(sourceRoot, 'Test.js');
    await writeFile(configSource, configContent, 'utf8');
    await writeFile(kubeSource, kubeContent, 'utf8');
    const manifest = fixtureManifest(configContent, kubeContent);
    const sources: PayloadSource[] = [
      {
        path: 'config/test-common.toml', source: configSource, kind: 'config', hashAlgorithm: 'SHA256',
        replacePolicy: 'backup', expectedExistingHashes: [],
      },
      {
        path: 'kubejs/server_scripts/Test.js', source: kubeSource, kind: 'kubejs', hashAlgorithm: 'SHA256',
        replacePolicy: 'known-base-only', expectedExistingHashes: [sha256('official base\n')],
      },
    ];
    await writeClientPackage(resourceRoot, packageRoot, packageName, manifest, sources);
    await writeFile(path.join(minecraftRoot, 'version_info.json'), JSON.stringify({ version: '1.31.0-test' }), 'utf8');
    await mkdir(path.join(minecraftRoot, 'config'), { recursive: true });
    await mkdir(path.join(minecraftRoot, 'kubejs'), { recursive: true });
    await mkdir(path.join(minecraftRoot, 'mods'), { recursive: true });

    const dryRun = await run('cmd.exe', ['/d', '/c', 'install.bat', '--dry-run'], packageRoot);
    assert.equal(dryRun.code, 0, dryRun.output);
    assert.match(dryRun.output, /Install\s+config\/test-common\.toml/u);
    await assert.rejects(readFile(path.join(minecraftRoot, 'config/test-common.toml')));

    await writeFile(path.join(minecraftRoot, 'version_info.json'), JSON.stringify({ version: 'wrong-version' }), 'utf8');
    const wrongVersion = await run('cmd.exe', ['/d', '/c', 'install.bat', '--dry-run'], packageRoot);
    assert.notEqual(wrongVersion.code, 0);
    assert.match(wrongVersion.output, /Expected Craftoria 1\.31\.0-test/u);
    await writeFile(path.join(minecraftRoot, 'version_info.json'), JSON.stringify({ version: '1.31.0-test' }), 'utf8');

    const packagedConfig = path.join(packageRoot, 'payload/config/test-common.toml');
    await writeFile(packagedConfig, 'tampered payload\n', 'utf8');
    const badHash = await run('pwsh.exe', ['-NoProfile', '-File', path.join(packageRoot, '.installer/install.ps1')], packageRoot);
    assert.notEqual(badHash.code, 0);
    assert.match(badHash.output, /Hash verification failed for config\/test-common\.toml/u);
    await assert.rejects(readFile(path.join(minecraftRoot, 'config/test-common.toml')));
    await writeFile(packagedConfig, configContent, 'utf8');

    await mkdir(path.join(minecraftRoot, 'kubejs/server_scripts'), { recursive: true });
    await writeFile(path.join(minecraftRoot, 'kubejs/server_scripts/Test.js'), 'official base\n', 'utf8');
    await writeFile(path.join(minecraftRoot, 'mods/old.jar'), 'old mod', 'utf8');

    const install = await run('pwsh.exe', ['-NoProfile', '-File', path.join(packageRoot, '.installer/install.ps1')], packageRoot);
    assert.equal(install.code, 0, install.output);
    assert.equal(await readFile(path.join(minecraftRoot, 'config/test-common.toml'), 'utf8'), configContent);
    assert.equal(await readFile(path.join(minecraftRoot, 'kubejs/server_scripts/Test.js'), 'utf8'), kubeContent);
    await assert.rejects(readFile(path.join(minecraftRoot, 'mods/old.jar')));
    assert.ok((await listFiles(path.join(minecraftRoot, '.craftoria-overlay'))).includes('installed-files.tsv'));
    const initialBackups = await listFiles(path.join(minecraftRoot, '.craftoria-overlay/backups'));
    assert.ok(initialBackups.some((name) => name.endsWith('kubejs/server_scripts/Test.js')));
    assert.ok(initialBackups.some((name) => name.endsWith('mods/old.jar')));

    await writeFile(path.join(minecraftRoot, 'config/test-common.toml'), 'user config\n', 'utf8');
    const configReplace = await run('pwsh.exe', ['-NoProfile', '-File', path.join(packageRoot, '.installer/install.ps1')], packageRoot);
    assert.equal(configReplace.code, 0, configReplace.output);
    const backups = await listFiles(path.join(minecraftRoot, '.craftoria-overlay/backups'));
    assert.ok(backups.some((name) => name.endsWith('config/test-common.toml')));

    await writeFile(path.join(minecraftRoot, 'kubejs/server_scripts/Test.js'), 'unknown conflict\n', 'utf8');
    const conflict = await run('cmd.exe', ['/d', '/c', 'install.bat', '--dry-run'], packageRoot);
    assert.notEqual(conflict.code, 0);
    assert.match(conflict.output, /Conflict at kubejs\/server_scripts\/Test\.js/u);
    const forced = await run('cmd.exe', ['/d', '/c', 'install.bat', '--force-conflict'], packageRoot);
    assert.equal(forced.code, 0, forced.output);
    assert.equal(await readFile(path.join(minecraftRoot, 'kubejs/server_scripts/Test.js'), 'utf8'), kubeContent);
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }
});

test('generated POSIX installer passes sh syntax and installation checks', async (context) => {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-client-sh-test-'));
  try {
    let shell = 'sh';
    let environment = process.env;
    if (process.platform === 'win32') {
      shell = 'C:\\Program Files\\Git\\usr\\bin\\sh.exe';
      try {
        await access(shell);
      } catch {
        context.skip('Git for Windows sh is not available.');
        return;
      }
      environment = {
        ...process.env,
        PATH: `C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;${process.env.PATH ?? ''}`,
      };
    }

    const minecraftRoot = path.join(scratch, 'minecraft');
    const packageRoot = path.join(minecraftRoot, 'package');
    const configSource = path.join(scratch, 'source.toml');
    const kubeSource = path.join(scratch, 'Test.js');
    const configContent = 'value=true\n';
    const kubeContent = 'test event\n';
    await writeFile(configSource, configContent, 'utf8');
    await writeFile(kubeSource, kubeContent, 'utf8');
    const manifest = fixtureManifest(configContent, kubeContent);
    await writeClientPackage(resourceRoot, packageRoot, 'package', manifest, [
      {
        path: 'config/test-common.toml', source: configSource, kind: 'config', hashAlgorithm: 'SHA256',
        replacePolicy: 'backup', expectedExistingHashes: [],
      },
      {
        path: 'kubejs/server_scripts/Test.js', source: kubeSource, kind: 'kubejs', hashAlgorithm: 'SHA256',
        replacePolicy: 'known-base-only', expectedExistingHashes: [sha256('official base\n')],
      },
    ]);
    await writeFile(path.join(minecraftRoot, 'version_info.json'), JSON.stringify({ version: '1.31.0-test' }), 'utf8');
    await mkdir(path.join(minecraftRoot, 'config'), { recursive: true });
    await mkdir(path.join(minecraftRoot, 'kubejs/server_scripts'), { recursive: true });
    await writeFile(path.join(minecraftRoot, 'kubejs/server_scripts/Test.js'), 'official base\n', 'utf8');
    await mkdir(path.join(minecraftRoot, 'mods'), { recursive: true });
    await writeFile(path.join(minecraftRoot, 'mods/old.jar'), 'old mod', 'utf8');

    const syntax = await run(shell, ['-n', path.join(packageRoot, 'install.sh')], packageRoot, environment);
    assert.equal(syntax.code, 0, syntax.output);
    const dryRun = await run(shell, [path.join(packageRoot, 'install.sh'), '--dry-run'], packageRoot, environment);
    assert.equal(dryRun.code, 0, dryRun.output);
    assert.match(dryRun.output, /Install\s+config\/test-common\.toml/u);
    const install = await run(shell, [path.join(packageRoot, 'install.sh')], packageRoot, environment);
    assert.equal(install.code, 0, install.output);
    assert.equal(await readFile(path.join(minecraftRoot, 'config/test-common.toml'), 'utf8'), configContent);
    assert.equal(await readFile(path.join(minecraftRoot, 'kubejs/server_scripts/Test.js'), 'utf8'), kubeContent);
    await assert.rejects(readFile(path.join(minecraftRoot, 'mods/old.jar')));
    assert.ok((await listFiles(path.join(minecraftRoot, '.craftoria-overlay'))).includes('installed-files.tsv'));
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }
});
