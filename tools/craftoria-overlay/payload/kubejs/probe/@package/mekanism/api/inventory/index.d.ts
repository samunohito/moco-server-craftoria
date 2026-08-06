import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/inventory" {
    export class $IInventorySlot {
    }
    export interface $IInventorySlot extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        isEmpty(): boolean;
        getCount(): number;
        getStack(): $ItemStack;
        getLimit(arg0: $ItemStack_): number;
        setStack(arg0: $ItemStack_): void;
        insertItem(arg0: $ItemStack_, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        setEmpty(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        extractItem(arg0: number, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        isItemValid(arg0: $ItemStack_): boolean;
        shrinkStack(arg0: number, arg1: $Action_): number;
        growStack(arg0: number, arg1: $Action_): number;
        setStackSize(arg0: number, arg1: $Action_): number;
        createContainerSlot(): $Slot;
        get count(): number;
    }
    export class $ISidedItemHandler {
    }
    export interface $ISidedItemHandler extends $IItemHandlerModifiable {
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getInventorySideFor(): $Direction;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlots(): number;
        getSlots(arg0: $Direction_): number;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        getSlotLimit(arg0: number): number;
        get inventorySideFor(): $Direction;
    }
    export class $IMekanismInventory {
    }
    export interface $IMekanismInventory extends $ISidedItemHandler, $IContentsListener {
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
        getSlots(arg0: $Direction_): number;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        hasInventory(): boolean;
        isInventoryEmpty(): boolean;
        isInventoryEmpty(arg0: $Direction_): boolean;
        getInventorySlots(arg0: $Direction_): $List<$IInventorySlot>;
    }
}
