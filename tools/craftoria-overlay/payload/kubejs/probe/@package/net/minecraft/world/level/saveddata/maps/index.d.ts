import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $StationMapData, $StationBlockEntity, $StationMarker } from "@package/com/simibubi/create/content/trains/station";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $FramedMap$MarkerRemover } from "@package/xfacthd/framedblocks/common/data/component";
import { $Record } from "@package/java/lang";
import { $CustomMapData$Type_, $ExpandedMapData } from "@package/net/mehvahdjukaar/moonlight/api/map";
import { $MapDecorationInjector } from "@package/de/dafuqs/spectrum/injectors";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $DyeColor_, $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MapStateAccessor } from "@package/de/dafuqs/spectrum/mixin/accessors";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IHoldingPlayerExtension } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $MLMapMarker } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";

declare module "@package/net/minecraft/world/level/saveddata/maps" {
    export class $MapBanner extends $Record {
        name(): ($Component) | undefined;
        getId(): string;
        color(): $DyeColor;
        pos(): $BlockPos;
        getDecoration(): $Holder<$MapDecorationType>;
        static fromWorld(level: $BlockGetter, pos: $BlockPos_): $MapBanner;
        static CODEC: $Codec<$MapBanner>;
        static LIST_CODEC: $Codec<$List<$MapBanner>>;
        constructor(arg0: $BlockPos_, arg1: $DyeColor_, arg2: ($Component_) | undefined);
        get id(): string;
        get decoration(): $Holder<$MapDecorationType>;
    }
    /**
     * Values that may be interpreted as {@link $MapBanner}.
     */
    export type $MapBanner_ = { name?: ($Component_) | undefined, color?: $DyeColor_, pos?: $BlockPos_,  } | [name?: ($Component_) | undefined, color?: $DyeColor_, pos?: $BlockPos_, ];
    export class $MapItemSavedData$MapPatch extends $Record {
        width(): number;
        height(): number;
        startX(): number;
        startY(): number;
        mapColors(): number[];
        applyToMap(savedData: $MapItemSavedData): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, ($MapItemSavedData$MapPatch) | undefined>;
        constructor(startX: number, startY: number, width: number, height: number, mapColors: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MapItemSavedData$MapPatch}.
     */
    export type $MapItemSavedData$MapPatch_ = { startY?: number, startX?: number, height?: number, mapColors?: number[], width?: number,  } | [startY?: number, startX?: number, height?: number, mapColors?: number[], width?: number, ];
    export class $MapFrame {
        static load(compoundTag: $CompoundTag_): $MapFrame;
        getId(): string;
        save(): $CompoundTag;
        getPos(): $BlockPos;
        getEntityId(): number;
        static frameId(pos: $BlockPos_): string;
        getRotation(): number;
        constructor(pos: $BlockPos_, rotation: number, entityId: number);
        get id(): string;
        get pos(): $BlockPos;
        get entityId(): number;
        get rotation(): number;
    }
    export class $MapIndex extends $SavedData {
        static load(tag: $CompoundTag_, registries: $HolderLookup$Provider): $MapIndex;
        static factory(): $SavedData$Factory<$MapIndex>;
        getFreeAuxValueForMap(): $MapId;
        static FILE_NAME: string;
        constructor();
        get freeAuxValueForMap(): $MapId;
    }
    export class $MapDecorationTypes {
        static bootstrap(registry: $Registry<$MapDecorationType_>): $Holder<$MapDecorationType>;
        static BLUE_MARKER: $Holder<$MapDecorationType>;
        static TARGET_POINT: $Holder<$MapDecorationType>;
        static BLUE_BANNER: $Holder<$MapDecorationType>;
        static LIGHT_BLUE_BANNER: $Holder<$MapDecorationType>;
        static SWAMP_HUT: $Holder<$MapDecorationType>;
        static FRAME: $Holder<$MapDecorationType>;
        static BLACK_BANNER: $Holder<$MapDecorationType>;
        static MAGENTA_BANNER: $Holder<$MapDecorationType>;
        static PLAINS_VILLAGE: $Holder<$MapDecorationType>;
        static PINK_BANNER: $Holder<$MapDecorationType>;
        static WOODLAND_MANSION: $Holder<$MapDecorationType>;
        static YELLOW_BANNER: $Holder<$MapDecorationType>;
        static RED_MARKER: $Holder<$MapDecorationType>;
        static DESERT_VILLAGE: $Holder<$MapDecorationType>;
        static TRIAL_CHAMBERS: $Holder<$MapDecorationType>;
        static PLAYER_OFF_LIMITS: $Holder<$MapDecorationType>;
        static ORANGE_BANNER: $Holder<$MapDecorationType>;
        static PURPLE_BANNER: $Holder<$MapDecorationType>;
        static TARGET_X: $Holder<$MapDecorationType>;
        static BROWN_BANNER: $Holder<$MapDecorationType>;
        static RED_X: $Holder<$MapDecorationType>;
        static RED_BANNER: $Holder<$MapDecorationType>;
        static GRAY_BANNER: $Holder<$MapDecorationType>;
        static JUNGLE_TEMPLE: $Holder<$MapDecorationType>;
        static OCEAN_MONUMENT: $Holder<$MapDecorationType>;
        static LIGHT_GRAY_BANNER: $Holder<$MapDecorationType>;
        static CYAN_BANNER: $Holder<$MapDecorationType>;
        static GREEN_BANNER: $Holder<$MapDecorationType>;
        static PLAYER: $Holder<$MapDecorationType>;
        static PLAYER_OFF_MAP: $Holder<$MapDecorationType>;
        static WHITE_BANNER: $Holder<$MapDecorationType>;
        static LIME_BANNER: $Holder<$MapDecorationType>;
        static SAVANNA_VILLAGE: $Holder<$MapDecorationType>;
        static SNOWY_VILLAGE: $Holder<$MapDecorationType>;
        static TAIGA_VILLAGE: $Holder<$MapDecorationType>;
        constructor();
    }
    export class $MapId extends $Record {
        id(): number;
        key(): string;
        static CODEC: $Codec<$MapId>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapId>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $MapId}.
     */
    export type $MapId_ = { id?: number,  } | [id?: number, ];
    export class $MapItemSavedData extends $SavedData implements $MapStateAccessor, $ExpandedMapData, $StationMapData, $FramedMap$MarkerRemover {
        static load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): $MapItemSavedData;
        static factory(): $SavedData$Factory<$MapItemSavedData>;
        setColor(x: number, z: number, color: number): void;
        ml$toggleCustomDecoration(accessor: $LevelAccessor, pos: $BlockPos_): boolean;
        locked(): $MapItemSavedData;
        addStationMarker(arg0: $StationMarker): void;
        addDecoration(decorationType: $Holder_<$MapDecorationType>, level: $LevelAccessor | null, id: string, x: number, arg4: number, z: number, arg6: $Component_ | null): void;
        removeDecoration(identifier: string): void;
        ml$addCustomMarker(arg0: $MLMapMarker<any>): void;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        static addTargetDecoration(stack: $ItemStack_, pos: $BlockPos_, type: string, mapDecorationType: $Holder_<$MapDecorationType>): void;
        /**
         * Adds the player passed to the list of visible players and checks to see which players are visible
         */
        tickCarriedBy(player: $Player, mapStack: $ItemStack_): void;
        ml$getCustomData(): $Map<any, any>;
        getHoldingPlayer(player: $Player): $MapItemSavedData$HoldingPlayer;
        updateColor(x: number, z: number, color: number): boolean;
        checkBanners(reader: $BlockGetter, x: number, z: number): void;
        static createFresh(x: number, arg1: number, z: number, arg3: boolean, scale: boolean, trackingPosition: $ResourceKey_<$Level>): $MapItemSavedData;
        toggleBanner(accessor: $LevelAccessor, pos: $BlockPos_): boolean;
        getUpdatePacket(mapId: $MapId_, player: $Player): $Packet<never>;
        modifyReturnValue$jid000$moonlight$ml$isExplorationMap(arg0: boolean): boolean;
        getBanners(): $Collection<$MapBanner>;
        ml$copy(): $MapItemSavedData;
        addClientSideDecorations(decorations: $List_<$MapDecoration_>): void;
        ml$getCustomMarkers(): $Map<any, any>;
        ml$removeCustomMarker(arg0: string): boolean;
        ml$getCustomDecorations(): $Map<any, any>;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        ml$resetCustomDecoration(): void;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        setDecorationsDirty(): void;
        ml$setCustomDataDirty(arg0: $CustomMapData$Type_<any, any>, arg1: $Consumer_<any>): void;
        removedFromFrame(pos: $BlockPos_, entityId: number): void;
        handler$jid000$moonlight$checkCustomDeco(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$kli000$create$onCheckBanners(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$jid000$moonlight$tickCarriedBy(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        static createForClient(scale: number, locked: boolean, dimension: $ResourceKey_<$Level>): $MapItemSavedData;
        /**
         * Whether this `SavedData` needs saving to disk.
         */
        isExplorationMap(): boolean;
        handler$jid000$moonlight$initCustomData(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ResourceKey_<any>, arg7: $CallbackInfo): void;
        scaled(): $MapItemSavedData;
        handler$jid000$moonlight$scaled(arg0: $CallbackInfoReturnable<any>): void;
        handler$jid000$moonlight$locked(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        ml$setCustomDecorationsDirty(): void;
        handler$jid000$moonlight$save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        framedblocks$removeMapMarker(arg0: $BlockPos_): void;
        ml$getVanillaDecorationSize(): number;
        isTrackedCountOverLimit(trackedCount: number): boolean;
        getBannerMarkers(): $Map<string, $MapBanner>;
        getDecorations(): $Map<string, $MapDecoration>;
        invokeRemoveDecoration(identifier: string): void;
        /**
         * Whether this `SavedData` needs saving to disk.
         */
        getTrackingPosition(): boolean;
        getTrackedDecorationCount(): number;
        setTrackedDecorationCount(arg0: number): void;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        invokeSetDecorationsDirty(): void;
        /**
         * Whether this `SavedData` needs saving to disk.
         */
        getUnlimitedTracking(): boolean;
        trackedDecorationCount: number;
        bannerMarkers: $Map<string, $MapBanner>;
        centerZ: number;
        static TRACKED_DECORATION_LIMIT: number;
        centerX: number;
        frameMarkers: $Map<string, $MapFrame>;
        scale: number;
        decorations: $Map<string, $MapDecoration>;
        colors: number[];
        moonlight$customData: $Map<any, any>;
        moonlight$customDecorations: $Map<any, any>;
        static MAX_SCALE: number;
        dimension: $ResourceKey<$Level>;
        constructor(x: number, z: number, scale: number, trackingPosition: boolean, unlimitedTracking: boolean, locked: boolean, dimension: $ResourceKey_<$Level>);
        get banners(): $Collection<$MapBanner>;
        get explorationMap(): boolean;
        get trackingPosition(): boolean;
        get unlimitedTracking(): boolean;
    }
    export class $MapDecorationType extends $Record {
        trackCount(): boolean;
        assetId(): $ResourceLocation;
        showOnItemFrame(): boolean;
        hasMapColor(): boolean;
        explorationMapElement(): boolean;
        mapColor(): number;
        static CODEC: $Codec<$Holder<$MapDecorationType>>;
        static NO_MAP_COLOR: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MapDecorationType>>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MapDecorationType}.
     */
    export type $MapDecorationType_ = RegistryTypes.MapDecorationType | { explorationMapElement?: boolean, trackCount?: boolean, showOnItemFrame?: boolean, mapColor?: number, assetId?: $ResourceLocation_,  } | [explorationMapElement?: boolean, trackCount?: boolean, showOnItemFrame?: boolean, mapColor?: number, assetId?: $ResourceLocation_, ];
    export class $MapDecoration extends $Record implements $MapDecorationInjector {
        name(): ($Component) | undefined;
        type(): $Holder<$MapDecorationType>;
        x(): number;
        y(): number;
        rot(): number;
        getSpriteLocation(): $ResourceLocation;
        spectrum$setScale(arg0: number): void;
        renderOnFrame(): boolean;
        spectrum$getScale(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MapDecoration>;
        constructor(type: $Holder_<$MapDecorationType>, x: number, y: number, rot: number, name: ($Component_) | undefined);
        get spriteLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MapDecoration}.
     */
    export type $MapDecoration_ = { rot?: number, x?: number, name?: ($Component_) | undefined, type?: $Holder_<$MapDecorationType>, y?: number,  } | [rot?: number, x?: number, name?: ($Component_) | undefined, type?: $Holder_<$MapDecorationType>, y?: number, ];
    export class $MapItemSavedData$HoldingPlayer implements $IHoldingPlayerExtension {
        moonlight$setCustomDataDirty(arg0: $CustomMapData$Type_<any, any>, arg1: $Consumer_<any>): void;
        moonlight$setCustomMarkersDirty(): void;
        handler$jgo000$moonlight$checkLocked(arg0: $MapId_, arg1: $CallbackInfoReturnable<any>): void;
        handler$jgo000$moonlight$initializeDirty(arg0: $MapItemSavedData, arg1: $Player, arg2: $CallbackInfo): void;
        handler$jgo000$moonlight$sanityCheck(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        handler$jgo000$moonlight$lockData(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        modifyReturnValue$jgo000$moonlight$addExtraPacketData(arg0: $Packet<any>, arg1: $MapId_): $Packet<any>;
        step: number;
        player: $Player;
    }
    export interface $MapDecorationType extends RegistryMarked<RegistryTypes.MapDecorationTypeTag, RegistryTypes.MapDecorationType> {}
}
