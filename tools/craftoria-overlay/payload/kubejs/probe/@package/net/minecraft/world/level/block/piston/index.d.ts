import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $DirectionProperty, $EnumProperty, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IExtendedPistonTile } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBlockHolder } from "@package/net/mehvahdjukaar/moonlight/api/block";
import { $BaseEntityBlock, $Block$BlockStatePairKey, $DirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $ThreadLocal } from "@package/java/lang";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonBaseBlock extends $DirectionalBlock {
        handler$ikm000$ftbchunks$onMoveBlocks(level: $Level_, blockPos: $BlockPos_, direction: $Direction_, extending: boolean, cir: $CallbackInfoReturnable<any>, pistonStructureResolver: $PistonStructureResolver): void;
        /**
         * Checks if the piston can push the given BlockState.
         */
        static isPushable(state: $BlockState_, level: $Level_, pos: $BlockPos_, movementDirection: $Direction_, allowDestroy: boolean, pistonFacing: $Direction_): boolean;
        codec(): $MapCodec<$PistonBaseBlock>;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static TRIGGER_EXTEND: number;
        static PLATFORM_THICKNESS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PistonBaseBlock>;
        static EXTENDED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static TRIGGER_CONTRACT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TRIGGER_DROP: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(isSticky: boolean, properties: $BlockBehaviour$Properties);
    }
    export class $PistonMath {
        static getMovementArea(bounds: $AABB_, dir: $Direction_, delta: number): $AABB;
        constructor();
    }
    export class $MovingPistonBlock extends $BaseEntityBlock {
        static newMovingBlockEntity(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean): $BlockEntity;
        codec(): $MapCodec<$MovingPistonBlock>;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$MovingPistonBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$PistonType>;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonHeadBlock extends $DirectionalBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PistonHeadBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static SHORT: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static PLATFORM: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$PistonType>;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonStructureResolver {
        resolve(): boolean;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToDestroy(): $List<$BlockPos>;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToPush(): $List<$BlockPos>;
        getPushDirection(): $Direction;
        static MAX_PUSH_DEPTH: number;
        constructor(level: $Level_, pistonPos: $BlockPos_, pistonDirection: $Direction_, extending: boolean);
        get toDestroy(): $List<$BlockPos>;
        get toPush(): $List<$BlockPos>;
        get pushDirection(): $Direction;
    }
    export class $PistonMovingBlockEntity extends $BlockEntity implements $IExtendedPistonTile, $IBlockHolder {
        /**
         * @return whether this piston is extending
         */
        isExtending(): boolean;
        getLastTicked(): number;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $PistonMovingBlockEntity): void;
        getProgress(progress: number): number;
        static moveStuckEntities(level: $Level_, pos: $BlockPos_, partialTick: number, piston: $PistonMovingBlockEntity): void;
        /**
         * @return whether this piston is extending
         */
        isSourcePiston(): boolean;
        tickMovedBlock(arg0: $Level_, arg1: $BlockPos_): void;
        getHeldBlock(): $BlockState;
        setHeldBlock(arg0: $BlockState_): boolean;
        getXOff(progress: number): number;
        getYOff(progress: number): number;
        getZOff(progress: number): number;
        handler$jig000$moonlight$onFinishedShortPulse(arg0: $CallbackInfo): void;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        finalTick(): void;
        getDirection(): $Direction;
        static moveCollidedEntities(level: $Level_, pos: $BlockPos_, partialTick: number, piston: $PistonMovingBlockEntity): void;
        getMovementDirection(): $Direction;
        getMovedState(): $BlockState;
        progressO: number;
        static TICK_MOVEMENT: number;
        lastTicked: number;
        progress: number;
        static ATTACHMENTS_NBT_KEY: string;
        deathTicks: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean);
        get extending(): boolean;
        get sourcePiston(): boolean;
        get direction(): $Direction;
        get movementDirection(): $Direction;
        get movedState(): $BlockState;
    }
}
