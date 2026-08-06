import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setEnabled(arg0: boolean): void;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        getChecksumPolicy(): string;
        setChecksumPolicy(arg0: string): void;
        checkOutOfDate(arg0: $Date): boolean;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        getPassword(): string;
        setPassword(arg0: string): void;
        getPrivateKey(): string;
        getUsername(): string;
        setUsername(arg0: string): void;
        setPassphrase(arg0: string): void;
        getPassphrase(): string;
        setPrivateKey(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        setBlocked(arg0: boolean): void;
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getUrl(): string;
        getProxy(): $Proxy;
        getLayout(): $ArtifactRepositoryLayout;
        isBlocked(): boolean;
        setId(arg0: string): void;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        setProxy(arg0: $Proxy): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        pathOf(arg0: $Artifact): string;
        setUrl(arg0: string): void;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        findVersions(arg0: $Artifact): $List<string>;
        getAuthentication(): $Authentication;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        isProjectAware(): boolean;
        setAuthentication(arg0: $Authentication): void;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getBasedir(): string;
        get key(): string;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get basedir(): string;
    }
}
