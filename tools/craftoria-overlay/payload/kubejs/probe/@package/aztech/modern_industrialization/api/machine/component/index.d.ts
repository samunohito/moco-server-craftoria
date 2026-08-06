import { $FluidVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/fluid";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List } from "@package/java/util";
import { $ItemVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/item";

declare module "@package/aztech/modern_industrialization/api/machine/component" {
    export class $FluidAccess {
    }
    export interface $FluidAccess {
        getCapacity(): number;
        getVariant(): $FluidVariant;
        getAmount(): number;
        toStack(): $FluidStack;
        get capacity(): number;
        get variant(): $FluidVariant;
        get amount(): number;
    }
    export class $EnergyAccess {
    }
    export interface $EnergyAccess {
        getCapacity(): number;
        getEu(): number;
        get capacity(): number;
        get eu(): number;
    }
    export class $InventoryAccess {
    }
    export interface $InventoryAccess {
        getFluidInputs(): $List<$FluidAccess>;
        getItemInputs(): $List<$ItemAccess>;
        getItemOutputs(): $List<$ItemAccess>;
        getFluidOutputs(): $List<$FluidAccess>;
        get fluidInputs(): $List<$FluidAccess>;
        get itemInputs(): $List<$ItemAccess>;
        get itemOutputs(): $List<$ItemAccess>;
        get fluidOutputs(): $List<$FluidAccess>;
    }
    export class $CrafterAccess {
    }
    export interface $CrafterAccess {
        getProgress(): number;
        getCurrentRecipeEu(): number;
        getInventory(): $InventoryAccess;
        getMaxEfficiencyTicks(): number;
        getEfficiencyTicks(): number;
        hasActiveRecipe(): boolean;
        getBaseRecipeEu(): number;
        get progress(): number;
        get currentRecipeEu(): number;
        get inventory(): $InventoryAccess;
        get maxEfficiencyTicks(): number;
        get efficiencyTicks(): number;
        get baseRecipeEu(): number;
    }
    export class $ItemAccess {
    }
    export interface $ItemAccess {
        getVariant(): $ItemVariant;
        getAmount(): number;
        toStack(): $ItemStack;
        get variant(): $ItemVariant;
        get amount(): number;
    }
}
