import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getRotX(): number;
        getRotY(): number;
        getScaleX(): number;
        getScaleY(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getScaleZ(): number;
        getRotZ(): number;
        getOffsetZ(): number;
        getOffsetY(): number;
        getOffsetX(): number;
        getBone(): $GeoBone;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        isScaleAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        isRotAnimInProgress(): boolean;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startPosAnim(): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        startScaleAnim(): void;
        startRotAnim(): void;
        stopRotAnim(arg0: number): void;
        stopPosAnim(arg0: number): void;
        stopScaleAnim(arg0: number): void;
        constructor(arg0: $GeoBone);
        get rotX(): number;
        get rotY(): number;
        get scaleX(): number;
        get scaleY(): number;
        get scaleZ(): number;
        get rotZ(): number;
        get offsetZ(): number;
        get offsetY(): number;
        get offsetX(): number;
        get bone(): $GeoBone;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
        get rotAnimInProgress(): boolean;
    }
}
