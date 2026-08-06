import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractCookingRecipe, $RecipeSerializer_, $Ingredient_, $Ingredient, $Recipe, $AbstractCookingRecipe$Factory_, $ShapedRecipePattern, $SingleItemRecipe$Factory_, $CraftingBookCategory } from "@package/net/minecraft/world/item/crafting";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Map } from "@package/java/util";
import { $MinMaxBounds$Ints_, $InventoryChangeTrigger$TriggerInstance } from "@package/net/minecraft/advancements/critereon";
import { $CachedOutput_, $DataProvider, $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $AdvancementHolder_, $Advancement$Builder, $Criterion_, $Criterion } from "@package/net/minecraft/advancements";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $IRecipeOutputExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
export * as packs from "@package/net/minecraft/data/recipes/packs";

declare module "@package/net/minecraft/data/recipes" {
    export class $SmithingTrimRecipeBuilder {
        save(recipeOutput: $RecipeOutput, recipeId: $ResourceLocation_): void;
        static smithingTrim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, category: $RecipeCategory_): $SmithingTrimRecipeBuilder;
        unlocks(key: string, criterion: $Criterion_<never>): $SmithingTrimRecipeBuilder;
        constructor(category: $RecipeCategory_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_);
    }
    export class $SpecialRecipeBuilder {
        save(recipeOutput: $RecipeOutput, recipeId: $ResourceLocation_): void;
        save(recipeOutput: $RecipeOutput, recipeId: string): void;
        static special(factory: $Function_<$CraftingBookCategory, $Recipe<never>>): $SpecialRecipeBuilder;
        constructor(factory: $Function_<$CraftingBookCategory, $Recipe<never>>);
    }
    export class $RecipeProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        static has(tag: $TagKey_<$Item>): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static has(count: $MinMaxBounds$Ints_, item: $ItemLike_): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static has(itemLike: $ItemLike_): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $SmithingTransformRecipeBuilder {
        save(recipeOutput: $RecipeOutput, recipeId: $ResourceLocation_): void;
        save(recipeOutput: $RecipeOutput, recipeId: string): void;
        ensureValid(location: $ResourceLocation_): void;
        static smithing(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, category: $RecipeCategory_, result: $Item_): $SmithingTransformRecipeBuilder;
        unlocks(key: string, criterion: $Criterion_<never>): $SmithingTransformRecipeBuilder;
        template: $Ingredient;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        category: $RecipeCategory;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, category: $RecipeCategory_, result: $Item_);
    }
    export class $ShapelessRecipeBuilder implements $RecipeBuilder {
        group(groupName: string | null): $ShapelessRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        /**
         * Adds an ingredient.
         */
        requires(ingredient: $Ingredient_): $ShapelessRecipeBuilder;
        /**
         * Adds the given ingredient multiple times.
         */
        requires(item: $ItemLike_, quantity: number): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient multiple times.
         */
        requires(ingredient: $Ingredient_, quantity: number): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient of the given item.
         */
        requires(item: $ItemLike_): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient that can be any item in the given tag.
         */
        requires(tag: $TagKey_<$Item>): $ShapelessRecipeBuilder;
        getResult(): $Item;
        /**
         * Makes sure that this recipe is valid and obtainable.
         */
        ensureValid(id: $ResourceLocation_): void;
        /**
         * Creates a new builder for a shapeless recipe.
         */
        static shapeless(category: $RecipeCategory_, result: $ItemLike_): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapelessRecipeBuilder;
        /**
         * Creates a new builder for a shapeless recipe.
         */
        static shapeless(category: $RecipeCategory_, result: $ItemLike_, count: number): $ShapelessRecipeBuilder;
        unlockedBy(name: string, criterion: $Criterion_<never>): $ShapelessRecipeBuilder;
        save(recipeOutput: $RecipeOutput): void;
        save(recipeOutput: $RecipeOutput, id: string): void;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        count: number;
        ingredients: $NonNullList<$Ingredient>;
        category: $RecipeCategory;
        constructor(category: $RecipeCategory_, result: $ItemLike_, count: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
    }
    export class $ShapedRecipeBuilder implements $RecipeBuilder {
        group(groupName: string | null): $ShapedRecipeBuilder;
        pattern(groupName: string): $ShapedRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        getResult(): $Item;
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, tag: $TagKey_<$Item>): $ShapedRecipeBuilder;
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, ingredient: $Ingredient_): $ShapedRecipeBuilder;
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, item: $ItemLike_): $ShapedRecipeBuilder;
        ensureValid(loaction: $ResourceLocation_): $ShapedRecipePattern;
        showNotification(showNotification: boolean): $ShapedRecipeBuilder;
        /**
         * Creates a new builder for a shaped recipe.
         */
        static shaped(category: $RecipeCategory_, result: $ItemLike_): $ShapedRecipeBuilder;
        /**
         * Creates a new builder for a shaped recipe.
         */
        static shaped(category: $RecipeCategory_, result: $ItemLike_, count: number): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapedRecipeBuilder;
        save(recipeOutput: $RecipeOutput): void;
        save(recipeOutput: $RecipeOutput, id: string): void;
        unlockedBy(name: string, criterion: $Criterion_<never>): $RecipeBuilder;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        count: number;
        category: $RecipeCategory;
        constructor(category: $RecipeCategory_, result: $ItemLike_, count: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
    }
    export class $RecipeBuilder {
        static getDefaultRecipeId(itemLike: $ItemLike_): $ResourceLocation;
        static determineBookCategory(category: $RecipeCategory_): $CraftingBookCategory;
        static ROOT_RECIPE_ADVANCEMENT: $ResourceLocation;
    }
    export interface $RecipeBuilder {
        group(groupName: string | null): $RecipeBuilder;
        save(recipeOutput: $RecipeOutput): void;
        save(recipeOutput: $RecipeOutput, id: string): void;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        getResult(): $Item;
        unlockedBy(name: string, criterion: $Criterion_<never>): $RecipeBuilder;
        get result(): $Item;
    }
    export class $RecipeCategory extends $Enum<$RecipeCategory> {
        static values(): $RecipeCategory[];
        static valueOf(arg0: string): $RecipeCategory;
        getFolderName(): string;
        static BUILDING_BLOCKS: $RecipeCategory;
        static REDSTONE: $RecipeCategory;
        static TRANSPORTATION: $RecipeCategory;
        static COMBAT: $RecipeCategory;
        static MISC: $RecipeCategory;
        static BREWING: $RecipeCategory;
        static DECORATIONS: $RecipeCategory;
        static TOOLS: $RecipeCategory;
        static FOOD: $RecipeCategory;
        get folderName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategory}.
     */
    export type $RecipeCategory_ = "building_blocks" | "decorations" | "redstone" | "transportation" | "tools" | "combat" | "food" | "brewing" | "misc";
    export class $RecipeOutput {
    }
    export interface $RecipeOutput extends $IRecipeOutputExtension {
        accept(location: $ResourceLocation_, recipe: $Recipe<never>, advancement: $AdvancementHolder_ | null): void;
        advancement(): $Advancement$Builder;
    }
    export class $SingleItemRecipeBuilder implements $RecipeBuilder {
        group(groupName: string | null): $SingleItemRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        getResult(): $Item;
        static stonecutting(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_): $SingleItemRecipeBuilder;
        static stonecutting(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, count: number): $SingleItemRecipeBuilder;
        save(recipeOutput: $RecipeOutput): void;
        save(recipeOutput: $RecipeOutput, id: string): void;
        unlockedBy(name: string, criterion: $Criterion_<never>): $RecipeBuilder;
        constructor(category: $RecipeCategory_, factory: $SingleItemRecipe$Factory_<never>, ingredient: $Ingredient_, result: $ItemLike_, count: number);
        get result(): $Item;
    }
    export class $SimpleCookingRecipeBuilder implements $RecipeBuilder {
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        static generic<T extends $AbstractCookingRecipe>(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number, cookingSerializer: $RecipeSerializer_<T>, factory: $AbstractCookingRecipe$Factory_<T>): $SimpleCookingRecipeBuilder;
        static generic<T extends $AbstractCookingRecipe>(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: $RecipeSerializer_<T>, arg6: $AbstractCookingRecipe$Factory_<T>): $SimpleCookingRecipeBuilder;
        getResult(): $Item;
        static smelting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smelting(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number): $SimpleCookingRecipeBuilder;
        unlockedBy(name: string, criterion: $Criterion_<never>): $SimpleCookingRecipeBuilder;
        static blasting(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number): $SimpleCookingRecipeBuilder;
        static blasting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smoking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smoking(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number): $SimpleCookingRecipeBuilder;
        static campfireCooking(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number): $SimpleCookingRecipeBuilder;
        static campfireCooking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        save(recipeOutput: $RecipeOutput): void;
        save(recipeOutput: $RecipeOutput, id: string): void;
        group(groupName: string | null): $RecipeBuilder;
        get result(): $Item;
    }
}
