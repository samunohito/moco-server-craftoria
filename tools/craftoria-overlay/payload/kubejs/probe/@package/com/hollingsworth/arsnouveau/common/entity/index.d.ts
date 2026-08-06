import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $ParticleColor, $ParticleColor$IntWrapper } from "@package/com/hollingsworth/arsnouveau/client/particle";
import { $EntityDimensions, $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $UUID, $Stack, $Set } from "@package/java/util";
import { $GeoEntity } from "@package/software/bernie/geckolib/animatable";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $ConfiguredSpellSound } from "@package/com/hollingsworth/arsnouveau/api/sound";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $ParticleEmitter } from "@package/com/hollingsworth/arsnouveau/api/particle";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $SpellResolver } from "@package/com/hollingsworth/arsnouveau/api/spell";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Object } from "@package/java/lang";
import { $Vec3_, $HitResult, $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/hollingsworth/arsnouveau/common/entity" {
    /**
     * @deprecated
     */
    export class $ColoredProjectile extends $Projectile {
        setColor(arg0: $ParticleColor): void;
        getColor(): $ParticleColor;
        /**
         * @deprecated
         */
        isRainbow(): boolean;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        getParticleColor(): $ParticleColor;
        /**
         * @deprecated
         */
        getParticleColorWrapper(): $ParticleColor$IntWrapper;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        leftOwner: boolean;
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
        rainbowStartTick: number;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BLUE: $EntityDataAccessor<number>;
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
        ownerUUID: $UUID;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        hasBeenShot: boolean;
        static GREEN: $EntityDataAccessor<number>;
        static RED: $EntityDataAccessor<number>;
        cachedOwner: $Entity;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        static PARTICLE_TAG: $EntityDataAccessor<$CompoundTag>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<$ColoredProjectile>, arg1: $Level_, arg2: $LivingEntity);
        constructor(arg0: $EntityType_<$ColoredProjectile>, arg1: $Level_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $EntityType_<$ColoredProjectile>, arg1: $Level_);
        get rainbow(): boolean;
        get particleColor(): $ParticleColor;
        get particleColorWrapper(): $ParticleColor$IntWrapper;
    }
    export class $EntityProjectileSpell extends $ColoredProjectile implements $GeoEntity {
        resolver(): $SpellResolver;
        /**
         * @deprecated
         */
        readSpawnData(arg0: $FriendlyByteBuf): void;
        /**
         * @deprecated
         */
        writeSpawnData(arg0: $FriendlyByteBuf): void;
        bounce(arg0: $BlockHitResult): void;
        setGravity(arg0: boolean): $EntityProjectileSpell;
        getExpirationTime(): number;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        canBounce(): boolean;
        buildEmitters(): void;
        transformHitResult(arg0: $HitResult | null): $HitResult;
        traceAnyHit(arg0: $HitResult | null, arg1: $Vec3_, arg2: $Vec3_): void;
        canTraversePortals(): boolean;
        getParticleDelay(): number;
        tickNextPosition(): void;
        playParticles(): void;
        getNextHitPosition(): $Vec3;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        getHitResult(): $HitResult;
        shoot(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setResolver(arg0: $SpellResolver): void;
        sendResolveParticles(): void;
        getTick(arg0: $Object): number;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        animatableCacheOverride(): $AnimatableInstanceCache;
        shouldPlayAnimsWhileGamePaused(): boolean;
        getBoneResetTime(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static OWNER_ID: $EntityDataAccessor<number>;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        leftOwner: boolean;
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
        /**
         * @deprecated
         */
        expireTime: number;
        resolveEmitter: $ParticleEmitter;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        rainbowStartTick: number;
        hurtMarked: boolean;
        resolveSound: $ConfiguredSpellSound;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BLUE: $EntityDataAccessor<number>;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        prismRedirect: number;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        pierceLeft: number;
        static DEFAULT_BB_HEIGHT: number;
        ownerUUID: $UUID;
        /**
         * @deprecated
         */
        spellResolver: $SpellResolver;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        hitList: $Set<$BlockPos>;
        hasBeenShot: boolean;
        static GREEN: $EntityDataAccessor<number>;
        tickEmitter: $ParticleEmitter;
        static RED: $EntityDataAccessor<number>;
        cachedOwner: $Entity;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        flairEmitter: $ParticleEmitter;
        static PARTICLE_TAG: $EntityDataAccessor<$CompoundTag>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        static SPELL_RESOLVER: $EntityDataAccessor<$SpellResolver>;
        onSpawnEmitter: $ParticleEmitter;
        castSound: $ConfiguredSpellSound;
        age: number;
        wasTouchingWater: boolean;
        numSensitive: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $EntityType_<$EntityProjectileSpell>, arg1: $Level_, arg2: $SpellResolver);
        constructor(arg0: $Level_, arg1: $SpellResolver);
        constructor(arg0: $Level_, arg1: $LivingEntity);
        constructor(arg0: $EntityType_<$EntityProjectileSpell>, arg1: $Level_);
        constructor(arg0: $EntityType_<$EntityProjectileSpell>, arg1: $Level_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $EntityType_<$EntityProjectileSpell>, arg1: $Level_, arg2: $LivingEntity);
        set gravity(value: boolean);
        get expirationTime(): number;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get particleDelay(): number;
        get nextHitPosition(): $Vec3;
        get hitResult(): $HitResult;
        get boneResetTime(): number;
    }
}
