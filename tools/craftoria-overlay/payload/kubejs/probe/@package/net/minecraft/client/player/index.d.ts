import { $MinecraftServer } from "@package/net/minecraft/server";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $HumanoidArm, $PortalProcessor, $PlayerRideableJumping, $EntityType, $Entity, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $ClientRecipeBook, $Options } from "@package/net/minecraft/client";
import { $UUID, $UUID_, $List_, $Stack, $Map } from "@package/java/util";
import { $KeyframeAnimation } from "@package/dev/kosmx/playerAnim/core/data";
import { $Vec3d } from "@package/dev/kosmx/playerAnim/core/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $PlayerInfo, $ClientPacketListener, $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $LocalPlayerInterface } from "@package/net/irisshaders/iris/mixinterface";
import { $HolderLookup$Provider, $BlockPos, $Holder } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $AbstractClientPlayerAccessor } from "@package/dev/engine_room/flywheel/backend/mixin";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $IPlayerEntity } from "@package/io/github/kosmx/emotes/main/mixinFunctions";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $TrailAppearance } from "@package/net/bettercombat/api/fx";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $IMixinLocalPlayer } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Abilities, $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $SlotReference, $IQuiverPlayer } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $EmotePlayer } from "@package/io/github/kosmx/emotes/main/emotePlay";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Portal$Transition } from "@package/net/minecraft/world/level/block";
import { $ClientPlayerKJS, $LocalClientPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $PlayerAttackAnimatable } from "@package/net/bettercombat/client/animation";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $AnimatedHand_ } from "@package/net/bettercombat/logic";
export * as inventory from "@package/net/minecraft/client/player/inventory";

