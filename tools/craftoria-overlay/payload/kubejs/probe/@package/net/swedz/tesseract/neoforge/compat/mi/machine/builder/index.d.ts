import { $SteamMode, $SteamMode_ } from "@package/aztech/modern_industrialization/compat/rei/machines";
import { $ProgressBar$Params, $RecipeEfficiencyBar$Params, $EnergyBar$Params } from "@package/aztech/modern_industrialization/machines/guicomponents";
import { $CableTier } from "@package/aztech/modern_industrialization/api/energy";
import { $CrafterComponent, $MachineInventoryComponent } from "@package/aztech/modern_industrialization/machines/components";
import { $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";
import { $MIHook } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook";
import { $MachineBlockRegistrators_, $MachineGuiConfigurator_, $MachineRecipePredicate_, $MachineBlockHolderHatchModifier, $MachineBlockPropertiesModifier_, $MachineBlockEntityWithGuiFactory_, $MachineBlockFactory_, $MachineRecipePredicate, $MachineBlockHolderModifier_, $MachineBlockHatchBlockEntityFactory } from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/function";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MachineGuiParameters } from "@package/aztech/modern_industrialization/machines/gui";
import { $MachineBlockEntity } from "@package/aztech/modern_industrialization/machines";
import { $MachineSlotConfiguration$Builder, $MachineSlotConfiguration } from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/slots";
import { $ShapeTemplate } from "@package/aztech/modern_industrialization/machines/multiblocks";
import { $SingleBlockCraftingMachines$Config } from "@package/aztech/modern_industrialization/machines/init";
export * as function from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/function";
export * as slots from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/slots";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder" {
    export class $MachineBuilder<T extends $MachineBuilder<T>> {
        properties(arg0: $MachineBlockPropertiesModifier_): T;
        creator(arg0: $MachineBlockFactory_): T;
        modify(arg0: $MachineBlockHolderModifier_): T;
        static special(arg0: $MIHook, arg1: string, arg2: string, arg3: boolean, arg4: $MachineBlockEntityWithGuiFactory_): $SpecialMachineBuilder;
        registrator(arg0: $MachineBlockRegistrators_): T;
        static hatch(arg0: $MIHook, arg1: string, arg2: string): $HatchMachineBuilder;
        static singleBlockCrafting(arg0: $MIHook, arg1: string, arg2: string, arg3: $MachineRecipeType): $SingleBlockCraftingMachineBuilder;
        excludeDefaultBlockProperties(): T;
        excludeDefaultMineableTags(): T;
        builtinModel(arg0: $MachineCasing, arg1: string): T;
        builtinModel(arg0: $MachineCasing, arg1: string, arg2: $Consumer_<$MachineBuiltinModelBuilder>): T;
        registerMachine(): T;
    }
    export class $SingleBlockCraftingMachineBuilder extends $MachineWithGuiBuilder<$SingleBlockCraftingMachineBuilder> {
        extra(arg0: $Consumer_<$SingleBlockCraftingMachines$Config>): $SingleBlockCraftingMachineBuilder;
        gui(arg0: $SteamMode_, arg1: $MachineGuiConfigurator_): $SingleBlockCraftingMachineBuilder;
        bronze(): $SingleBlockCraftingMachineBuilder;
        steel(): $SingleBlockCraftingMachineBuilder;
        electric(): $SingleBlockCraftingMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: string, arg2: $Consumer_<$MachineBuiltinModelBuilder>): $SingleBlockCraftingMachineBuilder;
        builtinModel(arg0: string, arg1: $Consumer_<$MachineBuiltinModelBuilder>): $SingleBlockCraftingMachineBuilder;
        builtinModel(arg0: string): $SingleBlockCraftingMachineBuilder;
        steamSlotPosition(arg0: number, arg1: number): $SingleBlockCraftingMachineBuilder;
    }
    export class $MachineGuiConfiguration {
        copy(): $MachineGuiConfiguration;
        slots(arg0: $Consumer_<$MachineSlotConfiguration$Builder>): $MachineGuiConfiguration;
        predicate(arg0: $MachineRecipePredicate_): $MachineGuiConfiguration;
        getProgressBar(): $ProgressBar$Params;
        guiHeight(arg0: number): $MachineGuiConfiguration;
        progressBar(arg0: number, arg1: number, arg2: string): $MachineGuiConfiguration;
        progressBar(arg0: number, arg1: number, arg2: string, arg3: boolean): $MachineGuiConfiguration;
        getPredicate(): $MachineRecipePredicate;
        energyBar(arg0: number, arg1: number): $MachineGuiConfiguration;
        getSlots(): $MachineSlotConfiguration;
        getRecipeType(): $MachineRecipeType;
        lockButton(arg0: boolean): $MachineGuiConfiguration;
        isMultiblock(): boolean;
        inventoryOnlySlots(arg0: $Consumer_<$MachineSlotConfiguration$Builder>): $MachineGuiConfiguration;
        efficiencyBar(arg0: number, arg1: number): $MachineGuiConfiguration;
        createGuiParams(arg0: $ResourceLocation_): $MachineGuiParameters;
        buildInventory(): $MachineInventoryComponent;
        getGuiHeight(): number;
        getEnergyBar(): $EnergyBar$Params;
        getEfficiencyBar(): $RecipeEfficiencyBar$Params;
        hasLockButton(): boolean;
        registerEnergyBar(arg0: $MachineBlockEntity, arg1: $Supplier_<number>, arg2: $Supplier_<number>): void;
        getSteamMode(): $SteamMode;
        registerProgressBar(arg0: $MachineBlockEntity, arg1: $Supplier_<number>): void;
        getInventoryOnlySlots(): $MachineSlotConfiguration;
        registerEfficiencyBar(arg0: $MachineBlockEntity, arg1: $CrafterComponent): void;
        get recipeType(): $MachineRecipeType;
        get multiblock(): boolean;
        get steamMode(): $SteamMode;
    }
    export class $MachineBuiltinModelBuilder {
        top(arg0: boolean): $MachineBuiltinModelBuilder;
        top(): $MachineBuiltinModelBuilder;
        front(arg0: boolean): $MachineBuiltinModelBuilder;
        front(): $MachineBuiltinModelBuilder;
        side(arg0: boolean): $MachineBuiltinModelBuilder;
        side(): $MachineBuiltinModelBuilder;
        active(): $MachineBuiltinModelBuilder;
        active(arg0: boolean): $MachineBuiltinModelBuilder;
        outputTextureItem(): $MachineBuiltinModelBuilder;
        outputTextureFluid(): $MachineBuiltinModelBuilder;
        outputTexture(arg0: $ResourceLocation_): $MachineBuiltinModelBuilder;
        outputTexture(arg0: string): $MachineBuiltinModelBuilder;
        outputTextureEnergy(): $MachineBuiltinModelBuilder;
        outputTextureDefault(): $MachineBuiltinModelBuilder;
    }
    export class $MachineWithGuiBuilder<T extends $MachineWithGuiBuilder<T>> extends $MachineBuilder<T> {
    }
    export class $HatchMachineBuilder extends $MachineBuilder<$HatchMachineBuilder> {
        item(arg0: number, arg1: number, arg2: number, arg3: number): $HatchMachineBuilder;
        fluid(arg0: number): $HatchMachineBuilder;
        modify(arg0: $MachineBlockHolderHatchModifier): $HatchMachineBuilder;
        special(arg0: $MachineBlockHatchBlockEntityFactory, arg1: boolean): $HatchMachineBuilder;
        special(arg0: $MachineBlockHatchBlockEntityFactory): $HatchMachineBuilder;
        energy(arg0: $CableTier): $HatchMachineBuilder;
        builtinModel(arg0: string, arg1: $Consumer_<$MachineBuiltinModelBuilder>): $HatchMachineBuilder;
        builtinModel(arg0: $MachineCasing): $HatchMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: string, arg2: $Consumer_<$MachineBuiltinModelBuilder>): $HatchMachineBuilder;
        builtinModel(): $HatchMachineBuilder;
        builtinModel(arg0: $Consumer_<$MachineBuiltinModelBuilder>): $HatchMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: $Consumer_<$MachineBuiltinModelBuilder>): $HatchMachineBuilder;
        registerIO(): $HatchMachineBuilder;
        registerIO(arg0: boolean): $HatchMachineBuilder;
    }
    export class $SpecialMachineBuilder extends $MachineWithGuiBuilder<$SpecialMachineBuilder> {
        gui(arg0: $SteamMode_, arg1: $MachineRecipeType, arg2: $MachineGuiConfigurator_): $SpecialMachineBuilder;
        gui(arg0: boolean, arg1: $SteamMode_, arg2: $MachineRecipeType, arg3: $MachineGuiConfigurator_): $SpecialMachineBuilder;
        gui(arg0: $MachineGuiConfigurator_): $SpecialMachineBuilder;
        registerMultiblockShape(arg0: $ShapeTemplate, arg1: string): $SpecialMachineBuilder;
        registerMultiblockShape(arg0: $ShapeTemplate): $SpecialMachineBuilder;
        registerAsWorkstationFor(arg0: $ResourceLocation_): $SpecialMachineBuilder;
        registerRecipeCategory(): $SpecialMachineBuilder;
        registerExtraWorkstations(...arg0: $ResourceLocation_[]): $SpecialMachineBuilder;
        builtinModel(arg0: string, arg1: $Consumer_<$MachineBuiltinModelBuilder>): $SpecialMachineBuilder;
        builtinModel(arg0: string): $SpecialMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: string, arg2: $Consumer_<$MachineBuiltinModelBuilder>): $SpecialMachineBuilder;
    }
}
