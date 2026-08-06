import { $Record } from "@package/java/lang";

declare module "@package/software/bernie/geckolib/util" {
    export class $Color extends $Record {
        getColor(): number;
        static ofOpaque(arg0: number): $Color;
        brighter(arg0: number): $Color;
        darker(arg0: number): $Color;
        static ofHSB(arg0: number, arg1: number, arg2: number): $Color;
        getRed(): number;
        getAlpha(): number;
        getBlue(): number;
        getGreen(): number;
        static ofARGB(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        static ofARGB(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        argbInt(): number;
        static ofRGBA(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        static ofRGBA(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        getRedFloat(): number;
        getBlueFloat(): number;
        getGreenFloat(): number;
        static HSBtoARGB(arg0: number, arg1: number, arg2: number): number;
        static ofRGB(arg0: number, arg1: number, arg2: number): $Color;
        static ofRGB(arg0: number, arg1: number, arg2: number): $Color;
        getAlphaFloat(): number;
        static WHITE: $Color;
        static GRAY: $Color;
        static BLUE: $Color;
        static GREEN: $Color;
        static RED: $Color;
        static PINK: $Color;
        static LIGHT_GRAY: $Color;
        static BLACK: $Color;
        static MAGENTA: $Color;
        static YELLOW: $Color;
        static DARK_GRAY: $Color;
        static CYAN: $Color;
        static ORANGE: $Color;
        constructor(argbInt: number);
        get color(): number;
        get red(): number;
        get alpha(): number;
        get blue(): number;
        get green(): number;
        get redFloat(): number;
        get blueFloat(): number;
        get greenFloat(): number;
        get alphaFloat(): number;
    }
    /**
     * Values that may be interpreted as {@link $Color}.
     */
    export type $Color_ = { argbInt?: number,  } | [argbInt?: number, ];
}
