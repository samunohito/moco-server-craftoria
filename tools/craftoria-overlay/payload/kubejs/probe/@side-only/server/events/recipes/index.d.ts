import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_, $CraftingBookCategory_, $CookingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $RecipeResultComponent_, $WeightedRecipeResultComponent_, $ConditionComponent_, $EntityToSacrificeComponent_ } from "@package/com/klikli_dev/occultism_kubejs/component";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Map_, $List_ } from "@package/java/util";
import { $HeatCondition_, $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";
import { $ChemicalStackIngredient } from "@package/mekanism/api/recipes/ingredients";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ChemicalStack } from "@package/mekanism/api/chemical";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $LiquidFuelKubeRecipe, $PressKubeRecipe, $FermenterKubeRecipe } from "@package/com/almostreliable/kubeaa/recipe";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $MachineProcessCondition } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $MachineKubeRecipe } from "@package/aztech/modern_industrialization/compat/kubejs/recipe";
import { $SizedIngredient_ } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@side-only/server/events/recipes" {
    export class Mekanism$PigmentExtracting extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Create$Cutting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$ChemicalConversion extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Createvintageneoforged$Vacuumizing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Createdieselgenerators$CompressionMolding extends $KubeRecipe {
        results(results: $List_<$ItemStack_>): this;
        mold(mold: string): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        heated(): this;
        superheated(): this;
        superHeated(): this;
        heatLevel(): this;
    }
    export class Create$Milling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$MechanicalCrafting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        acceptMirrored(acceptMirrored: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class ModernIndustrialization$Assembler extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ExtendedIndustrialization$BendingMachine extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Createvintageneoforged$LaserCutting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Crushing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Createvintageneoforged$CurvingWShaped extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        headDamage(headDamage: number): this;
        requiredBonks(requiredBonks: number): this;
    }
    export class Create$Haunting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$CampfireCooking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Createdieselgenerators$Casting extends $KubeRecipe {
        results(results: $List_<$ItemStack_>): this;
        mold(mold: string): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient>): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        heated(): this;
        superheated(): this;
        superHeated(): this;
        heatLevel(): this;
    }
    export class ModernIndustrialization$BuddingIncubator extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Unpacker extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Actuallyadditions$Crushing extends $KubeRecipe {
    }
    export class Createvintageneoforged$Coiling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Createvintageneoforged$Pressurizing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Painting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class ModernIndustrialization$Pressurizer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Reaction extends $KubeRecipe {
        itemInput(itemInput: $SizedIngredient_): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        duration(duration: $TickDuration_): this;
        itemOutput(itemOutput: $ItemStack_): this;
        chemicalOutput(chemicalOutput: $ChemicalStack): this;
        energyRequired(energyRequired: number): this;
    }
    export class ModernIndustrialization$ModelSynthesizer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Actuallyadditions$Pressing extends $PressKubeRecipe {
    }
    export class Actuallyadditions$Laser extends $KubeRecipe {
        energy(energy: number): this;
    }
    export class Create$ItemApplication extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Createvintageneoforged$Polishing extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        processingTime(processingTime: number): this;
        speedLimits(speedLimits: number): this;
        fragile(fragile: boolean): this;
    }
    export class Actuallyadditions$ColorChange extends $KubeRecipe {
    }
    export class IronsSpellbooks$AlchemistCauldronBrew extends $KubeRecipe {
        results(results: $List_<$FluidStack_>): this;
        input(input: $Ingredient_): this;
        baseFluid(baseFluid: $FluidStack_): this;
        byproduct(byproduct: $ItemStack_): this;
    }
    export class Create$Pressing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class ModernIndustrialization$BlastFurnace extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Createvintageneoforged$Hammering extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        anvilBlock(anvilBlock: string): this;
        hammerBlows(hammerBlows: number): this;
    }
    export class Createdieselgenerators$BulkFermenting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Crushing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class ModernIndustrialization$Wiremill extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Occultism$SpiritTrade extends $KubeRecipe {
        result(result: $WeightedRecipeResultComponent_): this;
        ingredient(ingredient: $Ingredient_): this;
        traderId(traderId: string): this;
    }
    export class Actuallyadditions$Fermenting extends $FermenterKubeRecipe {
        time(time: number): this;
    }
    export class ModernIndustrialization$Polarizer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Packer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Mekanismtools$Paxel extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Mekanism$PigmentMixing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        leftInput(leftInput: $ChemicalStackIngredient): this;
        rightInput(rightInput: $ChemicalStackIngredient): this;
    }
    export class Occultism$Miner extends $KubeRecipe {
        result(result: $WeightedRecipeResultComponent_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Mekanism$ChemicalInfusing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        leftInput(leftInput: $ChemicalStackIngredient): this;
        rightInput(rightInput: $ChemicalStackIngredient): this;
    }
    export class Createdieselgenerators$BasinFermenting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Compressing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class IronsSpellbooks$AlchemistCauldronEmpty extends $KubeRecipe {
        result(result: $ItemStack_): this;
        input(input: $Ingredient_): this;
        fluid(fluid: $FluidStack_): this;
        sound(sound: $SoundEvent_): this;
    }
    export class Occultism$SpiritFire extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Mekanism$Evaporating extends $KubeRecipe {
        output(output: $FluidStack_): this;
        input(input: $SizedFluidIngredient): this;
    }
    export class ModernIndustrialization$Centrifuge extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class IndustrializationOverdrive$PyrolyseOven extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Electrolyzer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$HeatExchanger extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Combining extends $KubeRecipe {
        output(output: $ItemStack_): this;
        mainInput(mainInput: $SizedIngredient_): this;
        extraInput(extraInput: $SizedIngredient_): this;
    }
    export class Minecraft$CraftingShaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Mekanism$Activating extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class Create$Deploying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Splashing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class ModernIndustrialization$ChemicalReactor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Actuallyadditions$MiningLens extends $KubeRecipe {
        weight(weight: number): this;
    }
    export class DocumentedRecipes {
        kubejs: {
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
        }
        createdieselgenerators: {
            casting(results: $List_<$ItemStack_>, mold: string, ingredients: $List_<$SizedFluidIngredient>): Createdieselgenerators$Casting;
            hammering(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createdieselgenerators$Hammering;
            distillation(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createdieselgenerators$Distillation;
            wire_cutting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createdieselgenerators$WireCutting;
            basin_fermenting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createdieselgenerators$BasinFermenting;
            bulk_fermenting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createdieselgenerators$BulkFermenting;
            compression_molding(results: $List_<$ItemStack_>, mold: string, ingredients: $List_<$Ingredient_>): Createdieselgenerators$CompressionMolding;
        }
        actuallyadditions: {
            mining_lens(weight?: number): Actuallyadditions$MiningLens;
            liquid_fuel(energy?: number, time?: number): Actuallyadditions$LiquidFuel;
            coffee_ingredient(maxAmplifier?: number, extraText?: string): Actuallyadditions$CoffeeIngredient;
            crushing(): Actuallyadditions$Crushing;
            fermenting(time?: number): Actuallyadditions$Fermenting;
            pressing(): Actuallyadditions$Pressing;
            laser(energy?: number): Actuallyadditions$Laser;
            empowering(energy?: number, color?: number, time?: number): Actuallyadditions$Empowering;
            color_change(): Actuallyadditions$ColorChange;
        }
        mekanismtools: {
            paxel(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Mekanismtools$Paxel;
        }
        extended_industrialization: {
            alloy_smelter(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ExtendedIndustrialization$AlloySmelter;
            bending_machine(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ExtendedIndustrialization$BendingMachine;
            brewery(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ExtendedIndustrialization$Brewery;
            composter(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ExtendedIndustrialization$Composter;
            canning_machine(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ExtendedIndustrialization$CanningMachine;
        }
        createvintageneoforged: {
            centrifugation(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createvintageneoforged$Centrifugation;
            curving_convex(results: $List_<$ProcessingOutput>, ingredients: $List_<$Ingredient_>, headDamage?: number, requiredBonks?: number): Createvintageneoforged$CurvingConvex;
            vacuumizing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createvintageneoforged$Vacuumizing;
            laser_cutting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createvintageneoforged$LaserCutting;
            vibrating(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createvintageneoforged$Vibrating;
            pressurizing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createvintageneoforged$Pressurizing;
            turning(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createvintageneoforged$Turning;
            hammering(results: $List_<$ProcessingOutput>, ingredients: $List_<$Ingredient_>, anvilBlock?: string, hammerBlows?: number): Createvintageneoforged$Hammering;
            curving_concave(results: $List_<$ProcessingOutput>, ingredients: $List_<$Ingredient_>, headDamage?: number, requiredBonks?: number): Createvintageneoforged$CurvingConcave;
            coiling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Createvintageneoforged$Coiling;
            curving_w_shaped(results: $List_<$ProcessingOutput>, ingredients: $List_<$Ingredient_>, headDamage?: number, requiredBonks?: number): Createvintageneoforged$CurvingWShaped;
            polishing(results: $List_<$ProcessingOutput>, ingredients: $List_<$Ingredient_>, processingTime?: number, speedLimits?: number, fragile?: boolean): Createvintageneoforged$Polishing;
            curving_v_shaped(results: $List_<$ProcessingOutput>, ingredients: $List_<$Ingredient_>, headDamage?: number, requiredBonks?: number): Createvintageneoforged$CurvingVShaped;
        }
        industrialization_overdrive: {
            pyrolyse_oven(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): IndustrializationOverdrive$PyrolyseOven;
        }
        mekanism: {
            separating(leftChemicalOutput: $ChemicalStack, rightChemicalOutput: $ChemicalStack, input: $SizedFluidIngredient, energyMultiplier?: number): Mekanism$Separating;
            crushing(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Crushing;
            pigment_mixing(output: $ChemicalStack, leftInput: $ChemicalStackIngredient, rightInput: $ChemicalStackIngredient): Mekanism$PigmentMixing;
            oxidizing(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$Oxidizing;
            metallurgic_infusing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$MetallurgicInfusing;
            painting(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Painting;
            injecting(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Injecting;
            enriching(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Enriching;
            chemical_conversion(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$ChemicalConversion;
            evaporating(output: $FluidStack_, input: $SizedFluidIngredient): Mekanism$Evaporating;
            centrifuging(output: $ChemicalStack, input: $ChemicalStackIngredient): Mekanism$Centrifuging;
            crystallizing(output: $ItemStack_, input: $ChemicalStackIngredient): Mekanism$Crystallizing;
            washing(output: $ChemicalStack, fluidInput: $SizedFluidIngredient, chemicalInput: $ChemicalStackIngredient): Mekanism$Washing;
            combining(output: $ItemStack_, mainInput: $SizedIngredient_, extraInput: $SizedIngredient_): Mekanism$Combining;
            pigment_extracting(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$PigmentExtracting;
            smelting(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Smelting;
            energy_conversion(input: $SizedIngredient_, output: number): Mekanism$EnergyConversion;
            chemical_infusing(output: $ChemicalStack, leftInput: $ChemicalStackIngredient, rightInput: $ChemicalStackIngredient): Mekanism$ChemicalInfusing;
            nucleosynthesizing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, duration: $TickDuration_, perTickUsage?: boolean): Mekanism$Nucleosynthesizing;
            reaction(itemInput: $SizedIngredient_, fluidInput: $SizedFluidIngredient, chemicalInput: $ChemicalStackIngredient, duration?: $TickDuration_, itemOutput?: $ItemStack_, chemicalOutput?: $ChemicalStack, energyRequired?: number): Mekanism$Reaction;
            purifying(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Purifying;
            activating(output: $ChemicalStack, input: $ChemicalStackIngredient): Mekanism$Activating;
            compressing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Compressing;
            sawing(input: $SizedIngredient_, mainOutput?: $ItemStack_, secondaryOutput?: $ItemStack_, secondaryChance?: number): Mekanism$Sawing;
            rotary(chemicalOutput?: $ChemicalStack, fluidOutput?: $FluidStack_, chemicalInput?: $ChemicalStackIngredient, fluidInput?: $SizedFluidIngredient): Mekanism$Rotary;
            mek_data(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Mekanism$MekData;
            dissolution(output: $ChemicalStack, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Dissolution;
        }
        create: {
            basin(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Basin;
            emptying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Emptying;
            crushing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Crushing;
            compacting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Compacting;
            sandpaper_polishing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$SandpaperPolishing;
            pressing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Pressing;
            milling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Milling;
            sequenced_assembly(results: $List_<$ProcessingOutput>, ingredient: $Ingredient_, sequence: $List_<$KubeRecipe>, transitionalItem?: $ProcessingOutput, loops?: number): Create$SequencedAssembly;
            mechanical_crafting(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>, acceptMirrored?: boolean): Create$MechanicalCrafting;
            cutting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Cutting;
            splashing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Splashing;
            item_application(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$ItemApplication;
            haunting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Haunting;
            mixing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Mixing;
            conversion(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Conversion;
            filling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Filling;
            deploying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Deploying;
        }
        modern_industrialization: {
            ooze_lab(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$OozeLab;
            compressor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Compressor;
            distillery(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Distillery;
            blast_furnace(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$BlastFurnace;
            wiremill(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Wiremill;
            vacuum_freezer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$VacuumFreezer;
            distillation_tower(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$DistillationTower;
            implosion_compressor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$ImplosionCompressor;
            polarizer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Polarizer;
            coke_oven(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$CokeOven;
            budding_incubator(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$BuddingIncubator;
            quarry(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Quarry;
            unpacker(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Unpacker;
            macerator(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Macerator;
            cutting_machine(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$CuttingMachine;
            model_synthesizer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$ModelSynthesizer;
            mixer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Mixer;
            packer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Packer;
            replicator_1(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Replicator1;
            assembler(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Assembler;
            pressurizer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Pressurizer;
            oil_drilling_rig(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$OilDrillingRig;
            fusion_reactor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$FusionReactor;
            chemical_reactor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$ChemicalReactor;
            centrifuge(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Centrifuge;
            electrolyzer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Electrolyzer;
            furnace(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Furnace;
            forge_hammer(result: $ItemStack_, ingredient: $Ingredient_, damage?: number, count?: number): ModernIndustrialization$ForgeHammer;
            heat_exchanger(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$HeatExchanger;
        }
        minecraft: {
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
        }
        irons_spellbooks: {
            alchemist_cauldron_brew(results: $List_<$FluidStack_>, input: $Ingredient_, baseFluid: $FluidStack_, byproduct?: $ItemStack_): IronsSpellbooks$AlchemistCauldronBrew;
            alchemist_cauldron_fill(fluid: $FluidStack_, input: $Ingredient_, result: $ItemStack_, mustFitAll?: boolean, sound?: $SoundEvent_): IronsSpellbooks$AlchemistCauldronFill;
            alchemist_cauldron_empty(result: $ItemStack_, input: $Ingredient_, fluid: $FluidStack_, sound?: $SoundEvent_): IronsSpellbooks$AlchemistCauldronEmpty;
        }
        occultism: {
            spirit_fire(result: $ItemStack_, ingredient: $Ingredient_): Occultism$SpiritFire;
            spirit_trade(result: $WeightedRecipeResultComponent_, ingredient: $Ingredient_, traderId: string): Occultism$SpiritTrade;
            miner(result: $WeightedRecipeResultComponent_, ingredient: $Ingredient_): Occultism$Miner;
            crushing(result: $RecipeResultComponent_, ingredient: $Ingredient_, crushingTime?: $TickDuration_, minTier?: number, maxTier?: number, ignoreCrushingMultiplier?: boolean): Occultism$Crushing;
            ritual(result: $ItemStack_, ingredients: $List_<$Ingredient_>, activationItem: $Ingredient_, pentacleId: string, duration?: $TickDuration_, spiritMaxAge?: number, spiritJobType?: string, ritualDummy?: $ItemStack_, ritualType?: string, entityToSummon?: string, entityTagToSummon?: $TagKey_<any>, entityNbt?: string, entityToSacrifice?: $EntityToSacrificeComponent_, itemToUse?: $Ingredient_, command?: string, condition?: $ConditionComponent_): Occultism$Ritual;
        }
    }
    export class ModernIndustrialization$CuttingMachine extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Injecting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Createvintageneoforged$CurvingConvex extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        headDamage(headDamage: number): this;
        requiredBonks(requiredBonks: number): this;
    }
    export class Create$Conversion extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Separating extends $KubeRecipe {
        leftChemicalOutput(leftChemicalOutput: $ChemicalStack): this;
        rightChemicalOutput(rightChemicalOutput: $ChemicalStack): this;
        input(input: $SizedFluidIngredient): this;
        energyMultiplier(energyMultiplier: number): this;
    }
    export class ModernIndustrialization$CokeOven extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Centrifuging extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class Mekanism$MekData extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class ModernIndustrialization$OozeLab extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Washing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
    }
    export class ModernIndustrialization$DistillationTower extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Mixer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class ModernIndustrialization$ImplosionCompressor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Occultism$Crushing extends $KubeRecipe {
        result(result: $RecipeResultComponent_): this;
        ingredient(ingredient: $Ingredient_): this;
        crushingTime(crushingTime: $TickDuration_): this;
        minTier(minTier: number): this;
        maxTier(maxTier: number): this;
        ignoreCrushingMultiplier(ignoreCrushingMultiplier: boolean): this;
    }
    export class Actuallyadditions$CoffeeIngredient extends $KubeRecipe {
        maxAmplifier(maxAmplifier: number): this;
        extraText(extraText: string): this;
    }
    export class Mekanism$Nucleosynthesizing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        duration(duration: $TickDuration_): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class IronsSpellbooks$AlchemistCauldronFill extends $KubeRecipe {
        fluid(fluid: $FluidStack_): this;
        input(input: $Ingredient_): this;
        result(result: $ItemStack_): this;
        mustFitAll(mustFitAll: boolean): this;
        sound(sound: $SoundEvent_): this;
    }
    export class Kubejs$Shaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Occultism$Ritual extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        activationItem(activationItem: $Ingredient_): this;
        pentacleId(pentacleId: string): this;
        duration(duration: $TickDuration_): this;
        spiritMaxAge(spiritMaxAge: number): this;
        spiritJobType(spiritJobType: string): this;
        ritualDummy(ritualDummy: $ItemStack_): this;
        ritualType(ritualType: string): this;
        entityToSummon(entityToSummon: string): this;
        entityTagToSummon(entityTagToSummon: $TagKey_<any>): this;
        entityNbt(entityNbt: string): this;
        entityToSacrifice(entityToSacrifice: $EntityToSacrificeComponent_): this;
        itemToUse(itemToUse: $Ingredient_): this;
        command(command: string): this;
        condition(condition: $ConditionComponent_): this;
    }
    export class Create$Mixing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class ExtendedIndustrialization$CanningMachine extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Createdieselgenerators$WireCutting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$SandpaperPolishing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Createvintageneoforged$CurvingVShaped extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        headDamage(headDamage: number): this;
        requiredBonks(requiredBonks: number): this;
    }
    export class Createvintageneoforged$Vibrating extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Filling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class ModernIndustrialization$Furnace extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Enriching extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class ModernIndustrialization$Replicator1 extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Createvintageneoforged$CurvingConcave extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        headDamage(headDamage: number): this;
        requiredBonks(requiredBonks: number): this;
    }
    export class Mekanism$Sawing extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        mainOutput(mainOutput: $ItemStack_): this;
        secondaryOutput(secondaryOutput: $ItemStack_): this;
        secondaryChance(secondaryChance: number): this;
    }
    export class ExtendedIndustrialization$AlloySmelter extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$EnergyConversion extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        output(output: number): this;
    }
    export class ModernIndustrialization$Quarry extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$VacuumFreezer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Purifying extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Create$Emptying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Compacting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Crystallizing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class ExtendedIndustrialization$Composter extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Createdieselgenerators$Distillation extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$SequencedAssembly extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredient(ingredient: $Ingredient_): this;
        sequence(sequence: $List_<$KubeRecipe>): this;
        transitionalItem(transitionalItem: $ProcessingOutput): this;
        loops(loops: number): this;
    }
    export class Actuallyadditions$LiquidFuel extends $LiquidFuelKubeRecipe {
        energy(energy: number): this;
        time(time: number): this;
    }
    export class ModernIndustrialization$FusionReactor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Createdieselgenerators$Hammering extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class ExtendedIndustrialization$Brewery extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Distillery extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$MetallurgicInfusing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class ModernIndustrialization$OilDrillingRig extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Createvintageneoforged$Centrifugation extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Dissolution extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class ModernIndustrialization$Macerator extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$ForgeHammer extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        damage(damage: number): this;
        count(count: number): this;
    }
    export class ModernIndustrialization$Compressor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Oxidizing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Createvintageneoforged$Turning extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Rotary extends $KubeRecipe {
        chemicalOutput(chemicalOutput: $ChemicalStack): this;
        fluidOutput(fluidOutput: $FluidStack_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
    }
    export class Mekanism$Smelting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class Actuallyadditions$Empowering extends $KubeRecipe {
        energy(energy: number): this;
        color(color: number): this;
        time(time: number): this;
    }
    export class Create$Basin extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
}
