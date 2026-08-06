import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $FishingMinigameScreen, $ActiveSweetSpot } from "@package/com/wdiscute/starcatcher/minigame";

declare module "@package/com/wdiscute/starcatcher/registry/sweetspotbehaviour" {
    export class $AbstractSweetSpotBehaviour {
        tick(): void;
        render(arg0: $GuiGraphics, arg1: $PoseStack, arg2: number): void;
        onRemove(): void;
        onHit(): void;
        renderForeground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        onAdd(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): void;
        ticksActive: number;
        constructor();
    }
}
