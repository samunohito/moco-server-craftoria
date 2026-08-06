import { $PackExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $List, $Collection_, $List_, $Collection, $Set } from "@package/java/util";
import { $InclusiveRange, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $UnaryOperator } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $FusionPackMetadata } from "@package/com/supermartijn642/fusion/resources";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $PackSelectionConfig_, $PackResources, $PackType_, $PackLocationInfo, $PackLocationInfo_, $VanillaPackResources, $PackSelectionConfig } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $PackMetadataSection_ } from "@package/net/minecraft/server/packs/metadata/pack";
import { $DirectoryValidator, $ForbiddenSymlinkInfo_ } from "@package/net/minecraft/world/level/validation";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/server/packs/repository" {
    export class $Pack$Position extends $Enum<$Pack$Position> {
        static values(): $Pack$Position[];
        insert<T>(list: $List_<T>, element: T, packFactory: $Function_<T, $PackSelectionConfig>, flipPosition: boolean): number;
        static valueOf(arg0: string): $Pack$Position;
        opposite(): $Pack$Position;
        static TOP: $Pack$Position;
        static BOTTOM: $Pack$Position;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Position}.
     */
    export type $Pack$Position_ = "top" | "bottom";
    export class $PackSource {
        static create(decorator: $UnaryOperator_<$Component>, shouldAddAutomatically: boolean): $PackSource;
        static BUILT_IN: $PackSource;
        static SERVER: $PackSource;
        static FEATURE: $PackSource;
        static NO_DECORATION: $UnaryOperator<$Component>;
        static WORLD: $PackSource;
        static DEFAULT: $PackSource;
    }
    export interface $PackSource {
        shouldAddAutomatically(): boolean;
        decorate(name: $Component_): $Component;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        openPrimary(location: $PackLocationInfo_): $PackResources;
    }
    export class $FolderRepositorySource implements $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
        static discoverPacks(folder: $Path_, validator: $DirectoryValidator, output: $BiConsumer_<$Path, $Pack$ResourcesSupplier>): void;
        constructor(folder: $Path_, packType: $PackType_, packSource: $PackSource, validator: $DirectoryValidator);
    }
    export class $PackRepository {
        reload(): void;
        isAvailable(id: string): boolean;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        openAllSelected(): $List<$PackResources>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedPacks(): $Collection<$Pack>;
        setSelected(ids: $Collection_<string>): void;
        static displayPackList(packs: $Collection_<$Pack>): string;
        removePack(id: string): boolean;
        getPack(id: string): $Pack;
        addPack(id: string): boolean;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedIds(): $Collection<string>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailableIds(): $Collection<string>;
        rebuildSelected(ids: $Collection_<string>): $List<$Pack>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailablePacks(): $Collection<$Pack>;
        addPackFinder(arg0: $RepositorySource_): void;
        sources: $Set<$RepositorySource>;
        constructor(...sources: $RepositorySource_[]);
        get requestedFeatureFlags(): $FeatureFlagSet;
        get selectedPacks(): $Collection<$Pack>;
        set selected(value: $Collection_<string>);
        get selectedIds(): $Collection<string>;
        get availableIds(): $Collection<string>;
        get availablePacks(): $Collection<$Pack>;
    }
    export class $KnownPack extends $Record {
        version(): string;
        id(): string;
        static vanilla(name: string): $KnownPack;
        namespace(): string;
        isVanilla(): boolean;
        static VANILLA_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnownPack>;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $KnownPack}.
     */
    export type $KnownPack_ = { namespace?: string, version?: string, id?: string,  } | [namespace?: string, version?: string, id?: string, ];
    export class $FolderRepositorySource$FolderPackDetector extends $PackDetector<$Pack$ResourcesSupplier> {
    }
    export class $PackDetector<T> {
        detectPackResources(path: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): T;
    }
    export class $ServerPacksSource extends $BuiltInPackSource {
        static createVanillaPackSource(): $VanillaPackResources;
        static createPackRepository(folder: $Path_, validator: $DirectoryValidator): $PackRepository;
        static createPackRepository(level: $LevelStorageSource$LevelStorageAccess): $PackRepository;
        static createVanillaTrustedRepository(): $PackRepository;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(validator: $DirectoryValidator);
    }
    export class $Pack$Metadata extends $Record {
        isHidden(): boolean;
        description(): $Component;
        compatibility(): $PackCompatibility;
        overlays(): $List<string>;
        requestedFeatures(): $FeatureFlagSet;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: $PackCompatibility_, arg2: $FeatureFlagSet, arg3: $List_<string>);
        constructor(description: $Component_, compatibility: $PackCompatibility_, requestedFeatures: $FeatureFlagSet, overlays: $List_<string>, isHidden: boolean);
        get hidden(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Metadata}.
     */
    export type $Pack$Metadata_ = { compatibility?: $PackCompatibility_, overlays?: $List_<string>, description?: $Component_, requestedFeatures?: $FeatureFlagSet, isHidden?: boolean,  } | [compatibility?: $PackCompatibility_, overlays?: $List_<string>, description?: $Component_, requestedFeatures?: $FeatureFlagSet, isHidden?: boolean, ];
    export class $PackCompatibility extends $Enum<$PackCompatibility> {
        static values(): $PackCompatibility[];
        static valueOf(arg0: string): $PackCompatibility;
        getDescription(): $Component;
        isCompatible(): boolean;
        static forVersion(range: $InclusiveRange_<number>, version: number): $PackCompatibility;
        getConfirmation(): $Component;
        static TOO_OLD: $PackCompatibility;
        static COMPATIBLE: $PackCompatibility;
        static TOO_NEW: $PackCompatibility;
        get description(): $Component;
        get compatible(): boolean;
        get confirmation(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PackCompatibility}.
     */
    export type $PackCompatibility_ = "too_old" | "too_new" | "compatible";
    export class $RepositorySource {
    }
    export interface $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
    }
    /**
     * Values that may be interpreted as {@link $RepositorySource}.
     */
    export type $RepositorySource_ = ((arg0: $Consumer<$Pack>) => void);
    export class $Pack implements $PackExtension {
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        getChildren(): $List<$Pack>;
        isRequired(): boolean;
        getDescription(): $Component;
        static getDeclaredPackVersions(id: string, metadata: $PackMetadataSection_): $InclusiveRange<number>;
        streamSelfAndChildren(): $Stream<$Pack>;
        getRequestedFeatures(): $FeatureFlagSet;
        getTitle(): $Component;
        hidden(): $Pack;
        getCompatibility(): $PackCompatibility;
        isFixedPosition(): boolean;
        static readMetaAndCreate(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, packType: $PackType_, selectionConfig: $PackSelectionConfig_): $Pack;
        static readPackMetadata(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, version: number): $Pack$Metadata;
        getDefaultPosition(): $Pack$Position;
        selectionConfig(): $PackSelectionConfig;
        getPackSource(): $PackSource;
        withChildren(arg0: $List_<$Pack>): $Pack;
        getFusionMetadata(): $FusionPackMetadata;
        getChatLink(green: boolean): $Component;
        constructor(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, metadata: $Pack$Metadata_, selectionConfig: $PackSelectionConfig_);
        get id(): string;
        get children(): $List<$Pack>;
        get required(): boolean;
        get description(): $Component;
        get requestedFeatures(): $FeatureFlagSet;
        get title(): $Component;
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
        get defaultPosition(): $Pack$Position;
        get packSource(): $PackSource;
        get fusionMetadata(): $FusionPackMetadata;
    }
    export class $BuiltInPackSource implements $RepositorySource {
        loadPacks(packConsumer: $Consumer_<$Pack>): void;
        static fromName(arg0: $Function_<$PackLocationInfo, $PackResources>): $Pack$ResourcesSupplier;
        getVanillaPack(): $VanillaPackResources;
        static fixedResources(resources: $PackResources): $Pack$ResourcesSupplier;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(packType: $PackType_, vanillaPack: $VanillaPackResources, packDir: $ResourceLocation_, validator: $DirectoryValidator);
        get vanillaPack(): $VanillaPackResources;
    }
}
