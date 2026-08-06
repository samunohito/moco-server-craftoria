import { $Goal, $PanicGoal, $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Long2ObjectMap, $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Sensing } from "@package/net/minecraft/world/entity/ai/sensing";
import { $EntityAccessor as $EntityAccessor$5 } from "@package/lv/id/bonne/animalpen/mixin/accessors";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_, $CompoundTag, $Tag_ } from "@package/net/minecraft/nbt";
import { $IClumpedOrb } from "@package/com/blamejared/clumps/helper";
import { $SpellData, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $Panda, $Fox, $SnowGolem, $Wolf, $Animal, $Cod, $Chicken, $Cat, $Squid, $Sheep, $Bee, $Dolphin, $Parrot, $Turtle, $Salmon, $Pufferfish, $IronGolem, $Ocelot, $PolarBear, $Cow, $Pig, $TropicalFish, $MushroomCow, $Rabbit } from "@package/net/minecraft/world/entity/animal";
import { $ILivingEntityExtension, $IEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $LambDynamicLight } from "@package/com/hollingsworth/arsnouveau/common/light";
import { $IsInsideStructureTracker$Access, $IsInsideStructureTracker } from "@package/corgitaco/corgilib/entity";
import { $EntityAccessor as $EntityAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $EntityAccessor } from "@package/einstein/subtle_effects/mixin/common/entity";
import { $LivingEntityExtensions as $LivingEntityExtensions$1 } from "@package/artifacts/extensions/pocketpiston";
import { $Component_, $HoverEvent, $Component } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $FluidLogicAccessor, $EntityTickerAccessor } from "@package/einstein/subtle_effects/util";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Snowball, $Projectile, $ShulkerBullet, $FishingHook, $WitherSkull, $DragonFireball, $SmallFireball, $SpectralArrow, $LargeFireball, $FireworkRocketEntity, $ThrownExperienceBottle, $EyeOfEnder, $Arrow, $ThrownEgg, $ThrownPotion, $ThrownTrident, $EvokerFangs, $ProjectileDeflection, $LlamaSpit, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $BalmEntity } from "@package/net/blay09/mods/balm/api/entity";
import { $ExperienceOrbAccess } from "@package/com/blamejared/clumps/mixin";
import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $LivingEntityAccessor as $LivingEntityAccessor$6 } from "@package/net/blay09/mods/clienttweaks/mixin";
import { $Husk, $Evoker, $Drowned, $WitherSkeleton, $Creeper, $Shulker, $Endermite, $Spider, $Blaze, $EnderMan, $MagmaCube, $Witch, $Bogged, $Vindicator, $Zombie, $Strider, $Guardian, $Slime, $ZombifiedPiglin, $Stray, $Silverfish, $Zoglin, $CaveSpider, $Skeleton, $Illusioner, $ZombieVillager, $Pillager, $ElderGuardian, $Ravager, $Phantom, $Vex, $Ghast, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $Vector3f } from "@package/org/joml";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $AccessorEntity } from "@package/net/darkhax/bookshelf/common/mixin/access/entity";
import { $GameEvent, $DynamicGameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $MobAccessorMixin } from "@package/com/hollingsworth/arsnouveau/common/mixin/jar";
import { $AccessorEntity as $AccessorEntity$1 } from "@package/top/theillusivec4/curios/mixin/core";
import { $Attribute, $AttributeMap, $AttributeSupplier$Builder, $AttributeInstance, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $LivingEntityAccessor as $LivingEntityAccessor$2 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Painting, $ArmorStand, $ItemFrame, $GlowItemFrame, $LeashFenceKnotEntity } from "@package/net/minecraft/world/entity/decoration";
import { $HashMap, $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $Optional, $Stack, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Donkey, $Llama, $Mule, $ZombieHorse, $Horse, $SkeletonHorse, $TraderLlama } from "@package/net/minecraft/world/entity/animal/horse";
import { $LivingAccessor, $EntityAccessor as $EntityAccessor$8, $MobAccessor as $MobAccessor$6 } from "@package/com/hollingsworth/arsnouveau/common/mixin";
import { $HolderLookup$Provider, $NonNullList, $Direction, $Holder_, $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $Holder, $Direction$Axis_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $LightSourceSettingEntry } from "@package/dev/lambdaurora/lambdynlights/config";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $FluidDefinition, $FluidDefinition_ } from "@package/einstein/subtle_effects/data";
import { $MobAccessor } from "@package/com/yungnickyoung/minecraft/yungscavebiomes/mixin/debug";
import { $MobAccessor as $MobAccessor$2, $LivingEntityAccessor as $LivingEntityAccessor$7, $EntityAccessor as $EntityAccessor$6 } from "@package/artifacts/mixin/accessors";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ExperienceOrbAccessor, $AgeableMobAccessor, $LivingEntityAccessor, $MobAccessor as $MobAccessor$1, $EntityAccessor as $EntityAccessor$9 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/entities";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Enum, $Iterable, $Class, $Object, $Record } from "@package/java/lang";
import { $EntityAccessor as $EntityAccessor$2 } from "@package/dev/tr7zw/transition/mixin";
import { $LivingEntityAccessor as $LivingEntityAccessor$1 } from "@package/net/blay09/mods/netherportalfix/mixin";
import { $ChunkPos, $Level_, $LevelReader, $EntityGetter, $Level, $ServerLevelAccessor, $Explosion, $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $EntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $AzAnimatorAccessor, $AzAnimator } from "@package/mod/azure/azurelib/common/animation";
import { $Fluid, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $MobInvoker } from "@package/lv/id/bonne/animalpen/mixin/invokers";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityAccessor as $EntityAccessor$3 } from "@package/com/mrcrayfish/furniture/refurbished/mixin";
import { $MagicEntityKJS } from "@package/com/squoshi/irons_spells_js/spell";
import { $KubeRayTraceResult, $EntityPotionEffectsJS } from "@package/dev/latvian/mods/kubejs/entity";
import { $SyncedDataHolder, $EntityDataAccessor_, $EntityDataAccessor, $SynchedEntityData, $SynchedEntityData$DataValue_ } from "@package/net/minecraft/network/syncher";
import { $MobAccessor as $MobAccessor$5 } from "@package/net/satisfy/farm_and_charm/neoforge/core/mixin";
import { $ITransmogPreview } from "@package/io/redspace/ironslib/patreon/transmog";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Tadpole, $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $CapeData, $ICapeDataProvider } from "@package/io/redspace/ironslib/game/client";
import { $DimensionTransition_, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $EntityAccess as $EntityAccess$1 } from "@package/snownee/jade/mixin";
import { $ExtensionHolder } from "@package/dev/tr7zw/transition/mc/extending";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource, $DamageSources, $DamageSource_, $CombatTracker } from "@package/net/minecraft/world/damagesource";
import { $Triple, $Triple_ } from "@package/com/supermartijn642/fusion/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $BreezeWindCharge, $WindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $FluidType, $FluidType_ } from "@package/net/neoforged/neoforge/fluids";
import { $LivingEntityInvoker } from "@package/dev/shadowsoffire/apotheosis/mixin";
import { $LivingEntityExtensions } from "@package/artifacts/extensions/ability";
import { $SyncedSpellData } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $DynamicLightHandlerHolder } from "@package/dev/lambdaurora/lambdynlights/accessor";
import { $StringRepresentable$EnumCodec, $FormattedCharSequence_, $FormattedCharSequence, $RandomSource, $OptionEnum, $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_, $Nameable, $Container, $InteractionResult, $DifficultyInstance, $InteractionHand } from "@package/net/minecraft/world";
import { $EntityLootDropInterface } from "@package/com/telepathicgrunt/the_bumblezone/loot";
import { $CrashReportCategory, $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $SoundEvent, $SoundSource, $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ConfigurableKnockback } from "@package/net/bettercombat/logic/knockback";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $EntityAccess as $EntityAccess$2, $EntityInLevelCallback, $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $SoundAction, $IShearable, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $EntityExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $ProjectileWeaponItem, $ItemStack_, $ItemStack, $ItemDisplayContext_, $ItemDisplayContext, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $MobEntityAccessor } from "@package/de/dafuqs/spectrum/mixin/accessors";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MobAccessor as $MobAccessor$3 } from "@package/net/satisfy/beachparty/neoforge/core/mixin";
import { $InjectedEntityTypeExtension } from "@package/dev/architectury/extensions/injected";
import { $EntityAccessor as $EntityAccessor$7, $LivingEntityAccessor as $LivingEntityAccessor$5 } from "@package/io/redspace/ironsspellbooks/mixin";
import { $EnchantmentLocationBasedEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Portal_, $Mirror_, $Portal$Transition, $Rotation_, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityKJS, $EntityTypeKJS, $LivingEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Transformation } from "@package/com/mojang/math";
import { $AABB_, $Vec3_, $HitResult, $AABB, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $MinecartFurnace, $MinecartHopper, $MinecartChest, $MinecartTNT, $MinecartCommandBlock, $Boat, $ChestBoat, $MinecartSpawner, $Minecart } from "@package/net/minecraft/world/entity/vehicle";
import { $MobAccess, $EntityAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $MoveControl, $LookControl, $JumpControl } from "@package/net/minecraft/world/entity/ai/control";
import { $IRewindable } from "@package/com/hollingsworth/arsnouveau/common/event/timed";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $EntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $IntFunction, $Predicate_, $Function_, $Supplier_, $BiConsumer_, $ToIntFunction_, $Consumer_, $Predicate, $Consumer, $BiPredicate_ } from "@package/java/util/function";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $LootParams, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";
import { $DynamicLightSource } from "@package/dev/lambdaurora/lambdynlights";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $MobAccessor as $MobAccessor$4 } from "@package/com/hollingsworth/nuggets/mixin";
import { LocalPlayer, AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $DisplayAccessor } from "@package/dev/tr7zw/entityculling/mixin";
import { $PiglinBrute, $Piglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $LivingEntityAccessor as $LivingEntityAccessor$3, $EntityAccessor as $EntityAccessor$4 } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $IEntity } from "@package/com/jesz/createdieselgenerators/mixin_interfaces";
import { $LivingEntityAccessor as $LivingEntityAccessor$4 } from "@package/net/bettercombat/mixin/player";
import { $EMFEntity } from "@package/traben/entity_model_features/utils";
import { $VecDeltaCodec, $ClientboundAddEntityPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $LEInvoker } from "@package/dev/shadowsoffire/apothic_attributes/util";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Stream } from "@package/java/util/stream";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $IMagicEntity } from "@package/io/redspace/ironsspellbooks/api/entity";
import { $PotionContents_ } from "@package/net/minecraft/world/item/alchemy";
import { $SpawnPlacementsAccessor } from "@package/com/yungnickyoung/minecraft/yungscavebiomes/mixin/accessor";
import { $PlayerTeam, $ScoreHolder, $Team } from "@package/net/minecraft/world/scores";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
export * as ai from "@package/net/minecraft/world/entity/ai";
export * as animal from "@package/net/minecraft/world/entity/animal";
export * as projectile from "@package/net/minecraft/world/entity/projectile";
export * as npc from "@package/net/minecraft/world/entity/npc";
export * as boss from "@package/net/minecraft/world/entity/boss";
export * as player from "@package/net/minecraft/world/entity/player";
export * as monster from "@package/net/minecraft/world/entity/monster";
export * as decoration from "@package/net/minecraft/world/entity/decoration";
export * as vehicle from "@package/net/minecraft/world/entity/vehicle";
export * as schedule from "@package/net/minecraft/world/entity/schedule";
export * as ambient from "@package/net/minecraft/world/entity/ambient";
export * as raid from "@package/net/minecraft/world/entity/raid";
export * as item from "@package/net/minecraft/world/entity/item";

