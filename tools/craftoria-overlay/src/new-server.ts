import { copyFile, cp, mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { installOverlay } from './install-overlay.js';
import { downloadFile, findResourceRoot, pathExists } from './lib.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

interface NewCraftoriaServerOptions {
  targetPath?: string;
  javaPath?: string;
  installBase?: boolean;
  acceptEula?: boolean;
  dryRun?: boolean;
}

export async function newCraftoriaServer({
  targetPath,
  javaPath = 'java',
  installBase = false,
  acceptEula = false,
  dryRun = false,
}: NewCraftoriaServerOptions): Promise<void> {
  if (targetPath === undefined) throw new Error('--target is required.');
  if (acceptEula && !installBase) throw new Error('--accept-eula requires --install-base.');

  const target = path.resolve(targetPath);
  const filesystemRoot = path.parse(target).root;
  if (target === filesystemRoot || target === path.resolve(process.cwd())) {
    throw new Error(`Refusing unsafe server target: ${target}`);
  }

  const javaCheck = spawnSync(javaPath, ['-version'], { encoding: 'utf8', windowsHide: true });
  if (javaCheck.error) throw new Error(`Java could not be executed: ${javaPath} (${javaCheck.error.message})`);
  const javaOutput = `${javaCheck.stdout ?? ''}\n${javaCheck.stderr ?? ''}`;
  const majorMatch = javaOutput.match(/version\s+"(?<major>\d+)/u);
  const major = Number(majorMatch?.groups?.major);
  if (![21, 25].includes(major)) {
    throw new Error(`Craftoria requires Java 21 or 25. Detected output: ${javaOutput.trim()}`);
  }

  if (await pathExists(target)) {
    const allowed = new Set([
      'server-setup-config.yaml',
      'startserver.bat',
      'startserver.sh',
      'serverstarter-2.4.1.jar',
      'eula.txt',
      'systemd',
    ]);
    const entries = await readdir(target);
    const unexpected = entries.filter((name) => !allowed.has(name));
    if (unexpected.length > 0 && !await pathExists(path.join(target, 'server-setup-config.yaml'))) {
      throw new Error(`Target is not empty and is not a prepared Craftoria server directory: ${target}`);
    }
  }

  const resourceRoot = await findResourceRoot(scriptDirectory, 'server-bootstrap');
  const bootstrap = path.join(resourceRoot, 'server-bootstrap');

  if (dryRun) {
    console.log(`Would prepare official Craftoria 1.31.0 server bootstrap at: ${target}`);
  } else {
    await mkdir(target, { recursive: true });
    for (const name of ['server-setup-config.yaml', 'startserver.bat', 'startserver.sh']) {
      await copyFile(path.join(bootstrap, name), path.join(target, name));
    }
    await cp(path.join(bootstrap, 'systemd'), path.join(target, 'systemd'), { recursive: true });
    console.log(`Prepared official Craftoria server bootstrap at: ${target}`);
  }

  if (!installBase) {
    console.log('Run startserver.bat (Windows) or ./startserver.sh (Linux), accept the EULA interactively, wait for installation/startup, then stop the server.');
    console.log(`Afterward run: pnpm run cli -- install --server "${target}"`);
    return;
  }
  if (!acceptEula) {
    throw new Error('Automated base installation requires explicit --accept-eula. Otherwise run startserver.bat interactively.');
  }
  if (dryRun) {
    console.log('Would accept the Minecraft EULA, run TeamAOF ServerStarter 2.4.1, and apply the overlay.');
    return;
  }

  await writeFile(path.join(target, 'eula.txt'), 'eula=true\n', 'ascii');
  const starter = path.join(target, 'serverstarter-2.4.1.jar');
  if (!await pathExists(starter)) {
    await downloadFile('https://github.com/TeamAOF/ServerStarter/releases/download/v2.4.1/serverstarter-2.4.1.jar', starter);
  }

  console.log('Starting the official base installer. It may also start the server; stop it cleanly after startup.');
  const serverStarter = spawnSync(javaPath, ['-jar', starter], { cwd: target, stdio: 'inherit', windowsHide: true });
  if (serverStarter.error) throw new Error(`ServerStarter failed: ${serverStarter.error.message}`);
  if (serverStarter.status !== 0) throw new Error(`ServerStarter exited with code ${serverStarter.status}. The overlay was not applied.`);

  await installOverlay({ serverPath: target });
}
