import { $IMixinCompositePackResources, $IMixinFilePackResourcesSharedZipFileAccess, $IMixinFilePackResources, $IMixinPathPackResources, $IMixinVanillaPackResources } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FileTime } from "@package/java/nio/file/attribute";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $IoSupplier, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $InclusiveRange, $StringRepresentable, $HttpUtil$DownloadProgressListener, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $BiConsumer, $Consumer, $Consumer_ } from "@package/java/util/function";
import { $IPackResourcesExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Proxy, $URL } from "@package/java/net";
import { $Enum, $Record, $AutoCloseable, $Class } from "@package/java/lang";
import { $File, $InputStream, $File_ } from "@package/java/io";
import { $PackResourcesExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $HashFunction, $HashCode } from "@package/com/google/common/hash";
import { $ICachingResourcePack } from "@package/org/embeddedt/modernfix/resources";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PathPackResourcesAccessor, $VanillaPackResourcesAccessor, $FilePackResourcesAccessor } from "@package/team/creative/creativecore/mixin";
import { $ZipFile } from "@package/java/util/zip";
import { $Instant } from "@package/java/time";
import { $Pack$Position_, $PackSource, $Pack$Metadata_, $Pack$Position, $KnownPack_, $Pack$ResourcesSupplier, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PathPackResourcesAccessor as $PathPackResourcesAccessor$1 } from "@package/de/cristelknight/cristellib/mixin";
export * as repository from "@package/net/minecraft/server/packs/repository";
export * as linkfs from "@package/net/minecraft/server/packs/linkfs";
export * as resources from "@package/net/minecraft/server/packs/resources";
export * as metadata from "@package/net/minecraft/server/packs/metadata";

