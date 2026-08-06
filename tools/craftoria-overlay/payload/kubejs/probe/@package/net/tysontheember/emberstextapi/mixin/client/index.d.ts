import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GlyphRenderTypes, $FontSet, $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";

declare module "@package/net/tysontheember/emberstextapi/mixin/client" {
    export class $BakedGlyphAccessor {
    }
    export interface $BakedGlyphAccessor {
        emberstextapi$setRenderTypes(arg0: $GlyphRenderTypes_): void;
        emberstextapi$getRenderTypes(): $GlyphRenderTypes;
    }
    export class $FontAccess {
    }
    export interface $FontAccess {
        getFilterFishyGlyphs(): boolean;
        callGetFontSet(arg0: $ResourceLocation_): $FontSet;
        get filterFishyGlyphs(): boolean;
    }
}
