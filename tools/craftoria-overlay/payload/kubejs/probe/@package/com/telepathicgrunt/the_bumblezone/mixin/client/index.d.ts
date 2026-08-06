import { $EntityRendererProvider } from "@package/net/minecraft/client/renderer/entity";
import { $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";
import { $ChannelAccess$ChannelHandle, $SoundEngine } from "@package/net/minecraft/client/sounds";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/telepathicgrunt/the_bumblezone/mixin/client" {
    export class $TextureStateShardAccessor {
    }
    export interface $TextureStateShardAccessor {
        bumblezone$getTexture(): ($ResourceLocation) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $TextureStateShardAccessor}.
     */
    export type $TextureStateShardAccessor_ = (() => ($ResourceLocation_) | undefined);
    export class $RenderStateShardAccessor {
    }
    export interface $RenderStateShardAccessor {
        bumblezone$getName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RenderStateShardAccessor}.
     */
    export type $RenderStateShardAccessor_ = (() => string);
    export class $BlockRenderDispatcherAccessor {
    }
    export interface $BlockRenderDispatcherAccessor {
        bumblezone$getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        bumblezone$getBlockColors(): $BlockColors;
    }
    export class $SoundManagerAccessor {
    }
    export interface $SoundManagerAccessor {
        bumblezone$getSoundEngine(): $SoundEngine;
    }
    /**
     * Values that may be interpreted as {@link $SoundManagerAccessor}.
     */
    export type $SoundManagerAccessor_ = (() => $SoundEngine);
    export class $ParticleEngineAccessor {
    }
    export interface $ParticleEngineAccessor {
        bumblezone$getTextureAtlas(): $TextureAtlas;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngineAccessor}.
     */
    export type $ParticleEngineAccessor_ = (() => $TextureAtlas);
    export class $EntityRenderersAccessor {
        static bumblezone$getPROVIDERS(): $Map<$EntityType<never>, $EntityRendererProvider<never>>;
    }
    export interface $EntityRenderersAccessor {
    }
    export class $SoundEngineAccessor {
    }
    export interface $SoundEngineAccessor {
        bumblezone$getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
    }
    /**
     * Values that may be interpreted as {@link $SoundEngineAccessor}.
     */
    export type $SoundEngineAccessor_ = (() => $Map_<$SoundInstance, $ChannelAccess$ChannelHandle>);
}
