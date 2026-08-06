import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Map } from "@package/java/util";

declare module "@package/de/dafuqs/spectrum/mixin/client/accessors" {
    export class $SourceAccessor {
    }
    export interface $SourceAccessor {
        getSource(): number;
        get source(): number;
    }
    /**
     * Values that may be interpreted as {@link $SourceAccessor}.
     */
    export type $SourceAccessor_ = (() => number);
    export class $ParticleManagerAccessor {
    }
    export interface $ParticleManagerAccessor {
        getTextureAtlas(): $TextureAtlas;
        getSpriteSets(): $Map<$ResourceLocation, $SpriteSet>;
        get textureAtlas(): $TextureAtlas;
        get spriteSets(): $Map<$ResourceLocation, $SpriteSet>;
    }
}
