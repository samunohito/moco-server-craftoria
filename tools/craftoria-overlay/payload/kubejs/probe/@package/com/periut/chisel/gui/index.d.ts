import { $Slot } from "@package/net/minecraft/world/inventory";

declare module "@package/com/periut/chisel/gui" {
    export class $BigSlot {
    }
    export interface $BigSlot {
        setBigSlot(arg0: boolean): $Slot;
        isBigSlot(): boolean;
    }
}
