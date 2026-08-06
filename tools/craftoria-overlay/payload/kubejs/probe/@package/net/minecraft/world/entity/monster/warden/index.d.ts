import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Codec } from "@package/com/mojang/serialization";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $EntityType_, $PortalProcessor, $Pose_, $EntityType, $Entity, $AnimationState, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $HashMap, $UUID_, $List_, $Comparator, $Stack, $Map, $OptionalInt } from "@package/java/util";
import { $ToDoubleFunction_, $Function_, $Predicate_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Monster } from "@package/net/minecraft/world/entity/monster";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/monster/warden" {
    export class $Warden$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $WardenAi {
        static setDisturbanceLocation(warden: $Warden, disturbanceLocation: $BlockPos_): void;
        static updateActivity(warden: $Warden): void;
        static setDigCooldown(entity: $LivingEntity): void;
        static DIGGING_COOLDOWN: number;
        static ROAR_DURATION: number;
        static EMERGE_DURATION: number;
        constructor();
        static set digCooldown(value: $LivingEntity);
    }
    export class $WardenSpawnTracker {
        reset(): void;
        tick(): void;
        static tryWarn(level: $ServerLevel, pos: $BlockPos_, player: $ServerPlayer): $OptionalInt;
        getWarningLevel(): number;
        setWarningLevel(warningLevel: number): void;
        static CODEC: $Codec<$WardenSpawnTracker>;
        static MAX_WARNING_LEVEL: number;
        constructor(ticksSinceLastWarning: number, warningLevel: number, cooldownTicks: number);
    }
    export class $AngerLevel extends $Enum<$AngerLevel> {
        static values(): $AngerLevel[];
        static valueOf(arg0: string): $AngerLevel;
        getAmbientSound(): $SoundEvent;
        static byAnger(anger: number): $AngerLevel;
        getMinimumAnger(): number;
        getListeningSound(): $SoundEvent;
        isAngry(): boolean;
        static CALM: $AngerLevel;
        static AGITATED: $AngerLevel;
        static ANGRY: $AngerLevel;
        get ambientSound(): $SoundEvent;
        get minimumAnger(): number;
        get listeningSound(): $SoundEvent;
        get angry(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AngerLevel}.
     */
    export type $AngerLevel_ = "calm" | "agitated" | "angry";
    export class $Warden extends $Monster implements $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        handler$ica000$deeperdarker$canTargetEntity(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        clearAnger(entity: $Entity): void;
        static applyDarknessAround(level: $ServerLevel, pos: $Vec3_, source: $Entity | null, radius: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getClientAngerLevel(): number;
        setAttackTarget(attackTarget: $LivingEntity): void;
        getTendrilAnimation(partialTick: number): number;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        getEntityAngryAt(): ($LivingEntity) | undefined;
        getAngerLevel(): $AngerLevel;
        canTargetEntity(vehicle: $Entity | null): boolean;
        getHeartAnimation(partialTick: number): number;
        getAngerManagement(): $AngerManagement;
        increaseAngerAt(entity: $Entity | null, offset: number, playListeningSound: boolean): void;
        increaseAngerAt(entity: $Entity | null): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        armorItems: $NonNullList<$ItemStack>;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        sonicBoomAnimationState: $AnimationState;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        ars_Nouveau$motions: $Stack<any>;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        fallFlyTicks: number;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        armorDropChances: number[];
        persistenceRequired: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        diggingAnimationState: $AnimationState;
        s_bee: $EntityType<any>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        sniffAnimationState: $AnimationState;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        emergeAnimationState: $AnimationState;
        zOld: number;
        timeOffs: number;
        handItems: $NonNullList<$ItemStack>;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        castingSpell: $SpellData;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        hasUsedSingleAttack: boolean;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        level: $Level;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        attackAnimationState: $AnimationState;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        drinkTime: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        roarAnimationState: $AnimationState;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        spells: $HashMap<any, any>;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Monster>, level: $Level_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get clientAngerLevel(): number;
        set attackTarget(value: $LivingEntity);
        get entityAngryAt(): ($LivingEntity) | undefined;
        get angerLevel(): $AngerLevel;
        get angerManagement(): $AngerManagement;
    }
    export class $AngerManagement {
        tick(level: $ServerLevel, predicate: $Predicate_<$Entity>): void;
        clearAnger(entity: $Entity): void;
        increaseAnger(entity: $Entity, offset: number): number;
        getActiveEntity(): ($LivingEntity) | undefined;
        getActiveAnger(entity: $Entity | null): number;
        static codec(filter: $Predicate_<$Entity>): $Codec<$AngerManagement>;
        constructor(filter: $Predicate_<$Entity>, angerByUuid: $List_<$Pair<$UUID_, number>>);
        get activeEntity(): ($LivingEntity) | undefined;
    }
    export class $AngerManagement$Sorter extends $Record implements $Comparator<$Entity> {
        reversed(): $Comparator<$Entity>;
        thenComparing<U>(arg0: $Function_<$Entity, U>, arg1: $Comparator<U>): $Comparator<$Entity>;
        thenComparing(arg0: $Comparator<$Entity>): $Comparator<$Entity>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$Entity, U>): $Comparator<$Entity>;
        thenComparingInt(arg0: $ToIntFunction_<$Entity>): $Comparator<$Entity>;
        thenComparingLong(arg0: $ToLongFunction_<$Entity>): $Comparator<$Entity>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$Entity>): $Comparator<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $AngerManagement$Sorter}.
     */
    export type $AngerManagement$Sorter_ = { angerManagement?: $AngerManagement,  } | [angerManagement?: $AngerManagement, ];
}
