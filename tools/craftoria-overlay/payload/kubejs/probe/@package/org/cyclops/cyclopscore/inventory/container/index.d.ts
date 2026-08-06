import { $Container } from "@package/net/minecraft/world";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $IContainerButtonClickAcceptorServer, $IContainerButtonAction_ } from "@package/org/cyclops/cyclopscore/inventory/container/button";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IValueNotifiable, $IValueNotifier } from "@package/org/cyclops/cyclopscore/inventory";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ContainerListener, $Slot, $ContainerSynchronizer, $MenuType_, $AbstractContainerMenu, $MenuType } from "@package/net/minecraft/world/inventory";
import { $Class } from "@package/java/lang";
import { $List, $Set } from "@package/java/util";
export * as button from "@package/org/cyclops/cyclopscore/inventory/container/button";

declare module "@package/org/cyclops/cyclopscore/inventory/container" {
    /**
     * @deprecated
     */
    export class $ContainerExtended extends $AbstractContainerMenu implements $IContainerButtonClickAcceptorServer<$ContainerExtended>, $IValueNotifier, $IValueNotifiable {
        getValue(arg0: number): $CompoundTag;
        setValue(arg0: number, arg1: $CompoundTag_): void;
        onUpdate(arg0: number, arg1: $CompoundTag_): void;
        onButtonClick(arg0: string): boolean;
        getValueNotifiableType(): $MenuType<never>;
        setGuiValueListener(arg0: $IValueNotifiable): void;
        getValueIds(): $Set<number>;
        static setSlotPosX(arg0: $Slot, arg1: number): void;
        static setSlotPosY(arg0: $Slot, arg1: number): void;
        registerSyncedVariable<T>(arg0: $Class<T>, arg1: $Supplier_<T>): $Supplier<T>;
        getPlayerIInventory(): $Inventory;
        getHolderLookupProvider(): $HolderLookup$Provider;
        putButtonAction(arg0: string, arg1: $IContainerButtonAction_<$ContainerExtended>): void;
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
        constructor(arg0: $MenuType_<never> | null, arg1: number, arg2: $Inventory);
        get valueNotifiableType(): $MenuType<never>;
        set guiValueListener(value: $IValueNotifiable);
        get valueIds(): $Set<number>;
        get playerIInventory(): $Inventory;
        get holderLookupProvider(): $HolderLookup$Provider;
    }
    /**
     * @deprecated
     */
    export class $InventoryContainer extends $ContainerExtended {
        getContainerInventory(): $Container;
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
        constructor(arg0: $MenuType_<never> | null, arg1: number, arg2: $Inventory, arg3: $Container);
        get containerInventory(): $Container;
    }
}
