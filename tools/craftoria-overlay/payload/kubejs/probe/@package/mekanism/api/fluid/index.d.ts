import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $List } from "@package/java/util";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/fluid" {
    export class $IExtendedFluidHandler {
    }
    export interface $IExtendedFluidHandler extends $IFluidHandler {
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
    }
    export class $IExtendedFluidTank {
    }
    export interface $IExtendedFluidTank extends $IFluidTank, $INBTSerializable<$CompoundTag>, $IContentsListener {
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): $FluidStack;
        insert(arg0: $FluidStack_, arg1: $Action_, arg2: $AutomationType_): $FluidStack;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getNeeded(): number;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidEqual(arg0: $FluidStack_): boolean;
        setStack(arg0: $FluidStack_): void;
        setEmpty(): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        shrinkStack(arg0: number, arg1: $Action_): number;
        getFluidAmount(): number;
        growStack(arg0: number, arg1: $Action_): number;
        setStackSize(arg0: number, arg1: $Action_): number;
        setStackUnchecked(arg0: $FluidStack_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get needed(): number;
        set stack(value: $FluidStack_);
        get fluidAmount(): number;
        set stackUnchecked(value: $FluidStack_);
    }
    export class $ISidedFluidHandler {
    }
    export interface $ISidedFluidHandler extends $IExtendedFluidHandler {
        getTanks(): number;
        getTanks(arg0: $Direction_): number;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidSideFor(): $Direction;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        get fluidSideFor(): $Direction;
    }
    export class $IMekanismFluidHandler {
    }
    export interface $IMekanismFluidHandler extends $ISidedFluidHandler, $IContentsListener {
        getTanks(arg0: $Direction_): number;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        canHandleFluid(): boolean;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        getFluidTanks(arg0: $Direction_): $List<$IExtendedFluidTank>;
    }
}
