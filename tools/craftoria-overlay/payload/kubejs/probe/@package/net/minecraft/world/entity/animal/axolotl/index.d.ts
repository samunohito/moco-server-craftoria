import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $SmoothSwimmingMoveControl, $MoveControl, $MoveControl$Operation, $LookControl, $SmoothSwimmingLookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Codec } from "@package/com/mojang/serialization";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $EntityType_, $PortalProcessor, $VariantHolder, $LerpingModel, $EntityType, $AgeableMob$AgeableMobGroupData, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $HashMap, $Stack, $Map } from "@package/java/util";
import { $Bucketable, $Animal } from "@package/net/minecraft/world/entity/animal";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $HolderLookup$Provider, $BlockPos, $Holder, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Behavior, $Behavior$Status, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $ServerLevelAccessor, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MemoryModuleType, $MemoryStatus } from "@package/net/minecraft/world/entity/ai/memory";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/minecraft/world/entity/animal/axolotl" {
    export class $PlayDead extends $Behavior<$Axolotl> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $ValidatePlayDead {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $Axolotl$AxolotlLookControl extends $SmoothSwimmingLookControl {
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
    }
    export class $Axolotl$AxolotlGroupData extends $AgeableMob$AgeableMobGroupData {
        getVariant(random: $RandomSource): $Axolotl$Variant;
        types: $Axolotl$Variant[];
        constructor(...types: $Axolotl$Variant_[]);
    }
    export class $AxolotlAi {
        static getTemptations(): $Predicate<$ItemStack>;
        static updateActivity(axolotl: $Axolotl): void;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $Axolotl$AxolotlMoveControl extends $SmoothSwimmingMoveControl {
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
    }
    export class $Axolotl extends $Animal implements $LerpingModel, $VariantHolder<$Axolotl$Variant>, $Bucketable {
        setVariant(variant: $Axolotl$Variant_): void;
        getVariant(): $Axolotl$Variant;
        /**
         * Gets called every tick from main Entity class
         */
        playAttackSound(): void;
        /**
         * Gets called every tick from main Entity class
         */
        rehydrate(): void;
        getModelRotationValues(): $Map<string, $Vector3f>;
        applySupportingEffects(player: $Player): void;
        static checkAxolotlSpawnRules(axolotl: $EntityType_<$LivingEntity>, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        fromBucket(): boolean;
        static onStopAttacking(axolotl: $Axolotl, target: $LivingEntity): void;
        setPlayingDead(fromBucket: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isPlayingDead(): boolean;
        setFromBucket(fromBucket: boolean): void;
        loadFromBucketTag(compound: $CompoundTag_): void;
        saveToBucketTag(stack: $ItemStack_): void;
        getBucketItemStack(): $ItemStack;
        static createAttributes(): $AttributeSupplier$Builder;
        getPickupSound(): $SoundEvent;
        serializeNBT(arg0: $HolderLookup$Provider): $Axolotl$Variant;
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
        static TOTAL_PLAYDEAD_TIME: number;
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
        static VARIANT_TAG: string;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static RARE_VARIANT_CHANCE: number;
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
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        spells: $HashMap<any, any>;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        static PLAYER_REGEN_DETECTION_RANGE: number;
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
        constructor(entityType: $EntityType_<$Axolotl>, level: $Level_);
        get modelRotationValues(): $Map<string, $Vector3f>;
        get bucketItemStack(): $ItemStack;
        get pickupSound(): $SoundEvent;
    }
    export class $Axolotl$Variant extends $Enum<$Axolotl$Variant> implements $StringRepresentable {
        getName(): string;
        static values(): $Axolotl$Variant[];
        static valueOf(arg0: string): $Axolotl$Variant;
        getId(): number;
        static getRareSpawnVariant(random: $RandomSource): $Axolotl$Variant;
        static getCommonSpawnVariant(random: $RandomSource): $Axolotl$Variant;
        getSerializedName(): string;
        static byId(id: number): $Axolotl$Variant;
        getRemappedEnumConstantName(): string;
        static GOLD: $Axolotl$Variant;
        static WILD: $Axolotl$Variant;
        static CODEC: $Codec<$Axolotl$Variant>;
        static BLUE: $Axolotl$Variant;
        static LUCY: $Axolotl$Variant;
        static CYAN: $Axolotl$Variant;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Axolotl$Variant}.
     */
    export type $Axolotl$Variant_ = "lucy" | "wild" | "gold" | "cyan" | "blue";
}
