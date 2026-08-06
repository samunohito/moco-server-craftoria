import { $Component_ } from "@package/net/minecraft/network/chat";

declare module "@package/com/github/jarva/arsadditions/mixin" {
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        setOverlayMessageTime(arg0: number): void;
        setOverlayMessageString(arg0: $Component_): void;
        set overlayMessageTime(value: number);
        set overlayMessageString(value: $Component_);
    }
}
