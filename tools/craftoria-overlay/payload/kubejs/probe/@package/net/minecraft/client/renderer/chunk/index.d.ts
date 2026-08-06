import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SectionBufferBuilderPack, $RenderBuffers, $RenderType, $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Set_, $List_, $Map } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $AddSectionGeometryEvent$AdditionalSectionRenderer_ } from "@package/net/neoforged/neoforge/client/event";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $Holder, $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $ClipContext, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $RenderDataMapConsumer } from "@package/net/fabricmc/fabric/impl/blockview/client";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $MeshData, $MeshData$SortState, $VertexSorting_, $ByteBufferBuilder$Result, $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/client/renderer/chunk" {
    export class $SectionRenderDispatcher$RenderSection {
        getBuffer(renderType: $RenderType): $VertexBuffer;
        isDirty(): boolean;
        hasAllNeighbors(): boolean;
        getRelativeOrigin(direction: $Direction_): $BlockPos;
        rebuildSectionAsync(sectionRenderDispatcher: $SectionRenderDispatcher, regionCache: $RenderRegionCache): void;
        getOrigin(): $BlockPos;
        setDirty(playerChanged: boolean): void;
        getBoundingBox(): $AABB;
        isDirtyFromPlayer(): boolean;
        setNotDirty(): void;
        getCompiled(): $SectionRenderDispatcher$CompiledSection;
        setOrigin(x: number, y: number, z: number): void;
        isAxisAlignedWith(x: number, y: number, z: number): boolean;
        releaseBuffers(): void;
        compileSync(regionCache: $RenderRegionCache): void;
        resortTransparency(renderType: $RenderType, sectionRenderDispatcher: $SectionRenderDispatcher): boolean;
        createCompileTask(regionCache: $RenderRegionCache): $SectionRenderDispatcher$RenderSection$CompileTask;
        compiled: $AtomicReference<$SectionRenderDispatcher$CompiledSection>;
        static SIZE: number;
        index: number;
        constructor(index: $SectionRenderDispatcher, originX: number, originY: number, originZ: number, arg4: number);
        get boundingBox(): $AABB;
        get dirtyFromPlayer(): boolean;
    }
    export class $SectionRenderDispatcher {
        schedule(task: $SectionRenderDispatcher$RenderSection$CompileTask): void;
        setLevel(level: $ClientLevel): void;
        dispose(): void;
        uploadAllPendingUploads(): void;
        getStats(): string;
        getFreeBufferCount(): number;
        isQueueEmpty(): boolean;
        setCamera(camera: $Vec3_): void;
        blockUntilClear(): void;
        rebuildSectionSync(section: $SectionRenderDispatcher$RenderSection, regionCache: $RenderRegionCache): void;
        getCameraPosition(): $Vec3;
        getToBatchCount(): number;
        uploadSectionLayer(meshData: $MeshData, vertexBuffer: $VertexBuffer): $CompletableFuture<void>;
        getToUpload(): number;
        uploadSectionIndexBuffer(result: $ByteBufferBuilder$Result, vertexBuffer: $VertexBuffer): $CompletableFuture<void>;
        constructor(level: $ClientLevel, renderer: $LevelRenderer, executor: $Executor_, buffers: $RenderBuffers, blockRenderer: $BlockRenderDispatcher, blockEntityRenderer: $BlockEntityRenderDispatcher);
        set level(value: $ClientLevel);
        get stats(): string;
        get freeBufferCount(): number;
        get queueEmpty(): boolean;
        set camera(value: $Vec3_);
        get cameraPosition(): $Vec3;
        get toBatchCount(): number;
        get toUpload(): number;
    }
    export class $RenderRegionCache$ChunkInfo {
        chunk(): $LevelChunk;
        renderChunk(): $RenderChunk;
    }
    export class $RenderChunk {
    }
    export class $SectionRenderDispatcher$CompiledSection {
        isEmpty(renderType: $RenderType): boolean;
        facesCanSeeEachother(face1: $Direction_, face2: $Direction_): boolean;
        hasNoRenderableLayers(): boolean;
        getRenderableBlockEntities(): $List<$BlockEntity>;
        static UNCOMPILED: $SectionRenderDispatcher$CompiledSection;
        static EMPTY: $SectionRenderDispatcher$CompiledSection;
        constructor();
        get renderableBlockEntities(): $List<$BlockEntity>;
    }
    export class $RenderChunkRegion implements $BlockAndTintGetter, $RenderDataMapConsumer, $RenderAttachedBlockView {
        static index(minX: number, minZ: number, x: number, z: number): number;
        getHeight(): number;
        getLightEngine(): $LevelLightEngine;
        getMinBuildHeight(): number;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getFluidState(pos: $BlockPos_): $FluidState;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
        getShade(direction: $Direction_, shade: boolean): number;
        hasBiomes(): boolean;
        getBlockTint(pos: $BlockPos_, colorResolver: $ColorResolver_): number;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        fabric_acceptRenderDataMap(arg0: $Long2ObjectMap<any>): void;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        getLightEmission(pos: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getMaxSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getMaxBuildHeight(): number;
        getMinSection(): number;
        getSectionsCount(): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        static RADIUS: number;
        static SIZE: number;
        get height(): number;
        get lightEngine(): $LevelLightEngine;
        get minBuildHeight(): number;
        get maxLightLevel(): number;
        get maxSection(): number;
        get maxBuildHeight(): number;
        get minSection(): number;
        get sectionsCount(): number;
    }
    export class $SectionCompiler {
        compile(arg0: $SectionPos, arg1: $RenderChunkRegion, arg2: $VertexSorting_, arg3: $SectionBufferBuilderPack, arg4: $List_<$AddSectionGeometryEvent$AdditionalSectionRenderer_>): $SectionCompiler$Results;
        compile(sectionPos: $SectionPos, region: $RenderChunkRegion, vertexSorting: $VertexSorting_, sectionBufferBuilderPack: $SectionBufferBuilderPack): $SectionCompiler$Results;
        constructor(blockRenderer: $BlockRenderDispatcher, blockEntityRenderer: $BlockEntityRenderDispatcher);
    }
    export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable<$SectionRenderDispatcher$RenderSection$CompileTask> {
    }
    export class $VisGraph {
        resolve(): $VisibilitySet;
        setOpaque(pos: $BlockPos_): void;
        constructor();
        set opaque(value: $BlockPos_);
    }
    export class $VisibilitySet {
        add(faces: $Set_<$Direction_>): void;
        set(face: $Direction_, otherFace: $Direction_, visible: boolean): void;
        setAll(visible: boolean): void;
        visibilityBetween(face: $Direction_, otherFace: $Direction_): boolean;
        constructor();
        set all(value: boolean);
    }
    export class $RenderRegionCache {
        createRegion(level: $Level_, sectionPos: $SectionPos): $RenderChunkRegion;
        createRegion(arg0: $Level_, arg1: $SectionPos, arg2: boolean): $RenderChunkRegion;
        constructor();
    }
    export class $SectionRenderDispatcher$RenderSection$RebuildTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$RenderSection$ResortTransparencyTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$SectionTaskResult extends $Enum<$SectionRenderDispatcher$SectionTaskResult> {
    }
    /**
     * Values that may be interpreted as {@link $SectionRenderDispatcher$SectionTaskResult}.
     */
    export type $SectionRenderDispatcher$SectionTaskResult_ = "successful" | "cancelled";
    export class $SectionCompiler$Results {
        release(): void;
        transparencyState: $MeshData$SortState;
        visibilitySet: $VisibilitySet;
        globalBlockEntities: $List<$BlockEntity>;
        blockEntities: $List<$BlockEntity>;
        renderedLayers: $Map<$RenderType, $MeshData>;
        constructor();
    }
}
