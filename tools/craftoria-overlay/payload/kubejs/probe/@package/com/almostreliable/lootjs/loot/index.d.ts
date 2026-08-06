import { $JsonObject_ } from "@package/com/google/gson";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $GroupedLootAction$Builder, $LootAction_, $LootModifier$Builder, $LootAction } from "@package/com/almostreliable/lootjs/loot/modifier";
import { $EntityType_, $EquipmentSlot_, $EntityType, $Entity, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryType_, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $AttributeModifier, $AttributeModifier$Operation_, $Attribute, $Attribute_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ModifyLootAction$Callback_ } from "@package/com/almostreliable/lootjs/loot/modifier/handler";
import { $Set_, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $Consumer_, $BiFunction, $Predicate_, $Predicate, $Function_, $UnaryOperator_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderSet_, $BlockPos_, $HolderLookup$Provider, $Holder_, $WritableRegistry } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $LootType_ } from "@package/com/almostreliable/lootjs/core";
import { $ItemFilter_, $IdFilter_, $LootTableFilter } from "@package/com/almostreliable/lootjs/core/filters";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ValidationContext, $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Explosion$BlockInteraction_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LootItemFunctionType, $LootItemFunctionType_, $LootItemFunction$Builder, $SetEnchantmentsFunction$Builder, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $StatePropertiesPredicate_, $EntityPredicate_, $MinMaxBounds$Ints_, $LocationPredicate_, $DistancePredicate_, $EnchantmentPredicate_, $NbtPredicate, $DamageSourcePredicate_, $ItemPredicate_, $ItemEnchantmentsPredicate, $EnchantmentPredicate, $MinMaxBounds$Doubles_ } from "@package/net/minecraft/advancements/critereon";
import { $Potion_ } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $LootItemConditionType_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ListHolder, $BlockFilter, $DebugInfo } from "@package/com/almostreliable/lootjs/util";
import { $ItemLootEntry, $LootEntry, $SimpleLootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTableList, $MutableLootTable, $LootEntryAppender, $MutableLootPool, $LootEntriesTransformer } from "@package/com/almostreliable/lootjs/loot/table";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as modifier from "@package/com/almostreliable/lootjs/loot/modifier";
export * as table from "@package/com/almostreliable/lootjs/loot/table";
export * as extension from "@package/com/almostreliable/lootjs/loot/extension";

