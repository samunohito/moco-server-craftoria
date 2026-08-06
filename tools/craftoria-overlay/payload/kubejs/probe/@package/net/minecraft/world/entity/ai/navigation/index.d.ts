import { $Level_ } from "@package/net/minecraft/world/level";
import { $Path, $PathType_, $NodeEvaluator } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        setCanPassDoors(avoidSun: boolean): void;
        setCanOpenDoors(avoidSun: boolean): void;
        setCanWalkOverFences(avoidSun: boolean): void;
        setAvoidSun(avoidSun: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        /**
         * Gets the safe pathing Y position for the entity depending on if it can path swim or not
         */
        getSurfaceY(): number;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        constructor(mob: $Mob, level: $Level_);
        set canWalkOverFences(value: boolean);
        set avoidSun(value: boolean);
        get surfaceY(): number;
    }
    export class $AmphibiousPathNavigation extends $PathNavigation {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $PathNavigation {
        /**
         * Sets the active `Path` to `null`.
         */
        stop(): void;
        /**
         * If on ground or swimming and can swim
         */
        isDone(): boolean;
        /**
         * Gets the actively used `Path`.
         */
        getPath(): $Path;
        setCanFloat(canSwim: boolean): void;
        /**
         * Sets the active `Path` to `null`.
         */
        tick(): void;
        setMaxVisitedNodesMultiplier(multiplier: number): void;
        /**
         * Sets the active `Path` to `null`.
         */
        resetMaxVisitedNodesMultiplier(): void;
        shouldTargetNextNodeInDirection(vec: $Vec3_): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canFloat(): boolean;
        isStableDestination(pos: $BlockPos_): boolean;
        getMaxDistanceToWaypoint(): number;
        /**
         * Sets the active `Path` to `null`.
         */
        recomputePath(): void;
        /**
         * Returns path to given BlockPos
         */
        createPath(pos: $BlockPos_, accuracy: number): $Path;
        createPath(positions: $Set_<$BlockPos_>, distance: number): $Path;
        /**
         * Returns a path to one of the elements of the stream or null
         */
        createPath(targets: $Stream<$BlockPos_>, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(x: number, arg1: number, y: number, arg3: number): $Path;
        /**
         * Returns a path to the given entity or null
         */
        createPath(entity: $Entity, accuracy: number): $Path;
        createPath(pos: $BlockPos_, regionOffset: number, accuracy: number): $Path;
        shouldRecomputePath(pos: $BlockPos_): boolean;
        /**
         * If on ground or swimming and can swim
         */
        isStuck(): boolean;
        /**
         * Sets the speed
         */
        setSpeedModifier(speed: number): void;
        getTargetPos(): $BlockPos;
        canCutCorner(pathType: $PathType_): boolean;
        /**
         * If on ground or swimming and can swim
         */
        isInProgress(): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        /**
         * Try to find and set a path to EntityLiving. Returns `true` if successful.
         */
        moveTo(entity: $Entity, speed: number): boolean;
        /**
         * Try to find and set a path to XYZ. Returns `true` if successful.
         */
        moveTo(x: number, arg1: number, y: number, arg3: number): boolean;
        moveTo(x: number, arg1: number, y: number, arg3: number, z: number): boolean;
        /**
         * Sets a new path. If it's different from the old path. Checks to adjust path for sun avoiding, and stores start coords.
         */
        moveTo(pathentity: $Path | null, speed: number): boolean;
        constructor(mob: $Mob, level: $Level_);
        get done(): boolean;
        get path(): $Path;
        set maxVisitedNodesMultiplier(value: number);
        get maxDistanceToWaypoint(): number;
        get stuck(): boolean;
        set speedModifier(value: number);
        get targetPos(): $BlockPos;
        get inProgress(): boolean;
        get nodeEvaluator(): $NodeEvaluator;
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        allowBreaching: boolean;
        constructor(mob: $Mob, level: $Level_);
    }
    export class $WallClimberNavigation extends $GroundPathNavigation {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $FlyingPathNavigation extends $PathNavigation {
        setCanPassDoors(canOpenDoors: boolean): void;
        setCanOpenDoors(canOpenDoors: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        constructor(mob: $Mob, level: $Level_);
    }
}
