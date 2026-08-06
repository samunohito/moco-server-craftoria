import { $Codec } from "@package/com/mojang/serialization";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $StoredItemStack } from "@package/io/github/mortuusars/exposure/world/item/component";
import { $List, $List_, $Map } from "@package/java/util";
import { $Filter } from "@package/io/github/mortuusars/exposure/data";
import { $InteractionResult, $InteractionResultHolder, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Predicate, $BiConsumer_, $Supplier_, $Function_, $Consumer_, $Predicate_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CaptureParameters_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $IItemExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $TriConsumer_ } from "@package/org/apache/logging/log4j/util";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $SoundEffect, $SoundEffect_ } from "@package/io/github/mortuusars/exposure/world/sound";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $PointOfView, $PointOfView_, $TranslatableError_ } from "@package/io/github/mortuusars/exposure/util";
import { $Item_, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $CameraId } from "@package/io/github/mortuusars/exposure/world/camera";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FilmRollItem } from "@package/io/github/mortuusars/exposure/world/item";
import { $FilmProperties } from "@package/io/github/mortuusars/exposure/world/camera/film/properties";
import { $Frame_, $Frame } from "@package/io/github/mortuusars/exposure/world/camera/frame";
import { $CameraStandEntity, $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CameraInstance$ProjectionState_ } from "@package/io/github/mortuusars/exposure/server";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ShutterSpeed, $FocalRange } from "@package/io/github/mortuusars/exposure/world/camera/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/item/camera" {
    export class $Timer {
        set(holder: $CameraHolder, stack: $ItemStack_, ticks: number): void;
        stop(stack: $ItemStack_): void;
        tick(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_): boolean;
        isTicking(holder: $CameraHolder, stack: $ItemStack_): boolean;
        setEndTick(stack: $ItemStack_, tick: number): void;
        getTicksSinceLastRelease(holder: $CameraHolder, stack: $ItemStack_): number;
        getEndTick(stack: $ItemStack_): number;
        getStartTick(stack: $ItemStack_): number;
        getLastReleaseTick(stack: $ItemStack_): number;
        setLastReleaseTick(stack: $ItemStack_, tick: number): void;
        setStartTick(stack: $ItemStack_, tick: number): void;
        getRemainingTicks(holder: $CameraHolder, stack: $ItemStack_): number;
        constructor();
    }
    export class $Attachment<T extends $Item> extends $Record {
        get(stack: $ItemStack_): $StoredItemStack;
        isEmpty(stack: $ItemStack_): boolean;
        matches(stack: $ItemStack_): boolean;
        map<R>(stack: $ItemStack_, mappingFunc: $BiFunction_<T, $ItemStack, R>): (R) | undefined;
        map<R>(stack: $ItemStack_, mappingFunc: $Function_<$ItemStack, R>): (R) | undefined;
        component(): $DataComponentType<$StoredItemStack>;
        id(): $ResourceLocation;
        set(stack: $ItemStack_, attachment: $ItemStack_): $Attachment<T>;
        isPresent(stack: $ItemStack_): boolean;
        orElse(stack: $ItemStack_, orElse: $Runnable_): $Attachment<T>;
        ifPresentOrElse(stack: $ItemStack_, ifPresent: $BiConsumer_<T, $ItemStack>, orElse: $Runnable_): $Attachment<T>;
        ifPresent(stack: $ItemStack_, ifPresent: $BiConsumer_<T, $ItemStack>): $Attachment<T>;
        ifPresent(stack: $ItemStack_, ifPresent: $Consumer_<$ItemStack>): $Attachment<T>;
        itemType(): $Class<T>;
        maxCount(): $Supplier<number>;
        mapOrElse<R>(stack: $ItemStack_, ifPresentMappingFunc: $Function_<$ItemStack, R>, orElseSupplier: $Supplier_<R>): R;
        mapOrElse<R>(stack: $ItemStack_, ifPresentMappingFunc: $BiFunction_<T, $ItemStack, R>, orElseSupplier: $Supplier_<R>): R;
        itemPredicate(): $Predicate<$ItemStack>;
        playRemoveSoundSided(entity: $Entity): void;
        playInsertSoundSided(entity: $Entity): void;
        insertedSound(): ($SoundEffect) | undefined;
        removedSound(): ($SoundEffect) | undefined;
        static FILTER: $Attachment<$Item>;
        static FILM: $Attachment<$FilmRollItem>;
        static FLASH: $Attachment<$Item>;
        static LENS: $Attachment<$Item>;
        constructor(id: $ResourceLocation_, component: $DataComponentType_<$StoredItemStack>, itemPredicate: $Predicate_<$ItemStack>, itemType: $Class<T>, maxCount: $Supplier_<number>, insertedSound: ($SoundEffect_) | undefined, removedSound: ($SoundEffect_) | undefined);
        constructor(id: $ResourceLocation_, component: $DataComponentType_<$StoredItemStack>, itemPredicate: $Predicate_<$ItemStack>, itemType: $Class<T>, maxCount: $Supplier_<number>);
        constructor(id: $ResourceLocation_, component: $DataComponentType_<$StoredItemStack>, itemPredicate: $Predicate_<$ItemStack>, itemType: $Class<T>, maxCount: $Supplier_<number>, insertedSound: $SoundEffect_, removedSound: $SoundEffect_);
    }
    /**
     * Values that may be interpreted as {@link $Attachment}.
     */
    export type $Attachment_<T> = { itemPredicate?: $Predicate_<$ItemStack>, removedSound?: ($SoundEffect_) | undefined, insertedSound?: ($SoundEffect_) | undefined, id?: $ResourceLocation_, maxCount?: $Supplier_<number>, component?: $DataComponentType_<$StoredItemStack>, itemType?: $Class<$Item_>,  } | [itemPredicate?: $Predicate_<$ItemStack>, removedSound?: ($SoundEffect_) | undefined, insertedSound?: ($SoundEffect_) | undefined, id?: $ResourceLocation_, maxCount?: $Supplier_<number>, component?: $DataComponentType_<$StoredItemStack>, itemType?: $Class<$Item_>, ];
    export class $Shutter {
        isOpen(stack: $ItemStack_): boolean;
        getState(stack: $ItemStack_): $ShutterState;
        setState(stack: $ItemStack_, shutterState: $ShutterState_): void;
        close(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_): void;
        open(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_, shutterSpeed: $ShutterSpeed): void;
        playOpenSound(holder: $CameraHolder): void;
        playCloseSound(holder: $CameraHolder): void;
        tick(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_): boolean;
        onClosed(onClosed: $TriConsumer_<$CameraHolder, $ServerLevel, $ItemStack>): void;
        shouldClose(stack: $ItemStack_, gameTime: number): boolean;
        onOpen(onOpen: $TriConsumer_<$CameraHolder, $ServerLevel, $ItemStack>): void;
        constructor();
    }
    export class $ShutterState extends $Record {
        isOpen(): boolean;
        static open(openedAt: number, shutterSpeed: $ShutterSpeed): $ShutterState;
        static closed(): $ShutterState;
        shutterSpeed(): $ShutterSpeed;
        openedAtTick(): number;
        getCloseTick(): number;
        static CODEC: $Codec<$ShutterState>;
        static CLOSED: $ShutterState;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShutterState>;
        constructor(isOpen: boolean, openedAtTick: number, shutterSpeed: $ShutterSpeed);
        get closeTick(): number;
    }
    /**
     * Values that may be interpreted as {@link $ShutterState}.
     */
    export type $ShutterState_ = { isOpen?: boolean, openedAtTick?: number, shutterSpeed?: $ShutterSpeed,  } | [isOpen?: boolean, openedAtTick?: number, shutterSpeed?: $ShutterSpeed, ];
    export class $CameraItem extends $Item implements $IItemExtension {
        release(holder: $CameraHolder, stack: $ItemStack_): $InteractionResultHolder<$ItemStack>;
        isActive(stack: $ItemStack_): boolean;
        getFilter(registryAccess: $RegistryAccess, stack: $ItemStack_): ($Filter) | undefined;
        getFlash(): $Flash;
        tick(holder: $CameraHolder, stack: $ItemStack_): boolean;
        getTimer(): $Timer;
        createFrame(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_, captureParameters: $CaptureParameters_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>): $Frame;
        setActive(stack: $ItemStack_, active: boolean): void;
        getAttachments(): $List<$Attachment<never>>;
        isOnCooldown(holder: $CameraHolder, stack: $ItemStack_): boolean;
        deactivate(entity: $Entity, stack: $ItemStack_): $InteractionResultHolder<$ItemStack>;
        activate(entity: $Entity, stack: $ItemStack_): $InteractionResultHolder<$ItemStack>;
        getCooldownPercent(holder: $CameraHolder, stack: $ItemStack_): number;
        getFov(level: $Level_, stack: $ItemStack_): number;
        getSelfieCameraDistance(stack: $ItemStack_): number;
        calculateCooldownAfterShot(stack: $ItemStack_, captureParameters: $CaptureParameters_): number;
        getAvailableShutterSpeeds(): $List<$ShutterSpeed>;
        getViewfinderOpenSound(): $SoundEvent;
        getViewfinderCloseSound(): $SoundEvent;
        getReleaseButtonSound(): $SoundEvent;
        getFilterShaderLocation(registryAccess: $RegistryAccess, stack: $ItemStack_): ($ResourceLocation) | undefined;
        getShutter(): $Shutter;
        handleStandSneakInteraction(stand: $CameraStandEntity, player: $Player, hand: $InteractionHand_, cameraStack: $ItemStack_): $InteractionResult;
        getPositionsInFrame(cameraHolder: $CameraHolder, pov: $PointOfView_, fov: number): $List<$BlockPos>;
        openCameraAttachments(player: $Player, stack: $ItemStack_, openedFromGUI: boolean): $InteractionResultHolder<$ItemStack>;
        openCameraAttachments(player: $Player, slotIndex: number, openedFromGUI: boolean): $InteractionResultHolder<$ItemStack>;
        handleProjectionResult(level: $ServerLevel, holder: $CameraHolder, stack: $ItemStack_, projectionState: $CameraInstance$ProjectionState_, error: ($TranslatableError_) | undefined): void;
        canTakePhoto(holder: $CameraHolder, stack: $ItemStack_): boolean;
        addNewFrame(level: $ServerLevel, holder: $CameraHolder, stack: $ItemStack_, captureParameters: $CaptureParameters_): void;
        addFrameToFilm(stack: $ItemStack_, frame: $Frame_): void;
        static getGlassTintColor(stack: $ItemStack_, tintIndex: number): number;
        onFrameAdded(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_, frame: $Frame_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>): void;
        getViewfinderFov(level: $Level_, stack: $ItemStack_): number;
        getPointOfView(holder: $CameraHolder, stack: $ItemStack_): $PointOfView;
        getCropFactor(): number;
        getFilmProperties(stack: $ItemStack_): $FilmProperties;
        getScaleOnStand(): number;
        activateInHand(player: $Player, stack: $ItemStack_, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        actionPerformed(stack: $ItemStack_, holder: $CameraHolder): void;
        getCaptureType(stack: $ItemStack_): $ResourceLocation;
        getFocalRange(registryAccess: $RegistryAccess, stack: $ItemStack_): $FocalRange;
        isInSelfieMode(stack: $ItemStack_): boolean;
        setLastActionTime(stack: $ItemStack_, lastActionTime: number): void;
        getFilmAttachment(): $Attachment<never>;
        getYPositionOffset(stack: $ItemStack_): number;
        isDisassembled(stack: $ItemStack_): boolean;
        getLastActionTime(stack: $ItemStack_): number;
        setDisassembled(stack: $ItemStack_, disassembled: boolean): void;
        hasAttachmentsMenu(): boolean;
        activateOnStand(player: $Player, stack: $ItemStack_, cameraStand: $CameraStandEntity): $InteractionResultHolder<$ItemStack>;
        getOrCreateId(stack: $ItemStack_): $CameraId;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static PROJECT_COOLDOWN: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        static BASE_COOLDOWN: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
        get flash(): $Flash;
        get timer(): $Timer;
        get attachments(): $List<$Attachment<never>>;
        get availableShutterSpeeds(): $List<$ShutterSpeed>;
        get viewfinderOpenSound(): $SoundEvent;
        get viewfinderCloseSound(): $SoundEvent;
        get releaseButtonSound(): $SoundEvent;
        get shutter(): $Shutter;
        get cropFactor(): number;
        get scaleOnStand(): number;
        get filmAttachment(): $Attachment<never>;
    }
    export class $Flash {
        isAvailable(camera: $ItemStack_): boolean;
        fire(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_): boolean;
        shouldFire(camera: $ItemStack_, lightLevel: number): boolean;
        getSound(): $SoundEvent;
        getCooldown(): number;
        constructor();
        get sound(): $SoundEvent;
        get cooldown(): number;
    }
}
