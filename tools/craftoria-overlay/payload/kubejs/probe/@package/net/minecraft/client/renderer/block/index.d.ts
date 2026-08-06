import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource_, $BlockEntityWithoutLevelRenderer, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $BlockRenderDispatcherAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/client";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $BitSet, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Comparable_, $Enum } from "@package/java/lang";
export * as model from "@package/net/minecraft/client/renderer/block/model";

declare module "@package/net/minecraft/client/renderer/block" {
    export class $ModelBlockRenderer$Cache {
    }
    export class $BlockRenderDispatcher implements $ResourceManagerReloadListener, $BlockRenderDispatcherAccessor {
        renderBreakingTexture(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: $ModelData): void;
        /**
         * @deprecated
         */
        renderBreakingTexture(state: $BlockState_, pos: $BlockPos_, level: $BlockAndTintGetter, poseStack: $PoseStack, consumer: $VertexConsumer): void;
        handler$iln000$computercraft$renderBlockDamage(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: $ModelData, arg6: $CallbackInfo): void;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getBlockModel(state: $BlockState_): $BakedModel;
        renderSingleBlock(arg0: $BlockState_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number, arg5: $ModelData, arg6: $RenderType): void;
        /**
         * @deprecated
         */
        renderSingleBlock(state: $BlockState_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getBlockModelShaper(): $BlockModelShaper;
        renderBatched(state: $BlockState_, pos: $BlockPos_, level: $BlockAndTintGetter, poseStack: $PoseStack, consumer: $VertexConsumer, checkSides: boolean, random: $RandomSource): void;
        renderBatched(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: boolean, arg6: $RandomSource, arg7: $ModelData, arg8: $RenderType): void;
        getLiquidBlockRenderer(): $LiquidBlockRenderer;
        renderLiquid(pos: $BlockPos_, level: $BlockAndTintGetter, consumer: $VertexConsumer, blockState: $BlockState_, fluidState: $FluidState): void;
        getModelRenderer(): $ModelBlockRenderer;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        bumblezone$getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        bumblezone$getBlockColors(): $BlockColors;
        blockEntityRenderer: $BlockEntityWithoutLevelRenderer;
        modelRenderer: $ModelBlockRenderer;
        liquidBlockRenderer: $LiquidBlockRenderer;
        blockColors: $BlockColors;
        constructor(blockModelShaper: $BlockModelShaper, blockEntityRenderer: $BlockEntityWithoutLevelRenderer, blockColors: $BlockColors);
        get blockModelShaper(): $BlockModelShaper;
        get name(): string;
    }
    export class $ModelBlockRenderer$AmbientVertexRemap extends $Enum<$ModelBlockRenderer$AmbientVertexRemap> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$AmbientVertexRemap}.
     */
    export type $ModelBlockRenderer$AmbientVertexRemap_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $ModelBlockRenderer$AmbientOcclusionFace {
        calculate(level: $BlockAndTintGetter, state: $BlockState_, pos: $BlockPos_, direction: $Direction_, shape: number[], shapeFlags: $BitSet, shade: boolean): void;
        brightness: number[];
        lightmap: number[];
        constructor();
    }
    export class $ModelBlockRenderer$SizeInfo extends $Enum<$ModelBlockRenderer$SizeInfo> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$SizeInfo}.
     */
    export type $ModelBlockRenderer$SizeInfo_ = "down" | "up" | "north" | "south" | "west" | "east" | "flip_down" | "flip_up" | "flip_north" | "flip_south" | "flip_west" | "flip_east";
    export class $ModelBlockRenderer {
        static clearCache(): void;
        /**
         * Calculates the shape and corresponding flags for the specified `direction` and `vertices`, storing the resulting shape in the specified `shape` array and the shape flags in `shapeFlags`.
         */
        calculateShape(level: $BlockAndTintGetter, state: $BlockState_, pos: $BlockPos_, vertices: number[], direction: $Direction_, shape: number[] | null, shapeFlags: $BitSet): void;
        renderModelFaceAO(level: $BlockAndTintGetter, state: $BlockState_, pos: $BlockPos_, poseStack: $PoseStack, consumer: $VertexConsumer, quads: $List_<$BakedQuad>, shape: number[], shapeFlags: $BitSet, aoFace: $ModelBlockRenderer$AmbientOcclusionFace, packedOverlay: number): void;
        tesselateWithAO(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        /**
         * @deprecated
         */
        tesselateWithAO(level: $BlockAndTintGetter, model: $BakedModel, state: $BlockState_, pos: $BlockPos_, poseStack: $PoseStack, consumer: $VertexConsumer, checkSides: boolean, random: $RandomSource, seed: number, arg9: number): void;
        putQuadData(level: $BlockAndTintGetter, state: $BlockState_, pos: $BlockPos_, consumer: $VertexConsumer, pose: $PoseStack$Pose, quad: $BakedQuad, brightness0: number, brightness1: number, brightness2: number, brightness3: number, lightmap0: number, lightmap1: number, lightmap2: number, lightmap3: number, packedOverlay: number): void;
        /**
         * @deprecated
         */
        tesselateWithoutAO(level: $BlockAndTintGetter, model: $BakedModel, state: $BlockState_, pos: $BlockPos_, poseStack: $PoseStack, consumer: $VertexConsumer, checkSides: boolean, random: $RandomSource, seed: number, arg9: number): void;
        tesselateWithoutAO(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        /**
         * @deprecated
         */
        tesselateBlock(level: $BlockAndTintGetter, model: $BakedModel, state: $BlockState_, pos: $BlockPos_, poseStack: $PoseStack, consumer: $VertexConsumer, checkSides: boolean, random: $RandomSource, seed: number, arg9: number): void;
        tesselateBlock(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        static enableCaching(): void;
        renderModel(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_ | null, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $ModelData, arg10: $RenderType): void;
        /**
         * @deprecated
         */
        renderModel(pose: $PoseStack$Pose, consumer: $VertexConsumer, state: $BlockState_ | null, model: $BakedModel, red: number, green: number, blue: number, packedLight: number, packedOverlay: number): void;
        blockColors: $BlockColors;
        constructor(blockColors: $BlockColors);
    }
    export class $BlockModelShaper {
        getTexture(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $TextureAtlasSprite;
        getModelManager(): $ModelManager;
        getBlockModel(state: $BlockState_): $BakedModel;
        /**
         * @deprecated
         */
        getParticleIcon(state: $BlockState_): $TextureAtlasSprite;
        static stateToModelLocation(state: $BlockState_): $ModelResourceLocation;
        static stateToModelLocation(location: $ResourceLocation_, state: $BlockState_): $ModelResourceLocation;
        replaceCache(modelByStateCache: $Map_<$BlockState_, $BakedModel>): void;
        static statePropertiesToString(propertyValues: $Map_<$Property<never>, $Comparable_<never>>): string;
        constructor(modelManager: $ModelManager);
        get modelManager(): $ModelManager;
    }
    export class $LiquidBlockRenderer {
        static shouldRenderFace(level: $BlockAndTintGetter, pos: $BlockPos_, fluidState: $FluidState, blockState: $BlockState_, side: $Direction_, neighborFluid: $FluidState): boolean;
        static shouldRenderFace(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockState_): boolean;
        wrapOperation$bfb001$supplementaries$modifyLumiseneHeight(arg0: $Fluid_, arg1: $Fluid_, arg2: $Operation_<any>): boolean;
        wrapOperation$bfb000$supplementaries$modifyLumiseneLight(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Operation_<any>): number;
        tesselate(level: $BlockAndTintGetter, pos: $BlockPos_, buffer: $VertexConsumer, blockState: $BlockState_, fluidState: $FluidState): void;
        constructor();
    }
    export class $ModelBlockRenderer$AdjacencyInfo extends $Enum<$ModelBlockRenderer$AdjacencyInfo> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$AdjacencyInfo}.
     */
    export type $ModelBlockRenderer$AdjacencyInfo_ = "down" | "up" | "north" | "south" | "west" | "east";
}
