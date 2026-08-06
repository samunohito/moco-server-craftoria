import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IStorageWrapper } from "@package/net/p3pp3rf1y/sophisticatedcore/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set, $Set_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $ItemStackKey, $IItemHandlerSimpleInserter, $IInsertBlockOverride } from "@package/net/p3pp3rf1y/sophisticatedcore/inventory";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/p3pp3rf1y/sophisticatedcore/controller" {
    export class $IControllableStorage {
    }
    export interface $IControllableStorage extends $IControllerBoundable {
        onInventoryInputOutputHandlerRefresh(): void;
        tryToAddToController(): void;
        removeFromController(): void;
        getStorageWrapper(): $IStorageWrapper;
        registerWithControllerOnLoad(): void;
        registerInventoryStackListeners(): void;
        updateEmptySlots(): void;
        addToController(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_): void;
        hasStorageData(): boolean;
        canConnectStorages(): boolean;
        registerController(arg0: $ControllerBlockEntityBase): void;
        changeSlots(arg0: number): void;
        unregisterController(): void;
        get storageWrapper(): $IStorageWrapper;
    }
    export class $ControllerBlockEntityBase extends $BlockEntity implements $IItemHandlerSimpleInserter, $IInsertBlockOverride {
        getStackInSlot(arg0: number): $ItemStack;
        removeStorageMemorizedStack(arg0: $BlockPos_, arg1: number): void;
        removeStorageWithEmptySlots(arg0: $BlockPos_): void;
        insertItem(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getSlots(arg0: number): number;
        getSlots(): number;
        addStorage(arg0: $BlockPos_): void;
        extractItem(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getSlotLimit(arg0: number): number;
        addStorageWithEmptySlots(arg0: $BlockPos_): void;
        setStorageFilterItems(arg0: $BlockPos_, arg1: $Set_<$Item_>): void;
        addStorageMemorizedStack(arg0: $BlockPos_, arg1: number): void;
        removeStorageMemorizedItem(arg0: $BlockPos_, arg1: $Item_): void;
        addStorageMemorizedItem(arg0: $BlockPos_, arg1: $Item_): void;
        addStorageStacksAndRegisterListeners(arg0: $BlockPos_): void;
        isStorageConnected(arg0: $BlockPos_): boolean;
        updateEmptySlots(arg0: $BlockPos_, arg1: boolean): void;
        removeStorage(arg0: $BlockPos_): void;
        removeStorageStack(arg0: $BlockPos_, arg1: $ItemStackKey): void;
        addStorageStack(arg0: $BlockPos_, arg1: $ItemStackKey): void;
        clearCachedHandler(arg0: $BlockPos_): void;
        getStoragePositions(): $List<$BlockPos>;
        searchAndAddBoundables(): void;
        removeNonConnectingBlock(arg0: $BlockPos_): void;
        removeStorageStacks(arg0: $BlockPos_): void;
        changeSlots(arg0: $BlockPos_, arg1: number, arg2: boolean): void;
        getLinkedBlocks(): $Set<$BlockPos>;
        detachFromStoragesAndUnlinkBlocks(): void;
        isInsertBlocked(): boolean;
        hasMatchingStack(arg0: $ItemStackKey): boolean;
        hasMatchingItem(arg0: $Item_): boolean;
        removeBoundable(arg0: $BlockPos_): void;
        addLinkedBlock(arg0: $BlockPos_): boolean;
        removeLinkedBlock(arg0: $BlockPos_): void;
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
        static ATTACHMENTS_NBT_KEY: string;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get storagePositions(): $List<$BlockPos>;
        get linkedBlocks(): $Set<$BlockPos>;
        get insertBlocked(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $IControllerBoundable {
        static CONTROLLER_POS_TAG: string;
    }
    export interface $IControllerBoundable {
        getControllerPos(): ($BlockPos) | undefined;
        addToAdjacentController(): void;
        setControllerPos(arg0: $BlockPos_): void;
        runOnController(arg0: $Level_, arg1: $Consumer_<$ControllerBlockEntityBase>): void;
        addToController(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_): void;
        canBeConnected(): boolean;
        saveControllerPos(arg0: $CompoundTag_): void;
        getStorageBlockPos(): $BlockPos;
        loadControllerPos(arg0: $CompoundTag_): void;
        canConnectStorages(): boolean;
        registerController(arg0: $ControllerBlockEntityBase): void;
        unregisterController(): void;
        getStorageBlockLevel(): $Level;
        removeControllerPos(): void;
        get storageBlockPos(): $BlockPos;
        get storageBlockLevel(): $Level;
    }
    export class $ILinkable {
    }
    export interface $ILinkable extends $IControllerBoundable {
        getControllerPos(): ($BlockPos) | undefined;
        setControllerPos(arg0: $BlockPos_): void;
        isLinked(): boolean;
        getConnectablePositions(): $Set<$BlockPos>;
        unlinkFromController(): void;
        linkToController(arg0: $BlockPos_): void;
        connectLinkedSelf(): boolean;
        canBeLinked(): boolean;
        setNotLinked(): void;
        get linked(): boolean;
        get connectablePositions(): $Set<$BlockPos>;
    }
}
