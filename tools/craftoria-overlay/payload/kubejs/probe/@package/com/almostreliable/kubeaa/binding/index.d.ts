import { $Holder_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $CrushingRecipe$CrushingResult, $CoffeeIngredientRecipe$EffectInstance } from "@package/de/ellpeck/actuallyadditions/mod/crafting";

declare module "@package/com/almostreliable/kubeaa/binding" {
    export class $CrushingResultBinding {
        static of(arg0: $ItemStack_): $CrushingRecipe$CrushingResult;
        static of(arg0: $ItemStack_, arg1: number): $CrushingRecipe$CrushingResult;
    }
    export class $EffectInstanceBinding {
        static ofId(arg0: $ResourceLocation_): $CoffeeIngredientRecipe$EffectInstance;
        static ofId(arg0: $ResourceLocation_, arg1: number, arg2: number): $CoffeeIngredientRecipe$EffectInstance;
        static ofId(arg0: $ResourceLocation_, arg1: number): $CoffeeIngredientRecipe$EffectInstance;
        static ofEffect(arg0: $Holder_<$MobEffect>): $CoffeeIngredientRecipe$EffectInstance;
        static ofEffect(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number): $CoffeeIngredientRecipe$EffectInstance;
        static ofEffect(arg0: $Holder_<$MobEffect>, arg1: number): $CoffeeIngredientRecipe$EffectInstance;
    }
}