declare module "@package/net/minecraft/client/player" {
    export class $LocalPlayer extends $AbstractClientPlayer implements $LocalPlayerInterface, $IQuiverPlayer, $IMixinLocalPlayer, $LocalClientPlayerKJS {
        drop(fullStack: boolean): boolean;
        getRecipeBook(): $ClientRecipeBook;
        /**
         * Returns whether the entity is in a server world
         */
        isMovingSlowly(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpRidingScale(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentMood(): number;
        jumpableVehicle(): $PlayerRideableJumping;
        setShowDeathScreen(useConfusion: boolean): void;
        setPermissionLevel(permissionLevel: number): void;
        /**
         * Returns whether the entity is in a server world
         */
        isAutoJumpEnabled(): boolean;
        onGameModeChanged(gameMode: $GameType_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getWaterVision(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetPos(): void;
        getStatsCounter(): $StatsCounter;
        /**
         * Heal living entity (param: amount of half-hearts)
         */
        hurtTo(healAmount: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getPermissionLevel(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        serverAiStep(): void;
        /**
         * Returns whether the entity is in a server world
         */
        isHandsBusy(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendOpenInventory(): void;
        /**
         * Returns whether the entity is in a server world
         */
        shouldShowDeathScreen(): boolean;
        handler$hdi000$immersive_aircraft$ia$isCrouching(cir: $CallbackInfoReturnable<any>): void;
        handler$djj000$moremousetweaks$onScreenClosed(arg0: $CallbackInfo): void;
        handler$jfh000$yungscavebiomes$addLostCavesAmbientSoundHandler(arg0: $Minecraft, arg1: $ClientLevel, arg2: $ClientPacketListener, arg3: $StatsCounter, arg4: $ClientRecipeBook, arg5: boolean, arg6: boolean, arg7: $CallbackInfo): void;
        localvar$cbm000$caelus$affixEmptyStack(weaponStack: $ItemStack_): $ItemStack;
        handler$ghh000$xaerominimap$onTickStart(arg0: $CallbackInfo): void;
        getActivePortalLocalTransition(): $Portal$Transition;
        modifyExpressionValue$hgo005$reliquified_ars_nouveau$elytraOverride(fullStack: boolean): boolean;
        handler$cbm000$caelus$checkFlight(arg0: $CallbackInfo): void;
        supplementaries$getQuiverSlot(): $SlotReference;
        modifyExpressionValue$hao002$ars_nouveau$elytraOverride(fullStack: boolean): boolean;
        /**
         * Sets the current XP, total XP, and level number.
         */
        setExperienceValues(currentXP: number, maxXP: number, level: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentConstantMood(): number;
        /**
         * Returns whether the entity is in a server world
         */
        getDoLimitedCrafting(): boolean;
        setDoLimitedCrafting(useConfusion: boolean): void;
        removeRecipeHighlight(recipe: $RecipeHolder_<never>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clientSideCloseContainer(): void;
        wrapOperation$bfc000$supplementaries$suppl$preventMovementWhileOperatingCannon(arg0: $Input, arg1: boolean, arg2: number, arg3: $Operation_<any>): void;
        getMinecraft(): $Minecraft;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getPermissionLevelKonkrete(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        lastHurtByPlayerTime: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        ars_Nouveau$motions: $Stack<any>;
        yHeadRot: number;
        yCloakO: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        fallFlyTicks: number;
        yo: number;
        connection: $ClientPacketListener;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        xBob: number;
        static ID_TAG: string;
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        input: $Input;
        xRotO: number;
        zo: number;
        s_bee: $EntityType<any>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        yBob: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        spinningEffectIntensity: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        yRotLast: number;
        xRotLast: number;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        xBobO: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        yBobO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        oSpinningEffectIntensity: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        level: $Level;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        static LOGGER: $Logger;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
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
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(minecraft: $Minecraft, clientLevel: $ClientLevel, connection: $ClientPacketListener, stats: $StatsCounter, recipeBook: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean);
        get recipeBook(): $ClientRecipeBook;
        get movingSlowly(): boolean;
        get jumpRidingScale(): number;
        get currentMood(): number;
        set showDeathScreen(value: boolean);
        get autoJumpEnabled(): boolean;
        get waterVision(): number;
        get statsCounter(): $StatsCounter;
        get handsBusy(): boolean;
        get activePortalLocalTransition(): $Portal$Transition;
        get currentConstantMood(): number;
        get minecraft(): $Minecraft;
        get permissionLevelKonkrete(): number;
    }
    export class $KeyboardInput extends $Input {
        forwardImpulse: number;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
        shiftKeyDown: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor(options: $Options);
    }
    export class $AbstractClientPlayer extends $Player implements $IPlayerEntity, $PlayerAttackAnimatable, $ClientPlayerKJS, $AbstractClientPlayerAccessor {
        /**
         * Called to update the entity's position/logic.
         */
        updateAnimationsOnTick(): void;
        getSkin(): $PlayerSkin;
        stopAttackAnimation(seconds: number): void;
        playAttackAnimation(name: string, animatedHand: $AnimatedHand_, length: number, upswing: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getFieldOfViewModifier(): number;
        handler$hdg000$immersive_aircraft$ia$getFieldOfViewModifier(cir: $CallbackInfoReturnable<any>): void;
        handler$ifa000$perception$getFieldOfViewModifier(cir: $CallbackInfoReturnable<any>): void;
        getPlayerInfo(): $PlayerInfo;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        emotes_getAge(): number;
        emotes_getUUID(): $UUID;
        /**
         * Returns `true` if the player is in spectator mode.
         */
        isLeftHanded(): boolean;
        handler$jbd000$capejs$getSkinMixin(arg0: $CallbackInfoReturnable<any>): void;
        handler$cef000$emotecraft$tick(ci: $CallbackInfo): void;
        emotecraft$playEmote(emote: $KeyframeAnimation, t: number, isForced: boolean): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        emotes_getAndIncreaseAge(): number;
        /**
         * Called to update the entity's position/logic.
         */
        emotecraft$voidEmote(): void;
        emotecraft$emotesGetPos(): $Vec3d;
        emotecraft$getPrevPos(): $Vec3d;
        getDeltaMovementLerped(patialTick: number): $Vec3;
        /**
         * Returns `true` if the player is in spectator mode.
         */
        emotecraft$isNotStanding(): boolean;
        emotecraft$setBodyYaw(seconds: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        emotecraft$getBodyYaw(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        emotecraft$getViewYaw(): number;
        /**
         * Returns `true` if the player is in spectator mode.
         */
        emotecraft$isForcedEmote(): boolean;
        playAttackParticles(isOffHand: boolean, weaponRange: number, delay: number, particles: $List_<any>, appearance: $TrailAppearance): void;
        /**
         * Called to update the entity's position/logic.
         */
        emoteTick(): void;
        stopEmote(uniqueId: $UUID_): void;
        /**
         * Called to update the entity's position/logic.
         */
        stopEmote(): void;
        /**
         * Called to update the entity's position/logic.
         */
        initEmotePlay(): void;
        /**
         * Returns `true` if the player is in spectator mode.
         */
        isMainPlayer(): boolean;
        /**
         * Returns `true` if the player is in spectator mode.
         */
        isPlayingEmote(): boolean;
        initEmotePerspective(emotePlayer: $EmotePlayer): void;
        /**
         * Called to update the entity's position/logic.
         */
        emotecraft$playerEntersInvalidPose(): void;
        /**
         * Called to update the entity's position/logic.
         */
        emoteTickCallback(): void;
        /**
         * Called to update the entity's position/logic.
         */
        emoteStartPlayCallback(): void;
        emotecraft$getEmote(): $EmotePlayer;
        flywheel$getPlayerInfo(): $PlayerInfo;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        lastHurtByPlayerTime: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        ars_Nouveau$motions: $Stack<any>;
        yHeadRot: number;
        yCloakO: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        fallFlyTicks: number;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        s_bee: $EntityType<any>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        level: $Level;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
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
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(clientLevel: $ClientLevel, gameProfile: $GameProfile);
        get skin(): $PlayerSkin;
        get fieldOfViewModifier(): number;
        get playerInfo(): $PlayerInfo;
        get leftHanded(): boolean;
        get mainPlayer(): boolean;
        get playingEmote(): boolean;
    }
    export class $Input {
        hasForwardImpulse(): boolean;
        getMoveVector(): $Vec2;
        tick(isSneaking: boolean, sneakingSpeedMultiplier: number): void;
        forwardImpulse: number;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
        shiftKeyDown: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor();
        get moveVector(): $Vec2;
    }
    export class $RemotePlayer extends $AbstractClientPlayer implements $IQuiverEntity {
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        lastHurtByPlayerTime: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        ars_Nouveau$motions: $Stack<any>;
        yHeadRot: number;
        yCloakO: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        fallFlyTicks: number;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        s_bee: $EntityType<any>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        level: $Level;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
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
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(clientLevel: $ClientLevel, gameProfile: $GameProfile);
    }
}
