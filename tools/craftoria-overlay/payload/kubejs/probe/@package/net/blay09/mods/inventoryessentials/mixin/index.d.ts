import { $SimpleContainer } from "@package/net/minecraft/world";
import { $MenuType_, $Slot, $MenuType } from "@package/net/minecraft/world/inventory";

declare module "@package/net/blay09/mods/inventoryessentials/mixin" {
    export class $SlotWrapperAccessor {
    }
    export interface $SlotWrapperAccessor {
        getTarget(): $Slot;
        get target(): $Slot;
    }
    /**
     * Values that may be interpreted as {@link $SlotWrapperAccessor}.
     */
    export type $SlotWrapperAccessor_ = (() => $Slot);
    export class $AbstractContainerMenuAccessor {
    }
    export interface $AbstractContainerMenuAccessor {
        balm$getMenuType(): $MenuType<never>;
    }
    /**
     * Values that may be interpreted as {@link $AbstractContainerMenuAccessor}.
     */
    export type $AbstractContainerMenuAccessor_ = (() => $MenuType_<never>);
    export class $CreativeModeInventoryScreenAccessor {
    }
    export interface $CreativeModeInventoryScreenAccessor {
        getCONTAINER(): $SimpleContainer;
        get CONTAINER(): $SimpleContainer;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeInventoryScreenAccessor}.
     */
    export type $CreativeModeInventoryScreenAccessor_ = (() => $SimpleContainer);
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        getHoveredSlot(): $Slot;
        callHasClickedOutside(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getTopPos(): number;
        getLeftPos(): number;
        get hoveredSlot(): $Slot;
        get topPos(): number;
        get leftPos(): number;
    }
}
