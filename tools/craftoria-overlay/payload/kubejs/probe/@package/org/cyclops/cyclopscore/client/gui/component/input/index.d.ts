import { $Predicate, $Consumer, $BiFunction } from "@package/java/util/function";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EditBox, $WidgetSprites, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $Font } from "@package/net/minecraft/client/gui";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/org/cyclops/cyclopscore/client/gui/component/input" {
    export class $WidgetTextFieldExtended extends $EditBox {
        setListener(arg0: $IInputListener_): void;
        static CURSOR_INSERT_WIDTH: number;
        static CURSOR_BLINK_INTERVAL_MS: number;
        tooltip: $WidgetTooltipHolder;
        bordered: boolean;
        static DEFAULT_TEXT_COLOR: number;
        static CURSOR_APPEND_CHARACTER: string;
        displayPos: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static CURSOR_INSERT_COLOR: number;
        textColorUneditable: number;
        value: string;
        textShadow: boolean;
        height: number;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        focusedTime: number;
        visible: boolean;
        static BACKWARDS: number;
        suggestion: string;
        responder: $Consumer<string>;
        active: boolean;
        cursorPos: number;
        static MIN_SCROLL_PERIOD: number;
        textColor: number;
        filter: $Predicate<string>;
        formatter: $BiFunction<string, number, $FormattedCharSequence>;
        highlightPos: number;
        hint: $Component;
        x: number;
        focused: boolean;
        y: number;
        static FORWARDS: number;
        maxLength: number;
        font: $Font;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_, arg6: boolean);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_);
        set listener(value: $IInputListener_);
    }
    export class $IInputListener {
    }
    export interface $IInputListener {
        onChanged(): void;
    }
    /**
     * Values that may be interpreted as {@link $IInputListener}.
     */
    export type $IInputListener_ = (() => void);
}
