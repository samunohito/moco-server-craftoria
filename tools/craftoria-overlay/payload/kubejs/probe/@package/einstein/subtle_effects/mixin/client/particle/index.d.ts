import { $Particle, $ParticleRenderType_, $ParticleRenderType, $Particle$LifetimeAlpha_ } from "@package/net/minecraft/client/particle";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List_, $Map_, $Map, $Queue, $List } from "@package/java/util";

declare module "@package/einstein/subtle_effects/mixin/client/particle" {
    export class $FlyTowardsPositionParticleAccessor {
    }
    export interface $FlyTowardsPositionParticleAccessor {
        setGlowing(arg0: boolean): void;
        setLifetimeAlpha(arg0: $Particle$LifetimeAlpha_): void;
        set glowing(value: boolean);
        set lifetimeAlpha(value: $Particle$LifetimeAlpha_);
    }
    export class $ParticleEngineAccessor {
        static setRenderOrder(arg0: $List_<$ParticleRenderType_>): void;
        static getRenderOrder(): $List<$ParticleRenderType>;
    }
    export interface $ParticleEngineAccessor {
        getParticles(): $Map<$ParticleRenderType, $Queue<$Particle>>;
        get particles(): $Map<$ParticleRenderType, $Queue<$Particle>>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngineAccessor}.
     */
    export type $ParticleEngineAccessor_ = (() => $Map_<$ParticleRenderType_, $Queue<$Particle>>);
    export class $SpriteSetAccessor {
    }
    export interface $SpriteSetAccessor {
        getSprites(): $List<$TextureAtlasSprite>;
        get sprites(): $List<$TextureAtlasSprite>;
    }
    /**
     * Values that may be interpreted as {@link $SpriteSetAccessor}.
     */
    export type $SpriteSetAccessor_ = (() => $List_<$TextureAtlasSprite>);
}
