import { $AnimationMetadataSection } from "@package/net/minecraft/client/resources/metadata/animation";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Pair, $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/texture" {
    export class $SpritePreparationContext {
    }
    export interface $SpritePreparationContext {
        getIdentifier(): $ResourceLocation;
        getTextureWidth(): number;
        getTextureHeight(): number;
        getOriginalFrameSize(): $Pair<number, number>;
        getAnimationMetadata(): $AnimationMetadataSection;
        getOriginalFrameHeight(): number;
        getOriginalFrameWith(): number;
        get identifier(): $ResourceLocation;
        get textureWidth(): number;
        get textureHeight(): number;
        get originalFrameSize(): $Pair<number, number>;
        get animationMetadata(): $AnimationMetadataSection;
        get originalFrameHeight(): number;
        get originalFrameWith(): number;
    }
    export class $SpriteCreationContext {
    }
    export interface $SpriteCreationContext {
        getMipmapLevels(): number;
        getTextureBuffers(): $NativeImage[];
        getSpriteWidth(): number;
        getSpriteHeight(): number;
        getTextureWidth(): number;
        getSpritePositionX(): number;
        getTextureHeight(): number;
        getAtlasHeight(): number;
        getAtlasWidth(): number;
        getSpritePositionY(): number;
        getAtlas(): $TextureAtlas;
        getTextureIdentifier(): $ResourceLocation;
        createOriginalSprite(): $TextureAtlasSprite;
        get mipmapLevels(): number;
        get textureBuffers(): $NativeImage[];
        get spriteWidth(): number;
        get spriteHeight(): number;
        get textureWidth(): number;
        get spritePositionX(): number;
        get textureHeight(): number;
        get atlasHeight(): number;
        get atlasWidth(): number;
        get spritePositionY(): number;
        get atlas(): $TextureAtlas;
        get textureIdentifier(): $ResourceLocation;
    }
    export class $TextureType<T> {
    }
    export interface $TextureType<T> extends $Serializer<T> {
        getFrameSize(context: $SpritePreparationContext, data: T): $Pair<number, number>;
        createSprite(context: $SpriteCreationContext, data: T): $TextureAtlasSprite;
    }
}
