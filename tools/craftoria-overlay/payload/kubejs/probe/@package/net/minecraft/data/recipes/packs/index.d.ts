import { $ItemLike } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $RecipeProvider } from "@package/net/minecraft/data/recipes";
import { $Record } from "@package/java/lang";
import { $CachedOutput_, $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/recipes/packs" {
    export class $VanillaRecipeProvider$TrimTemplate extends $Record {
        id(): $ResourceLocation;
        template(): $Item;
        constructor(arg0: $Item_, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $VanillaRecipeProvider$TrimTemplate}.
     */
    export type $VanillaRecipeProvider$TrimTemplate_ = { id?: $ResourceLocation_, template?: $Item_,  } | [id?: $ResourceLocation_, template?: $Item_, ];
    export class $BundleRecipeProvider extends $RecipeProvider {
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $VanillaRecipeProvider extends $RecipeProvider {
        run(output: $CachedOutput_, registries: $HolderLookup$Provider): $CompletableFuture<never>;
        static smithingTrims(): $Stream<$VanillaRecipeProvider$TrimTemplate>;
        static LAPIS_SMELTABLES: $ImmutableList<$ItemLike>;
        static EMERALD_SMELTABLES: $ImmutableList<$ItemLike>;
        static COPPER_SMELTABLES: $ImmutableList<$ItemLike>;
        static REDSTONE_SMELTABLES: $ImmutableList<$ItemLike>;
        static COAL_SMELTABLES: $ImmutableList<$ItemLike>;
        static GOLD_SMELTABLES: $ImmutableList<$ItemLike>;
        static IRON_SMELTABLES: $ImmutableList<$ItemLike>;
        recipePathProvider: $PackOutput$PathProvider;
        static DIAMOND_SMELTABLES: $ImmutableList<$ItemLike>;
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>);
    }
}
