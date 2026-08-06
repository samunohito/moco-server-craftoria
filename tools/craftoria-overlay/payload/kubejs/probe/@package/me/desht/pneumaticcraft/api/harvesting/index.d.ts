import { $Level_, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_, $Consumer, $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $IDrone } from "@package/me/desht/pneumaticcraft/api/drone";

declare module "@package/me/desht/pneumaticcraft/api/harvesting" {
    export class $HarvestHandler {
        harvest(arg0: $Level_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $IDrone): void;
        canHarvest(arg0: $Level_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $IDrone): boolean;
        harvestAndReplant(arg0: $Level_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $IDrone): boolean;
        addFilterItems(arg0: $Level_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $IDrone): $List<$ItemStack>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $HarvestHandler}.
     */
    export type $HarvestHandler_ = RegistryTypes.PneumaticcraftHarvestHandlers;
    export class $HoeHandler implements $Predicate<$ItemStack> {
        test(arg0: $ItemStack_): boolean;
        getConsumer(arg0: $ItemStack_): $Consumer<$Player>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        constructor(arg0: $Predicate_<$ItemStack>, arg1: $BiConsumer_<$ItemStack, $Player>);
    }
    /**
     * Values that may be interpreted as {@link $HoeHandler}.
     */
    export type $HoeHandler_ = RegistryTypes.PneumaticcraftHoeHandlers;
    export interface $HarvestHandler extends RegistryMarked<RegistryTypes.PneumaticcraftHarvestHandlersTag, RegistryTypes.PneumaticcraftHarvestHandlers> {}
    export interface $HoeHandler extends RegistryMarked<RegistryTypes.PneumaticcraftHoeHandlersTag, RegistryTypes.PneumaticcraftHoeHandlers> {}
}
