import { $Record } from "@package/java/lang";

declare module "@package/org/embeddedt/embeddium/api/math" {
    export class $Point2i {
        static ZERO: $Point2i;
    }
    export interface $Point2i {
        x(): number;
        y(): number;
    }
    export class $Dim2i extends $Record implements $Point2i {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        getCenterY(): number;
        getCenterX(): number;
        getLimitY(): number;
        getLimitX(): number;
        withWidth(arg0: number): $Dim2i;
        withX(arg0: number): $Dim2i;
        withY(arg0: number): $Dim2i;
        withHeight(arg0: number): $Dim2i;
        overlapsWith(arg0: $Dim2i_): boolean;
        withParentOffset(arg0: $Point2i): $Dim2i;
        canFitDimension(arg0: $Dim2i_): boolean;
        containsCursor(arg0: number, arg1: number): boolean;
        constructor(x: number, y: number, width: number, height: number);
        get centerY(): number;
        get centerX(): number;
        get limitY(): number;
        get limitX(): number;
    }
    /**
     * Values that may be interpreted as {@link $Dim2i}.
     */
    export type $Dim2i_ = { y?: number, x?: number, height?: number, width?: number,  } | [y?: number, x?: number, height?: number, width?: number, ];
}
