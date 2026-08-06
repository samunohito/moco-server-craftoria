import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $VariantHolder, $PortalProcessor, $Pose_, $PlayerRideableJumping, $SlotAccess, $Entity, $Leashable$LeashData, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $HasCustomInventoryScreen, $Leashable } from "@package/net/minecraft/world/entity";
import { $FluidType_ } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $MinecartFurnaceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set_, $Stack } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $Function_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBoatExtension, $IAbstractMinecartExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IMinecartCollisionHandler } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $LevelReader, $CollisionGetter, $BaseCommandBlock, $Level, $BlockGetter, $BaseSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Hopper } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/vehicle" {
    export class $Boat extends $VehicleEntity implements $Leashable, $VariantHolder<$Boat$Type>, $IBoatExtension, $PlayerRideableJumping {
        setInput(inputLeft: boolean, inputRight: boolean, inputUp: boolean, inputDown: boolean): void;
        setVariant(variant: $Boat$Type_): void;
        onPlayerJump(bubbleTime: number): void;
        hasEnoughSpaceFor(passenger: $Entity): boolean;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        getLeashData(): $Leashable$LeashData;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canJump(): boolean;
        /**
         * Determines whether the boat is in water, gliding on land, or in air
         */
        getStatus(): $Boat$Status;
        wrapOperation$hof000$fruitsdelight$getfriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Operation_<any>): number;
        handleStartJump(bubbleTime: number): void;
        /**
         * Update the boat's speed, based on momentum.
         */
        handleStopJump(): void;
        getBubbleAngle(partialTicks: number): number;
        /**
         * Update the boat's speed, based on momentum.
         */
        controlBoat(): void;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getGroundFriction(): number;
        static canVehicleCollide(vehicle: $Entity, entity: $Entity): boolean;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getWaterLevelAbove(): number;
        getPaddleState(side: number): boolean;
        setPaddleState(left: boolean, right: boolean): void;
        getRowingTime(side: number, limbSwing: number): number;
        getDropItem(): $Item;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canBeLeashed(): boolean;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        mayBeLeashed(): boolean;
        /**
         * Applies this boat's yaw to the given entity. Used to update the orientation of its passenger.
         */
        closeRangeLeashBehaviour(entityToUpdate: $Entity): void;
        /**
         * Update the boat's speed, based on momentum.
         */
        leashTooFarBehaviour(): void;
        setDelayedLeashHolderId(bubbleTime: number): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isLeashed(): boolean;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        getLeashHolder(): $Entity;
        dropLeash(left: boolean, right: boolean): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canHaveALeashAttachedToIt(): boolean;
        /**
         * Returns whether the entity is within the fluid type of the state.
         */
        canBoatInFluid(state: $FluidState): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canBoatInFluid(type: $FluidType_): boolean;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getJumpCooldown(): number;
        getVariant(): $Boat$Type;
        serializeNBT(arg0: $HolderLookup$Provider): $Boat$Type;
        xRot: number;
        hasImpulse: boolean;
        static PADDLE_RIGHT: number;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        lastYd: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static BUBBLE_TIME: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        static PADDLE_SOUND_TIME: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PADDLE_LEFT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        oldStatus: $Boat$Status;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        deltaRotation: number;
        status: $Boat$Status;
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
        landFriction: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        invFriction: number;
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
        waterLevel: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$Boat>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get groundFriction(): number;
        get waterLevelAbove(): number;
        get dropItem(): $Item;
        set delayedLeashHolderId(value: number);
        get leashed(): boolean;
        get leashHolder(): $Entity;
        get jumpCooldown(): number;
    }
    export class $Boat$Type extends $Enum<$Boat$Type> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $Boat$Type[];
        static valueOf(name: string): $Boat$Type;
        static byName(name: string): $Boat$Type;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        isRaft(): boolean;
        getPlanks(): $Block;
        getSticks(): $Item;
        /**
         * Get a boat type by its enum ordinal
         */
        static byId(id: number): $Boat$Type;
        getRemappedEnumConstantName(): string;
        static TWILIGHTFOREST_TRANSFORMATION: $Boat$Type;
        static MANGROVE: $Boat$Type;
        static TWILIGHTFOREST_CANOPY: $Boat$Type;
        static BAMBOO: $Boat$Type;
        static CODEC: $StringRepresentable$EnumCodec<$Boat$Type>;
        static JUNGLE: $Boat$Type;
        static ACACIA: $Boat$Type;
        static DARK_OAK: $Boat$Type;
        static TWILIGHTFOREST_DARK: $Boat$Type;
        static SPRUCE: $Boat$Type;
        static CHERRY: $Boat$Type;
        static BIRCH: $Boat$Type;
        static TWILIGHTFOREST_TWILIGHT_OAK: $Boat$Type;
        static TWILIGHTFOREST_SORTING: $Boat$Type;
        static OAK: $Boat$Type;
        static TWILIGHTFOREST_MINING: $Boat$Type;
        static TWILIGHTFOREST_MANGROVE: $Boat$Type;
        static TWILIGHTFOREST_TIME: $Boat$Type;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get raft(): boolean;
        get planks(): $Block;
        get sticks(): $Item;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Boat$Type}.
     */
    export type $Boat$Type_ = "oak" | "spruce" | "birch" | "jungle" | "acacia" | "cherry" | "dark_oak" | "mangrove" | "bamboo" | "twilightforest:canopy" | "twilightforest:dark" | "twilightforest:mangrove" | "twilightforest:mining" | "twilightforest:sorting" | "twilightforest:time" | "twilightforest:transformation" | "twilightforest:twilight_oak";
    export class $ContainerEntity {
    }
    export interface $ContainerEntity extends $Container, $MenuProvider {
        position(): $Vec3;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isEmpty(): boolean;
        level(): $Level;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(lootTableSeed: number): void;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isRemoved(): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        getChestVehicleItem(slot: number): $ItemStack;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isChestVehicleEmpty(): boolean;
        setChestVehicleItem(slot: number, stack: $ItemStack_): void;
        removeChestVehicleItem(slot: number, amount: number): $ItemStack;
        getChestVehicleSlot(index: number): $SlotAccess;
        isChestVehicleStillValid(player: $Player): boolean;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        removeChestVehicleItemNoUpdate(slot: number): $ItemStack;
        unpackChestVehicleLootTable(player: $Player | null): void;
        getBoundingBox(): $AABB;
        get empty(): boolean;
        get removed(): boolean;
        get itemStacks(): $NonNullList<$ItemStack>;
        get chestVehicleEmpty(): boolean;
        get boundingBox(): $AABB;
    }
    export class $MinecartHopper extends $AbstractMinecartContainer implements $Hopper {
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        isEnabled(): boolean;
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        suckInItems(): boolean;
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        isGridAligned(): boolean;
        /**
         * Set whether this hopper minecart is being blocked by an activator rail.
         */
        setEnabled(enabled: boolean): void;
        createMenu(id: number, playerInventory: $Inventory): $AbstractContainerMenu;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelX(): number;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelZ(): number;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelY(): number;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getSuckAabb(): $AABB;
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
        constructor(entityType: $EntityType_<$MinecartHopper>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get gridAligned(): boolean;
        get levelX(): number;
        get levelZ(): number;
        get levelY(): number;
        get suckAabb(): $AABB;
    }
    export class $MinecartChest extends $AbstractMinecartContainer {
        createMenu(id: number, playerInventory: $Inventory): $AbstractContainerMenu;
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
        constructor(entityType: $EntityType_<$MinecartChest>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $AbstractMinecart extends $VehicleEntity implements $IAbstractMinecartExtension {
        getPos(x: number, arg1: number, y: number): $Vec3;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getCurrentCartSpeedCapOnRail(): number;
        setCurrentCartSpeedCapOnRail(yaw: number): void;
        getDefaultDisplayBlockState(): $BlockState;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxSpeedAirLateral(): number;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxSpeedAirVertical(): number;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getDefaultDisplayOffset(): number;
        setMaxSpeedAirLateral(yaw: number): void;
        setMaxSpeedAirVertical(yaw: number): void;
        getCollisionHandler(): $IMinecartCollisionHandler;
        static registerCollisionHandler(arg0: $IMinecartCollisionHandler | null): void;
        setDisplayBlockState(displayState: $BlockState_): void;
        getDisplayBlockState(): $BlockState;
        /**
         * Gets the maximum speed for a minecart
         */
        getMaxSpeedWithRail(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canUseRail(): boolean;
        /**
         * Gets the maximum speed for a minecart
         */
        getDragAir(): number;
        getPosOffs(x: number, arg1: number, y: number, arg3: number): $Vec3;
        setDragAir(renderDistWeight: number): void;
        static createMinecart(level: $ServerLevel, x: number, arg2: number, y: number, arg4: $AbstractMinecart$Type_, z: $ItemStack_, arg6: $Player | null): $AbstractMinecart;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getDisplayOffset(): number;
        setDisplayOffset(displayOffset: number): void;
        moveMinecartOnRail(pos: $BlockPos_): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        hasCustomDisplay(): boolean;
        /**
         * Called every tick the minecart is on an activator rail.
         */
        activateMinecart(x: number, y: number, z: number, powered: boolean): void;
        setCanUseRail(customDisplay: boolean): void;
        setCustomDisplay(customDisplay: boolean): void;
        getMinecartType(): $AbstractMinecart$Type;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxCartSpeedOnRail(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        shouldDoRailFunctions(): boolean;
        /**
         * Internal, returns the current spot to look for the attached rail.
         */
        getCurrentRailPosition(): $BlockPos;
        /**
         * Gets the maximum speed for a minecart
         */
        getSlopeAdjustment(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canBeRidden(): boolean;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isPoweredCart(): boolean;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getComparatorLevel(): number;
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
        get defaultDisplayBlockState(): $BlockState;
        get defaultDisplayOffset(): number;
        get collisionHandler(): $IMinecartCollisionHandler;
        get maxSpeedWithRail(): number;
        set customDisplay(value: boolean);
        get minecartType(): $AbstractMinecart$Type;
        get maxCartSpeedOnRail(): number;
        get currentRailPosition(): $BlockPos;
        get slopeAdjustment(): number;
        get poweredCart(): boolean;
        get comparatorLevel(): number;
    }
    export class $DismountHelper {
        static offsetsForDirection(direction: $Direction_): number[][];
        static findSafeDismountLocation(entityType: $EntityType_<never>, level: $CollisionGetter, pos: $BlockPos_, onlySafePositions: boolean): $Vec3;
        static canDismountTo(level: $CollisionGetter, offset: $Vec3_, passenger: $LivingEntity, pose: $Pose_): boolean;
        static canDismountTo(level: $CollisionGetter, passenger: $LivingEntity, boundingBox: $AABB_): boolean;
        static findCeilingFrom(pos: $BlockPos_, ceiling: number, shapeForPos: $Function_<$BlockPos, $VoxelShape>): number;
        static nonClimbableShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        static isBlockFloorValid(distance: number): boolean;
        constructor();
    }
    export class $AbstractMinecart$Type extends $Enum<$AbstractMinecart$Type> {
        static values(): $AbstractMinecart$Type[];
        static valueOf(arg0: string): $AbstractMinecart$Type;
        static CHEST: $AbstractMinecart$Type;
        static FURNACE: $AbstractMinecart$Type;
        static RIDEABLE: $AbstractMinecart$Type;
        static COMMAND_BLOCK: $AbstractMinecart$Type;
        static TNT: $AbstractMinecart$Type;
        static SPAWNER: $AbstractMinecart$Type;
        static HOPPER: $AbstractMinecart$Type;
    }
    /**
     * Values that may be interpreted as {@link $AbstractMinecart$Type}.
     */
    export type $AbstractMinecart$Type_ = "rideable" | "chest" | "furnace" | "tnt" | "spawner" | "hopper" | "command_block";
    export class $Boat$Status extends $Enum<$Boat$Status> {
        static values(): $Boat$Status[];
        static valueOf(arg0: string): $Boat$Status;
        static UNDER_WATER: $Boat$Status;
        static UNDER_FLOWING_WATER: $Boat$Status;
        static IN_AIR: $Boat$Status;
        static IN_WATER: $Boat$Status;
        static ON_LAND: $Boat$Status;
    }
    /**
     * Values that may be interpreted as {@link $Boat$Status}.
     */
    export type $Boat$Status_ = "in_water" | "under_water" | "under_flowing_water" | "on_land" | "in_air";
    export class $ChestBoat extends $Boat implements $HasCustomInventoryScreen, $ContainerEntity {
        destroy(source: $DamageSource_): void;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(lootTableSeed: number): void;
        unpackLootTable(player: $Player | null): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        stopOpen(player: $Player): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        openCustomInventoryScreen(player: $Player): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        /**
         * Returns the stack in the given slot.
         */
        getChestVehicleItem(slot: number): $ItemStack;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isChestVehicleEmpty(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setChestVehicleItem(slot: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeChestVehicleItem(slot: number, amount: number): $ItemStack;
        getChestVehicleSlot(slot: number): $SlotAccess;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        isChestVehicleStillValid(player: $Player): boolean;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        /**
         * Returns the stack in the given slot.
         */
        removeChestVehicleItemNoUpdate(slot: number): $ItemStack;
        unpackChestVehicleLootTable(player: $Player | null): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $Boat$Type;
        xRot: number;
        hasImpulse: boolean;
        static PADDLE_RIGHT: number;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        lastYd: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static BUBBLE_TIME: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        static PADDLE_SOUND_TIME: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PADDLE_LEFT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        oldStatus: $Boat$Status;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        deltaRotation: number;
        status: $Boat$Status;
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
        landFriction: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        invFriction: number;
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
        waterLevel: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$Boat>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get itemStacks(): $NonNullList<$ItemStack>;
        get containerSize(): number;
        get chestVehicleEmpty(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $Minecart extends $AbstractMinecart {
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
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $VehicleEntity extends $Entity {
        destroy(dropItem: $Item_): void;
        getDamage(): number;
        setDamage(damage: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getHurtDir(): number;
        setHurtDir(hurtDir: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getHurtTime(): number;
        setHurtTime(hurtDir: number): void;
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
    }
    export class $MinecartSpawner extends $AbstractMinecart {
        getSpawner(): $BaseSpawner;
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
        constructor(entityType: $EntityType_<$MinecartSpawner>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get spawner(): $BaseSpawner;
    }
    export class $MinecartCommandBlock extends $AbstractMinecart {
        getCommandBlock(): $BaseCommandBlock;
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
        constructor(entityType: $EntityType_<$MinecartCommandBlock>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get commandBlock(): $BaseCommandBlock;
    }
    export class $MinecartCommandBlock$MinecartCommandBase extends $BaseCommandBlock {
        getMinecart(): $MinecartCommandBlock;
        constructor(arg0: $MinecartCommandBlock);
        get minecart(): $MinecartCommandBlock;
    }
    export class $MinecartFurnace extends $AbstractMinecart implements $MinecartFurnaceAccessor {
        handler$kdh000$sounds$$furnace_minecart_fuel_sound_effect(arg0: $Player, arg1: $InteractionHand_, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        create$getFuel(): number;
        create$setFuel(id: number): void;
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
        zPush: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        xPush: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$MinecartFurnace>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $MinecartTNT extends $AbstractMinecart {
        destroy(source: $DamageSource_): void;
        /**
         * Ignites this TNT cart.
         */
        primeFuse(): void;
        /**
         * Returns `true` if the TNT minecart is ignited.
         */
        isPrimed(): boolean;
        /**
         * Gets the remaining fuse time in ticks.
         */
        getFuse(): number;
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
        constructor(entityType: $EntityType_<$MinecartTNT>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get primed(): boolean;
        get fuse(): number;
    }
    export class $AbstractMinecartContainer extends $AbstractMinecart implements $ContainerEntity {
        destroy(source: $DamageSource_): void;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(lootTableSeed: number): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        /**
         * Returns the stack in the given slot.
         */
        getChestVehicleItem(index: number): $ItemStack;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isChestVehicleEmpty(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setChestVehicleItem(index: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeChestVehicleItem(index: number, count: number): $ItemStack;
        getChestVehicleSlot(slot: number): $SlotAccess;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        isChestVehicleStillValid(player: $Player): boolean;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        /**
         * Returns the stack in the given slot.
         */
        removeChestVehicleItemNoUpdate(index: number): $ItemStack;
        unpackChestVehicleLootTable(player: $Player | null): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
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
        get itemStacks(): $NonNullList<$ItemStack>;
        get chestVehicleEmpty(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
}
