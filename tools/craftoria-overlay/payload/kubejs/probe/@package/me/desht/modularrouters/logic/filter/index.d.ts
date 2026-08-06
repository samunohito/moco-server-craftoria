import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $IItemMatcher } from "@package/me/desht/modularrouters/api/matching";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ModuleFlags } from "@package/me/desht/modularrouters/logic/settings";
import { $List } from "@package/java/util";
import { $FilterAccess } from "@package/com/matyrobbrt/mekanisticrouters/mixin";

declare module "@package/me/desht/modularrouters/logic/filter" {
    export class $Filter implements $Predicate<$ItemStack>, $FilterAccess {
        test(arg0: $ItemStack_): boolean;
        isEmpty(): boolean;
        getFlags(): $ModuleFlags;
        testFluid(arg0: $Fluid_): boolean;
        getRawStacks(): $List<$ItemStack>;
        isWhiteList(): boolean;
        cycleRoundRobin(): (number) | undefined;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        mekrouters$getFlags(): $ModuleFlags;
        mekrouters$getMatchers(): $List<$IItemMatcher>;
        static FILTER_SIZE: number;
        constructor();
        constructor(arg0: $ItemStack_, arg1: boolean, arg2: boolean, arg3: $HolderLookup$Provider | null);
        get empty(): boolean;
        get flags(): $ModuleFlags;
        get rawStacks(): $List<$ItemStack>;
        get whiteList(): boolean;
    }
}
