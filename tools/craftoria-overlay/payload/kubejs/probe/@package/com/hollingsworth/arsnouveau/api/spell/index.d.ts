import { $Glyph } from "@package/com/hollingsworth/arsnouveau/common/items";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ConcurrentHashMap } from "@package/java/util/concurrent";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $DelayedSpellEvent, $SpellCastEvent } from "@package/com/hollingsworth/arsnouveau/api/event";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Map_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $TimelineMap, $TimelineMap_, $IParticleTimeline, $TimelineEntryData, $IParticleTimelineType_ } from "@package/com/hollingsworth/arsnouveau/api/particle/timelines";
import { $DocAssets$BlitInfo, $DocAssets$BlitInfo_ } from "@package/com/hollingsworth/arsnouveau/api/documentation";
import { $ConfiguredSpellSound } from "@package/com/hollingsworth/arsnouveau/api/sound";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ISummon } from "@package/com/hollingsworth/arsnouveau/api/entity";
import { $IWrappedCaster } from "@package/com/hollingsworth/arsnouveau/api/spell/wrapped_caster";
import { $SpellPartConfigUtil$AugmentLimits, $SpellPartConfigUtil$ComboLimits, $SpellPartConfigUtil$AugmentCosts } from "@package/com/hollingsworth/arsnouveau/common/util";
import { $SpellSchoolAccessor } from "@package/com/alexthw/sauce/mixin";
import { $ISpellModifier } from "@package/com/hollingsworth/arsnouveau/api/item";
import { $Record, $Cloneable, $Comparable, $Object, $Iterable } from "@package/java/lang";
import { $ModConfigSpec$DoubleValue, $ModConfigSpec$Builder, $ModConfigSpec$BooleanValue, $ModConfigSpec$IntValue, $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Serializable } from "@package/java/io";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ParticleColor } from "@package/com/hollingsworth/arsnouveau/client/particle";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ParticleEmitter } from "@package/com/hollingsworth/arsnouveau/api/particle";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $HitResult, $Vec3, $EntityHitResult, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as wrapped_caster from "@package/com/hollingsworth/arsnouveau/api/spell/wrapped_caster";

