import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $ModuleItem } from "@package/me/desht/modularrouters/item/module";
import { $ItemStack, $Item_, $Item } from "@package/net/minecraft/world/item";
import { $ModuleTermination, $RedstoneBehaviour, $RelativeDirection } from "@package/me/desht/modularrouters/logic/settings";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ModularRouterBlockEntity } from "@package/me/desht/modularrouters/block/tile";
import { $List } from "@package/java/util";
import { $Filter } from "@package/me/desht/modularrouters/logic/filter";
import { $ExecuteModuleEvent } from "@package/me/desht/modularrouters/api/event";
import { $ModuleTarget } from "@package/me/desht/modularrouters/logic";

declare module "@package/me/desht/modularrouters/logic/compiled" {
    export class $CompiledModule {
        getModule(): $ModuleItem;
        execute(arg0: $ModularRouterBlockEntity): boolean;
        termination(): $ModuleTermination;
        getTarget(): $ModuleTarget;
        cleanup(arg0: $ModularRouterBlockEntity): void;
        getFilter(): $Filter;
        getTargets(): $List<$ModuleTarget>;
        getEvent(): $ExecuteModuleEvent;
        getRange(): number;
        getEnergyCost(): number;
        getRedstoneBehaviour(): $RedstoneBehaviour;
        getDirection(): $RelativeDirection;
        getRangeSquared(): number;
        getAugmentCount(arg0: $Item_): number;
        getAugmentCount(arg0: $Supplier_<$Item>): number;
        getItemsPerTick(arg0: $ModularRouterBlockEntity): number;
        checkRedstone(arg0: boolean, arg1: boolean): boolean;
        onCompiled(arg0: $ModularRouterBlockEntity): void;
        getAbsoluteFacing(): $Direction;
        shouldExecute(): boolean;
        onNeighbourChange(arg0: $ModularRouterBlockEntity): void;
        getEffectiveTarget(arg0: $ModularRouterBlockEntity): $ModuleTarget;
        isRegulationOK(arg0: $ModularRouterBlockEntity, arg1: boolean): boolean;
        transferToRouter(arg0: $IItemHandler, arg1: $BlockPos_ | null, arg2: $ModularRouterBlockEntity): $ItemStack;
        careAboutItemAttributes(): boolean;
        getRegulationAmount(): number;
        get module(): $ModuleItem;
        get target(): $ModuleTarget;
        get filter(): $Filter;
        get targets(): $List<$ModuleTarget>;
        get event(): $ExecuteModuleEvent;
        get range(): number;
        get energyCost(): number;
        get redstoneBehaviour(): $RedstoneBehaviour;
        get direction(): $RelativeDirection;
        get rangeSquared(): number;
        get absoluteFacing(): $Direction;
        get regulationAmount(): number;
    }
}
