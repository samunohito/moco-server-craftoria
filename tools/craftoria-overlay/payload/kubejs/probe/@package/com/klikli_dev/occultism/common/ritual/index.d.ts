import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder, $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GoldenSacrificialBowlBlockEntity, $SacrificialBowlBlockEntity } from "@package/com/klikli_dev/occultism/common/blockentity";
import { $List, $List_ } from "@package/java/util";
import { $PlayerInteractEvent$RightClickItem } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Function_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RitualRecipe } from "@package/com/klikli_dev/occultism/crafting/recipe";

declare module "@package/com/klikli_dev/occultism/common/ritual" {
    export class $Ritual {
        finish(arg0: $Level_, arg1: $BlockPos_, arg2: $GoldenSacrificialBowlBlockEntity, arg3: $ServerPlayer, arg4: $ItemStack_): void;
        interrupt(arg0: $Level_, arg1: $BlockPos_, arg2: $GoldenSacrificialBowlBlockEntity, arg3: $ServerPlayer, arg4: $ItemStack_, arg5: boolean): void;
        update(arg0: $Level_, arg1: $BlockPos_, arg2: $GoldenSacrificialBowlBlockEntity, arg3: $Player, arg4: $ItemStack_, arg5: number): void;
        update(arg0: $Level_, arg1: $BlockPos_, arg2: $GoldenSacrificialBowlBlockEntity, arg3: $Player, arg4: $ItemStack_, arg5: $List_<$Ingredient_>, arg6: number): void;
        start(arg0: $Level_, arg1: $BlockPos_, arg2: $GoldenSacrificialBowlBlockEntity, arg3: $ServerPlayer, arg4: $ItemStack_): boolean;
        dropResult(arg0: $Level_, arg1: $BlockPos_, arg2: $GoldenSacrificialBowlBlockEntity, arg3: $Player, arg4: $ItemStack_, arg5: boolean): void;
        isValid(arg0: $Level_, arg1: $BlockPos_, arg2: $GoldenSacrificialBowlBlockEntity, arg3: $Player, arg4: $ItemStack_, arg5: $List_<$Ingredient_>): boolean;
        require(): boolean;
        identify(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): boolean;
        isValidSacrifice(arg0: $LivingEntity): boolean;
        isValidItemUse(arg0: $PlayerInteractEvent$RightClickItem): boolean;
        markNextIngredient(arg0: $Level_, arg1: $BlockPos_, arg2: $Ingredient_, arg3: number): void;
        getConditionNotMetMessage(arg0: $GoldenSacrificialBowlBlockEntity, arg1: $ServerPlayer): $MutableComponent;
        getInterruptedMessage(arg0: $ServerPlayer): string;
        getRecipe(): $RitualRecipe;
        getRitualID(arg0: $ServerPlayer): string;
        getStartedMessage(arg0: $ServerPlayer): string;
        requiresSacrifice(): boolean;
        getRecipeHolder(arg0: $Level_): $RecipeHolder<$RitualRecipe>;
        getFinishedMessage(arg0: $ServerPlayer): string;
        consumeAdditionalIngredients(arg0: $Level_, arg1: $BlockPos_, arg2: $List_<$Ingredient_>, arg3: number, arg4: $List_<$ItemStack_>): boolean;
        areAdditionalIngredientsFulfilled(arg0: $Level_, arg1: $BlockPos_, arg2: $List_<$Ingredient_>): boolean;
        matchesAdditionalIngredients(arg0: $List_<$Ingredient_>, arg1: $List_<$ItemStack_>): boolean;
        static getRemainingAdditionalIngredients(arg0: $List_<$Ingredient_>, arg1: $List_<$ItemStack_>): $List<$Ingredient>;
        consumeAdditionalIngredient(arg0: $Level_, arg1: $BlockPos_, arg2: $List_<$SacrificialBowlBlockEntity>, arg3: $Ingredient_, arg4: $List_<$ItemStack_>): boolean;
        getFactoryID(): $ResourceLocation;
        setFactoryId(arg0: $ResourceLocation_): void;
        getSacrificialBowls(arg0: $Level_, arg1: $BlockPos_): $List<$SacrificialBowlBlockEntity>;
        getItemsOnSacrificialBowls(arg0: $Level_, arg1: $BlockPos_): $List<$ItemStack>;
        getConditionsMessage(arg0: $ServerPlayer): string;
        identifyAnyActivation(arg0: $Level_, arg1: $BlockPos_): boolean;
        identifyAnyPentacle(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): boolean;
        static SACRIFICE_DETECTION_RANGE: number;
        static SACRIFICIAL_BOWL_RANGE: number;
        static SACRIFICE_DETECTION_RANGE_SQUARE: number;
        factoryId: $ResourceLocation;
        recipe: $RitualRecipe;
        static ITEM_USE_DETECTION_RANGE: number;
        static ITEM_USE_DETECTION_RANGE_SQUARE: number;
        constructor(arg0: $RitualRecipe);
        get factoryID(): $ResourceLocation;
    }
    export interface $RitualFactory extends RegistryMarked<RegistryTypes.OccultismRitualFactoriesTag, RegistryTypes.OccultismRitualFactories> {}
    export class $RitualFactory {
        create(arg0: $RitualRecipe): $Ritual;
        constructor(arg0: $Function_<$RitualRecipe, $Ritual>);
    }
    /**
     * Values that may be interpreted as {@link $RitualFactory}.
     */
    export type $RitualFactory_ = RegistryTypes.OccultismRitualFactories;
}
