import { $Codec } from "@package/com/mojang/serialization";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Optional } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $DamageSourceExtension } from "@package/dev/shadowsoffire/apotheosis/util";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Explosion } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DamageSourceAccess } from "@package/net/puffish/skillsmod/access";
import { $Fireball, $FireworkRocketEntity, $AbstractArrow, $WitherSkull } from "@package/net/minecraft/world/entity/projectile";
import { $IScalingFunction, $IDeathMessageProvider } from "@package/net/neoforged/neoforge/common/damagesource";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $StackTracking } from "@package/de/dafuqs/spectrum/api/damage_type";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/damagesource" {
    export interface $DamageType extends RegistryMarked<RegistryTypes.DamageTypeTag, RegistryTypes.DamageType> {}
    export class $DamageSources {
        source(damageTypeKey: $ResourceKey_<$DamageType>, causingEntity: $Entity | null, directEntity: $Entity | null): $DamageSource;
        source(damageTypeKey: $ResourceKey_<$DamageType>, entity: $Entity | null): $DamageSource;
        source(damageTypeKey: $ResourceKey_<$DamageType>): $DamageSource;
        generic(): $DamageSource;
        freeze(): $DamageSource;
        magic(): $DamageSource;
        thrown(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        sweetBerryBush(): $DamageSource;
        fallingStalactite(entity: $Entity): $DamageSource;
        arrow(arrow: $AbstractArrow, shooter: $Entity | null): $DamageSource;
        windCharge(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        mobAttack(mob: $LivingEntity): $DamageSource;
        campfire(): $DamageSource;
        anvil(entity: $Entity): $DamageSource;
        cactus(): $DamageSource;
        playerAttack(player: $Player): $DamageSource;
        dryOut(): $DamageSource;
        starve(): $DamageSource;
        outOfBorder(): $DamageSource;
        spit(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        lightningBolt(): $DamageSource;
        explosion(explosion: $Explosion | null): $DamageSource;
        explosion(causingEntity: $Entity | null, directEntity: $Entity | null): $DamageSource;
        trident(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        fireball(fireball: $Fireball, thrower: $Entity | null): $DamageSource;
        fellOutOfWorld(): $DamageSource;
        flyIntoWall(): $DamageSource;
        indirectMagic(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        inWall(): $DamageSource;
        onFire(): $DamageSource;
        lava(): $DamageSource;
        badRespawnPointExplosion(position: $Vec3_): $DamageSource;
        inFire(): $DamageSource;
        cramming(): $DamageSource;
        drown(): $DamageSource;
        fall(): $DamageSource;
        sting(mob: $LivingEntity): $DamageSource;
        hotFloor(): $DamageSource;
        thorns(entity: $Entity): $DamageSource;
        fallingBlock(entity: $Entity): $DamageSource;
        witherSkull(witherSkull: $WitherSkull, shooter: $Entity): $DamageSource;
        genericKill(): $DamageSource;
        mobProjectile(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        fireworks(firework: $FireworkRocketEntity, shooter: $Entity | null): $DamageSource;
        wither(): $DamageSource;
        stalagmite(): $DamageSource;
        sonicBoom(entity: $Entity): $DamageSource;
        noAggroMobAttack(mob: $LivingEntity): $DamageSource;
        dragonBreath(): $DamageSource;
        damageTypes: $Registry<$DamageType>;
        constructor(registry: $RegistryAccess);
    }
    export class $CombatRules {
        static getDamageAfterAbsorb(entity: $LivingEntity, damage: number, damageSource: $DamageSource_, armorValue: number, armorToughness: number): number;
        static getDamageAfterMagicAbsorb(damage: number, enchantModifiers: number): number;
        static BASE_ARMOR_TOUGHNESS: number;
        static MIN_ARMOR_RATIO: number;
        static ARMOR_PROTECTION_DIVIDER: number;
        static MAX_ARMOR: number;
        constructor();
    }
    export class $DamageType extends $Record {
        msgId(): string;
        exhaustion(): number;
        scaling(): $DamageScaling;
        deathMessageType(): $DeathMessageType;
        effects(): $DamageEffects;
        static CODEC: $Codec<$Holder<$DamageType>>;
        static DIRECT_CODEC: $Codec<$DamageType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DamageType>>;
        constructor(arg0: string, arg1: $DamageScaling_, arg2: number, arg3: $DamageEffects_, arg4: $DeathMessageType_);
        constructor(msgId: string, exhaustion: number);
        constructor(msgId: string, exhaustion: number, effects: $DamageEffects_);
        constructor(msgId: string, scaling: $DamageScaling_, exhaustion: number, effects: $DamageEffects_);
        constructor(msgId: string, scaling: $DamageScaling_, exhaustion: number);
    }
    /**
     * Values that may be interpreted as {@link $DamageType}.
     */
    export type $DamageType_ = RegistryTypes.DamageType | { msgId?: string, deathMessageType?: $DeathMessageType_, exhaustion?: number, effects?: $DamageEffects_, scaling?: $DamageScaling_,  } | [msgId?: string, deathMessageType?: $DeathMessageType_, exhaustion?: number, effects?: $DamageEffects_, scaling?: $DamageScaling_, ];
    export class $DamageSource implements $DamageSourceAccess, $DamageSourceExtension, $StackTracking {
        type(): $DamageType;
        /**
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        isDirect(): boolean;
        is(damageTypeKey: $TagKey_<$DamageType>): boolean;
        is(damageTypeKey: $ResourceKey_<$DamageType>): boolean;
        /**
         * Retrieves the immediate causer of the damage, e.g. the arrow entity, not its shooter
         */
        getActual(): $Entity;
        /**
         * How much satiate (food) is consumed by this `DamageSource`.
         */
        getFoodExhaustion(): number;
        /**
         * Retrieves the immediate causer of the damage, e.g. the arrow entity, not its shooter
         */
        getImmediate(): $Entity;
        /**
         * Gets the location from which the damage originates.
         */
        getSourcePosition(): $Vec3;
        /**
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        isCreativePlayer(): boolean;
        getWeaponItem(): $ItemStack;
        /**
         * Return the name of damage type.
         */
        getType(): string;
        addTag(arg0: $TagKey_<any>): void;
        /**
         * Gets the location from which the damage originates.
         */
        sourcePositionRaw(): $Vec3;
        getPlayer(): $Player;
        spectrum$getTrackedStack(): $Optional<any>;
        /**
         * Gets the death message that is displayed when the player dies
         */
        getLocalizedDeathMessage(livingEntity: $LivingEntity): $Component;
        spectrum$setTrackedStack(arg0: $ItemStack_): void;
        /**
         * @deprecated
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        scalesWithDifficulty(): boolean;
        getWeapon(): $Optional<any>;
        typeHolder(): $Holder<$DamageType>;
        removeTag(arg0: $TagKey_<any>): void;
        handler$foh000$apotheosis$apoth_isSourceInExtraTags(arg0: $TagKey_<any>, arg1: $CallbackInfoReturnable<any>): void;
        constructor(type: $Holder_<$DamageType>, damageSourcePosition: $Vec3_);
        constructor(type: $Holder_<$DamageType>, directEntity: $Entity | null, causingEntity: $Entity | null);
        constructor(type: $Holder_<$DamageType>, entity: $Entity | null);
        constructor(type: $Holder_<$DamageType>, directEntity: $Entity | null, causingEntity: $Entity | null, damageSourcePosition: $Vec3_ | null);
        constructor(type: $Holder_<$DamageType>);
        get direct(): boolean;
        get actual(): $Entity;
        get foodExhaustion(): number;
        get immediate(): $Entity;
        get sourcePosition(): $Vec3;
        get creativePlayer(): boolean;
        get weaponItem(): $ItemStack;
        get player(): $Player;
        get weapon(): $Optional<any>;
    }
    /**
     * Values that may be interpreted as {@link $DamageSource}.
     */
    export type $DamageSource_ = RegistryTypes.DamageType | $LivingEntity;
    export class $FallLocation extends $Record {
        id(): string;
        languageKey(): string;
        static getCurrentFallLocation(entity: $LivingEntity): $FallLocation;
        static blockToFallLocation(state: $BlockState_): $FallLocation;
        static GENERIC: $FallLocation;
        static LADDER: $FallLocation;
        static VINES: $FallLocation;
        static WEEPING_VINES: $FallLocation;
        static OTHER_CLIMBABLE: $FallLocation;
        static TWISTING_VINES: $FallLocation;
        static SCAFFOLDING: $FallLocation;
        static WATER: $FallLocation;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $FallLocation}.
     */
    export type $FallLocation_ = { id?: string,  } | [id?: string, ];
    export class $DamageScaling extends $Enum<$DamageScaling> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DamageScaling[];
        static valueOf(arg0: string): $DamageScaling;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getScalingFunction(): $IScalingFunction;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$DamageScaling>;
        static WHEN_CAUSED_BY_LIVING_NON_PLAYER: $DamageScaling;
        static NEVER: $DamageScaling;
        static ALWAYS: $DamageScaling;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get scalingFunction(): $IScalingFunction;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DamageScaling}.
     */
    export type $DamageScaling_ = "never" | "when_caused_by_living_non_player" | "always";
    export class $DeathMessageType extends $Enum<$DeathMessageType> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DeathMessageType[];
        static valueOf(arg0: string): $DeathMessageType;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getMessageFunction(): $IDeathMessageProvider;
        getRemappedEnumConstantName(): string;
        static INTENTIONAL_GAME_DESIGN: $DeathMessageType;
        static FALL_VARIANTS: $DeathMessageType;
        static CODEC: $Codec<$DeathMessageType>;
        static DEFAULT: $DeathMessageType;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get messageFunction(): $IDeathMessageProvider;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DeathMessageType}.
     */
    export type $DeathMessageType_ = "default" | "fall_variants" | "intentional_game_design";
    export class $CombatEntry extends $Record {
        source(): $DamageSource;
        damage(): number;
        fallLocation(): $FallLocation;
        fallDistance(): number;
        constructor(arg0: $DamageSource_, arg1: number, arg2: $FallLocation_ | null, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $CombatEntry}.
     */
    export type $CombatEntry_ = { fallDistance?: number, fallLocation?: $FallLocation_, damage?: number, source?: $DamageSource_,  } | [fallDistance?: number, fallLocation?: $FallLocation_, damage?: number, source?: $DamageSource_, ];
    export class $DamageEffects extends $Enum<$DamageEffects> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DamageEffects[];
        static valueOf(arg0: string): $DamageEffects;
        sound(): $SoundEvent;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FREEZING: $DamageEffects;
        static CODEC: $Codec<$DamageEffects>;
        static TWILIGHTFOREST_PINCH: $DamageEffects;
        static DROWNING: $DamageEffects;
        static POKING: $DamageEffects;
        static BURNING: $DamageEffects;
        static HURT: $DamageEffects;
        static THORNS: $DamageEffects;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DamageEffects}.
     */
    export type $DamageEffects_ = "hurt" | "thorns" | "drowning" | "burning" | "poking" | "freezing" | "twilightforest:pinch";
    export class $DamageTypes {
        static bootstrap(context: $BootstrapContext<$DamageType_>): void;
        static IN_WALL: $ResourceKey<$DamageType>;
        static FREEZE: $ResourceKey<$DamageType>;
        static LAVA: $ResourceKey<$DamageType>;
        static UNATTRIBUTED_FIREBALL: $ResourceKey<$DamageType>;
        static CRAMMING: $ResourceKey<$DamageType>;
        static EXPLOSION: $ResourceKey<$DamageType>;
        static IN_FIRE: $ResourceKey<$DamageType>;
        static BAD_RESPAWN_POINT: $ResourceKey<$DamageType>;
        static TRIDENT: $ResourceKey<$DamageType>;
        static WITHER: $ResourceKey<$DamageType>;
        static ARROW: $ResourceKey<$DamageType>;
        static GENERIC_KILL: $ResourceKey<$DamageType>;
        static LIGHTNING_BOLT: $ResourceKey<$DamageType>;
        static MAGIC: $ResourceKey<$DamageType>;
        static ON_FIRE: $ResourceKey<$DamageType>;
        static FALL: $ResourceKey<$DamageType>;
        static MOB_ATTACK_NO_AGGRO: $ResourceKey<$DamageType>;
        static PLAYER_ATTACK: $ResourceKey<$DamageType>;
        static DRY_OUT: $ResourceKey<$DamageType>;
        static DRAGON_BREATH: $ResourceKey<$DamageType>;
        static WITHER_SKULL: $ResourceKey<$DamageType>;
        static STARVE: $ResourceKey<$DamageType>;
        static FELL_OUT_OF_WORLD: $ResourceKey<$DamageType>;
        static PLAYER_EXPLOSION: $ResourceKey<$DamageType>;
        static SONIC_BOOM: $ResourceKey<$DamageType>;
        static MOB_ATTACK: $ResourceKey<$DamageType>;
        static FALLING_ANVIL: $ResourceKey<$DamageType>;
        static FIREBALL: $ResourceKey<$DamageType>;
        static CACTUS: $ResourceKey<$DamageType>;
        static CAMPFIRE: $ResourceKey<$DamageType>;
        static MOB_PROJECTILE: $ResourceKey<$DamageType>;
        static WIND_CHARGE: $ResourceKey<$DamageType>;
        static INDIRECT_MAGIC: $ResourceKey<$DamageType>;
        static OUTSIDE_BORDER: $ResourceKey<$DamageType>;
        static FALLING_BLOCK: $ResourceKey<$DamageType>;
        static FLY_INTO_WALL: $ResourceKey<$DamageType>;
        static SPIT: $ResourceKey<$DamageType>;
        static THORNS: $ResourceKey<$DamageType>;
        static GENERIC: $ResourceKey<$DamageType>;
        static FIREWORKS: $ResourceKey<$DamageType>;
        static SWEET_BERRY_BUSH: $ResourceKey<$DamageType>;
        static HOT_FLOOR: $ResourceKey<$DamageType>;
        static STING: $ResourceKey<$DamageType>;
        static DROWN: $ResourceKey<$DamageType>;
        static FALLING_STALACTITE: $ResourceKey<$DamageType>;
        static THROWN: $ResourceKey<$DamageType>;
        static STALAGMITE: $ResourceKey<$DamageType>;
    }
    export interface $DamageTypes {
    }
    export class $CombatTracker {
        getDeathMessage(): $Component;
        /**
         * Resets this trackers list of combat entries
         */
        recheckStatus(): void;
        recordDamage(source: $DamageSource_, damage: number): void;
        getFallMessage(combatEntry: $CombatEntry_, entity: $Entity | null): $Component;
        getMostSignificantFall(): $CombatEntry;
        getCombatDuration(): number;
        static INTENTIONAL_GAME_DESIGN_STYLE: $Style;
        entries: $List<$CombatEntry>;
        inCombat: boolean;
        lastDamageTime: number;
        static RESET_COMBAT_STATUS_TIME: number;
        static RESET_DAMAGE_STATUS_TIME: number;
        constructor(mob: $LivingEntity);
        get deathMessage(): $Component;
        get mostSignificantFall(): $CombatEntry;
        get combatDuration(): number;
    }
}
