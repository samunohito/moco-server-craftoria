import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $EntityType_, $PortalProcessor, $EntityType, $PathfinderMob, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $GameEventListener, $GameEvent, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $HashMap, $Stack, $Map } from "@package/java/util";
import { $InventoryCarrier } from "@package/net/minecraft/world/entity/npc";
import { $InteractionHand, $SimpleContainer, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/animal/allay" {
    export class $Allay$JukeboxListener implements $GameEventListener {
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $Allay extends $PathfinderMob implements $InventoryCarrier, $VibrationSystem {
        getSpinningProgress(partialTick: number): number;
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        getHoldingItemAnimationProgress(partialTick: number): number;
        handler$cfo000$blahaj$preventTakePlush(arg0: $Player, arg1: $InteractionHand_, arg2: $CallbackInfoReturnable<any>): void;
        getInventory(): $SimpleContainer;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isFlapping(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isDancing(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isSpinning(): boolean;
        setDancing(dancing: boolean): void;
        setJukeboxPlaying(jukeboxPos: $BlockPos_, jukeboxPlaying: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasItemInHand(): boolean;
        static createAttributes(): $AttributeSupplier$Builder;
        readInventoryFromTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        writeInventoryToTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
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
        static THROW_SOUND_PITCHES: $ImmutableList<number>;
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
        s_bee: $EntityType<any>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        spinningAnimationTicks0: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        holdingItemAnimationTicks: number;
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
        dancingAnimationTicks: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        spinningAnimationTicks: number;
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
        holdingItemAnimationTicks0: number;
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
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        duplicationCooldown: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Allay>, level: $Level_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get inventory(): $SimpleContainer;
        get flapping(): boolean;
        get spinning(): boolean;
    }
    export class $AllayAi {
        static updateActivity(allay: $Allay): void;
        static getLikedPlayer(entity: $LivingEntity): ($ServerPlayer) | undefined;
        static hearNoteblock(entity: $LivingEntity, pos: $BlockPos_): void;
        constructor();
    }
    export class $Allay$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
}
