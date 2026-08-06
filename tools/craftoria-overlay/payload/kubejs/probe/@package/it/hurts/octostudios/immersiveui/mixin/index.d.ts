import { $Container } from "@package/net/minecraft/world";
import { $Slot } from "@package/net/minecraft/world/inventory";

declare module "@package/it/hurts/octostudios/immersiveui/mixin" {
    export class $AbstractFurnaceMenuAccessor {
    }
    export interface $AbstractFurnaceMenuAccessor {
        getContainer(): $Container;
        get container(): $Container;
    }
    /**
     * Values that may be interpreted as {@link $AbstractFurnaceMenuAccessor}.
     */
    export type $AbstractFurnaceMenuAccessor_ = (() => $Container);
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        getHoveredSlot(): $Slot;
        get hoveredSlot(): $Slot;
    }
    /**
     * Values that may be interpreted as {@link $AbstractContainerScreenAccessor}.
     */
    export type $AbstractContainerScreenAccessor_ = (() => $Slot);
}
