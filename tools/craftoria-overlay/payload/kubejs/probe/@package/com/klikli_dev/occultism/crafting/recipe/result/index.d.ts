import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $WeightedEntry, $Weight } from "@package/net/minecraft/util/random";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/klikli_dev/occultism/crafting/recipe/result" {
    export class $RecipeResultType<T extends $RecipeResult> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(arg0: $MapCodec_<T>);
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeResultType}.
     */
    export type $RecipeResultType_<T> = RegistryTypes.OccultismRecipeResultType | { streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $RecipeResult>, codec?: $MapCodec_<$RecipeResult>,  } | [streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $RecipeResult>, codec?: $MapCodec_<$RecipeResult>, ];
    export class $RecipeResult {
        getStacks(): $ItemStack[];
        static of(arg0: $TagKey_<$Item>): $RecipeResult;
        static of(arg0: $ItemStack_): $RecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number, arg2: $DataComponentPatch_): $RecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number): $RecipeResult;
        getType(): $RecipeResultType<never>;
        getStack(): $ItemStack;
        copyWithCount(arg0: number): $RecipeResult;
        static CODEC: $Codec<$RecipeResult>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeResult>;
        constructor();
        get stacks(): $ItemStack[];
        get type(): $RecipeResultType<never>;
        get stack(): $ItemStack;
    }
    export class $WeightedRecipeResult extends $RecipeResult implements $WeightedEntry {
        static of(arg0: $ItemStack_, arg1: number): $WeightedRecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number, arg2: $DataComponentPatch_, arg3: number): $WeightedRecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number, arg2: number): $WeightedRecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number): $WeightedRecipeResult;
        weight(): number;
        getWeight(): $Weight;
        copyWithCount(arg0: number): $WeightedRecipeResult;
        copyWithWeight(arg0: number): $WeightedRecipeResult;
        static CODEC: $Codec<$WeightedRecipeResult>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WeightedRecipeResult>;
        constructor(arg0: number);
    }
    export interface $RecipeResultType<T> extends RegistryMarked<RegistryTypes.OccultismRecipeResultTypeTag, RegistryTypes.OccultismRecipeResultType> {}
}
