import { $ILightMixinInterface, $ILevelLightEngineMix } from "@package/tv/soaryn/xycraft/machines/utils/mixins";
import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $LongOpenHashSet, $LongLinkedOpenHashSet, $Long2LongLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SkyLightSectionStorageExtension } from "@package/dev/engine_room/flywheel/backend";
import { $DataLayer, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $SequencedSet } from "@package/java/util";
import { $LayerLightSectionStorageAccessor, $SkyDataLayerStorageMapAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";
import { $LongPredicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Object } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getLightValue(levelPos: $BlockPos_): number;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
    }
    export class $DynamicGraphMinFixedPoint {
        removeIf(predicate: $LongPredicate_): void;
        getQueueSize(): number;
        static SOURCE: number;
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static isFromEmptyShape(entry: number): boolean;
        static getFromLevel(entry: number): number;
        static decreaseAllDirections(level: number): number;
        static increaseLightFromEmission(level: number, fromEmptyShape: boolean): number;
        static isIncreaseFromEmission(entry: number): boolean;
        static shouldPropagateInDirection(entry: number, arg1: $Direction_): boolean;
        static increaseOnlyOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static increaseSkipOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static decreaseSkipOneDirection(level: number, direction: $Direction_): number;
        static increaseSkySourceInDirections(down: boolean, north: boolean, south: boolean, west: boolean, east: boolean): number;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        getLayer(index: number): $DataLayer;
        copy(): M;
        clearCache(): void;
        removeLayer(index: number): $DataLayer;
        hasLayer(sectionPos: number): boolean;
        disableCache(): void;
        setLayer(sectionPos: number, arg1: $DataLayer): void;
        copyDataLayer(index: number): $DataLayer;
    }
    export class $LevelLightEngine implements $LightEventListener, $ILevelLightEngineMix {
        checkBlock(pos: $BlockPos_): void;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        getDebugData(lightLayer: $LightLayer_, sectionPos: $SectionPos): string;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getLayerListener(type: $LightLayer_): $LayerLightEventListener;
        setLightEnabled(pos: $ChunkPos, retain: boolean): void;
        runLightUpdates(): number;
        lightOnInSection(sectionPos: $SectionPos): boolean;
        queueSectionData(lightLayer: $LightLayer_, sectionPos: $SectionPos, dataLayer: $DataLayer | null): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        xycraft$checkVolume(pos: $BlockPos_): void;
        getLightSectionCount(): number;
        retainData(pos: $ChunkPos, retain: boolean): void;
        getMaxLightSection(): number;
        getMinLightSection(): number;
        hasLightWork(): boolean;
        handler$cha000$nolijium$a(arg0: $CallbackInfoReturnable<any>): void;
        handler$cha000$nolijium$a(arg0: $BlockPos_, arg1: $CallbackInfo): void;
        getDebugSectionType(lightLayer: $LightLayer_, sectionPos: $SectionPos): $LayerLightSectionStorage$SectionType;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        constructor(lightChunkGetter: $LightChunkGetter, blockLight: boolean, skyLight: boolean);
        get lightSectionCount(): number;
        get maxLightSection(): number;
        get minLightSection(): number;
    }
    export class $SpatialLongSet$InternalMap extends $Long2LongLinkedOpenHashMap {
        lastKey(): number;
        firstKey(): number;
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $SpatialLongSet extends $LongLinkedOpenHashSet {
        last(): number;
        reversed(): $SequencedSet<number>;
        constructor(expectedSize: number, loadFactor: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        xycraft$volumesToCheck: $LongOpenHashSet;
        static MAX_LEVEL: number;
        constructor(chunkSource: $LightChunkGetter);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $ILightMixinInterface, $LightEngineAccessor<any, any> {
        static hasDifferentLightProperties(level: $BlockGetter, pos: $BlockPos_, state1: $BlockState_, state2: $BlockState_): boolean;
        checkBlock(pos: $BlockPos_): void;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        getDebugData(sectionPos: number): string;
        getLightValue(levelPos: $BlockPos_): number;
        static getOcclusionShape(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, direction: $Direction_): $VoxelShape;
        static getLightBlockInto(level: $BlockGetter, state1: $BlockState_, pos1: $BlockPos_, state2: $BlockState_, pos2: $BlockPos_, direction: $Direction_, defaultReturnValue: number): number;
        setLightEnabled(chunkPos: $ChunkPos, retainData: boolean): void;
        runLightUpdates(): number;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        xycraft$checkVolume(pos: $BlockPos_): void;
        retainData(chunkPos: $ChunkPos, retainData: boolean): void;
        hasLightWork(): boolean;
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        flywheel$storage(): $Object;
        xycraft$volumesToCheck: $LongOpenHashSet;
        static MAX_LEVEL: number;
    }
    export class $LeveledPriorityQueue {
        isEmpty(): boolean;
        enqueue(value: number, arg1: number): void;
        dequeue(value: number, arg1: number, levelIndex: number): void;
        removeFirstLong(): number;
        constructor(levelCount: number, expectedSize: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        flywheel$skyDataLayer(sectionPos: number): $DataLayer;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        checkBlock(pos: $BlockPos_): void;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        getLightValue(levelPos: $BlockPos_): number;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        runLightUpdates(): number;
        propagateLightSources(chunkPos: $ChunkPos): void;
        hasLightWork(): boolean;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static INSTANCE: $LayerLightEventListener$DummyLightLayerEventListener;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightEventListener$DummyLightLayerEventListener}.
     */
    export type $LayerLightEventListener$DummyLightLayerEventListener_ = "instance";
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        checkBlock(pos: $BlockPos_): void;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        runLightUpdates(): number;
        propagateLightSources(chunkPos: $ChunkPos): void;
        hasLightWork(): boolean;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        lightOnInSection(sectionPos: number): boolean;
        retainData(sectionColumnPos: number, arg1: boolean): void;
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        setStoredLevel(levelPos: number, arg1: number): void;
        getStoredLevel(levelPos: number): number;
        getDataLayerData(sectionPos: number): $DataLayer;
        storingLightForSection(sectionPos: number): boolean;
        flywheel$callGetDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
    }
    export class $ChunkSkyLightSources {
        update(level: $BlockGetter, x: number, y: number, z: number): boolean;
        fillFrom(chunk: $ChunkAccess): void;
        getLowestSourceY(x: number, z: number): number;
        getHighestLowestSourceY(): number;
        static NEGATIVE_INFINITY: number;
        constructor(level: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $BlockLightSectionStorage$BlockDataLayerStorageMap extends $DataLayerStorageMap<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
    }
    export class $SkyLightSectionStorage$SkyDataLayerStorageMap extends $DataLayerStorageMap<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyDataLayerStorageMapAccessor {
    }
    export class $BlockLightEngine extends $LightEngine<$BlockLightSectionStorage$BlockDataLayerStorageMap, $BlockLightSectionStorage> {
        xycraft$volumesToCheck: $LongOpenHashSet;
        static MAX_LEVEL: number;
        constructor(chunkSource: $LightChunkGetter);
        constructor(chunkSource: $LightChunkGetter, storage: $BlockLightSectionStorage);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
    }
}
