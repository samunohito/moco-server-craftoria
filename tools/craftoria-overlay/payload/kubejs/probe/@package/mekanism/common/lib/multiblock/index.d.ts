import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ITileWrapper } from "@package/mekanism/common/tile/interfaces";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $List, $UUID_, $Set_, $Collection, $Map, $Set } from "@package/java/util";
import { $TileEntityStructuralMultiblock } from "@package/mekanism/common/tile/prefab";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $IChemicalTank, $ChemicalStack, $IMekanismChemicalHandler } from "@package/mekanism/api/chemical";
import { $Supplier_, $BiPredicate } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ITileHeatHandler } from "@package/mekanism/common/capabilities/heat";
import { $Enum } from "@package/java/lang";
import { $Int2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $ILangEntry_ } from "@package/mekanism/api/text";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $VoxelCuboid, $BlockPosBuilder, $VoxelPlane, $IShape } from "@package/mekanism/common/lib/math/voxel";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Action_, $AutomationType } from "@package/mekanism/api";
import { $IMekanismInventory, $IInventorySlot } from "@package/mekanism/api/inventory";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IHeatCapacitor, $HeatAPI$HeatTransfer, $IHeatHandler } from "@package/mekanism/api/heat";
import { $IEnergyContainer, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";

declare module "@package/mekanism/common/lib/multiblock" {
    export class $IMultiblockBase {
    }
    export interface $IMultiblockBase extends $ITileWrapper {
        getStructure(manager: $MultiblockManager<never>): $Structure;
        getDefaultData(): $MultiblockData;
        onActivate(player: $Player, hand: $InteractionHand_, stack: $ItemStack_): $ItemInteractionResult;
        setMultiblockData(manager: $MultiblockManager<never>, multiblockData: $MultiblockData): void;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        getMultiblockData(manager: $MultiblockManager<never>): $MultiblockData;
        hasStructure(structure: $Structure): boolean;
        resetStructure(manager: $MultiblockManager<never>): $Structure;
        resetForFormed(): void;
        get defaultData(): $MultiblockData;
    }
    export class $IMultiblock<T extends $MultiblockData> {
    }
    export interface $IMultiblock<T extends $MultiblockData> extends $IMultiblockBase {
        getCacheID(): $UUID;
        resetCache(): void;
        getStructure(): $Structure;
        getStructure(manager: $MultiblockManager<never>): $Structure;
        getManager(): $MultiblockManager<T>;
        getDefaultData(): T;
        getMultiblock(): T;
        setStructure(structure: $Structure): void;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        isMaster(): boolean;
        canBeMaster(): boolean;
        hasStructure(structure: $Structure): boolean;
        createMultiblock(): T;
        createFormationProtocol(): $FormationProtocol<T>;
        get cacheID(): $UUID;
        get manager(): $MultiblockManager<T>;
        get defaultData(): T;
        get multiblock(): T;
        get master(): boolean;
    }
    export class $MultiblockData implements $IMekanismInventory, $IMekanismFluidHandler, $IMekanismStrictEnergyHandler, $ITileHeatHandler, $IMekanismChemicalHandler {
        remove(world: $Level_, oldStructure: $Structure): void;
        length(): number;
        getBounds(): $VoxelCuboid;
        width(): number;
        height(): number;
        isDirty(): boolean;
        resetDirty(): void;
        getMinPos(): $BlockPos;
        isFormed(): boolean;
        getLevel(): $Level;
        tick(world: $Level_): boolean;
        setVolume(volume: number): void;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        notExternalFormedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        forceUpdateComparatorLevel(): void;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        markDirtyComparator(world: $Level_): void;
        isPositionInsideBounds<T extends $MultiblockData>(structure: $Structure, pos: $BlockPos_): boolean;
        isPositionOutsideBounds(pos: $BlockPos_): boolean;
        notifyAllUpdateComparator(world: $Level_): void;
        allowsStructuralGuiAccess(multiblock: $TileEntityStructuralMultiblock): boolean;
        getCurrentRedstoneLevel(): number;
        getMaxPos(): $BlockPos;
        getVolume(): number;
        markDirty(): void;
        writeUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        onCreated(world: $Level_): void;
        setShape(shape: $IShape): boolean;
        readUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        meltdownHappened(world: $Level_): void;
        isKnownLocation(pos: $BlockPos_): boolean;
        getValveData(): $Collection<$IValveHandler$ValveData>;
        setFormedForce(formed: boolean): void;
        getOutsideSide(pos: $BlockPos_): $Direction;
        formedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        getHeatCapacitors(side: $Direction_): $List<$IHeatCapacitor>;
        getInventorySlots(side: $Direction_): $List<$IInventorySlot>;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        onContentsChanged(): void;
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
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergy(arg0: number, arg1: $Direction_): number;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        canHandleEnergy(): boolean;
        simulate(): $HeatAPI$HeatTransfer;
        simulateAdjacent(): number;
        getAdjacent(side: $Direction_): $IHeatHandler;
        getAmbientTemperature(side: $Direction_): number;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: $Direction_): number;
        simulateEnvironment(): number;
        updateHeatCapacitors(side: $Direction_): void;
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getCountChemicalTanks(arg0: $Direction_): number;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
        canHandleChemicals(): boolean;
        getStackInSlot(arg0: number): $ItemStack;
        getInventorySideFor(): $Direction;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getSlots(): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getSlotLimit(arg0: number): number;
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidSideFor(): $Direction;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergyContainerCount(): number;
        setEnergy(arg0: number, arg1: number): void;
        getEnergy(arg0: number): number;
        getMaxEnergy(arg0: number): number;
        getNeededEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergySideFor(): $Direction;
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
        getTotalTemperature(arg0: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getTotalHeatCapacity(arg0: $Direction_): number;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getTemperature(arg0: number, arg1: $Direction_): number;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        canHandleHeat(): boolean;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getSideFor(): $Direction;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        getChemicalInTank(arg0: number): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        getChemicalTankCapacity(arg0: number): number;
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
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        handleHeat(arg0: number, arg1: number): void;
        handleHeat(arg0: number): void;
        getTotalInverseConduction(): number;
        getHeatCapacitorCount(): number;
        getTotalTemperature(): number;
        getInverseConduction(arg0: number): number;
        getTotalHeatCapacity(): number;
        getTemperature(arg0: number): number;
        getHeatSideFor(): $Direction;
        getHeatCapacity(arg0: number): number;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
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
        recheckStructure: boolean;
        hasMaster: boolean;
        valves: $Set<$IValveHandler$ValveData>;
        renderLocation: $BlockPos;
        inventoryID: $UUID;
        locations: $Set<$BlockPos>;
        internalLocations: $Set<$BlockPos>;
        constructor(tile: $BlockEntity);
        get bounds(): $VoxelCuboid;
        get dirty(): boolean;
        get minPos(): $BlockPos;
        get formed(): boolean;
        get level(): $Level;
        get currentRedstoneLevel(): number;
        get maxPos(): $BlockPos;
        set shape(value: $IShape);
        get valveData(): $Collection<$IValveHandler$ValveData>;
        set formedForce(value: boolean);
        get inventorySideFor(): $Direction;
        get fluidSideFor(): $Direction;
        get energySideFor(): $Direction;
        get sideFor(): $Direction;
        get totalInverseConduction(): number;
        get heatSideFor(): $Direction;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $Structure {
        size(): number;
        add(s: $Structure): void;
        contains(pos: $BlockPos_): boolean;
        getTile(pos: $BlockPos_): $IMultiblockBase;
        isValid(): boolean;
        invalidate(world: $Level_): void;
        getController(): $IMultiblock<never>;
        markForUpdate(world: $Level_, invalidate: boolean): void;
        tick<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        getManager(): $MultiblockManager<never>;
        setMultiblockData(multiblockData: $MultiblockData): void;
        runUpdate<TILE extends $BlockEntity>(tile: TILE): $FormationProtocol$FormationResult;
        getMultiblockData(): $MultiblockData;
        doImmediateUpdate<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        getMajorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        getMinorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        removeMultiblock(world: $Level_): void;
        static INVALID: $Structure;
        constructor(node: $IMultiblockBase);
        get valid(): boolean;
        get controller(): $IMultiblock<never>;
        get manager(): $MultiblockManager<never>;
    }
    export class $FormationProtocol$FormationResult {
        static fail(text: $ILangEntry_, pos: $BlockPos_): $FormationProtocol$FormationResult;
        static fail(text: $Component_): $FormationProtocol$FormationResult;
        static fail(text: $Component_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_): $FormationProtocol$FormationResult;
        isNoIgnore(): boolean;
        isFormed(): boolean;
        getResultText(): $Component;
        static SUCCESS: $FormationProtocol$FormationResult;
        static FAIL: $FormationProtocol$FormationResult;
        get noIgnore(): boolean;
        get formed(): boolean;
        get resultText(): $Component;
    }
    export class $MultiblockManager<T extends $MultiblockData> {
        getName(): string;
        static reset(): void;
        getCache(multiblockID: $UUID_): $MultiblockCache<T>;
        trackCache(id: $UUID_, cache: $MultiblockCache<T>): void;
        markTicked(multiblock: T): void;
        getUniqueInventoryID(): $UUID;
        handleDirtyMultiblock(multiblock: T): void;
        createCache(): $MultiblockCache<T>;
        createValidator(): $IStructureValidator<T>;
        isCompatible(tile: $BlockEntity): boolean;
        static createOrLoadAll(): void;
        getNameLower(): string;
        replaceCaches(staleIds: $Set_<$UUID_>, id: $UUID_, cache: $MultiblockCache<T>): void;
        constructor(name: string, cacheSupplier: $Supplier_<$MultiblockCache<T>>, validatorSupplier: $Supplier_<$IStructureValidator<T>>);
        get name(): string;
        get uniqueInventoryID(): $UUID;
        get nameLower(): string;
    }
    export class $IStructuralMultiblock {
    }
    export interface $IStructuralMultiblock extends $IMultiblockBase {
        canInterface(manager: $MultiblockManager<never>): boolean;
        multiblockFormed(multiblock: $MultiblockData): void;
        multiblockUnformed(structure: $Structure): void;
        hasFormedMultiblock(): boolean;
        structuralGuiAccessAllowed(): boolean;
        getStructureMap(): $Map<$MultiblockManager<never>, $Structure>;
        get structureMap(): $Map<$MultiblockManager<never>, $Structure>;
    }
    export class $Structure$Axis extends $Enum<$Structure$Axis> {
        static get(side: $Direction_): $Structure$Axis;
        static values(): $Structure$Axis[];
        static valueOf(name: string): $Structure$Axis;
        set(pos: $BlockPosBuilder, val: number): void;
        getCoord(pos: $BlockPos_): number;
        horizontal(): $Structure$Axis;
        vertical(): $Structure$Axis;
        static X: $Structure$Axis;
        static Y: $Structure$Axis;
        static Z: $Structure$Axis;
    }
    /**
     * Values that may be interpreted as {@link $Structure$Axis}.
     */
    export type $Structure$Axis_ = "x" | "y" | "z";
    export class $IValveHandler$ValveData {
        onTransfer(): void;
        side: $Direction;
        activeTicks: number;
        location: $BlockPos;
        prevActive: boolean;
        constructor(location: $BlockPos_, side: $Direction_);
    }
}