declare module "@package/com/almostreliable/lootjs/loot" {
    export class $LootFunctionsContainer<F> {
    }
    export interface $LootFunctionsContainer<F> {
        setName(arg0: $Component_): F;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): F;
        setCount(arg0: $NumberProvider_): F;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): F;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): F;
        addLore(...arg0: $Component_[]): F;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): F;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): F;
        addPotion(arg0: $Potion_): F;
        damage(arg0: $NumberProvider_): F;
        enchantWithLevels(arg0: $NumberProvider_): F;
        setCustomData(arg0: $CompoundTag_): F;
        smelt(): F;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): F;
        enchantRandomly(): F;
        jsonFunction(arg0: $JsonObject_): F;
        replaceLore(...arg0: $Component_[]): F;
        applyOreBonus(arg0: $Holder_<$Enchantment>): F;
        toggleTooltips(arg0: $Map_<string, boolean>): F;
        addFunction(arg0: $LootItemFunction): F;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): F;
        applyEnchantmentBonus(arg0: $NumberProvider_): F;
        simulateExplosionDecay(): F;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): F;
        set name(value: $Component_);
        set count(value: $NumberProvider_);
        set customData(value: $CompoundTag_);
    }
    /**
     * Values that may be interpreted as {@link $LootFunctionsContainer}.
     */
    export type $LootFunctionsContainer_<F> = ((arg0: $LootItemFunction) => F);
    export class $Predicates {
        static lookup(): $HolderLookup$Provider;
        static itemEnchantments(arg0: $EnchantmentPredicate_[]): $ItemEnchantmentsPredicate;
        static enchantment(arg0: $IdFilter_, arg1: $MinMaxBounds$Ints_): $EnchantmentPredicate;
        static enchantment(arg0: $IdFilter_): $EnchantmentPredicate;
        static storedEnchantments(arg0: $EnchantmentPredicate_[]): $ItemEnchantmentsPredicate;
        static nbt(arg0: $CompoundTag_): $NbtPredicate;
    }
    export interface $Predicates {
    }
    export class $AddAttributesFunction$Modifier {
        createAttributeModifier(arg0: $LootContext): $AttributeModifier;
        constructor(arg0: number, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_, arg4: $ResourceLocation_, arg5: $Set_<$EquipmentSlotGroup_>);
    }
    export class $LootCondition implements $LootConditionsContainer<$LootItemCondition> {
        matchLocation(arg0: $LocationPredicate_): $LootItemCondition;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): $LootItemCondition;
        blockEntity(arg0: $Predicate_<$BlockEntity>): $LootItemCondition;
        survivesExplosion(): $LootItemCondition;
        killedByPlayer(): $LootItemCondition;
        randomChance(arg0: $NumberProvider_): $LootItemCondition;
        matchTool(arg0: $ItemPredicate_): $LootItemCondition;
        luck(arg0: $MinMaxBounds$Doubles_): $LootItemCondition;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootItemCondition;
        matchAnyInventorySlot(arg0: $ItemFilter_): $LootItemCondition;
        matchCustomCondition(arg0: $JsonObject_): $LootItemCondition;
        matchDirectAttacker(arg0: $EntityPredicate_): $LootItemCondition;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        isLightLevel(arg0: number, arg1: number): $LootItemCondition;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): $LootItemCondition;
        matchAttacker(arg0: $EntityPredicate_): $LootItemCondition;
        matchPlayer(arg0: $EntityPredicate_): $LootItemCondition;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): $LootItemCondition;
        matchStructure(arg0: $HolderSet_<$Structure>): $LootItemCondition;
        matchWeather(arg0: boolean | null, arg1: boolean | null): $LootItemCondition;
        hasAnyStage(...arg0: string[]): $LootItemCondition;
        matchAnyHotbarSlot(arg0: $ItemFilter_): $LootItemCondition;
        matchDimension(...arg0: $ResourceLocation_[]): $LootItemCondition;
        matchEntityCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        matchMainHand(arg0: $ItemFilter_): $LootItemCondition;
        matchOffHand(arg0: $ItemFilter_): $LootItemCondition;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootItemCondition;
        matchDamageSource(arg0: $DamageSourcePredicate_): $LootItemCondition;
        matchDistance(arg0: $DistancePredicate_): $LootItemCondition;
        matchEntity(arg0: $EntityPredicate_): $LootItemCondition;
        matchAnyOf(...arg0: $LootItemCondition[]): $LootItemCondition;
        matchChest(arg0: $ItemFilter_): $LootItemCondition;
        matchBiome(arg0: $HolderSet_<$Biome>): $LootItemCondition;
        matchHead(arg0: $ItemFilter_): $LootItemCondition;
        matchLegs(arg0: $ItemFilter_): $LootItemCondition;
        matchBlock(arg0: $Block_): $LootItemCondition;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): $LootItemCondition;
        matchFeet(arg0: $ItemFilter_): $LootItemCondition;
        matchAllOf(...arg0: $LootItemCondition[]): $LootItemCondition;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): $LootItemCondition;
        matchTime(arg0: number, arg1: number): $LootItemCondition;
        matchTime(arg0: number, arg1: number, arg2: number): $LootItemCondition;
        constructor();
    }
    export class $LootConditionList extends $ListHolder<$LootItemCondition, $LootItemCondition> implements $LootConditionsContainer<$LootConditionList>, $Predicate<$LootContext> {
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootItemConditionType_): number;
        test(arg0: $LootContext): boolean;
        lastIndexOf(arg0: $LootItemConditionType_): number;
        contains(arg0: $LootItemConditionType_): boolean;
        collectDebugInfo(arg0: $DebugInfo): void;
        matchLocation(arg0: $LocationPredicate_): $LootConditionList;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): $LootConditionList;
        blockEntity(arg0: $Predicate_<$BlockEntity>): $LootConditionList;
        survivesExplosion(): $LootConditionList;
        killedByPlayer(): $LootConditionList;
        randomChance(arg0: $NumberProvider_): $LootConditionList;
        matchTool(arg0: $ItemPredicate_): $LootConditionList;
        luck(arg0: $MinMaxBounds$Doubles_): $LootConditionList;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootConditionList;
        matchAnyInventorySlot(arg0: $ItemFilter_): $LootConditionList;
        matchCustomCondition(arg0: $JsonObject_): $LootConditionList;
        matchDirectAttacker(arg0: $EntityPredicate_): $LootConditionList;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        isLightLevel(arg0: number, arg1: number): $LootConditionList;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): $LootConditionList;
        matchAttacker(arg0: $EntityPredicate_): $LootConditionList;
        matchPlayer(arg0: $EntityPredicate_): $LootConditionList;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): $LootConditionList;
        matchStructure(arg0: $HolderSet_<$Structure>): $LootConditionList;
        matchWeather(arg0: boolean | null, arg1: boolean | null): $LootConditionList;
        hasAnyStage(...arg0: string[]): $LootConditionList;
        matchAnyHotbarSlot(arg0: $ItemFilter_): $LootConditionList;
        matchDimension(...arg0: $ResourceLocation_[]): $LootConditionList;
        matchEntityCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        matchMainHand(arg0: $ItemFilter_): $LootConditionList;
        matchOffHand(arg0: $ItemFilter_): $LootConditionList;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootConditionList;
        matchDamageSource(arg0: $DamageSourcePredicate_): $LootConditionList;
        matchDistance(arg0: $DistancePredicate_): $LootConditionList;
        matchEntity(arg0: $EntityPredicate_): $LootConditionList;
        matchAnyOf(...arg0: $LootItemCondition[]): $LootConditionList;
        matchChest(arg0: $ItemFilter_): $LootConditionList;
        matchBiome(arg0: $HolderSet_<$Biome>): $LootConditionList;
        matchHead(arg0: $ItemFilter_): $LootConditionList;
        matchLegs(arg0: $ItemFilter_): $LootConditionList;
        matchBlock(arg0: $Block_): $LootConditionList;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): $LootConditionList;
        matchFeet(arg0: $ItemFilter_): $LootConditionList;
        matchAllOf(...arg0: $LootItemCondition[]): $LootConditionList;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): $LootConditionList;
        matchTime(arg0: number, arg1: number): $LootConditionList;
        matchTime(arg0: number, arg1: number, arg2: number): $LootConditionList;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        addCondition(arg0: $LootItemCondition): $LootConditionList;
        constructor();
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {
        add(arg0: $AddAttributesFunction$Modifier): $AddAttributesFunction$Builder;
        add(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_, arg3: $Consumer_<$AddAttributesFunction$Modifier$Builder>): $AddAttributesFunction$Builder;
        build(): $AddAttributesFunction;
        simple(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_): $AddAttributesFunction$Builder;
        simple(arg0: number, arg1: $Attribute_, arg2: $ResourceLocation_, arg3: $NumberProvider_): $AddAttributesFunction$Builder;
        forSlots(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_, arg3: $EquipmentSlotGroup_[]): $AddAttributesFunction$Builder;
        forSlots(arg0: number, arg1: $Attribute_, arg2: $ResourceLocation_, arg3: $NumberProvider_, arg4: $EquipmentSlotGroup_[]): $AddAttributesFunction$Builder;
        preserveDefaults(arg0: boolean): $AddAttributesFunction$Builder;
        constructor();
    }
    export class $AddAttributesFunction$Modifier$Builder {
        build(): $AddAttributesFunction$Modifier;
        setSlots(arg0: $EquipmentSlotGroup_[]): void;
        setOperation(arg0: $AttributeModifier$Operation_): void;
        setProbability(arg0: number): void;
        constructor(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_);
        set slots(value: $EquipmentSlotGroup_[]);
        set operation(value: $AttributeModifier$Operation_);
        set probability(value: number);
    }
    export class $LootModificationEvent {
        enableLogging(): void;
        addBlockModifier(arg0: $BlockFilter): $LootModifier$Builder;
        /**
         * @deprecated
         */
        addTypeModifier(...arg0: $LootType_[]): $LootModifier$Builder;
        addEntityModifier(arg0: $HolderSet_<$EntityType<never>>): $LootModifier$Builder;
        getGlobalModifiers(): $List<string>;
        addTableModifier(...arg0: $LootTableFilter[]): $LootModifier$Builder;
        disableSkeletonHeadDrop(): void;
        disableZombieHeadDrop(): void;
        removeGlobalModifiers(...arg0: $IdFilter_[]): void;
        disableLootModification(...arg0: $IdFilter_[]): void;
        disableCreeperHeadDrop(): void;
        disableWitherStarDrop(): void;
        constructor(arg0: $Map_<$ResourceLocation_, $IGlobalLootModifier>);
        get globalModifiers(): $List<string>;
    }
    export class $AddAttributesFunction implements $LootItemFunction {
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        getType(): $LootItemFunctionType<any>;
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        constructor(arg0: boolean, arg1: $List_<$AddAttributesFunction$Modifier>);
        get type(): $LootItemFunctionType<any>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootConditionsContainer<C> {
    }
    export interface $LootConditionsContainer<C> {
        matchLocation(arg0: $LocationPredicate_): C;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): C;
        blockEntity(arg0: $Predicate_<$BlockEntity>): C;
        survivesExplosion(): C;
        killedByPlayer(): C;
        randomChance(arg0: $NumberProvider_): C;
        addCondition(arg0: $LootItemCondition): C;
        matchTool(arg0: $ItemPredicate_): C;
        luck(arg0: $MinMaxBounds$Doubles_): C;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): C;
        matchAnyInventorySlot(arg0: $ItemFilter_): C;
        matchCustomCondition(arg0: $JsonObject_): C;
        matchDirectAttacker(arg0: $EntityPredicate_): C;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): C;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): C;
        isLightLevel(arg0: number, arg1: number): C;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): C;
        matchAttacker(arg0: $EntityPredicate_): C;
        matchPlayer(arg0: $EntityPredicate_): C;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): C;
        matchStructure(arg0: $HolderSet_<$Structure>): C;
        matchWeather(arg0: boolean | null, arg1: boolean | null): C;
        hasAnyStage(...arg0: string[]): C;
        matchAnyHotbarSlot(arg0: $ItemFilter_): C;
        matchDimension(...arg0: $ResourceLocation_[]): C;
        matchEntityCustom(arg0: $Predicate_<$Entity>): C;
        matchMainHand(arg0: $ItemFilter_): C;
        matchOffHand(arg0: $ItemFilter_): C;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): C;
        matchDamageSource(arg0: $DamageSourcePredicate_): C;
        matchDistance(arg0: $DistancePredicate_): C;
        matchEntity(arg0: $EntityPredicate_): C;
        matchAnyOf(...arg0: $LootItemCondition[]): C;
        matchChest(arg0: $ItemFilter_): C;
        matchBiome(arg0: $HolderSet_<$Biome>): C;
        matchHead(arg0: $ItemFilter_): C;
        matchLegs(arg0: $ItemFilter_): C;
        matchBlock(arg0: $Block_): C;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): C;
        matchFeet(arg0: $ItemFilter_): C;
        matchAllOf(...arg0: $LootItemCondition[]): C;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): C;
        matchTime(arg0: number, arg1: number): C;
        matchTime(arg0: number, arg1: number, arg2: number): C;
    }
    /**
     * Values that may be interpreted as {@link $LootConditionsContainer}.
     */
    export type $LootConditionsContainer_<C> = ((arg0: $LootItemCondition) => C);
    export class $LootTableEvent {
        create(arg0: $ResourceLocation_, arg1: $LootType_): $MutableLootTable;
        create(arg0: $ResourceLocation_): $MutableLootTable;
        getLootTable(arg0: $ResourceLocation_): $MutableLootTable;
        hasLootTable(arg0: $ResourceLocation_): boolean;
        /**
         * @deprecated
         */
        modifyLootTypeTables(...arg0: $LootType_[]): $LootTableList;
        getBlockTable(arg0: $Block_): $MutableLootTable;
        forEachTable(arg0: $IdFilter_, arg1: $Consumer_<$MutableLootTable>): void;
        forEachTable(arg0: $Consumer_<$MutableLootTable>): void;
        modifyLootTables(...arg0: $LootTableFilter[]): $LootTableList;
        modifyBlockTables(arg0: $IdFilter_): $LootTableList;
        getLootTableIds(): $Set<$ResourceLocation>;
        getLootTableIds(arg0: $IdFilter_): $Set<$ResourceLocation>;
        getEntityTable(arg0: $EntityType_<never>): $MutableLootTable;
        modifyEntityTables(arg0: $IdFilter_): $LootTableList;
        clearLootTables(arg0: $IdFilter_): void;
        constructor(arg0: $WritableRegistry<$LootTable>);
    }
    export class $LootActionContainer<A extends $LootActionContainer<never>> {
    }
    export interface $LootActionContainer<A extends $LootActionContainer<never>> {
        modifyLoot(arg0: $ItemFilter_, arg1: $ModifyLootAction$Callback_): A;
        group(arg0: $ItemFilter_, arg1: $Consumer_<$GroupedLootAction$Builder>): A;
        group(arg0: $Consumer_<$GroupedLootAction$Builder>): A;
        pool(arg0: $Consumer_<$MutableLootPool>): A;
        addLoot(...arg0: $LootEntry[]): A;
        addAction(arg0: $LootAction_): A;
        dropExperience(arg0: $NumberProvider_): A;
        removeLoot(arg0: $ItemFilter_): A;
        triggerExplosion(arg0: number, arg1: $Explosion$BlockInteraction_, arg2: boolean): A;
        triggerExplosion(arg0: number, arg1: boolean, arg2: boolean): A;
        playerAction(arg0: $Consumer_<$ServerPlayer>): A;
        addSequenceLoot(...arg0: $LootEntry[]): A;
        customAction(arg0: $LootAction_): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean, arg3: $DataComponentType_<never>[]): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean): A;
        addAlternativesLoot(...arg0: $LootEntry[]): A;
        triggerLightningStrike(arg0: boolean): A;
    }
    /**
     * Values that may be interpreted as {@link $LootActionContainer}.
     */
    export type $LootActionContainer_<A> = ((arg0: $LootAction) => A);
    export class $LootFunction extends $Record implements $LootFunctionsContainer<$LootItemFunction> {
        addFunction(arg0: $LootItemFunction): $LootItemFunction;
        setName(arg0: $Component_): $LootItemFunction;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): $LootItemFunction;
        setCount(arg0: $NumberProvider_): $LootItemFunction;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): $LootItemFunction;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): $LootItemFunction;
        addLore(...arg0: $Component_[]): $LootItemFunction;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootItemFunction;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootItemFunction;
        addPotion(arg0: $Potion_): $LootItemFunction;
        damage(arg0: $NumberProvider_): $LootItemFunction;
        enchantWithLevels(arg0: $NumberProvider_): $LootItemFunction;
        setCustomData(arg0: $CompoundTag_): $LootItemFunction;
        smelt(): $LootItemFunction;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): $LootItemFunction;
        enchantRandomly(): $LootItemFunction;
        jsonFunction(arg0: $JsonObject_): $LootItemFunction;
        replaceLore(...arg0: $Component_[]): $LootItemFunction;
        applyOreBonus(arg0: $Holder_<$Enchantment>): $LootItemFunction;
        toggleTooltips(arg0: $Map_<string, boolean>): $LootItemFunction;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $LootItemFunction;
        applyEnchantmentBonus(arg0: $NumberProvider_): $LootItemFunction;
        simulateExplosionDecay(): $LootItemFunction;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootItemFunction;
        constructor();
        set name(value: $Component_);
        set count(value: $NumberProvider_);
        set customData(value: $CompoundTag_);
    }
    /**
     * Values that may be interpreted as {@link $LootFunction}.
     */
    export type $LootFunction_ = {  } | [];
    export class $LootEntryList extends $ListHolder<$LootEntry, $LootPoolEntryContainer> implements $LootEntriesTransformer, $LootEntryAppender {
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootPoolEntryType_): number;
        lastIndexOf(arg0: $LootPoolEntryType_): number;
        contains(arg0: $LootPoolEntryType_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootEntryList;
        modify(arg0: $UnaryOperator_<$LootEntry>): void;
        collectDebugInfo(arg0: $DebugInfo): void;
        createVanillaArray(): $List<$LootPoolEntryContainer>;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        addCustomEntry(arg0: $JsonObject_): $LootEntryAppender;
        addEntry(arg0: $LootEntry): $LootEntryAppender;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        constructor(arg0: $List_<$LootPoolEntryContainer>);
        constructor(...arg0: $LootEntry[]);
        constructor();
    }
    export class $LootFunctionList extends $ListHolder<$LootItemFunction, $LootItemFunction> implements $LootFunctionsContainer<$LootFunctionList>, $BiFunction<$ItemStack, $LootContext, $ItemStack> {
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootItemFunctionType_<never>): number;
        lastIndexOf(arg0: $LootItemFunctionType_<never>): number;
        replace(arg0: $LootItemFunctionType_<never>, arg1: $LootItemFunction): boolean;
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        contains(arg0: $LootItemFunctionType_<never>): boolean;
        collectDebugInfo(arg0: $DebugInfo): void;
        addFunction(arg0: $LootItemFunction): $LootFunctionList;
        setName(arg0: $Component_): $LootFunctionList;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): $LootFunctionList;
        setCount(arg0: $NumberProvider_): $LootFunctionList;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): $LootFunctionList;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): $LootFunctionList;
        addLore(...arg0: $Component_[]): $LootFunctionList;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootFunctionList;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootFunctionList;
        addPotion(arg0: $Potion_): $LootFunctionList;
        damage(arg0: $NumberProvider_): $LootFunctionList;
        enchantWithLevels(arg0: $NumberProvider_): $LootFunctionList;
        setCustomData(arg0: $CompoundTag_): $LootFunctionList;
        smelt(): $LootFunctionList;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): $LootFunctionList;
        enchantRandomly(): $LootFunctionList;
        jsonFunction(arg0: $JsonObject_): $LootFunctionList;
        replaceLore(...arg0: $Component_[]): $LootFunctionList;
        applyOreBonus(arg0: $Holder_<$Enchantment>): $LootFunctionList;
        toggleTooltips(arg0: $Map_<string, boolean>): $LootFunctionList;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $LootFunctionList;
        applyEnchantmentBonus(arg0: $NumberProvider_): $LootFunctionList;
        simulateExplosionDecay(): $LootFunctionList;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootFunctionList;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        constructor();
        constructor(arg0: $List_<$LootItemFunction>);
        set name(value: $Component_);
        set count(value: $NumberProvider_);
        set customData(value: $CompoundTag_);
    }
}
