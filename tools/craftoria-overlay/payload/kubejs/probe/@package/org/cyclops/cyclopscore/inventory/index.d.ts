import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $INBTSerializable } from "@package/org/cyclops/cyclopscore/persist/nbt";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Predicate_ } from "@package/java/util/function";
import { $WorldlyContainer, $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $IDirtyMarkListener_ } from "@package/org/cyclops/cyclopscore/persist";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as container from "@package/org/cyclops/cyclopscore/inventory/container";

declare module "@package/org/cyclops/cyclopscore/inventory" {
    export class $INBTInventory {
    }
    export interface $INBTInventory extends $Container, $INBTSerializable {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        get empty(): boolean;
    }
    export class $IValueNotifier {
    }
    export interface $IValueNotifier {
        getValue(arg0: number): $CompoundTag;
        setValue(arg0: number, arg1: $CompoundTag_): void;
        getValueIds(): $Set<number>;
        getHolderLookupProvider(): $HolderLookup$Provider;
        get valueIds(): $Set<number>;
        get holderLookupProvider(): $HolderLookup$Provider;
    }
    export class $IValueNotifiable {
    }
    export interface $IValueNotifiable {
        onUpdate(arg0: number, arg1: $CompoundTag_): void;
        getValueNotifiableType(): $MenuType<never>;
        get valueNotifiableType(): $MenuType<never>;
    }
    /**
     * @deprecated
     */
    export class $SimpleInventory implements $INBTInventory, $WorldlyContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getState(): number;
        getItem(arg0: number): $ItemStack;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        readFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: string): void;
        writeToNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: string): void;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_ | null): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItemStacks(): $ItemStack[];
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        getMaxStackSize(): number;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getItemHandlerSided(arg0: $Direction_): $IItemHandler;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        clearContent(): void;
        getItemHandler(): $IItemHandler;
        removeDirtyMarkListener(arg0: $IDirtyMarkListener_): void;
        addDirtyMarkListener(arg0: $IDirtyMarkListener_): void;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        self(): $Container;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        getStackInSlot(slot: number): $ItemStack;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        setChanged(): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        static CODEC: $Codec<$SimpleInventory>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SimpleInventory>;
        constructor(arg0: number, arg1: number, arg2: $List_<$ItemStack_>);
        constructor(arg0: number, arg1: number);
        constructor();
        get state(): number;
        get itemStacks(): $ItemStack[];
        get containerSize(): number;
        get itemHandler(): $IItemHandler;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
}
