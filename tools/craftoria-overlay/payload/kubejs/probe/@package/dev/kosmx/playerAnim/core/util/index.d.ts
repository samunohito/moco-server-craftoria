import { $Supplier, $Function, $Function_ } from "@package/java/util/function";
import { $Number, $Enum } from "@package/java/lang";

declare module "@package/dev/kosmx/playerAnim/core/util" {
    export class $Vector3<N extends $Number> {
        getZ(): N;
        getX(): N;
        getY(): N;
        constructor(x: N, y: N, z: N);
        get z(): N;
        get x(): N;
        get y(): N;
    }
    export class $SetableSupplier<T> implements $Supplier<T> {
        get(): T;
        set(object: T): void;
        constructor();
    }
    export class $Vec3d extends $Vector3<number> {
        scale(scalar: number): $Vec3d;
        add(other: $Vec3d): $Vec3d;
        subtract(rhs: $Vec3d): $Vec3d;
        dotProduct(other: $Vec3d): number;
        crossProduct(other: $Vec3d): $Vec3d;
        distanceTo(vec3d: $Vec3d): number;
        squaredDistanceTo(vec3d: $Vec3d): number;
        constructor(x: number, y: number, z: number);
    }
    export class $Vec3f extends $Vector3<number> {
        scale(scalar: number): $Vec3f;
        add(other: $Vec3f): $Vec3f;
        subtract(rhs: $Vec3f): $Vec3f;
        dotProduct(other: $Vec3f): number;
        crossProduct(other: $Vec3f): $Vec3f;
        distanceTo(vec3d: $Vec3d): number;
        squaredDistanceTo(vec3d: $Vec3d): number;
        static ZERO: $Vec3f;
        constructor(x: number, y: number, z: number);
    }
    export class $Ease extends $Enum<$Ease> {
        invoke(t: number, n: number): number;
        invoke(f: number): number;
        static values(): $Ease[];
        static valueOf(name: string): $Ease;
        getId(): number;
        static getEase(b: number): $Ease;
        static easeOut(arg0: $Function_<number, number>): $Function<number, number>;
        static easeInOut(arg0: $Function_<number, number>): $Function<number, number>;
        static easeIn(arg0: $Function_<number, number>): $Function<number, number>;
        static INCIRC: $Ease;
        static OUTBACK: $Ease;
        static INQUART: $Ease;
        static INOUTSINE: $Ease;
        static CATMULLROM: $Ease;
        static INOUTCUBIC: $Ease;
        static INOUTQUAD: $Ease;
        static INOUTQUINT: $Ease;
        static INBOUNCE: $Ease;
        static OUTCIRC: $Ease;
        static OUTQUART: $Ease;
        static INOUTBOUNCE: $Ease;
        static OUTQUINT: $Ease;
        static OUTCUBIC: $Ease;
        static OUTSINE: $Ease;
        static INOUTBACK: $Ease;
        static INELASTIC: $Ease;
        static CONSTANT: $Ease;
        static INEXPO: $Ease;
        static STEP: $Ease;
        static OUTQUAD: $Ease;
        static INOUTEXPO: $Ease;
        static INQUAD: $Ease;
        static INSINE: $Ease;
        static INOUTCIRC: $Ease;
        static INBACK: $Ease;
        static INQUINT: $Ease;
        static OUTEXPO: $Ease;
        static OUTBOUNCE: $Ease;
        static OUTELASTIC: $Ease;
        static INOUTELASTIC: $Ease;
        static INOUTQUART: $Ease;
        static LINEAR: $Ease;
        static INCUBIC: $Ease;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $Ease}.
     */
    export type $Ease_ = "linear" | "constant" | "insine" | "outsine" | "inoutsine" | "incubic" | "outcubic" | "inoutcubic" | "inquad" | "outquad" | "inoutquad" | "inquart" | "outquart" | "inoutquart" | "inquint" | "outquint" | "inoutquint" | "inexpo" | "outexpo" | "inoutexpo" | "incirc" | "outcirc" | "inoutcirc" | "inback" | "outback" | "inoutback" | "inelastic" | "outelastic" | "inoutelastic" | "inbounce" | "outbounce" | "inoutbounce" | "catmullrom" | "step";
    export class $Pair<L, R> {
        getRight(): R;
        getLeft(): L;
        constructor(left: L, right: R);
        get right(): R;
        get left(): L;
    }
}
