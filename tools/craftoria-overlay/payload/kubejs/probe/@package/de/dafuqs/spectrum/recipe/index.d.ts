import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/de/dafuqs/spectrum/recipe" {
    export class $RecipeScaling$ScalingData extends $Record {
        type(): $RecipeScaling;
        apply(arg0: number): number;
        start(): number;
        indexes(): $List<number>;
        scalingValue(): number;
        scalingFactor(): number;
        constructor(type: $RecipeScaling_, start: number, scalingValue: number, scalingFactor: number, indexes: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeScaling$ScalingData}.
     */
    export type $RecipeScaling$ScalingData_ = { type?: $RecipeScaling_, indexes?: $List_<number>, start?: number, scalingFactor?: number, scalingValue?: number,  } | [type?: $RecipeScaling_, indexes?: $List_<number>, start?: number, scalingFactor?: number, scalingValue?: number, ];
    export class $RecipeScaling {
        getId(): $ResourceLocation;
        static indices(...arg0: number[]): $RecipeScaling$ScalingData;
        static exponential(arg0: number, arg1: number, arg2: number, ...arg3: number[]): $RecipeScaling$ScalingData;
        static indexed(arg0: number, arg1: number, arg2: number, ...arg3: number[]): $RecipeScaling$ScalingData;
        static linear(arg0: number, arg1: number, arg2: number, ...arg3: number[]): $RecipeScaling$ScalingData;
        static doubling(arg0: number, arg1: number, arg2: number, ...arg3: number[]): $RecipeScaling$ScalingData;
        static doubling(arg0: number, ...arg1: number[]): $RecipeScaling$ScalingData;
        static CODEC: $Codec<$RecipeScaling$ScalingData>;
        static DOUBLING: $RecipeScaling;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeScaling$ScalingData>;
        static LINEAR: $RecipeScaling;
        static EXPONENTIAL: $RecipeScaling;
        static INDEXED: $RecipeScaling;
        constructor(arg0: $ResourceLocation_);
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $RecipeScaling}.
     */
    export type $RecipeScaling_ = RegistryTypes.SpectrumRecipeScaling;
    export interface $RecipeScaling extends RegistryMarked<RegistryTypes.SpectrumRecipeScalingTag, RegistryTypes.SpectrumRecipeScaling> {}
}
