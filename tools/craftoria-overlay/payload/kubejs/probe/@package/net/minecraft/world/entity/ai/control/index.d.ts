import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/control" {
    export class $Control {
    }
    export interface $Control {
    }
    export class $JumpControl implements $Control {
        /**
         * Called to actually make the entity jump if isJumping is true.
         */
        jump(): void;
        /**
         * Called to actually make the entity jump if isJumping is true.
         */
        tick(): void;
        constructor(mob: $Mob);
    }
    export class $MoveControl$Operation extends $Enum<$MoveControl$Operation> {
        static values(): $MoveControl$Operation[];
        static valueOf(arg0: string): $MoveControl$Operation;
        static MOVE_TO: $MoveControl$Operation;
        static STRAFE: $MoveControl$Operation;
        static WAIT: $MoveControl$Operation;
        static JUMPING: $MoveControl$Operation;
    }
    /**
     * Values that may be interpreted as {@link $MoveControl$Operation}.
     */
    export type $MoveControl$Operation_ = "wait" | "move_to" | "strafe" | "jumping";
    export class $LookControl implements $Control {
        getWantedX(): number;
        getWantedZ(): number;
        getWantedY(): number;
        /**
         * Updates look
         */
        tick(): void;
        /**
         * Sets the controlling mob's look vector to the provided entity's location
         */
        setLookAt(entity: $Entity): void;
        /**
         * Sets position to look at
         */
        setLookAt(x: number, arg1: number, y: number, arg3: number, z: number): void;
        setLookAt(x: number, arg1: number, y: number): void;
        /**
         * Sets position to look at using entity
         */
        setLookAt(entity: $Entity, deltaYaw: number, deltaPitch: number): void;
        /**
         * Sets the mob's look vector
         */
        setLookAt(lookVector: $Vec3_): void;
        isLookingAtTarget(): boolean;
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
        constructor(mob: $Mob);
        get wantedX(): number;
        get wantedZ(): number;
        get wantedY(): number;
        get lookingAtTarget(): boolean;
    }
    export class $SmoothSwimmingMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(mob: $Mob, maxTurnX: number, maxTurnY: number, inWaterSpeedModifier: number, outsideWaterSpeedModifier: number, applyGravity: boolean);
    }
    export class $FlyingMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(mob: $Mob, maxTurn: number, hoversInPlace: boolean);
    }
    export class $BodyRotationControl implements $Control {
        /**
         * Update the Head and Body rendering angles
         */
        clientTick(): void;
        /**
         * Update the Head and Body rendering angles
         */
        rotateHeadIfNecessary(): void;
        /**
         * Update the Head and Body rendering angles
         */
        rotateHeadTowardsFront(): void;
        /**
         * Update the Head and Body rendering angles
         */
        rotateBodyIfNecessary(): void;
        mob: $Mob;
        constructor(mob: $Mob);
    }
    export class $MoveControl implements $Control {
        getWantedX(): number;
        getWantedZ(): number;
        getWantedY(): number;
        /**
         * @return If the mob is currently trying to go somewhere
         */
        hasWanted(): boolean;
        strafe(forward: number, strafe: number): void;
        tick(): void;
        getSpeedModifier(): number;
        /**
         * Sets the speed and location to move to
         */
        setWantedPosition(x: number, arg1: number, y: number, arg3: number): void;
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(mob: $Mob);
        get wantedX(): number;
        get wantedZ(): number;
        get wantedY(): number;
        get speedModifier(): number;
    }
    export class $SmoothSwimmingLookControl extends $LookControl {
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
        constructor(mob: $Mob, maxYRotFromCenter: number);
    }
}
