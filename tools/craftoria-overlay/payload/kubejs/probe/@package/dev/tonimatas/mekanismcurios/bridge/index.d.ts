import { $CuriosSlots_, $CuriosSlots } from "@package/dev/tonimatas/mekanismcurios/util";

declare module "@package/dev/tonimatas/mekanismcurios/bridge" {
    export class $PlayerBridge {
    }
    export interface $PlayerBridge {
        mci$setSlot(arg0: $CuriosSlots_): void;
        mci$getSlot(): $CuriosSlots;
    }
}
