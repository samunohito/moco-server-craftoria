import { $Color } from "@package/java/awt";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as ui from "@package/de/keksuccino/fancymenu/util/rendering/ui";

declare module "@package/de/keksuccino/fancymenu/util/rendering" {
    export class $AspectRatio {
        getAspectRatioSizeByMinimumSize(arg0: number, arg1: number): number[];
        getAspectRatioSizeByMaximumSize(arg0: number, arg1: number): number[];
        getAspectRatioWidth(arg0: number): number;
        getAspectRatioHeight(arg0: number): number;
        getInputWidth(): number;
        getInputHeight(): number;
        constructor(arg0: number, arg1: number);
        get inputWidth(): number;
        get inputHeight(): number;
    }
    export class $DrawableColor {
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $DrawableColor;
        static of(arg0: number): $DrawableColor;
        static of(arg0: string): $DrawableColor;
        static of(arg0: $Color): $DrawableColor;
        static of(arg0: number, arg1: number, arg2: number): $DrawableColor;
        copy(): $DrawableColor;
        getColor(): $Color;
        getColorInt(): number;
        resetShaderColor(arg0: $GuiGraphics): void;
        getColorIntWithAlpha(arg0: number): number;
        getHex(): string;
        static ofHtml(arg0: string): $DrawableColor;
        getAsFloats(): $DrawableColor$FloatColor;
        setAsShaderColor(arg0: $GuiGraphics, arg1: number): void;
        setAsShaderColor(arg0: $GuiGraphics): void;
        static WHITE: $DrawableColor;
        static BLACK: $DrawableColor;
        static FULLY_TRANSPARENT: $DrawableColor;
        static EMPTY: $DrawableColor;
        get color(): $Color;
        get colorInt(): number;
        get hex(): string;
        get asFloats(): $DrawableColor$FloatColor;
    }
    export class $DrawableColor$FloatColor extends $Record {
        red(): number;
        green(): number;
        blue(): number;
        alpha(): number;
        constructor(red: number, green: number, blue: number, alpha: number);
    }
    /**
     * Values that may be interpreted as {@link $DrawableColor$FloatColor}.
     */
    export type $DrawableColor$FloatColor_ = { red?: number, alpha?: number, green?: number, blue?: number,  } | [red?: number, alpha?: number, green?: number, blue?: number, ];
}
