import { $JsonDeserializationContext_, $JsonDeserializer, $Gson, $JsonElement_ } from "@package/com/google/gson";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ModelState, $BakedModel, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Map_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_ } from "@package/java/util/function";
import { $Direction$Axis_, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Type } from "@package/java/lang/reflect";
import { $ModelInstance } from "@package/com/supermartijn642/fusion/api/model";
import { $ModelQuadFacing } from "@package/org/embeddedt/embeddium/impl/model/quad/properties";
import { $SpriteContents, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $RuntimeException } from "@package/java/lang";
import { $SpriteTransparencyLevel } from "@package/org/embeddedt/embeddium/impl/render/chunk/sprite";
import { $Reader } from "@package/java/io";
import { $BlockModelExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $BlockGeometryBakingContext } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_, $ItemDisplayContext_, $ItemDisplayContext } from "@package/net/minecraft/world/item";
import { $ImmutableList, $ImmutableMap } from "@package/com/google/common/collect";
import { $BakedQuadView } from "@package/org/embeddedt/embeddium/impl/model/quad";
import { $MultiPart } from "@package/net/minecraft/client/renderer/block/model/multipart";
import { $Stream } from "@package/java/util/stream";
import { $ExtraFaceData, $ExtraFaceData_ } from "@package/net/neoforged/neoforge/client/model";
import { $BakedQuadAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $EpsilonizableBlockElement } from "@package/org/embeddedt/embeddium/impl/model";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector3f } from "@package/org/joml";
export * as multipart from "@package/net/minecraft/client/renderer/block/model/multipart";

