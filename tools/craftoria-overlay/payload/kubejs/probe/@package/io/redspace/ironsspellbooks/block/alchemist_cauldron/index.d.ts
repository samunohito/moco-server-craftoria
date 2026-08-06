import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate_ } from "@package/java/util/function";
import { $WorldlyContainer, $ItemInteractionResult, $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Object2ObjectOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $InkItem } from "@package/io/redspace/ironsspellbooks/item";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/io/redspace/ironsspellbooks/block/alchemist_cauldron" {
    /**
     * @deprecated
     */
    export class $AlchemistCauldronInteraction {
    }
    export interface $AlchemistCauldronInteraction {
        interact(arg0: $AlchemistCauldronTile, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $AlchemistCauldronInteraction}.
     */
    export type $AlchemistCauldronInteraction_ = ((arg0: $AlchemistCauldronTile, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $ItemStack) => $ItemStack_);
    export class $AlchemistCauldronTile extends $BlockEntity implements $WorldlyContainer {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        refreshCapabilities(): void;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        isBoiling(arg0: $BlockState_): boolean;
        drops(): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $AlchemistCauldronTile): void;
        tryExecuteRecipeInteractions(arg0: $Level_, arg1: $ItemStack_): $ItemStack;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        clearContent(): void;
        isValidInput(arg0: $ItemStack_): boolean;
        isBrewable(arg0: $ItemStack_): boolean;
        handleUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_): $ItemInteractionResult;
        getFluidAmount(): number;
        static getInkFromScroll(arg0: $ItemStack_): $InkItem;
        tryMeltInput(arg0: $ItemStack_): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        stopOpen(arg0: $Player): void;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        getMaxStackSize(): number;
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
        static INPUT_SIZE: number;
        inputItems: $NonNullList<$ItemStack>;
        fluidInventory: $AlchemistCauldronTile$AlchemistCauldronFluidHandler;
        static ATTACHMENTS_NBT_KEY: string;
        fluidCapability: $IFluidHandler;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get containerSize(): number;
        get fluidAmount(): number;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $AlchemistCauldronTile$AlchemistCauldronFluidHandler implements $IFluidHandler {
        load(arg0: string, arg1: $CompoundTag_, arg2: $HolderLookup$Provider): void;
        clear(): void;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        contains(arg0: $Holder_<$Fluid>, arg1: number): boolean;
        contains(arg0: $FluidStack_, arg1: number): boolean;
        contains(arg0: $TagKey_<$Fluid>, arg1: number): boolean;
        save(arg0: string, arg1: $CompoundTag_, arg2: $HolderLookup$Provider): void;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        canFit(arg0: number): boolean;
        fluids(): $List<$FluidStack>;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fluidAmount(): number;
        onContentsChanged(): void;
        isTankCompatible(arg0: $IFluidTank, arg1: $FluidStack_): boolean;
        constructor(arg0: $AlchemistCauldronTile);
        get tanks(): number;
    }
    /**
     * @deprecated
     */
    export class $AlchemistCauldronBuildInteractionsEvent extends $Event {
        addInteraction(arg0: $Item_, arg1: $AlchemistCauldronInteraction_): void;
        addSimpleBottleEmptyInteraction(arg0: $Item_): void;
        constructor(arg0: $Object2ObjectOpenHashMap<$Item_, $AlchemistCauldronInteraction_>);
    }
}
