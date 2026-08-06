import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ModularRouterBlockEntity } from "@package/me/desht/modularrouters/block/tile";
import { $ContainerListener, $Slot, $ContainerSynchronizer, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $MFLocator_, $MFLocator } from "@package/me/desht/modularrouters/util";

declare module "@package/me/desht/modularrouters/container" {
    export class $ModuleMenu extends $AbstractMRContainerMenu {
        getLocator(): $MFLocator;
        getRouter(): $ModularRouterBlockEntity;
        static AUGMENT_START: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<any>, arg1: number, arg2: $Inventory, arg3: $MFLocator_);
        constructor(arg0: $MenuType_<any>, arg1: number, arg2: $Inventory, arg3: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        get locator(): $MFLocator;
        get router(): $ModularRouterBlockEntity;
    }
    export class $AbstractMRContainerMenu extends $AbstractContainerMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
    }
}
