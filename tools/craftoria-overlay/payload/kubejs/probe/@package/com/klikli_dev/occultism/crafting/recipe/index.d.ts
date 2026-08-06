import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient_, $Ingredient, $SingleRecipeInput_, $Recipe, $SingleRecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $Ritual } from "@package/com/klikli_dev/occultism/common/ritual";
import { $HolderLookup$Provider, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Multiblock } from "@package/com/klikli_dev/modonomicon/api/multiblock";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as conditionextension from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension";
export * as result from "@package/com/klikli_dev/occultism/crafting/recipe/result";

declare module "@package/com/klikli_dev/occultism/crafting/recipe" {
    export class $RitualRecipe$RitualRequirementSettings extends $Record {
        duration(): number;
        activationItem(): $Ingredient;
        ingredients(): $NonNullList<$Ingredient>;
        pentacleId(): $ResourceLocation;
        durationPerIngredient(): number;
        static CODEC: $MapCodec<$RitualRecipe$RitualRequirementSettings>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe$RitualRequirementSettings>;
        constructor(pentacleId: $ResourceLocation_, ingredients: $NonNullList<$Ingredient_>, activationItem: $Ingredient_, duration: number, durationPerIngredient: number);
    }
    /**
     * Values that may be interpreted as {@link $RitualRecipe$RitualRequirementSettings}.
     */
    export type $RitualRecipe$RitualRequirementSettings_ = { pentacleId?: $ResourceLocation_, ingredients?: $NonNullList<$Ingredient_>, durationPerIngredient?: number, activationItem?: $Ingredient_, duration?: number,  } | [pentacleId?: $ResourceLocation_, ingredients?: $NonNullList<$Ingredient_>, durationPerIngredient?: number, activationItem?: $Ingredient_, duration?: number, ];
    export class $RitualRecipe$Serializer implements $RecipeSerializer<$RitualRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe>;
        codec(): $MapCodec<$RitualRecipe>;
        constructor();
    }
    export class $RitualRecipe$EntityToSummonSettings extends $Record {
        entityToSummon(): $EntityType<never>;
        spiritJobType(): $ResourceLocation;
        summonNumber(): number;
        entityTagToSummon(): $TagKey<$EntityType<never>>;
        entityNbt(): $CompoundTag;
        spiritMaxAge(): number;
        static CODEC: $MapCodec<$RitualRecipe$EntityToSummonSettings>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe$EntityToSummonSettings>;
        constructor(entityToSummon: $EntityType_<never>, entityTagToSummon: $TagKey_<$EntityType<never>>, entityNbt: $CompoundTag_, spiritJobType: $ResourceLocation_, spiritMaxAge: number, summonNumber: number);
    }
    /**
     * Values that may be interpreted as {@link $RitualRecipe$EntityToSummonSettings}.
     */
    export type $RitualRecipe$EntityToSummonSettings_ = { spiritJobType?: $ResourceLocation_, spiritMaxAge?: number, summonNumber?: number, entityNbt?: $CompoundTag_, entityTagToSummon?: $TagKey_<$EntityType<never>>, entityToSummon?: $EntityType_<never>,  } | [spiritJobType?: $ResourceLocation_, spiritMaxAge?: number, summonNumber?: number, entityNbt?: $CompoundTag_, entityTagToSummon?: $TagKey_<$EntityType<never>>, entityToSummon?: $EntityType_<never>, ];
    export class $RitualRecipe implements $Recipe<$SingleRecipeInput> {
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        matches(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): boolean;
        getType(): $RecipeType<never>;
        getDuration(): number;
        getCondition(): $ICondition;
        isSpecial(): boolean;
        getEntityToSacrificeDisplayName(): string;
        getCommand(): string;
        getRitualDummy(): $ItemStack;
        getEntityToSummon(): $EntityType<never>;
        getEntityNbt(): $CompoundTag;
        getSpiritMaxAge(): number;
        getSpiritJobType(): $ResourceLocation;
        getSummonNumber(): number;
        getRitualType(): $ResourceLocation;
        assemble(arg0: $SingleRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        getSerializer(): $RecipeSerializer<never>;
        getPentacle(): $Multiblock;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        requiresSacrifice(): boolean;
        requiresItemUse(): boolean;
        getActivationItem(): $Ingredient;
        getItemToUse(): $Ingredient;
        getRitual(): $Ritual;
        getDurationPerIngredient(): number;
        getEntityTagToSummon(): $TagKey<$EntityType<never>>;
        getEntityToSacrifice(): $TagKey<$EntityType<never>>;
        getActivationItemStack(): $ItemStack[];
        getPentacleId(): $ResourceLocation;
        getRemainingItems(arg0: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        getGroup(): string;
        isIncomplete(): boolean;
        showNotification(): boolean;
        getToastSymbol(): $ItemStack;
        static CODEC: $MapCodec<$RitualRecipe>;
        static DEFAULT_DURATION: number;
        static SERIALIZER: $RitualRecipe$Serializer;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe>;
        constructor(arg0: $ResourceLocation_, arg1: $RitualRecipe$RitualRequirementSettings_, arg2: $RitualRecipe$RitualStartSettings_, arg3: $RitualRecipe$EntityToSummonSettings_, arg4: $ItemStack_, arg5: $ItemStack_, arg6: string);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $EntityType_<never>, arg5: $TagKey_<$EntityType<never>>, arg6: $CompoundTag_, arg7: $Ingredient_, arg8: $NonNullList<$Ingredient_>, arg9: number, arg10: number, arg11: number, arg12: $ResourceLocation_, arg13: $RitualRecipe$EntityToSacrifice_, arg14: $Ingredient_, arg15: string);
        get type(): $RecipeType<never>;
        get duration(): number;
        get condition(): $ICondition;
        get special(): boolean;
        get entityToSacrificeDisplayName(): string;
        get command(): string;
        get ritualDummy(): $ItemStack;
        get entityToSummon(): $EntityType<never>;
        get entityNbt(): $CompoundTag;
        get spiritMaxAge(): number;
        get spiritJobType(): $ResourceLocation;
        get summonNumber(): number;
        get ritualType(): $ResourceLocation;
        get ingredients(): $NonNullList<$Ingredient>;
        get serializer(): $RecipeSerializer<never>;
        get pentacle(): $Multiblock;
        get activationItem(): $Ingredient;
        get itemToUse(): $Ingredient;
        get ritual(): $Ritual;
        get durationPerIngredient(): number;
        get entityTagToSummon(): $TagKey<$EntityType<never>>;
        get entityToSacrifice(): $TagKey<$EntityType<never>>;
        get activationItemStack(): $ItemStack[];
        get pentacleId(): $ResourceLocation;
        get group(): string;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $RitualRecipe$EntityToSacrifice extends $Record {
        displayName(): string;
        tag(): $TagKey<$EntityType<never>>;
        static CODEC: $MapCodec<$RitualRecipe$EntityToSacrifice>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe$EntityToSacrifice>;
        constructor(tag: $TagKey_<$EntityType<never>>, displayName: string);
    }
    /**
     * Values that may be interpreted as {@link $RitualRecipe$EntityToSacrifice}.
     */
    export type $RitualRecipe$EntityToSacrifice_ = { tag?: $TagKey_<$EntityType<never>>, displayName?: string,  } | [tag?: $TagKey_<$EntityType<never>>, displayName?: string, ];
    export class $RitualRecipe$RitualStartSettings extends $Record {
        condition(): $ICondition;
        getEntityToSacrificeDisplayName(): string;
        entityToSacrifice(): $RitualRecipe$EntityToSacrifice;
        itemToUse(): $Ingredient;
        requiresSacrifice(): boolean;
        requiresItemUse(): boolean;
        static CODEC: $MapCodec<$RitualRecipe$RitualStartSettings>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe$RitualStartSettings>;
        constructor(entityToSacrifice: $RitualRecipe$EntityToSacrifice_, itemToUse: $Ingredient_, condition: $ICondition);
        get entityToSacrificeDisplayName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RitualRecipe$RitualStartSettings}.
     */
    export type $RitualRecipe$RitualStartSettings_ = { itemToUse?: $Ingredient_, entityToSacrifice?: $RitualRecipe$EntityToSacrifice_, condition?: $ICondition,  } | [itemToUse?: $Ingredient_, entityToSacrifice?: $RitualRecipe$EntityToSacrifice_, condition?: $ICondition, ];
}
