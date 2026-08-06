import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Object } from "@package/java/lang";

declare module "@package/org/apache/maven/repository/legacy/metadata" {
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata {
        merge(arg0: $ArtifactMetadata): void;
        getKey(): $Object;
        getBaseVersion(): string;
        getArtifactId(): string;
        getGroupId(): string;
        getLocalFilename(arg0: $ArtifactRepository): string;
        getRemoteFilename(): string;
        extendedToString(): string;
        storedInArtifactVersionDirectory(): boolean;
        storedInGroupDirectory(): boolean;
        storeInLocalRepository(arg0: $ArtifactRepository, arg1: $ArtifactRepository): void;
        get key(): $Object;
        get baseVersion(): string;
        get artifactId(): string;
        get groupId(): string;
        get remoteFilename(): string;
    }
}
