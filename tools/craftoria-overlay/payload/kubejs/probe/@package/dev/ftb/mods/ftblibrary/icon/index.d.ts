import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Style } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PixelBuffer } from "@package/dev/ftb/mods/ftblibrary/math";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftblibrary/icon" {
    export class $Drawable {
    }
    export interface $Drawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        draw3D(graphics: $GuiGraphics): void;
        drawStatic(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Drawable}.
     */
    export type $Drawable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $ImageIcon extends $Icon implements $IResourceIcon {
        getResourceLocation(): $ResourceLocation;
        bindTexture(): void;
        withColor(color: $Color4I): $ImageIcon;
        withUV(u0: number, v0: number, u1: number, v1: number): $ImageIcon;
        withTint(c: $Color4I): $ImageIcon;
        minU: number;
        maxV: number;
        maxU: number;
        static CODEC: $Codec<$Icon>;
        color: $Color4I;
        texture: $ResourceLocation;
        static MISSING_IMAGE: $ResourceLocation;
        minV: number;
        tileSize: number;
        static STRING_CODEC: $Codec<$Icon>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Icon>;
        constructor(tex: $ResourceLocation_);
        get resourceLocation(): $ResourceLocation;
    }
    export class $Icon implements $Drawable {
        isEmpty(): boolean;
        static empty(): $Color4I;
        copy(): $Icon;
        getJson(): $JsonElement;
        static getIcon(json: $JsonElement_): $Icon;
        static getIcon(id: string): $Icon;
        static getIcon(id: $ResourceLocation_): $Icon;
        getIngredient(): $Object;
        combineWith(icon: $Icon): $Icon;
        combineWith(...icons: $Icon[]): $Icon;
        withColor(color: $Color4I): $Icon;
        withPadding(padding: number): $Icon;
        hasPixelBuffer(): boolean;
        aspectRatio(): number;
        createPixelBuffer(): $PixelBuffer;
        withUV(u0: number, v0: number, u1: number, v1: number): $Icon;
        withUV(x: number, y: number, w: number, h: number, tw: number, th: number): $Icon;
        withTint(color: $Color4I): $Icon;
        withBorder(color: $Color4I, roundEdges: boolean): $Icon;
        getPixelBufferFrameCount(): number;
        draw3D(graphics: $GuiGraphics): void;
        drawStatic(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        static CODEC: $Codec<$Icon>;
        static STRING_CODEC: $Codec<$Icon>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Icon>;
        constructor();
        get json(): $JsonElement;
        get ingredient(): $Object;
        get pixelBufferFrameCount(): number;
    }
    export class $MutableColor4I extends $Color4I {
        set(r: number, g: number, b: number, a: number): $Color4I;
        set(col: $Color4I, a: number): $Color4I;
        set(col: $Color4I): $Color4I;
        set(col: number, a: number): $Color4I;
        set(col: number): $Color4I;
        setAlpha(a: number): $Color4I;
        addBrightness(b: number): $Color4I;
        setFromHSB(h: number, s: number, b: number): $Color4I;
        static GRAY: $Color4I;
        static WHITE: $Color4I;
        static LIGHT_RED: $Color4I;
        static CODEC: $Codec<$Icon>;
        static BLUE: $Color4I;
        static LIGHT_GREEN: $Color4I;
        static GREEN: $Color4I;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Icon>;
        static RED: $Color4I;
        static TEMP: $Color4I;
        static LIGHT_BLUE: $Color4I;
        static BLACK: $Color4I;
        static DARK_GRAY: $Color4I;
        static STRING_CODEC: $Codec<$Icon>;
        set alpha(value: number);
    }
    export class $IResourceIcon {
    }
    export interface $IResourceIcon {
        getResourceLocation(): $ResourceLocation;
        get resourceLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IResourceIcon}.
     */
    export type $IResourceIcon_ = (() => $ResourceLocation_);
    export class $Color4I extends $Icon {
        rgb(): number;
        static rgb(color: $Vec3_): $Color4I;
        static rgb(col: number): $Color4I;
        static rgb(r: number, g: number, b: number): $Color4I;
        static fromString(s: string): $Color4I;
        static fromJson(element: $JsonElement_): $Color4I;
        static hsb(h: number, s: number, b: number): $Color4I;
        mutable(): $MutableColor4I;
        isMutable(): boolean;
        bluef(): number;
        redf(): number;
        greenf(): number;
        static HSBtoRGB(hue: number, saturation: number, brightness: number): number;
        static RGBtoHSB(r: number, g: number, b: number, hsbvals: number[]): number[];
        lerp(col: $Color4I, m: number): $Color4I;
        static rgba(col: number): $Color4I;
        rgba(): number;
        static rgba(r: number, g: number, b: number, a: number): $Color4I;
        withAlpha(a: number): $Color4I;
        whiteIfEmpty(): $Color4I;
        addBrightness(percent: number): $Color4I;
        alphai(): number;
        alphaf(): number;
        redi(): number;
        greeni(): number;
        toStyle(): $Style;
        static get256(id: number): $Color4I;
        withAlphaf(alpha: number): $Color4I;
        bluei(): number;
        static getChatFormattingColor(formatting: $ChatFormatting_): $Color4I;
        static getChatFormattingColor(id: number): $Color4I;
        static GRAY: $Color4I;
        static WHITE: $Color4I;
        static LIGHT_RED: $Color4I;
        static CODEC: $Codec<$Icon>;
        static BLUE: $Color4I;
        static LIGHT_GREEN: $Color4I;
        static GREEN: $Color4I;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Icon>;
        static RED: $Color4I;
        static LIGHT_BLUE: $Color4I;
        static BLACK: $Color4I;
        static DARK_GRAY: $Color4I;
        static STRING_CODEC: $Codec<$Icon>;
    }
}
