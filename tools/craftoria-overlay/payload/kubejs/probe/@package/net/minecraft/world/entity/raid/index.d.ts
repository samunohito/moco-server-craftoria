import { $Level } from "@package/net/minecraft/world/level";
import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $PortalProcessor, $EntityType, $Entity, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $HashMap, $Stack, $Map, $Set } from "@package/java/util";
import { $InteractionHand, $Difficulty_ } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_, $NonNullList, $HolderGetter } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $PatrollingMonster } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";

declare module "@package/net/minecraft/world/entity/raid" {
    export class $Raider$RaiderCelebration extends $Goal {
    }
    export class $Raider$ObtainRaidLeaderBannerGoal<T extends $Raider> extends $Goal {
    }
    export class $Raid {
        isStarted(): boolean;
        stop(): void;
        getId(): number;
        save(compound: $CompoundTag_): $CompoundTag;
        isActive(): boolean;
        getLevel(): $Level;
        isStopped(): boolean;
        tick(): void;
        static getLeaderBannerInstance(patternRegistry: $HolderGetter<$BannerPattern_>): $ItemStack;
        getRaidOmenLevel(): number;
        isOver(): boolean;
        isLoss(): boolean;
        setLeader(wave: number, raider: $Raider): void;
        getLeader(wave: number): $Raider;
        joinRaid(wave: number, raider: $Raider, pos: $BlockPos_ | null, isRecruited: boolean): void;
        addWaveMob(wave: number, raider: $Raider, isRecruited: boolean): boolean;
        addHeroOfTheVillage(player: $Entity): void;
        getMaxRaidOmenLevel(): number;
        getCenter(): $BlockPos;
        removeLeader(wave: number): void;
        removeFromRaid(raider: $Raider, wanderedOutOfRaid: boolean): void;
        updateBossbar(): void;
        getGroupsSpawned(): number;
        getEnchantOdds(): number;
        getNumGroups(difficulty: $Difficulty_): number;
        isVictory(): boolean;
        hasFirstWaveSpawned(): boolean;
        getHealthOfLivingRaiders(): number;
        getTotalRaidersAlive(): number;
        setRaidOmenLevel(wave: number): void;
        absorbRaidOmen(player: $ServerPlayer): boolean;
        getAllRaiders(): $Set<$Raider>;
        getTotalHealth(): number;
        isBetweenWaves(): boolean;
        static RAID_REMOVAL_THRESHOLD_SQR: number;
        numGroups: number;
        static TICKS_PER_DAY: number;
        static VILLAGE_RADIUS_BUFFER: number;
        static MAX_CELEBRATION_TICKS: number;
        static VALID_RAID_RADIUS_SQR: number;
        static MAX_NO_ACTION_TIME: number;
        static DEFAULT_MAX_RAID_OMEN_LEVEL: number;
        constructor(id: number, level: $ServerLevel, center: $BlockPos_);
        constructor(level: $ServerLevel, compound: $CompoundTag_);
        get started(): boolean;
        get id(): number;
        get active(): boolean;
        get level(): $Level;
        get stopped(): boolean;
        get over(): boolean;
        get loss(): boolean;
        get maxRaidOmenLevel(): number;
        get center(): $BlockPos;
        get groupsSpawned(): number;
        get enchantOdds(): number;
        get victory(): boolean;
        get healthOfLivingRaiders(): number;
        get totalRaidersAlive(): number;
        get allRaiders(): $Set<$Raider>;
        get totalHealth(): number;
        get betweenWaves(): boolean;
    }
    export class $Raid$RaiderType extends $Enum<$Raid$RaiderType> implements $IExtensibleEnum {
        static values(): $Raid$RaiderType[];
        static valueOf(arg0: string): $Raid$RaiderType;
        static getExtensionInfo(): $ExtensionInfo;
        static EVOKER: $Raid$RaiderType;
        static VINDICATOR: $Raid$RaiderType;
        static WITCH: $Raid$RaiderType;
        static PILLAGER: $Raid$RaiderType;
        static RAVAGER: $Raid$RaiderType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaiderType}.
     */
    export type $Raid$RaiderType_ = "vindicator" | "evoker" | "pillager" | "witch" | "ravager";
    export class $Raider$RaiderMoveThroughVillageGoal extends $Goal {
    }
    export class $Raid$RaidStatus extends $Enum<$Raid$RaidStatus> {
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaidStatus}.
     */
    export type $Raid$RaidStatus_ = "ongoing" | "victory" | "loss" | "stopped";
    export class $Raider$HoldGroundAttackGoal extends $Goal {
    }
    export class $Raids extends $SavedData {
        get(id: number): $Raid;
        static load(level: $ServerLevel, tag: $CompoundTag_): $Raids;
        static factory(level: $ServerLevel): $SavedData$Factory<$Raids>;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        tick(): void;
        createOrExtendRaid(player: $ServerPlayer, pos: $BlockPos_): $Raid;
        getNearbyRaid(pos: $BlockPos_, distance: number): $Raid;
        static getFileId(dimensionTypeHolder: $Holder_<$DimensionType>): string;
        static canJoinRaid(raider: $Raider, raid: $Raid): boolean;
        constructor(level: $ServerLevel);
    }
    export class $Raider extends $PatrollingMonster {
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCaptain(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getWave(): number;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasRaid(): boolean;
        setWave(ticksOutsideRaid: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksOutsideRaid(): number;
        setTicksOutsideRaid(ticksOutsideRaid: number): void;
        setCanJoinRaid(canJoinRaid: boolean): void;
        getCelebrateSound(): $SoundEvent;
        setCurrentRaid(raid: $Raid | null): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canJoinRaid(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasActiveRaid(): boolean;
        getCurrentRaid(): $Raid;
        setCelebrating(canJoinRaid: boolean): void;
        applyRaidBuffs(level: $ServerLevel, wave: number, unused: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCelebrating(): boolean;
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
        get captain(): boolean;
        get celebrateSound(): $SoundEvent;
    }
}
