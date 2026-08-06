import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Record } from "@package/java/lang";
import { $OptionalInt } from "@package/java/util";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/lambdaurora/lambdynlights/api/behavior" {
    export class $BeaconLightBehavior extends $Record implements $DynamicLightBehavior {
        x(): number;
        z(): number;
        y(): $OptionalInt;
        level(): $Level;
        hasChanged(): boolean;
        luminance(): number;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        isRemoved(): boolean;
        constructor(x: number, z: number, luminance: number, level: $Level_);
        constructor(x: number, y: $OptionalInt, z: number, luminance: number, level: $Level_);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BeaconLightBehavior}.
     */
    export type $BeaconLightBehavior_ = { y?: $OptionalInt, x?: number, level?: $Level_, z?: number, luminance?: number,  } | [y?: $OptionalInt, x?: number, level?: $Level_, z?: number, luminance?: number, ];
    export class $DynamicLightBehavior {
    }
    export interface $DynamicLightBehavior {
        isRemoved(): boolean;
        hasChanged(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        lightAtPos(arg0: $BlockPos_, arg1: number): number;
        get removed(): boolean;
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
    }
    export class $LineLightBehavior implements $DynamicLightBehavior {
        hasChanged(): boolean;
        setLuminance(luminance: number): void;
        getLuminance(): number;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        setStartPoint(x: number, y: number, z: number): void;
        setStartPoint(startPoint: $Vector3d): void;
        getStartPoint(): $Vector3d;
        setEndPoint(x: number, y: number, z: number): void;
        setEndPoint(endPoint: $Vector3d): void;
        getEndPoint(): $Vector3d;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        isRemoved(): boolean;
        constructor(startPoint: $Vector3d, endPoint: $Vector3d, luminance: number);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $DynamicLightBehavior$BoundingBox extends $Record {
        startX(): number;
        startY(): number;
        startZ(): number;
        endZ(): number;
        endX(): number;
        endY(): number;
        constructor(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number);
    }
    /**
     * Values that may be interpreted as {@link $DynamicLightBehavior$BoundingBox}.
     */
    export type $DynamicLightBehavior$BoundingBox_ = { endZ?: number, endY?: number, endX?: number, startZ?: number, startY?: number, startX?: number,  } | [endZ?: number, endY?: number, endX?: number, startZ?: number, startY?: number, startX?: number, ];
}
