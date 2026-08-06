import { $CollisionGetter, $PathNavigationRegion, $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PathAccessor } from "@package/com/yungnickyoung/minecraft/yungscavebiomes/mixin/debug";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/pathfinder" {
    export class $BinaryHeap {
        remove(node: $Node): void;
        size(): number;
        /**
         * Adds a point to the path
         */
        insert(point: $Node): $Node;
        /**
         * Clears the path
         */
        clear(): void;
        /**
         * Returns `true` if this path contains no points
         */
        isEmpty(): boolean;
        /**
         * Returns and removes the first point in the path
         */
        peek(): $Node;
        /**
         * Returns and removes the first point in the path
         */
        pop(): $Node;
        /**
         * Changes the provided point's total cost if costIn is smaller
         */
        changeCost(point: $Node, cost: number): void;
        getHeap(): $Node[];
        constructor();
        get empty(): boolean;
        get heap(): $Node[];
    }
    export class $Path$DebugData extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $Path$DebugData;
        targetNodes(): $Set<$Target>;
        closedSet(): $Node[];
        openSet(): $Node[];
        constructor(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>);
    }
    /**
     * Values that may be interpreted as {@link $Path$DebugData}.
     */
    export type $Path$DebugData_ = { targetNodes?: $Set_<$Target>, openSet?: $Node[], closedSet?: $Node[],  } | [targetNodes?: $Set_<$Target>, openSet?: $Node[], closedSet?: $Node[], ];
    export class $AmphibiousNodeEvaluator extends $WalkNodeEvaluator {
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor(prefersShallowSwimming: boolean);
    }
    export class $PathComputationType extends $Enum<$PathComputationType> {
        static values(): $PathComputationType[];
        static valueOf(arg0: string): $PathComputationType;
        static LAND: $PathComputationType;
        static AIR: $PathComputationType;
        static WATER: $PathComputationType;
    }
    /**
     * Values that may be interpreted as {@link $PathComputationType}.
     */
    export type $PathComputationType_ = "land" | "water" | "air";
    export class $Target extends $Node {
        static createFromStream(buffer: $FriendlyByteBuf): $Target;
        setReached(): void;
        updateBest(heuristic: number, node: $Node): void;
        /**
         * Returns `true` if this point has already been assigned to a path
         */
        isReached(): boolean;
        /**
         * Gets the nearest path point of the path that is constructed
         */
        getBestNode(): $Node;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(node: $Node);
        constructor(x: number, y: number, z: number);
        get bestNode(): $Node;
    }
    export class $PathTypeCache {
        invalidate(pos: $BlockPos_): void;
        getOrCompute(level: $BlockGetter, pos: $BlockPos_): $PathType;
        constructor();
    }
    export class $PathfindingContext {
        level(): $CollisionGetter;
        getBlockState(pos: $BlockPos_): $BlockState;
        mobPosition(): $BlockPos;
        getPathTypeFromState(x: number, y: number, z: number): $PathType;
        constructor(level: $CollisionGetter, mob: $Mob);
    }
    export class $PathFinder {
        /**
         * Finds a path to one of the specified positions and post-processes it or returns null if no path could be found within given accuracy
         */
        findPath(region: $PathNavigationRegion, mob: $Mob, targetPositions: $Set_<$BlockPos_>, maxRange: number, accuracy: number, searchDepthMultiplier: number): $Path;
        constructor(nodeEvaluator: $NodeEvaluator, maxVisitedNodes: number);
    }
    export class $NodeEvaluator {
        /**
         * This method is called when all nodes have been processed and PathEntity is created.
         */
        done(): void;
        prepare(level: $PathNavigationRegion, mob: $Mob): void;
        getTarget(x: number, arg1: number, y: number): $Target;
        setCanPassDoors(canFloat: boolean): void;
        setCanFloat(canFloat: boolean): void;
        setCanOpenDoors(canFloat: boolean): void;
        getStart(): $Node;
        canFloat(): boolean;
        getNeighbors(outputArray: $Node[], node: $Node): number;
        setCanWalkOverFences(canFloat: boolean): void;
        static isBurningBlock(state: $BlockState_): boolean;
        canOpenDoors(): boolean;
        canPassDoors(): boolean;
        getPathType(mob: $Mob, pos: $BlockPos_): $PathType;
        getPathType(context: $PathfindingContext, x: number, y: number, z: number): $PathType;
        canWalkOverFences(): boolean;
        getPathTypeOfMob(context: $PathfindingContext, x: number, y: number, z: number, mob: $Mob): $PathType;
        currentContext: $PathfindingContext;
        constructor();
        get start(): $Node;
    }
    export class $PathType extends $Enum<$PathType> {
        static values(): $PathType[];
        static valueOf(arg0: string): $PathType;
        getMalus(): number;
        static LAVA: $PathType;
        static DANGER_POWDER_SNOW: $PathType;
        static LEAVES: $PathType;
        static BLOCKED: $PathType;
        static WALKABLE: $PathType;
        static TRAPDOOR: $PathType;
        static BREACH: $PathType;
        static POWDER_SNOW: $PathType;
        static DOOR_WOOD_CLOSED: $PathType;
        static DANGER_TRAPDOOR: $PathType;
        static DANGER_FIRE: $PathType;
        static DAMAGE_FIRE: $PathType;
        static WATER: $PathType;
        static WATER_BORDER: $PathType;
        static WALKABLE_DOOR: $PathType;
        static DOOR_IRON_CLOSED: $PathType;
        static FENCE: $PathType;
        static OPEN: $PathType;
        static RAIL: $PathType;
        static DAMAGE_OTHER: $PathType;
        static DOOR_OPEN: $PathType;
        static UNPASSABLE_RAIL: $PathType;
        static COCOA: $PathType;
        static DANGER_OTHER: $PathType;
        static STICKY_HONEY: $PathType;
        static DAMAGE_CAUTIOUS: $PathType;
        get malus(): number;
    }
    /**
     * Values that may be interpreted as {@link $PathType}.
     */
    export type $PathType_ = "blocked" | "open" | "walkable" | "walkable_door" | "trapdoor" | "powder_snow" | "danger_powder_snow" | "fence" | "lava" | "water" | "water_border" | "rail" | "unpassable_rail" | "danger_fire" | "damage_fire" | "danger_other" | "damage_other" | "door_open" | "door_wood_closed" | "door_iron_closed" | "breach" | "leaves" | "sticky_honey" | "cocoa" | "damage_cautious" | "danger_trapdoor";
    export class $SwimNodeEvaluator extends $NodeEvaluator {
        currentContext: $PathfindingContext;
        constructor(allowBreaching: boolean);
    }
    export class $Node {
        static createFromStream(buffer: $FriendlyByteBuf): $Node;
        asVec3(): $Vec3;
        /**
         * Returns `true` if this point has already been assigned to a path
         */
        inOpenSet(): boolean;
        asBlockPos(): $BlockPos;
        distanceToSqr(pos: $BlockPos_): number;
        distanceToSqr(point: $Node): number;
        cloneAndMove(x: number, y: number, z: number): $Node;
        distanceTo(point: $Node): number;
        distanceTo(pos: $BlockPos_): number;
        writeToStream(buffer: $FriendlyByteBuf): void;
        static createHash(x: number, y: number, z: number): number;
        distanceToXZ(point: $Node): number;
        distanceManhattan(point: $Node): number;
        distanceManhattan(pos: $BlockPos_): number;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(x: number, y: number, z: number);
    }
    export class $FlyNodeEvaluator extends $WalkNodeEvaluator {
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor();
    }
    export class $WalkNodeEvaluator extends $NodeEvaluator {
        static getPathTypeStatic(context: $PathfindingContext, pos: $BlockPos$MutableBlockPos): $PathType;
        static getPathTypeStatic(mob: $Mob, pos: $BlockPos_): $PathType;
        static getFloorLevel(level: $BlockGetter, pos: $BlockPos_): number;
        static checkNeighbourBlocks(context: $PathfindingContext, x: number, y: number, z: number, pathType: $PathType_): $PathType;
        getPathTypeWithinMobBB(context: $PathfindingContext, x: number, y: number, z: number): $Set<$PathType>;
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor();
    }
    export class $Path implements $PathAccessor {
        /**
         * Returns `true` if this path has reached the end
         */
        isDone(): boolean;
        copy(): $Path;
        getTarget(): $BlockPos;
        /**
         * Directs this path to the next point in its array
         */
        advance(): void;
        replaceNode(index: number, point: $Node): void;
        /**
         * Returns the `Node` located at the specified index, usually the current one.
         */
        getNode(index: number): $Node;
        getNodePos(index: number): $BlockPos;
        /**
         * Returns the last `Node` of the Array.
         */
        getEndNode(): $Node;
        setDebug(openSet: $Node[], closedSet: $Node[], targetNodes: $Set_<$Target>): void;
        static createFromStream(buf: $FriendlyByteBuf): $Path;
        /**
         * Returns `true` if this path has reached the end
         */
        canReach(): boolean;
        /**
         * Returns `true` if the EntityPath are the same. Non instance related equals.
         */
        sameAs(pathentity: $Path | null): boolean;
        debugData(): $Path$DebugData;
        getNodeCount(): number;
        /**
         * @return the current `PathEntity` target node as a `Vec3D`
         */
        getNextEntityPos(entity: $Entity): $Vec3;
        getNextNodeIndex(): number;
        getNextNodePos(): $BlockPos;
        truncateNodes(currentPathIndex: number): void;
        /**
         * Returns the last `Node` of the Array.
         */
        getNextNode(): $Node;
        writeToStream(buffer: $FriendlyByteBuf): void;
        /**
         * Returns the last `Node` of the Array.
         */
        getPreviousNode(): $Node;
        /**
         * Gets the vector of the `Node` associated with the given index.
         */
        getEntityPosAtNode(entity: $Entity, index: number): $Vec3;
        setNextNodeIndex(currentPathIndex: number): void;
        /**
         * Returns `true` if this path has reached the end
         */
        notStarted(): boolean;
        getDistToTarget(): number;
        nodes: $List<$Node>;
        constructor(nodes: $List_<$Node>, target: $BlockPos_, reached: boolean);
        get done(): boolean;
        get target(): $BlockPos;
        get endNode(): $Node;
        get nodeCount(): number;
        get nextNodePos(): $BlockPos;
        get nextNode(): $Node;
        get previousNode(): $Node;
        get distToTarget(): number;
    }
}
