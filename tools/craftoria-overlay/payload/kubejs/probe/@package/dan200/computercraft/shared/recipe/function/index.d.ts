import { $Registry } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dan200/computercraft/shared/recipe/function" {
    export class $RecipeFunction$Type<T extends $RecipeFunction> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeFunction$Type}.
     */
    export type $RecipeFunction$Type_<T> = RegistryTypes.ComputercraftRecipeFunction | { streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $RecipeFunction>, codec?: $MapCodec_<$RecipeFunction>,  } | [streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $RecipeFunction>, codec?: $MapCodec_<$RecipeFunction>, ];
    export class $RecipeFunction {
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$RecipeFunction>>;
        static CODEC: $Codec<$RecipeFunction>;
        static LIST_CODEC: $Codec<$List<$RecipeFunction>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeFunction>;
        static REGISTRY: $ResourceKey<$Registry<$RecipeFunction$Type<never>>>;
    }
    export interface $RecipeFunction {
        apply(arg0: $CraftingInput, arg1: $ItemStack_): $ItemStack;
        getType(): $RecipeFunction$Type<never>;
        get type(): $RecipeFunction$Type<never>;
    }
    export interface $RecipeFunction$Type<T> extends RegistryMarked<RegistryTypes.ComputercraftRecipeFunctionTag, RegistryTypes.ComputercraftRecipeFunction> {}
}
