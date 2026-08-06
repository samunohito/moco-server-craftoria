import { $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemEntityAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $EntityDynamicLightSource } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemEntityAccessor as $ItemEntityAccessor$1 } from "@package/de/dafuqs/spectrum/mixin/accessors";
import { $EntityDimensions, $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Entity, $TraceableEntity } from "@package/net/minecraft/world/entity";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FallingBlockEntityAccessor as $FallingBlockEntityAccessor$1 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $Stack, $UUID_ } from "@package/java/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FallingBlockEntityAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks";
import { $ItemEntityAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/entities";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ItemEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessorMixinFallingBlockEntity } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $ItemEntityExtensions } from "@package/artifacts/extensions/mobeffect/magnetism";

declare module "@package/net/minecraft/world/entity/item" {
    export class $ItemEntity extends $Entity implements $TraceableEntity, $ItemEntityAccessor, $ItemEntityExtensions, $ItemEntityAccess, $ItemEntityAccessor$1, $ItemEntityKJS {
        static merge(destinationStack: $ItemStack_, originStack: $ItemStack_, amount: number): $ItemStack;
        copy(): $ItemEntity;
        getTarget(): $UUID;
        setTarget(target: $UUID_ | null): void;
        getOwner(): $Entity;
        /**
         * Gets the item that this entity represents.
         */
        getItem(): $ItemStack;
        handler$dkd000$cataclysm$Cmhurt(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$hip000$spectrum$ItemEntity(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number, arg6: number, arg7: number, arg8: $CallbackInfo): void;
        handler$eeb002$xycraft_core$tick(arg0: $CallbackInfo): void;
        handler$hip012$spectrum$tick(arg0: $CallbackInfo): void;
        handler$fhh002$eternal_starlight$hurt(source: $DamageSource_, amount: number, cir: $CallbackInfoReturnable<any>): void;
        handler$fhh00f$eternal_starlight$tick(ci: $CallbackInfo): void;
        handler$hop000$twilightdelight$tick$frozen(arg0: $CallbackInfo): void;
        handler$hip000$spectrum$spectrumItemStackDamageActions(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        wrapOperation$fhh001$eternal_starlight$addToInventory(instance: $Inventory, itemStack: $ItemStack_, original: $Operation_<any>): boolean;
        artifacts$setThrower(entity: $LivingEntity): void;
        /**
         * Prepares this entity in new dimension by copying NBT data from entity in old dimension
         */
        setThrower(entity: $Entity): void;
        /**
         * Sets the item that this entity represents.
         */
        setItem(stack: $ItemStack_): void;
        redirect$kno000$ars_elemental$protectSpellbook(arg0: $ItemEntity, arg1: $DamageSource_): boolean;
        handler$fhh001$eternal_starlight$playerTouch(player: $Player, ci: $CallbackInfo): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNeverPickUp(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        makeFakeItem(): void;
        /**
         * Returns `true` if it's possible to attack this entity with an item.
         */
        hasPickUpDelay(): boolean;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        static areMergable(destinationStack: $ItemStack_, originStack: $ItemStack_): boolean;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setExtendedLifetime(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setUnlimitedLifetime(): void;
        artifacts$wasThrownBy(entity: $LivingEntity): boolean;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        getSpin(partialTicks: number): number;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        setPickUpDelay(pickupDelay: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getLifespan(): number;
        setLifespan(pickupDelay: number): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoDespawn(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setInfinitePickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTicksUntilDespawn(): number;
        setTicksUntilDespawn(pickupDelay: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getPickupDelay(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getAge(): number;
        setAge(pickupDelay: number): void;
        bumblezone$getThrower(): $UUID;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        lifespan: number;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        static EYE_HEIGHT: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static INFINITE_PICKUP_DELAY: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static LIFETIME: number;
        bobOffs: number;
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
        thrower: $UUID;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        pickupDelay: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        target: $UUID;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$ItemEntity>, level: $Level_);
        constructor(level: $Level_, posX: number, arg2: number, posY: number, arg4: $ItemStack_, posZ: number, arg6: number, itemStack: number);
        constructor(level: $Level_, posX: number, arg2: number, posY: number, arg4: $ItemStack_);
        get owner(): $Entity;
        set pickUpDelay(value: number);
    }
    export class $PrimedTnt extends $Entity implements $TraceableEntity, $EntityDynamicLightSource {
        setBlockState(blockState: $BlockState_): void;
        getBlockState(): $BlockState;
        /**
         * Gets the fuse from the data manager
         */
        getFuse(): number;
        setFuse(life: number): void;
        /**
         * Called to update the entity's position/logic.
         */
        explode(): void;
        getOwner(): $Entity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static USED_PORTAL_DAMAGE_CALCULATOR: $ExplosionDamageCalculator;
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
        static TAG_FUSE: string;
        static DEFAULT_BB_HEIGHT: number;
        owner: $LivingEntity;
        usedPortal: boolean;
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
        constructor(entityType: $EntityType_<$PrimedTnt>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: $LivingEntity | null);
    }
    export class $FallingBlockEntity extends $Entity implements $FallingBlockEntityAccessor, $AccessorMixinFallingBlockEntity, $FallingBlockEntityAccessor$1 {
        setStartPos(startPos: $BlockPos_): void;
        getStartPos(): $BlockPos;
        setBlockState(state: $BlockState_): void;
        setHurtsEntities(fallDamagePerDistance: number, fallDamageMax: number): void;
        modify$bch000$supplementaries$supp$concreteFix(pos: $BlockPos_): $BlockPos;
        getBlockState(): $BlockState;
        handler$ice000$architectury$handleLand(ci: $CallbackInfo, block: $Block_, blockPos2: $BlockPos_, bl: boolean, bl2: boolean, d: number, blockState: $BlockState_): void;
        static callInit$create_$md$f87c94$1(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $BlockState_): $FallingBlockEntity;
        callOnBrokenAfterFall(block: $Block_, pos: $BlockPos_): void;
        static fall(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FallingBlockEntity;
        /**
         * Called to update the entity's position/logic.
         */
        disableDrop(): void;
        bumblezone$setBlockState(state: $BlockState_): void;
        lootr$setBlockState(state: $BlockState_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        blockState: $BlockState;
        cancelDrop: boolean;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        dropItem: boolean;
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
        blockData: $CompoundTag;
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
        forceTickAfterTeleportToDuplicate: boolean;
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
        time: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$FallingBlockEntity>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: $BlockState_);
    }
}
