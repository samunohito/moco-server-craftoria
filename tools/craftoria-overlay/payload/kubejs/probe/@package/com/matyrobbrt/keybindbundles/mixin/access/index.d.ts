
declare module "@package/com/matyrobbrt/keybindbundles/mixin/access" {
    export class $AbstractSelectionListAccess {
    }
    export interface $AbstractSelectionListAccess {
        kbb$getScrollbarPosition(): number;
    }
    /**
     * Values that may be interpreted as {@link $AbstractSelectionListAccess}.
     */
    export type $AbstractSelectionListAccess_ = (() => number);
    export class $ScreenAccess {
    }
    export interface $ScreenAccess {
        kbb$repositionElements(): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAccess}.
     */
    export type $ScreenAccess_ = (() => void);
}
