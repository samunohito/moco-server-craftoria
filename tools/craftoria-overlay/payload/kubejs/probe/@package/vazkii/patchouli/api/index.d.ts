import { $Event } from "@package/net/neoforged/bus/api";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/vazkii/patchouli/api" {
    export class $BookContentsReloadEvent extends $Event {
        getBook(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        get book(): $ResourceLocation;
    }
    export class $BookDrawScreenEvent extends $Event {
        getGraphics(): $GuiGraphics;
        getScreen(): $Screen;
        getMouseY(): number;
        getMouseX(): number;
        getBook(): $ResourceLocation;
        getPartialTicks(): number;
        constructor(arg0: $ResourceLocation_, arg1: $Screen, arg2: number, arg3: number, arg4: number, arg5: $GuiGraphics);
        get graphics(): $GuiGraphics;
        get screen(): $Screen;
        get mouseY(): number;
        get mouseX(): number;
        get book(): $ResourceLocation;
        get partialTicks(): number;
    }
}
