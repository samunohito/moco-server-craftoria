import { $EMFJemData } from "@package/traben/entity_model_features/models/jem_objects";
import { $ETFLruCache$UUIDInteger } from "@package/traben/entity_texture_features/utils";
import { $ModelPart, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EMFAnimationHandler } from "@package/traben/entity_model_features/models/animation";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ETFApi$ETFVariantSuffixProvider } from "@package/traben/entity_texture_features";
import { $EMFDirectoryHandler } from "@package/traben/entity_model_features/utils";
import { $Record } from "@package/java/lang";
import { $HashMap, $List, $Map_, $Map, $UUID_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $EMFModel_ID } from "@package/traben/entity_model_features/models";

declare module "@package/traben/entity_model_features/models/parts" {
    export class $EMFModelPartWithState extends $EMFModelPart {
        copyVariantTo(from: number, to: number): void;
        setVariantStateTo(newVariant: number): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(cuboids: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>, root: $EMFModelPartRoot);
        set variantStateTo(value: number);
    }
    export class $EMFModelPart extends $ModelPart {
        getRoot(): $EMFModelPartRoot;
        processArmItemOverrides(matrices: $PoseStack): void;
        simplePrintChildren(depth: number): string;
        renderBoxesNoChildren(matrices: $PoseStack, vertices: $VertexConsumer, alpha: number): void;
        getAllChildPartsAsAnimationMap(prefixableParents: string, variantNum: number, optifinePartNameMap: $Map_<string, string>): $HashMap<string, $EMFModelPart>;
        toStringShort(): string;
        getVanillaModelPartsOfCurrentState(): $ModelPart;
        renderBoxes(matrices: $PoseStack, vertices: $VertexConsumer): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        children: $Map<string, $ModelPart>;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(cuboids: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>, root: $EMFModelPartRoot);
        get root(): $EMFModelPartRoot;
        get vanillaModelPartsOfCurrentState(): $ModelPart;
    }
    export class $EMFModelPartRoot extends $EMFModelPartVanilla {
        setVariant1ToVanilla0(): void;
        receiveAnimationHandler(variant: number, animationHandler: $EMFAnimationHandler): void;
        discoverAndInitVariants(fallbackPropertiesName: string): void;
        triggerManualAnimation(pose: $PoseStack): void;
        getVanillaFormatRoot(): $ModelPart;
        checkIfShouldExpireEntity(id: $UUID_): void;
        hasAnimation(): boolean;
        getAllVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
        getTopLevelJemTexture(): $ResourceLocation;
        tryRenderVanillaRootNormally(matrixStack: $PoseStack, vertexConsumer: $VertexConsumer, light: number, overlay: number): void;
        doVariantCheck(): void;
        oneTimeRunnable(): void;
        animate(): void;
        resetVanillaPartsToDefaults(): void;
        checkArmOverrides(pose: $PoseStack): void;
        addVariantOfJem(jemData: $EMFJemData, variant: number): void;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        xRot: number;
        containsCustomAnims: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        vanillaRoot: $ModelPart;
        zScale: number;
        isMainModel: boolean;
        visible: boolean;
        yRot: number;
        yScale: number;
        variantTester: $ETFApi$ETFVariantSuffixProvider;
        directoryContext: $EMFDirectoryHandler;
        modelName: $EMFModel_ID;
        isSetByAnimation: boolean;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        entitySuffixMap: $ETFLruCache$UUIDInteger;
        containsCustomModel: boolean;
        constructor(mobNameForFileAndMap: $EMFModel_ID, directoryContext: $EMFDirectoryHandler, vanillaRoot: $ModelPart, optifinePartNames: $Collection_<string>, mapForCreatedParts: $Map_<string, $EMFModelPartVanilla>);
        get vanillaFormatRoot(): $ModelPart;
        get allVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
        get topLevelJemTexture(): $ResourceLocation;
    }
    export class $EMFModelPartWithState$EMFModelState extends $Record {
        copy(visibleOverride: boolean): $EMFModelPartWithState$EMFModelState;
        copy(): $EMFModelPartWithState$EMFModelState;
        visible(): boolean;
        zScale(): number;
        texture(): $ResourceLocation;
        defaultTransform(): $PartPose;
        variantChildren(): $Map<string, $ModelPart>;
        hidden(): boolean;
        cuboids(): $List<$ModelPart$Cube>;
        yScale(): number;
        xScale(): number;
        constructor(defaultTransform: $PartPose, cuboids: $List_<$ModelPart$Cube>, variantChildren: $Map_<string, $ModelPart>, xScale: number, yScale: number, zScale: number, visible: boolean, hidden: boolean, texture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EMFModelPartWithState$EMFModelState}.
     */
    export type $EMFModelPartWithState$EMFModelState_ = { xScale?: number, variantChildren?: $Map_<string, $ModelPart>, zScale?: number, defaultTransform?: $PartPose, texture?: $ResourceLocation_, cuboids?: $List_<$ModelPart$Cube>, yScale?: number, hidden?: boolean, visible?: boolean,  } | [xScale?: number, variantChildren?: $Map_<string, $ModelPart>, zScale?: number, defaultTransform?: $PartPose, texture?: $ResourceLocation_, cuboids?: $List_<$ModelPart$Cube>, yScale?: number, hidden?: boolean, visible?: boolean, ];
    export class $EMFModelPartVanilla extends $EMFModelPartWithState {
        getAllEMFCustomChildren(): $ModelPart[];
        setHideInTheseStates(variant: number): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(name: string, vanillaPart: $ModelPart, optifinePartNames: $Collection_<string>, allVanillaParts: $Map_<string, $EMFModelPartVanilla>, root: $EMFModelPartRoot);
        get allEMFCustomChildren(): $ModelPart[];
        set hideInTheseStates(value: number);
    }
}
