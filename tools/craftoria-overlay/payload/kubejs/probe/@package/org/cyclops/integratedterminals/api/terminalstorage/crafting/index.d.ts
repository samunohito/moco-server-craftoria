import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IngredientComponent, $IngredientComponent_, $IPrototypedIngredient } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Iterator, $List, $Collection } from "@package/java/util";
import { $Comparable, $Enum } from "@package/java/lang";
import { $TerminalStorageTabIngredientComponentServer } from "@package/org/cyclops/integratedterminals/core/terminalstorage";

declare module "@package/org/cyclops/integratedterminals/api/terminalstorage/crafting" {
    export class $ITerminalCraftingPlanFlat<I> {
    }
    export interface $ITerminalCraftingPlanFlat<I> {
        getId(): I;
        getEntries(): $List<$ITerminalCraftingPlanFlat$IEntry>;
        getChannel(): number;
        setError(arg0: string): void;
        getOutputs(): $List<$IPrototypedIngredient<never, never>>;
        getInitiatorName(): string;
        getStatus(): $TerminalCraftingJobStatus;
        getTickDuration(): number;
        getUnlocalizedLabel(): string;
        get id(): I;
        get entries(): $List<$ITerminalCraftingPlanFlat$IEntry>;
        get channel(): number;
        set error(value: string);
        get outputs(): $List<$IPrototypedIngredient<never, never>>;
        get initiatorName(): string;
        get status(): $TerminalCraftingJobStatus;
        get tickDuration(): number;
        get unlocalizedLabel(): string;
    }
    export class $ITerminalCraftingPlanFlat$IEntry {
    }
    export interface $ITerminalCraftingPlanFlat$IEntry {
        /**
         * @deprecated
         */
        getInstance(): $IPrototypedIngredient<never, never>;
        getQuantityMissing(): number;
        getInstances(): $List<$IPrototypedIngredient<never, never>>;
        getQuantityToCraft(): number;
        getQuantityCrafting(): number;
        getQuantityInStorage(): number;
        get instance(): $IPrototypedIngredient<never, never>;
        get quantityMissing(): number;
        get instances(): $List<$IPrototypedIngredient<never, never>>;
        get quantityToCraft(): number;
        get quantityCrafting(): number;
        get quantityInStorage(): number;
    }
    export class $ITerminalStorageTabIngredientCraftingHandler<O extends $ITerminalCraftingOption<never>, I> {
    }
    export interface $ITerminalStorageTabIngredientCraftingHandler<O extends $ITerminalCraftingOption<never>, I> {
        getId(): $ResourceLocation;
        serializeCraftingJobId(arg0: I): $Tag;
        serializeCraftingPlanFlat(arg0: $HolderLookup$Provider, arg1: $ITerminalCraftingPlanFlat<I>): $CompoundTag;
        deserializeCraftingJobId(arg0: $Tag_): I;
        cancelCraftingJob(arg0: $INetwork, arg1: number, arg2: I): boolean;
        getCraftingJobs(arg0: $INetwork, arg1: number): $List<$ITerminalCraftingPlan<I>>;
        getCraftingJob(arg0: $INetwork, arg1: number, arg2: I): $ITerminalCraftingPlan<I>;
        startCraftingJob(arg0: $INetwork, arg1: number, arg2: $ITerminalCraftingPlan<I>, arg3: $ServerPlayer): void;
        serializeCraftingOption(arg0: $HolderLookup$Provider, arg1: O): $CompoundTag;
        deserializeCraftingOption<T, M>(arg0: $HolderLookup$Provider, arg1: $IngredientComponent_<T, M>, arg2: $CompoundTag_): O;
        calculateCraftingPlan(arg0: $INetwork, arg1: number, arg2: $ITerminalCraftingOption<any>, arg3: number): $ITerminalCraftingPlan<I>;
        getCraftingOptionsWithOutput<T, M>(arg0: $TerminalStorageTabIngredientComponentServer<T, M>, arg1: number, arg2: T, arg3: M): $Collection<O>;
        serializeCraftingPlan(arg0: $HolderLookup$Provider, arg1: $ITerminalCraftingPlan<I>): $CompoundTag;
        deserializeCraftingPlan(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ITerminalCraftingPlan<I>;
        getCraftingOptions<T, M>(arg0: $TerminalStorageTabIngredientComponentServer<T, M>, arg1: number): $Collection<O>;
        getChannels<T, M>(arg0: $TerminalStorageTabIngredientComponentServer<T, M>): number[];
        deserializeCraftingPlanFlat(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ITerminalCraftingPlanFlat<I>;
        get id(): $ResourceLocation;
    }
    export class $ITerminalCraftingPlan<I> {
    }
    export interface $ITerminalCraftingPlan<I> {
        getId(): I;
        getChannel(): number;
        setError(arg0: string): void;
        flatten(): $ITerminalCraftingPlanFlat<I>;
        getOutputs(): $List<$IPrototypedIngredient<never, never>>;
        getInitiatorName(): string;
        getStatus(): $TerminalCraftingJobStatus;
        getDependencies(): $List<$ITerminalCraftingPlan<I>>;
        getTickDuration(): number;
        getUnlocalizedLabel(): string;
        getBufferedIngredients(): $List<$IPrototypedIngredient<never, never>>;
        getCraftingQuantity(): number;
        getLastMissingIngredients(): $List<$List<$IPrototypedIngredient<never, never>>>;
        get id(): I;
        get channel(): number;
        set error(value: string);
        get outputs(): $List<$IPrototypedIngredient<never, never>>;
        get initiatorName(): string;
        get status(): $TerminalCraftingJobStatus;
        get dependencies(): $List<$ITerminalCraftingPlan<I>>;
        get tickDuration(): number;
        get unlocalizedLabel(): string;
        get bufferedIngredients(): $List<$IPrototypedIngredient<never, never>>;
        get craftingQuantity(): number;
        get lastMissingIngredients(): $List<$List<$IPrototypedIngredient<never, never>>>;
    }
    export class $TerminalCraftingJobStatus extends $Enum<$TerminalCraftingJobStatus> {
        static values(): $TerminalCraftingJobStatus[];
        static valueOf(arg0: string): $TerminalCraftingJobStatus;
        isValid(): boolean;
        getColor(): number;
        static PENDING_INPUTS: $TerminalCraftingJobStatus;
        static UNSTARTED: $TerminalCraftingJobStatus;
        static CRAFTING: $TerminalCraftingJobStatus;
        static ERROR: $TerminalCraftingJobStatus;
        static INVALID: $TerminalCraftingJobStatus;
        static QUEUEING: $TerminalCraftingJobStatus;
        static INVALID_INPUTS: $TerminalCraftingJobStatus;
        static FINISHED: $TerminalCraftingJobStatus;
        static PENDING_DEPENDENCIES: $TerminalCraftingJobStatus;
        get valid(): boolean;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $TerminalCraftingJobStatus}.
     */
    export type $TerminalCraftingJobStatus_ = "error" | "invalid" | "unstarted" | "queueing" | "pending_dependencies" | "pending_inputs" | "invalid_inputs" | "crafting" | "finished";
    export class $ITerminalCraftingOption<T> {
    }
    export interface $ITerminalCraftingOption<T> extends $Comparable<$ITerminalCraftingOption<T>> {
        getOutputs<T, M>(arg0: $IngredientComponent_<T, M>): $Collection<T>;
        getOutputs(): $Iterator<$ITerminalCraftingOption<T>>;
        getInputs<T1, M>(arg0: $IngredientComponent_<T1, M>): $Collection<T1>;
        getOutputComponents(): $Collection<$IngredientComponent<never, never>>;
        getInputComponents(): $Collection<$IngredientComponent<never, never>>;
        get outputComponents(): $Collection<$IngredientComponent<never, never>>;
        get inputComponents(): $Collection<$IngredientComponent<never, never>>;
    }
}
