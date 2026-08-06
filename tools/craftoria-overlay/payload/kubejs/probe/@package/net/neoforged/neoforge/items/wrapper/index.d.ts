import { $Level_ } from "@package/net/minecraft/world/level";
import { $RecipeWrapperAccess } from "@package/snownee/autochefsdelight/mixin";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity, $EquipmentSlot$Type_ } from "@package/net/minecraft/world/entity";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $WorldlyContainer, $Container } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";

declare module "@package/net/neoforged/neoforge/items/wrapper" {
    export class $PlayerOffhandInvWrapper extends $RangedWrapper {
        constructor(inv: $Inventory);
    }
    export class $PlayerArmorInvWrapper extends $RangedWrapper {
        getInventoryPlayer(): $Inventory;
        constructor(inv: $Inventory);
        get inventoryPlayer(): $Inventory;
    }
    /**
     * Exposes the armor or hands inventory of an `LivingEntity` as an `IItemHandler` using `LivingEntity#getItemBySlot(EquipmentSlot)` and
     * `LivingEntity#setItemSlot(EquipmentSlot, ItemStack)`.
     */
    export class $EntityEquipmentInvWrapper implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(entity: $LivingEntity, slotType: $EquipmentSlot$Type_);
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $PlayerInvWrapper extends $CombinedInvWrapper {
        constructor(inv: $Inventory);
    }
    /**
     * An `IItemHandler` that delegates each method to another `IItemHandler`.
     * The `Supplier` is re-evaluated each time a method is called.
     */
    export class $ForwardingItemHandler implements $IItemHandler {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(delegate: $IItemHandler);
        constructor(delegate: $Supplier_<$IItemHandler>);
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    /**
     * A wrapper that composes another IItemHandlerModifiable, exposing only a range of the composed slots.
     * Shifting of slot indices is handled automatically for you.
     */
    export class $RangedWrapper implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(compose: $IItemHandlerModifiable, minSlot: number, maxSlotExclusive: number);
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    /**
     * Exposes the armor inventory of an `LivingEntity` as an `IItemHandler` using `LivingEntity#getItemBySlot(EquipmentSlot)` and
     * `LivingEntity#setItemSlot(EquipmentSlot, ItemStack)`.
     */
    export class $EntityArmorInvWrapper extends $EntityEquipmentInvWrapper {
        constructor(entity: $LivingEntity);
    }
    export class $EmptyItemHandler implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        static INSTANCE: $IItemHandler;
        constructor();
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $SidedInvWrapper implements $IItemHandlerModifiable {
        static getSlot(inv: $WorldlyContainer, slot: number, side: $Direction_): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(inv: $WorldlyContainer, side: $Direction_);
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $InvWrapper implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        getInv(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(inv: $Container);
        get inv(): $Container;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    /**
     * Exposes the player inventory WITHOUT the armor inventory as IItemHandler.
     * Also takes core of inserting/extracting having the same logic as picking up items.
     */
    export class $PlayerMainInvWrapper extends $RangedWrapper {
        getInventoryPlayer(): $Inventory;
        constructor(inv: $Inventory);
        get inventoryPlayer(): $Inventory;
    }
    /**
     * Exposes the hands inventory of an `LivingEntity` as an `IItemHandler` using `LivingEntity#getItemBySlot(EquipmentSlot)` and
     * `LivingEntity#setItemSlot(EquipmentSlot, ItemStack)`.
     */
    export class $EntityHandsInvWrapper extends $EntityEquipmentInvWrapper {
        constructor(entity: $LivingEntity);
    }
    export class $SidedInvWrapper$InsertLimit {
    }
    export interface $SidedInvWrapper$InsertLimit {
    }
    /**
     * Values that may be interpreted as {@link $SidedInvWrapper$InsertLimit}.
     */
    export type $SidedInvWrapper$InsertLimit_ = (() => void);
    export class $RecipeWrapper implements $RecipeInput, $RecipeWrapperAccess {
        /**
         * Returns the size of this inventory.
         */
        size(): number;
        /**
         * Returns the stack in this slot. This stack should be a modifiable reference, not a copy of a stack in your inventory.
         */
        getItem(slot: number): $ItemStack;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        getInv(): $IItemHandler;
        constructor(inv: $IItemHandler);
        get empty(): boolean;
        get inv(): $IItemHandler;
    }
    export class $CombinedInvWrapper implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(...arg0: $IItemHandlerModifiable[]);
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
}
