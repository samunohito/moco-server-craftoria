import path from 'node:path';
import { hashFile, readJson, resolveInside } from './lib.js';
import { assertRegularFile, payloadSources, type PayloadSource } from './payload.js';
import type { OverlayManifest, OverlayTemplate } from './types.js';

export interface PreparedOverlay {
  manifest: OverlayManifest;
  sources: PayloadSource[];
}

export async function prepareOverlay(resourceRoot: string): Promise<PreparedOverlay> {
  const template = await readJson<OverlayTemplate>(path.join(resourceRoot, 'overlay.template.json'));
  const { bundledFiles = [], ...manifestFields } = template;
  const manifest: OverlayManifest = manifestFields;
  const sources = await payloadSources(resourceRoot);

  for (const entry of bundledFiles) {
    const destination = String(entry.path).replaceAll('\\', '/');
    if (entry.kind !== 'mod' || !/^mods\/[^/]+\.jar$/u.test(destination)) {
      throw new Error(`Bundled mods must target a JAR directly under mods/: ${entry.path}`);
    }
    const sourceRelative = String(entry.source).replaceAll('\\', '/');
    if (!/^[^/]+\/.+\.jar$/u.test(sourceRelative)) {
      throw new Error(`Bundled mod sources must be JARs relative to tools/: ${entry.source}`);
    }
    const source = resolveInside(path.dirname(resourceRoot), sourceRelative);
    await assertRegularFile(source);
    const hashAlgorithm = entry.hashAlgorithm ?? 'SHA256';
    const expectedExistingHashes = (entry.expectedExistingHashes ?? []).map((hash) => hash.toLowerCase());
    manifest.files.push({
      path: destination,
      kind: 'mod',
      payload: `payload/${destination}`,
      hashAlgorithm,
      hash: await hashFile(source, hashAlgorithm),
      replacePolicy: entry.replacePolicy ?? 'known-base-only',
      expectedExistingHashes,
    });
    sources.push({
      path: destination,
      source,
      kind: 'mod',
      hashAlgorithm,
      replacePolicy: entry.replacePolicy ?? 'known-base-only',
      expectedExistingHashes,
    });
  }

  for (const entry of sources) {
    if (entry.kind === 'mod') continue;
    manifest.files.push({
      path: entry.path,
      kind: entry.kind,
      payload: `payload/${entry.path}`,
      hashAlgorithm: entry.hashAlgorithm,
      hash: await hashFile(entry.source, entry.hashAlgorithm),
      replacePolicy: entry.replacePolicy,
      expectedExistingHashes: entry.expectedExistingHashes,
    });
  }

  const seen = new Set<string>();
  for (const entry of [...manifest.files, ...(manifest.remove ?? [])]) {
    const normalized = String(entry.path).replaceAll('\\', '/');
    const comparisonKey = normalized.toLowerCase();
    if (seen.has(comparisonKey)) throw new Error(`Duplicate overlay path: ${normalized}`);
    seen.add(comparisonKey);
  }

  return { manifest, sources };
}

export function overlayArchiveName(manifest: OverlayManifest, client = false): string {
  return `Craftoria-${client ? 'Client-' : ''}Addon-${manifest.addonVersion}`;
}
