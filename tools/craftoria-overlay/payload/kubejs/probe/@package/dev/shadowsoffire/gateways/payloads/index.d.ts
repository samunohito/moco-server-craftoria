import { $IntFunction } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/shadowsoffire/gateways/payloads" {
    export class $ParticlePayload$EffectType extends $Enum<$ParticlePayload$EffectType> {
        static values(): $ParticlePayload$EffectType[];
        static valueOf(arg0: string): $ParticlePayload$EffectType;
        static IDLE: $ParticlePayload$EffectType;
        static BY_ID: $IntFunction<$ParticlePayload$EffectType>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ParticlePayload$EffectType>;
        static SPAWNED: $ParticlePayload$EffectType;
    }
    /**
     * Values that may be interpreted as {@link $ParticlePayload$EffectType}.
     */
    export type $ParticlePayload$EffectType_ = "idle" | "spawned";
}
