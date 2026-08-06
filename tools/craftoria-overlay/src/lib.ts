import { createHash } from 'node:crypto';
import { createReadStream, createWriteStream } from 'node:fs';
import { mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import type { IncomingMessage } from 'node:http';
import https from 'node:https';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import tls from 'node:tls';
import { deflateRawSync } from 'node:zlib';

export async function hashFile(filePath: string, algorithm = 'SHA256'): Promise<string> {
  const hash = createHash(algorithm.toLowerCase().replace('-', ''));
  for await (const chunk of createReadStream(filePath)) hash.update(chunk);
  return hash.digest('hex');
}

export function assertSafeRelative(relativePath: string): string {
  const normalized = relativePath.replaceAll('\\', '/');
  if (path.isAbsolute(relativePath) || normalized.split('/').includes('..')) {
    throw new Error(`Unsafe relative path: ${relativePath}`);
  }
  return normalized;
}

export function resolveInside(root: string, relativePath: string): string {
  const resolvedRoot = path.resolve(root);
  const resolved = path.resolve(resolvedRoot, assertSafeRelative(relativePath));
  if (resolved !== resolvedRoot && !resolved.startsWith(`${resolvedRoot}${path.sep}`)) {
    throw new Error(`Path escaped the target root: ${relativePath}`);
  }
  return resolved;
}

export async function pathExists(targetPath: string): Promise<boolean> {
  try {
    await stat(targetPath);
    return true;
  } catch (error: unknown) {
    if (isNodeError(error) && error.code === 'ENOENT') return false;
    throw error;
  }
}

export async function findResourceRoot(scriptDirectory: string, marker: string): Promise<string> {
  if (await pathExists(path.join(scriptDirectory, marker))) return scriptDirectory;
  const projectDirectory = path.resolve(scriptDirectory, '..');
  if (await pathExists(path.join(projectDirectory, marker))) return projectDirectory;
  throw new Error(`Required resource was not found: ${marker}`);
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error;
}

export async function downloadFile(url: string, destination: string): Promise<void> {
  await mkdir(path.dirname(destination), { recursive: true });
  const certificateAuthorities = typeof tls.getCACertificates === 'function'
    ? [...tls.getCACertificates('default'), ...tls.getCACertificates('system')]
    : undefined;

  async function request(currentUrl: URL, redirectsLeft = 5): Promise<IncomingMessage> {
    return await new Promise<IncomingMessage>((resolve, reject) => {
      const operation = https.get(currentUrl, { ca: certificateAuthorities }, (response) => {
        const status = response.statusCode ?? 0;
        if ([301, 302, 303, 307, 308].includes(status) && response.headers.location) {
          response.resume();
          if (redirectsLeft === 0) {
            reject(new Error(`Too many redirects while downloading: ${url}`));
            return;
          }
          request(new URL(response.headers.location, currentUrl), redirectsLeft - 1).then(resolve, reject);
          return;
        }
        if (status < 200 || status >= 300) {
          response.resume();
          reject(new Error(`Download failed (HTTP ${status}): ${currentUrl.toString()}`));
          return;
        }
        resolve(response);
      });
      operation.once('error', reject);
    });
  }

  try {
    const response = await request(new URL(url));
    await pipeline(response, createWriteStream(destination, { flags: 'wx' }));
  } catch (error: unknown) {
    await rm(destination, { force: true });
    throw error;
  }
}

export async function writeJson(filePath: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

export async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, 'utf8')) as T;
}

export async function removeOwnedScratch(scratchPath: string): Promise<void> {
  if (await pathExists(scratchPath)) await rm(scratchPath, { recursive: true, force: true });
}

const crcTable = new Uint32Array(256);
for (let index = 0; index < 256; index += 1) {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
  crcTable[index] = value >>> 0;
}

function crc32(buffer: Buffer): number {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = (crcTable[(crc ^ byte) & 0xff] ?? 0) ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(dateValue: Date): { time: number; date: number } {
  const year = Math.max(1980, dateValue.getFullYear());
  return {
    time: (dateValue.getHours() << 11) | (dateValue.getMinutes() << 5) | Math.floor(dateValue.getSeconds() / 2),
    date: ((year - 1980) << 9) | ((dateValue.getMonth() + 1) << 5) | dateValue.getDate(),
  };
}

interface ArchiveFile {
  fullPath: string;
  archivePath: string;
  modifiedAt: Date;
}

export interface CreateZipOptions {
  executablePaths?: Iterable<string>;
}

async function listFiles(root: string, current = root): Promise<ArchiveFile[]> {
  const files: ArchiveFile[] = [];
  for (const entry of await readdir(current, { withFileTypes: true })) {
    const fullPath = path.join(current, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(root, fullPath));
    else if (entry.isFile()) {
      const fileStat = await stat(fullPath);
      files.push({
        fullPath,
        archivePath: path.relative(root, fullPath).split(path.sep).join('/'),
        modifiedAt: fileStat.mtime,
      });
    }
  }
  return files.sort((left, right) => left.archivePath.localeCompare(right.archivePath));
}

export async function createZip(
  sourceDirectory: string,
  outputPath: string,
  { executablePaths = [] }: CreateZipOptions = {},
): Promise<void> {
  const localParts: Buffer[] = [];
  const centralParts: Buffer[] = [];
  const executables = new Set([...executablePaths].map((entry) => assertSafeRelative(entry).replaceAll('\\', '/')));
  let offset = 0;
  let entryCount = 0;

  for (const file of await listFiles(sourceDirectory)) {
    const data = await readFile(file.fullPath);
    const compressed = deflateRawSync(data, { level: 9 });
    const name = Buffer.from(file.archivePath, 'utf8');
    const checksum = crc32(data);
    const timestamp = dosDateTime(file.modifiedAt);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(8, 8);
    local.writeUInt16LE(timestamp.time, 10);
    local.writeUInt16LE(timestamp.date, 12);
    local.writeUInt32LE(checksum, 14);
    local.writeUInt32LE(compressed.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    localParts.push(local, name, compressed);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(0x0314, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(timestamp.time, 12);
    central.writeUInt16LE(timestamp.date, 14);
    central.writeUInt32LE(checksum, 16);
    central.writeUInt32LE(compressed.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    const unixMode = executables.has(file.archivePath) ? 0o100755 : 0o100644;
    central.writeUInt32LE((unixMode << 16) >>> 0, 38);
    central.writeUInt32LE(offset, 42);
    centralParts.push(central, name);
    offset += local.length + name.length + compressed.length;
    entryCount += 1;
  }

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entryCount, 8);
  end.writeUInt16LE(entryCount, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, Buffer.concat([...localParts, centralDirectory, end]), { flag: 'wx' });
}
