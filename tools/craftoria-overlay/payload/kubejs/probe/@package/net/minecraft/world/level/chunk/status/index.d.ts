import { $UnaryOperator_ } from "@package/java/util/function";
import { $ChunkTaskPriorityQueueSorter$Message, $ThreadedLevelLightEngine, $ServerLevel, $GenerationChunkHolder } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ProcessorHandle } from "@package/net/minecraft/util/thread";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Runnable_, $Enum, $Record, $Runnable } from "@package/java/lang";
import { $List, $EnumSet } from "@package/java/util";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $StaticCache2D } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/chunk/status" {
    export class $ChunkStatusTask {
    }
    export interface $ChunkStatusTask {
        doWork(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusTask}.
     */
    export type $ChunkStatusTask_ = ((arg0: $WorldGenContext, arg1: $ChunkStep, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess) => $CompletableFuture<$ChunkAccess>);
    export class $ChunkStatusTasks {
        constructor();
    }
    export class $ChunkStep$Builder {
        build(): $ChunkStep;
        setTask(task: $ChunkStatusTask_): $ChunkStep$Builder;
        addRequirement(status: $ChunkStatus_, radius: number): $ChunkStep$Builder;
        blockStateWriteRadius(blockStateWriteRadius: number): $ChunkStep$Builder;
        set task(value: $ChunkStatusTask_);
    }
    export class $WorldGenContext extends $Record {
        generator(): $ChunkGenerator;
        level(): $ServerLevel;
        lightEngine(): $ThreadedLevelLightEngine;
        structureManager(): $StructureTemplateManager;
        mainThreadMailBox(): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        constructor(arg0: $ServerLevel, arg1: $ChunkGenerator, arg2: $StructureTemplateManager, arg3: $ThreadedLevelLightEngine, arg4: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenContext}.
     */
    export type $WorldGenContext_ = { mainThreadMailBox?: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>, structureManager?: $StructureTemplateManager, level?: $ServerLevel, generator?: $ChunkGenerator, lightEngine?: $ThreadedLevelLightEngine,  } | [mainThreadMailBox?: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>, structureManager?: $StructureTemplateManager, level?: $ServerLevel, generator?: $ChunkGenerator, lightEngine?: $ThreadedLevelLightEngine, ];
    export class $ChunkPyramid extends $Record {
        steps(): $ImmutableList<$ChunkStep>;
        getStepTo(status: $ChunkStatus_): $ChunkStep;
        static GENERATION_PYRAMID: $ChunkPyramid;
        static LOADING_PYRAMID: $ChunkPyramid;
        constructor(arg0: $ImmutableList<$ChunkStep_>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkPyramid}.
     */
    export type $ChunkPyramid_ = { steps?: $ImmutableList<$ChunkStep_>,  } | [steps?: $ImmutableList<$ChunkStep_>, ];
    export class $ChunkDependencies {
        size(): number;
        get(radius: number): $ChunkStatus;
        asList(): $ImmutableList<$ChunkStatus>;
        getRadius(): number;
        getRadiusOf(status: $ChunkStatus_): number;
        constructor(dependencyByRadius: $ImmutableList<$ChunkStatus_>);
        get radius(): number;
    }
    export interface $ChunkStatus extends RegistryMarked<RegistryTypes.ChunkStatusTag, RegistryTypes.ChunkStatus> {}
    export class $ChunkPyramid$Builder {
        step(status: $ChunkStatus_, task: $UnaryOperator_<$ChunkStep$Builder>): $ChunkPyramid$Builder;
        build(): $ChunkPyramid;
        constructor();
    }
    export class $ChunkType extends $Enum<$ChunkType> {
        static values(): $ChunkType[];
        static valueOf(arg0: string): $ChunkType;
        static LEVELCHUNK: $ChunkType;
        static PROTOCHUNK: $ChunkType;
    }
    /**
     * Values that may be interpreted as {@link $ChunkType}.
     */
    export type $ChunkType_ = "protochunk" | "levelchunk";
    export class $ChunkStep extends $Record {
        apply(worldGenContext: $WorldGenContext_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        task(): $ChunkStatusTask;
        targetStatus(): $ChunkStatus;
        directDependencies(): $ChunkDependencies;
        accumulatedDependencies(): $ChunkDependencies;
        getAccumulatedRadiusOf(status: $ChunkStatus_): number;
        blockStateWriteRadius(): number;
        constructor(arg0: $ChunkStatus_, arg1: $ChunkDependencies, arg2: $ChunkDependencies, arg3: number, arg4: $ChunkStatusTask_);
    }
    /**
     * Values that may be interpreted as {@link $ChunkStep}.
     */
    export type $ChunkStep_ = { accumulatedDependencies?: $ChunkDependencies, directDependencies?: $ChunkDependencies, targetStatus?: $ChunkStatus_, task?: $ChunkStatusTask_, blockStateWriteRadius?: number,  } | [accumulatedDependencies?: $ChunkDependencies, directDependencies?: $ChunkDependencies, targetStatus?: $ChunkStatus_, task?: $ChunkStatusTask_, blockStateWriteRadius?: number, ];
    export class $ChunkStatus {
        getName(): string;
        static max(first: $ChunkStatus_, second: $ChunkStatus_): $ChunkStatus;
        getParent(): $ChunkStatus;
        getIndex(): number;
        isAfter(chunkStatus: $ChunkStatus_): boolean;
        isBefore(chunkStatus: $ChunkStatus_): boolean;
        static byName(name: string): $ChunkStatus;
        isOrBefore(chunkStatus: $ChunkStatus_): boolean;
        getChunkType(): $ChunkType;
        static getStatusList(): $List<$ChunkStatus>;
        heightmapsAfter(): $EnumSet<$Heightmap$Types>;
        isOrAfter(chunkStatus: $ChunkStatus_): boolean;
        parent: $ChunkStatus;
        static LIGHT: $ChunkStatus;
        index: number;
        static NOISE: $ChunkStatus;
        static MAX_STRUCTURE_DISTANCE: number;
        static SPAWN: $ChunkStatus;
        static FULL: $ChunkStatus;
        static FEATURES: $ChunkStatus;
        static STRUCTURE_STARTS: $ChunkStatus;
        static STRUCTURE_REFERENCES: $ChunkStatus;
        static FINAL_HEIGHTMAPS: $EnumSet<$Heightmap$Types>;
        static SURFACE: $ChunkStatus;
        static INITIALIZE_LIGHT: $ChunkStatus;
        static BIOMES: $ChunkStatus;
        static CARVERS: $ChunkStatus;
        static EMPTY: $ChunkStatus;
        get name(): string;
        get chunkType(): $ChunkType;
        static get statusList(): $List<$ChunkStatus>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatus}.
     */
    export type $ChunkStatus_ = RegistryTypes.ChunkStatus;
}
