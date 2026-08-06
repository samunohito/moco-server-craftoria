import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
export * as client from "@package/vazkii/patchouli/mixin/client";

declare module "@package/vazkii/patchouli/mixin" {
    export class $AccessorSmithingTrimRecipe {
    }
    export interface $AccessorSmithingTrimRecipe {
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        getAddition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
        get addition(): $Ingredient;
    }
    export class $AccessorSmithingTransformRecipe {
    }
    export interface $AccessorSmithingTransformRecipe {
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        getAddition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
        get addition(): $Ingredient;
    }
}
