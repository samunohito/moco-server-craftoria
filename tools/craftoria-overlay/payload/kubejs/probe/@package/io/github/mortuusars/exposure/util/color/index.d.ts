import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/io/github/mortuusars/exposure/util/color" {
    export class $Color$Unbounded extends $Record {
        clamp(): $Color;
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        multiply(scalar: number): $Color$Unbounded;
        constructor(r: number, g: number, b: number, a: number);
    }
    /**
     * Values that may be interpreted as {@link $Color$Unbounded}.
     */
    export type $Color$Unbounded_ = { a?: number, g?: number, b?: number, r?: number,  } | [a?: number, g?: number, b?: number, r?: number, ];
    export class $Color extends $Record {
        static clamp(channel: number): number;
        add(other: $Color_): $Color;
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        multiply(scalar: number): $Color;
        static red(argb: number): number;
        subtract(other: $Color_): $Color;
        getRGB(): number;
        static rgb(rgb: number): $Color;
        static rgb(r: number, g: number, b: number): $Color;
        asHexString(): string;
        subtractUnbounded(other: $Color_): $Color$Unbounded;
        addUnbounded(other: $Color$Unbounded_): $Color$Unbounded;
        addUnbounded(other: $Color_): $Color$Unbounded;
        static green(argb: number): number;
        static blue(argb: number): number;
        static pack(alpha: number, red: number, green: number, blue: number): number;
        static alpha(argb: number): number;
        getA(): number;
        getB(): number;
        getG(): number;
        squaredDifferenceTo(color: $Color_): number;
        squaredDifferenceTo(argb: number): number;
        static argb(a: number, r: number, g: number, b: number): $Color;
        static argb(argb: number): $Color;
        getR(): number;
        static abgr(abgr: number): $Color;
        getBF(): number;
        withAlphaF(alpha: number): $Color;
        static bgr(bgr: number): $Color;
        static alphaF(argb: number): number;
        static redF(argb: number): number;
        static rgbF(r: number, g: number, b: number): $Color;
        getAF(): number;
        static argbF(a: number, r: number, g: number, b: number): $Color;
        getGF(): number;
        getABGR(): number;
        getRF(): number;
        getBGR(): number;
        static ARGBtoABGR(ARGB: number): number;
        static ABGRtoARGB(ABGR: number): number;
        static fromHex(hexColor: string): $Color;
        static blueF(argb: number): number;
        static greenF(argb: number): number;
        getARGB(): number;
        withAlpha(alpha: number): $Color;
        static WHITE: $Color;
        static CODEC: $Codec<$Color>;
        static HEX_STRING_CODEC: $Codec<$Color>;
        static BLACK: $Color;
        static TRANSPARENT: $Color;
        constructor(a: number, r: number, g: number, b: number);
        get RGB(): number;
        get BF(): number;
        get AF(): number;
        get GF(): number;
        get ABGR(): number;
        get RF(): number;
        get BGR(): number;
        get ARGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $Color}.
     */
    export type $Color_ = { a?: number, g?: number, b?: number, r?: number,  } | [a?: number, g?: number, b?: number, r?: number, ];
}
