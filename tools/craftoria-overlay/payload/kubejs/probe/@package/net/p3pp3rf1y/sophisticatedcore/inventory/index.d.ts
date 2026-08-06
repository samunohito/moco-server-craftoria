import { $SlotRange } from "@package/net/p3pp3rf1y/sophisticatedcore/util";
import { $IntConsumer_, $Consumer_, $UnaryOperator_, $Predicate_, $Supplier_, $BiFunction_, $BooleanSupplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $MemorySettingsCategory } from "@package/net/p3pp3rf1y/sophisticatedcore/settings/memory";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map, $Set } from "@package/java/util";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/net/p3pp3rf1y/sophisticatedcore/inventory" {
    export class $IItemHandlerSimpleExtractor {
    }
    export interface $IItemHandlerSimpleExtractor {
        extractItem(arg0: $ItemStack_, arg1: boolean): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $IItemHandlerSimpleExtractor}.
     */
    export type $IItemHandlerSimpleExtractor_ = ((arg0: $ItemStack, arg1: boolean) => $ItemStack_);
    export class $ItemStackKey {
        stack(): $ItemStack;
        matches(arg0: $ItemStack_): boolean;
        static of(arg0: $ItemStack_): $ItemStackKey;
        getStack(): $ItemStack;
        static clearCache(): void;
        hashCodeNotEquals(arg0: $ItemStack_): boolean;
    }
    export class $InventoryPartitioner {
        isInfinite(arg0: number): boolean;
        isFilterItem(arg0: $Item_): boolean;
        onInit(): void;
        getNoItemIcon(arg0: number): $Pair<$ResourceLocation, $ResourceLocation>;
        serializeNBT(): $CompoundTag;
        getNoSortSlots(): $Set<number>;
        getFilterItems(): $Map<$Item, $Set<number>>;
        removeInventoryPart(arg0: number): void;
        getFirstSpace(arg0: number): ($SlotRange) | undefined;
        getPartBySlot(arg0: number): $IInventoryPartHandler;
        onSlotLimitChange(): void;
        addInventoryPart(arg0: number, arg1: number, arg2: $IInventoryPartHandler): void;
        static BASE_INDEXES_TAG: string;
        constructor(arg0: $CompoundTag_, arg1: $InventoryHandler, arg2: $Supplier_<$MemorySettingsCategory>);
        get noSortSlots(): $Set<number>;
        get filterItems(): $Map<$Item, $Set<number>>;
    }
    export class $ISlotTracker {
    }
    export interface $ISlotTracker {
        clear(): void;
        unregisterStackKeyListeners(): void;
        getItems(): $Set<$Item>;
        extractItemFromHandler(arg0: $InventoryHandler, arg1: $ISlotTracker$IItemHandlerExtractor, arg2: $ItemStack_, arg3: boolean): $ItemStack;
        refreshSlotIndexesFrom(arg0: $InventoryHandler): void;
        setShouldInsertIntoEmpty(arg0: $BooleanSupplier_): void;
        removeAndSetSlotIndexes(arg0: $InventoryHandler, arg1: number, arg2: $ItemStack_): void;
        insertItemIntoHandler(arg0: $InventoryHandler, arg1: $BiFunction_<$ItemStack, boolean, $ItemStack>, arg2: $ISlotTracker$IItemHandlerInserter, arg3: $UnaryOperator_<$ItemStack>, arg4: $UnaryOperator_<$ItemStack>, arg5: $ItemStack_, arg6: boolean): $ItemStack;
        insertItemIntoHandler(arg0: $InventoryHandler, arg1: $BiFunction_<$ItemStack, boolean, $ItemStack>, arg2: $ISlotTracker$IItemHandlerInserter, arg3: $UnaryOperator_<$ItemStack>, arg4: $UnaryOperator_<$ItemStack>, arg5: number, arg6: $ItemStack_, arg7: boolean): $ItemStack;
        registerListeners(arg0: $Consumer_<$ItemStackKey>, arg1: $Consumer_<$ItemStackKey>, arg2: $Runnable_, arg3: $Runnable_): void;
        getFullStacks(): $Set<$ItemStackKey>;
        getPartialStacks(): $Set<$ItemStackKey>;
        hasEmptySlots(): boolean;
        getFirstMatchingSlot(arg0: $ItemStackKey): number;
        hasExactStackMemorized(arg0: $ItemStackKey): boolean;
        hasItemMemorizedOrFiltered(arg0: $Item_): boolean;
        hasMatchingFullStack(arg0: $ItemStack_, arg1: $Predicate_<$ItemStack>): boolean;
        get items(): $Set<$Item>;
        set shouldInsertIntoEmpty(value: $BooleanSupplier_);
        get fullStacks(): $Set<$ItemStackKey>;
        get partialStacks(): $Set<$ItemStackKey>;
    }
    export class $IItemHandlerSimpleInserter {
    }
    export interface $IItemHandlerSimpleInserter extends $IItemHandlerModifiable {
        insertItem(arg0: $ItemStack_, arg1: boolean): $ItemStack;
    }
    export class $ITrackedContentsItemHandler {
    }
    export interface $ITrackedContentsItemHandler extends $IItemHandlerSimpleInserter, $IItemHandlerSimpleExtractor, $IInsertBlockOverride {
        unregisterStackKeyListeners(): void;
        registerTrackingListeners(arg0: $Consumer_<$ItemStackKey>, arg1: $Consumer_<$ItemStackKey>, arg2: $Runnable_, arg3: $Runnable_): void;
        hasEmptySlots(): boolean;
        getTrackedStacks(): $Set<$ItemStackKey>;
        get trackedStacks(): $Set<$ItemStackKey>;
    }
    export class $IInsertBlockOverride {
    }
    export interface $IInsertBlockOverride {
        isInsertBlocked(): boolean;
        get insertBlocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IInsertBlockOverride}.
     */
    export type $IInsertBlockOverride_ = (() => boolean);
    export class $InventoryHandler extends $ItemStackHandler implements $ITrackedContentsItemHandler, $IInsertBlockOverride {
        isInfinite(arg0: number): boolean;
        isFilterItem(arg0: $Item_): boolean;
        registerFilterItemsChangeListener(arg0: $Consumer_<$Set<$Item>>): void;
        unregisterStackKeyListeners(): void;
        onInit(): void;
        addListener(arg0: $IntConsumer_): void;
        getNoItemIcon(arg0: number): $Pair<$ResourceLocation, $ResourceLocation>;
        insertItem(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        clearListeners(): void;
        onSlotFilterChanged(arg0: number): void;
        extractItem(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Player | null): boolean;
        getStackLimit(arg0: number, arg1: $ItemStack_): number;
        getSlotStack(arg0: number): $ItemStack;
        onFilterItemsChanged(): void;
        triggerOnChangeListeners(arg0: number): void;
        setShouldInsertIntoEmpty(arg0: $BooleanSupplier_): void;
        insertItemOnlyToSlot(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        validateSlotIndex(arg0: number): void;
        setPersistent(arg0: boolean): void;
        extractItemInternal(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        registerTrackingListeners(arg0: $Consumer_<$ItemStackKey>, arg1: $Consumer_<$ItemStackKey>, arg2: $Runnable_, arg3: $Runnable_): void;
        getSlotTracker(): $ISlotTracker;
        getFilterItem(arg0: number): $Item;
        isSlotAccessible(arg0: number): boolean;
        getNoSortSlots(): $Set<number>;
        getBaseStackLimit(arg0: $ItemStack_): number;
        unregisterFilterItemsChangeListener(): void;
        hasEmptySlots(): boolean;
        getStackSizeMultiplier(): number;
        changeSlots(arg0: number): void;
        getFilterItems(): $Set<$Item>;
        saveInventory(): void;
        setSlotStack(arg0: number, arg1: $ItemStack_): void;
        setBaseSlotLimit(arg0: number): void;
        getBaseSlotLimit(): number;
        initFilterItems(): void;
        copyStacksTo(arg0: $InventoryHandler): void;
        getInventoryPartitioner(): $InventoryPartitioner;
        isInsertBlocked(): boolean;
        getTrackedStacks(): $Set<$ItemStackKey>;
        onContentsChanged(arg0: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static INVENTORY_TAG: string;
        set shouldInsertIntoEmpty(value: $BooleanSupplier_);
        set persistent(value: boolean);
        get slotTracker(): $ISlotTracker;
        get noSortSlots(): $Set<number>;
        get stackSizeMultiplier(): number;
        get filterItems(): $Set<$Item>;
        get inventoryPartitioner(): $InventoryPartitioner;
        get insertBlocked(): boolean;
        get trackedStacks(): $Set<$ItemStackKey>;
    }
}
