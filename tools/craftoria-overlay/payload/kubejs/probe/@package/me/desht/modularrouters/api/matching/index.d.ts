import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";

declare module "@package/me/desht/modularrouters/api/matching" {
    export class $IModuleFlags {
    }
    export interface $IModuleFlags {
        matchComponents(): boolean;
        whiteList(): boolean;
        matchAllItems(): boolean;
        matchItemTags(): boolean;
        matchDamage(): boolean;
    }
    export class $IItemMatcher {
    }
    export interface $IItemMatcher {
        matchItem(arg0: $ItemStack_, arg1: $IModuleFlags, arg2: $HolderLookup$Provider | null): boolean;
        matchFluid(arg0: $Fluid_, arg1: $IModuleFlags, arg2: $HolderLookup$Provider | null): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IItemMatcher}.
     */
    export type $IItemMatcher_ = ((arg0: $ItemStack, arg1: $IModuleFlags, arg2: $HolderLookup$Provider) => boolean);
}
