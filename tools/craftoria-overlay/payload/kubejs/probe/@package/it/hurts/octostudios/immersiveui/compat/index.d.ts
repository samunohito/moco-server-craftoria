import { $RenderInfo, $MouseInfo } from "@package/it/hurts/octostudios/immersiveui/client";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Map, $Random } from "@package/java/util";

declare module "@package/it/hurts/octostudios/immersiveui/compat" {
    export class $ExtraScreenData {
    }
    export interface $ExtraScreenData {
        getRenderInfo(): $RenderInfo;
        getMouseInfo(): $MouseInfo;
        getExpandingProgress(): $Map<$Slot, number>;
        getRandom(): $Random;
        get renderInfo(): $RenderInfo;
        get mouseInfo(): $MouseInfo;
        get expandingProgress(): $Map<$Slot, number>;
        get random(): $Random;
    }
}
