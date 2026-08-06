import { $Direction } from "@package/net/minecraft/core";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $ModelQuadFacing } from "@package/org/embeddedt/embeddium/impl/model/quad/properties";
import { $SpriteTransparencyLevel } from "@package/org/embeddedt/embeddium/impl/render/chunk/sprite";
export * as properties from "@package/org/embeddedt/embeddium/impl/model/quad/properties";

declare module "@package/org/embeddedt/embeddium/impl/model/quad" {
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        setFlags(arg0: number): void;
        getTransparencyLevel(): $SpriteTransparencyLevel;
        hasShade(): boolean;
        getNormalFace(): $ModelQuadFacing;
        set flags(value: number);
        get transparencyLevel(): $SpriteTransparencyLevel;
        get normalFace(): $ModelQuadFacing;
    }
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getFlags(): number;
        hasAmbientOcclusion(): boolean;
        getComputedFaceNormal(): number;
        getZ(arg0: number): number;
        getX(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getColor(arg0: number): number;
        getLight(arg0: number): number;
        hasColor(): boolean;
        getY(arg0: number): number;
        getTexV(arg0: number): number;
        getTexU(arg0: number): number;
        getForgeNormal(arg0: number): number;
        getLightFace(): $Direction;
        getModFaceNormal(): number;
        getColorIndex(): number;
        get flags(): number;
        get computedFaceNormal(): number;
        get sprite(): $TextureAtlasSprite;
        get lightFace(): $Direction;
        get modFaceNormal(): number;
        get colorIndex(): number;
    }
}
