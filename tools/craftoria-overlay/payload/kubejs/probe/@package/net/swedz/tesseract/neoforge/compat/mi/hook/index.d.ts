import { $DeferredRegister$Items, $DeferredRegister, $DeferredRegister$Blocks } from "@package/net/neoforged/neoforge/registries";
import { $RecipeSerializer, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ItemHolder, $BlockHolder } from "@package/net/swedz/tesseract/neoforge/registry/holder";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SortOrder } from "@package/net/swedz/tesseract/neoforge/registry";
import { $EfficiencyMIHookContext } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/machine";
import { $ClientGuiComponentsMIHookContext, $ViewerSetupMIHookContext, $HatchMIHookContext, $SingleBlockCraftingMachinesMIHookContext, $MultiblockMachinesMIHookContext, $MachineProcessConditionsMIHookContext, $BlastFurnaceTiersMIHookContext, $MachineCasingsMIHookContext, $MachineRecipeTypesMIHookContext, $SingleBlockSpecialMachinesMIHookContext } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/listener";
import { $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
export * as context from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/hook" {
    export class $MIHook {
        id(arg0: string): $ResourceLocation;
        listener(): $MIHookListener;
        registry(): $MIHookRegistry;
        modId(): string;
        hasListener(): boolean;
        hasRegistry(): boolean;
        hasEfficiencyListener(): boolean;
        efficiencyListener(): $MIHookEfficiency;
        constructor(arg0: string);
    }
    export class $MIHookListener {
        static NONE: $MIHookListener;
    }
    export interface $MIHookListener extends $MIHookInstance {
        tooltips(): void;
        afterInit(): void;
        beforeInit(): void;
        singleBlockSpecialMachines(arg0: $SingleBlockSpecialMachinesMIHookContext): void;
        machineProcessConditions(arg0: $MachineProcessConditionsMIHookContext): void;
        clientGuiComponents(arg0: $ClientGuiComponentsMIHookContext): void;
        machineRecipeTypes(arg0: $MachineRecipeTypesMIHookContext): void;
        blastFurnaceTiers(arg0: $BlastFurnaceTiersMIHookContext): void;
        viewerSetup(arg0: $ViewerSetupMIHookContext): void;
        multiblockMachines(arg0: $MultiblockMachinesMIHookContext): void;
        machineCasings(arg0: $MachineCasingsMIHookContext): void;
        hatches(arg0: $HatchMIHookContext): void;
        singleBlockCraftingMachines(arg0: $SingleBlockCraftingMachinesMIHookContext): void;
    }
    export class $MIHookRegistry {
        static NONE: $MIHookRegistry;
    }
    export interface $MIHookRegistry extends $MIHookInstance {
        itemRegistry(): $DeferredRegister$Items;
        blockRegistry(): $DeferredRegister$Blocks;
        onMachineRecipeTypeRegister(arg0: $MachineRecipeType): void;
        blockEntityRegistry(): $DeferredRegister<$BlockEntityType<never>>;
        recipeSerializerRegistry(): $DeferredRegister<$RecipeSerializer<never>>;
        onBlockEntityRegister(arg0: $BlockEntityType_<never>): void;
        onBlockRegister(arg0: $BlockHolder<any>): void;
        sortOrderMachines(): $SortOrder;
        onItemRegister(arg0: $ItemHolder<any>): void;
        recipeTypeRegistry(): $DeferredRegister<$RecipeType<never>>;
    }
    export class $MIHookEfficiency {
        static NONE: $MIHookEfficiency;
    }
    export interface $MIHookEfficiency extends $MIHookInstance {
        getPriority(): number;
        onTickEnd(arg0: $EfficiencyMIHookContext, arg1: number): void;
        onDecreaseEfficiencyTicks(arg0: $EfficiencyMIHookContext): void;
        onIncreaseEfficiencyTicks(arg0: $EfficiencyMIHookContext): void;
        onGetRecipeMaxEu(arg0: $EfficiencyMIHookContext): void;
        shouldAlwaysRun(): boolean;
        onTickStart(arg0: $EfficiencyMIHookContext): void;
        onReadNbt(arg0: $EfficiencyMIHookContext): void;
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $MIHookEfficiency}.
     */
    export type $MIHookEfficiency_ = (() => number);
    export class $MIHookInstance {
    }
    export interface $MIHookInstance {
        modId(): string;
        shouldInitialize(): boolean;
    }
}
