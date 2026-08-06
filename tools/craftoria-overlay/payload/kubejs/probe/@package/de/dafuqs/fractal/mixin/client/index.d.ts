import { $CreativeModeTab } from "@package/net/minecraft/world/item";

declare module "@package/de/dafuqs/fractal/mixin/client" {
    export class $CreativeModeInventoryScreenAccessor {
        static fractal$getSelectedTab(): $CreativeModeTab;
    }
    export interface $CreativeModeInventoryScreenAccessor {
    }
}
