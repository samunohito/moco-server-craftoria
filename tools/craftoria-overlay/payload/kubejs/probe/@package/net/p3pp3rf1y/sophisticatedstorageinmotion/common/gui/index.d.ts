import { $NonNullList } from "@package/net/minecraft/core";
import { $ISyncedContainer, $StorageContainerMenuBase } from "@package/net/p3pp3rf1y/sophisticatedcore/common/gui";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IStorageWrapper } from "@package/net/p3pp3rf1y/sophisticatedcore/api";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ContainerListener, $Slot, $ContainerSynchronizer, $MenuType_ } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";

declare module "@package/net/p3pp3rf1y/sophisticatedstorageinmotion/common/gui" {
    export class $MovingStorageContainerMenu<T extends $Entity> extends $StorageContainerMenuBase<$IStorageWrapper> implements $ISyncedContainer {
        static fromBuffer(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf): $MovingStorageContainerMenu<never>;
        getStorageEntity(): (T) | undefined;
        getSlotFillPercentage(arg0: number): number;
        remoteUpgradeSlots: $NonNullList<$ItemStack>;
        realInventorySlots: $List<$Slot>;
        stateId: number;
        static EMPTY_UPGRADE_SLOT_BACKGROUND: $ResourceLocation;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastRealSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        lastUpgradeSlots: $NonNullList<$ItemStack>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static INACCESSIBLE_SLOT_BACKGROUND: $Pair<$ResourceLocation, $ResourceLocation>;
        synchronizer: $ContainerSynchronizer;
        upgradeSlots: $List<$Slot>;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static NUMBER_OF_PLAYER_SLOTS: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Player, arg2: number);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Player, arg3: number);
        get storageEntity(): (T) | undefined;
    }
}
