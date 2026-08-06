import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics, $Gui } from "@package/net/minecraft/client/gui";

declare module "@package/twilightforest/client/overlay/display" {
    export class $ItemDisplay$Bounds extends $Record {
        width(): number;
        height(): number;
        startX(): number;
        startY(): number;
        constructor(startX: number, startY: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $ItemDisplay$Bounds}.
     */
    export type $ItemDisplay$Bounds_ = { height?: number, startX?: number, startY?: number, width?: number,  } | [height?: number, startX?: number, startY?: number, width?: number, ];
    export class $ItemDisplay {
    }
    export interface $ItemDisplay {
        render(arg0: $ItemStack_, arg1: $GuiGraphics, arg2: $Minecraft, arg3: $Gui, arg4: $Player, arg5: number): void;
        displayPosition(): $ItemDisplay$DisplayPosition;
        getWidgetSize(arg0: $ItemStack_, arg1: $Minecraft, arg2: $Gui, arg3: $Player, arg4: number): $ItemDisplay$Bounds;
    }
    export class $ItemDisplay$DisplayPosition extends $Enum<$ItemDisplay$DisplayPosition> {
        static values(): $ItemDisplay$DisplayPosition[];
        static valueOf(arg0: string): $ItemDisplay$DisplayPosition;
        static TOP: $ItemDisplay$DisplayPosition;
        static BOTTOM: $ItemDisplay$DisplayPosition;
        static DEFAULT: $ItemDisplay$DisplayPosition;
    }
    /**
     * Values that may be interpreted as {@link $ItemDisplay$DisplayPosition}.
     */
    export type $ItemDisplay$DisplayPosition_ = "top" | "default" | "bottom";
}