declare module "@package/net/minecraft/client/renderer/block/model" {
    export class $BlockElement implements $EpsilonizableBlockElement {
        setFaceData(arg0: $ExtraFaceData_): void;
        getFaceData(): $ExtraFaceData;
        uvsByFace(face: $Direction_): number[];
        embeddium$epsilonize(): void;
        rotation: $BlockElementRotation;
        shade: boolean;
        from: $Vector3f;
        to: $Vector3f;
        faces: $Map<$Direction, $BlockElementFace>;
        constructor(from: $Vector3f, to: $Vector3f, faces: $Map_<$Direction_, $BlockElementFace_>, rotation: $BlockElementRotation_ | null, shade: boolean);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Map_<$Direction_, $BlockElementFace_>, arg3: $BlockElementRotation_ | null, arg4: boolean, arg5: $ExtraFaceData_);
    }
    export class $BlockFaceUV {
        getV(index: number): number;
        getU(index: number): number;
        getReverseIndex(index: number): number;
        setMissingUv(uvs: number[]): void;
        uvs: number[];
        rotation: number;
        constructor(uvs: number[] | null, rotation: number);
        set missingUv(value: number[]);
    }
    export class $FaceBakery {
        bakeQuad(posFrom: $Vector3f, posTo: $Vector3f, face: $BlockElementFace_, sprite: $TextureAtlasSprite, facing: $Direction_, transform: $ModelState, rotation: $BlockElementRotation_ | null, shade: boolean): $BakedQuad;
        recalculateWinding(vertices: number[], direction: $Direction_): void;
        applyModelRotation(pos: $Vector3f, transform: $Transformation): void;
        static recomputeUVs(uv: $BlockFaceUV, facing: $Direction_, rotation: $Transformation): $BlockFaceUV;
        static calculateFacing(faceData: number[]): $Direction;
        static VERTEX_INT_SIZE: number;
        static UV_INDEX: number;
        static VERTEX_COUNT: number;
        constructor();
    }
    export class $ItemOverride$Predicate {
        getProperty(): $ResourceLocation;
        getValue(): number;
        constructor(property: $ResourceLocation_, value: number);
        get property(): $ResourceLocation;
        get value(): number;
    }
    export class $BlockModel$GuiLight extends $Enum<$BlockModel$GuiLight> {
        static values(): $BlockModel$GuiLight[];
        static valueOf(name: string): $BlockModel$GuiLight;
        static getByName(name: string): $BlockModel$GuiLight;
        getSerializedName(): string;
        lightLikeBlock(): boolean;
        static SIDE: $BlockModel$GuiLight;
        static FRONT: $BlockModel$GuiLight;
        get serializedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockModel$GuiLight}.
     */
    export type $BlockModel$GuiLight_ = "front" | "side";
    export class $BakedQuad implements $BakedQuadAccess, $BakedQuadView {
        getFlags(): number;
        setFlags(arg0: number): void;
        hasAmbientOcclusion(): boolean;
        getComputedFaceNormal(): number;
        getZ(arg0: number): number;
        getX(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getColor(arg0: number): number;
        getLight(arg0: number): number;
        getY(arg0: number): number;
        isTinted(): boolean;
        getTexV(arg0: number): number;
        getTexU(arg0: number): number;
        getDirection(): $Direction;
        getVertices(): number[];
        getTransparencyLevel(): $SpriteTransparencyLevel;
        getTintIndex(): number;
        getForgeNormal(arg0: number): number;
        getLightFace(): $Direction;
        getColorIndex(): number;
        isShade(): boolean;
        hasShade(): boolean;
        getNormalFace(): $ModelQuadFacing;
        hasColor(): boolean;
        getModFaceNormal(): number;
        setVertices(arg0: number[]): void;
        tintIndex: number;
        direction: $Direction;
        constructor(vertices: number[], tintIndex: number, direction: $Direction_, sprite: $TextureAtlasSprite, shade: boolean);
        constructor(arg0: number[], arg1: number, arg2: $Direction_, arg3: $TextureAtlasSprite, arg4: boolean, arg5: boolean);
        get computedFaceNormal(): number;
        get sprite(): $TextureAtlasSprite;
        get tinted(): boolean;
        get transparencyLevel(): $SpriteTransparencyLevel;
        get lightFace(): $Direction;
        get colorIndex(): number;
        get shade(): boolean;
        get normalFace(): $ModelQuadFacing;
        get modFaceNormal(): number;
    }
    export class $ItemOverride$Deserializer implements $JsonDeserializer<$ItemOverride> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $ItemOverride;
        constructor();
    }
    export class $ItemTransforms {
        getTransform(displayContext: $ItemDisplayContext_): $ItemTransform;
        hasTransform(displayContext: $ItemDisplayContext_): boolean;
        static NO_TRANSFORMS: $ItemTransforms;
        head: $ItemTransform;
        firstPersonLeftHand: $ItemTransform;
        moddedTransforms: $ImmutableMap<$ItemDisplayContext, $ItemTransform>;
        firstPersonRightHand: $ItemTransform;
        thirdPersonRightHand: $ItemTransform;
        thirdPersonLeftHand: $ItemTransform;
        gui: $ItemTransform;
        ground: $ItemTransform;
        fixed: $ItemTransform;
        constructor(arg0: $ItemTransform, arg1: $ItemTransform, arg2: $ItemTransform, arg3: $ItemTransform, arg4: $ItemTransform, arg5: $ItemTransform, arg6: $ItemTransform, arg7: $ItemTransform, arg8: $ImmutableMap<$ItemDisplayContext_, $ItemTransform>);
        /**
         * @deprecated
         */
        constructor(thirdPersonLeftHand: $ItemTransform, thirdPersonRightHand: $ItemTransform, firstPersonLeftHand: $ItemTransform, firstPersonRightHand: $ItemTransform, head: $ItemTransform, gui: $ItemTransform, ground: $ItemTransform, fixed: $ItemTransform);
        constructor(transforms: $ItemTransforms);
    }
    export class $BlockModel$LoopException extends $RuntimeException {
        constructor(message: string);
    }
    export class $ItemOverride {
        /**
         * @return the location of the target model
         */
        getModel(): $ResourceLocation;
        getPredicates(): $Stream<$ItemOverride$Predicate>;
        constructor(model: $ResourceLocation_, predicates: $List_<$ItemOverride$Predicate>);
        get model(): $ResourceLocation;
        get predicates(): $Stream<$ItemOverride$Predicate>;
    }
    export class $BlockModel$Deserializer implements $JsonDeserializer<$BlockModel> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockModel;
        constructor();
    }
    export class $BlockModel implements $UnbakedModel, $BlockModelExtension {
        isResolved(): boolean;
        static fromStream(reader: $Reader): $BlockModel;
        static fromString(jsonString: string): $BlockModel;
        hasAmbientOcclusion(): boolean;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        hasTexture(textureName: string): boolean;
        getOverrides(arg0: $ModelBaker, arg1: $BlockModel, arg2: $Function_<$Material, $TextureAtlasSprite>): $ItemOverrides;
        getOverrides(): $List<$ItemOverride>;
        /**
         * @deprecated
         */
        getElements(): $List<$BlockElement>;
        getDependencies(): $Collection<$ResourceLocation>;
        getGuiLight(): $BlockModel$GuiLight;
        getRootModel(): $BlockModel;
        bakeVanilla(baker: $ModelBaker, model: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState, guiLight3d: boolean): $BakedModel;
        findTextureEntry(name: string): $Either<$Material, string>;
        getFusionModel(): $ModelInstance<any>;
        setFusionModel(fusionModel: $ModelInstance<any>): void;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        bake(baker: $ModelBaker, model: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState, guiLight3d: boolean): $BakedModel;
        getTransforms(): $ItemTransforms;
        getMaterial(name: string): $Material;
        getParentLocation(): $ResourceLocation;
        static bakeFace(element: $BlockElement, face: $BlockElementFace_, sprite: $TextureAtlasSprite, facing: $Direction_, state: $ModelState): $BakedQuad;
        parent: $BlockModel;
        parentLocation: $ResourceLocation;
        textureMap: $Map<string, $Either<$Material, string>>;
        guiLight: $BlockModel$GuiLight;
        transforms: $ItemTransforms;
        static GSON: $Gson;
        customData: $BlockGeometryBakingContext;
        overrides: $List<$ItemOverride>;
        static FACE_BAKERY: $FaceBakery;
        static PARTICLE_TEXTURE_REFERENCE: string;
        elements: $List<$BlockElement>;
        name: string;
        static LOGGER: $Logger;
        constructor(parentLocation: $ResourceLocation_ | null, elements: $List_<$BlockElement>, textureMap: $Map_<string, $Either<$Material, string>>, hasAmbientOcclusion: boolean | null, guiLight: $BlockModel$GuiLight_ | null, transforms: $ItemTransforms, overrides: $List_<$ItemOverride>);
        get resolved(): boolean;
        get dependencies(): $Collection<$ResourceLocation>;
        get rootModel(): $BlockModel;
    }
    export class $ItemModelGenerator$SpanFacing extends $Enum<$ItemModelGenerator$SpanFacing> {
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerator$SpanFacing}.
     */
    export type $ItemModelGenerator$SpanFacing_ = "up" | "down" | "left" | "right";
    export class $ItemTransform {
        apply(leftHand: boolean, poseStack: $PoseStack): void;
        static NO_TRANSFORM: $ItemTransform;
        rotation: $Vector3f;
        translation: $Vector3f;
        scale: $Vector3f;
        rightRotation: $Vector3f;
        constructor(rotation: $Vector3f, translation: $Vector3f, scale: $Vector3f);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f, arg3: $Vector3f);
    }
    export class $BlockModelDefinition {
        getVariant(key: string): $MultiVariant;
        getVariants(): $Map<string, $MultiVariant>;
        static fromStream(context: $BlockModelDefinition$Context, reader: $Reader): $BlockModelDefinition;
        hasVariant(key: string): boolean;
        getMultiPart(): $MultiPart;
        isMultiPart(): boolean;
        getMultiVariants(): $Set<$MultiVariant>;
        static fromJsonElement(context: $BlockModelDefinition$Context, json: $JsonElement_): $BlockModelDefinition;
        constructor(modelDefinitions: $List_<$BlockModelDefinition>);
        constructor(variants: $Map_<string, $MultiVariant>, multiPart: $MultiPart);
        get variants(): $Map<string, $MultiVariant>;
        get multiVariants(): $Set<$MultiVariant>;
    }
    export class $ItemModelGenerator {
        generateBlockModel(spriteGetter: $Function_<$Material, $TextureAtlasSprite>, model: $BlockModel): $BlockModel;
        processFrames(tintIndex: number, texture: string, sprite: $SpriteContents): $List<$BlockElement>;
        handler$fni000$spartan_weaponry_unofficial$generateBlockModel(arg0: $Function_<any, any>, arg1: $BlockModel, arg2: $CallbackInfoReturnable<any>): void;
        static LAYERS: $List<string>;
        constructor();
    }
    export class $MultiVariant$Deserializer implements $JsonDeserializer<$MultiVariant> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $MultiVariant;
        constructor();
    }
    export class $BlockElementFace$Deserializer implements $JsonDeserializer<$BlockElementFace> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockElementFace;
        constructor();
    }
    export class $BlockElementFace extends $Record {
        parent(): $MutableObject<$BlockElement>;
        texture(): string;
        uv(): $BlockFaceUV;
        cullForDirection(): $Direction;
        tintIndex(): number;
        faceData(): $ExtraFaceData;
        static NO_TINT: number;
        constructor(cullForDirection: $Direction_ | null, tintIndex: number, texture: string, uv: $BlockFaceUV);
        constructor(cullForDirection: $Direction_ | null, tintIndex: number, texture: string, uv: $BlockFaceUV, faceData: $ExtraFaceData_ | null, parent: $MutableObject<$BlockElement>);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementFace}.
     */
    export type $BlockElementFace_ = { uv?: $BlockFaceUV, tintIndex?: number, parent?: $MutableObject<$BlockElement>, texture?: string, cullForDirection?: $Direction_, faceData?: $ExtraFaceData_,  } | [uv?: $BlockFaceUV, tintIndex?: number, parent?: $MutableObject<$BlockElement>, texture?: string, cullForDirection?: $Direction_, faceData?: $ExtraFaceData_, ];
    export class $ItemModelGenerator$Span {
    }
    export class $MultiVariant implements $UnbakedModel {
        getVariants(): $List<$Variant>;
        resolveParents(resolver: $Function_<any, any>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        constructor(variants: $List_<$Variant>);
        get variants(): $List<$Variant>;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $ItemOverrides$BakedOverride {
        model: $BakedModel;
    }
    export class $BlockModelDefinition$Deserializer implements $JsonDeserializer<$BlockModelDefinition> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $BlockModelDefinition;
        constructor();
    }
    export class $ItemOverrides$PropertyMatcher {
    }
    export class $ItemOverrides {
        resolve(model: $BakedModel, stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): $BakedModel;
        getOverrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
        static NO_OVERRIDE: number;
        static EMPTY: $ItemOverrides;
        constructor(arg0: $ModelBaker, arg1: $UnbakedModel, arg2: $List_<$ItemOverride>, arg3: $Function_<$Material, $TextureAtlasSprite>);
        /**
         * @deprecated
         */
        constructor(baker: $ModelBaker, model: $BlockModel, overrides: $List_<$ItemOverride>);
        get overrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
    }
    export class $BlockModelDefinition$MissingVariantException extends $RuntimeException {
    }
    export class $Variant$Deserializer implements $JsonDeserializer<$Variant> {
        handler$jkm000$ae2$addAdditionalRotationOptions(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_, arg3: $CallbackInfoReturnable<any>): void;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $Variant;
        constructor();
    }
    export class $BlockElementRotation extends $Record {
        origin(): $Vector3f;
        angle(): number;
        axis(): $Direction$Axis;
        rescale(): boolean;
        constructor(arg0: $Vector3f, arg1: $Direction$Axis_, arg2: number, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementRotation}.
     */
    export type $BlockElementRotation_ = { axis?: $Direction$Axis_, rescale?: boolean, origin?: $Vector3f, angle?: number,  } | [axis?: $Direction$Axis_, rescale?: boolean, origin?: $Vector3f, angle?: number, ];
    export class $BlockFaceUV$Deserializer implements $JsonDeserializer<$BlockFaceUV> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockFaceUV;
        constructor();
    }
    export class $ItemTransform$Deserializer implements $JsonDeserializer<$ItemTransform> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $ItemTransform;
        static DEFAULT_SCALE: $Vector3f;
        static MAX_TRANSLATION: number;
        static DEFAULT_ROTATION: $Vector3f;
        static DEFAULT_TRANSLATION: $Vector3f;
        static MAX_SCALE: number;
        constructor();
    }
    export class $BlockModelDefinition$Context {
        getDefinition(): $StateDefinition<$Block, $BlockState>;
        setDefinition(stateContainer: $StateDefinition<$Block_, $BlockState_>): void;
        constructor();
    }
    export class $Variant implements $ModelState {
        getWeight(): number;
        getRotation(): $Transformation;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        isUvLocked(): boolean;
        getModelLocation(): $ResourceLocation;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        mayApplyArbitraryRotation(): boolean;
        constructor(modelLocation: $ResourceLocation_, rotation: $Transformation, uvLock: boolean, weight: number);
        get weight(): number;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
        get modelLocation(): $ResourceLocation;
    }
    export class $ItemTransforms$Deserializer implements $JsonDeserializer<$ItemTransforms> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ItemTransforms;
        constructor();
    }
    export class $BlockElement$Deserializer implements $JsonDeserializer<$BlockElement> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockElement;
        constructor();
    }
}
