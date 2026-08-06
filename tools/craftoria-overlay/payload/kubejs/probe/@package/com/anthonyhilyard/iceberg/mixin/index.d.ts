import { $ClientTooltipPositioner_, $ClientTooltipPositioner, $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Font } from "@package/net/minecraft/client/gui";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/anthonyhilyard/iceberg/mixin" {
    export class $GuiGraphicsInvoker {
    }
    export interface $GuiGraphicsInvoker {
        invokeRenderTooltipInternal(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiGraphicsInvoker}.
     */
    export type $GuiGraphicsInvoker_ = ((arg0: $Font, arg1: $List<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner) => void);
}
