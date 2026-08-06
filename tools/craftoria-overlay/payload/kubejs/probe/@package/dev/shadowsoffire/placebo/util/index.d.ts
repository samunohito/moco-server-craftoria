import { $Function_, $Function, $ToIntFunction_, $ToIntFunction } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $Component_, $FormattedText } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List_ } from "@package/java/util";

declare module "@package/dev/shadowsoffire/placebo/util" {
    export class $CachedObject$CachedObjectSource {
        static getOrCreate<T>(arg0: $ItemStack_, arg1: $ResourceLocation_, arg2: $Function_<$ItemStack, T>, arg3: $ToIntFunction_<$ItemStack>): T;
    }
    export interface $CachedObject$CachedObjectSource {
        getOrCreate<T>(arg0: $ResourceLocation_, arg1: $Function_<$ItemStack, T>, arg2: $ToIntFunction_<$ItemStack>): T;
    }
    /**
     * Values that may be interpreted as {@link $CachedObject$CachedObjectSource}.
     */
    export type $CachedObject$CachedObjectSource_ = ((arg0: $ResourceLocation, arg1: $Function<$ItemStack, any>, arg2: $ToIntFunction<$ItemStack>) => any);
    export class $DrawsOnLeft {
        static draw(arg0: $AbstractContainerScreen<never>, arg1: $GuiGraphics, arg2: $List_<$Component_>, arg3: number): void;
    }
    export interface $DrawsOnLeft {
        drawOnLeft(arg0: $GuiGraphics, arg1: $List_<$FormattedText>, arg2: number): void;
        drawOnLeft(arg0: $GuiGraphics, arg1: $List_<$FormattedText>, arg2: number, arg3: number): void;
        __ths(): $AbstractContainerScreen<never>;
    }
}
