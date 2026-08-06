import { $GlyphInfo, $SheetGlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $Function_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedGlyphAccessor } from "@package/net/tysontheember/emberstextapi/mixin/client";
import { $ETABakedGlyph } from "@package/net/tysontheember/emberstextapi/accessor";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $GlyphRenderTypes, $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";
import { $EffectSettings } from "@package/net/tysontheember/emberstextapi/immersivemessages/effects";
import { $Enum } from "@package/java/lang";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/font/glyphs" {
    export class $BakedGlyph$Effect {
        constructor(x0: number, y0: number, x1: number, y1: number, depth: number, r: number, g: number, b: number, a: number);
    }
    export class $BakedGlyph implements $ETABakedGlyph, $BakedGlyphAccessor {
        render(italic: boolean, x: number, y: number, matrix: $Matrix4f, buffer: $VertexConsumer, red: number, green: number, blue: number, alpha: number, packedLight: number): void;
        renderType(displayMode: $Font$DisplayMode_): $RenderType;
        renderEffect(effect: $BakedGlyph$Effect, matrix: $Matrix4f, buffer: $VertexConsumer, packedLight: number): void;
        emberstextapi$render(arg0: $EffectSettings, arg1: boolean, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number): void;
        emberstextapi$setRenderTypes(arg0: $GlyphRenderTypes_): void;
        emberstextapi$getRenderTypes(): $GlyphRenderTypes;
        constructor(renderTypes: $GlyphRenderTypes_, u0: number, u1: number, v0: number, v1: number, left: number, right: number, up: number, down: number);
    }
    export class $SpecialGlyphs$PixelProvider {
    }
    export interface $SpecialGlyphs$PixelProvider {
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs$PixelProvider}.
     */
    export type $SpecialGlyphs$PixelProvider_ = (() => void);
    export class $EmptyGlyph extends $BakedGlyph {
        static INSTANCE: $EmptyGlyph;
        constructor();
    }
    export class $SpecialGlyphs extends $Enum<$SpecialGlyphs> implements $GlyphInfo {
        static values(): $SpecialGlyphs[];
        static valueOf(arg0: string): $SpecialGlyphs;
        getAdvance(): number;
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getAdvance(bold: boolean): number;
        getShadowOffset(): number;
        getBoldOffset(): number;
        static WHITE: $SpecialGlyphs;
        static MISSING: $SpecialGlyphs;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs}.
     */
    export type $SpecialGlyphs_ = "white" | "missing";
}
