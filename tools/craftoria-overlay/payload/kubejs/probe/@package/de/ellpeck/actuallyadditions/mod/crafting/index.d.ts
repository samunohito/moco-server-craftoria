import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $RecipeInput, $RecipeType, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Record } from "@package/java/lang";

declare module "@package/de/ellpeck/actuallyadditions/mod/crafting" {
    export class $EmpowererRecipe implements $Recipe<$RecipeInput> {
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        matches(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_): boolean;
        getType(): $RecipeType<never>;
        getTime(): number;
        getInput(): $Ingredient;
        getOutput(): $ItemStack;
        isSpecial(): boolean;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getStandTwo(): $Ingredient;
        getStandOne(): $Ingredient;
        getParticleColors(): number;
        getStandThree(): $Ingredient;
        getStandFour(): $Ingredient;
        getEnergyPerStand(): number;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        getGroup(): string;
        isIncomplete(): boolean;
        showNotification(): boolean;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        static NAME: string;
        constructor(arg0: $ItemStack_, arg1: $Ingredient_, arg2: $NonNullList<$Ingredient_>, arg3: number, arg4: number, arg5: number);
        get type(): $RecipeType<never>;
        get time(): number;
        get input(): $Ingredient;
        get output(): $ItemStack;
        get special(): boolean;
        get serializer(): $RecipeSerializer<never>;
        get standTwo(): $Ingredient;
        get standOne(): $Ingredient;
        get particleColors(): number;
        get standThree(): $Ingredient;
        get standFour(): $Ingredient;
        get energyPerStand(): number;
        get group(): string;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
    }
    export class $CrushingRecipe$CrushingResult extends $Record {
        stack(): $ItemStack;
        chance(): number;
        static EMPTY: $CrushingRecipe$CrushingResult;
        constructor(stack: $ItemStack_, chance: number);
    }
    /**
     * Values that may be interpreted as {@link $CrushingRecipe$CrushingResult}.
     */
    export type $CrushingRecipe$CrushingResult_ = { stack?: $ItemStack_, chance?: number,  } | [stack?: $ItemStack_, chance?: number, ];
    export class $CoffeeIngredientRecipe$EffectInstance extends $Record {
        duration(): number;
        toNetwork(arg0: $FriendlyByteBuf): void;
        effect(): $ResourceLocation;
        static fromNetwork(arg0: $FriendlyByteBuf): $CoffeeIngredientRecipe$EffectInstance;
        amplifier(): number;
        static CODEC: $Codec<$CoffeeIngredientRecipe$EffectInstance>;
        static EMPTY: $CoffeeIngredientRecipe$EffectInstance;
        constructor(arg0: $MobEffectInstance);
        constructor(effect: $ResourceLocation_, duration: number, amplifier: number);
    }
    /**
     * Values that may be interpreted as {@link $CoffeeIngredientRecipe$EffectInstance}.
     */
    export type $CoffeeIngredientRecipe$EffectInstance_ = { duration?: number, effect?: $ResourceLocation_, amplifier?: number,  } | [duration?: number, effect?: $ResourceLocation_, amplifier?: number, ];
}