declare module "@package/com/hollingsworth/arsnouveau/api/spell" {
    export class $SpellTier {
        /**
         * @deprecated
         */
        static createTier(arg0: $ResourceLocation_, arg1: number): $SpellTier;
        static createTier(arg0: $ResourceLocation_, arg1: number, arg2: $Supplier_<$DocAssets$BlitInfo>): $SpellTier;
        static ONE: $SpellTier;
        static CREATIVE: $SpellTier;
        docInfo: $Supplier<$DocAssets$BlitInfo>;
        id: $ResourceLocation;
        static SPELL_TIER_MAP: $ConcurrentHashMap<number, $SpellTier>;
        static TWO: $SpellTier;
        value: number;
        static THREE: $SpellTier;
    }
    export class $SpellContext implements $Cloneable {
        clone(): $SpellContext;
        stop(): void;
        delay(arg0: $DelayedSpellEvent): void;
        /**
         * @deprecated
         */
        getType(): $SpellContext$CasterType;
        /**
         * @deprecated
         */
        setColors(arg0: $ParticleColor): void;
        isCanceled(): boolean;
        /**
         * @deprecated
         */
        getColors(): $ParticleColor;
        rehydrate(arg0: $ServerLevel): void;
        withParent(arg0: $SpellContext): $SpellContext;
        getAttachment<T extends $IContextAttachment>(arg0: $ResourceLocation_): T;
        static fromEntity(arg0: $Spell, arg1: $LivingEntity, arg2: $ItemStack_): $SpellContext;
        setCaster(arg0: $LivingEntity | null): void;
        setCanceled(arg0: boolean, arg1: $CancelReason_ | null): boolean;
        setCanceled(arg0: boolean): void;
        getUnwrappedCaster(): $LivingEntity;
        getCaster(): $IWrappedCaster;
        getSpell(): $Spell;
        isDelayed(): boolean;
        withSpell(arg0: $Spell): $SpellContext;
        makeChildContext(): $SpellContext;
        withWrappedCaster(arg0: $IWrappedCaster): $SpellContext;
        getCurrentIndex(): number;
        getCancelReason(): $CancelReason;
        setCurrentIndex(arg0: number): void;
        getRemainingSpell(): $Spell;
        getDelayedSpellEvent(): $DelayedSpellEvent;
        getCasterTool(): $ItemStack;
        getOrCreateAttachment<T extends $IContextAttachment>(arg0: $ResourceLocation_, arg1: T): T;
        getParticleTimeline<T extends $IParticleTimeline<T>>(arg0: $IParticleTimelineType_<T>): T;
        nextPart(): $AbstractSpellPart;
        getPreviousContext(): $SpellContext;
        setCasterTool(arg0: $ItemStack_): void;
        static dehydrated(arg0: $Spell): $SpellContext;
        withColors(arg0: $ParticleColor): $SpellContext;
        resetCastCounter(): $SpellContext;
        hasNextPart(): boolean;
        castingTile: $BlockEntity;
        attachments: $Map<$ResourceLocation, $IContextAttachment>;
        static CODEC: $MapCodec<$SpellContext>;
        level: $Level;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $SpellContext>;
        tag: $CompoundTag;
        constructor(arg0: $Level_, arg1: $Spell, arg2: $LivingEntity | null, arg3: $IWrappedCaster, arg4: $ItemStack_);
        constructor(arg0: $Level_, arg1: $Spell, arg2: $LivingEntity | null, arg3: $IWrappedCaster);
        get type(): $SpellContext$CasterType;
        get unwrappedCaster(): $LivingEntity;
        get spell(): $Spell;
        get delayed(): boolean;
        get cancelReason(): $CancelReason;
        get remainingSpell(): $Spell;
        get delayedSpellEvent(): $DelayedSpellEvent;
        get previousContext(): $SpellContext;
    }
    export class $AbstractAugment extends $AbstractSpellPart implements $ISpellModifier {
        getCompatibleAugments(): $Set<$AbstractAugment>;
        applyModifiers(arg0: $SpellStats$Builder, arg1: $AbstractSpellPart, arg2: $HitResult, arg3: $Level_, arg4: $LivingEntity, arg5: $SpellContext): $SpellStats$Builder;
        /**
         * @deprecated
         */
        applyModifiers(arg0: $SpellStats$Builder, arg1: $AbstractSpellPart): $SpellStats$Builder;
        getCostForPart(arg0: $AbstractSpellPart): number;
        spellSchools: $List<$SpellSchool>;
        static CODEC: $Codec<$AbstractSpellPart>;
        compatibleAugments: $Set<$AbstractAugment>;
        invalidCombinations: $SpellPartConfigUtil$ComboLimits;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractSpellPart>;
        static STREAM_LIST: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AbstractSpellPart>>;
        PER_SPELL_LIMIT: $ModConfigSpec$IntValue;
        augmentCosts: $SpellPartConfigUtil$AugmentCosts;
        glyphItem: $Glyph;
        STARTER_SPELL: $ModConfigSpec$BooleanValue;
        CONFIG: $ModConfigSpec;
        COST: $ModConfigSpec$IntValue;
        augmentLimits: $SpellPartConfigUtil$AugmentLimits;
        name: string;
        augmentDescriptions: $Map<$AbstractAugment, $Component>;
        ENABLED: $ModConfigSpec$BooleanValue;
        GLYPH_TIER: $ModConfigSpec$IntValue;
        constructor(arg0: string, arg1: string);
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    export class $CastResolveType {
        static SUCCESS: $CastResolveType;
        id: string;
        wasSuccess: boolean;
        static FAILURE: $CastResolveType;
        static SUCCESS_NO_EXPEND: $CastResolveType;
        constructor(arg0: string, arg1: boolean);
    }
    export class $IContextAttachment {
    }
    export interface $IContextAttachment extends $Serializable {
        id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IContextAttachment}.
     */
    export type $IContextAttachment_ = (() => $ResourceLocation_);
    export class $CancelReason extends $Record {
        id(): $ResourceLocation;
        static FILTER_FAILED: $CancelReason;
        static TERMINATED: $CancelReason;
        static NEW_CONTEXT: $CancelReason;
        constructor(id: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CancelReason}.
     */
    export type $CancelReason_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $SpellContext$CasterType {
        static OTHER: $SpellContext$CasterType;
        static PLAYER: $SpellContext$CasterType;
        static ENTITY: $SpellContext$CasterType;
        static LIVING_ENTITY: $SpellContext$CasterType;
        static TURRET: $SpellContext$CasterType;
        id: string;
        static RUNE: $SpellContext$CasterType;
        constructor(arg0: string);
    }
    export class $SpellResolver implements $Cloneable {
        clone(): $Object;
        resume(arg0: $Level_): void;
        postEvent(): $SpellCastEvent;
        hasFocus(arg0: $Item_): boolean;
        hasFocus(arg0: $ItemStack_): boolean;
        onResolveEffect(arg0: $Level_, arg1: $HitResult): void;
        static rehydratedFromTag(arg0: $CompoundTag_, arg1: $ServerLevel): $SpellResolver;
        onCast(arg0: $ItemStack_, arg1: $Level_): boolean;
        expendMana(): void;
        onCastOnEntity(arg0: $ItemStack_, arg1: $Entity, arg2: $InteractionHand_): boolean;
        onCastOnBlock(arg0: $UseOnContext): boolean;
        onCastOnBlock(arg0: $BlockHitResult): boolean;
        canCast(arg0: $LivingEntity): boolean;
        getExpendedCost(): number;
        getNewResolver(arg0: $SpellContext): $SpellResolver;
        withSilent(arg0: boolean): $SpellResolver;
        getCastStats(): $SpellStats;
        getResolveCost(): number;
        castType: $AbstractCastMethod;
        spell: $Spell;
        silent: boolean;
        static CODEC: $MapCodec<$SpellResolver>;
        spellContext: $SpellContext;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $SpellResolver>;
        hitResult: $HitResult;
        previousResolver: $SpellResolver;
        constructor(arg0: $SpellContext);
        get expendedCost(): number;
        get castStats(): $SpellStats;
        get resolveCost(): number;
    }
    export class $Spell {
        name(): string;
        size(): number;
        get(arg0: number): $AbstractSpellPart;
        indexOf(arg0: $AbstractSpellPart): number;
        isEmpty(): boolean;
        add(...arg0: $AbstractSpellPart[]): $Spell;
        add(arg0: $AbstractSpellPart): $Spell;
        add(arg0: $AbstractSpellPart, arg1: number): $Spell;
        /**
         * @deprecated
         */
        color(): $ParticleColor;
        withSound(arg0: $ConfiguredSpellSound): $Spell;
        recipe(): $Iterable<$AbstractSpellPart>;
        getDisplayString(): string;
        static fromJson(arg0: string): $Spell;
        toJson(): string;
        isValid(): boolean;
        mutable(): $Spell$Mutable;
        /**
         * @deprecated
         */
        sound(): $ConfiguredSpellSound;
        withName(arg0: string): $Spell;
        particleTimeline(): $TimelineMap;
        getCost(): number;
        withColor(arg0: $ParticleColor): $Spell;
        setRecipe(arg0: $List_<$AbstractSpellPart>): $Spell;
        getAugments(arg0: number, arg1: $LivingEntity | null): $List<$AbstractAugment>;
        serializeRecipe(): $List<$ResourceLocation>;
        getBuffsAtIndex(arg0: number, arg1: $LivingEntity | null, arg2: $AbstractAugment): number;
        static fromBinaryBase64(arg0: string): $Spell;
        toBinaryBase64(): string;
        unsafeList(): $List<$AbstractSpellPart>;
        getInstanceCount(arg0: $AbstractSpellPart): number;
        getCastMethod(): $AbstractCastMethod;
        withTimeline(arg0: $TimelineMap_): $Spell;
        static CODEC: $MapCodec<$Spell>;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $Spell>;
        constructor(arg0: $List_<$AbstractSpellPart>);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: $ParticleColor, arg2: $ConfiguredSpellSound, arg3: $List_<$AbstractSpellPart>);
        constructor(arg0: string, arg1: $ParticleColor, arg2: $ConfiguredSpellSound, arg3: $List_<$AbstractSpellPart>, arg4: $TimelineMap_);
        constructor(arg0: string, arg1: $ParticleColor, arg2: $ConfiguredSpellSound, arg3: $List_<$AbstractSpellPart>, arg4: ($TimelineMap_) | undefined);
        constructor();
        constructor(...arg0: $AbstractSpellPart[]);
        constructor(arg0: $List_<$AbstractSpellPart>, arg1: string);
        get empty(): boolean;
        get displayString(): string;
        get valid(): boolean;
        get cost(): number;
        get castMethod(): $AbstractCastMethod;
    }
    export class $SpellStats {
        addTooltip(arg0: $List_<$Component_>): $List<$Component>;
        getDamageModifier(): number;
        setDurationMultiplier(arg0: number): void;
        isSensitive(): boolean;
        getModifierItems(): $List<$ItemStack>;
        setAccMultiplier(arg0: number): void;
        setModifierItems(arg0: $List_<$ItemStack_>): void;
        getAugments(): $List<$AbstractAugment>;
        getDurationInTicks(): number;
        isRandomized(): boolean;
        getAccMultiplier(): number;
        getBuffCount(arg0: $AbstractAugment): number;
        hasBuff(arg0: $AbstractAugment): boolean;
        getAoeMultiplier(): number;
        getAmpMultiplier(): number;
        setAmpMultiplier(arg0: number): void;
        getDurationMultiplier(): number;
        setDamageModifier(arg0: number): void;
        setAugments(arg0: $List_<$AbstractAugment>): void;
        get sensitive(): boolean;
        get durationInTicks(): number;
        get randomized(): boolean;
        get aoeMultiplier(): number;
    }
    export class $SpellSchool implements $SpellSchoolAccessor {
        getId(): string;
        getIcon(): $DocAssets$BlitInfo;
        getTextComponent(): $Component;
        getTexturePath(): $ResourceLocation;
        addSpellPart(arg0: $AbstractSpellPart): boolean;
        isPartOfSchool(arg0: $AbstractSpellPart): boolean;
        setSubSchools(arg0: $Set_<$SpellSchool>): void;
        getSpellParts(): $Set<$AbstractSpellPart>;
        getSubSchools(): $Set<$SpellSchool>;
        withSubSchool(arg0: $SpellSchool): $SpellSchool;
        setSpellParts(arg0: $Set_<$AbstractSpellPart>): void;
        setDocIcon(arg0: $DocAssets$BlitInfo_): void;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $DocAssets$BlitInfo_);
        get id(): string;
        get icon(): $DocAssets$BlitInfo;
        get textComponent(): $Component;
        get texturePath(): $ResourceLocation;
        set docIcon(value: $DocAssets$BlitInfo_);
    }
    export class $Spell$Mutable {
        add(...arg0: $AbstractSpellPart[]): $Spell$Mutable;
        add(arg0: number, arg1: $AbstractSpellPart): $Spell$Mutable;
        add(arg0: $AbstractSpellPart): $Spell$Mutable;
        immutable(): $Spell;
        setRecipe(arg0: $List_<$AbstractSpellPart>): $Spell$Mutable;
        color: $ParticleColor;
        particleTimeline: $TimelineMap;
        sound: $ConfiguredSpellSound;
        recipe: $List<$AbstractSpellPart>;
        name: string;
        constructor(arg0: $List_<$AbstractSpellPart>, arg1: string, arg2: $ParticleColor, arg3: $ConfiguredSpellSound, arg4: $TimelineMap_);
        constructor(arg0: $List_<$AbstractSpellPart>, arg1: string, arg2: $ParticleColor, arg3: $ConfiguredSpellSound);
    }
    export class $AbstractSpellPart implements $Comparable<$AbstractSpellPart> {
        getName(): string;
        compareTo(arg0: $AbstractSpellPart): number;
        isEnabled(): boolean;
        getTypeName(): $Component;
        getLocaleName(): string;
        buildConfig(arg0: $ModConfigSpec$Builder): void;
        getRegistryName(): $ResourceLocation;
        defaultedStarterGlyph(): boolean;
        createStaticEmitter(arg0: $TimelineEntryData, arg1: $Vec3_): $ParticleEmitter;
        addAugmentDescriptions(arg0: $Map_<$AbstractAugment, string>): void;
        shouldShowInSpellBook(): boolean;
        modifyReturnValue$kok000$ars_unification$editAugmentSet(arg0: $Set_<any>): $Set<any>;
        handler$kok000$ars_unification$editAugmentDescriptions(arg0: $Map_<any, any>, arg1: $CallbackInfo): void;
        getLocalizationKey(): string;
        getGlyph(): $Glyph;
        getTypeIndex(): number;
        contextCanceled(arg0: $SpellContext): boolean;
        onContextCanceled(arg0: $SpellContext): void;
        getCastingCost(): number;
        defaultTier(): $SpellTier;
        getTypeIcon(): $DocAssets$BlitInfo;
        getAugmentLimit(arg0: $ResourceLocation_): number;
        getBookDescLang(): $Component;
        getAugmentLangKey(arg0: $AbstractAugment): $Component;
        getConfigTier(): $SpellTier;
        shouldShowInUnlock(): boolean;
        getBookDescription(): string;
        spellSchools: $List<$SpellSchool>;
        static CODEC: $Codec<$AbstractSpellPart>;
        compatibleAugments: $Set<$AbstractAugment>;
        invalidCombinations: $SpellPartConfigUtil$ComboLimits;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractSpellPart>;
        static STREAM_LIST: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AbstractSpellPart>>;
        PER_SPELL_LIMIT: $ModConfigSpec$IntValue;
        augmentCosts: $SpellPartConfigUtil$AugmentCosts;
        glyphItem: $Glyph;
        STARTER_SPELL: $ModConfigSpec$BooleanValue;
        CONFIG: $ModConfigSpec;
        COST: $ModConfigSpec$IntValue;
        augmentLimits: $SpellPartConfigUtil$AugmentLimits;
        name: string;
        augmentDescriptions: $Map<$AbstractAugment, $Component>;
        ENABLED: $ModConfigSpec$BooleanValue;
        GLYPH_TIER: $ModConfigSpec$IntValue;
        constructor(arg0: string, arg1: string);
        constructor(arg0: $ResourceLocation_, arg1: string);
        get enabled(): boolean;
        get typeName(): $Component;
        get localeName(): string;
        get registryName(): $ResourceLocation;
        get localizationKey(): string;
        get glyph(): $Glyph;
        get typeIndex(): number;
        get castingCost(): number;
        get typeIcon(): $DocAssets$BlitInfo;
        get bookDescLang(): $Component;
        get configTier(): $SpellTier;
        get bookDescription(): string;
    }
    export class $AbstractEffect extends $AbstractSpellPart {
        getPlayer(arg0: $LivingEntity, arg1: $ServerLevel): $Player;
        canSummon(arg0: $LivingEntity): boolean;
        applyEnchantments(arg0: $Level_, arg1: $SpellStats, arg2: $ItemStack_): void;
        wrapMethod$koj000$ars_unification$wrapResolve(arg0: $HitResult, arg1: $Level_, arg2: $LivingEntity, arg3: $SpellStats, arg4: $SpellContext, arg5: $SpellResolver, arg6: $Operation_<any>): void;
        onResolveEntity(arg0: $EntityHitResult, arg1: $Level_, arg2: $LivingEntity, arg3: $SpellStats, arg4: $SpellContext, arg5: $SpellResolver): void;
        safelyGetHitPos(arg0: $HitResult): $Vec3;
        isNotFakePlayer(arg0: $Entity): boolean;
        isRealPlayer(arg0: $Entity): boolean;
        addDamageConfig(arg0: $ModConfigSpec$Builder, arg1: number): void;
        addAmpConfig(arg0: $ModConfigSpec$Builder, arg1: number): void;
        addPotionConfig(arg0: $ModConfigSpec$Builder, arg1: number): void;
        summonLivingEntity(arg0: $HitResult, arg1: $Level_, arg2: $LivingEntity, arg3: $SpellStats, arg4: $SpellContext, arg5: $SpellResolver, arg6: $ISummon): void;
        addGenericDouble(arg0: $ModConfigSpec$Builder, arg1: number, arg2: string, arg3: string): void;
        addRandomizeConfig(arg0: $ModConfigSpec$Builder, arg1: number): void;
        addGenericInt(arg0: $ModConfigSpec$Builder, arg1: number, arg2: string, arg3: string): void;
        onResolve(arg0: $HitResult, arg1: $Level_, arg2: $LivingEntity, arg3: $SpellStats, arg4: $SpellContext, arg5: $SpellResolver): void;
        onResolveBlock(arg0: $BlockHitResult, arg1: $Level_, arg2: $LivingEntity, arg3: $SpellStats, arg4: $SpellContext, arg5: $SpellResolver): void;
        canBlockBeHarvested(arg0: $SpellStats, arg1: $Level_, arg2: $BlockPos_): boolean;
        applySummoningSickness(arg0: $LivingEntity, arg1: number): void;
        addExtendTimeConfig(arg0: $ModConfigSpec$Builder, arg1: number): void;
        addDurationDownConfig(arg0: $ModConfigSpec$Builder, arg1: number): void;
        getBaseHarvestLevel(arg0: $SpellStats): number;
        addDefaultPotionConfig(arg0: $ModConfigSpec$Builder): void;
        DURATION_DOWN_TIME: $ModConfigSpec$IntValue;
        spellSchools: $List<$SpellSchool>;
        invalidCombinations: $SpellPartConfigUtil$ComboLimits;
        EXTEND_TIME: $ModConfigSpec$IntValue;
        PER_SPELL_LIMIT: $ModConfigSpec$IntValue;
        glyphItem: $Glyph;
        CONFIG: $ModConfigSpec;
        GENERIC_DOUBLE: $ModConfigSpec$DoubleValue;
        COST: $ModConfigSpec$IntValue;
        RANDOMIZE_CHANCE: $ModConfigSpec$DoubleValue;
        augmentLimits: $SpellPartConfigUtil$AugmentLimits;
        augmentDescriptions: $Map<$AbstractAugment, $Component>;
        GLYPH_TIER: $ModConfigSpec$IntValue;
        static CODEC: $Codec<$AbstractSpellPart>;
        compatibleAugments: $Set<$AbstractAugment>;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractSpellPart>;
        static STREAM_LIST: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AbstractSpellPart>>;
        augmentCosts: $SpellPartConfigUtil$AugmentCosts;
        STARTER_SPELL: $ModConfigSpec$BooleanValue;
        POTION_TIME: $ModConfigSpec$IntValue;
        DAMAGE: $ModConfigSpec$DoubleValue;
        AMP_VALUE: $ModConfigSpec$DoubleValue;
        GENERIC_INT: $ModConfigSpec$IntValue;
        name: string;
        ENABLED: $ModConfigSpec$BooleanValue;
        constructor(arg0: string, arg1: string);
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    export class $SpellStats$Builder {
        build(): $SpellStats;
        build(arg0: $AbstractSpellPart, arg1: $HitResult | null, arg2: $Level_, arg3: $LivingEntity | null, arg4: $SpellContext): $SpellStats;
        addItem(arg0: $ItemStack_): $SpellStats$Builder;
        setItems(arg0: $List_<$ItemStack_>): $SpellStats$Builder;
        addAOE(arg0: number): $SpellStats$Builder;
        addAmplification(arg0: number): $SpellStats$Builder;
        randomize(): $SpellStats$Builder;
        addDurationModifier(arg0: number): $SpellStats$Builder;
        addAccelerationModifier(arg0: number): $SpellStats$Builder;
        /**
         * @deprecated
         */
        setDurationModifier(arg0: number): $SpellStats$Builder;
        setAccelerationModifier(arg0: number): $SpellStats$Builder;
        setSensitive(): $SpellStats$Builder;
        setDamageModifier(arg0: number): $SpellStats$Builder;
        setAmplification(arg0: number): $SpellStats$Builder;
        addAugment(arg0: $AbstractAugment): $SpellStats$Builder;
        setAOE(arg0: number): $SpellStats$Builder;
        addDamageModifier(arg0: number): $SpellStats$Builder;
        setAugments(arg0: $List_<$AbstractAugment>): $SpellStats$Builder;
        addItemsFromEntity(arg0: $LivingEntity | null): $SpellStats$Builder;
        constructor();
        set items(value: $List_<$ItemStack_>);
        set durationModifier(value: number);
        set accelerationModifier(value: number);
        set damageModifier(value: number);
        set amplification(value: number);
        set AOE(value: number);
        set augments(value: $List_<$AbstractAugment>);
    }
    export class $AbstractCastMethod extends $AbstractSpellPart {
        onCast(arg0: $ItemStack_ | null, arg1: $LivingEntity, arg2: $Level_, arg3: $SpellStats, arg4: $SpellContext, arg5: $SpellResolver): $CastResolveType;
        onCastOnEntity(arg0: $ItemStack_ | null, arg1: $LivingEntity, arg2: $Entity, arg3: $InteractionHand_, arg4: $SpellStats, arg5: $SpellContext, arg6: $SpellResolver): $CastResolveType;
        onCastOnBlock(arg0: $UseOnContext, arg1: $SpellStats, arg2: $SpellContext, arg3: $SpellResolver): $CastResolveType;
        onCastOnBlock(arg0: $BlockHitResult, arg1: $LivingEntity, arg2: $SpellStats, arg3: $SpellContext, arg4: $SpellResolver): $CastResolveType;
        spellSchools: $List<$SpellSchool>;
        static CODEC: $Codec<$AbstractSpellPart>;
        compatibleAugments: $Set<$AbstractAugment>;
        invalidCombinations: $SpellPartConfigUtil$ComboLimits;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractSpellPart>;
        static STREAM_LIST: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AbstractSpellPart>>;
        PER_SPELL_LIMIT: $ModConfigSpec$IntValue;
        augmentCosts: $SpellPartConfigUtil$AugmentCosts;
        glyphItem: $Glyph;
        STARTER_SPELL: $ModConfigSpec$BooleanValue;
        CONFIG: $ModConfigSpec;
        COST: $ModConfigSpec$IntValue;
        augmentLimits: $SpellPartConfigUtil$AugmentLimits;
        name: string;
        augmentDescriptions: $Map<$AbstractAugment, $Component>;
        ENABLED: $ModConfigSpec$BooleanValue;
        GLYPH_TIER: $ModConfigSpec$IntValue;
        constructor(arg0: string, arg1: string);
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
}
