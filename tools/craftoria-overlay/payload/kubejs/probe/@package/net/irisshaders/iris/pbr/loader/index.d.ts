import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/net/irisshaders/iris/pbr/loader" {
    export class $AtlasPBRLoader$PBRTextureAtlasSprite extends $TextureAtlasSprite {
        getBaseSprite(): $TextureAtlasSprite;
        v0: number;
        u0: number;
        v1: number;
        u1: number;
        get baseSprite(): $TextureAtlasSprite;
    }
}
