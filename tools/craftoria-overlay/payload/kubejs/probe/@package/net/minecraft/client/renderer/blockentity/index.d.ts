import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $MultiBufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Material } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Map } from "@package/java/util";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AccessorBlockEntityRenderers } from "@package/net/darkhax/bookshelf/common/mixin/access/block";
import { $Model, $SkullModelBase } from "@package/net/minecraft/client/model";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRenderersAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks";
import { $IBlockEntityRendererExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2IntFunction } from "@package/it/unimi/dsi/fastutil/ints";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $DyeColor_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ResolvableProfile_ } from "@package/net/minecraft/world/item/component";
import { $ModelLayerLocation, $EntityModelSet, $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $WoodType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SkullBlock$Type, $SkullBlock$Type_, $DoubleBlockCombiner$Combiner } from "@package/net/minecraft/world/level/block";
import { $Font } from "@package/net/minecraft/client/gui";
import { $HitResult, $AABB_, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $SignBlockEntity, $ConduitBlockEntity, $BannerPatternLayers_, $SkullBlockEntity, $BannerBlockEntity, $LecternBlockEntity, $DecoratedPotBlockEntity, $EnchantingTableBlockEntity, $BellBlockEntity, $BrushableBlockEntity, $BlockEntityType, $SignText, $BedBlockEntity, $SpawnerBlockEntity, $CampfireBlockEntity, $TheEndGatewayBlockEntity, $TrialSpawnerBlockEntity, $BlockEntityType_, $BlockEntity, $StructureBlockEntity, $ShulkerBoxBlockEntity, $BeaconBlockEntity, $TheEndPortalBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/client/renderer/blockentity" {
    export class $CampfireRenderer implements $BlockEntityRenderer<$CampfireBlockEntity> {
        render(blockEntity: $CampfireBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRenderOffScreen(blockEntity: $CampfireBlockEntity): boolean;
        shouldRender(blockEntity: $CampfireBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $CampfireBlockEntity): $AABB;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRenderers implements $BlockEntityRenderersAccessor, $AccessorBlockEntityRenderers {
        static register<T extends $BlockEntity>(type: $BlockEntityType_<T>, renderProvider: $BlockEntityRendererProvider_<T>): void;
        static createEntityRenderers(context: $BlockEntityRendererProvider$Context): $Map<$BlockEntityType<never>, $BlockEntityRenderer<never>>;
        static bumblezone$callRegister$the_bumblezone_$md$f87c94$0(type: $BlockEntityType_<any>, renderProvider: $BlockEntityRendererProvider_<any>): void;
        static register$bookshelf_$md$f87c94$1(type: $BlockEntityType_<any>, renderProvider: $BlockEntityRendererProvider_<any>): void;
        static PROVIDERS: $Map<$BlockEntityType<never>, $BlockEntityRendererProvider<never>>;
        constructor();
    }
    export class $TrialSpawnerRenderer implements $BlockEntityRenderer<$TrialSpawnerBlockEntity> {
        getRenderBoundingBox(arg0: $TrialSpawnerBlockEntity): $AABB;
        render(blockEntity: $TrialSpawnerBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRenderOffScreen(blockEntity: $TrialSpawnerBlockEntity): boolean;
        shouldRender(blockEntity: $TrialSpawnerBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $HangingSignRenderer extends $SignRenderer {
        static createHangingSignLayer(): $LayerDefinition;
        constructor(context: $BlockEntityRendererProvider$Context);
    }
    export class $BedRenderer implements $BlockEntityRenderer<$BedBlockEntity> {
        render(blockEntity: $BedBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createHeadLayer(): $LayerDefinition;
        static createFootLayer(): $LayerDefinition;
        shouldRenderOffScreen(blockEntity: $BedBlockEntity): boolean;
        shouldRender(blockEntity: $BedBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $BedBlockEntity): $AABB;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SpawnerRenderer implements $BlockEntityRenderer<$SpawnerBlockEntity> {
        getRenderBoundingBox(arg0: $SpawnerBlockEntity): $AABB;
        render(blockEntity: $SpawnerBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static renderEntityInSpawner(partialTick: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, entity: $Entity, entityRenderer: $EntityRenderDispatcher, oSpin: number, arg7: number): void;
        shouldRenderOffScreen(blockEntity: $SpawnerBlockEntity): boolean;
        shouldRender(blockEntity: $SpawnerBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $VaultRenderer implements $BlockEntityRenderer<$VaultBlockEntity> {
        render(blockEntity: $VaultBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static renderItemInside(partialTick: number, level: $Level_, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, item: $ItemStack_, itemRenderer: $ItemRenderer, previousSpin: number, currentSpin: number, random: $RandomSource): void;
        shouldRenderOffScreen(blockEntity: $VaultBlockEntity): boolean;
        shouldRender(blockEntity: $VaultBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $VaultBlockEntity): $AABB;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BrightnessCombiner<S extends $BlockEntity> implements $DoubleBlockCombiner$Combiner<S, $Int2IntFunction> {
        acceptSingle(single: S): $Int2IntFunction;
        acceptDouble(first: S, second: S): $Int2IntFunction;
        acceptNone(): $Int2IntFunction;
        constructor();
    }
    export class $SkullBlockRenderer implements $BlockEntityRenderer<$SkullBlockEntity> {
        getRenderBoundingBox(arg0: $SkullBlockEntity): $AABB;
        render(blockEntity: $SkullBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createSkullRenderers(entityModelSet: $EntityModelSet): $Map<$SkullBlock$Type, $SkullModelBase>;
        static renderSkull(direction: $Direction_ | null, yRot: number, mouthAnimation: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, model: $SkullModelBase, renderType: $RenderType): void;
        static getRenderType(type: $SkullBlock$Type_, profile: $ResolvableProfile_ | null): $RenderType;
        shouldRenderOffScreen(blockEntity: $SkullBlockEntity): boolean;
        shouldRender(blockEntity: $SkullBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        static SKIN_BY_TYPE: $Map<$SkullBlock$Type, $ResourceLocation>;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BellRenderer implements $BlockEntityRenderer<$BellBlockEntity> {
        render(blockEntity: $BellBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createBodyLayer(): $LayerDefinition;
        shouldRenderOffScreen(blockEntity: $BellBlockEntity): boolean;
        shouldRender(blockEntity: $BellBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $BellBlockEntity): $AABB;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        static BELL_RESOURCE_LOCATION: $Material;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $PistonHeadRenderer implements $BlockEntityRenderer<$PistonMovingBlockEntity> {
        getRenderBoundingBox(arg0: $PistonMovingBlockEntity): $AABB;
        render(blockEntity: $PistonMovingBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(blockEntity: $PistonMovingBlockEntity): boolean;
        shouldRender(blockEntity: $PistonMovingBlockEntity, cameraPos: $Vec3_): boolean;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $DecoratedPotRenderer implements $BlockEntityRenderer<$DecoratedPotBlockEntity> {
        getRenderBoundingBox(arg0: $DecoratedPotBlockEntity): $AABB;
        render(blockEntity: $DecoratedPotBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createBaseLayer(): $LayerDefinition;
        static createSidesLayer(): $LayerDefinition;
        shouldRenderOffScreen(blockEntity: $DecoratedPotBlockEntity): boolean;
        shouldRender(blockEntity: $DecoratedPotBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRendererProvider$Context {
        getModelSet(): $EntityModelSet;
        getEntityRenderer(): $EntityRenderDispatcher;
        getFont(): $Font;
        getItemRenderer(): $ItemRenderer;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        bakeLayer(layerLocation: $ModelLayerLocation): $ModelPart;
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        constructor(blockEntityRenderDispatcher: $BlockEntityRenderDispatcher, blockRenderDispatcher: $BlockRenderDispatcher, itemRenderer: $ItemRenderer, entityRenderer: $EntityRenderDispatcher, modelSet: $EntityModelSet, font: $Font);
        get modelSet(): $EntityModelSet;
        get entityRenderer(): $EntityRenderDispatcher;
        get font(): $Font;
        get itemRenderer(): $ItemRenderer;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get blockRenderDispatcher(): $BlockRenderDispatcher;
    }
    export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener {
        prepare(level: $Level_, camera: $Camera, cameraHitResult: $HitResult): void;
        setLevel(level: $Level_ | null): void;
        render<E extends $BlockEntity>(blockEntity: E, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_): void;
        /**
         * @return `true` if no renderer was found; otherwise `false` if render completed
         */
        renderItem<E extends $BlockEntity>(blockEntity: E, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): boolean;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getRenderer<E extends $BlockEntity>(blockEntity: E): $BlockEntityRenderer<E>;
        handler$gjd000$entityculling$render(blockEntity: $BlockEntity, f: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, info: $CallbackInfo): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        itemRenderer: $Supplier<$ItemRenderer>;
        entityModelSet: $EntityModelSet;
        entityRenderer: $Supplier<$EntityRenderDispatcher>;
        cameraHitResult: $HitResult;
        blockRenderDispatcher: $Supplier<$BlockRenderDispatcher>;
        level: $Level;
        renderers: $Map<$BlockEntityType<never>, $BlockEntityRenderer<never>>;
        camera: $Camera;
        font: $Font;
        constructor(font: $Font, entityModelSet: $EntityModelSet, blockRenderDispatcher: $Supplier_<$BlockRenderDispatcher>, itemRenderer: $Supplier_<$ItemRenderer>, entityRenderer: $Supplier_<$EntityRenderDispatcher>);
        get name(): string;
    }
    export class $SignRenderer implements $BlockEntityRenderer<$SignBlockEntity> {
        getRenderBoundingBox(arg0: $SignBlockEntity): $AABB;
        render(blockEntity: $SignBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createSignLayer(): $LayerDefinition;
        renderSignText(pos: $BlockPos_, text: $SignText, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, lineHeight: number, maxWidth: number, isFrontText: boolean): void;
        translateSignText(poseStack: $PoseStack, isFrontText: boolean, offset: $Vec3_): void;
        static getDarkColor(signText: $SignText): number;
        static createSignModel(entityModelSet: $EntityModelSet, woodType: $WoodType_): $SignRenderer$SignModel;
        static isOutlineVisible(pos: $BlockPos_, textColor: number): boolean;
        getSignTextRenderScale(): number;
        getSignModelRenderScale(): number;
        shouldRenderOffScreen(blockEntity: $SignBlockEntity): boolean;
        shouldRender(blockEntity: $SignBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get signTextRenderScale(): number;
        get signModelRenderScale(): number;
        get viewDistance(): number;
    }
    export class $TheEndGatewayRenderer extends $TheEndPortalRenderer<$TheEndGatewayBlockEntity> {
        getRenderBoundingBox(arg0: $TheEndGatewayBlockEntity): $AABB;
        render(arg0: $TheEndGatewayBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static END_SKY_LOCATION: $ResourceLocation;
        static END_PORTAL_LOCATION: $ResourceLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ShulkerBoxRenderer implements $BlockEntityRenderer<$ShulkerBoxBlockEntity> {
        getRenderBoundingBox(arg0: $ShulkerBoxBlockEntity): $AABB;
        render(blockEntity: $ShulkerBoxBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRenderOffScreen(blockEntity: $ShulkerBoxBlockEntity): boolean;
        shouldRender(blockEntity: $ShulkerBoxBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $TheEndPortalRenderer<T extends $TheEndPortalBlockEntity> implements $BlockEntityRenderer<T> {
        render(blockEntity: T, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        handler$zkm000$iris$onRender(arg0: $TheEndPortalBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        shouldRenderOffScreen(blockEntity: T): boolean;
        shouldRender(blockEntity: T, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: T): $AABB;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        static END_SKY_LOCATION: $ResourceLocation;
        static END_PORTAL_LOCATION: $ResourceLocation;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $ChestRenderer<T extends $BlockEntity> implements $BlockEntityRenderer<T> {
        getRenderBoundingBox(arg0: T): $AABB;
        render(blockEntity: T, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createDoubleBodyLeftLayer(): $LayerDefinition;
        static createSingleBodyLayer(): $LayerDefinition;
        static createDoubleBodyRightLayer(): $LayerDefinition;
        shouldRenderOffScreen(blockEntity: T): boolean;
        shouldRender(blockEntity: T, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $StructureBlockRenderer implements $BlockEntityRenderer<$StructureBlockEntity> {
        getRenderBoundingBox(arg0: $StructureBlockEntity): $AABB;
        shouldRenderOffScreen(blockEntity: $StructureBlockEntity): boolean;
        render(blockEntity: $StructureBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getViewDistance(): number;
        shouldRender(blockEntity: $StructureBlockEntity, cameraPos: $Vec3_): boolean;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BeaconRenderer implements $BlockEntityRenderer<$BeaconBlockEntity> {
        getRenderBoundingBox(arg0: $BeaconBlockEntity): $AABB;
        shouldRenderOffScreen(blockEntity: $BeaconBlockEntity): boolean;
        render(blockEntity: $BeaconBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRender(blockEntity: $BeaconBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        static renderBeaconBeam(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, beamLocation: $ResourceLocation_, partialTick: number, textureScale: number, gameTime: number, arg6: number, yOffset: number, height: number, color: number, beamRadius: number): void;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        static MAX_RENDER_Y: number;
        static BEAM_LOCATION: $ResourceLocation;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BannerRenderer implements $BlockEntityRenderer<$BannerBlockEntity> {
        getRenderBoundingBox(arg0: $BannerBlockEntity): $AABB;
        render(blockEntity: $BannerBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createBodyLayer(): $LayerDefinition;
        static renderPatterns(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, packedOverlay: number, flagPart: $ModelPart, flagMaterial: $Material, banner: boolean, baseColor: $DyeColor_, patterns: $BannerPatternLayers_): void;
        static renderPatterns(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, packedOverlay: number, flagPart: $ModelPart, flagMaterial: $Material, banner: boolean, baseColor: $DyeColor_, patterns: $BannerPatternLayers_, glint: boolean): void;
        shouldRenderOffScreen(blockEntity: $BannerBlockEntity): boolean;
        shouldRender(blockEntity: $BannerBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        static FLAG: string;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SignRenderer$SignModel extends $Model {
        root: $ModelPart;
        stick: $ModelPart;
        constructor(root: $ModelPart);
    }
    export class $HangingSignRenderer$HangingSignModel extends $Model {
        evaluateVisibleParts(state: $BlockState_): void;
        vChains: $ModelPart;
        root: $ModelPart;
        normalChains: $ModelPart;
        plank: $ModelPart;
        constructor(root: $ModelPart);
    }
    export class $EnchantTableRenderer implements $BlockEntityRenderer<$EnchantingTableBlockEntity> {
        getRenderBoundingBox(arg0: $EnchantingTableBlockEntity): $AABB;
        render(blockEntity: $EnchantingTableBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRenderOffScreen(blockEntity: $EnchantingTableBlockEntity): boolean;
        shouldRender(blockEntity: $EnchantingTableBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        static BOOK_LOCATION: $Material;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BrushableBlockRenderer implements $BlockEntityRenderer<$BrushableBlockEntity> {
        getRenderBoundingBox(arg0: $BrushableBlockEntity): $AABB;
        render(blockEntity: $BrushableBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRenderOffScreen(blockEntity: $BrushableBlockEntity): boolean;
        shouldRender(blockEntity: $BrushableBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $LecternRenderer implements $BlockEntityRenderer<$LecternBlockEntity> {
        getRenderBoundingBox(arg0: $LecternBlockEntity): $AABB;
        render(blockEntity: $LecternBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRenderOffScreen(blockEntity: $LecternBlockEntity): boolean;
        shouldRender(blockEntity: $LecternBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRendererProvider<T extends $BlockEntity> {
    }
    export interface $BlockEntityRendererProvider<T extends $BlockEntity> {
        create(context: $BlockEntityRendererProvider$Context): $BlockEntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityRendererProvider}.
     */
    export type $BlockEntityRendererProvider_<T> = ((arg0: $BlockEntityRendererProvider$Context) => $BlockEntityRenderer<T>);
    export class $ConduitRenderer implements $BlockEntityRenderer<$ConduitBlockEntity> {
        getRenderBoundingBox(arg0: $ConduitBlockEntity): $AABB;
        render(blockEntity: $ConduitBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createEyeLayer(): $LayerDefinition;
        static createWindLayer(): $LayerDefinition;
        static createShellLayer(): $LayerDefinition;
        static createCageLayer(): $LayerDefinition;
        shouldRenderOffScreen(blockEntity: $ConduitBlockEntity): boolean;
        shouldRender(blockEntity: $ConduitBlockEntity, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        modifyReturnValue$fga000$eternal_starlight$getRenderBoundingBox(original: $AABB_, blockEntity: $BlockEntity): $AABB;
        static SHELL_TEXTURE: $Material;
        static CLOSED_EYE_TEXTURE: $Material;
        static OPEN_EYE_TEXTURE: $Material;
        static VERTICAL_WIND_TEXTURE: $Material;
        static WIND_TEXTURE: $Material;
        static ACTIVE_SHELL_TEXTURE: $Material;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRenderer<T extends $BlockEntity> {
    }
    export interface $BlockEntityRenderer<T extends $BlockEntity> extends $IBlockEntityRendererExtension<T> {
        shouldRenderOffScreen(blockEntity: T): boolean;
        render(blockEntity: T, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRender(blockEntity: T, cameraPos: $Vec3_): boolean;
        getViewDistance(): number;
        get viewDistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityRenderer}.
     */
    export type $BlockEntityRenderer_<T> = ((arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: number, arg5: number) => void);
}
