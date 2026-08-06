import { $LongConsumer_ } from "@package/java/util/function";
import { $LongSet, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Stream } from "@package/java/util/stream";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";

declare module "@package/dev/lambdaurora/lambdynlights/engine/source" {
    export class $EntityDynamicLightSource {
    }
    export interface $EntityDynamicLightSource extends $DynamicLightSource {
        getDynamicLightX(): number;
        getLuminance(): number;
        dynamicLightTick(): void;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        isDynamicLightEnabled(): boolean;
        getDynamicLightY(): number;
        resetDynamicLight(): void;
        getDynamicLightZ(): number;
        get dynamicLightX(): number;
        get luminance(): number;
        get dynamicLightEnabled(): boolean;
        get dynamicLightY(): number;
        get dynamicLightZ(): number;
    }
    export class $EntityDynamicLightSourceBehavior {
        static tickEntity(entity: $Entity): void;
    }
    export interface $EntityDynamicLightSourceBehavior extends $EntityDynamicLightSource {
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        updateDynamicLightPreviousCoordinates(): void;
        lambdynlights$setTrackedLitChunkPos(arg0: $LongSet): void;
        setDynamicLightEnabled(enabled: boolean): void;
        setLuminance(arg0: number): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        getDynamicLightPrevY(): number;
        setLastDynamicLuminance(arg0: number): void;
        getLastDynamicLuminance(): number;
        getDynamicLightPrevZ(): number;
        getDynamicLightPrevX(): number;
        set dynamicLightEnabled(value: boolean);
        set luminance(value: number);
        get dynamicLightPrevY(): number;
        get dynamicLightPrevZ(): number;
        get dynamicLightPrevX(): number;
    }
    export class $DynamicLightSource {
        static gatherClosestChunks(x: number, y: number, z: number, chunkConsumer: $LongConsumer_): void;
    }
    export interface $DynamicLightSource {
        getDynamicLightId(): number;
        splitIntoDynamicLightEntries(arg0: $CellHasher): $Stream<$SpatialLookupEntry>;
        getDynamicLightChunksToRebuild(arg0: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        get dynamicLightId(): number;
    }
}
