import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Class } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/client/compat/viewer/abstraction" {
    export class $ViewerCategory<D> {
        buildRecipes(arg0: $RecipeManager, arg1: $RegistryAccess, arg2: $Consumer_<D>): void;
        getRecipeId(arg0: D): $ResourceLocation;
        buildWorkstations(arg0: $ViewerCategory$WorkstationConsumer): void;
        buildWidgets(arg0: D, arg1: $ViewerCategory$WidgetList): void;
        buildLayout(arg0: D, arg1: $ViewerCategory$LayoutBuilder): void;
        dataClass: $Class<D>;
        icon: $ViewerCategory$Icon;
        width: number;
        id: $ResourceLocation;
        title: $Component;
        height: number;
    }
}
