import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/de/dafuqs/spectrum/api/recipe" {
    export interface $FusionShrineRecipeWorldEffect extends RegistryMarked<RegistryTypes.SpectrumWorldEffectTag, RegistryTypes.SpectrumWorldEffect> {}
    export class $FusionShrineRecipeWorldEffect {
        static register(arg0: string, arg1: $FusionShrineRecipeWorldEffect_): $FusionShrineRecipeWorldEffect;
        static fromString(arg0: string): $FusionShrineRecipeWorldEffect;
        static CODEC: $Codec<$FusionShrineRecipeWorldEffect>;
        static PACKET_CODEC: $StreamCodec<$ByteBuf, $FusionShrineRecipeWorldEffect>;
        static NOTHING: $FusionShrineRecipeWorldEffect;
    }
    export interface $FusionShrineRecipeWorldEffect {
        trigger(arg0: $ServerLevel, arg1: $BlockPos_): void;
        isOneTimeEffect(): boolean;
        get oneTimeEffect(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FusionShrineRecipeWorldEffect}.
     */
    export type $FusionShrineRecipeWorldEffect_ = RegistryTypes.SpectrumWorldEffect;
}