declare module "@package/net/minecraft/world/entity" {
    export class $GlowSquid extends $Squid {
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getDarkTicksRemaining(): number;
        static checkGlowSquidSpawnRules(glowSquid: $EntityType_<$LivingEntity>, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
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
        tentacleAngle: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        oldTentacleAngle: number;
        armorDropChances: number[];
        persistenceRequired: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zBodyRot: number;
        zo: number;
        xBodyRot: number;
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
        zBodyRotO: number;
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
        xBodyRotO: number;
        tentacleMovement: number;
        spells: $HashMap<any, any>;
        oldTentacleMovement: number;
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
        constructor(entityType: $EntityType_<$GlowSquid>, level: $Level_);
        get darkTicksRemaining(): number;
    }
    /**
     * @return null or the LivingEntity it was ignited by
     */
    export class $LivingEntity extends $Entity implements $Attackable, $ILivingEntityExtension, $LivingEntityAccessor$3, $LivingEntityAccessor, $LivingEntityAccessor$6, $ICapeDataProvider, $ITransmogPreview, $LivingEntityExtensions, $LivingEntityAccessor$7, $LivingEntityExtensions$1, $LivingEntityAccessor$5, $MagicEntityKJS, $LEInvoker, $LivingEntityInvoker, $LivingEntityAccessor$4, $ConfigurableKnockback, $LivingEntityAccessor$1, $LivingAccessor, $LivingEntityKJS, $LivingEntityAccessor$2 {
        getAttributes(): $AttributeMap;
        getAttribute(attribute: $Holder_<$Attribute>): $AttributeInstance;
        redirect$flm000$apothic_attributes$apoth_applyProtPen(arg0: number, arg1: number, arg2: $DamageSource_, arg3: number): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isBlocking(): boolean;
        modifyExpressionValue$hac001$ars_nouveau$elytraOverride(allowPassengers: boolean): boolean;
        wrapOperation$gon000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        hasEffect(effect: $Holder_<$MobEffect>): boolean;
        swing(hand: $InteractionHand_): void;
        swing(hand: $InteractionHand_, updateSelf: boolean): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSleeping(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        aiStep(): void;
        /**
         * Called when the entity picks up an item.
         */
        take(entity: $Entity, amount: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        jumpFromGround(): void;
        canStandOnFluid(fluidState: $FluidState): boolean;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        onEffectUpdated(effectInstance: $MobEffectInstance, forced: boolean, entity: $Entity | null): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBeSeenByAnyone(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBeSeenAsEnemy(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isFallFlying(): boolean;
        getLastAttacker(): $LivingEntity;
        setLastHurtByMob(attacker: $LivingEntity | null): void;
        setNoActionTime(ticks: number): void;
        setDiscardFriction(includeHeight: boolean): void;
        onEffectRemoved(effectInstance: $MobEffectInstance): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getNoActionTime(): number;
        setSleepingPos(pos: $BlockPos_): void;
        getItemBySlot(slot: $EquipmentSlot_): $ItemStack;
        setLastHurtMob(vehicle: $Entity): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getAgeScale(): number;
        onEquipItem(slot: $EquipmentSlot_, oldItem: $ItemStack_, newItem: $ItemStack_): void;
        getLastHurtMob(): $LivingEntity;
        getLastHurtByMob(): $LivingEntity;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopSleeping(): void;
        /**
         * @deprecated
         */
        canBeAffected(effectInstance: $MobEffectInstance): boolean;
        /**
         * 1.8.9
         */
        getCombatTracker(): $CombatTracker;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        removeAllEffects(): boolean;
        getDeathSound(): $SoundEvent;
        indicateDamage(xDistance: number, arg1: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxAbsorption(): number;
        removeEffect(effect: $Holder_<$MobEffect>): boolean;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        actuallyHurt(damageSource: $DamageSource_, damageAmount: number): void;
        getHurtSound(damageSource: $DamageSource_): $SoundEvent;
        getKillCredit(): $LivingEntity;
        forceAddEffect(instance: $MobEffectInstance, entity: $Entity | null): void;
        onEffectAdded(instance: $MobEffectInstance, entity: $Entity | null): void;
        getAttributeValue(attribute: $Holder_<$Attribute>): number;
        rarcompat$travel(arg0: $Vec3_, arg1: $Mob): void;
        getDismountPoses(): $ImmutableList<$Pose>;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getAttackAnim(partialTick: number): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearSleepingPos(): void;
        startSleeping(pos: $BlockPos_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAutoSpinAttack(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onEnterCombat(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onLeaveCombat(): void;
        randomTeleport(x: number, arg1: number, y: number, arg3: boolean): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getFallFlyingTicks(): number;
        spawnItemParticles(stack: $ItemStack_, amount: number): void;
        getLastArmorItem(slot: $EquipmentSlot_): $ItemStack;
        hasLineOfSight(target: $Entity): boolean;
        getUsedItemHand(): $InteractionHand;
        startUsingItem(hand: $InteractionHand_): void;
        canTakeItem(stack: $ItemStack_): boolean;
        onItemPickup(itemEntity: $ItemEntity): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksUsingItem(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopUsingItem(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSensitiveToWater(): boolean;
        getProjectile(weaponStack: $ItemStack_): $ItemStack;
        static getSlotForHand(hand: $InteractionHand_): $EquipmentSlot;
        /**
         * Gets the `Direction` for the camera if this entity is sleeping.
         */
        getBedOrientation(): $Direction;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canDisableShield(): boolean;
        addEatEffect(foodProperties: $FoodProperties_): void;
        artifacts$setTickingAbilities(includeHeight: boolean): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        irons_lib$isTransmogPreview(): boolean;
        irons_lib$setTransmogPreview(includeHeight: boolean): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        artifacts$getPocketPistonLength(): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isDeadOrDying(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isUsingItem(): boolean;
        getItemInHand(hand: $InteractionHand_): $ItemStack;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        releaseUsingItem(): void;
        getMainHandItem(): $ItemStack;
        static resetForwardDirectionOfRelativePortalPosition(deltaMovement: $Vec3_): $Vec3;
        handler$egp000$irons_spellbooks$isCurrentlyGlowing(arg0: $CallbackInfoReturnable<any>): void;
        static getDataEffectAmbienceId$clienttweaks_$md$f87c94$0(): $EntityDataAccessor<any>;
        static getDataEffectParticles$clienttweaks_$md$f87c94$1(): $EntityDataAccessor<any>;
        wrapOperation$hoj001$fruitsdelight$getfriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Operation_<any>): number;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        modify$ele000$additionalentityattributes$additionalEntityAttributes$waterSpeed(partialTick: number): number;
        getAllSlots(): $Iterable<$ItemStack>;
        hasItemInSlot(slot: $EquipmentSlot_): boolean;
        doHurtTarget(target: $Entity): boolean;
        setItemInHand(hand: $InteractionHand_, stack: $ItemStack_): void;
        getHandSlots(): $Iterable<$ItemStack>;
        getArmorSlots(): $Iterable<$ItemStack>;
        getOffhandItem(): $ItemStack;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updatingUsingItem(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        makePoofParticles(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpBoostPower(): number;
        setItemSlot(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getArmorValue(): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getArrowCount(): number;
        setArrowCount(ticks: number): void;
        setStingerCount(ticks: number): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        onClimbable(): boolean;
        getKnockback(attacker: $Entity, damageSource: $DamageSource_): number;
        getLootTable(): $ResourceKey<$LootTable>;
        getFallSounds(): $LivingEntity$Fallsounds;
        getLootTableSeed(): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getStingerCount(): number;
        getEatingSound(stack: $ItemStack_): $SoundEvent;
        getVisibilityPercent(lookingEntity: $Entity | null): number;
        getBrain(): $Brain<never>;
        setHealth(yaw: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getHealth(): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isBaby(): boolean;
        getEffect(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        heal(yaw: number): void;
        setSpeed(yaw: number): void;
        canAttack(livingentity: $LivingEntity, condition: $TargetingConditions): boolean;
        canAttack(target: $LivingEntity): boolean;
        makeSound(sound: $SoundEvent_ | null): void;
        addEffect(effectInstance: $MobEffectInstance): boolean;
        addEffect(effectInstance: $MobEffectInstance, entity: $Entity | null): boolean;
        knockback(strength: number, arg1: number, x: number): void;
        /**
         * Called when the mob's health reaches 0.
         */
        die(damageSource: $DamageSource_): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        breakItem(stack: $ItemStack_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getHurtDir(): number;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getHitbox(): $AABB;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        hurtArmor(damageSource: $DamageSource_, damageAmount: number): void;
        isHolding(item: $Item_): boolean;
        isHolding(predicate: $Predicate_<$ItemStack>): boolean;
        canUseSlot(slot: $EquipmentSlot_): boolean;
        travel(travelVector: $Vec3_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSpeed(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getScale(): number;
        apoth_setInternalAbsorption(yaw: number): void;
        redirect$flm000$apothic_attributes$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: $DamageSource_, arg3: number): number;
        redirect$flm000$apothic_attributes$apoth_sunderingGetAmplifier(arg0: $MobEffectInstance | null): number;
        modifyExpressionValue$hac000$ars_nouveau$eytraValidOverride(allowPassengers: boolean): boolean;
        localvar$gfo000$bettercombat$takeKnockback_HEAD_changeStrength(scale: number): number;
        redirect$flm000$apothic_attributes$apoth_sunderingHasEffect(arg0: $LivingEntity, arg1: $Holder_<any>): boolean;
        irons_lib$getCapeData(): $CapeData;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSuppressingSlidingDownLadder(): boolean;
        handler$hbg000$sauce$canAttack(arg0: $LivingEntity, arg1: $CallbackInfoReturnable<any>): void;
        getFluidFallingAdjustedMovement(gravity: number, arg1: boolean, isFalling: $Vec3_): $Vec3;
        handler$egp000$irons_spellbooks$onEffectRemoved(arg0: $MobEffectInstance, arg1: $CallbackInfo): void;
        handler$ffk000$moretotems$applyCephalopodEffect(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        wrapOperation$bao000$supplementaries$supp$onTravel(arg0: $LivingEntity, arg1: $FluidState, arg2: $Operation_<any>): boolean;
        handler$ffk000$moretotems$useExplosiveTotem(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$kdk000$sounds$$start_sword_swoosh_sound(arg0: $InteractionHand_, arg1: boolean, arg2: $CallbackInfo): void;
        handler$egp000$irons_spellbooks$onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfo): void;
        handler$egp000$irons_spellbooks$onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity, arg3: $CallbackInfo): void;
        handler$ffk000$moretotems$useTeleportingTotem(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$ico000$vinery$modifyJumpBoostFallDamage(fallDistance: number, damageMultiplier: number, cir: $CallbackInfoReturnable<any>): void;
        handler$ffk000$moretotems$useTentacledTotem(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        modifyExpressionValue$hgm000$reliquified_ars_nouveau$elytraValidOverride(allowPassengers: boolean): boolean;
        modifyExpressionValue$hgm003$reliquified_ars_nouveau$elytraOverride(allowPassengers: boolean): boolean;
        setKnockbackMultiplier_BetterCombat(yaw: number): void;
        wrapOperation$ecj000$artifacts$travel(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $Entity, original: $Operation_<any>): number;
        handler$ffk000$moretotems$useGhastlyTotem(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$ffk000$moretotems$useStingingTotem(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$ffk000$moretotems$useSkeletalTotem(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$ffk000$moretotems$useRottingTotem(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$jnj000$advanced_ae$hurtSound(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$dke000$cataclysm$onCanAttack(arg0: $LivingEntity, arg1: $CallbackInfoReturnable<any>): void;
        handler$ffk000$moretotems$NecroCheck(arg0: $CallbackInfoReturnable<any>): void;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        setJumping(includeHeight: boolean): void;
        getMainArm(): $HumanoidArm;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        attackable(): boolean;
        getUseItem(): $ItemStack;
        eat(level: $Level_, food: $ItemStack_): $ItemStack;
        eat(level: $Level_, food: $ItemStack_, foodProperties: $FoodProperties_): $ItemStack;
        /**
         * Returns `true` if all the potion effects in the specified collection are ambient.
         */
        static areAllEffectsAmbient(potionEffects: $Collection_<$MobEffectInstance>): boolean;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        /**
         * @deprecated
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBreatheUnderwater(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtByMobTimestamp(): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDiscardFriction(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtMobTimestamp(): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDropExperience(): boolean;
        getExperienceReward(level: $ServerLevel, killer: $Entity | null): number;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        setLastHurtByPlayer(player: $Player | null): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getAbsorptionAmount(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getArmorCoverPercentage(): number;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        artifacts$hasTickingAbilities(): boolean;
        calculateEntityAnimation(includeHeight: boolean): void;
        setAbsorptionAmount(yaw: number): void;
        getLastClimbablePos(): ($BlockPos) | undefined;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isInvertedHealAndHarm(): boolean;
        removeEffectNoUpdate(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        isDamageSourceBlocked(damageSource: $DamageSource_): boolean;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        wasExperienceConsumed(): boolean;
        getLastDamageSource(): $DamageSource;
        sendEffectToPassengers(effectInstance: $MobEffectInstance): void;
        hurtCurrentlyUsedShield(yaw: number): void;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getCurrentSwingDuration(): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        refreshDirtyAttributes(): void;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        equipmentHasChanged(oldItem: $ItemStack_, newItem: $ItemStack_): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAffectedByPotions(): boolean;
        getLocalBoundsForPose(pose: $Pose_): $AABB;
        onEquippedItemBroken(item: $Item_, slot: $EquipmentSlot_): void;
        getEquipmentSlotForItem(stack: $ItemStack_): $EquipmentSlot;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        detectEquipmentUpdates(): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getUseItemRemainingTicks(): number;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        shouldRiderFaceForward(player: $Player): boolean;
        /**
         * Called when a record starts or stops playing. Used to make parrots start or stop partying.
         */
        setRecordPlayingNearby(jukebox: $BlockPos_, partyParrot: boolean): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasInfiniteMaterials(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getVoicePitch(): number;
        handleRelativeFrictionAndCalculateMovement(deltaMovement: $Vec3_, friction: number): $Vec3;
        handler$fmh000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        handler$bpm000$clienttweaks$maxUpStep(arg0: $CallbackInfoReturnable<any>): void;
        handler$egp000$irons_spellbooks$updateInvisibilityStatus(arg0: $CallbackInfo): void;
        handler$egp000$irons_spellbooks$changeSummonHurtCredit(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$gfo000$bettercombat$getAttributeValue_Inject(attribute: $Holder_<any>, cir: $CallbackInfoReturnable<any>): void;
        handler$jfa000$yungscavebiomes$buffetEntitiesInSandstorm(arg0: $CallbackInfo): void;
        handler$egp000$irons_spellbooks$handleEquipmentChanges(arg0: $CallbackInfoReturnable<any>): void;
        canAttackType(entityType: $EntityType_<never>): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxHealth(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        skipDropExperience(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasLandedInLiquid(): boolean;
        getSleepingPos(): ($BlockPos) | undefined;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getSwimAmount(partialTick: number): number;
        handler$gee000$pneumaticcraft$onOnEquipItem(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $CallbackInfo): void;
        self(): $LivingEntity;
        /**
         * Performs what to do when an entity attempts to go down or "sink" in a fluid.
         */
        jumpInFluid(type: $FluidType_): void;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        moveInFluid(state: $FluidState, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Performs what to do when an entity attempts to go down or "sink" in a fluid.
         */
        sinkInFluid(type: $FluidType_): void;
        /**
         * Executes in `LivingEntity#hurt(DamageSource, float)` after all damage and
         * effects have applied. Overriding this method is preferred over overriding the
         * hurt method in custom entities where special behavior is desired after vanilla
         * logic.
         */
        onDamageTaken(damageContainer: $DamageContainer): void;
        modifyExpressionValue$emb000$additionalentityattributes$additionalEntityAttributes$knockDownwards(arg0: number, arg1: $FluidType_): number;
        modifyExpressionValue$emb000$additionalentityattributes$additionalEntityAttributes$modifyUpwardSwimming(arg0: number, arg1: $FluidType_): number;
        /**
         * Returns whether the fluid can push an entity.
         */
        canDrownInFluidType(type: $FluidType_): boolean;
        getMagicData(): $MagicData;
        swing(hand: $InteractionHand_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        swing(): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        rayTrace(): $KubeRayTraceResult;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setOffHandItem(stack: $ItemStack_): void;
        getOffHandItem(): $ItemStack;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        setEquipment(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(yaw: number): void;
        setHeldItem(hand: $InteractionHand_, stack: $ItemStack_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isUndead(): boolean;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        damageHeldItem(): void;
        getDefaultMovementSpeed(): number;
        setDefaultMovementSpeed(renderDistWeight: number): void;
        setMovementSpeedAddition(renderDistWeight: number): void;
        setDefaultMovementSpeedMultiplier(renderDistWeight: number): void;
        setTotalMovementSpeedMultiplier(renderDistWeight: number): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setLegsArmorItem(stack: $ItemStack_): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setMainHandItem(stack: $ItemStack_): void;
        getReachDistance(): number;
        getMainHandItem(): $ItemStack;
        getHeadArmorItem(): $ItemStack;
        getLegsArmorItem(): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setFeetArmorItem(stack: $ItemStack_): void;
        getChestArmorItem(): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setChestArmorItem(stack: $ItemStack_): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        canEntityBeSeen(target: $LivingEntity): boolean;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setHeadArmorItem(stack: $ItemStack_): void;
        getFeetArmorItem(): $ItemStack;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        getTotalMovementSpeed(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        callGetSoundVolume(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        callGetJumpPower(): number;
        callGetDeathSound(): $SoundEvent;
        invokeTurnHead(yRot: number, animStep: number): number;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        callActuallyHurt(damageSource: $DamageSource_, damageAmount: number): void;
        bumblezone$setLastDamageStamp(arg0: number): void;
        create$callSpawnItemParticles(stack: $ItemStack_, amount: number): void;
        callCheckTotemDeathProtection(damageSource: $DamageSource_): boolean;
        /**
         * Called when the mob's health reaches 0.
         */
        bumblezone$setLastDamageSource(damageSource: $DamageSource_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        invokeShouldDropLoot(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        bumblezone$isJumping(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        bumblezone$callIsAlwaysExperienceDropper(): boolean;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setUseItem(stack: $ItemStack_): void;
        getLastPos(): $BlockPos;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getAttackStrengthTicker(): number;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        bumblezone$callHurtArmor(damageSource: $DamageSource_, damageAmount: number): void;
        setLivingEntityFlagInvoker(key: number, value: boolean): void;
        setLastAttackedTicks(ticks: number): void;
        getLastHurtByPlayer(): $Player;
        callOnEffectUpdated(effectInstance: $MobEffectInstance, forced: boolean, entity: $Entity | null): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtByPlayerTime(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        lastHurtByPlayerTime: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        ars_Nouveau$motions: $Stack<any>;
        yHeadRot: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        fallFlyTicks: number;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
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
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        jumping: boolean;
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
        get attributes(): $AttributeMap;
        get blocking(): boolean;
        get sleeping(): boolean;
        get fallFlying(): boolean;
        get lastAttacker(): $LivingEntity;
        set discardFriction(value: boolean);
        get ageScale(): number;
        get combatTracker(): $CombatTracker;
        get deathSound(): $SoundEvent;
        get maxAbsorption(): number;
        get killCredit(): $LivingEntity;
        get dismountPoses(): $ImmutableList<$Pose>;
        get autoSpinAttack(): boolean;
        get fallFlyingTicks(): number;
        get usedItemHand(): $InteractionHand;
        get ticksUsingItem(): number;
        get sensitiveToWater(): boolean;
        get bedOrientation(): $Direction;
        get deadOrDying(): boolean;
        get usingItem(): boolean;
        static get dataEffectAmbienceId$clienttweaks_$md$f87c94$0(): $EntityDataAccessor<any>;
        static get dataEffectParticles$clienttweaks_$md$f87c94$1(): $EntityDataAccessor<any>;
        get allSlots(): $Iterable<$ItemStack>;
        get handSlots(): $Iterable<$ItemStack>;
        get armorSlots(): $Iterable<$ItemStack>;
        get offhandItem(): $ItemStack;
        get jumpBoostPower(): number;
        get armorValue(): number;
        get lootTable(): $ResourceKey<$LootTable>;
        get fallSounds(): $LivingEntity$Fallsounds;
        get lootTableSeed(): number;
        get brain(): $Brain<never>;
        get baby(): boolean;
        get hurtDir(): number;
        get hitbox(): $AABB;
        get scale(): number;
        get suppressingSlidingDownLadder(): boolean;
        set knockbackMultiplier_BetterCombat(value: number);
        get mainArm(): $HumanoidArm;
        get lastHurtByMobTimestamp(): number;
        get lastHurtMobTimestamp(): number;
        get armorCoverPercentage(): number;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get invertedHealAndHarm(): boolean;
        get lastDamageSource(): $DamageSource;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get currentSwingDuration(): number;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get affectedByPotions(): boolean;
        get useItemRemainingTicks(): number;
        get voicePitch(): number;
        get magicData(): $MagicData;
        get undead(): boolean;
        set movementSpeedAddition(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
        get lastPos(): $BlockPos;
        set lastAttackedTicks(value: number);
    }
    export class $SpawnGroupData {
    }
    export interface $SpawnGroupData {
    }
    export class $Display$TextDisplay$CachedInfo extends $Record {
        lines(): $List<$Display$TextDisplay$CachedLine>;
        width(): number;
        constructor(arg0: $List_<$Display$TextDisplay$CachedLine_>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedInfo}.
     */
    export type $Display$TextDisplay$CachedInfo_ = { lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number,  } | [lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number, ];
    export class $EntityAttachments$Builder {
        attach(attachment: $EntityAttachment_, poas: $Vec3_): $EntityAttachments$Builder;
        attach(attachment: $EntityAttachment_, x: number, y: number, z: number): $EntityAttachments$Builder;
        build(width: number, height: number): $EntityAttachments;
    }
    export class $EntityEvent {
        static STOP_ATTACKING: number;
        static REDUCED_DEBUG_INFO: number;
        static OFFER_FLOWER: number;
        static MAINHAND_BREAK: number;
        static DEATH: number;
        static DOLPHIN_LOOKING_FOR_TREASURE: number;
        static JUMP: number;
        static SHAKE_WETNESS: number;
        static SILVERFISH_MERGE_ANIM: number;
        static TRUSTING_SUCCEEDED: number;
        static HONEY_SLIDE: number;
        static HEAD_BREAK: number;
        static STOP_OFFER_FLOWER: number;
        static TRUSTING_FAILED: number;
        static EAT_GRASS: number;
        static TALISMAN_ACTIVATE: number;
        static TENDRILS_SHIVER: number;
        static SONIC_CHARGE: number;
        static OFFHAND_BREAK: number;
        static FEET_BREAK: number;
        static PERMISSION_LEVEL_GAMEMASTERS: number;
        static VILLAGER_ANGRY: number;
        static CANCEL_SHAKE_WETNESS: number;
        static LOVE_HEARTS: number;
        static ZOMBIE_CONVERTING: number;
        static PERMISSION_LEVEL_ALL: number;
        static POOF: number;
        static RAVAGER_STUNNED: number;
        static TELEPORT: number;
        static FISHING_ROD_REEL_IN: number;
        static ARMADILLO_PEEK: number;
        static SQUID_ANIM_SYNCH: number;
        static GUARDIAN_ATTACK_SOUND: number;
        static START_RAM: number;
        static VILLAGER_HAPPY: number;
        static SHIELD_DISABLED: number;
        static ARMORSTAND_WOBBLE: number;
        static IN_LOVE_HEARTS: number;
        static BODY_BREAK: number;
        static START_ATTACKING: number;
        static FIREWORKS_EXPLODE: number;
        static ATTACK_BLOCKED: number;
        static USE_ITEM_COMPLETE: number;
        static TAMING_FAILED: number;
        static SNIFFER_DIGGING_SOUND: number;
        static CHEST_BREAK: number;
        static END_RAM: number;
        static PERMISSION_LEVEL_ADMINS: number;
        static TAMING_SUCCEEDED: number;
        static FOX_EAT: number;
        static FULL_DEBUG_INFO: number;
        static PERMISSION_LEVEL_OWNERS: number;
        static LEGS_BREAK: number;
        static SWAP_HANDS: number;
        static PERMISSION_LEVEL_MODERATORS: number;
        static VILLAGER_SWEAT: number;
        static HONEY_JUMP: number;
        static WITCH_HAT_MAGIC: number;
        constructor();
    }
    export class $Entity extends $AttachmentHolder implements $SyncedDataHolder, $Nameable, $EntityAccess$2, $CommandSource, $ScoreHolder, $IEntityExtension, $EntityAccessor$4, $ExtensionHolder, $EntityAccessor$2, $EntityAccessor$9, $EntityExtension, $IsInsideStructureTracker$Access, $AccessorEntity, $EMFEntity, $ETFEntity, $EntityAccessor$6, $AzAnimatorAccessor<any, any>, $EntityAccessor$7, $EntityAccessor, $EntityTickerAccessor, $FluidLogicAccessor, $BalmEntity, $AccessorEntity$1, $EntityAccess, $Cullable, $EntityAccessor$8, $IRewindable, $LambDynamicLight, $EntityAccessor$5, $DynamicLightSource, $EntityAccessor$3, $EntityKJS, $EntityAccess$1, $EntityAccessor$1, $IEntity, $EntityLootDropInterface {
        getSlot(slot: number): $SlotAccess;
        getName(): $Component;
        remove(reason: $Entity$RemovalReason_): void;
        load(compound: $CompoundTag_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        position(): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAlive(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getId(): number;
        /**
         * Writes this entity to NBT, unless it has been removed or it is a passenger. Also writes this entity's passengers, and the entity type ID (so the produced NBT is sufficient to recreate the entity).
         * To always write the entity, use `#writeWithoutTypeId`.
         * 
         * @return True if the entity was written (and the passed compound should be saved)" false if the entity was not written.
         */
        save(compound: $CompoundTag_): boolean;
        getEntityType(): $EntityType<never>;
        is(passenger: $Entity): boolean;
        pick(hitDistance: number, arg1: number, partialTicks: boolean): $HitResult;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        collide(vec: $Vec3_): $Vec3;
        /**
         * Transforms the entity's current yaw with the given Rotation and returns it. This does not have a side-effect.
         */
        rotate(transformRotation: $Rotation_): number;
        push(passenger: $Entity): void;
        addMotion(x: number, arg1: number, y: number): void;
        push(addend: $Vec3_): void;
        move(type: $MoverType_, pos: $Vec3_): void;
        setExtension(key: $Object, value: $Object): void;
        getDisplayName(): $Component;
        /**
         * Gets called every tick from main Entity class
         */
        kill(): void;
        getExtension(key: $Object, type: $Class<any>): $Object;
        getDimensions(pose: $Pose_): $EntityDimensions;
        /**
         * Transforms the entity's current yaw with the given Mirror and returns it. This does not have a side-effect.
         */
        mirror(transformMirror: $Mirror_): number;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        hasPermissions(flag: number): boolean;
        setLevel(level: $Level_): void;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        isSupportedBy(pos: $BlockPos_): boolean;
        getPosition(partialTicks: number): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        revive(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isRemoved(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        tick(): void;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        onGround(): boolean;
        getZ(scale: number): number;
        getZ(): number;
        getX(): number;
        getX(scale: number): number;
        interact(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Applies the given player interaction to this Entity.
         */
        interactAt(player: $Player, vec: $Vec3_, hand: $InteractionHand_): $InteractionResult;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockZ(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockX(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockY(): number;
        getUuid(): $UUID;
        setPitch(yaw: number): void;
        getPitch(): number;
        getYaw(): number;
        setYaw(yaw: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWater(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSilent(): boolean;
        setSilent(downwards: boolean): void;
        /**
         * Gets called every tick from main Entity class
         */
        discard(): void;
        setId(ticks: number): void;
        handler$egj000$irons_spellbooks$isInvisibleTo(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Checks if the offset position from the entity's current position has a collision with a block or a liquid.
         */
        shouldRender(x: number, arg1: number, y: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInFluidType(): boolean;
        /**
         * Returns whether the fluid type the entity is currently in matches
         * the specified condition.
         */
        isInFluidType(predicate: $BiPredicate_<$FluidType, number>, forAllTypes: boolean): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getDeltaMovement(): $Vec3;
        setInvisible(downwards: boolean): void;
        setCulled(downwards: boolean): void;
        getMotions(): $Stack<any>;
        thunderHit(level: $ServerLevel, lightning: $LightningBolt): void;
        deflection(projectile: $Projectile): $ProjectileDeflection;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isWet(): boolean;
        emf$age(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSprint(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFreezing(): boolean;
        emf$prevX(): number;
        emf$getX(): number;
        emf$prevY(): number;
        emf$getY(): number;
        emf$prevZ(): number;
        emf$getZ(): number;
        emf$getYaw(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getAirSupply(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getMaxAirSupply(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInvulnerable(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        extinguish(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTicksFrozen(): number;
        /**
         * Enable or disable an entity flag, see `#getEntityFlag` to read the known flags.
         */
        setSharedFlag(flag: number, set: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInvisible(): boolean;
        /**
         * Returns the string that identifies this Entity's class
         */
        getStringUuid(): string;
        getPercentFrozen(): number;
        getYHeadRot(): number;
        /**
         * Returns whether this Entity is invulnerable to the given DamageSource.
         */
        isInvulnerableTo(source: $DamageSource_): boolean;
        awardKillScore(killed: $Entity, scoreValue: number, source: $DamageSource_): void;
        /**
         * Gets called every tick from main Entity class
         */
        setTimeout(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getDynamicLightId(): number;
        getDynamicLightX(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isSneaking(): boolean;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getFabricBalmData(): $CompoundTag;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isSprinting(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isInLava(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$hasPassengers(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isRewinding(): boolean;
        setAnimator(arg0: $AzAnimator<any, any>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isGlowing(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        emf$getVelocity(): $Vec3;
        setFabricBalmData(compound: $CompoundTag_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isForcedVisible(): boolean;
        setRewinding(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isAlive(): boolean;
        emf$getVariableMap(): $Map<any, any>;
        /**
         * Returns the string that identifies this Entity's class
         */
        emf$getTypeString(): string;
        getAnimatorOrNull(): $AzAnimator<any, any>;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isInvisible(): boolean;
        setBoundingBox(bb: $AABB_): void;
        /**
         * Gets called every tick from main Entity class
         */
        ejectPassengers(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getPortalCooldown(): number;
        setNoGravity(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dampensVibrations(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterOrRain(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTeamColor(): number;
        /**
         * Gets called every tick from main Entity class
         */
        setPortalCooldown(): void;
        setPortalCooldown(ticks: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnPortalCooldown(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterOrBubble(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        checkBelowWorld(): void;
        absRotateTo(yRot: number, xRot: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isNoGravity(): boolean;
        /**
         * Called by a player entity when they collide with an entity
         */
        playerTouch(player: $Player): void;
        getPositionCodec(): $VecDeltaCodec;
        /**
         * Gets called every tick from main Entity class
         */
        updateSwimming(): void;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        setSwimming(downwards: boolean): void;
        igniteForSeconds(yaw: number): void;
        getViewXRot(partialTick: number): number;
        static collideBoundingBox(entity: $Entity | null, vec: $Vec3_, collisionBox: $AABB_, level: $Level_, potentialHits: $List_<$VoxelShape>): $Vec3;
        getEntityData(): $SynchedEntityData;
        onPassengerTurned(passenger: $Entity): void;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        isInvisibleTo(player: $Player): boolean;
        makeStuckInBlock(state: $BlockState_, motionMultiplier: $Vec3_): void;
        setInvulnerable(downwards: boolean): void;
        getAttachments(): $EntityAttachments;
        getPickRadius(): number;
        /**
         * Returns the string that identifies this Entity's class
         */
        getScoreboardName(): string;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canControlVehicle(): boolean;
        setAirSupply(ticks: number): void;
        hasPassenger(predicate: $Predicate_<$Entity>): boolean;
        hasPassenger(passenger: $Entity): boolean;
        startRiding(passenger: $Entity): boolean;
        startRiding(vehicle: $Entity, force: boolean): boolean;
        /**
         * Get entity this is riding
         */
        getFirstPassenger(): $Entity;
        onAboveBubbleCol(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAttackable(): boolean;
        restoreFrom(passenger: $Entity): void;
        setCustomName(component: $Component_ | null): void;
        getUpVector(partialTicks: number): $Vec3;
        /**
         * Writes this entity to NBT, unless it has been removed or it is a passenger. Also writes this entity's passengers, and the entity type ID (so the produced NBT is sufficient to recreate the entity).
         * To always write the entity, use `#writeWithoutTypeId`.
         * 
         * @return True if the entity was written (and the passed compound should be saved)" false if the entity was not written.
         */
        saveAsPassenger(compound: $CompoundTag_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        showVehicleHealth(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        removeVehicle(): void;
        copyPosition(passenger: $Entity): void;
        getEyeHeight(): number;
        getEyeHeight(pose: $Pose_): number;
        setAsInsidePortal(portal: $Portal_, pos: $BlockPos_): void;
        /**
         * Returns the Entity's pitch and yaw as a `Vec2`.
         */
        getRotationVector(): $Vec2;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDescending(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeCollidedWith(): boolean;
        positionRider(passenger: $Entity): void;
        setShiftKeyDown(downwards: boolean): void;
        setGlowing(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVisuallyCrawling(): boolean;
        setIsInPowderSnow(downwards: boolean): void;
        emf$prevPitch(): number;
        emf$getPitch(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isOnFire(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$hasVehicle(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isOnGround(): boolean;
        shouldBlockExplode(explosion: $Explosion, level: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, explosionPower: number): boolean;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getMotionDirection(): $Direction;
        static getViewScale(): number;
        getLeashOffset(partialTicks: number): $Vec3;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        /**
         * Add the given player to the list of players tracking this entity. For instance, a player may track a boss in order to view its associated boss bar.
         */
        startSeenByPlayer(serverPlayer: $ServerPlayer): void;
        getAddEntityPacket(entity: $ServerEntity): $Packet<$ClientGamePacketListener>;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getKnownMovement(): $Vec3;
        ignoreExplosion(explosion: $Explosion): boolean;
        /**
         * Add the given player to the list of players tracking this entity. For instance, a player may track a boss in order to view its associated boss bar.
         */
        stopSeenByPlayer(serverPlayer: $ServerPlayer): void;
        static setViewScale(renderDistWeight: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldInformAdmins(): boolean;
        placePortalTicket(pos: $BlockPos_): void;
        /**
         * Get entity this is riding
         */
        getRootVehicle(): $Entity;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldBeSaved(): boolean;
        broadcastToPlayer(player: $ServerPlayer): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        trackingPosition(): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        acceptsSuccess(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        onlyOpCanSetNbt(): boolean;
        teleportRelative(x: number, arg1: number, y: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        checkDespawn(): void;
        onExplosionHit(passenger: $Entity | null): void;
        getRemovalReason(): $Entity$RemovalReason;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        acceptsFailure(): boolean;
        getFusionModel(layerIndex: number): $Triple<any, any, any>;
        setFusionModel(layerIndex: number, model: $Triple_<any, any, any>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAlwaysTicking(): boolean;
        getY(scale: number): number;
        getY(): number;
        changeDimension(transition: $DimensionTransition_): $Entity;
        /**
         * @deprecated
         */
        isEyeInFluid(fluidTag: $TagKey_<$Fluid>): boolean;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getForgePersistentData(): $CompoundTag;
        lerpTargetX(): number;
        lerpTargetY(): number;
        canUsePortal(allowPassengers: boolean): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFullyFrozen(): boolean;
        lerpTargetXRot(): number;
        getViewYRot(partialTick: number): number;
        setTicksFrozen(ticks: number): void;
        lerpTargetYRot(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVisuallySwimming(): boolean;
        setYHeadRot(yaw: number): void;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        getFluidTypeHeight(type: $FluidType_): number;
        lerpTargetZ(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isEffectiveAi(): boolean;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(yaw: number): void;
        igniteForTicks(ticks: number): void;
        getBlockStateOn(): $BlockState;
        recreateFromPacket(packet: $ClientboundAddEntityPacket): void;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        blockPosition(): $BlockPos;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSpectator(): boolean;
        registryAccess(): $RegistryAccess;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isUnderWater(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isGlowing(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCrouching(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isShiftKeyDown(): boolean;
        setUUID(uniqueId: $UUID_): void;
        handler$jcg000$blueflame$setRemainingFireTicks(arg0: number, arg1: $CallbackInfo): void;
        handler$fok000$apotheosis$apoth_getTeamColor(arg0: $CallbackInfoReturnable<any>): void;
        handler$ehh000$irons_spellbooks$changeGlowOutline(arg0: $CallbackInfoReturnable<any>): void;
        handler$imk002$lambdynlights_runtime$onRemove(ci: $CallbackInfo): void;
        modifyReturnValue$hif000$spectrum$forceSleepPose(arg0: $Pose_): $Pose;
        handler$hai008$ars_nouveau$onTick(arg0: $CallbackInfo): void;
        handler$hif000$spectrum$dropStack(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$hbc009$ars_nouveau$onTick(arg0: $CallbackInfo): void;
        handler$hbc000$ars_nouveau$removed(arg0: $CallbackInfo): void;
        /**
         * Gets called every tick from main Entity class
         */
        thebumblezone_performedEntityDrops(): void;
        handler$jcg000$blueflame$lavaHurt(arg0: $CallbackInfo): void;
        handler$hfh000$relics$setWet(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Explosion resistance of a block relative to this entity
         */
        getBlockExplosionResistance(explosion: $Explosion, level: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, fluidState: $FluidState, explosionPower: number): number;
        fudgePositionAfterSizeChange(dimensions: $EntityDimensions_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasExactlyOnePlayerPassenger(): boolean;
        handler$hbe001$sauce$isAlliedTo(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        updateDynamicGameEventListener(listenerConsumer: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        lerpMotion(x: number, arg1: number, y: number): void;
        getInBlockState(): $BlockState;
        /**
         * Handles an entity event received from a `ClientboundEntityEventPacket`.
         */
        handleEntityEvent(id: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        refreshDimensions(): void;
        setSprinting(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldShowName(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSprinting(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        resetFallDistance(): void;
        /**
         * @deprecated
         */
        getFluidHeight(fluidTag: $TagKey_<$Fluid>): number;
        handleDamageEvent(damageSource: $DamageSource_): void;
        addDeltaMovement(addend: $Vec3_): void;
        moveRelative(amount: number, relative: $Vec3_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLookAngle(): $Vec3;
        captureDrops(): $Collection<$ItemEntity>;
        captureDrops(captureDrops: $Collection_<$ItemEntity> | null): $Collection<$ItemEntity>;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getMaxFallDistance(): number;
        getWeaponItem(): $ItemStack;
        animateHurt(yaw: number): void;
        setMotion(x: number, arg1: number, y: number): void;
        setDeltaMovement(addend: $Vec3_): void;
        killedEntity(level: $ServerLevel, entity: $LivingEntity): boolean;
        /**
         * Drops an item at the position of the entity.
         */
        spawnAtLocation(stack: $ItemStack_, offsetY: number): $ItemEntity;
        spawnAtLocation(stack: $ItemStack_): $ItemEntity;
        causeFallDamage(fallDistance: number, multiplier: number, source: $DamageSource_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSteppingCarefully(): boolean;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        /**
         * Gets called every tick from main Entity class
         */
        subtleEffects$cancelNextWaterSplash(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        ars_nouveau$shouldUpdateDynamicLight(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        updateDynamicLightPreviousCoordinates(): void;
        ars_nouveau$scheduleTrackedChunksRebuild(arg0: $LevelRenderer): void;
        subtleEffects$getFluidDefinitionHeight(): $Object2DoubleMap<any>;
        lambdynlights$setTrackedLitChunkPos(trackedLitChunkPos: $LongSet): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        thebumblezone_hasPerformedEntityDrops(): boolean;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getBoundingBoxForCulling(): $AABB;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInLiquid(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWall(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        fireImmune(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        clearFire(): void;
        /**
         * Gets called every tick from main Entity class
         */
        baseTick(): void;
        getRandomX(scale: number): number;
        getRandomY(): number;
        getRandomZ(scale: number): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDiscrete(): boolean;
        setPose(pose: $Pose_): void;
        getGravity(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInLava(): boolean;
        /**
         * Checks if the offset position from the entity's current position has a collision with a block or a liquid.
         */
        isFree(x: number, arg1: number, y: number): boolean;
        dismountTo(x: number, arg1: number, y: number): void;
        /**
         * Measures the **square** of a distance of entity to another entity.
         * Returns the squared distance to the entity.
         */
        distanceToEntitySqr(entity: $Entity): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         * Gets the squared distance to the position.
         */
        distanceToSqr(x: number, arg1: number, y: number): number;
        /**
         * Measures the **square** of a distance of entity to the point at specified 3D position vector.
         */
        distanceToSqr(vec: $Vec3_): number;
        canCollideWith(passenger: $Entity): boolean;
        lookAt(anchor: $EntityAnchorArgument$Anchor_, target: $Vec3_): void;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getHorizontalFacing(): $Direction;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInRain(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getForward(): $Vec3;
        getTeam(): $PlayerTeam;
        /**
         * Checks if this `Entity` can trample a `Block`.
         */
        canTrample(state: $BlockState_, pos: $BlockPos_, fallDistance: number): boolean;
        turn(yRot: number, arg1: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        unRide(): void;
        addTag(tag: string): boolean;
        closerThan(entity: $Entity, distance: number): boolean;
        closerThan(entity: $Entity, horizontalDistance: number, arg2: number): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        lavaHurt(): void;
        getTags(): $Set<string>;
        setPosRaw(x: number, arg1: number, y: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnRails(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSwimming(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasGlowingTag(): boolean;
        setLuminance(ticks: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getLuminance(): number;
        /**
         * Gets called every tick from main Entity class
         */
        dynamicLightTick(): void;
        getPickResult(): $ItemStack;
        /**
         * Returns the fluid that is on the entity's eyes.
         */
        getEyeInFluidType(): $FluidType;
        /**
         * Returns the string that identifies this Entity's class
         */
        getEncodeId(): string;
        /**
         * Writes this entity, including passengers, to NBT, regardless as to whether it is removed or a passenger. Does **not** include the entity's type ID, so the NBT is insufficient to recreate the entity using `AnvilChunkLoader#readWorldEntity`. Use `#writeUnlessPassenger` for that purpose.
         */
        saveWithoutId(compound: $CompoundTag_): $CompoundTag;
        /**
         * @deprecated
         * Return whether this entity should be rendered as on fire.
         */
        isPushedByFluid(): boolean;
        getCustomName(): $Component;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAddedToLevel(): boolean;
        setOnGround(downwards: boolean): void;
        /**
         * Gets called every tick from main Entity class
         */
        onRemovedFromLevel(): void;
        getViewVector(partialTicks: number): $Vec3;
        sendSystemMessage(component: $Component_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getEyePosition(): $Vec3;
        getEyePosition(partialTicks: number): $Vec3;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(fluidTag: $TagKey_<$Fluid>, motionScale: number): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        updateFluidHeightAndDoFluidPushing(): void;
        modifyReturnValue$hif000$spectrum$considerPrimfireAsFire(allowPassengers: boolean): boolean;
        handler$gka001$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        modifyReturnValue$eal000$artifacts$isInvulnerableTo(original: boolean, damageSource: $DamageSource_): boolean;
        handler$hoo000$twilightdelight$getTeamColor$renderShiny(arg0: $CallbackInfoReturnable<any>): void;
        handler$hoo000$twilightdelight$isCurrentlyGlowing$renderShinny(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getCommandSenderWorld(): $Level;
        getDismountLocationForPassenger(passenger: $LivingEntity): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isControlledByLocalInstance(): boolean;
        wrapMethod$gpj000$ars_nouveau$wrapGravity(arg0: $Operation_<any>): number;
        etf$getArmorItems(): $Iterable<any>;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        etf$getVelocity(): $Vec3;
        etf$getCustomName(): $Component;
        etf$getPose(): $Pose;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        etf$getOptifineId(): number;
        /**
         * Returns the string that identifies this Entity's class
         */
        etf$getEntityKey(): string;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        etf$getBlockY(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        etf$canBeBright(): boolean;
        /**
         * Returns the distance to the entity.
         */
        etf$distanceTo(entity: $Entity): number;
        etf$getType(): $EntityType<any>;
        etf$getHandItems(): $Iterable<any>;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        etf$isBlockEntity(): boolean;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        etf$getWorld(): $Level;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        etf$hasCustomName(): boolean;
        etf$getUuid(): $UUID;
        etf$getBlockPos(): $BlockPos;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasCustomName(): boolean;
        getBbHeight(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPushable(): boolean;
        getEyeY(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canFreeze(): boolean;
        lerpTo(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPickable(): boolean;
        lerpHeadTo(yaw: number, pitch: number): void;
        hasPose(pose: $Pose_): boolean;
        maxUpStep(): number;
        getPose(): $Pose;
        /**
         * Returns whether this Entity is on the given scoreboard team.
         */
        isAlliedTo(team: $Team): boolean;
        isOnSameTeam(passenger: $Entity): boolean;
        getOnPos(): $BlockPos;
        absMoveTo(x: number, arg1: number, y: number): void;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        absMoveTo(x: number, arg1: number, y: number, arg3: number, z: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        stopRiding(): void;
        /**
         * Gets called every tick from main Entity class
         */
        rideTick(): void;
        /**
         * Get entity this is riding
         */
        getVehicle(): $Entity;
        setRemoved(reason: $Entity$RemovalReason_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCulled(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVehicle(): boolean;
        setPos(addend: $Vec3_): void;
        setPos(x: number, arg1: number, y: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterRainOrBubble(): boolean;
        damageSources(): $DamageSources;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getBoundingBox(): $AABB;
        mayInteract(level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        checkSlowFallDistance(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCustomNameVisible(): boolean;
        getPassengerRidingPosition(entity: $Entity): $Vec3;
        calculateViewVector(xRot: number, yRot: number): $Vec3;
        getFluidJumpThreshold(): number;
        getPreciseBodyRotation(partialTick: number): number;
        getRelativePortalPosition(axis: $Direction$Axis_, portal: $BlockUtil$FoundRectangle): $Vec3;
        onSyncedDataUpdated(key: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(dataValues: $List_<$SynchedEntityData$DataValue_<never>>): void;
        syncPacketPositionCodec(x: number, arg1: number, y: number): void;
        /**
         * Returns the fluid that is on the entity's eyes.
         */
        getMaxHeightFluidType(): $FluidType;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTicksRequiredToFreeze(): number;
        getControllingPassenger(): $LivingEntity;
        ars_nouveau$getDynamicLightY(): number;
        ars_nouveau$getDynamicLightZ(): number;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        ars_nouveau$getDynamicLightWorld(): $Level;
        /**
         * Gets called every tick from main Entity class
         */
        ars_nouveau$resetDynamicLight(): void;
        ars_nouveau$updateDynamicLight(arg0: $LevelRenderer): boolean;
        subtleEffects$setLastTouchedFluid(arg0: $FluidDefinition_): void;
        ars_nouveau$getDynamicLightX(): number;
        subtleEffects$getLastTouchedFluid(): $FluidDefinition;
        /**
         * Gets called every tick from main Entity class
         */
        ars_nouveau$dynamicLightTick(): void;
        getIsInsideStructureTracker(): $IsInsideStructureTracker;
        createCommandSourceStack(): $CommandSourceStack;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        getVehicleAttachmentPoint(entity: $Entity): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSpawnSprintParticle(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getRemainingFireTicks(): number;
        setOnGroundWithMovement(onGround: boolean, movement: $Vec3_): void;
        adjustSpawnLocation(level: $ServerLevel, pos: $BlockPos_): $BlockPos;
        setSharedFlagOnFire(downwards: boolean): void;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getNearestViewDirection(): $Direction;
        /**
         * Checks if the entity is in range to render.
         */
        shouldRenderAtSqrDistance(distance: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeHitByProjectile(): boolean;
        setCustomNameVisible(downwards: boolean): void;
        setRemainingFireTicks(ticks: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getDimensionChangingDelay(): number;
        onInsideBubbleColumn(downwards: boolean): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        countPlayerPassengers(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSuppressingBounce(): boolean;
        getPassengersAndSelf(): $Stream<$Entity>;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dismountsUnderwater(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isIgnoringBlockTriggers(): boolean;
        getSelfAndPassengers(): $Stream<$Entity>;
        getRopeHoldPosition(partialTicks: number): $Vec3;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        shouldFusionRecomputeModel(flag: number): boolean;
        getIndirectPassengers(): $Iterable<$Entity>;
        getPistonPushReaction(): $PushReaction;
        hasIndirectPassenger(passenger: $Entity): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        markFusionRecomputeModels(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isTouchingWater(): boolean;
        getHandHoldingItemAngle(item: $Item_): $Vec3;
        /**
         * Get entity this is riding
         */
        getControlledVehicle(): $Entity;
        subtleEffects$getTickers(): $Int2ObjectMap<any>;
        skipAttackInteraction(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        displayFireAnimation(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        touchingUnloadedChunk(): boolean;
        canChangeDimensions(oldLevel: $Level_, newLevel: $Level_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasControllingPassenger(): boolean;
        getDynamicLightPrevY(): number;
        setLastDynamicLuminance(ticks: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getLastDynamicLuminance(): number;
        getDynamicLightPrevZ(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        ars_nouveau$getLuminance(): number;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getDynamicLightLevel(): $Level;
        getDynamicLightPrevX(): number;
        /**
         * Get the Minecraft server instance
         */
        getServer(): $MinecraftServer;
        gameEvent(gameEvent: $Holder_<$GameEvent>, entity: $Entity | null): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>): void;
        getDynamicLightY(): number;
        setTurretPos(pos: $BlockPos_): void;
        /**
         * Gets called every tick from main Entity class
         */
        resetDynamicLight(): void;
        getDynamicLightZ(): number;
        getTurretPos(): $BlockPos;
        isColliding(pos: $BlockPos_, state: $BlockState_): boolean;
        chunkPosition(): $ChunkPos;
        /**
         * Gets called every tick from main Entity class
         */
        setOldPosAndRot(): void;
        /**
         * Gets called every tick from main Entity class
         */
        onAddedToLevel(): void;
        /**
         * Gets called every tick from main Entity class
         */
        onClientRemoval(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPassenger(): boolean;
        getSoundSource(): $SoundSource;
        setOutOfCamera(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOutOfCamera(): boolean;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        isPassengerOfSameVehicle(passenger: $Entity): boolean;
        removeTag(tag: string): boolean;
        playSound(sound: $SoundEvent_): void;
        playSound(sound: $SoundEvent_, volume: number, pitch: number): void;
        localvar$fll000$apothic_attributes$apoth_checkFallDamageWithGravity(scale: number): number;
        getBbWidth(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnFire(): boolean;
        /**
         * Measures the distance of entity to another entity.
         * Returns the distance to the entity.
         */
        distanceToEntity(entity: $Entity): number;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        etf$getNbt(): $CompoundTag;
        etf$getScoreboardTeam(): $Team;
        etf$getItemsEquipped(): $Iterable<any>;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        etf$getOptifineVehicleId(): number;
        getLightProbePosition(partialTicks: number): $Vec3;
        moveTo(addend: $Vec3_): void;
        moveTo(x: number, arg1: number, y: number): void;
        moveToBlockPos(pos: $BlockPos_, yRot: number, xRot: number): void;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        setPositionAndRotation(x: number, arg1: number, y: number, arg3: number, z: number): void;
        moveTo(pos: $Vec3_, yRot: number, xRot: number): void;
        getRandom(): $RandomSource;
        handler$lfg001$createdieselgenerators$load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$lfg000$createdieselgenerators$save(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$hfh000$relics$getBlockSpeedFactor(arg0: $CallbackInfoReturnable<any>): void;
        handler$lal000$sliceanddice$baseTick(arg0: $CallbackInfo): void;
        handler$gpj000$ars_nouveau$getTeamColor(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        localvar$hfh001$relics$fluidCollision(vec: $Vec3_): $Vec3;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        localvar$djg000$lionfishapi$fluidCollision(vec: $Vec3_): $Vec3;
        handler$hbc001$ars_nouveau$onRemove(arg0: $CallbackInfo): void;
        handler$egj000$irons_spellbooks$isAlliedTo(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        /**
         * Returns whether any fluid type the entity is currently in matches
         * the specified condition.
         */
        isInFluidType(predicate: $BiPredicate_<$FluidType, number>): boolean;
        /**
         * Returns whether the entity is within the fluid type of the state.
         */
        isInFluidType(state: $FluidState): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isInFluidType(type: $FluidType_): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canFluidExtinguish(type: $FluidType_): boolean;
        /**
         * Called when a user uses the creative pick block button on this entity.
         */
        getPickedResult(target: $HitResult): $ItemStack;
        /**
         * Gets the individual sub parts that make up this entity.
         * 
         * The entities returned by this method are NOT saved to the world in nay way, they exist as an extension
         * of their host entity. The child entity does not track its server-side(or client-side) counterpart, and
         * the host entity is responsible for moving and managing these children.
         * 
         * Only used if `#isMultipartEntity()` returns true.
         * 
         * See `EnderDragon` for an example implementation.
         */
        getParts(): $PartEntity<never>[];
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canSwimInFluidType(type: $FluidType_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldRiderSit(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canRiderInteract(): boolean;
        /**
         * Returns The classification of this entity
         */
        getClassification(forSpawnCount: boolean): $MobCategory;
        /**
         * @deprecated
         * Deserialize from a compound tag.
         */
        deserializeNBT(provider: $HolderLookup$Provider, nbt: $CompoundTag_): void;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isPushedByFluid(type: $FluidType_): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isEyeInFluidType(type: $FluidType_): boolean;
        /**
         * Sends the pairing data to the client.
         */
        sendPairingData(serverPlayer: $ServerPlayer, bundleBuilder: $Consumer_<$CustomPacketPayload>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isMultipartEntity(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canStartSwimming(): boolean;
        /**
         * Returns how much the fluid should scale the damage done to a falling
         * entity when hitting the ground per tick.
         * 
         * Implementation: If the entity is in many fluids, the smallest modifier
         * is applied.
         */
        getFluidFallDistanceModifier(type: $FluidType_): number;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        getFluidMotionScale(type: $FluidType_): number;
        /**
         * Copies the serialized attachments from another entity to this entity.
         * 
         * This does not trigger syncing of the copied attachments.
         */
        copyAttachmentsFrom(other: $Entity, isDeath: boolean): void;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Returns a sound to play when a certain action is performed by the
         * entity in the fluid. If no sound is present, then the sound will be
         * `null`.
         */
        getSoundFromFluidType(type: $FluidType_, action: $SoundAction): $SoundEvent;
        /**
         * Returns whether the entity can ride in this vehicle under the fluid.
         */
        canBeRiddenUnderFluidType(type: $FluidType_, rider: $Entity): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canHydrateInFluidType(type: $FluidType_): boolean;
        etf$getETFRenderState(): $ETFEntityRenderState;
        getAnimator(): ($AzAnimator<$Object, $CompoundTag>) | undefined;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        ars_nouveau$isDynamicLightEnabled(): boolean;
        ars_nouveau$setDynamicLightEnabled(downwards: boolean): void;
        lambdynlights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        lambdynlights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(component: $Component_): void;
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        getScriptType(): $ScriptType;
        setY(renderDistWeight: number): void;
        setNbt(compound: $CompoundTag_): void;
        /**
         * Checks if the entity is an item entity.
         * Return whether this entity should be rendered as on fire.
         */
        isItem(): this is $ItemEntity;
        setX(renderDistWeight: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        spawn(): void;
        setZ(renderDistWeight: number): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getNbt(): $CompoundTag;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         * Return whether this entity should be rendered as on fire.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         * Called when the entity is attacked.
         */
        attack(source: $DamageSource_, amount: number): boolean;
        mergeNbt(tag: $CompoundTag_): $Entity;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         * Gets the horizontal facing direction of this Entity.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         * Gets the squared distance to the position.
         */
        getDistance(x: number, y: number, y: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         * Gets the squared distance to the position.
         */
        getDistanceSq(x: number, y: number, y: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        setRotation(yRot: number, xRot: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         * Returns the string that identifies this Entity's class
         */
        getTeamId(): string;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        /**
         * Checks if the entity is a server-side player.
         * Return whether this entity should be rendered as on fire.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks if the entity is a client-side player.
         * Return whether this entity should be rendered as on fire.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Checks if the entity is an animal.
         * Return whether this entity should be rendered as on fire.
         */
        isAnimal(): boolean;
        getMotionX(): number;
        setMotionX(renderDistWeight: number): void;
        /**
         * Get the Minecraft server instance
         */
        getServer(): $MinecraftServer;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         * Returns the string that identifies this Entity's class
         */
        getUsername(): string;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(vec: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         * Gets the squared distance to the position.
         */
        distanceTo(x: number, y: number, y: number): number;
        setMotionY(renderDistWeight: number): void;
        getMotionZ(): number;
        /**
         * Returns the string that identifies this Entity's class
         */
        getType(): string;
        setPosition(x: number, y: number, y: number): void;
        setPosition(block: $LevelBlock): void;
        setMotionZ(renderDistWeight: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        teleportTo(x: number, y: number, y: number, yaw: number, z: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, y: number): void;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getLevel(): $Level;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         * Returns the string that identifies this Entity's class
         */
        getTeamName(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a player entity.
         * Return whether this entity should be rendered as on fire.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is an item frame entity.
         * Return whether this entity should be rendered as on fire.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is a `LivingEntity`.
         * Return whether this entity should be rendered as on fire.
         */
        isLiving(): this is $LivingEntity;
        /**
         * Checks if the entity is a monster.
         * Return whether this entity should be rendered as on fire.
         */
        isMonster(): boolean;
        getMotionY(): number;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is a water creature.
         * Return whether this entity should be rendered as on fire.
         */
        isWaterCreature(): boolean;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(tag: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         * Return whether this entity should be rendered as on fire.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks if the entity is an ambient creature.
         * Return whether this entity should be rendered as on fire.
         */
        isAmbientCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        setPositionAndRotation(x: number, y: number, y: number, yaw: number, z: number): void;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         * Return whether this entity should be rendered as on fire.
         */
        isPeacefulCreature(): boolean;
        setDynamicLightEnabled(downwards: boolean): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setStatusMessage(component: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDynamicLightEnabled(): boolean;
        bumblezone$callVibrationAndSoundEffectsFromBlock(pos: $BlockPos_, state: $BlockState_, playStepSound: boolean, broadcastGameEvent: boolean, entityPos: $Vec3_): boolean;
        refurbishedFurnitureBlockPosAffectsMovement(): $BlockPos;
        callGetBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        subtleEffects$setTouchingWater(downwards: boolean): void;
        bumblezone$getDimensions(): $EntityDimensions;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBoardingCooldown(): number;
        /**
         * Gets called every tick from main Entity class
         */
        playExtinguishedSound(): void;
        catnip$callSetLevel(level: $Level_): void;
        bookshelf$createHoverEvent(): $HoverEvent;
        bumblezone$setNextStep(yaw: number): void;
        setBoardingCooldown(ticks: number): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        transition$getRawPosition(): $Vec3;
        transition$setRawPosition(addend: $Vec3_): void;
        bumblezone$callGetTypeName(): $Component;
        setWasTouchingWater(downwards: boolean): void;
        invokeCanAddPassenger(passenger: $Entity): boolean;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        bumblezone$callCollide(vec: $Vec3_): $Vec3;
        bumblezone$getNextStep(): number;
        /**
         * Gets called every tick from main Entity class
         */
        doWaterSplashingEffects(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        getFirstTick(): boolean;
        invokeCanRide(passenger: $Entity): boolean;
        setRemovalReason(reason: $Entity$RemovalReason_): void;
        callGetTypeName(): $Component;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get alive(): boolean;
        get entityType(): $EntityType<never>;
        get lightLevelDependentMagicValue(): number;
        get blockZ(): number;
        get blockX(): number;
        get blockY(): number;
        get uuid(): $UUID;
        get inWater(): boolean;
        get motions(): $Stack<any>;
        get freezing(): boolean;
        get maxAirSupply(): number;
        get stringUuid(): string;
        get percentFrozen(): number;
        get dynamicLightId(): number;
        get dynamicLightX(): number;
        get forcedVisible(): boolean;
        get animatorOrNull(): $AzAnimator<any, any>;
        get inWaterOrRain(): boolean;
        get teamColor(): number;
        get onPortalCooldown(): boolean;
        get inWaterOrBubble(): boolean;
        get positionCodec(): $VecDeltaCodec;
        get onPosLegacy(): $BlockPos;
        get entityData(): $SynchedEntityData;
        get attachments(): $EntityAttachments;
        get pickRadius(): number;
        get scoreboardName(): string;
        get firstPassenger(): $Entity;
        get attackable(): boolean;
        get rotationVector(): $Vec2;
        get descending(): boolean;
        get visuallyCrawling(): boolean;
        get motionDirection(): $Direction;
        get knownMovement(): $Vec3;
        get rootVehicle(): $Entity;
        set levelCallback(value: $EntityInLevelCallback);
        get alwaysTicking(): boolean;
        get forgePersistentData(): $CompoundTag;
        get fullyFrozen(): boolean;
        get visuallySwimming(): boolean;
        get effectiveAi(): boolean;
        get blockStateOn(): $BlockState;
        get spectator(): boolean;
        get underWater(): boolean;
        get crouching(): boolean;
        set UUID(value: $UUID_);
        get inBlockState(): $BlockState;
        get lookAngle(): $Vec3;
        get maxFallDistance(): number;
        get weaponItem(): $ItemStack;
        get steppingCarefully(): boolean;
        get boundingBoxForCulling(): $AABB;
        get inLiquid(): boolean;
        get inWall(): boolean;
        get randomY(): number;
        get discrete(): boolean;
        get gravity(): number;
        get inLava(): boolean;
        get horizontalFacing(): $Direction;
        get inRain(): boolean;
        get forward(): $Vec3;
        get team(): $PlayerTeam;
        get tags(): $Set<string>;
        get onRails(): boolean;
        get pickResult(): $ItemStack;
        get encodeId(): string;
        get addedToLevel(): boolean;
        get commandSenderWorld(): $Level;
        get controlledByLocalInstance(): boolean;
        get bbHeight(): number;
        get pushable(): boolean;
        get eyeY(): number;
        get pickable(): boolean;
        get onPos(): $BlockPos;
        get inWaterRainOrBubble(): boolean;
        get fluidJumpThreshold(): number;
        get maxHeightFluidType(): $FluidType;
        get ticksRequiredToFreeze(): number;
        get controllingPassenger(): $LivingEntity;
        get isInsideStructureTracker(): $IsInsideStructureTracker;
        get persistentData(): $CompoundTag;
        set sharedFlagOnFire(value: boolean);
        get nearestViewDirection(): $Direction;
        get dimensionChangingDelay(): number;
        get suppressingBounce(): boolean;
        get passengersAndSelf(): $Stream<$Entity>;
        get ignoringBlockTriggers(): boolean;
        get selfAndPassengers(): $Stream<$Entity>;
        get indirectPassengers(): $Iterable<$Entity>;
        get pistonPushReaction(): $PushReaction;
        get controlledVehicle(): $Entity;
        get dynamicLightPrevY(): number;
        get dynamicLightPrevZ(): number;
        get dynamicLightLevel(): $Level;
        get dynamicLightPrevX(): number;
        get dynamicLightY(): number;
        get dynamicLightZ(): number;
        get passenger(): boolean;
        get soundSource(): $SoundSource;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get bbWidth(): number;
        get onFire(): boolean;
        get random(): $RandomSource;
        get feedbackDisplayName(): $Component;
        get parts(): $PartEntity<never>[];
        get multipartEntity(): boolean;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        get self(): boolean;
        get facing(): $Direction;
        get passengers(): $EntityArrayList;
        get teamId(): string;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get animal(): boolean;
        get username(): string;
        get type(): string;
        get teamName(): string;
        get profile(): $GameProfile;
        get player(): boolean;
        get frame(): boolean;
        get living(): boolean;
        get monster(): boolean;
        get waterCreature(): boolean;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get firstTick(): boolean;
    }
    export class $Display$ColorInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$ColorInterpolator}.
     */
    export type $Display$ColorInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $SpawnPlacements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$Data}.
     */
    export type $SpawnPlacements$Data_ = { placement?: $SpawnPlacementType_, predicate?: $SpawnPlacements$SpawnPredicate_<never>, heightMap?: $Heightmap$Types_,  } | [placement?: $SpawnPlacementType_, predicate?: $SpawnPlacements$SpawnPredicate_<never>, heightMap?: $Heightmap$Types_, ];
    export class $Display$TextDisplay$LineSplitter {
    }
    export interface $Display$TextDisplay$LineSplitter {
        split(text: $Component_, maxWidth: number): $Display$TextDisplay$CachedInfo;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$LineSplitter}.
     */
    export type $Display$TextDisplay$LineSplitter_ = ((arg0: $Component, arg1: number) => $Display$TextDisplay$CachedInfo_);
    export class $EntityType<T extends $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $InjectedEntityTypeExtension, $DynamicLightHandlerHolder<any>, $EntityTypeKJS, $EntityTypeExtension<any> {
        static getKey(entityType: $EntityType_<never>): $ResourceLocation;
        toShortString(): string;
        create(level: $Level_): T;
        create(level: $ServerLevel, consumer: $Consumer_<T> | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        static create(tag: $CompoundTag_, level: $Level_): ($Entity) | undefined;
        /**
         * Checks if this entity type is contained in the tag
         */
        is(tag: $TagKey_<$EntityType<never>>): boolean;
        is(entityType: $HolderSet_<$EntityType<never>>): boolean;
        getDimensions(): $EntityDimensions;
        getWidth(): number;
        getHeight(): number;
        getDescription(): $Component;
        getCategory(): $MobCategory;
        kjs$getKey(): $ResourceKey<any>;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        static loadEntityRecursive(compound: $CompoundTag_, level: $Level_, entityFunction: $Function_<$Entity, $Entity>): $Entity;
        static loadEntitiesRecursive(tags: $List_<$Tag_>, level: $Level_): $Stream<$Entity>;
        lambdynlights$getId(): $ResourceLocation;
        canSpawnFarFromPlayer(): boolean;
        clientTrackingRange(): number;
        static createDefaultStackConfig<T extends $Entity>(serverLevel: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        lambdynlights$getName(): $Component;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        static appendDefaultStackConfig<T extends $Entity>(consumer: $Consumer_<T>, level: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        static appendCustomNameConfig<T extends $Entity>(consumer: $Consumer_<T>, stack: $ItemStack_): $Consumer<T>;
        static updateCustomEntityTag(level: $Level_, player: $Player | null, entity: $Entity | null, customData: $CustomData): void;
        lambdynlights$getSetting(): $LightSourceSettingEntry;
        static by(compound: $CompoundTag_): ($EntityType<never>) | undefined;
        handler$hig000$spectrum$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        static appendCustomEntityStackConfig<T extends $Entity>(consumer: $Consumer_<T>, level: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        /**
         * Tries to get the entity type associated by the key.
         */
        static byString(key: string): ($EntityType<never>) | undefined;
        canSerialize(): boolean;
        getDescriptionId(): string;
        requiredFeatures(): $FeatureFlagSet;
        spawn(serverLevel: $ServerLevel, stack: $ItemStack_ | null, player: $Player | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        spawn(level: $ServerLevel, consumer: $Consumer_<T> | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        spawn(level: $ServerLevel, pos: $BlockPos_, spawnType: $MobSpawnType_): T;
        tryCast(entity: $Entity): T;
        canSummon(): boolean;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        fireImmune(): boolean;
        kjs$getId(): string;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        isBlockDangerous(state: $BlockState_): boolean;
        getBaseClass(): $Class<$Entity>;
        getSpawnAABB(x: number, arg1: number, y: number): $AABB;
        updateInterval(): number;
        trackDeltas(): boolean;
        kjs$asHolder(): $Holder<any>;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        arch$holder(): $Holder<$EntityType<never>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        arch$registryName(): $ResourceLocation;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
        getIdLocation(): $ResourceLocation;
        static MOOSHROOM: $EntityType<$MushroomCow>;
        static MAGMA_CUBE: $EntityType<$MagmaCube>;
        static SILVERFISH: $EntityType<$Silverfish>;
        static MULE: $EntityType<$Mule>;
        static HOGLIN: $EntityType<$Hoglin>;
        static LEASH_KNOT: $EntityType<$LeashFenceKnotEntity>;
        static HUSK: $EntityType<$Husk>;
        static VINDICATOR: $EntityType<$Vindicator>;
        static WARDEN: $EntityType<$Warden>;
        static OMINOUS_ITEM_SPAWNER: $EntityType<$OminousItemSpawner>;
        static HOPPER_MINECART: $EntityType<$MinecartHopper>;
        static PILLAGER: $EntityType<$Pillager>;
        static SHULKER_BULLET: $EntityType<$ShulkerBullet>;
        static VILLAGER: $EntityType<$Villager>;
        static AREA_EFFECT_CLOUD: $EntityType<$AreaEffectCloud>;
        static PAINTING: $EntityType<$Painting>;
        static TURTLE: $EntityType<$Turtle>;
        static TRADER_LLAMA: $EntityType<$TraderLlama>;
        static SMALL_FIREBALL: $EntityType<$SmallFireball>;
        static TNT: $EntityType<$PrimedTnt>;
        static CAVE_SPIDER: $EntityType<$CaveSpider>;
        static SLIME: $EntityType<$Slime>;
        static DROWNED: $EntityType<$Drowned>;
        static FIREBALL: $EntityType<$LargeFireball>;
        static EVOKER: $EntityType<$Evoker>;
        static MARKER: $EntityType<$Marker>;
        static ENDERMITE: $EntityType<$Endermite>;
        static EXPERIENCE_BOTTLE: $EntityType<$ThrownExperienceBottle>;
        static AXOLOTL: $EntityType<$Axolotl>;
        static COMMAND_BLOCK_MINECART: $EntityType<$MinecartCommandBlock>;
        static PLAYER: $EntityType<$Player>;
        static ITEM: $EntityType<$ItemEntity>;
        static TEXT_DISPLAY: $EntityType<$Display$TextDisplay>;
        static SALMON: $EntityType<$Salmon>;
        static ZOMBIE: $EntityType<$Zombie>;
        static GOAT: $EntityType<$Goat>;
        static STRIDER: $EntityType<$Strider>;
        static PANDA: $EntityType<$Panda>;
        static OCELOT: $EntityType<$Ocelot>;
        static ENDERMAN: $EntityType<$EnderMan>;
        static CHEST_MINECART: $EntityType<$MinecartChest>;
        static ZOMBIE_VILLAGER: $EntityType<$ZombieVillager>;
        static LLAMA: $EntityType<$Llama>;
        static ENDER_DRAGON: $EntityType<$EnderDragon>;
        static WITCH: $EntityType<$Witch>;
        static EXPERIENCE_ORB: $EntityType<$ExperienceOrb>;
        static ARMADILLO: $EntityType<$Armadillo>;
        static ITEM_FRAME: $EntityType<$ItemFrame>;
        static WITHER: $EntityType<$WitherBoss>;
        static ARROW: $EntityType<$Arrow>;
        static CREEPER: $EntityType<$Creeper>;
        static BOGGED: $EntityType<$Bogged>;
        static ILLUSIONER: $EntityType<$Illusioner>;
        static BREEZE: $EntityType<$Breeze>;
        static CAMEL: $EntityType<$Camel>;
        static COD: $EntityType<$Cod>;
        static ZOMBIE_HORSE: $EntityType<$ZombieHorse>;
        static FURNACE_MINECART: $EntityType<$MinecartFurnace>;
        static RAVAGER: $EntityType<$Ravager>;
        static BOAT: $EntityType<$Boat>;
        static SHULKER: $EntityType<$Shulker>;
        static SNIFFER: $EntityType<$Sniffer>;
        static BEE: $EntityType<$Bee>;
        static ITEM_DISPLAY: $EntityType<$Display$ItemDisplay>;
        static PHANTOM: $EntityType<$Phantom>;
        static BLAZE: $EntityType<$Blaze>;
        static SKELETON_HORSE: $EntityType<$SkeletonHorse>;
        static COW: $EntityType<$Cow>;
        static WANDERING_TRADER: $EntityType<$WanderingTrader>;
        static END_CRYSTAL: $EntityType<$EndCrystal>;
        static PIG: $EntityType<$Pig>;
        static ZOGLIN: $EntityType<$Zoglin>;
        static BREEZE_WIND_CHARGE: $EntityType<$BreezeWindCharge>;
        static WOLF: $EntityType<$Wolf>;
        static IRON_GOLEM: $EntityType<$IronGolem>;
        static FROG: $EntityType<$Frog>;
        static SHEEP: $EntityType<$Sheep>;
        static VEX: $EntityType<$Vex>;
        static ENDER_PEARL: $EntityType<$ThrownEnderpearl>;
        static BLOCK_DISPLAY: $EntityType<$Display$BlockDisplay>;
        static TRIDENT: $EntityType<$ThrownTrident>;
        static PIGLIN_BRUTE: $EntityType<$PiglinBrute>;
        static POLAR_BEAR: $EntityType<$PolarBear>;
        static MINECART: $EntityType<$Minecart>;
        static LIGHTNING_BOLT: $EntityType<$LightningBolt>;
        static POTION: $EntityType<$ThrownPotion>;
        static FISHING_BOBBER: $EntityType<$FishingHook>;
        static CHEST_BOAT: $EntityType<$ChestBoat>;
        static SQUID: $EntityType<$Squid>;
        static DRAGON_FIREBALL: $EntityType<$DragonFireball>;
        static ELDER_GUARDIAN: $EntityType<$ElderGuardian>;
        static HORSE: $EntityType<$Horse>;
        static TNT_MINECART: $EntityType<$MinecartTNT>;
        static ARMOR_STAND: $EntityType<$ArmorStand>;
        static PARROT: $EntityType<$Parrot>;
        static EVOKER_FANGS: $EntityType<$EvokerFangs>;
        static FOX: $EntityType<$Fox>;
        static GIANT: $EntityType<$Giant>;
        static STRAY: $EntityType<$Stray>;
        static SPECTRAL_ARROW: $EntityType<$SpectralArrow>;
        static CAT: $EntityType<$Cat>;
        static RABBIT: $EntityType<$Rabbit>;
        static DONKEY: $EntityType<$Donkey>;
        static EYE_OF_ENDER: $EntityType<$EyeOfEnder>;
        static SPAWNER_MINECART: $EntityType<$MinecartSpawner>;
        static GLOW_ITEM_FRAME: $EntityType<$GlowItemFrame>;
        static INTERACTION: $EntityType<$Interaction>;
        static TROPICAL_FISH: $EntityType<$TropicalFish>;
        static ALLAY: $EntityType<$Allay>;
        static SPIDER: $EntityType<$Spider>;
        static SKELETON: $EntityType<$Skeleton>;
        static WITHER_SKELETON: $EntityType<$WitherSkeleton>;
        static CHICKEN: $EntityType<$Chicken>;
        static ZOMBIFIED_PIGLIN: $EntityType<$ZombifiedPiglin>;
        static SNOWBALL: $EntityType<$Snowball>;
        static GLOW_SQUID: $EntityType<$GlowSquid>;
        static SNOW_GOLEM: $EntityType<$SnowGolem>;
        static WITHER_SKULL: $EntityType<$WitherSkull>;
        static PUFFERFISH: $EntityType<$Pufferfish>;
        static GUARDIAN: $EntityType<$Guardian>;
        static EGG: $EntityType<$ThrownEgg>;
        static LLAMA_SPIT: $EntityType<$LlamaSpit>;
        static WIND_CHARGE: $EntityType<$WindCharge>;
        static FALLING_BLOCK: $EntityType<$FallingBlockEntity>;
        static PIGLIN: $EntityType<$Piglin>;
        static GHAST: $EntityType<$Ghast>;
        static BAT: $EntityType<$Bat>;
        static DOLPHIN: $EntityType<$Dolphin>;
        static TADPOLE: $EntityType<$Tadpole>;
        static FIREWORK_ROCKET: $EntityType<$FireworkRocketEntity>;
        constructor(factory: $EntityType$EntityFactory_<T>, category: $MobCategory_, serialize: boolean, summon: boolean, fireImmune: boolean, canSpawnFarFromPlayer: boolean, immuneTo: $ImmutableSet<$Block_>, dimensions: $EntityDimensions_, spawnDimensionsScale: number, clientTrackingRange: number, updateInterval: number, requiredFeatures: $FeatureFlagSet);
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet, arg12: $Predicate_<$EntityType<never>>, arg13: $ToIntFunction_<$EntityType<never>>, arg14: $ToIntFunction_<$EntityType<never>>);
        get dimensions(): $EntityDimensions;
        get width(): number;
        get height(): number;
        get description(): $Component;
        get category(): $MobCategory;
        get descriptionId(): string;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get baseClass(): $Class<$Entity>;
        get mod(): string;
        get tagKeys(): $List<$TagKey<T>>;
        get idLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EntityType}.
     */
    export type $EntityType_<T> = RegistryTypes.EntityType;
    export class $LerpingModel {
    }
    export interface $LerpingModel {
        getModelRotationValues(): $Map<string, $Vector3f>;
        get modelRotationValues(): $Map<string, $Vector3f>;
    }
    /**
     * Values that may be interpreted as {@link $LerpingModel}.
     */
    export type $LerpingModel_ = (() => $Map_<string, $Vector3f>);
    export class $Display$TransformationInterpolator extends $Record implements $Display$GenericInterpolator<$Transformation> {
    }
    /**
     * Values that may be interpreted as {@link $Display$TransformationInterpolator}.
     */
    export type $Display$TransformationInterpolator_ = { previous?: $Transformation, current?: $Transformation,  } | [previous?: $Transformation, current?: $Transformation, ];
    export class $SpawnPlacements implements $SpawnPlacementsAccessor {
        static checkSpawnRules<T extends $Entity>(entityType: $EntityType_<T>, serverLevel: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        static fireSpawnPlacementEvent(): void;
        static isSpawnPositionOk(entityType: $EntityType_<never>, level: $LevelReader, pos: $BlockPos_): boolean;
        static getHeightmapType(entityType: $EntityType_<never> | null): $Heightmap$Types;
        static getPlacementType(entityType: $EntityType_<never>): $SpawnPlacementType;
        static hasPlacement(arg0: $EntityType_<never>): boolean;
        static callRegister$yungscavebiomes_$md$f87c94$0(entityType: $EntityType_<any>, spawnPlacementType: $SpawnPlacementType_, heightmapType: $Heightmap$Types_, predicate: $SpawnPlacements$SpawnPredicate_<any>): void;
        constructor();
    }
    export class $Display$FloatInterpolator {
        static constant(value: number): $Display$FloatInterpolator;
    }
    export interface $Display$FloatInterpolator {
        get(partialTick: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$FloatInterpolator}.
     */
    export type $Display$FloatInterpolator_ = ((arg0: number) => number);
    export class $Display$IntInterpolator {
        static constant(value: number): $Display$IntInterpolator;
    }
    export interface $Display$IntInterpolator {
        get(partialTick: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$IntInterpolator}.
     */
    export type $Display$IntInterpolator_ = ((arg0: number) => number);
    export class $Leashable {
        static tickLeash<E extends $Entity>(entity: E): void;
        static LEASH_TAG: string;
        static LEASH_ELASTIC_DIST: number;
        static LEASH_TOO_FAR_DIST: number;
    }
    export interface $Leashable {
        canBeLeashed(): boolean;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        getLeashData(): $Leashable$LeashData;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        mayBeLeashed(): boolean;
        closeRangeLeashBehaviour(entity: $Entity): void;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        leashTooFarBehaviour(): void;
        setDelayedLeashHolderId(delayedLeashHolderId: number): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        isLeashed(): boolean;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        getLeashHolder(): $Entity;
        dropLeash(broadcastPacket: boolean, dropItem: boolean): void;
        canHaveALeashAttachedToIt(): boolean;
        set delayedLeashHolderId(value: number);
        get leashed(): boolean;
        get leashHolder(): $Entity;
    }
    export class $EntityAttachment$Fallback {
        static ZERO: $List<$Vec3>;
        static AT_CENTER: $EntityAttachment$Fallback;
        static AT_FEET: $EntityAttachment$Fallback;
        static AT_HEIGHT: $EntityAttachment$Fallback;
    }
    export interface $EntityAttachment$Fallback {
        create(width: number, height: number): $List<$Vec3>;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment$Fallback}.
     */
    export type $EntityAttachment$Fallback_ = ((arg0: number, arg1: number) => $List_<$Vec3_>);
    export class $Display$BillboardConstraints extends $Enum<$Display$BillboardConstraints> implements $StringRepresentable {
        static values(): $Display$BillboardConstraints[];
        static valueOf(arg0: string): $Display$BillboardConstraints;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$BillboardConstraints;
        static CODEC: $Codec<$Display$BillboardConstraints>;
        static VERTICAL: $Display$BillboardConstraints;
        static FIXED: $Display$BillboardConstraints;
        static BY_ID: $IntFunction<$Display$BillboardConstraints>;
        static HORIZONTAL: $Display$BillboardConstraints;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$BillboardConstraints}.
     */
    export type $Display$BillboardConstraints_ = "fixed" | "vertical" | "horizontal" | "center";
    export class $Attackable {
    }
    export interface $Attackable {
        getLastAttacker(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Attackable}.
     */
    export type $Attackable_ = (() => $LivingEntity);
    export class $Display$GenericInterpolator<T> {
        static constant<T>(value: T): $Display$GenericInterpolator<T>;
    }
    export interface $Display$GenericInterpolator<T> {
        get(partialTick: number): T;
    }
    /**
     * Values that may be interpreted as {@link $Display$GenericInterpolator}.
     */
    export type $Display$GenericInterpolator_<T> = ((arg0: number) => T);
    export class $HasCustomInventoryScreen {
    }
    export interface $HasCustomInventoryScreen {
        openCustomInventoryScreen(player: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $HasCustomInventoryScreen}.
     */
    export type $HasCustomInventoryScreen_ = ((arg0: $Player) => void);
    export class $PowerableMob {
    }
    export interface $PowerableMob {
        isPowered(): boolean;
        get powered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PowerableMob}.
     */
    export type $PowerableMob_ = (() => boolean);
    export class $SpawnPlacementType {
    }
    export interface $SpawnPlacementType {
        isSpawnPositionOk(level: $LevelReader, pos: $BlockPos_, entityType: $EntityType_<never> | null): boolean;
        adjustSpawnPosition(level: $LevelReader, pos: $BlockPos_): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacementType}.
     */
    export type $SpawnPlacementType_ = ((arg0: $LevelReader, arg1: $BlockPos, arg2: $EntityType<never>) => boolean);
    export class $Interaction extends $Entity implements $Attackable, $Targeting {
        getTarget(): $LivingEntity;
        setWidth(height: number): void;
        setHeight(height: number): void;
        getLastAttacker(): $LivingEntity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get target(): $LivingEntity;
        set width(value: number);
        set height(value: number);
        get lastAttacker(): $LivingEntity;
    }
    export class $FlyingMob extends $Mob {
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
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
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
    }
    export class $Display$TextDisplay$Align extends $Enum<$Display$TextDisplay$Align> implements $StringRepresentable {
        static values(): $Display$TextDisplay$Align[];
        static valueOf(arg0: string): $Display$TextDisplay$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$TextDisplay$Align;
        static CODEC: $Codec<$Display$TextDisplay$Align>;
        static LEFT: $Display$TextDisplay$Align;
        static RIGHT: $Display$TextDisplay$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$Align}.
     */
    export type $Display$TextDisplay$Align_ = "center" | "left" | "right";
    export interface $EntityType<T> extends RegistryMarked<RegistryTypes.EntityTypeTag, RegistryTypes.EntityType> {}
    export class $Display$BlockDisplay$BlockRenderState extends $Record {
        blockState(): $BlockState;
        constructor(arg0: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $Display$BlockDisplay$BlockRenderState}.
     */
    export type $Display$BlockDisplay$BlockRenderState_ = { blockState?: $BlockState_,  } | [blockState?: $BlockState_, ];
    export class $SpawnPlacementTypes {
        static IN_LAVA: $SpawnPlacementType;
        static IN_WATER: $SpawnPlacementType;
        static NO_RESTRICTIONS: $SpawnPlacementType;
        static ON_GROUND: $SpawnPlacementType;
    }
    export interface $SpawnPlacementTypes {
    }
    export class $TamableAnimal extends $Animal implements $OwnableEntity {
        isOwnedBy(target: $LivingEntity): boolean;
        setTame(tame: boolean, applyTamingSideEffects: boolean): void;
        tame(player: $Player): void;
        getOwnerUUID(): $UUID;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isOrderedToSit(): boolean;
        setOrderedToSit(sitting: boolean): void;
        wantsToAttack(target: $LivingEntity, owner: $LivingEntity): boolean;
        setInSittingPose(sitting: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        unableToMoveToOwner(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTryTeleportToOwner(): boolean;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        tryToTeleportToOwner(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isTame(): boolean;
        setOwnerUUID(uuid: $UUID_ | null): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isInSittingPose(): boolean;
        getOwner(): $LivingEntity;
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
        static TELEPORT_WHEN_DISTANCE_IS_SQ: number;
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
        get owner(): $LivingEntity;
    }
    export class $PlayerRideable {
    }
    export interface $PlayerRideable {
    }
    export class $Crackiness {
        byDamage(damage: number, durability: number): $Crackiness$Level;
        byDamage(stack: $ItemStack_): $Crackiness$Level;
        byFraction(fraction: number): $Crackiness$Level;
        static GOLEM: $Crackiness;
        static WOLF_ARMOR: $Crackiness;
    }
    export class $Interaction$PlayerAction extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Interaction$PlayerAction}.
     */
    export type $Interaction$PlayerAction_ = { timestamp?: number, player?: $UUID_,  } | [timestamp?: number, player?: $UUID_, ];
    export class $MobCategory extends $Enum<$MobCategory> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $MobCategory[];
        static valueOf(arg0: string): $MobCategory;
        getDespawnDistance(): number;
        static getExtensionInfo(): $ExtensionInfo;
        /**
         * Gets whether this creature type is peaceful.
         */
        isPersistent(): boolean;
        getSerializedName(): string;
        getMaxInstancesPerChunk(): number;
        /**
         * Gets whether this creature type is peaceful.
         */
        isFriendly(): boolean;
        getNoDespawnDistance(): number;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND_WATER_CREATURE: $MobCategory;
        static WATER_CREATURE: $MobCategory;
        static WATER_AMBIENT: $MobCategory;
        static AXOLOTLS: $MobCategory;
        static CODEC: $Codec<$MobCategory>;
        static AMBIENT: $MobCategory;
        static CREATURE: $MobCategory;
        static MISC: $MobCategory;
        static MONSTER: $MobCategory;
        get despawnDistance(): number;
        static get extensionInfo(): $ExtensionInfo;
        get persistent(): boolean;
        get serializedName(): string;
        get maxInstancesPerChunk(): number;
        get friendly(): boolean;
        get noDespawnDistance(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        flags(): number;
        text(): $Component;
        lineWidth(): number;
        backgroundColor(): $Display$IntInterpolator;
        textOpacity(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$TextRenderState}.
     */
    export type $Display$TextDisplay$TextRenderState_ = { lineWidth?: number, text?: $Component_, flags?: number, textOpacity?: $Display$IntInterpolator_, backgroundColor?: $Display$IntInterpolator_,  } | [lineWidth?: number, text?: $Component_, flags?: number, textOpacity?: $Display$IntInterpolator_, backgroundColor?: $Display$IntInterpolator_, ];
    export class $Display$BlockDisplay extends $Display {
        getBlockState(): $BlockState;
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        ars_Nouveau$motions: $Stack<any>;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        static TAG_BLOCK_STATE: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get blockState(): $BlockState;
    }
    export class $ItemSteerable {
    }
    export interface $ItemSteerable {
        boost(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSteerable}.
     */
    export type $ItemSteerable_ = (() => boolean);
    export class $PlayerRideableJumping {
    }
    export interface $PlayerRideableJumping extends $PlayerRideable {
        getJumpCooldown(): number;
        onPlayerJump(jumpPower: number): void;
        canJump(): boolean;
        handleStartJump(jumpPower: number): void;
        handleStopJump(): void;
        get jumpCooldown(): number;
    }
    export class $Marker extends $Entity {
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $SpawnPlacements$SpawnPredicate<T extends $Entity> {
    }
    export interface $SpawnPlacements$SpawnPredicate<T extends $Entity> {
        test(entityType: $EntityType_<T>, serverLevel: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$SpawnPredicate}.
     */
    export type $SpawnPlacements$SpawnPredicate_<T> = ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean);
    export class $EquipmentSlot$Type extends $Enum<$EquipmentSlot$Type> {
        static values(): $EquipmentSlot$Type[];
        static valueOf(arg0: string): $EquipmentSlot$Type;
        static ANIMAL_ARMOR: $EquipmentSlot$Type;
        static HUMANOID_ARMOR: $EquipmentSlot$Type;
        static HAND: $EquipmentSlot$Type;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot$Type}.
     */
    export type $EquipmentSlot$Type_ = "hand" | "humanoid_armor" | "animal_armor";
    export class $Display$TextDisplay extends $Display {
        setText(text: $Component_): void;
        static getAlign(flags: number): $Display$TextDisplay$Align;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        cacheDisplay(splitter: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static FLAG_SHADOW: number;
        xRot: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        ars_Nouveau$motions: $Stack<any>;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ALIGN_RIGHT: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static TAG_TEXT: string;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        static INITIAL_BACKGROUND: number;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static FLAG_SEE_THROUGH: number;
        static DEFAULT_BB_HEIGHT: number;
        static FLAG_USE_DEFAULT_BACKGROUND: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FLAG_ALIGN_LEFT: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        set text(value: $Component_);
    }
    export class $Display$LinearFloatInterpolator extends $Record implements $Display$FloatInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearFloatInterpolator}.
     */
    export type $Display$LinearFloatInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EquipmentSlot extends $Enum<$EquipmentSlot> implements $StringRepresentable {
        getName(): string;
        static values(): $EquipmentSlot[];
        static valueOf(targetName: string): $EquipmentSlot;
        limit(stack: $ItemStack_): $ItemStack;
        getType(): $EquipmentSlot$Type;
        /**
         * Gets the actual slot index.
         */
        getIndex(): number;
        getIndex(baseIndex: number): number;
        static byName(targetName: string): $EquipmentSlot;
        /**
         * Gets the actual slot index.
         */
        getFilterFlag(): number;
        getSerializedName(): string;
        isArmor(): boolean;
        getRemappedEnumConstantName(): string;
        static CHEST: $EquipmentSlot;
        static HEAD: $EquipmentSlot;
        static CODEC: $StringRepresentable$EnumCodec<$EquipmentSlot>;
        static OFFHAND: $EquipmentSlot;
        static MAINHAND: $EquipmentSlot;
        static LEGS: $EquipmentSlot;
        static NO_COUNT_LIMIT: number;
        static BODY: $EquipmentSlot;
        static FEET: $EquipmentSlot;
        get type(): $EquipmentSlot$Type;
        get filterFlag(): number;
        get serializedName(): string;
        get armor(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot}.
     */
    export type $EquipmentSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "body";
    export class $VariantHolder<T> {
    }
    export interface $VariantHolder<T> {
        setVariant(variant: T): void;
        getVariant(): T;
    }
    export class $EquipmentUser {
    }
    export interface $EquipmentUser {
        resolveSlot(stack: $ItemStack_, excludedSlots: $List_<$EquipmentSlot_>): $EquipmentSlot;
        setDropChance(slot: $EquipmentSlot_, dropChance: number): void;
        getItemBySlot(slot: $EquipmentSlot_): $ItemStack;
        setItemSlot(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, seed: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_, params: $LootParams): void;
    }
    export class $WalkAnimationState {
        update(newSpeed: number, partialTick: number): void;
        position(partialTick: number): number;
        position(): number;
        isMoving(): boolean;
        setSpeed(speed: number): void;
        speed(): number;
        speed(partialTick: number): number;
        speedOld: number;
        constructor();
        get moving(): boolean;
    }
    export class $SlotAccess {
        static of(getter: $Supplier_<$ItemStack>, setter: $Consumer_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(entity: $LivingEntity, slot: $EquipmentSlot_): $SlotAccess;
        static forEquipmentSlot(entity: $LivingEntity, slot: $EquipmentSlot_, stackFilter: $Predicate_<$ItemStack>): $SlotAccess;
        static forContainer(inventory: $Container, slot: number, stackFilter: $Predicate_<$ItemStack>): $SlotAccess;
        static forContainer(inventory: $Container, slot: number): $SlotAccess;
        static NULL: $SlotAccess;
    }
    export interface $SlotAccess {
        get(): $ItemStack;
        set(stack: $ItemStack_): boolean;
    }
    export class $LightningBolt extends $Entity {
        getCause(): $ServerPlayer;
        setCause(cause: $ServerPlayer | null): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getBlocksSetOnFire(): number;
        getHitEntities(): $Stream<$Entity>;
        /**
         * Called to update the entity's position/logic.
         */
        powerLightningRod(): void;
        getStrikePosition(): $BlockPos;
        static clearCopperOnLightningStrike(level: $Level_, pos: $BlockPos_): void;
        getDamage(): number;
        setDamage(seconds: number): void;
        handler$icj000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        setVisualOnly(visualOnly: boolean): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        flashes: number;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        seed: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        life: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        visualOnly: boolean;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        hitEntities: $Set<$Entity>;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$LightningBolt>, level: $Level_);
        get blocksSetOnFire(): number;
        get strikePosition(): $BlockPos;
    }
    export class $LivingEntity$Fallsounds extends $Record {
        big(): $SoundEvent;
        small(): $SoundEvent;
        constructor(small: $SoundEvent_, big: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $LivingEntity$Fallsounds}.
     */
    export type $LivingEntity$Fallsounds_ = { big?: $SoundEvent_, small?: $SoundEvent_,  } | [big?: $SoundEvent_, small?: $SoundEvent_, ];
    export class $Display$ItemDisplay extends $Display {
        getItemStack(): $ItemStack;
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        ars_Nouveau$motions: $Stack<any>;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get itemStack(): $ItemStack;
    }
    export class $EntitySelector$MobCanWearArmorEntitySelector implements $Predicate<$Entity> {
        test(entity: $Entity | null): boolean;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        constructor(stack: $ItemStack_);
    }
    export class $Entity$MovementEmission extends $Enum<$Entity$MovementEmission> {
        static values(): $Entity$MovementEmission[];
        static valueOf(arg0: string): $Entity$MovementEmission;
        emitsAnything(): boolean;
        emitsEvents(): boolean;
        emitsSounds(): boolean;
        static ALL: $Entity$MovementEmission;
        static EVENTS: $Entity$MovementEmission;
        static SOUNDS: $Entity$MovementEmission;
        static NONE: $Entity$MovementEmission;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MovementEmission}.
     */
    export type $Entity$MovementEmission_ = "none" | "sounds" | "events" | "all";
    export class $AnimationState {
        isStarted(): boolean;
        start(tickCount: number): void;
        stop(): void;
        updateTime(ageInTicks: number, speed: number): void;
        ifStarted(action: $Consumer_<$AnimationState>): void;
        fastForward(duration: number, speed: number): void;
        animateWhen(condition: boolean, tickCount: number): void;
        getAccumulatedTime(): number;
        startIfStopped(tickCount: number): void;
        constructor();
        get started(): boolean;
        get accumulatedTime(): number;
    }
    /**
     * @deprecated
     */
    export class $Shearable {
    }
    export interface $Shearable extends $IShearable {
        /**
         * @deprecated
         */
        readyForShearing(): boolean;
        /**
         * @deprecated
         */
        shear(source: $SoundSource_): void;
    }
    export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
        setOwner(owner: $LivingEntity | null): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDuration(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDurationOnUse(): number;
        setDurationOnUse(duration: number): void;
        getParticle(): $ParticleOptions;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getWaitTime(): number;
        getRadiusOnUse(): number;
        getRadiusPerTick(): number;
        setPotionContents(potionContents: $PotionContents_): void;
        setRadiusOnUse(radius: number): void;
        setWaitTime(duration: number): void;
        setRadiusPerTick(radius: number): void;
        setDuration(duration: number): void;
        /**
         * Returns `true` if the cloud is waiting. While waiting, the radius is ignored and the cloud shows fewer particles in its area.
         */
        isWaiting(): boolean;
        setParticle(particleOption: $ParticleOptions_): void;
        addEffect(effectInstance: $MobEffectInstance): void;
        setRadius(radius: number): void;
        getRadius(): number;
        getOwner(): $Entity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static DEFAULT_WIDTH: number;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static HEIGHT: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$AreaEffectCloud>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        set potionContents(value: $PotionContents_);
        get waiting(): boolean;
    }
    export class $PathfinderMob extends $Mob implements $IMagicEntity {
        self(): $PathfinderMob;
        /**
         * Returns whether the entity got a `Path`.
         */
        isDrinkingPotion(): boolean;
        /**
         * Returns whether the entity got a `Path`.
         */
        isPanicking(): boolean;
        /**
         * Set sprinting switch for Entity.
         */
        setDrinkingPotion(sprinting: boolean): void;
        getMagicData(): $MagicData;
        /**
         * Returns whether the entity got a `Path`.
         */
        isPathFinding(): boolean;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        castComplete(): void;
        setSyncedSpellData(arg0: $SyncedSpellData): void;
        initiateCastSpell(arg0: $AbstractSpell_, arg1: number): void;
        getWalkTargetValue(pos: $BlockPos_, level: $LevelReader): number;
        getWalkTargetValue(pos: $BlockPos_): number;
        notifyDangerousProjectile(arg0: $Projectile): void;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        startDrinkingPotion(): void;
        /**
         * Returns whether the entity got a `Path`.
         */
        getHasUsedSingleAttack(): boolean;
        /**
         * Set sprinting switch for Entity.
         */
        setHasUsedSingleAttack(sprinting: boolean): void;
        handler$fki001$irons_spells_js$init(arg0: $EntityType_<any>, arg1: $Level_, arg2: $CallbackInfo): void;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        setTeleportLocationBehindTarget(flag: number): boolean;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        setBurningDashDirectionData(): void;
        /**
         * Returns whether the entity got a `Path`.
         */
        isCasting(): boolean;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        cancelCast(): void;
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
        get panicking(): boolean;
        get magicData(): $MagicData;
        get pathFinding(): boolean;
        set syncedSpellData(value: $SyncedSpellData);
        set teleportLocationBehindTarget(value: number);
        get casting(): boolean;
    }
    export class $Display$RenderState extends $Record {
        shadowRadius(): $Display$FloatInterpolator;
        shadowStrength(): $Display$FloatInterpolator;
        transformation(): $Display$GenericInterpolator<$Transformation>;
        brightnessOverride(): number;
        billboardConstraints(): $Display$BillboardConstraints;
        glowColorOverride(): number;
        constructor(arg0: $Display$GenericInterpolator_<$Transformation>, arg1: $Display$BillboardConstraints_, arg2: number, arg3: $Display$FloatInterpolator_, arg4: $Display$FloatInterpolator_, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$RenderState}.
     */
    export type $Display$RenderState_ = { shadowStrength?: $Display$FloatInterpolator_, billboardConstraints?: $Display$BillboardConstraints_, glowColorOverride?: number, brightnessOverride?: number, shadowRadius?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>,  } | [shadowStrength?: $Display$FloatInterpolator_, billboardConstraints?: $Display$BillboardConstraints_, glowColorOverride?: number, brightnessOverride?: number, shadowRadius?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, ];
    export class $RelativeMovement extends $Enum<$RelativeMovement> {
        static values(): $RelativeMovement[];
        static valueOf(arg0: string): $RelativeMovement;
        static pack(movements: $Set_<$RelativeMovement_>): number;
        static unpack(packedMovements: number): $Set<$RelativeMovement>;
        static ROTATION: $Set<$RelativeMovement>;
        static ALL: $Set<$RelativeMovement>;
        static Y_ROT: $RelativeMovement;
        static X_ROT: $RelativeMovement;
        static X: $RelativeMovement;
        static Y: $RelativeMovement;
        static Z: $RelativeMovement;
    }
    /**
     * Values that may be interpreted as {@link $RelativeMovement}.
     */
    export type $RelativeMovement_ = "x" | "y" | "z" | "y_rot" | "x_rot";
    export class $Display$PosRotInterpolationTarget {
    }
    export class $OminousItemSpawner extends $Entity {
        static create(level: $Level_, item: $ItemStack_): $OminousItemSpawner;
        getItem(): $ItemStack;
        /**
         * Called to update the entity's position/logic.
         */
        addParticles(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND: number;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$OminousItemSpawner>, level: $Level_);
        get item(): $ItemStack;
    }
    export class $EntityType$Builder<T extends $Entity> {
        static of<T extends $Entity>(factory: $EntityType$EntityFactory_<T>, category: $MobCategory_): $EntityType$Builder<T>;
        attach(attachment: $EntityAttachment_, pos: $Vec3_): $EntityType$Builder<T>;
        attach(attachment: $EntityAttachment_, x: number, y: number, z: number): $EntityType$Builder<T>;
        build(key: string): $EntityType<T>;
        spawnDimensionsScale(eyeHeight: number): $EntityType$Builder<T>;
        canSpawnFarFromPlayer(): $EntityType$Builder<T>;
        clientTrackingRange(clientTrackingRange: number): $EntityType$Builder<T>;
        passengerAttachments(...attachPoints: number[]): $EntityType$Builder<T>;
        passengerAttachments(...attachPoints: $Vec3_[]): $EntityType$Builder<T>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<T>;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $EntityType$Builder<T>;
        immuneTo(...blocks: $Block_[]): $EntityType$Builder<T>;
        sized(width: number, height: number): $EntityType$Builder<T>;
        noSummon(): $EntityType$Builder<T>;
        fireImmune(): $EntityType$Builder<T>;
        eyeHeight(eyeHeight: number): $EntityType$Builder<T>;
        setTrackingRange(clientTrackingRange: number): $EntityType$Builder<T>;
        setUpdateInterval(clientTrackingRange: number): $EntityType$Builder<T>;
        ridingOffset(eyeHeight: number): $EntityType$Builder<T>;
        updateInterval(clientTrackingRange: number): $EntityType$Builder<T>;
        static createNothing<T extends $Entity>(category: $MobCategory_): $EntityType$Builder<T>;
        vehicleAttachment(attachPoint: $Vec3_): $EntityType$Builder<T>;
        nameTagOffset(eyeHeight: number): $EntityType$Builder<T>;
        noSave(): $EntityType$Builder<T>;
        set shouldReceiveVelocityUpdates(value: boolean);
        set trackingRange(value: number);
    }
    export class $Display$TextDisplay$CachedLine extends $Record {
        width(): number;
        contents(): $FormattedCharSequence;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedLine}.
     */
    export type $Display$TextDisplay$CachedLine_ = { width?: number, contents?: $FormattedCharSequence_,  } | [width?: number, contents?: $FormattedCharSequence_, ];
    export class $EquipmentTable extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        slotDropChances(): $Map<$EquipmentSlot, number>;
        static CODEC: $Codec<$EquipmentTable>;
        static DROP_CHANCES_CODEC: $Codec<$Map<$EquipmentSlot, number>>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>);
    }
    /**
     * Values that may be interpreted as {@link $EquipmentTable}.
     */
    export type $EquipmentTable_ = { slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>,  } | [slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>, ];
    export class $PortalProcessor {
        isSamePortal(portal: $Portal_): boolean;
        hasExpired(): boolean;
        processPortalTeleportation(level: $ServerLevel, entity: $Entity, canChangeDimensions: boolean): boolean;
        updateEntryPosition(entryPosition: $BlockPos_): void;
        setAsInsidePortalThisTick(insidePortalThisTick: boolean): void;
        getPortalDestination(level: $ServerLevel, entity: $Entity): $DimensionTransition;
        isInsidePortalThisTick(): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        getEntryPosition(): $BlockPos;
        getPortalTime(): number;
        constructor(portal: $Portal_, entryPosition: $BlockPos_);
        set asInsidePortalThisTick(value: boolean);
        get insidePortalThisTick(): boolean;
        get portalLocalTransition(): $Portal$Transition;
        get entryPosition(): $BlockPos;
        get portalTime(): number;
    }
    export class $MobSpawnType extends $Enum<$MobSpawnType> {
        static values(): $MobSpawnType[];
        static valueOf(arg0: string): $MobSpawnType;
        static ignoresLightRequirements(spawnType: $MobSpawnType_): boolean;
        static isSpawner(spawnType: $MobSpawnType_): boolean;
        static CONVERSION: $MobSpawnType;
        static STRUCTURE: $MobSpawnType;
        static BUCKET: $MobSpawnType;
        static DISPENSER: $MobSpawnType;
        static SPAWNER: $MobSpawnType;
        static EVENT: $MobSpawnType;
        static MOB_SUMMONED: $MobSpawnType;
        static NATURAL: $MobSpawnType;
        static SPAWN_EGG: $MobSpawnType;
        static PATROL: $MobSpawnType;
        static CHUNK_GENERATION: $MobSpawnType;
        static TRIAL_SPAWNER: $MobSpawnType;
        static BREEDING: $MobSpawnType;
        static REINFORCEMENT: $MobSpawnType;
        static COMMAND: $MobSpawnType;
        static TRIGGERED: $MobSpawnType;
        static JOCKEY: $MobSpawnType;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnType}.
     */
    export type $MobSpawnType_ = "natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol" | "trial_spawner";
    export class $ExperienceOrb extends $Entity implements $ExperienceOrbAccessor, $ExperienceOrbAccess, $IClumpedOrb {
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        getValue(): number;
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        getIcon(): number;
        handler$eaj002$clumps$addAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$eaj002$clumps$readAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        clumps$getClumpedMap(): $Map<any, any>;
        clumps$setClumpedMap(arg0: $Map_<any, any>): void;
        static award(level: $ServerLevel, pos: $Vec3_, amount: number): void;
        repairPlayerItems(player: $ServerPlayer, value: number): number;
        static tryMergeToExisting(level: $ServerLevel, pos: $Vec3_, amount: number): boolean;
        /**
         * Returns `true` if it's possible to attack this entity with an item.
         */
        clumps$resolve(): boolean;
        /**
         * Get a fragment of the maximum experience points value for the supplied value of experience points value.
         */
        static getExperienceValue(expValue: number): number;
        handler$eaj000$clumps$playerTouch(arg0: $Player, arg1: $CallbackInfo): void;
        handler$eaj000$clumps$merge(arg0: $ExperienceOrb, arg1: $CallbackInfo): void;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        localvar$eaj000$clumps$captureCurrentEntry(arg0: $Optional<any>): $Optional<any>;
        handler$eaj000$clumps$repairPlayerItems(arg0: $ServerPlayer, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$icm001$vinery$onPlayerTouch(player: $Player, ci: $CallbackInfo): void;
        bumblezone$setValue(id: number): void;
        clumps$setCount(id: number): void;
        clumps$setAge(id: number): void;
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        clumps$getAge(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        clumps$clumpedMap: $Map<any, any>;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        count: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        clumps$currentEntry: $Optional<any>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        value: number;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: number);
        constructor(entityType: $EntityType_<$ExperienceOrb>, level: $Level_);
        get icon(): number;
    }
    export class $Display$LinearIntInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearIntInterpolator}.
     */
    export type $Display$LinearIntInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EntityDimensions extends $Record {
        scale(width: number, height: number): $EntityDimensions;
        scale(factor: number): $EntityDimensions;
        fixed(): boolean;
        static fixed(width: number, height: number): $EntityDimensions;
        width(): number;
        height(): number;
        static scalable(width: number, height: number): $EntityDimensions;
        makeBoundingBox(pos: $Vec3_): $AABB;
        makeBoundingBox(x: number, arg1: number, y: number): $AABB;
        withEyeHeight(factor: number): $EntityDimensions;
        attachments(): $EntityAttachments;
        eyeHeight(): number;
        withAttachments(attachments: $EntityAttachments$Builder): $EntityDimensions;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $EntityAttachments, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityDimensions}.
     */
    export type $EntityDimensions_ = { fixed?: boolean, height?: number, eyeHeight?: number, width?: number, attachments?: $EntityAttachments,  } | [fixed?: boolean, height?: number, eyeHeight?: number, width?: number, attachments?: $EntityAttachments, ];
    export class $EntityAttachment extends $Enum<$EntityAttachment> {
        static values(): $EntityAttachment[];
        static valueOf(arg0: string): $EntityAttachment;
        createFallbackPoints(width: number, height: number): $List<$Vec3>;
        static VEHICLE: $EntityAttachment;
        static NAME_TAG: $EntityAttachment;
        static PASSENGER: $EntityAttachment;
        static WARDEN_CHEST: $EntityAttachment;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment}.
     */
    export type $EntityAttachment_ = "passenger" | "vehicle" | "name_tag" | "warden_chest";
    export class $TraceableEntity {
    }
    export interface $TraceableEntity {
        getOwner(): $Entity;
        get owner(): $Entity;
    }
    /**
     * Values that may be interpreted as {@link $TraceableEntity}.
     */
    export type $TraceableEntity_ = (() => $Entity);
    export class $HumanoidArm extends $Enum<$HumanoidArm> implements $OptionEnum, $StringRepresentable {
        static values(): $HumanoidArm[];
        static valueOf(arg0: string): $HumanoidArm;
        getKey(): string;
        getId(): number;
        getOpposite(): $HumanoidArm;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HumanoidArm>;
        static LEFT: $HumanoidArm;
        static BY_ID: $IntFunction<$HumanoidArm>;
        static RIGHT: $HumanoidArm;
        get key(): string;
        get id(): number;
        get opposite(): $HumanoidArm;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidArm}.
     */
    export type $HumanoidArm_ = "left" | "right";
    export class $EntityType$EntityFactory<T extends $Entity> {
    }
    export interface $EntityType$EntityFactory<T extends $Entity> {
        create(entityType: $EntityType_<T>, level: $Level_): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityType$EntityFactory}.
     */
    export type $EntityType$EntityFactory_<T> = ((arg0: $EntityType<T>, arg1: $Level) => T);
    export class $MoverType extends $Enum<$MoverType> {
        static values(): $MoverType[];
        static valueOf(arg0: string): $MoverType;
        static PLAYER: $MoverType;
        static PISTON: $MoverType;
        static SHULKER_BOX: $MoverType;
        static SELF: $MoverType;
        static SHULKER: $MoverType;
    }
    /**
     * Values that may be interpreted as {@link $MoverType}.
     */
    export type $MoverType_ = "self" | "player" | "piston" | "shulker_box" | "shulker";
    export class $Entity$RemovalReason extends $Enum<$Entity$RemovalReason> {
        static values(): $Entity$RemovalReason[];
        static valueOf(arg0: string): $Entity$RemovalReason;
        shouldDestroy(): boolean;
        shouldSave(): boolean;
        static UNLOADED_TO_CHUNK: $Entity$RemovalReason;
        static UNLOADED_WITH_PLAYER: $Entity$RemovalReason;
        static DISCARDED: $Entity$RemovalReason;
        static CHANGED_DIMENSION: $Entity$RemovalReason;
        static KILLED: $Entity$RemovalReason;
    }
    /**
     * Values that may be interpreted as {@link $Entity$RemovalReason}.
     */
    export type $Entity$RemovalReason_ = "killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension";
    export class $Saddleable {
    }
    export interface $Saddleable {
        getSaddleSoundEvent(): $SoundEvent;
        isSaddled(): boolean;
        isSaddleable(): boolean;
        equipSaddle(stack: $ItemStack_, soundSource: $SoundSource_ | null): void;
        get saddleSoundEvent(): $SoundEvent;
        get saddled(): boolean;
        get saddleable(): boolean;
    }
    export class $Targeting {
    }
    export interface $Targeting {
        getTarget(): $LivingEntity;
        get target(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Targeting}.
     */
    export type $Targeting_ = (() => $LivingEntity);
    export class $Pose extends $Enum<$Pose> {
        static values(): $Pose[];
        static valueOf(arg0: string): $Pose;
        id(): number;
        static SLEEPING: $Pose;
        static SNIFFING: $Pose;
        static EMERGING: $Pose;
        static INHALING: $Pose;
        static FALL_FLYING: $Pose;
        static LONG_JUMPING: $Pose;
        static BY_ID: $IntFunction<$Pose>;
        static DYING: $Pose;
        static CROAKING: $Pose;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Pose>;
        static STANDING: $Pose;
        static SWIMMING: $Pose;
        static SITTING: $Pose;
        static SHOOTING: $Pose;
        static SLIDING: $Pose;
        static USING_TONGUE: $Pose;
        static CROUCHING: $Pose;
        static ROARING: $Pose;
        static DIGGING: $Pose;
        static SPIN_ATTACK: $Pose;
    }
    /**
     * Values that may be interpreted as {@link $Pose}.
     */
    export type $Pose_ = "standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "sliding" | "shooting" | "inhaling";
    export class $OwnableEntity {
    }
    export interface $OwnableEntity {
        getOwner(): $LivingEntity;
        level(): $EntityGetter;
        getOwnerUUID(): $UUID;
        get owner(): $LivingEntity;
        get ownerUUID(): $UUID;
    }
    export class $EquipmentSlotGroup extends $Enum<$EquipmentSlotGroup> implements $StringRepresentable {
        static values(): $EquipmentSlotGroup[];
        test(slot: $EquipmentSlot_): boolean;
        static valueOf(arg0: string): $EquipmentSlotGroup;
        getSerializedName(): string;
        static bySlot(slot: $EquipmentSlot_): $EquipmentSlotGroup;
        getRemappedEnumConstantName(): string;
        static HEAD: $EquipmentSlotGroup;
        static CODEC: $Codec<$EquipmentSlotGroup>;
        static OFFHAND: $EquipmentSlotGroup;
        static ARMOR: $EquipmentSlotGroup;
        static MAINHAND: $EquipmentSlotGroup;
        static LEGS: $EquipmentSlotGroup;
        static BY_ID: $IntFunction<$EquipmentSlotGroup>;
        static ANY: $EquipmentSlotGroup;
        static HAND: $EquipmentSlotGroup;
        static FEET: $EquipmentSlotGroup;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EquipmentSlotGroup>;
        static CHEST: $EquipmentSlotGroup;
        static BODY: $EquipmentSlotGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotGroup}.
     */
    export type $EquipmentSlotGroup_ = "any" | "mainhand" | "offhand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body";
    export class $Display extends $Entity implements $DisplayAccessor {
        setBillboardConstraints(billboardConstraints: $Display$BillboardConstraints_): void;
        setTransformation(transformation: $Transformation): void;
        renderState(): $Display$RenderState;
        calculateInterpolationProgress(partialTick: number): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getPackedBrightnessOverride(): number;
        invokeSetWidth(height: number): void;
        invokeSetHeight(height: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        ars_Nouveau$motions: $Stack<any>;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        set billboardConstraints(value: $Display$BillboardConstraints_);
        set transformation(value: $Transformation);
        get packedBrightnessOverride(): number;
    }
    export class $Crackiness$Level extends $Enum<$Crackiness$Level> {
        static values(): $Crackiness$Level[];
        static valueOf(arg0: string): $Crackiness$Level;
        static HIGH: $Crackiness$Level;
        static MEDIUM: $Crackiness$Level;
        static LOW: $Crackiness$Level;
        static NONE: $Crackiness$Level;
    }
    /**
     * Values that may be interpreted as {@link $Crackiness$Level}.
     */
    export type $Crackiness$Level_ = "none" | "low" | "medium" | "high";
    export class $Mob extends $LivingEntity implements $EquipmentUser, $Leashable, $Targeting, $MobAccessor$1, $MobAccessor$2, $MobAccess, $MobAccessor$6, $MobAccessorMixin, $MobAccessor$4, $MobEntityAccessor, $MobAccessor$5, $MobInvoker, $MobAccessor$3, $MobAccessor {
        /**
         * Gets the active target the Goal system uses for tracking
         */
        getTarget(): $LivingEntity;
        /**
         * Sets the active target the Goal system uses for tracking
         */
        setTarget(target: $LivingEntity | null): void;
        isBodyArmorItem(stack: $ItemStack_): boolean;
        setBodyArmorItem(stack: $ItemStack_): void;
        /**
         * Returns whether the entity is in a server world
         */
        isWearingBodyArmor(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onPathfindingDone(): void;
        getLookControl(): $LookControl;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onPathfindingStart(): void;
        getMoveControl(): $MoveControl;
        getJumpControl(): $JumpControl;
        static checkMobSpawnRules(type: $EntityType_<$Mob>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxHeadXRot(): number;
        /**
         * Returns whether the entity is in a server world
         */
        canPickUpLoot(): boolean;
        setAggressive(aggressive: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopInPlace(): void;
        setCanPickUpLoot(aggressive: boolean): void;
        getSpawnType(): $MobSpawnType;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxHeadYRot(): number;
        /**
         * Returns whether the entity is in a server world
         */
        canBeLeashed(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isAggressive(): boolean;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeFreeWill(): void;
        canHoldItem(stack: $ItemStack_): boolean;
        checkSpawnRules(level: $LevelAccessor, reason: $MobSpawnType_): boolean;
        getRestrictCenter(): $BlockPos;
        setDropChance(slot: $EquipmentSlot_, chance: number): void;
        getLeashData(): $Leashable$LeashData;
        setSpawnCancelled(aggressive: boolean): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRestrictRadius(): number;
        setLeftHanded(aggressive: boolean): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getHeadRotSpeed(): number;
        removeWhenFarAway(distanceToClosestPlayer: number): boolean;
        setGuaranteedDrop(slot: $EquipmentSlot_): void;
        wantsToPickUp(stack: $ItemStack_): boolean;
        getBodyArmorItem(): $ItemStack;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearRestriction(): void;
        removeAllGoals(filter: $Predicate_<$Goal>): void;
        /**
         * Returns whether the entity is in a server world
         */
        hasRestriction(): boolean;
        static getEquipmentForSlot(slot: $EquipmentSlot_, chance: number): $Item;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        leashTooFarBehaviour(): void;
        isMaxGroupSizeReached(size: number): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isWithinRestriction(): boolean;
        isWithinRestriction(pos: $BlockPos_): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxSpawnClusterSize(): number;
        dropPreservedEquipment(predicate: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        dropPreservedEquipment(): void;
        /**
         * @deprecated
         */
        finalizeSpawn(level: $ServerLevelAccessor, difficulty: $DifficultyInstance, spawnType: $MobSpawnType_, spawnGroupData: $SpawnGroupData | null): $SpawnGroupData;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        spawnAnim(): void;
        /**
         * Returns whether the entity is in a server world
         */
        isNoAi(): boolean;
        setNoAi(aggressive: boolean): void;
        getSensing(): $Sensing;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        ate(): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setXxa(speed: number): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setZza(speed: number): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setYya(speed: number): void;
        restrictTo(pos: $BlockPos_, distance: number): void;
        handler$ejb000$rarcompat$getControllingPassenger(arg0: $CallbackInfoReturnable<any>): void;
        getNavigation(): $PathNavigation;
        handler$hjm000$spectrum$slowDownAIticks(arg0: $CallbackInfo): void;
        redirect$jhi000$moonlight$fixSpawnAnimX(arg0: $Mob, arg1: number): number;
        /**
         * Changes the X and Y rotation so that this entity is facing the given entity.
         */
        lookAt(entity: $Entity, maxYRotIncrease: number, maxXRotIncrease: number): void;
        convertTo<T extends $Mob>(entityType: $EntityType_<T>, transferInventory: boolean): T;
        /**
         * Removes the leash from this entity
         */
        dropLeash(broadcastPacket: boolean, dropLeash: boolean): void;
        /**
         * Returns whether the entity is in a server world
         */
        requiresCustomPersistence(): boolean;
        canFireProjectileWeapon(projectileWeapon: $ProjectileWeaponItem): boolean;
        getPathfindingMalus(pathType: $PathType_): number;
        equipItemIfPossible(stack: $ItemStack_): $ItemStack;
        getEquipmentDropChance(slot: $EquipmentSlot_): number;
        canReplaceEqualItem(candidate: $ItemStack_, existing: $ItemStack_): boolean;
        static createMobAttributes(): $AttributeSupplier$Builder;
        isWithinMeleeAttackRange(entity: $LivingEntity): boolean;
        setPathfindingMalus(pathType: $PathType_, malus: number): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getAmbientSoundInterval(): number;
        /**
         * Returns whether the entity is in a server world
         */
        isPersistenceRequired(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        setPersistenceRequired(): void;
        checkSpawnObstruction(level: $LevelReader): boolean;
        modifyExpressionValue$klj000$create$mobRidingContraptionsMaintainTheirAttackBox(entity: $Entity): $Entity;
        /**
         * Returns whether the entity is in a server world
         */
        isLeftHanded(): boolean;
        setBaby(aggressive: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playAmbientSound(): void;
        /**
         * Returns whether the entity is in a server world
         */
        isSpawnCancelled(): boolean;
        equip(equipmentTable: $EquipmentTable_): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        handler$foo000$apotheosis$apoth_dropBonusLootTables(arg0: $DamageSource_, arg1: boolean, arg2: $CallbackInfo): void;
        resolveSlot(stack: $ItemStack_, excludedSlots: $List_<$EquipmentSlot_>): $EquipmentSlot;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, seed: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_, params: $LootParams): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        /**
         * Returns whether the entity is in a server world
         */
        mayBeLeashed(): boolean;
        closeRangeLeashBehaviour(passenger: $Entity): void;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        /**
         * Sets the amount of arrows stuck in the entity. Used for rendering those.
         */
        setDelayedLeashHolderId(count: number): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isLeashed(): boolean;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        getLeashHolder(): $Entity;
        /**
         * Returns whether the entity is in a server world
         */
        canHaveALeashAttachedToIt(): boolean;
        callMobInteract(player: $Player, hand: $InteractionHand_): $InteractionResult;
        getGoalSelector(): $GoalSelector;
        getHandDropChances(): number[];
        getArmorDropChances(): number[];
        callGetAmbientSound(): $SoundEvent;
        callGetEquipmentDropChance(slot: $EquipmentSlot_): number;
        invokeGetEquipmentDropChance(slot: $EquipmentSlot_): number;
        bumblezone$getTargetSelector(): $GoalSelector;
        farmAndCharm$getGoalSelector(): $GoalSelector;
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
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
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
        get wearingBodyArmor(): boolean;
        get jumpControl(): $JumpControl;
        get maxHeadXRot(): number;
        get spawnType(): $MobSpawnType;
        get maxHeadYRot(): number;
        get restrictCenter(): $BlockPos;
        get restrictRadius(): number;
        get headRotSpeed(): number;
        set guaranteedDrop(value: $EquipmentSlot_);
        get maxSpawnClusterSize(): number;
        get sensing(): $Sensing;
        get navigation(): $PathNavigation;
        get ambientSoundInterval(): number;
        set baby(value: boolean);
        set delayedLeashHolderId(value: number);
        get leashed(): boolean;
        get leashHolder(): $Entity;
    }
    export class $Leashable$LeashData {
        setLeashHolder(leashHolder: $Entity): void;
        leashHolder: $Entity;
        delayedLeashInfo: $Either<$UUID, $BlockPos>;
    }
    export class $Entity$MoveFunction {
    }
    export interface $Entity$MoveFunction {
        accept(entity: $Entity, x: number, arg2: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MoveFunction}.
     */
    export type $Entity$MoveFunction_ = ((arg0: $Entity, arg1: number, arg2: number, arg3: number) => void);
    export class $EntityAttachments {
        get(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        scale(xScale: number, yScale: number, zScale: number): $EntityAttachments;
        static builder(): $EntityAttachments$Builder;
        static createDefault(width: number, height: number): $EntityAttachments;
        getClamped(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        getNullable(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
    }
    export class $EntitySelector {
        static notRiding(entity: $Entity): $Predicate<$Entity>;
        static pushableBy(entity: $Entity): $Predicate<$Entity>;
        static withinDistance(x: number, arg1: number, y: number, arg3: number): $Predicate<$Entity>;
        static ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static NO_SPECTATORS: $Predicate<$Entity>;
        static ENTITY_NOT_BEING_RIDDEN: $Predicate<$Entity>;
        static LIVING_ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static CAN_BE_COLLIDED_WITH: $Predicate<$Entity>;
        static NO_CREATIVE_OR_SPECTATOR: $Predicate<$Entity>;
        static CONTAINER_ENTITY_SELECTOR: $Predicate<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelector}.
     */
    export type $EntitySelector_ = string;
    export class $AgeableMob extends $PathfinderMob implements $AgeableMobAccessor {
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $AgeableMob;
        static bumblezone$getDATA_BABY_ID$the_bumblezone_$md$f87c94$0(): $EntityDataAccessor<any>;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getAge(): number;
        ageUp(amount: number, forced: boolean): void;
        ageUp(amount: number): void;
        /**
         * If Animal, checks if the age timer is negative
         */
        canBreed(): boolean;
        setAge(amount: number): void;
        static getSpeedUpSecondsWhenFeeding(ticksUntilAdult: number): number;
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
    }
    export class $ItemBasedSteering {
        boost(random: $RandomSource): boolean;
        readAdditionalSaveData(nbt: $CompoundTag_): void;
        addAdditionalSaveData(nbt: $CompoundTag_): void;
        onSynced(): void;
        tickBoost(): void;
        setSaddle(saddled: boolean): void;
        hasSaddle(): boolean;
        boostFactor(): number;
        constructor(entityData: $SynchedEntityData, boostTimeAccessor: $EntityDataAccessor_<number>, hasSaddleAccessor: $EntityDataAccessor_<boolean>);
        set saddle(value: boolean);
    }
    export class $NeutralMob {
        static TAG_ANGRY_AT: string;
        static TAG_ANGER_TIME: string;
    }
    export interface $NeutralMob {
        /**
         * Gets the active target the Task system uses for tracking
         */
        getTarget(): $LivingEntity;
        /**
         * Hint to AI tasks that we were attacked by the passed EntityLivingBase and should retaliate. Is not guaranteed to change our actual active target (for example if we are currently busy attacking someone else)
         */
        setTarget(livingEntity: $LivingEntity | null): void;
        stopBeingAngry(): void;
        updatePersistentAnger(serverLevel: $ServerLevel, updateAnger: boolean): void;
        addPersistentAngerSaveData(nbt: $CompoundTag_): void;
        getPersistentAngerTarget(): $UUID;
        isAngryAtAllPlayers(level: $Level_): boolean;
        setPersistentAngerTarget(persistentAngerTarget: $UUID_ | null): void;
        startPersistentAngerTimer(): void;
        /**
         * Hint to AI tasks that we were attacked by the passed EntityLivingBase and should retaliate. Is not guaranteed to change our actual active target (for example if we are currently busy attacking someone else)
         */
        setLastHurtByMob(livingEntity: $LivingEntity | null): void;
        /**
         * Gets the active target the Task system uses for tracking
         */
        getLastHurtByMob(): $LivingEntity;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        canAttack(entity: $LivingEntity): boolean;
        getRemainingPersistentAngerTime(): number;
        readPersistentAngerSaveData(level: $Level_, tag: $CompoundTag_): void;
        setRemainingPersistentAngerTime(remainingPersistentAngerTime: number): void;
        playerDied(player: $Player): void;
        setLastHurtByPlayer(player: $Player | null): void;
        isAngry(): boolean;
        isAngryAt(entity: $LivingEntity): boolean;
        set lastHurtByPlayer(value: $Player | null);
        get angry(): boolean;
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        getGroupSize(): number;
        getBabySpawnChance(): number;
        isShouldSpawnBaby(): boolean;
        increaseGroupSizeByOne(): void;
        constructor(babySpawnChance: number);
        constructor(shouldSpawnBaby: boolean);
        get groupSize(): number;
        get babySpawnChance(): number;
        get shouldSpawnBaby(): boolean;
    }
    export class $ReputationEventHandler {
    }
    export interface $ReputationEventHandler {
        onReputationEventFrom(type: $ReputationEventType, target: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $ReputationEventHandler}.
     */
    export type $ReputationEventHandler_ = ((arg0: $ReputationEventType, arg1: $Entity) => void);
    export class $TamableAnimal$TamableAnimalPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
    }
    export class $Display$ItemDisplay$ItemRenderState extends $Record {
        itemStack(): $ItemStack;
        itemTransform(): $ItemDisplayContext;
        constructor(arg0: $ItemStack_, arg1: $ItemDisplayContext_);
    }
    /**
     * Values that may be interpreted as {@link $Display$ItemDisplay$ItemRenderState}.
     */
    export type $Display$ItemDisplay$ItemRenderState_ = { itemTransform?: $ItemDisplayContext_, itemStack?: $ItemStack_,  } | [itemTransform?: $ItemDisplayContext_, itemStack?: $ItemStack_, ];
}
