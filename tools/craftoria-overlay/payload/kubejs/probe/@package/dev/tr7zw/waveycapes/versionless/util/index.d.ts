import { $Object } from "@package/java/lang";

declare module "@package/dev/tr7zw/waveycapes/versionless/util" {
    export class $Vector3 {
        clone(): $Object;
        add(vec: $Vector3): $Vector3;
        add(x: number, y: number, z: number): $Vector3;
        copy(vec: $Vector3): void;
        normalize(): $Vector3;
        subtract(vec: $Vector3): $Vector3;
        mul(amount: number): $Vector3;
        div(amount: number): $Vector3;
        cross(vec: $Vector3): $Vector3;
        rotateDegrees(deg: number): $Vector3;
        sqrMagnitude(): number;
        x: number;
        y: number;
        z: number;
        constructor(x: number, y: number, z: number);
        constructor();
    }
    export class $CapePoint {
    }
    export interface $CapePoint {
        getLerpY(arg0: number): number;
        getLerpZ(arg0: number): number;
        getLerpX(arg0: number): number;
        getLerpedPos(delta: number): $Vector3;
    }
}
