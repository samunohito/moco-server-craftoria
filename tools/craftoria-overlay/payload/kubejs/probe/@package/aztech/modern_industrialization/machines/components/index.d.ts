import { $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $List_ } from "@package/java/util";
import { $MachineRecipe, $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $Simulation_ } from "@package/aztech/modern_industrialization/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ActiveRecipeHolder } from "@package/net/swedz/tesseract/neoforge/compat/mi/api";
import { $MachineBlockEntity, $MachineComponent, $MachineComponent$ServerOnly, $MachineComponent$ClientOnly } from "@package/aztech/modern_industrialization/machines";
import { $Enum, $Record } from "@package/java/lang";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $CrafterComponentAccessor } from "@package/net/swedz/tesseract/neoforge/compat/mi/mixin/accessor";
import { $Component } from "@package/net/minecraft/network/chat";
import { $MIEnergyStorage, $CableTier } from "@package/aztech/modern_industrialization/api/energy";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $MachineModelClientData } from "@package/aztech/modern_industrialization/machines/models";
import { $FluidDefinition } from "@package/aztech/modern_industrialization/definition";
import { $SlotPositions, $ConfigurableFluidStack, $ConfigurableItemStack, $MIInventory } from "@package/aztech/modern_industrialization/inventory";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $InventoryAccess, $EnergyAccess, $CrafterAccess } from "@package/aztech/modern_industrialization/api/machine/component";
import { $MachineProcessCondition$Context } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerStatistics } from "@package/aztech/modern_industrialization/stats";

