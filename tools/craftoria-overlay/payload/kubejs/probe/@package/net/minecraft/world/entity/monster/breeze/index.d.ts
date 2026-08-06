import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Behavior$Status, $Behavior, $MoveToTargetSink } from "@package/net/minecraft/world/entity/ai/behavior";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $AnimationState, $EntityDimensions, $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $WalkAnimationState, $EntityType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $HashMap, $Stack, $Map } from "@package/java/util";
import { $MemoryStatus, $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $NonNullList, $Holder } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Monster } from "@package/net/minecraft/world/entity/monster";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/entity/monster/breeze" {
    export class $Slide extends $Behavior<$Breeze> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $BreezeUtil {
        static hasLineOfSight(breeze: $Breeze, pos: $Vec3_): boolean;
        static randomPointBehindTarget(target: $LivingEntity, random: $RandomSource): $Vec3;
        constructor();
    }
    export class $BreezeAi$SlideToTargetSink extends $MoveToTargetSink {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number, arg1: number);
    }
    export class $LongJump extends $Behavior<$Breeze> {
        static canRun(level: $ServerLevel, breeze: $Breeze): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $ShootWhenStuck extends $Behavior<$Breeze> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $Breeze extends $Monster {
        getHurtBy(): ($LivingEntity) | undefined;
        /**
         * Plays living's sound at its position
         */
        playWhirlSound(): void;
        getSnoutYPosition(): number;
        resetJumpTrail(): $Breeze;
        emitGroundParticles(count: number): void;
        /**
         * Plays living's sound at its position
         */
        emitJumpTrailParticles(): void;
        withinInnerCircleRange(pos: $Vec3_): boolean;
        static createAttributes(): $AttributeSupplier$Builder;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        armorItems: $NonNullList<$ItemStack>;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
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
        slide: $AnimationState;
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
        slideBack: $AnimationState;
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
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
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
        shoot: $AnimationState;
        longJump: $AnimationState;
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
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        drinkTime: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        inhale: $AnimationState;
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
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        spells: $HashMap<any, any>;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        idle: $AnimationState;
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
        get hurtBy(): ($LivingEntity) | undefined;
        get snoutYPosition(): number;
    }
    export class $Shoot extends $Behavior<$Breeze> {
        static isFacingTarget(breeze: $Breeze, target: $LivingEntity): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $BreezeAi {
        static JUMP_CIRCLE_INNER_RADIUS: number;
        static JUMP_CIRCLE_MIDDLE_RADIUS: number;
        static SPEED_MULTIPLIER_WHEN_SLIDING: number;
        static JUMP_CIRCLE_OUTER_RADIUS: number;
        constructor();
    }
}
