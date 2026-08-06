import { $Affine } from "@package/dev/engine_room/flywheel/lib/transform";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity, $IMergeableBE } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Random, $Map, $Spliterator, $Iterator, $List, $Collection_, $Collection } from "@package/java/util";
import { $BlockEntityBehaviour, $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Supplier_, $Consumer_, $Function_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation, $EdgePointType, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_, $Direction$AxisDirection, $Direction_, $IdMapper, $Direction$AxisDirection_ } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $IHaveBigOutline, $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Iterable, $Record, $Class, $ThreadLocal } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelAccessor, $LevelReader, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $NonNullSupplier_, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Mirror_, $Block, $Rotation_, $Block$BlockStatePairKey } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/track" {
    export class $TrackMaterial {
        static deserialize(arg0: string): $TrackMaterial;
        resourceName(): string;
        getBlock(): $TrackBlock;
        static allBlocks(): $List<$NonNullSupplier<$Block>>;
        createBlock(arg0: $BlockBehaviour$Properties): $TrackBlock;
        asStack(): $ItemStack;
        asStack(arg0: number): $ItemStack;
        static fromItem(arg0: $Item_): $TrackMaterial;
        getBlockSupplier(): $NonNullSupplier<$TrackBlock>;
        isFromMod(arg0: string): boolean;
        static allFromMod(arg0: string): $List<$TrackMaterial>;
        getModelHolder(): $TrackMaterial$TrackModelHolder;
        static allBlocksFromMod(arg0: string): $List<$NonNullSupplier<$Block>>;
        static ALL: $Map<$ResourceLocation, $TrackMaterial>;
        trackBlock: $NonNullSupplier<$NonNullSupplier<$TrackBlock>>;
        trackType: $TrackMaterial$TrackType;
        langName: string;
        static ANDESITE: $TrackMaterial;
        particle: $ResourceLocation;
        id: $ResourceLocation;
        sleeperIngredient: $Ingredient;
        railsIngredient: $Ingredient;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>, arg3: $ResourceLocation_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $TrackMaterial$TrackType, arg7: $Supplier_<$Supplier<$TrackMaterial$TrackModelHolder>>, arg8: $TrackMaterial$TrackType$TrackBlockFactory_);
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>, arg3: $ResourceLocation_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $TrackMaterial$TrackType, arg7: $Supplier_<$Supplier<$TrackMaterial$TrackModelHolder>>);
        get block(): $TrackBlock;
        get blockSupplier(): $NonNullSupplier<$TrackBlock>;
        get modelHolder(): $TrackMaterial$TrackModelHolder;
    }
    export class $BezierConnection$GirderAngles {
        beams: $Couple<$PoseStack$Pose>[];
        lightPosition: $BlockPos[];
        length: number;
        beamCaps: $Couple<$Couple<$PoseStack$Pose>>[];
    }
    export class $TrackTargetingBehaviour<T extends $TrackEdgePoint> extends $BlockEntityBehaviour {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        static render(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $BezierTrackPointLocation_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $TrackTargetingBehaviour$RenderedTrackOverlayType_, arg9: number): void;
        getTargetDirection(): $Direction$AxisDirection;
        getTrack(): $ITrackBlock;
        determineGraphLocation(): $TrackGraphLocation;
        getEdgePoint(): T;
        hasValidTrack(): boolean;
        getTrackBlockState(): $BlockState;
        getGlobalPosition(): $BlockPos;
        invalidateEdgePoint(arg0: $CompoundTag_): void;
        isOnCurve(): boolean;
        isOrthogonal(): boolean;
        getTargetBezier(): $BezierTrackPointLocation;
        getPositionForMapMarker(): $BlockPos;
        createEdgePoint(): T;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$TrackTargetingBehaviour<never>>;
        constructor(arg0: $SmartBlockEntity, arg1: $EdgePointType<T>);
        get targetDirection(): $Direction$AxisDirection;
        get track(): $ITrackBlock;
        get edgePoint(): T;
        get trackBlockState(): $BlockState;
        get globalPosition(): $BlockPos;
        get onCurve(): boolean;
        get orthogonal(): boolean;
        get targetBezier(): $BezierTrackPointLocation;
        get positionForMapMarker(): $BlockPos;
    }
    export class $BezierTrackPointLocation extends $Record {
        segment(): number;
        curveTarget(): $BlockPos;
        static CODEC: $Codec<$BezierTrackPointLocation>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BezierTrackPointLocation>;
        constructor(curveTarget: $BlockPos_, segment: number);
    }
    /**
     * Values that may be interpreted as {@link $BezierTrackPointLocation}.
     */
    export type $BezierTrackPointLocation_ = { curveTarget?: $BlockPos_, segment?: number,  } | [curveTarget?: $BlockPos_, segment?: number, ];
    export class $TrackTargetingBehaviour$RenderedTrackOverlayType extends $Enum<$TrackTargetingBehaviour$RenderedTrackOverlayType> {
        static values(): $TrackTargetingBehaviour$RenderedTrackOverlayType[];
        static valueOf(arg0: string): $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static SIGNAL: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static STATION: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static DUAL_SIGNAL: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static OBSERVER: $TrackTargetingBehaviour$RenderedTrackOverlayType;
    }
    /**
     * Values that may be interpreted as {@link $TrackTargetingBehaviour$RenderedTrackOverlayType}.
     */
    export type $TrackTargetingBehaviour$RenderedTrackOverlayType_ = "station" | "signal" | "dual_signal" | "observer";
    export class $TrackMaterial$TrackType {
        id: $ResourceLocation;
        static STANDARD: $TrackMaterial$TrackType;
        constructor(arg0: $ResourceLocation_, arg1: $TrackMaterial$TrackType$TrackBlockFactory_);
    }
    export class $BezierConnection implements $Iterable<$BezierConnection$Segment> {
        clone(): $BezierConnection;
        getLength(): number;
        iterator(): $Iterator<$BezierConnection$Segment>;
        getBounds(): $AABB;
        getKey(): $BlockPos;
        write(arg0: $BlockPos_): $CompoundTag;
        write(arg0: $FriendlyByteBuf): void;
        getPosition(arg0: number): $Vec3;
        isPrimary(): boolean;
        getNormal(arg0: number): $Vec3;
        spawnDestroyParticles(arg0: $Level_): void;
        setMaterial(arg0: $TrackMaterial): void;
        secondary(): $BezierConnection;
        spawnItems(arg0: $Level_): void;
        rasterise(): $Map<$Pair<number, number>, number>;
        getMaterial(): $TrackMaterial;
        equalsSansMaterial(arg0: $BezierConnection): boolean;
        getRadius(): number;
        getSegmentCount(): number;
        yOffsetAt(arg0: $Vec3_): number;
        incrementT(arg0: number, arg1: number): number;
        getStepLUT(): number[];
        getHandleLength(): number;
        getTrackItemCost(): number;
        getGirderItemCost(): number;
        addItemsToPlayer(arg0: $Player): void;
        getBakedGirders(): $BezierConnection$GirderAngles;
        getBakedSegments(): $BezierConnection$SegmentAngles;
        getSegmentT(arg0: number): number;
        spliterator(): $Spliterator<$BezierConnection$Segment>;
        forEach(arg0: $Consumer_<$BezierConnection$Segment>): void;
        axes: $Couple<$Vec3>;
        smoothing: $Couple<number>;
        hasGirder: boolean;
        starts: $Couple<$Vec3>;
        normals: $Couple<$Vec3>;
        bePositions: $Couple<$BlockPos>;
        primary: boolean;
        constructor(arg0: $CompoundTag_, arg1: $BlockPos_);
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $Couple<$BlockPos_>, arg1: $Couple<$Vec3_>, arg2: $Couple<$Vec3_>, arg3: $Couple<$Vec3_>, arg4: boolean, arg5: boolean, arg6: $TrackMaterial);
        [Symbol.iterator](): Iterator<$BezierConnection$Segment>
        get length(): number;
        get bounds(): $AABB;
        get key(): $BlockPos;
        get radius(): number;
        get segmentCount(): number;
        get stepLUT(): number[];
        get handleLength(): number;
        get trackItemCost(): number;
        get girderItemCost(): number;
        get bakedGirders(): $BezierConnection$GirderAngles;
        get bakedSegments(): $BezierConnection$SegmentAngles;
    }
    export class $TrackBlock extends $Block implements $IBE<$TrackBlockEntity>, $IWrenchable, $ITrackBlock, $SpecialBlockItemRequirement, $ProperWaterloggedBlock, $IHaveBigOutline {
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        overlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): $BlockState;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        animateTick(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Random): void;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        getBlockEntityClass(): $Class<$TrackBlockEntity>;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getBlockEntityType(): $BlockEntityType<$TrackBlockEntity>;
        getUpNormal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        getCurveStart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Vec3;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getMaterial(): $TrackMaterial;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getConnected(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $TrackNodeLocation): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        prepareAssemblyOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $PoseStack): $PartialModel;
        prepareTrackOverlay<Self extends $Affine<Self>>(arg0: $Affine<Self>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BezierTrackPointLocation_, arg5: $Direction$AxisDirection_, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType_): $PartialModel;
        getTrackAxes(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $List<$Vec3>;
        getYOffsetAt(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): number;
        getBogeyAnchor(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        trackEquals(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TrackBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TrackBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TrackBlockEntity>): void;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getNearestTrackAxis(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Pair<$Vec3, $Direction$AxisDirection>;
        getElevationAtCenter(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): number;
        isSlope(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        fluidState(arg0: $BlockState_): $FluidState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static HAS_BE: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static SHAPE: $EnumProperty<$TrackShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial);
        get blockEntityClass(): $Class<$TrackBlockEntity>;
        get blockEntityType(): $BlockEntityType<$TrackBlockEntity>;
        get material(): $TrackMaterial;
    }
    export class $TrackMaterial$TrackModelHolder extends $Record {
        tie(): $PartialModel;
        leftSegment(): $PartialModel;
        rightSegment(): $PartialModel;
        constructor(tie: $PartialModel, leftSegment: $PartialModel, rightSegment: $PartialModel);
    }
    /**
     * Values that may be interpreted as {@link $TrackMaterial$TrackModelHolder}.
     */
    export type $TrackMaterial$TrackModelHolder_ = { tie?: $PartialModel, rightSegment?: $PartialModel, leftSegment?: $PartialModel,  } | [tie?: $PartialModel, rightSegment?: $PartialModel, leftSegment?: $PartialModel, ];
    export class $TrackBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IMergeableBE {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        accept(arg0: $BlockEntity): void;
        bind(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_): void;
        addConnection(arg0: $BezierConnection): void;
        removeConnection(arg0: $BlockPos_): void;
        hasInteractableConnections(): boolean;
        manageFakeTracksAlong(arg0: $BezierConnection, arg1: boolean): void;
        getConnections(): $Map<$BlockPos, $BezierConnection>;
        removeInboundConnections(arg0: boolean): void;
        validateConnections(): void;
        isTilted(): boolean;
        static ATTACHMENTS_NBT_KEY: string;
        boundLocation: $Pair<$ResourceKey<$Level>, $BlockPos>;
        tilt: $TrackBlockEntityTilt;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get connections(): $Map<$BlockPos, $BezierConnection>;
        get tilted(): boolean;
    }
    export class $BezierConnection$Segment {
        normal: $Vec3;
        faceNormal: $Vec3;
        index: number;
        derivative: $Vec3;
        position: $Vec3;
        constructor();
    }
    export class $TrackShape extends $Enum<$TrackShape> implements $StringRepresentable {
        static values(): $TrackShape[];
        static valueOf(arg0: string): $TrackShape;
        rotate(arg0: $Rotation_): $TrackShape;
        mirror(arg0: $Mirror_): $TrackShape;
        getNormal(): $Vec3;
        getModel(): string;
        getSerializedName(): string;
        isPortal(): boolean;
        isJunction(): boolean;
        static asPortal(arg0: $Direction_): $TrackShape;
        getAxes(): $List<$Vec3>;
        getModelRotation(): number;
        getRemappedEnumConstantName(): string;
        static CR_O: $TrackShape;
        static TW: $TrackShape;
        static AE: $TrackShape;
        static CR_D: $TrackShape;
        static AN: $TrackShape;
        static CR_PDX: $TrackShape;
        static CR_NDZ: $TrackShape;
        static TE: $TrackShape;
        static AS: $TrackShape;
        static CR_PDZ: $TrackShape;
        static PD: $TrackShape;
        static ZO: $TrackShape;
        static ND: $TrackShape;
        static AW: $TrackShape;
        static CR_NDX: $TrackShape;
        static XO: $TrackShape;
        static TN: $TrackShape;
        static NONE: $TrackShape;
        static TS: $TrackShape;
        get normal(): $Vec3;
        get model(): string;
        get serializedName(): string;
        get portal(): boolean;
        get junction(): boolean;
        get axes(): $List<$Vec3>;
        get modelRotation(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrackShape}.
     */
    export type $TrackShape_ = "none" | "zo" | "xo" | "pd" | "nd" | "an" | "as" | "ae" | "aw" | "tn" | "ts" | "te" | "tw" | "cr_o" | "cr_d" | "cr_pdx" | "cr_pdz" | "cr_ndx" | "cr_ndz";
    export class $BezierConnection$SegmentAngles {
        lightPosition: $BlockPos[];
        length: number;
        tieTransform: $PoseStack$Pose[];
        railTransforms: $Couple<$PoseStack$Pose>[];
    }
    export class $ITrackBlock {
        static addToListIfConnected(arg0: $TrackNodeLocation, arg1: $Collection_<$TrackNodeLocation$DiscoveredLocation>, arg2: $BiFunction_<number, boolean, $Vec3>, arg3: $Function_<boolean, $Vec3>, arg4: $Function_<boolean, $ResourceKey<$Level>>, arg5: $Function_<$Vec3, number>, arg6: $Vec3_, arg7: $BezierConnection, arg8: $BiFunction_<boolean, $Vec3, $TrackMaterial>): void;
        static walkConnectedTracks(arg0: $BlockGetter, arg1: $TrackNodeLocation, arg2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        static getMaterialSimple(arg0: $BlockGetter, arg1: $Vec3_, arg2: $TrackMaterial): $TrackMaterial;
        static getMaterialSimple(arg0: $BlockGetter, arg1: $Vec3_): $TrackMaterial;
    }
    export interface $ITrackBlock {
        overlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): $BlockState;
        getNearestTrackAxis(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Pair<$Vec3, $Direction$AxisDirection>;
        getUpNormal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        getCurveStart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Vec3;
        getMaterial(): $TrackMaterial;
        getConnected(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $TrackNodeLocation): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        getElevationAtCenter(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): number;
        prepareAssemblyOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $PoseStack): $PartialModel;
        prepareTrackOverlay<Self extends $Affine<Self>>(arg0: $Affine<Self>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BezierTrackPointLocation_, arg5: $Direction$AxisDirection_, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType_): $PartialModel;
        isSlope(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getTrackAxes(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $List<$Vec3>;
        getYOffsetAt(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): number;
        getBogeyAnchor(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        trackEquals(arg0: $BlockState_, arg1: $BlockState_): boolean;
        get material(): $TrackMaterial;
    }
    export class $TrackMaterial$TrackType$TrackBlockFactory {
    }
    export interface $TrackMaterial$TrackType$TrackBlockFactory {
        create(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial): $TrackBlock;
    }
    /**
     * Values that may be interpreted as {@link $TrackMaterial$TrackType$TrackBlockFactory}.
     */
    export type $TrackMaterial$TrackType$TrackBlockFactory_ = ((arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial) => $TrackBlock);
}
