import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $EntityType_, $VariantHolder, $EntityType, $EntityDimensions, $Entity$RemovalReason, $AgeableMob, $WalkAnimationState, $Mob, $PortalProcessor, $Entity, $ReputationEventHandler } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $GossipContainer } from "@package/net/minecraft/world/entity/ai/gossip";
import { $HashMap, $Stack, $Map, $Set, $List, $Map_, $Optional } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand, $SimpleContainer, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Predicate_, $Predicate, $BiPredicate } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $HolderLookup$Provider, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $MerchantOffer, $MerchantOffers, $Merchant, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
import { $ItemLike_, $Level, $CustomSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $PoiManager, $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SuspiciousStewEffects_ } from "@package/net/minecraft/world/item/component";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $MemoryModuleType_, $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $VillagerAccessor } from "@package/de/maxhenkel/tradecycling/mixin";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/npc" {
    /**
     * @param requestedItems Defines items villagers of this profession can pick up and use.
     * @param secondaryPoi World blocks this profession interacts with.
     */
    export class $VillagerProfession extends $Record {
        name(): string;
        workSound(): $SoundEvent;
        secondaryPoi(): $ImmutableSet<$Block>;
        requestedItems(): $ImmutableSet<$Item>;
        heldJobSite(): $Predicate<$Holder<$PoiType>>;
        acquirableJobSite(): $Predicate<$Holder<$PoiType>>;
        static CARTOGRAPHER: $VillagerProfession;
        static MASON: $VillagerProfession;
        static SHEPHERD: $VillagerProfession;
        static ARMORER: $VillagerProfession;
        static TOOLSMITH: $VillagerProfession;
        static FARMER: $VillagerProfession;
        static FLETCHER: $VillagerProfession;
        static NITWIT: $VillagerProfession;
        static LEATHERWORKER: $VillagerProfession;
        static LIBRARIAN: $VillagerProfession;
        static CLERIC: $VillagerProfession;
        static FISHERMAN: $VillagerProfession;
        static BUTCHER: $VillagerProfession;
        static WEAPONSMITH: $VillagerProfession;
        static ALL_ACQUIRABLE_JOBS: $Predicate<$Holder<$PoiType>>;
        static NONE: $VillagerProfession;
        constructor(name: string, heldJobSite: $Predicate_<$Holder<$PoiType>>, acquirableJobSite: $Predicate_<$Holder<$PoiType>>, requestedItems: $ImmutableSet<$Item_>, secondaryPoi: $ImmutableSet<$Block_>, workSound: $SoundEvent_ | null);
    }
    /**
     * Values that may be interpreted as {@link $VillagerProfession}.
     */
    export type $VillagerProfession_ = RegistryTypes.VillagerProfession | { secondaryPoi?: $ImmutableSet<$Block_>, acquirableJobSite?: $Predicate_<$Holder<$PoiType>>, workSound?: $SoundEvent_, requestedItems?: $ImmutableSet<$Item_>, name?: string, heldJobSite?: $Predicate_<$Holder<$PoiType>>,  } | [secondaryPoi?: $ImmutableSet<$Block_>, acquirableJobSite?: $Predicate_<$Holder<$PoiType>>, workSound?: $SoundEvent_, requestedItems?: $ImmutableSet<$Item_>, name?: string, heldJobSite?: $Predicate_<$Holder<$PoiType>>, ];
    export class $AbstractVillager extends $AgeableMob implements $InventoryCarrier, $Npc, $Merchant {
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isTrading(): boolean;
        overrideXp(xp: number): void;
        getInventory(): $SimpleContainer;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getUnhappyCounter(): number;
        setUnhappyCounter(xp: number): void;
        getNotifyTradeSound(): $SoundEvent;
        getOffers(): $MerchantOffers;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isClientSide(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getVillagerXp(): number;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        showProgressBar(): boolean;
        setTradingPlayer(player: $Player | null): void;
        getTradingPlayer(): $Player;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        playCelebrateSound(): void;
        /**
         * Notifies the merchant of a possible merchant recipe being fulfilled or not. Usually, this is just a sound byte being played depending on whether the suggested `ItemStack` is not empty.
         */
        notifyTradeUpdated(stack: $ItemStack_): void;
        overrideOffers(offers: $MerchantOffers | null): void;
        notifyTrade(offer: $MerchantOffer): void;
        readInventoryFromTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        writeInventoryToTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canRestock(): boolean;
        openTradingScreen(player: $Player, displayName: $Component_, level: number): void;
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
        static VILLAGER_SLOT_OFFSET: number;
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
        offers: $MerchantOffers;
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
        constructor(entityType: $EntityType_<$AbstractVillager>, level: $Level_);
        get trading(): boolean;
        get inventory(): $SimpleContainer;
        get notifyTradeSound(): $SoundEvent;
        get clientSide(): boolean;
        get villagerXp(): number;
    }
    export class $WanderingTrader extends $AbstractVillager {
        handler$bed000$supplementaries$supp$addOpenDoor(arg0: $CallbackInfo): void;
        mobInteract(player: $Player, hand: $InteractionHand_): $InteractionResult;
        setWanderTarget(wanderTarget: $BlockPos_ | null): void;
        setDespawnDelay(despawnDelay: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getDespawnDelay(): number;
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
        static VILLAGER_SLOT_OFFSET: number;
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
        offers: $MerchantOffers;
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
        constructor(entityType: $EntityType_<$WanderingTrader>, level: $Level_);
        set wanderTarget(value: $BlockPos_ | null);
    }
    export class $VillagerTrades$ItemsForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(item: $Item_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number, priceMultiplier: number);
        constructor(item: $Item_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number, priceMultiplier: number, enchantmentProvider: $ResourceKey_<$EnchantmentProvider>);
        constructor(itemStack: $ItemStack_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number, priceMultiplier: number);
        constructor(itemStack: $ItemStack_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number, priceMultiplier: number, enchantmentProvider: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(block: $Block_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number);
        constructor(item: $Item_, emeraldCost: number, numberOfItems: number, villagerXp: number);
        constructor(item: $Item_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number);
        constructor(itemStack: $ItemStack_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number);
    }
    export interface $VillagerProfession extends RegistryMarked<RegistryTypes.VillagerProfessionTag, RegistryTypes.VillagerProfession> {}
    export class $VillagerTrades$EnchantBookForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(villagerXp: number, tradeableEnchantments: $TagKey_<$Enchantment>);
        constructor(villagerXp: number, minLevel: number, maxLevel: number, tradeableEnchantments: $TagKey_<$Enchantment>);
    }
    export class $WanderingTrader$WanderToPositionGoal extends $Goal {
    }
    export class $InventoryCarrier {
        static pickUpItem(mob: $Mob, carrier: $InventoryCarrier_, itemEntity: $ItemEntity): void;
        static TAG_INVENTORY: string;
    }
    export interface $InventoryCarrier {
        readInventoryFromTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        writeInventoryToTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        getInventory(): $SimpleContainer;
        get inventory(): $SimpleContainer;
    }
    /**
     * Values that may be interpreted as {@link $InventoryCarrier}.
     */
    export type $InventoryCarrier_ = (() => $SimpleContainer);
    export class $VillagerTrades$TreasureMapForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        handler$bap000$supplementaries$turnToQuill(arg0: $Entity, arg1: $RandomSource, arg2: $CallbackInfoReturnable<any>): void;
        constructor(emeraldCost: number, destination: $TagKey_<$Structure>, displayName: string, destinationType: $Holder_<$MapDecorationType>, maxUses: number, villagerXp: number);
    }
    export class $Villager extends $AbstractVillager implements $ReputationEventHandler, $VillagerDataHolder, $VillagerAccessor {
        handler$gni000$jinxedlib$wantsToPickUp(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Villager;
        mobInteract(player: $Player, hand: $InteractionHand_): $InteractionResult;
        releasePoi(moduleType: $MemoryModuleType_<$GlobalPos_>): void;
        setChasing(chasing: boolean): void;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        isChasing(): boolean;
        gossip(serverLevel: $ServerLevel, target: $Villager, gameTime: number): void;
        wantsToSpawnGolem(gameTime: number): boolean;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        assignProfessionWhenSpawned(): boolean;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        shouldIncreaseLevel(): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        increaseMerchantCareer(): void;
        /**
         * Called to update the entity's position/logic.
         */
        restock(): void;
        onReputationEventFrom(type: $ReputationEventType, target: $Entity): void;
        setGossips(gossip: $Tag_): void;
        getGossips(): $GossipContainer;
        setVillagerData(data: $VillagerData): void;
        setVillagerXp(qty: number): void;
        getVillagerData(): $VillagerData;
        refreshBrain(serverLevel: $ServerLevel): void;
        static createAttributes(): $AttributeSupplier$Builder;
        spawnGolemIfNeeded(serverLevel: $ServerLevel, gameTime: number, arg2: number): void;
        startTrading(player: $Player): void;
        /**
         * Called to update the entity's position/logic.
         */
        eatAndDigestFood(): void;
        /**
         * Called to update the entity's position/logic.
         */
        playWorkSound(): void;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        shouldRestock(): boolean;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        hasExcessFood(): boolean;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        hasFarmSeeds(): boolean;
        getPlayerReputation(player: $Player): number;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        wantsMoreFood(): boolean;
        setOffers(offers: $MerchantOffers): void;
        setVariant(variant: $VillagerType_): void;
        getVariant(): $VillagerType;
        invokeUpdateSpecialPrices(player: $Player): void;
        serializeNBT(arg0: $HolderLookup$Provider): $VillagerType;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        armorItems: $NonNullList<$ItemStack>;
        static DEFAULT_BASE_GRAVITY: number;
        lastRestockGameTime: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        ars_Nouveau$motions: $Stack<any>;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        static VILLAGER_SLOT_OFFSET: number;
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
        increaseProfessionLevelOnUpdate: boolean;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        static FOOD_POINTS: $Map<$Item, number>;
        attackAnim: number;
        zOld: number;
        static WANTED_ITEMS: $Set<$Item>;
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
        offers: $MerchantOffers;
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
        static MEMORY_TYPES: $ImmutableList<$MemoryModuleType<never>>;
        static EQUIPMENT_SLOT_OFFSET: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static BREEDING_FOOD_THRESHOLD: number;
        static POI_MEMORIES: $Map<$MemoryModuleType<$GlobalPos>, $BiPredicate<$Villager, $Holder<$PoiType>>>;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static SPEED_MODIFIER: number;
        lastGossipTime: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        spells: $HashMap<any, any>;
        updateMerchantTimer: number;
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
        constructor(entityType: $EntityType_<$Villager>, level: $Level_);
        constructor(entityType: $EntityType_<$Villager>, level: $Level_, villagerType: $VillagerType_);
        set villagerXp(value: number);
    }
    export class $VillagerTrades$DyedArmorForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(item: $Item_, value: number);
        constructor(item: $Item_, value: number, maxUses: number, villagerXp: number);
    }
    export class $VillagerTrades$TypeSpecificTrade extends $Record implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        trades(): $Map<$VillagerType, $VillagerTrades$ItemListing>;
        static oneTradeInBiomes(listing: $VillagerTrades$ItemListing_, ...types: $VillagerType_[]): $VillagerTrades$TypeSpecificTrade;
        constructor(trades: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>);
    }
    /**
     * Values that may be interpreted as {@link $VillagerTrades$TypeSpecificTrade}.
     */
    export type $VillagerTrades$TypeSpecificTrade_ = { trades?: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>,  } | [trades?: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>, ];
    export class $ClientSideMerchant implements $Merchant {
        overrideXp(xp: number): void;
        getNotifyTradeSound(): $SoundEvent;
        getOffers(): $MerchantOffers;
        isClientSide(): boolean;
        getVillagerXp(): number;
        showProgressBar(): boolean;
        setTradingPlayer(source: $Player | null): void;
        getTradingPlayer(): $Player;
        /**
         * Notifies the merchant of a possible merchant recipe being fulfilled or not. Usually, this is just a sound byte being played depending on whether the suggested `ItemStack` is not empty.
         */
        notifyTradeUpdated(stack: $ItemStack_): void;
        overrideOffers(offers: $MerchantOffers): void;
        notifyTrade(offer: $MerchantOffer): void;
        canRestock(): boolean;
        openTradingScreen(player: $Player, displayName: $Component_, level: number): void;
        constructor(source: $Player);
        get notifyTradeSound(): $SoundEvent;
        get offers(): $MerchantOffers;
        get clientSide(): boolean;
        get villagerXp(): number;
    }
    export class $VillagerTrades$EnchantedItemForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(item: $Item_, baseEmeraldCost: number, maxUses: number, villagerXp: number);
        constructor(item: $Item_, baseEmeraldCost: number, maxUses: number, villagerXp: number, priceMultiplier: number);
    }
    export class $VillagerTrades {
        static EXPERIMENTAL_WANDERING_TRADER_TRADES: $List<$Pair<$VillagerTrades$ItemListing[], number>>;
        static EXPERIMENTAL_TRADES: $Map<$VillagerProfession, $Int2ObjectMap<$VillagerTrades$ItemListing[]>>;
        static TRADES: $Map<$VillagerProfession, $Int2ObjectMap<$VillagerTrades$ItemListing[]>>;
        static WANDERING_TRADER_TRADES: $Int2ObjectMap<$VillagerTrades$ItemListing[]>;
        constructor();
    }
    export class $Npc {
    }
    export interface $Npc {
    }
    export class $VillagerTrades$SuspiciousStewForEmerald implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(effect: $Holder_<$MobEffect>, duration: number, xp: number);
        constructor(effects: $SuspiciousStewEffects_, xp: number, priceMultiplier: number);
    }
    export class $VillagerData {
        getType(): $VillagerType;
        setType(type: $VillagerType_): $VillagerData;
        setLevel(level: number): $VillagerData;
        getLevel(): number;
        static getMinXpPerLevel(level: number): number;
        getProfession(): $VillagerProfession;
        static canLevelUp(level: number): boolean;
        setProfession(profession: $VillagerProfession_): $VillagerData;
        static getMaxXpPerLevel(level: number): number;
        static CODEC: $Codec<$VillagerData>;
        static MIN_VILLAGER_LEVEL: number;
        static MAX_VILLAGER_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $VillagerData>;
        constructor(type: $VillagerType_, profession: $VillagerProfession_, level: number);
    }
    export class $VillagerTrades$ItemsAndEmeraldsToItems implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(fromItem: $ItemCost_, emeraldCost: number, toItem: $ItemStack_, maxUses: number, villagerXp: number, priceMultiplier: number, enchantmentProvider: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(fromItem: $ItemLike_, fromItemCount: number, emeraldCost: number, toItem: $Item_, toItemCount: number, maxUses: number, villagerXp: number, priceMultiplier: number);
    }
    export class $VillagerTrades$EmeraldsForVillagerTypeItem implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(cost: number, maxUses: number, villagerXp: number, trades: $Map_<$VillagerType_, $Item_>);
    }
    export interface $VillagerType extends RegistryMarked<RegistryTypes.VillagerTypeTag, RegistryTypes.VillagerType> {}
    export class $CatSpawner implements $CustomSpawner {
        tick(level: $ServerLevel, spawnHostiles: boolean, spawnPassives: boolean): number;
        constructor();
    }
    export class $VillagerDataHolder {
    }
    export interface $VillagerDataHolder extends $VariantHolder<$VillagerType> {
        setVariant(variant: $VillagerType_): void;
        getVariant(): $VillagerType;
        setVillagerData(data: $VillagerData): void;
        getVillagerData(): $VillagerData;
    }
    export class $VillagerTrades$TippedArrowForItemsAndEmeralds implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(fromItem: $Item_, fromCount: number, toItem: $Item_, toCount: number, emeraldCost: number, maxUses: number, villagerXp: number);
    }
    export class $VillagerType {
        static byBiome(biome: $Holder_<$Biome>): $VillagerType;
        static SAVANNA: $VillagerType;
        static JUNGLE: $VillagerType;
        static SNOW: $VillagerType;
        static PLAINS: $VillagerType;
        static TAIGA: $VillagerType;
        static DESERT: $VillagerType;
        static SWAMP: $VillagerType;
        constructor(name: string);
    }
    /**
     * Values that may be interpreted as {@link $VillagerType}.
     */
    export type $VillagerType_ = RegistryTypes.VillagerType;
    export class $VillagerTrades$ItemListing {
    }
    export interface $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
    }
    /**
     * Values that may be interpreted as {@link $VillagerTrades$ItemListing}.
     */
    export type $VillagerTrades$ItemListing_ = ((arg0: $Entity, arg1: $RandomSource) => $MerchantOffer);
    export class $WanderingTraderSpawner implements $CustomSpawner {
        tick(level: $ServerLevel, spawnHostiles: boolean, spawnPassives: boolean): number;
        constant$fpa000$apotheosis$replaceRng(arg0: number): number;
        constant$fpa000$apotheosis$replaceDespawnDelay(arg0: number): number;
        constant$fpa000$apotheosis$replaceMaxChance(arg0: number): number;
        handler$bdk000$supplementaries$supp$tickRedMerchant(arg0: $ServerLevel, arg1: boolean, arg2: boolean, arg3: $CallbackInfoReturnable<any>): void;
        handler$bdk000$supplementaries$supp$spawnRedMerchant(arg0: $ServerLevel, arg1: $CallbackInfoReturnable<any>): void;
        handler$jbg000$gag$stopSpawn(arg0: $ServerLevel, arg1: $CallbackInfoReturnable<any>, arg2: $Player, arg3: $BlockPos_, arg4: number, arg5: $PoiManager, arg6: $Optional<any>, arg7: $BlockPos_): void;
        static DEFAULT_SPAWN_DELAY: number;
        constructor(serverLevelData: $ServerLevelData);
    }
    export class $VillagerTrades$EmeraldForItems implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(itemStack: $ItemCost_, maxUses: number, villagerXp: number, emeraldAmount: number);
        constructor(item: $ItemLike_, cost: number, maxUses: number, villagerXp: number, emeraldAmount: number);
        constructor(item: $ItemLike_, cost: number, maxUses: number, villagerXp: number);
    }
    export class $VillagerTrades$FailureItemListing implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
    }
}
