import { $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate_, $Function_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemScroll$SortPref, $ItemScroll$SortPref_ } from "@package/com/hollingsworth/arsnouveau/common/items";
import { $IWrappedCaster } from "@package/com/hollingsworth/arsnouveau/api/spell/wrapped_caster";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Collection } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/hollingsworth/arsnouveau/api/item/inv" {
    export class $InventoryManager$FilterablePreference extends $Record {
        handler(): $FilterableItemHandler;
        pref(): $ItemScroll$SortPref;
        constructor(handler: $FilterableItemHandler, pref: $ItemScroll$SortPref_);
    }
    /**
     * Values that may be interpreted as {@link $InventoryManager$FilterablePreference}.
     */
    export type $InventoryManager$FilterablePreference_ = { pref?: $ItemScroll$SortPref_, handler?: $FilterableItemHandler,  } | [pref?: $ItemScroll$SortPref_, handler?: $FilterableItemHandler, ];
    export class $InventoryManager {
        getInventory(): $List<$FilterableItemHandler>;
        extractItem(arg0: $FilterableItemHandler, arg1: $Predicate_<$ItemStack>, arg2: number): $ExtractedStack;
        extractItem(arg0: $Predicate_<$ItemStack>, arg1: number): $ExtractedStack;
        insertStackWithReference(arg0: $ItemStack_): $MultiInsertReference;
        static fromTile(arg0: $BlockEntity): $InventoryManager;
        findItem(arg0: $FilterableItemHandler, arg1: $Predicate_<$ItemStack>, arg2: $InteractType_): $SlotReference;
        findItem(arg0: $Predicate_<$ItemStack>, arg1: $InteractType_): $SlotReference;
        insertStack(arg0: $ItemStack_): $ItemStack;
        insertOrDrop(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockPos_): void;
        extractSlotMax(arg0: number): $InventoryManager;
        extractRandomItem(arg0: $FilterableItemHandler, arg1: $Predicate_<$ItemStack>, arg2: number): $ExtractedStack;
        extractRandomItem(arg0: $Predicate_<$ItemStack>, arg1: number): $ExtractedStack;
        preferredForStack(arg0: $ItemStack_, arg1: boolean): $Collection<$InventoryManager$FilterablePreference>;
        insertSlotMax(arg0: number): $InventoryManager;
        highestPrefInventory(arg0: $List_<$FilterableItemHandler>, arg1: $Predicate_<$ItemStack>, arg2: $InteractType_): $FilterableItemHandler;
        extractItemFromAll(arg0: $ItemStack_, arg1: number, arg2: boolean): $MultiExtractedReference;
        extractAllFromHandler(arg0: $FilterableItemHandler, arg1: $ItemStack_, arg2: number): $MultiExtractedReference;
        findItemR(arg0: $FilterableItemHandler, arg1: $Predicate_<$ItemStack>, arg2: $InteractType_): $SlotReference;
        filterables: $List<$FilterableItemHandler>;
        constructor(arg0: $IWrappedCaster);
        constructor(arg0: $List_<$FilterableItemHandler>);
        constructor();
        get inventory(): $List<$FilterableItemHandler>;
    }
    export class $MultiSlotReference<SReference extends $SlotReference> {
        isEmpty(): boolean;
        getSlots(): $List<SReference>;
        constructor(...arg0: SReference[]);
        constructor(arg0: $List_<SReference>);
        constructor();
        get empty(): boolean;
        get slots(): $List<SReference>;
    }
    export class $ExtractedStack extends $SlotReference {
        static from(arg0: $IItemHandler, arg1: number, arg2: number): $ExtractedStack;
        static from(arg0: $SlotReference, arg1: number): $ExtractedStack;
        static empty(): $ExtractedStack;
        getStack(): $ItemStack;
        returnStack(): $ItemStack;
        returnOrDrop(arg0: $Level_, arg1: $BlockPos_): void;
        replaceAndReturnOrDrop(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockPos_): void;
        stack: $ItemStack;
    }
    export class $InteractResult extends $Record {
        valid(): boolean;
        sortPref(): $ItemScroll$SortPref;
        constructor(sortPref: $ItemScroll$SortPref_, valid: boolean);
    }
    /**
     * Values that may be interpreted as {@link $InteractResult}.
     */
    export type $InteractResult_ = { valid?: boolean, sortPref?: $ItemScroll$SortPref_,  } | [valid?: boolean, sortPref?: $ItemScroll$SortPref_, ];
    export class $FilterableItemHandler {
        getHandler(): $IItemHandler;
        canInsert(arg0: $ItemStack_): $InteractResult;
        insertItemStacked(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        canExtract(arg0: $ItemStack_): $InteractResult;
        getHighestPreference(arg0: $ItemStack_): $ItemScroll$SortPref;
        canInteractFor(arg0: $ItemStack_, arg1: $InteractType_): $InteractResult;
        withSlotCache(arg0: $SlotCache): $FilterableItemHandler;
        filters: $FilterSet;
        constructor(arg0: $IItemHandler, arg1: $FilterSet);
        constructor(arg0: $IItemHandler, arg1: $List_<$Function_<$ItemStack, $ItemScroll$SortPref>>);
        constructor(arg0: $IItemHandler);
        get handler(): $IItemHandler;
    }
    export class $FilterSet {
        getHighestPreference(arg0: $ItemStack_): $ItemScroll$SortPref;
        static forPosition(arg0: $Level_, arg1: $BlockPos_): $FilterSet;
        constructor();
    }
    export class $MultiInsertReference extends $MultiSlotReference<$SlotReference> {
        getRemainder(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $List_<$SlotReference>);
        get remainder(): $ItemStack;
    }
    export class $MultiExtractedReference extends $MultiSlotReference<$ExtractedStack> {
        getExtracted(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $List_<$ExtractedStack>);
        get extracted(): $ItemStack;
    }
    export class $SlotCache {
        getIfPresent(arg0: $Item_): $Collection<number>;
        replaceSlotWithItem(arg0: $Item_, arg1: $Item_, arg2: number): void;
        getOrCreateSlots(arg0: $Item_): $Collection<number>;
        constructor();
        constructor(arg0: boolean);
    }
    export class $InteractType extends $Enum<$InteractType> {
        static values(): $InteractType[];
        static valueOf(arg0: string): $InteractType;
        static INSERT: $InteractType;
        static EXTRACT: $InteractType;
    }
    /**
     * Values that may be interpreted as {@link $InteractType}.
     */
    export type $InteractType_ = "extract" | "insert";
    export class $SlotReference {
        getSlot(): number;
        isEmpty(): boolean;
        static empty(): $SlotReference;
        getHandler(): $IItemHandler;
        constructor(arg0: $IItemHandler, arg1: number);
        get slot(): number;
        get handler(): $IItemHandler;
    }
}
