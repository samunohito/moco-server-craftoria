import path from 'node:path';
import { hashFile, readJson } from './lib.js';
import { payloadSources, type PayloadSource } from './payload.js';
import type { OverlayManifest } from './types.js';

export interface PreparedOverlay {
  manifest: OverlayManifest;
  sources: PayloadSource[];
}

export async function prepareOverlay(resourceRoot: string): Promise<PreparedOverlay> {
  const manifest = await readJson<OverlayManifest>(path.join(resourceRoot, 'overlay.template.json'));
  const sources = await payloadSources(resourceRoot);

  for (const entry of sources) {
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
