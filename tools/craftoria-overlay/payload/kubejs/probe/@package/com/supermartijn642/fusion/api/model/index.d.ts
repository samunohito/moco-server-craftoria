import { $BlockModel } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List, $Collection } from "@package/java/util";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/model" {
    export class $SpriteIdentifier {
        static of(atlas: $ResourceLocation_, texture: $ResourceLocation_): $SpriteIdentifier;
        static of(material: $Material): $SpriteIdentifier;
        static missing(): $SpriteIdentifier;
    }
    export interface $SpriteIdentifier {
        getAtlas(): $ResourceLocation;
        getTexture(): $ResourceLocation;
        toMaterial(): $Material;
        get atlas(): $ResourceLocation;
        get texture(): $ResourceLocation;
    }
    export class $ModelInstance<T> {
        static of<T>(modelType: $ModelType<T>, modelData: T): $ModelInstance<T>;
    }
    export interface $ModelInstance<T> {
        getParentModels(): $List<$ResourceLocation>;
        getAsVanillaModel(): $BlockModel;
        bake(context: $ModelBakingContext): $BakedModel;
        getModelData(): T;
        getModelType(): $ModelType<T>;
        getModelDependencies(): $Collection<$ResourceLocation>;
        get parentModels(): $List<$ResourceLocation>;
        get asVanillaModel(): $BlockModel;
        get modelData(): T;
        get modelType(): $ModelType<T>;
        get modelDependencies(): $Collection<$ResourceLocation>;
    }
    export class $ModelBakingContext {
    }
    export interface $ModelBakingContext {
        getModelBaker(): $ModelBaker;
        getTransformation(): $ModelState;
        getModel(identifier: $ResourceLocation_): $ModelInstance<never>;
        getTexture(atlas: $ResourceLocation_, texture: $ResourceLocation_): $TextureAtlasSprite;
        getTexture(identifier: $SpriteIdentifier): $TextureAtlasSprite;
        getBlockTexture(texture: $ResourceLocation_): $TextureAtlasSprite;
        getModelIdentifier(): $ResourceLocation;
        get modelBaker(): $ModelBaker;
        get transformation(): $ModelState;
        get modelIdentifier(): $ResourceLocation;
    }
    export class $ModelType<T> {
    }
    export interface $ModelType<T> extends $Serializer<T> {
        getParentModels(data: T): $List<$ResourceLocation>;
        getAsVanillaModel(data: T): $BlockModel;
        bake(context: $ModelBakingContext, data: T): $BakedModel;
        getModelDependencies(data: T): $Collection<$ResourceLocation>;
    }
}