declare module "@package/aztech/modern_industrialization/machines/components" {
    export class $OrientationComponent implements $MachineComponent {
        writeModelData(arg0: $MachineModelClientData): void;
        onPlaced(arg0: $LivingEntity, arg1: $ItemStack_): void;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        useWrench(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_): boolean;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        facingDirection: $Direction;
        extractFluids: boolean;
        outputDirection: $Direction;
        params: $OrientationComponent$Params;
        extractItems: boolean;
        constructor(arg0: $OrientationComponent$Params, arg1: $BlockEntity);
    }
    export class $OrientationComponent$Params {
        static noFacing(arg0: boolean, arg1: boolean): $OrientationComponent$Params;
        static noFacingNoOutput(arg0: boolean, arg1: boolean): $OrientationComponent$Params;
        static noFacingNoOutput(): $OrientationComponent$Params;
        hasFacing: boolean;
        hasExtractFluids: boolean;
        hasOutput: boolean;
        canBeVertical: boolean;
        hasExtractItems: boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean);
    }
    export class $FluidItemConsumerComponent$NumberOfFuel extends $Enum<$FluidItemConsumerComponent$NumberOfFuel> {
        static values(): $FluidItemConsumerComponent$NumberOfFuel[];
        static valueOf(arg0: string): $FluidItemConsumerComponent$NumberOfFuel;
        static SINGLE: $FluidItemConsumerComponent$NumberOfFuel;
        static NONE: $FluidItemConsumerComponent$NumberOfFuel;
        static MANY: $FluidItemConsumerComponent$NumberOfFuel;
    }
    /**
     * Values that may be interpreted as {@link $FluidItemConsumerComponent$NumberOfFuel}.
     */
    export type $FluidItemConsumerComponent$NumberOfFuel_ = "none" | "single" | "many";
    export class $FluidItemConsumerComponent$EUProductionMap$InformationEntry<T> extends $Record {
        variant(): T;
        eu(): number;
        constructor(eu: number, variant: T);
    }
    /**
     * Values that may be interpreted as {@link $FluidItemConsumerComponent$EUProductionMap$InformationEntry}.
     */
    export type $FluidItemConsumerComponent$EUProductionMap$InformationEntry_<T> = { eu?: number, variant?: any,  } | [eu?: number, variant?: any, ];
    export class $FluidItemConsumerComponent$EUProductionMap<T> {
        static empty<T>(): $FluidItemConsumerComponent$EUProductionMap<T>;
    }
    export interface $FluidItemConsumerComponent$EUProductionMap<T> {
        accept(arg0: T): boolean;
        getNumberOfFuel(): $FluidItemConsumerComponent$NumberOfFuel;
        getEuProduction(arg0: T): number;
        getAllAccepted(): $List<T>;
        isStandardFuels(): boolean;
        getAllAcceptedWithEU(): $List<$FluidItemConsumerComponent$EUProductionMap$InformationEntry<T>>;
        get numberOfFuel(): $FluidItemConsumerComponent$NumberOfFuel;
        get allAccepted(): $List<T>;
        get standardFuels(): boolean;
        get allAcceptedWithEU(): $List<$FluidItemConsumerComponent$EUProductionMap$InformationEntry<T>>;
    }
    export class $MachineInventoryComponent implements $CrafterComponent$Inventory, $MachineComponent$ServerOnly {
        hash(): number;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getFluidInputs(): $List<$ConfigurableFluidStack>;
        getItemInputs(): $List<$ConfigurableItemStack>;
        getItemOutputs(): $List<$ConfigurableItemStack>;
        getFluidOutputs(): $List<$ConfigurableFluidStack>;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        itemInputCount: number;
        fluidInputCount: number;
        itemOutputCount: number;
        fluidOutputCount: number;
        inventory: $MIInventory;
        constructor(arg0: $List_<$ConfigurableItemStack>, arg1: $List_<$ConfigurableItemStack>, arg2: $List_<$ConfigurableFluidStack>, arg3: $List_<$ConfigurableFluidStack>, arg4: $SlotPositions, arg5: $SlotPositions);
        get fluidInputs(): $List<$ConfigurableFluidStack>;
        get itemInputs(): $List<$ConfigurableItemStack>;
        get itemOutputs(): $List<$ConfigurableItemStack>;
        get fluidOutputs(): $List<$ConfigurableFluidStack>;
    }
    export class $FluidItemConsumerComponent implements $MachineComponent$ServerOnly {
        static ofFluid(arg0: number, arg1: $FluidItemConsumerComponent$EUProductionMap<$Fluid_>): $FluidItemConsumerComponent;
        static itemFuels(): $FluidItemConsumerComponent$EUProductionMap<$Item>;
        static fluidFuels(): $FluidItemConsumerComponent$EUProductionMap<$Fluid>;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getTooltips(): $List<$Component>;
        static ofFluidFuels(arg0: number): $FluidItemConsumerComponent;
        doAllowMoreThanOne(): boolean;
        getEuProduction(arg0: $List_<$ConfigurableFluidStack>, arg1: $List_<$ConfigurableItemStack>, arg2: number): number;
        static ofSingleFluid(arg0: number, arg1: $FluidDefinition, arg2: number): $FluidItemConsumerComponent;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        fluidEUProductionMap: $FluidItemConsumerComponent$EUProductionMap<$Fluid>;
        itemEUProductionMap: $FluidItemConsumerComponent$EUProductionMap<$Item>;
        maxEuProduction: number;
        constructor(arg0: number, arg1: $FluidItemConsumerComponent$EUProductionMap<$Item_>, arg2: $FluidItemConsumerComponent$EUProductionMap<$Fluid_>);
        get tooltips(): $List<$Component>;
    }
    export class $CrafterComponent$Inventory {
    }
    export interface $CrafterComponent$Inventory extends $InventoryAccess {
        hash(): number;
        getFluidInputs(): $List<$ConfigurableFluidStack>;
        getItemInputs(): $List<$ConfigurableItemStack>;
        getItemOutputs(): $List<$ConfigurableItemStack>;
        getFluidOutputs(): $List<$ConfigurableFluidStack>;
        get fluidInputs(): $List<$ConfigurableFluidStack>;
        get itemInputs(): $List<$ConfigurableItemStack>;
        get itemOutputs(): $List<$ConfigurableItemStack>;
        get fluidOutputs(): $List<$ConfigurableFluidStack>;
    }
    export class $CrafterComponent implements $MachineComponent$ServerOnly, $CrafterAccess, $ActiveRecipeHolder<any>, $CrafterComponentAccessor {
        getProgress(): number;
        static getRecipes(arg0: $ServerLevel, arg1: $MachineRecipeType, arg2: $List_<$ConfigurableItemStack>): $List<$RecipeHolder<$MachineRecipe>>;
        getCurrentRecipeEu(): number;
        lockRecipe(arg0: $ResourceLocation_, arg1: $Inventory): void;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        tryContinueRecipe(): boolean;
        static doInputsMatch(arg0: $List_<$ConfigurableItemStack>, arg1: $List_<$ConfigurableFluidStack>, arg2: $MachineRecipe): boolean;
        tickRecipe(): boolean;
        getRecipeTotalEuCost(arg0: $RecipeHolder_<any>): number;
        getMaxEfficiencyTicks(): number;
        getEfficiencyTicks(): number;
        hasActiveRecipe(): boolean;
        getBehavior(): $CrafterComponent$Behavior;
        getActiveRecipe(): $RecipeHolder<any>;
        getBaseRecipeEu(): number;
        getRecipeEuCost(arg0: $RecipeHolder_<any>): number;
        decreaseEfficiencyTicks(): void;
        increaseEfficiencyTicks(arg0: number): void;
        doConditionsMatchForRecipe(arg0: $RecipeHolder_<any>): boolean;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getInventory(): $InventoryAccess;
        getConditionContext(): $MachineProcessCondition$Context;
        lastSoundTime: number;
        constructor(arg0: $MachineBlockEntity, arg1: $CrafterComponent$Inventory, arg2: $CrafterComponent$Behavior);
        get progress(): number;
        get currentRecipeEu(): number;
        get maxEfficiencyTicks(): number;
        get efficiencyTicks(): number;
        get behavior(): $CrafterComponent$Behavior;
        get activeRecipe(): $RecipeHolder<any>;
        get baseRecipeEu(): number;
        get inventory(): $InventoryAccess;
        get conditionContext(): $MachineProcessCondition$Context;
    }
    export class $EnergyComponent implements $MachineComponent$ServerOnly, $EnergyAccess {
        getCapacity(): number;
        buildInsertable(arg0: $Predicate_<$CableTier>): $MIEnergyStorage;
        insertEu(arg0: number, arg1: $Simulation_): number;
        consumeEu(arg0: number, arg1: $Simulation_): number;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        buildExtractable(arg0: $Predicate_<$CableTier>): $MIEnergyStorage;
        getEu(): number;
        getRemainingCapacity(): number;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        constructor(arg0: $BlockEntity, arg1: $Supplier_<number>);
        constructor(arg0: $BlockEntity, arg1: number);
        get capacity(): number;
        get eu(): number;
        get remainingCapacity(): number;
    }
    export class $ShapeValidComponent implements $MachineComponent$ClientOnly {
        update(): boolean;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        shapeValid: boolean;
        constructor();
    }
    export class $OverclockComponent$Catalyst extends $Record {
        multiplier(): number;
        ticks(): number;
        resourceLocation(): $ResourceLocation;
        constructor(multiplier: number, resourceLocation: $ResourceLocation_, ticks: number);
    }
    /**
     * Values that may be interpreted as {@link $OverclockComponent$Catalyst}.
     */
    export type $OverclockComponent$Catalyst_ = { resourceLocation?: $ResourceLocation_, ticks?: number, multiplier?: number,  } | [resourceLocation?: $ResourceLocation_, ticks?: number, multiplier?: number, ];
    export class $PlacedByComponent implements $MachineComponent {
        onPlaced(arg0: $LivingEntity): void;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        placerId: $UUID;
        constructor();
    }
    export class $CrafterComponent$Behavior {
    }
    export interface $CrafterComponent$Behavior {
        isEnabled(): boolean;
        oneFluidInputPerStack(): boolean;
        onCraft(): void;
        getCrafterWorld(): $ServerLevel;
        getStatsOrDummy(): $PlayerStatistics;
        getOwnerUuid(): $UUID;
        getMaxFluidOutputs(): number;
        isOverdriving(): boolean;
        consumeEu(arg0: number, arg1: $Simulation_): number;
        banRecipe(arg0: $MachineRecipe): boolean;
        recipeType(): $MachineRecipeType;
        getMaxRecipeEu(): number;
        getBaseRecipeEu(): number;
        get enabled(): boolean;
        get crafterWorld(): $ServerLevel;
        get statsOrDummy(): $PlayerStatistics;
        get ownerUuid(): $UUID;
        get maxFluidOutputs(): number;
        get overdriving(): boolean;
        get maxRecipeEu(): number;
        get baseRecipeEu(): number;
    }
}
