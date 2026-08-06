import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $EntityType_, $OwnableEntity, $VariantHolder, $PortalProcessor, $Pose_, $PlayerRideableJumping, $EntityType, $AnimationState, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $Saddleable, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $HashMap, $UUID, $UUID_, $Stack, $Map } from "@package/java/util";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $InteractionResult, $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Predicate, $IntFunction } from "@package/java/util/function";
import { $SoundEvent, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Behavior, $Behavior$Status } from "@package/net/minecraft/world/entity/ai/behavior";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MemoryModuleType, $MemoryStatus } from "@package/net/minecraft/world/entity/ai/memory";
import { $EntityDataAccessor, $SynchedEntityData$Builder } from "@package/net/minecraft/network/syncher";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/animal/sniffer" {
    export class $SnifferAi$Digging extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
    }
    export class $SnifferAi$Sniffing extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
    }
    export class $SnifferAi$Searching extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
    }
    export class $SnifferAi$Scenting extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
    }
    export class $SnifferAi$FeelingHappy extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
    }
    export class $SnifferAi$FinishedDigging extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
    }
    export class $SnifferAi {
        static getTemptations(): $Predicate<$ItemStack>;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $Sniffer extends $Animal implements $OwnableEntity, $VariantHolder<any>, $PlayerRideableJumping, $Saddleable {
        setVariant(attribute: $Holder_<any>): void;
        getHeadBlock(): $BlockPos;
        /**
         * Sets the amount of arrows stuck in the entity. Used for rendering those.
         */
        onPlayerJump(count: number): void;
        getOwnerUUID(): $UUID;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canJump(): boolean;
        handler$fke000$sussysniffers$canDigWhenVehicle(arg0: $CallbackInfoReturnable<any>): boolean;
        handler$fke000$sussysniffers$dropSussyStuff(arg0: $CallbackInfo): void;
        handler$fke000$sussysniffers$defineVariantSynchedData(arg0: $SynchedEntityData$Builder, arg1: $CallbackInfo): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canPlayDiggingSound(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isSaddled(): boolean;
        handler$fke000$sussysniffers$useTameItem(arg0: $Player, arg1: $InteractionHand_, arg2: $CallbackInfoReturnable<any>): $InteractionResult;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canSniff(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isTempted(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isSearching(): boolean;
        transitionTo(state: $Sniffer$State_): $Sniffer;
        onDiggingComplete(storeExploredPosition: boolean): $Sniffer;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isSaddleable(): boolean;
        /**
         * Sets the amount of arrows stuck in the entity. Used for rendering those.
         */
        handleStartJump(count: number): void;
        /**
         * Causes this entity to do an upwards motion (jumping).
         */
        handleStopJump(): void;
        equipSaddle(stack: $ItemStack_, soundSource: $SoundSource_): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        setOwnerUUID(uniqueId: $UUID_): void;
        static createAttributes(): $AttributeSupplier$Builder;
        getOwner(): $LivingEntity;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getJumpCooldown(): number;
        getSaddleSoundEvent(): $SoundEvent;
        getVariant(): $Object;
        serializeNBT(arg0: $HolderLookup$Provider): $Object;
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
        feelingHappyAnimationState: $AnimationState;
        an_isRewinding: boolean;
        noPhysics: boolean;
        fallFlyTicks: number;
        yo: number;
        static DATA_DROP_SEED_AT_TICK: $EntityDataAccessor<number>;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        risingAnimationState: $AnimationState;
        static ID_TAG: string;
        sniffingAnimationState: $AnimationState;
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
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
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
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        scentingAnimationState: $AnimationState;
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
        constructor(entityType: $EntityType_<$Animal>, level: $Level_);
        get headBlock(): $BlockPos;
        get saddled(): boolean;
        get tempted(): boolean;
        get searching(): boolean;
        get saddleable(): boolean;
        get owner(): $LivingEntity;
        get jumpCooldown(): number;
        get saddleSoundEvent(): $SoundEvent;
    }
    export class $Sniffer$State extends $Enum<$Sniffer$State> {
        static values(): $Sniffer$State[];
        static valueOf(arg0: string): $Sniffer$State;
        id(): number;
        static SNIFFING: $Sniffer$State;
        static IDLING: $Sniffer$State;
        static SCENTING: $Sniffer$State;
        static BY_ID: $IntFunction<$Sniffer$State>;
        static DIGGING: $Sniffer$State;
        static RISING: $Sniffer$State;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Sniffer$State>;
        static FEELING_HAPPY: $Sniffer$State;
        static SEARCHING: $Sniffer$State;
    }
    /**
     * Values that may be interpreted as {@link $Sniffer$State}.
     */
    export type $Sniffer$State_ = "idling" | "feeling_happy" | "scenting" | "sniffing" | "searching" | "digging" | "rising";
}