declare module "@package/net/minecraft/server/packs" {
    export class $VanillaPackResources implements $PackResources, $VanillaPackResourcesAccessor, $IMixinVanillaPackResources {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        asProvider(): $ResourceProvider;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        listRawPaths(packType: $PackType_, packLocation: $ResourceLocation_, output: $Consumer_<$Path>): void;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        getRootPaths_FancyMenu(): $List<$Path>;
        getPathsForType_FancyMenu(): $Map<$PackType, $List<$Path>>;
        getPathsForType(): $Map<$PackType, $List<$Path>>;
        get hidden(): boolean;
        get rootPaths_FancyMenu(): $List<$Path>;
        get pathsForType_FancyMenu(): $Map<$PackType, $List<$Path>>;
        get pathsForType(): $Map<$PackType, $List<$Path>>;
    }
    export class $PathPackResources$PathResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        openPrimary(location: $PackLocationInfo_): $PackResources;
        constructor(content: $Path_);
    }
    export class $DownloadQueue$LogEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$LogEntry}.
     */
    export type $DownloadQueue$LogEntry_ = { time?: $Instant, hash?: (string) | undefined, url?: string, id?: $UUID_, errorOrFileInfo?: $Either<string, $DownloadQueue$FileInfoEntry_>,  } | [time?: $Instant, hash?: (string) | undefined, url?: string, id?: $UUID_, errorOrFileInfo?: $Either<string, $DownloadQueue$FileInfoEntry_>, ];
    export class $DownloadCacheCleaner$PathAndTime extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadCacheCleaner$PathAndTime}.
     */
    export type $DownloadCacheCleaner$PathAndTime_ = { modifiedTime?: $FileTime, path?: $Path_,  } | [modifiedTime?: $FileTime, path?: $Path_, ];
    export class $DownloadCacheCleaner$PathAndPriority extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadCacheCleaner$PathAndPriority}.
     */
    export type $DownloadCacheCleaner$PathAndPriority_ = { removalPriority?: number, path?: $Path_,  } | [removalPriority?: number, path?: $Path_, ];
    export class $DownloadQueue implements $AutoCloseable {
        close(): void;
        downloadBatch(batchConfig: $DownloadQueue$BatchConfig_, downloads: $Map_<$UUID_, $DownloadQueue$DownloadRequest_>): $CompletableFuture<$DownloadQueue$BatchResult>;
        constructor(cacheDir: $Path_);
    }
    export class $DownloadQueue$BatchResult extends $Record {
        failed(): $Set<$UUID>;
        downloaded(): $Map<$UUID, $Path>;
        constructor();
        constructor(arg0: $Map_<$UUID_, $Path_>, arg1: $Set_<$UUID_>);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchResult}.
     */
    export type $DownloadQueue$BatchResult_ = { downloaded?: $Map_<$UUID_, $Path_>, failed?: $Set_<$UUID_>,  } | [downloaded?: $Map_<$UUID_, $Path_>, failed?: $Set_<$UUID_>, ];
    export class $BuiltInMetadata {
        get<T>(serializer: $MetadataSectionSerializer<T>): T;
        static of<T>(serializer: $MetadataSectionSerializer<T>, value: T): $BuiltInMetadata;
        static of<T1, T2>(serializer1: $MetadataSectionSerializer<T1>, value1: T1, serializer2: $MetadataSectionSerializer<T2>, value2: T2): $BuiltInMetadata;
        static of(): $BuiltInMetadata;
    }
    export class $DownloadCacheCleaner {
        static vacuumCacheDir(path: $Path_, maxEntries: number): void;
        constructor();
    }
    export class $CompositePackResources implements $PackResources, $PackResourcesExtension, $IMixinCompositePackResources {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        setFusionOverridesFolder(folder: string): void;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        getPackResourcesStack_FancyMenu(): $List<$PackResources>;
        getPrimaryPackResources_FancyMenu(): $PackResources;
        constructor(primaryPackResources: $PackResources, packResourcesStack: $List_<$PackResources>);
        set fusionOverridesFolder(value: string);
        get hidden(): boolean;
        get packResourcesStack_FancyMenu(): $List<$PackResources>;
        get primaryPackResources_FancyMenu(): $PackResources;
    }
    export class $FeatureFlagsMetadataSection extends $Record {
        flags(): $FeatureFlagSet;
        static TYPE: $MetadataSectionType<$FeatureFlagsMetadataSection>;
        constructor(arg0: $FeatureFlagSet);
    }
    /**
     * Values that may be interpreted as {@link $FeatureFlagsMetadataSection}.
     */
    export type $FeatureFlagsMetadataSection_ = { flags?: $FeatureFlagSet,  } | [flags?: $FeatureFlagSet, ];
    export class $FilePackResources$SharedZipFileAccess implements $AutoCloseable, $IMixinFilePackResourcesSharedZipFileAccess {
        close(): void;
        getOrCreateZipFile(): $ZipFile;
        getOrCreateZipFile_FancyMenu(): $ZipFile;
        file: $File;
        constructor(file: $File_);
        get orCreateZipFile(): $ZipFile;
        get orCreateZipFile_FancyMenu(): $ZipFile;
    }
    export class $PackResources {
        static PACK_META: string;
        static METADATA_EXTENSION: string;
    }
    export interface $PackResources extends $AutoCloseable, $IPackResourcesExtension {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
    }
    export class $FilePackResources extends $AbstractPackResources implements $PackResourcesExtension, $FilePackResourcesAccessor, $IMixinFilePackResources {
        static callGetPathFromLocation$creativecore_$md$f87c94$1(packType: $PackType_, location: $ResourceLocation_): string;
        setFusionOverridesFolder(folder: string): void;
        static extractNamespace(directory: string, name: string): string;
        getZipFileAccess_FancyMenu(): $FilePackResources$SharedZipFileAccess;
        getPrefix_FancyMenu(): string;
        getZipFileAccess(): $FilePackResources$SharedZipFileAccess;
        constructor(location: $PackLocationInfo_, zipFileAccess: $FilePackResources$SharedZipFileAccess, prefix: string);
        set fusionOverridesFolder(value: string);
        get zipFileAccess_FancyMenu(): $FilePackResources$SharedZipFileAccess;
        get prefix_FancyMenu(): string;
        get zipFileAccess(): $FilePackResources$SharedZipFileAccess;
    }
    export class $DownloadQueue$FileInfoEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$FileInfoEntry}.
     */
    export type $DownloadQueue$FileInfoEntry_ = { name?: string, size?: number,  } | [name?: string, size?: number, ];
    export class $OverlayMetadataSection extends $Record {
        overlays(): $List<$OverlayMetadataSection$OverlayEntry>;
        overlaysForVersion(version: number): $List<string>;
        static NEOFORGE_TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        static TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        constructor(overlays: $List_<$OverlayMetadataSection$OverlayEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $OverlayMetadataSection}.
     */
    export type $OverlayMetadataSection_ = { overlays?: $List_<$OverlayMetadataSection$OverlayEntry_>,  } | [overlays?: $List_<$OverlayMetadataSection$OverlayEntry_>, ];
    export class $DownloadQueue$BatchConfig extends $Record {
        proxy(): $Proxy;
        maxSize(): number;
        listener(): $HttpUtil$DownloadProgressListener;
        headers(): $Map<string, string>;
        hashFunction(): $HashFunction;
        constructor(arg0: $HashFunction, arg1: number, arg2: $Map_<string, string>, arg3: $Proxy, arg4: $HttpUtil$DownloadProgressListener);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchConfig}.
     */
    export type $DownloadQueue$BatchConfig_ = { headers?: $Map_<string, string>, maxSize?: number, proxy?: $Proxy, listener?: $HttpUtil$DownloadProgressListener, hashFunction?: $HashFunction,  } | [headers?: $Map_<string, string>, maxSize?: number, proxy?: $Proxy, listener?: $HttpUtil$DownloadProgressListener, hashFunction?: $HashFunction, ];
    export class $PackLocationInfo extends $Record {
        id(): string;
        source(): $PackSource;
        title(): $Component;
        knownPackInfo(): ($KnownPack) | undefined;
        createChatLink(enabled: boolean, text: $Component_): $Component;
        constructor(arg0: string, arg1: $Component_, arg2: $PackSource, arg3: ($KnownPack_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PackLocationInfo}.
     */
    export type $PackLocationInfo_ = { title?: $Component_, source?: $PackSource, id?: string, knownPackInfo?: ($KnownPack_) | undefined,  } | [title?: $Component_, source?: $PackSource, id?: string, knownPackInfo?: ($KnownPack_) | undefined, ];
    export class $VanillaPackResourcesBuilder {
        build(location: $PackLocationInfo_): $VanillaPackResources;
        applyDevelopmentConfig(): $VanillaPackResourcesBuilder;
        pushClasspathResources(packType: $PackType_, clazz: $Class<never>): $VanillaPackResourcesBuilder;
        pushAssetPath(packType: $PackType_, path: $Path_): $VanillaPackResourcesBuilder;
        pushJarResources(): $VanillaPackResourcesBuilder;
        setMetadata(metadata: $BuiltInMetadata): $VanillaPackResourcesBuilder;
        exposeNamespace(...namespaces: string[]): $VanillaPackResourcesBuilder;
        pushUniversalPath(path: $Path_): $VanillaPackResourcesBuilder;
        static developmentConfig: $Consumer<$VanillaPackResourcesBuilder>;
        constructor();
        set metadata(value: $BuiltInMetadata);
    }
    export class $PathPackResources extends $AbstractPackResources implements $PackResourcesExtension, $PathPackResourcesAccessor, $PathPackResourcesAccessor$1, $IMixinPathPackResources, $ICachingResourcePack {
        static getResource(location: $ResourceLocation_, path: $Path_): $IoSupplier<$InputStream>;
        invalidateCache(): void;
        static listPath(namespace: string, namespacePath: $Path_, decomposedPath: $List_<string>, resourceOutput: $PackResources$ResourceOutput_): void;
        static returnFileIfExists(path: $Path_): $IoSupplier<$InputStream>;
        setFusionOverridesFolder(folder: string): void;
        static validatePath(path: $Path_): boolean;
        getRoot(): $Path;
        cristellib$getRoot(): $Path;
        getRoot_FancyMenu(): $Path;
        constructor(location: $PackLocationInfo_, root: $Path_);
        set fusionOverridesFolder(value: string);
        get root(): $Path;
        get root_FancyMenu(): $Path;
    }
    export class $FilePackResources$FileResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        openPrimary(location: $PackLocationInfo_): $PackResources;
        constructor(content: $Path_);
        constructor(content: $File_);
    }
    export class $DownloadQueue$DownloadRequest extends $Record {
        hash(): $HashCode;
        url(): $URL;
        constructor(arg0: $URL, arg1: $HashCode | null);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$DownloadRequest}.
     */
    export type $DownloadQueue$DownloadRequest_ = { url?: $URL, hash?: $HashCode,  } | [url?: $URL, hash?: $HashCode, ];
    export class $PackResources$ResourceOutput {
    }
    export interface $PackResources$ResourceOutput extends $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>> {
    }
    /**
     * Values that may be interpreted as {@link $PackResources$ResourceOutput}.
     */
    export type $PackResources$ResourceOutput_ = (() => void);
    export class $PackType extends $Enum<$PackType> implements $StringRepresentable {
        static values(): $PackType[];
        static valueOf(arg0: string): $PackType;
        getSerializedName(): string;
        getDirectory(): string;
        getRemappedEnumConstantName(): string;
        static CLIENT_RESOURCES: $PackType;
        static SERVER_DATA: $PackType;
        get serializedName(): string;
        get directory(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackType}.
     */
    export type $PackType_ = "client_resources" | "server_data";
    export class $AbstractPackResources implements $PackResources {
        location(): $PackLocationInfo;
        static getMetadataFromStream<T>(deserializer: $MetadataSectionSerializer<T>, inputStream: $InputStream): T;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        get hidden(): boolean;
    }
    export class $PackSelectionConfig extends $Record {
        required(): boolean;
        defaultPosition(): $Pack$Position;
        fixedPosition(): boolean;
        constructor(arg0: boolean, arg1: $Pack$Position_, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PackSelectionConfig}.
     */
    export type $PackSelectionConfig_ = { required?: boolean, fixedPosition?: boolean, defaultPosition?: $Pack$Position_,  } | [required?: boolean, fixedPosition?: boolean, defaultPosition?: $Pack$Position_, ];
    export class $OverlayMetadataSection$OverlayEntry extends $Record {
        format(): $InclusiveRange<number>;
        overlay(): string;
        isApplicable(version: number): boolean;
        static CODEC: $Codec<$OverlayMetadataSection$OverlayEntry>;
        constructor(format: $InclusiveRange_<number>, overlay: string);
    }
    /**
     * Values that may be interpreted as {@link $OverlayMetadataSection$OverlayEntry}.
     */
    export type $OverlayMetadataSection$OverlayEntry_ = { overlay?: string, format?: $InclusiveRange_<number>,  } | [overlay?: string, format?: $InclusiveRange_<number>, ];
}
