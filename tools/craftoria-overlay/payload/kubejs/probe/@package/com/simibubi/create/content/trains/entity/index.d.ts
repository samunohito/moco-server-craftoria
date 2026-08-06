import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $ScheduleRuntime } from "@package/com/simibubi/create/content/trains/schedule";
import { $UUID_, $ArrayList, $Stack, $Map, $Map$Entry, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $WeakReference } from "@package/java/lang/ref";
import { $Consumer_, $BiFunction, $Predicate, $BiConsumer, $BiConsumer_, $BiPredicate } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $AbstractContraptionEntity, $Contraption, $OrientedContraptionEntity, $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";
import { $DimensionPalette, $TrackNode, $TrackNodeLocation, $TrackEdge, $TrackGraph, $DiscoveredPath, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $TrainCargoManager } from "@package/com/simibubi/create/content/contraptions/minecart";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BogeySizes$BogeySize, $BogeyStyle, $AbstractBogeyBlock } from "@package/com/simibubi/create/content/trains/bogey";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/entity" {
    export class $CarriageContraptionEntity extends $OrientedContraptionEntity {
        static create(arg0: $Level_, arg1: $CarriageContraption): $CarriageContraptionEntity;
        hasSchedule(): boolean;
        getCarriage(): $Carriage;
        setServerSidePrevPosition(): void;
        updateRenderedPortalCutoff(): void;
        getCarriageData(): $CarriageSyncData;
        syncCarriage(): void;
        isLocalCoordWithin(arg0: $BlockPos_, arg1: number, arg2: number): boolean;
        setCarriage(arg0: $Carriage): void;
        checkConductors(): $Couple<boolean>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        carriageIndex: number;
        xRot: number;
        hasImpulse: boolean;
        ars_Nouveau$motions: $Stack<any>;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        yo: number;
        pitch: number;
        particles: $CarriageParticles;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        trainId: $UUID;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        prevYaw: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        movingBackwards: boolean;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        leftTickingChunks: boolean;
        staleTicks: number;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        prevPitch: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        sounds: $CarriageSounds;
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
        yaw: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        firstPositionUpdate: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        validForRender: boolean;
        nonDamageTicks: number;
        targetYaw: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get carriageData(): $CarriageSyncData;
    }
    export class $Navigation$StationTest {
    }
    export interface $Navigation$StationTest {
        test(arg0: number, arg1: number, arg2: $Map_<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Navigation$StationTest}.
     */
    export type $Navigation$StationTest_ = ((arg0: number, arg1: number, arg2: $Map<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation) => boolean);
    export class $Carriage$DimensionalCarriageEntity {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        updatePassengerLoadout(): void;
        minAllowedLocalCoord(): number;
        maxAllowedLocalCoord(): number;
        updateRenderedCutoff(): void;
        leadingAnchor(): $Vec3;
        trailingAnchor(): $Vec3;
        discardPivot(): void;
        updateCutoff(arg0: boolean): void;
        findPivot(arg0: $ResourceKey_<$Level>, arg1: boolean): $TrackNodeLocation;
        alignEntity(arg0: $CarriageContraptionEntity): void;
        pointsInitialised: boolean;
        pivot: $TrackNodeLocation;
        rotationAnchors: $Couple<$Vec3>;
        cutoff: number;
        positionAnchor: $Vec3;
        entity: $WeakReference<$CarriageContraptionEntity>;
        constructor(arg0: $Carriage);
    }
    export class $TrainIconType {
        static getDefault(): $TrainIconType;
        static register(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number): void;
        getId(): $ResourceLocation;
        getIconWidth(arg0: number): number;
        render(arg0: number, arg1: $GuiGraphics, arg2: number, arg3: number): number;
        static byId(arg0: $ResourceLocation_): $TrainIconType;
        getIconOffset(arg0: number): number;
        static FLIPPED_ENGINE: number;
        static ENGINE: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainIconType>;
        static REGISTRY: $Map<$ResourceLocation, $TrainIconType>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number);
        static get default(): $TrainIconType;
        get id(): $ResourceLocation;
    }
    export class $TrainStatus {
        crash(): void;
        tick(arg0: $Level_): void;
        failedNavigationNoTarget(arg0: string): void;
        failedPackageNoTarget(arg0: string): void;
        addMessage(arg0: $TrainStatus$StatusMessage_): void;
        successfulMigration(): void;
        missingConductor(): void;
        failedNavigation(): void;
        failedMigration(): void;
        doublePortal(): void;
        endOfTrack(): void;
        highStress(): void;
        trackOK(): void;
        manualControls(): void;
        newSchedule(): void;
        displayInformation(arg0: string, arg1: boolean, ...arg2: $Object[]): void;
        foundConductor(): void;
        missingCorrectConductor(): void;
        successfulNavigation(): void;
        navigation: boolean;
        track: boolean;
        conductor: boolean;
        constructor(arg0: $Train);
    }
    export class $Carriage {
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $TrackGraph, arg3: $DimensionPalette): $Carriage;
        getDimensionalIfPresent(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        travel(arg0: $Level_, arg1: $TrackGraph, arg2: number, arg3: $TravellingPoint, arg4: $TravellingPoint, arg5: number): number;
        setContraption(arg0: $Level_, arg1: $CarriageContraption): void;
        getLeadingPoint(): $TravellingPoint;
        leadingBogey(): $CarriageBogey;
        getTrailingPoint(): $TravellingPoint;
        trailingBogey(): $CarriageBogey;
        isOnIncompatibleTrack(): boolean;
        forEachPresentEntity(arg0: $Consumer_<$CarriageContraptionEntity>): void;
        updateContraptionAnchors(): void;
        anyAvailableEntity(): $CarriageContraptionEntity;
        anyAvailableDimensionalCarriage(): $Pair<$ResourceKey<$Level>, $Carriage$DimensionalCarriageEntity>;
        presentInMultipleDimensions(): boolean;
        getAnchorDiff(): number;
        manageEntities(arg0: $Level_): void;
        setTrain(arg0: $Train): void;
        updateConductors(): void;
        alignEntity(arg0: $Level_): void;
        isOnTwoBogeys(): boolean;
        getDimensional(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        getDimensional(arg0: $Level_): $Carriage$DimensionalCarriageEntity;
        presentConductors: $Couple<boolean>;
        bogeys: $Couple<$CarriageBogey>;
        blocked: boolean;
        stalled: boolean;
        static netIdGenerator: $AtomicInteger;
        id: number;
        bogeySpacing: number;
        storage: $TrainCargoManager;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Carriage>;
        train: $Train;
        constructor(arg0: $CarriageBogey, arg1: $CarriageBogey, arg2: number);
        get presentDimensions(): $List<$ResourceKey<$Level>>;
        get leadingPoint(): $TravellingPoint;
        get trailingPoint(): $TravellingPoint;
        get onIncompatibleTrack(): boolean;
        get anchorDiff(): number;
        get onTwoBogeys(): boolean;
    }
    export class $CarriageParticles {
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $ArrivalSoundQueue {
        add(arg0: number, arg1: $BlockPos_): void;
        serialize(arg0: $CompoundTag_): void;
        deserialize(arg0: $CompoundTag_): void;
        tick(arg0: $CarriageContraptionEntity, arg1: number, arg2: boolean): boolean;
        static play(arg0: $CarriageContraptionEntity, arg1: $StructureTemplate$StructureBlockInfo_): void;
        static isPlayable(arg0: $BlockState_): boolean;
        firstTick(): number;
        lastTick(): number;
        getFirstWhistle(arg0: $CarriageContraptionEntity): $Pair<boolean, number>;
        offset: number;
        constructor();
    }
    export class $Navigation {
        write(arg0: $DimensionPalette): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): void;
        isActive(): boolean;
        search(arg0: number, arg1: number, arg2: boolean, arg3: $ArrayList<$GlobalStation>, arg4: $Navigation$StationTest_): void;
        search(arg0: number, arg1: boolean, arg2: $ArrayList<$GlobalStation>, arg3: $Navigation$StationTest_): void;
        control(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        tick(arg0: $Level_): void;
        findPathTo(arg0: $ArrayList<$GlobalStation>, arg1: number): $DiscoveredPath;
        findPathTo(arg0: $GlobalStation, arg1: number): $DiscoveredPath;
        findNearestApproachable(arg0: boolean): $GlobalStation;
        cancelNavigation(): void;
        startNavigation(arg0: $DiscoveredPath): number;
        controlSignalScout(): $TravellingPoint$ITrackSelector;
        distanceToDestination: number;
        destination: $GlobalStation;
        announceArrival: boolean;
        ticksWaitingForSignal: number;
        waitingForSignal: $Pair<$UUID, boolean>;
        distanceStartedAt: number;
        destinationBehindTrain: boolean;
        distanceToSignal: number;
        train: $Train;
        constructor(arg0: $Train);
        get active(): boolean;
    }
    export class $TravellingPoint$ITrackSelector {
    }
    export interface $TravellingPoint$ITrackSelector extends $BiFunction<$TrackGraph, $Pair<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, $Map$Entry<$TrackNode, $TrackEdge>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITrackSelector}.
     */
    export type $TravellingPoint$ITrackSelector_ = (() => void);
    export class $TravellingPoint$SteerDirection extends $Enum<$TravellingPoint$SteerDirection> {
        static values(): $TravellingPoint$SteerDirection[];
        static valueOf(arg0: string): $TravellingPoint$SteerDirection;
        static LEFT: $TravellingPoint$SteerDirection;
        static RIGHT: $TravellingPoint$SteerDirection;
        static NONE: $TravellingPoint$SteerDirection;
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$SteerDirection}.
     */
    export type $TravellingPoint$SteerDirection_ = "none" | "left" | "right";
    export class $TrainStatus$StatusMessage extends $Record {
        messages(): $Component[];
        displayToPlayer(arg0: $Player): void;
        constructor(...messages: $Component_[]);
    }
    /**
     * Values that may be interpreted as {@link $TrainStatus$StatusMessage}.
     */
    export type $TrainStatus$StatusMessage_ = { messages?: $Component_[],  } | [messages?: $Component_[], ];
    export class $TravellingPoint$IEdgePointListener {
    }
    export interface $TravellingPoint$IEdgePointListener extends $BiPredicate<number, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IEdgePointListener}.
     */
    export type $TravellingPoint$IEdgePointListener_ = (() => void);
    export class $CarriageContraption extends $Contraption {
        hasForwardControls(): boolean;
        getSecondBogeyPos(): $BlockPos;
        withinVisible(arg0: $BlockPos_): boolean;
        withinVisible(arg0: number): boolean;
        isHiddenInPortal(arg0: number): boolean;
        swapStorageAfterAssembly(arg0: $CarriageContraptionEntity): void;
        notInPortal(): boolean;
        returnStorageForDisassembly(arg0: $MountedStorageManager): void;
        getAssemblyDirection(): $Direction;
        atSeam(arg0: $BlockPos_): boolean;
        atSeam(arg0: number): boolean;
        inControl(arg0: $BlockPos_, arg1: $Direction_): boolean;
        hasBackwardControls(): boolean;
        setSoundQueueOffset(arg0: number): void;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        conductorSeats: $Map<$BlockPos, $Couple<boolean>>;
        portalCutoffMax: number;
        simplifiedEntityColliders: $CollisionList;
        soundQueue: $ArrivalSoundQueue;
        blockConductors: $Couple<boolean>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        portalCutoffMin: number;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: $Direction_);
        get secondBogeyPos(): $BlockPos;
        get assemblyDirection(): $Direction;
        set soundQueueOffset(value: number);
    }
    export class $CarriageBogey {
        getSize(): $BogeySizes$BogeySize;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $CarriageBogey;
        getStress(): number;
        getDimension(): $ResourceKey<$Level>;
        trailing(): $TravellingPoint;
        leading(): $TravellingPoint;
        updateCouplingAnchor(arg0: $Vec3_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        getStyle(): $BogeyStyle;
        isUpsideDown(): boolean;
        getAnchorPosition(): $Vec3;
        getAnchorPosition(arg0: boolean): $Vec3;
        updateAngles(arg0: $CarriageContraptionEntity, arg1: number): void;
        bogeyData: $CompoundTag;
        carriage: $Carriage;
        static UPSIDE_DOWN_KEY: string;
        couplingAnchors: $Couple<$Vec3>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CarriageBogey>;
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_);
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_, arg3: $TravellingPoint, arg4: $TravellingPoint);
        get size(): $BogeySizes$BogeySize;
        get stress(): number;
        get dimension(): $ResourceKey<$Level>;
        get style(): $BogeyStyle;
        get upsideDown(): boolean;
    }
    export class $TravellingPoint$IPortalListener {
    }
    export interface $TravellingPoint$IPortalListener extends $Predicate<$Couple<$TrackNodeLocation>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IPortalListener}.
     */
    export type $TravellingPoint$IPortalListener_ = (() => void);
    export class $CarriageSyncData {
        update(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        apply(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $CarriageSyncData;
        isDirty(): boolean;
        approach(arg0: $CarriageContraptionEntity, arg1: $Carriage, arg2: number): void;
        setDirty(arg0: boolean): void;
        getDistanceTo(arg0: $TrackGraph, arg1: $TravellingPoint, arg2: $TravellingPoint, arg3: number, arg4: boolean): number;
        distanceToDestination: number;
        leadingCarriage: boolean;
        wheelLocations: $List<$Pair<$Couple<number>, number>>;
        fallbackLocations: $Pair<$Vec3, $Couple<$Vec3>>;
        constructor();
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $Train {
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Map_<$UUID_, $TrackGraph>, arg3: $DimensionPalette): $Train;
        getOwner(arg0: $Level_): $LivingEntity;
        crash(): void;
        collectInitiallyOccupiedSignalBlocks(): void;
        tick(arg0: $Level_): void;
        cancelStall(): void;
        hasBackwardConductor(): boolean;
        hasForwardConductor(): boolean;
        forEachTravellingPoint(arg0: $Consumer_<$TravellingPoint>): void;
        getNavigationPenalty(): number;
        distanceToLocationSqr(arg0: $Level_, arg1: $Vec3_): number;
        frontSignalListener(): $TravellingPoint$IEdgePointListener;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        canDisassemble(): boolean;
        maxSpeed(): number;
        disassemble(arg0: $Direction_, arg1: $BlockPos_): boolean;
        getTotalLength(): number;
        countPlayerPassengers(): number;
        acceleration(): number;
        setCurrentStation(arg0: $GlobalStation): void;
        earlyTick(arg0: $Level_): void;
        shouldCarriageSyncThisTick(arg0: number, arg1: number): boolean;
        approachTargetSpeed(arg0: number): void;
        burnFuel(): void;
        forEachTravellingPointBackwards(arg0: $BiConsumer_<$TravellingPoint, number>): void;
        reattachToTracks(arg0: $Level_): void;
        leaveStation(): void;
        backSignalListener(): $TravellingPoint$IEdgePointListener;
        findCollidingTrain(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: $ResourceKey_<$Level>): $Pair<$Train, $Vec3>;
        isTravellingOn(arg0: $TrackNode): boolean;
        determineHonk(arg0: $Level_): void;
        detachFromTracks(): void;
        getEndpointEdges(): $Couple<$Couple<$TrackNode>>;
        arriveAt(arg0: $GlobalStation): void;
        maxTurnSpeed(): number;
        getCurrentStation(): $GlobalStation;
        throttle: number;
        lowHonk: boolean;
        speedBeforeStall: number;
        icon: $TrainIconType;
        doubleEnded: boolean;
        backwardsDriver: $Player;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Train>;
        speed: number;
        manualTick: boolean;
        currentlyBackwards: boolean;
        honkPitch: number;
        navigation: $Navigation;
        carriages: $List<$Carriage>;
        currentStation: $UUID;
        honkTicks: number;
        id: $UUID;
        owner: $UUID;
        targetSpeed: number;
        occupiedSignalBlocks: $Map<$UUID, $UUID>;
        carriageWaitingForChunks: number;
        accumulatedSteamRelease: number;
        reservedSignalBlocks: $Set<$UUID>;
        updateSignalBlocks: boolean;
        migrationCooldown: number;
        runtime: $ScheduleRuntime;
        occupiedObservers: $Set<$UUID>;
        derailed: boolean;
        carriageSpacing: $List<number>;
        graph: $TrackGraph;
        cachedObserverFiltering: $Map<$UUID, $Pair<number, boolean>>;
        honk: boolean;
        mapColorIndex: number;
        name: $Component;
        invalid: boolean;
        status: $TrainStatus;
        manualSteer: $TravellingPoint$SteerDirection;
        fuelTicks: number;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: $Component_, arg7: $TrainIconType, arg8: number);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: number);
        get navigationPenalty(): number;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
        get totalLength(): number;
        get endpointEdges(): $Couple<$Couple<$TrackNode>>;
    }
    export class $CarriageSounds {
        stop(): void;
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        submitSharedSoundVolume(arg0: $Vec3_, arg1: number): void;
        finalizeSharedVolume(arg0: number): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $TravellingPoint$ITurnListener {
    }
    export interface $TravellingPoint$ITurnListener extends $BiConsumer<number, $TrackEdge> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITurnListener}.
     */
    export type $TravellingPoint$ITurnListener_ = (() => void);
    export class $TravellingPoint {
        reverse(arg0: $TrackGraph): void;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $TravellingPoint;
        random(): $TravellingPoint$ITrackSelector;
        getPosition(arg0: $TrackGraph): $Vec3;
        getPosition(arg0: $TrackGraph, arg1: boolean): $Vec3;
        follow(arg0: $TravellingPoint, arg1: $Consumer_<boolean>): $TravellingPoint$ITrackSelector;
        follow(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_, arg5: $TravellingPoint$IPortalListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_): number;
        getPositionWithOffset(arg0: $TrackGraph, arg1: number, arg2: boolean): $Vec3;
        migrateTo(arg0: $List_<$TrackGraphLocation>): void;
        steer(arg0: $TravellingPoint$SteerDirection_, arg1: $Vec3_): $TravellingPoint$ITrackSelector;
        ignoreEdgePoints(): $TravellingPoint$IEdgePointListener;
        ignorePortals(): $TravellingPoint$IPortalListener;
        ignoreTurns(): $TravellingPoint$ITurnListener;
        node2: $TrackNode;
        edge: $TrackEdge;
        blocked: boolean;
        position: number;
        node1: $TrackNode;
        upsideDown: boolean;
        constructor();
        constructor(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge, arg3: number, arg4: boolean);
    }
}
