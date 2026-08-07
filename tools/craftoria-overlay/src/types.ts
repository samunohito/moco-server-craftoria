export type HashAlgorithm = 'SHA256' | 'SHA512';
export type ReplacePolicy = 'known-base-only' | 'backup';

export interface OverlayFile {
  path: string;
  kind: 'mod' | 'kubejs' | 'config';
  url?: string;
  payload?: string;
  hashAlgorithm: HashAlgorithm;
  hash: string;
  replacePolicy?: ReplacePolicy;
  expectedExistingHashes?: string[];
}

export interface RemovedOverlayFile {
  path: string;
  hashAlgorithm: HashAlgorithm;
  hash: string;
}

export interface OverlayManifest {
  schemaVersion: number;
  addonVersion: string;
  target: {
    managedPackId: string;
    managedPackVersionId: string;
    managedPackVersion: string;
    minecraft: string;
    neoForge: string;
  };
  files: OverlayFile[];
  remove?: RemovedOverlayFile[];
}

export interface BundledOverlayFile {
  source: string;
  path: string;
  kind: 'mod';
  hashAlgorithm?: HashAlgorithm;
  replacePolicy?: ReplacePolicy;
  expectedExistingHashes?: string[];
}

export interface OverlayTemplate extends OverlayManifest {
  bundledFiles?: BundledOverlayFile[];
}
