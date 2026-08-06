import { $MobEffectInstanceAccessor as $MobEffectInstanceAccessor$1 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/effects";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ModificationHandler } from "@package/de/cadentem/pufferfish_unofficial_additions/misc";
import { $Entity, $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $PEStatusEffect } from "@package/com/leclowndu93150/particle_effects/utils";
import { $MobEffectInstanceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $AttributeModifier, $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation, $AttributeMap } from "@package/net/minecraft/world/entity/ai/attributes";
import { $IClientMobEffectExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $List, $Set_, $Map, $Set } from "@package/java/util";
import { $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $IMobEffectExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record, $Runnable_, $Comparable } from "@package/java/lang";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $StatusEffectInstanceInjector } from "@package/de/dafuqs/spectrum/injectors";
import { $Int2DoubleFunction, $Int2DoubleFunction_, $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Component } from "@package/net/minecraft/network/chat";
import { $StatusEffectInstanceAccessor } from "@package/de/dafuqs/spectrum/mixin/accessors";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/effect" {
    export class $InstantenousMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(category: $MobEffectCategory_, color: number);
    }
    export class $MobEffect implements $FeatureElement, $IMobEffectExtension, $PEStatusEffect {
        getDisplayName(): $Component;
        getCategory(): $MobEffectCategory;
        /**
         * Returns the color of the potion liquid.
         */
        getColor(): number;
        onMobRemoved(livingEntity: $LivingEntity, amplifier: number, reason: $Entity$RemovalReason_): void;
        onEffectStarted(livingEntity: $LivingEntity, amplifier: number): void;
        onEffectAdded(livingEntity: $LivingEntity, amplifier: number): void;
        /**
         * Get if the potion is beneficial to the player. Beneficial potions are shown on the first row of the HUD
         */
        isBeneficial(): boolean;
        /**
         * Returns the name of the effect.
         */
        getDescriptionId(): string;
        requiredFeatures(): $FeatureFlagSet;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $MobEffect;
        withSoundOnAdded(sound: $SoundEvent_): $MobEffect;
        /**
         * Get if the potion is beneficial to the player. Beneficial potions are shown on the first row of the HUD
         */
        isInstantenous(): boolean;
        setBlendDuration(blendDuration: number): $MobEffect;
        createModifiers(amplifier: number, output: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientMobEffectExtensions>): void;
        applyEffectTick(livingEntity: $LivingEntity, amplifier: number): boolean;
        onMobHurt(livingEntity: $LivingEntity, amplifier: number, damageSource: $DamageSource_, amount: number): void;
        /**
         * Returns the color of the potion liquid.
         */
        getBlendDurationTicks(): number;
        addAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, arg3: $AttributeModifier$Operation_): $MobEffect;
        addAttributeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: $AttributeModifier$Operation_, arg3: $Int2DoubleFunction_): $MobEffect;
        applyInstantenousEffect(source: $Entity | null, indirectSource: $Entity | null, livingEntity: $LivingEntity, amplifier: number, health: number): void;
        createParticleOptions(effect: $MobEffectInstance): $ParticleOptions;
        particleEffects$getParticleEffect(): $ParticleOptions;
        shouldApplyEffectTickThisTick(duration: number, amplifier: number): boolean;
        particleEffects$setParticleEffect(arg0: $ParticleOptions_): void;
        addAttributeModifiers(attributeMap: $AttributeMap, amplifier: number): void;
        removeAttributeModifiers(attributeMap: $AttributeMap): void;
        modifyReturnValue$chd001$nolijium$a(arg0: number): number;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        /**
         * Fill the given set with the `EffectCure`s this effect should be curable with by default
         */
        fillEffectCures(cures: $Set_<$EffectCure>, effectInstance: $MobEffectInstance): void;
        /**
         * Used for determining `MobEffect` sort order in GUIs.
         * Defaults to the `MobEffect`'s liquid color.
         */
        getSortOrder(effectInstance: $MobEffectInstance): number;
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(category: $MobEffectCategory_, color: number);
        get displayName(): $Component;
        get category(): $MobEffectCategory;
        get color(): number;
        get beneficial(): boolean;
        get descriptionId(): string;
        get instantenous(): boolean;
        set blendDuration(value: number);
        get blendDurationTicks(): number;
    }
    /**
     * Values that may be interpreted as {@link $MobEffect}.
     */
    export type $MobEffect_ = RegistryTypes.MobEffect;
    export class $MobEffectInstance$Details extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MobEffectInstance$Details}.
     */
    export type $MobEffectInstance$Details_ = { ambient?: boolean, amplifier?: number, showParticles?: boolean, cures?: ($Set_<$EffectCure>) | undefined, showIcon?: boolean, hiddenEffect?: ($MobEffectInstance$Details_) | undefined, duration?: number,  } | [ambient?: boolean, amplifier?: number, showParticles?: boolean, cures?: ($Set_<$EffectCure>) | undefined, showIcon?: boolean, hiddenEffect?: ($MobEffectInstance$Details_) | undefined, duration?: number, ];
    export class $HealOrHarmMobEffect extends $InstantenousMobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $PoisonMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $HungerMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffects {
        static bootstrap(registry: $Registry<$MobEffect_>): $Holder<$MobEffect>;
        static INVISIBILITY: $Holder<$MobEffect>;
        static SLOW_FALLING: $Holder<$MobEffect>;
        static DAMAGE_RESISTANCE: $Holder<$MobEffect>;
        static HEAL: $Holder<$MobEffect>;
        static BAD_OMEN: $Holder<$MobEffect>;
        static WEAKNESS: $Holder<$MobEffect>;
        static DOLPHINS_GRACE: $Holder<$MobEffect>;
        static JUMP: $Holder<$MobEffect>;
        static TRIAL_OMEN: $Holder<$MobEffect>;
        static MOVEMENT_SLOWDOWN: $Holder<$MobEffect>;
        static WITHER: $Holder<$MobEffect>;
        static LUCK: $Holder<$MobEffect>;
        static FIRE_RESISTANCE: $Holder<$MobEffect>;
        static HARM: $Holder<$MobEffect>;
        static WIND_CHARGED: $Holder<$MobEffect>;
        static WATER_BREATHING: $Holder<$MobEffect>;
        static GLOWING: $Holder<$MobEffect>;
        static OOZING: $Holder<$MobEffect>;
        static DIG_SPEED: $Holder<$MobEffect>;
        static ABSORPTION: $Holder<$MobEffect>;
        static HUNGER: $Holder<$MobEffect>;
        static DIG_SLOWDOWN: $Holder<$MobEffect>;
        static HERO_OF_THE_VILLAGE: $Holder<$MobEffect>;
        static REGENERATION: $Holder<$MobEffect>;
        static INFESTED: $Holder<$MobEffect>;
        static WEAVING: $Holder<$MobEffect>;
        static BLINDNESS: $Holder<$MobEffect>;
        static MOVEMENT_SPEED: $Holder<$MobEffect>;
        static DAMAGE_BOOST: $Holder<$MobEffect>;
        static LEVITATION: $Holder<$MobEffect>;
        static UNLUCK: $Holder<$MobEffect>;
        static CONDUIT_POWER: $Holder<$MobEffect>;
        static RAID_OMEN: $Holder<$MobEffect>;
        static CONFUSION: $Holder<$MobEffect>;
        static POISON: $Holder<$MobEffect>;
        static HEALTH_BOOST: $Holder<$MobEffect>;
        static DARKNESS: $Holder<$MobEffect>;
        static NIGHT_VISION: $Holder<$MobEffect>;
        static SATURATION: $Holder<$MobEffect>;
        constructor();
    }
    export class $MobEffectInstance implements $Comparable<$MobEffectInstance>, $MobEffectInstanceAccessor$1, $ModificationHandler, $StatusEffectInstanceInjector, $StatusEffectInstanceAccessor, $MobEffectInstanceAccessor {
        /**
         * @note_to_llm Check MobEffectUtils binding for easier way to create MobEffectInstance.
         */
        compareTo(other: $MobEffectInstance): number;
        update(other: $MobEffectInstance): boolean;
        /**
         * Read a custom potion effect from a potion item's NBT data.
         */
        static load(nbt: $CompoundTag_): $MobEffectInstance;
        save(): $Tag;
        is(effect: $Holder_<$MobEffect>): boolean;
        getDuration(): number;
        tick(entity: $LivingEntity, onExpirationRunnable: $Runnable_): boolean;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isInfiniteDuration(): boolean;
        setDetailsFrom(other: $MobEffectInstance): void;
        tickDownDuration(): number;
        skipBlending(): void;
        mapDuration(mapper: $Int2IntFunction_): number;
        getBlendFactor(entity: $LivingEntity, delta: number): number;
        endsWithin(duration: number): boolean;
        onMobRemoved(livingEntity: $LivingEntity, reason: $Entity$RemovalReason_): void;
        getParticleOptions(): $ParticleOptions;
        onEffectStarted(livingEntity: $LivingEntity): void;
        copyBlendState(other: $MobEffectInstance): void;
        getAmplifier(): number;
        onEffectAdded(livingEntity: $LivingEntity): void;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        showIcon(): boolean;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        pufferfish_unofficial_additions$wasModified(): boolean;
        pufferfish_unofficial_additions$setModified(arg0: boolean): void;
        getDescriptionId(): string;
        getEffect(): $Holder<$MobEffect>;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isVisible(): boolean;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isAmbient(): boolean;
        onMobHurt(livingEntity: $LivingEntity, damageSource: $DamageSource_, amount: number): void;
        spectrum$setAmplifier(arg0: number): void;
        spectrum$setDuration(arg0: number): void;
        getCures(): $Set<$EffectCure>;
        setAmplifier(arg0: number): void;
        setDuration(arg0: number): void;
        bumblezone$callTickDownDuration(): number;
        create$getHiddenEffect(): $MobEffectInstance;
        bumblezone$setDuration(arg0: number): void;
        duration: number;
        static MAX_AMPLIFIER: number;
        static CODEC: $Codec<$MobEffectInstance>;
        visible: boolean;
        static INFINITE_DURATION: number;
        static MIN_AMPLIFIER: number;
        hiddenEffect: $MobEffectInstance;
        amplifier: number;
        ambient: boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MobEffectInstance>;
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance | null);
        constructor(other: $MobEffectInstance);
        constructor(effect: $Holder_<$MobEffect>);
        constructor(effect: $Holder_<$MobEffect>, duration: number);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean);
        get infiniteDuration(): boolean;
        set detailsFrom(value: $MobEffectInstance);
        get particleOptions(): $ParticleOptions;
        get descriptionId(): string;
        get effect(): $Holder<$MobEffect>;
        get cures(): $Set<$EffectCure>;
    }
    export class $SaturationMobEffect extends $InstantenousMobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $BadOmenMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectUtil {
        static hasDigSpeed(entity: $LivingEntity): boolean;
        static addEffectToPlayersAround(level: $ServerLevel, source: $Entity | null, pos: $Vec3_, radius: number, arg4: $MobEffectInstance, effect: number): $List<$ServerPlayer>;
        static getDigSpeedAmplification(entity: $LivingEntity): number;
        static formatDuration(effect: $MobEffectInstance, durationFactor: number, ticksPerSecond: number): $Component;
        static hasWaterBreathing(entity: $LivingEntity): boolean;
        constructor();
    }
    export class $AbsorptionMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $WindChargedMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectCategory extends $Enum<$MobEffectCategory> {
        static values(): $MobEffectCategory[];
        static valueOf(arg0: string): $MobEffectCategory;
        getTooltipFormatting(): $ChatFormatting;
        static HARMFUL: $MobEffectCategory;
        static BENEFICIAL: $MobEffectCategory;
        static NEUTRAL: $MobEffectCategory;
        get tooltipFormatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectCategory}.
     */
    export type $MobEffectCategory_ = "beneficial" | "harmful" | "neutral";
    export interface $MobEffect extends RegistryMarked<RegistryTypes.MobEffectTag, RegistryTypes.MobEffect> {}
    export class $MobEffect$AttributeTemplate extends $Record {
        id(): $ResourceLocation;
        create(level: number): $AttributeModifier;
        amount(): number;
        operation(): $AttributeModifier$Operation;
        curve(): $Int2DoubleFunction;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
        constructor(id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_, curve: $Int2DoubleFunction_ | null);
    }
    /**
     * Values that may be interpreted as {@link $MobEffect$AttributeTemplate}.
     */
    export type $MobEffect$AttributeTemplate_ = { operation?: $AttributeModifier$Operation_, amount?: number, curve?: $Int2DoubleFunction_, id?: $ResourceLocation_,  } | [operation?: $AttributeModifier$Operation_, amount?: number, curve?: $Int2DoubleFunction_, id?: $ResourceLocation_, ];
    export class $WeavingMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $RaidOmenMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $InfestedMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $OozingMobEffect$NearbySlimes {
    }
    export interface $OozingMobEffect$NearbySlimes {
    }
    /**
     * Values that may be interpreted as {@link $OozingMobEffect$NearbySlimes}.
     */
    export type $OozingMobEffect$NearbySlimes_ = (() => void);
    export class $RegenerationMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectInstance$BlendState {
    }
    export class $WitherMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $OozingMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
}
