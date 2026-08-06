import { $JsonObject_ } from "@package/com/google/gson";
import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $List } from "@package/java/util";
import { $RecipeComponentValue, $RecipeComponentType, $UniqueIdBuilder_, $RecipeComponent, $ListRecipeComponent, $EitherRecipeComponent, $RecipeValidationContext, $RecipeComponentBuilder, $ComponentRole_ } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $KubeRecipe, $RecipeKey, $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Holder_ } from "@package/net/minecraft/core";
import { $TinyMap, $OpsContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $RitualRecipe$EntityToSacrifice_, $RitualRecipe$EntityToSacrifice } from "@package/com/klikli_dev/occultism/crafting/recipe";
import { $IsInDimensionCondition, $IsInBiomeCondition, $IsInDimensionTypeCondition, $IsInBiomeWithTagCondition } from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/condition";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $WeightedRecipeResult, $RecipeResult } from "@package/com/klikli_dev/occultism/crafting/recipe/result";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Record, $Object } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";

declare module "@package/com/klikli_dev/occultism_kubejs/component" {
    export class $IsInDimensionConditionWrapper {
        /**
         * Returns an IsInDimensionCondition of the input
         */
        static of(arg0: $IsInDimensionCondition): $IsInDimensionCondition;
        /**
         * Returns an IsInDimensionCondition of the input
         */
        static of(arg0: $ResourceKey_<$Level>): $IsInDimensionCondition;
    }
    export interface $IsInDimensionConditionWrapper {
    }
    export class $WeightedRecipeResultComponent extends $Record implements $RecipeComponent<$WeightedRecipeResult> {
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$WeightedRecipeResult>;
        toString(ops: $OpsContainer, value: $WeightedRecipeResult): string;
        isEmpty(value: $WeightedRecipeResult): boolean;
        replace(cx: $RecipeScriptContext, original: $WeightedRecipeResult, match: $ReplacementMatchInfo_, arg3: $Object): $WeightedRecipeResult;
        matches(cx: $RecipeMatchContext, value: $WeightedRecipeResult, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $WeightedRecipeResult): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$WeightedRecipeResult>;
        asList(): $ListRecipeComponent<$WeightedRecipeResult>;
        spread(value: $WeightedRecipeResult): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$WeightedRecipeResult, O>;
        inputKey(name: string): $RecipeKey<$WeightedRecipeResult>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        createBuilder(): $RecipeComponentBuilder;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $WeightedRecipeResult>>;
        otherKey(name: string): $RecipeKey<$WeightedRecipeResult>;
        orSelf(): $RecipeComponent<$WeightedRecipeResult>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$WeightedRecipeResult>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$WeightedRecipeResult>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $WeightedRecipeResult): void;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $WeightedRecipeResult>>;
        asConditionalList(): $ListRecipeComponent<$WeightedRecipeResult>;
        asListOrSelf(): $ListRecipeComponent<$WeightedRecipeResult>;
        outputKey(name: string): $RecipeKey<$WeightedRecipeResult>;
        asConditionalListOrSelf(): $ListRecipeComponent<$WeightedRecipeResult>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        withCodec(codec: $Codec_<$WeightedRecipeResult>): $RecipeComponent<$WeightedRecipeResult>;
        wrap(cx: $RecipeScriptContext, from: $Object): $WeightedRecipeResult;
        static TYPE_INFO: $TypeInfo;
        static WEIGHTED_RECIPE_RESULT: $RecipeComponentType<$WeightedRecipeResult>;
        constructor(codec: $Codec_<$WeightedRecipeResult>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WeightedRecipeResultComponent}.
     */
    export type $WeightedRecipeResultComponent_ = { codec?: $Codec_<$WeightedRecipeResult>,  } | [codec?: $Codec_<$WeightedRecipeResult>, ];
    export class $IsInBiomeWithTagConditionWrapper {
        /**
         * Returns an IsInBiomeWithTagCondition of the input
         */
        static of(arg0: $IsInBiomeWithTagCondition): $IsInBiomeWithTagCondition;
        /**
         * Returns an IsInBiomeWithTagCondition of the input
         */
        static of(arg0: $TagKey_<$Biome>): $IsInBiomeWithTagCondition;
    }
    export interface $IsInBiomeWithTagConditionWrapper {
    }
    export class $IsInBiomeConditionWrapper {
        /**
         * Returns an IsInBiomeCondition of the input
         */
        static of(arg0: $IsInBiomeCondition): $IsInBiomeCondition;
        /**
         * Returns an IsInBiomeCondition of the input
         */
        static of(arg0: $Holder_<$Biome>): $IsInBiomeCondition;
    }
    export interface $IsInBiomeConditionWrapper {
    }
    export class $RecipeResultWrapper {
        static wrap(arg1: $Object): $RecipeResult;
        /**
         * Returns an RecipeResult of the input
         */
        static of(arg0: $RecipeResult): $RecipeResult;
        /**
         * Returns an RecipeResult of the input
         */
        static of(arg0: $RecipeResult, arg1: number): $RecipeResult;
        static read(arg1: $StringReader): $RecipeResult;
        static ofString(arg1: string): $RecipeResult;
    }
    export interface $RecipeResultWrapper {
    }
    export class $RecipeResultComponent extends $Record implements $RecipeComponent<$RecipeResult> {
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$RecipeResult>;
        toString(ops: $OpsContainer, value: $RecipeResult): string;
        isEmpty(value: $RecipeResult): boolean;
        replace(cx: $RecipeScriptContext, original: $RecipeResult, match: $ReplacementMatchInfo_, arg3: $Object): $RecipeResult;
        matches(cx: $RecipeMatchContext, value: $RecipeResult, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $RecipeResult): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$RecipeResult>;
        asList(): $ListRecipeComponent<$RecipeResult>;
        spread(value: $RecipeResult): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$RecipeResult, O>;
        inputKey(name: string): $RecipeKey<$RecipeResult>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        createBuilder(): $RecipeComponentBuilder;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $RecipeResult>>;
        otherKey(name: string): $RecipeKey<$RecipeResult>;
        orSelf(): $RecipeComponent<$RecipeResult>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$RecipeResult>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$RecipeResult>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $RecipeResult): void;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $RecipeResult>>;
        asConditionalList(): $ListRecipeComponent<$RecipeResult>;
        asListOrSelf(): $ListRecipeComponent<$RecipeResult>;
        outputKey(name: string): $RecipeKey<$RecipeResult>;
        asConditionalListOrSelf(): $ListRecipeComponent<$RecipeResult>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        withCodec(codec: $Codec_<$RecipeResult>): $RecipeComponent<$RecipeResult>;
        wrap(cx: $RecipeScriptContext, from: $Object): $RecipeResult;
        static RECIPE_RESULT: $RecipeComponentType<$RecipeResult>;
        static TYPE_INFO: $TypeInfo;
        constructor(codec: $Codec_<$RecipeResult>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecipeResultComponent}.
     */
    export type $RecipeResultComponent_ = { codec?: $Codec_<$RecipeResult>,  } | [codec?: $Codec_<$RecipeResult>, ];
    export class $EntityToSacrificeWrapper {
        /**
         * Returns an RitualRecipe.EntityToSacrifice of the input
         */
        static of(arg0: $RitualRecipe$EntityToSacrifice_): $RitualRecipe$EntityToSacrifice;
        /**
         * Returns an RitualRecipe.EntityToSacrifice of the input
         */
        static of(arg0: $TagKey_<$EntityType<never>>, arg1: string): $RitualRecipe$EntityToSacrifice;
    }
    export interface $EntityToSacrificeWrapper {
    }
    export class $IsInDimensionTypeConditionWrapper {
        /**
         * Returns an IsInDimensionTypeCondition of the input
         */
        static of(arg0: $IsInDimensionTypeCondition): $IsInDimensionTypeCondition;
        /**
         * Returns an IsInDimensionTypeCondition of the input
         */
        static of(arg0: $Holder_<$DimensionType>): $IsInDimensionTypeCondition;
    }
    export interface $IsInDimensionTypeConditionWrapper {
    }
    export class $EntityToSacrificeComponent extends $Record implements $RecipeComponent<$RitualRecipe$EntityToSacrifice> {
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$RitualRecipe$EntityToSacrifice>;
        toString(ops: $OpsContainer, value: $RitualRecipe$EntityToSacrifice_): string;
        isEmpty(value: $RitualRecipe$EntityToSacrifice_): boolean;
        replace(cx: $RecipeScriptContext, original: $RitualRecipe$EntityToSacrifice_, match: $ReplacementMatchInfo_, arg3: $Object): $RitualRecipe$EntityToSacrifice;
        matches(cx: $RecipeMatchContext, value: $RitualRecipe$EntityToSacrifice_, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $RitualRecipe$EntityToSacrifice_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$RitualRecipe$EntityToSacrifice>;
        asList(): $ListRecipeComponent<$RitualRecipe$EntityToSacrifice>;
        spread(value: $RitualRecipe$EntityToSacrifice_): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$RitualRecipe$EntityToSacrifice, O>;
        inputKey(name: string): $RecipeKey<$RitualRecipe$EntityToSacrifice>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        createBuilder(): $RecipeComponentBuilder;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $RitualRecipe$EntityToSacrifice>>;
        otherKey(name: string): $RecipeKey<$RitualRecipe$EntityToSacrifice>;
        orSelf(): $RecipeComponent<$RitualRecipe$EntityToSacrifice>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$RitualRecipe$EntityToSacrifice_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$RitualRecipe$EntityToSacrifice_>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $RitualRecipe$EntityToSacrifice_): void;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $RitualRecipe$EntityToSacrifice>>;
        asConditionalList(): $ListRecipeComponent<$RitualRecipe$EntityToSacrifice>;
        asListOrSelf(): $ListRecipeComponent<$RitualRecipe$EntityToSacrifice>;
        outputKey(name: string): $RecipeKey<$RitualRecipe$EntityToSacrifice>;
        asConditionalListOrSelf(): $ListRecipeComponent<$RitualRecipe$EntityToSacrifice>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        withCodec(codec: $Codec_<$RitualRecipe$EntityToSacrifice_>): $RecipeComponent<$RitualRecipe$EntityToSacrifice>;
        wrap(cx: $RecipeScriptContext, from: $Object): $RitualRecipe$EntityToSacrifice;
        static ENTITY_TO_SACRIFICE: $RecipeComponentType<$RitualRecipe$EntityToSacrifice>;
        static TYPE_INFO: $TypeInfo;
        constructor(codec: $Codec_<$RitualRecipe$EntityToSacrifice_>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EntityToSacrificeComponent}.
     */
    export type $EntityToSacrificeComponent_ = { codec?: $Codec_<$RitualRecipe$EntityToSacrifice_>,  } | [codec?: $Codec_<$RitualRecipe$EntityToSacrifice_>, ];
    export class $WeightedRecipeResultWrapper {
        static wrap(arg1: $Object): $WeightedRecipeResult;
        /**
         * Returns an WeightedRecipeResult of the input
         */
        static of(arg0: $WeightedRecipeResult): $WeightedRecipeResult;
        static of(arg0: $WeightedRecipeResult, arg1: number, arg2: number): $WeightedRecipeResult;
        /**
         * Returns an WeightedRecipeResult of the input
         */
        static of(arg0: $WeightedRecipeResult, arg1: number): $WeightedRecipeResult;
        static read(arg1: $StringReader): $WeightedRecipeResult;
        static ofString(arg1: string): $WeightedRecipeResult;
    }
    export interface $WeightedRecipeResultWrapper {
    }
    export class $ConditionComponent extends $Record implements $RecipeComponent<$ICondition> {
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$ICondition>;
        toString(ops: $OpsContainer, value: $ICondition): string;
        isEmpty(value: $ICondition): boolean;
        replace(cx: $RecipeScriptContext, original: $ICondition, match: $ReplacementMatchInfo_, arg3: $Object): $ICondition;
        matches(cx: $RecipeMatchContext, value: $ICondition, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $ICondition): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$ICondition>;
        asList(): $ListRecipeComponent<$ICondition>;
        spread(value: $ICondition): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$ICondition, O>;
        inputKey(name: string): $RecipeKey<$ICondition>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        createBuilder(): $RecipeComponentBuilder;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $ICondition>>;
        otherKey(name: string): $RecipeKey<$ICondition>;
        orSelf(): $RecipeComponent<$ICondition>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ICondition>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ICondition>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $ICondition): void;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $ICondition>>;
        asConditionalList(): $ListRecipeComponent<$ICondition>;
        asListOrSelf(): $ListRecipeComponent<$ICondition>;
        outputKey(name: string): $RecipeKey<$ICondition>;
        asConditionalListOrSelf(): $ListRecipeComponent<$ICondition>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        withCodec(codec: $Codec_<$ICondition>): $RecipeComponent<$ICondition>;
        wrap(cx: $RecipeScriptContext, from: $Object): $ICondition;
        static TYPE_INFO: $TypeInfo;
        static CONDITION: $RecipeComponentType<$ICondition>;
        constructor(codec: $Codec_<$ICondition>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConditionComponent}.
     */
    export type $ConditionComponent_ = { codec?: $Codec_<$ICondition>,  } | [codec?: $Codec_<$ICondition>, ];
}
