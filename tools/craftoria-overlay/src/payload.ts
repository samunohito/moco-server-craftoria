import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { assertSafeRelative, pathExists, readJson, resolveInside } from './lib.js';
import type { HashAlgorithm, OverlayFile, ReplacePolicy } from './types.js';

export interface PayloadPolicyEntry {
  replacePolicy?: ReplacePolicy;
  expectedExistingHashes?: string[];
}

interface PayloadPolicyFile {
  schemaVersion: number;
  files: Record<string, PayloadPolicyEntry>;
}

export interface PayloadSource {
  path: string;
  source: string;
  kind: OverlayFile['kind'];
  hashAlgorithm: HashAlgorithm;
  replacePolicy: ReplacePolicy;
  expectedExistingHashes: string[];
}

export function assertPayloadPath(relativePath: string): string {
  const relative = assertSafeRelative(relativePath).replace(/^\.\//u, '');
  if (!/^(kubejs|config|defaultconfigs)\/.+/u.test(relative)) {
    throw new Error(`Payload paths must be files under kubejs/, config/, or defaultconfigs/: ${relativePath}`);
  }
  if (/^kubejs\/logs\//u.test(relative)) {
    throw new Error(`Generated KubeJS content cannot be owned by the overlay: ${relativePath}`);
  }
  return relative;
}

function classify(relative: string): Extract<PayloadSource['kind'], 'kubejs' | 'config'> {
  return relative.startsWith('kubejs/') ? 'kubejs' : 'config';
}

async function listFiles(root: string, current = root): Promise<string[]> {
  if (!await pathExists(root)) return [];
  const files: string[] = [];
  for (const entry of await readdir(current, { withFileTypes: true })) {
    const fullPath = path.join(current, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Symbolic links are not allowed in payload/: ${fullPath}`);
    if (entry.isDirectory()) files.push(...await listFiles(root, fullPath));
    else if (entry.isFile()) files.push(path.relative(root, fullPath).split(path.sep).join('/'));
  }
  return files.sort((left, right) => left.localeCompare(right));
}

export async function readPayloadPolicy(resourceRoot: string): Promise<PayloadPolicyFile> {
  const policyPath = path.join(resourceRoot, 'payload-policy.json');
  const policy = await readJson<PayloadPolicyFile>(policyPath);
  if (policy.schemaVersion !== 1 || typeof policy.files !== 'object' || policy.files === null) {
    throw new Error(`Unsupported payload policy: ${policyPath}`);
  }
  return policy;
}

export async function payloadSources(resourceRoot: string): Promise<PayloadSource[]> {
  const payloadRoot = path.join(resourceRoot, 'payload');
  const policy = await readPayloadPolicy(resourceRoot);
  const relativeFiles = await listFiles(payloadRoot);
  const knownFiles = new Set(relativeFiles);

  for (const policyPath of Object.keys(policy.files)) {
    const relative = assertPayloadPath(policyPath);
    if (!knownFiles.has(relative)) throw new Error(`Payload policy references a missing file: ${relative}`);
  }

  return relativeFiles.map((filePath) => {
    const relative = assertPayloadPath(filePath);
    const kind = classify(relative);
    const entry = policy.files[relative] ?? {};
    const expectedExistingHashes = (entry.expectedExistingHashes ?? []).map((hash) => hash.toLowerCase());
    for (const hash of expectedExistingHashes) {
      if (!/^[0-9a-f]{64}$/u.test(hash)) throw new Error(`Invalid SHA256 in payload policy for ${relative}: ${hash}`);
    }
    return {
      path: relative,
      source: resolveInside(payloadRoot, relative),
      kind,
      hashAlgorithm: 'SHA256',
      replacePolicy: entry.replacePolicy ?? (kind === 'config' ? 'backup' : 'known-base-only'),
      expectedExistingHashes,
    };
  });
}

export async function assertRegularFile(filePath: string): Promise<void> {
  const fileStat = await stat(filePath);
  if (!fileStat.isFile()) throw new Error(`Expected a regular file: ${filePath}`);
}

export async function rawPayloadPolicy(resourceRoot: string): Promise<PayloadPolicyFile> {
  return await readPayloadPolicy(resourceRoot);
}
