import { $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/lib/client/gui/widget/dropdown" {
    export class $DropDownWidget extends $AbstractWidget {
        size(): number;
        isClosed(): boolean;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        getSelected(): number;
        onDropDown(arg0: number, arg1: number, arg2: boolean, arg3: number): boolean;
        onDropDown(arg0: number, arg1: number, arg2: number): boolean;
        setActive(arg0: boolean): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setClosed(arg0: boolean): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): void;
        selectId(arg0: number, arg1: boolean): void;
        getRenderY(): number;
        getXWithOffset(): number;
        getRenderYWithOffset(): number;
        visible: boolean;
        static TRIM: number;
        static TRIM_OPEN: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static LINE_HEIGHT: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static SELECTED_DEFAULT_BACKGROUND: number;
        static SELECTED_DEFAULT_HOVERED_BACKGROUND: number;
        static UNSET_FG_COLOR: number;
        x: number;
        focused: boolean;
        y: number;
        static DEFAULT_BACKGROUND: number;
        static TRIM_INSIDE: number;
        height: number;
        get selected(): number;
        get renderY(): number;
        get XWithOffset(): number;
        get renderYWithOffset(): number;
    }
}
