import { $IUpgradeWrapper } from "@package/net/p3pp3rf1y/sophisticatedcore/upgrades";
import { $Codec } from "@package/com/mojang/serialization";
import { $IStorageWrapper } from "@package/net/p3pp3rf1y/sophisticatedcore/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map_, $Map, $Set, $Set_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $Holder_, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $ContainerSynchronizer, $ContainerListener, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/p3pp3rf1y/sophisticatedcore/common/gui" {
    export class $UpgradeContainerBase<W extends $IUpgradeWrapper, C extends $UpgradeContainerBase<W, C>> implements $IServerUpdater {
        isOpen(): boolean;
        getType(): $UpgradeContainerType<W, C>;
        getPlayer(): $Player;
        onInit(): void;
        sendBooleanToServer(arg0: string, arg1: boolean): void;
        mergeIntoStorageFirst(arg0: $Slot): boolean;
        getUpgradeContainerId(): number;
        getRepeatedQuickMoveLimit(arg0: $Slot, arg1: $ItemStack_): number;
        getSlotStackToTransfer(arg0: $Slot): $ItemStack;
        getSlots(): $List<$Slot>;
        setIsOpen(arg0: boolean): void;
        setUpgradeWrapper(arg0: $IUpgradeWrapper): void;
        allowsPickupAll(arg0: $Slot): boolean;
        containsSlot(arg0: $Slot): boolean;
        handlePacket(arg0: $CompoundTag_): void;
        getUpgradeWrapper(): W;
        sendDataToServer(arg0: $Supplier_<$CompoundTag>): void;
        onTakeFromSlot(arg0: $Slot, arg1: $Player, arg2: $ItemStack_): void;
        getUpgradeStack(): $ItemStack;
        get open(): boolean;
        get type(): $UpgradeContainerType<W, C>;
        get player(): $Player;
        get upgradeContainerId(): number;
        get slots(): $List<$Slot>;
        get upgradeStack(): $ItemStack;
    }
    export class $UpgradeContainerType<W extends $IUpgradeWrapper, C extends $UpgradeContainerBase<W, C>> {
        create(arg0: $Player, arg1: number, arg2: W): C;
        constructor(arg0: $UpgradeContainerType$IFactory<W, C>);
    }
    export class $UpgradeSlotChangeResult extends $Record {
        static fail(arg0: $Component_, arg1: $Set_<number>, arg2: $Set_<number>, arg3: $Set_<number>): $UpgradeSlotChangeResult;
        getErrorMessage(): ($Component) | undefined;
        static success(): $UpgradeSlotChangeResult;
        errorMessage(): $Component;
        successful(): boolean;
        errorInventoryParts(): $Set<number>;
        errorUpgradeSlots(): $Set<number>;
        errorInventorySlots(): $Set<number>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $UpgradeSlotChangeResult>;
        constructor(successful: boolean, errorMessage: $Component_ | null, errorUpgradeSlots: $Set_<number>, errorInventorySlots: $Set_<number>, errorInventoryParts: $Set_<number>);
    }
    /**
     * Values that may be interpreted as {@link $UpgradeSlotChangeResult}.
     */
    export type $UpgradeSlotChangeResult_ = { successful?: boolean, errorInventorySlots?: $Set_<number>, errorUpgradeSlots?: $Set_<number>, errorInventoryParts?: $Set_<number>, errorMessage?: $Component_,  } | [successful?: boolean, errorInventorySlots?: $Set_<number>, errorUpgradeSlots?: $Set_<number>, errorInventoryParts?: $Set_<number>, errorMessage?: $Component_, ];
    export class $SortBy extends $Enum<$SortBy> implements $StringRepresentable {
        static values(): $SortBy[];
        static valueOf(arg0: string): $SortBy;
        next(): $SortBy;
        static fromName(arg0: string): $SortBy;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MOD: $SortBy;
        static CODEC: $Codec<$SortBy>;
        static COUNT: $SortBy;
        static TAGS: $SortBy;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SortBy>;
        static NAME: $SortBy;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SortBy}.
     */
    export type $SortBy_ = "name" | "mod" | "count" | "tags";
    export class $IAdditionalSlotInfoMenu {
    }
    export interface $IAdditionalSlotInfoMenu {
        updateEmptySlotIcons(arg0: $Map_<$ResourceLocation_, $Set_<number>>): void;
        updateAdditionalSlotInfo(arg0: $Set_<number>, arg1: $Map_<number, number>, arg2: $Set_<number>, arg3: $Map_<number, $Holder_<$Item>>): void;
    }
    export class $StorageContainerMenuBase<S extends $IStorageWrapper> extends $AbstractContainerMenu implements $IAdditionalSlotInfoMenu {
        sort(): void;
        getSortBy(): $SortBy;
        setSortBy(arg0: $SortBy_): void;
        updateEmptySlotIcons(arg0: $Map_<$ResourceLocation_, $Set_<number>>): void;
        getFirstUpgradeSlot(): number;
        shouldKeepSearchPhrase(): boolean;
        getInventorySlotsSize(): number;
        updateAdditionalSlotInfo(arg0: $Set_<number>, arg1: $Map_<number, number>, arg2: $Set_<number>, arg3: $Map_<number, $Holder_<$Item>>): void;
        updateSlotChangeError(arg0: $UpgradeSlotChangeResult_): void;
        isStorageInventorySlot(arg0: number): boolean;
        getUpgradeSlotsSize(): number;
        getSlotOverlayColors(arg0: number): $List<number>;
        getMemorizedStackInSlot(arg0: number): ($ItemStack) | undefined;
        getTotalSlotsNumber(): number;
        setUpgradeChangeListener(arg0: $Consumer_<$StorageContainerMenuBase<never>>): void;
        getOpenOrFirstCraftingContainer<T extends $UpgradeContainerBase<never, never>>(arg0: $RecipeType_<never>): (T) | undefined;
        getNumberOfStorageInventorySlots(): number;
        getEntity(): ($Entity) | undefined;
        static canItemQuickReplace(arg0: $Slot | null, arg1: $ItemStack_): boolean;
        static getQuickCraftPlaceCount(arg0: $Slot, arg1: number, arg2: number, arg3: $ItemStack_): number;
        getUpgradeContainers(): $Map<number, $UpgradeContainerBase<never, never>>;
        isFirstLevelStorage(): boolean;
        getSlotUpgradeContainer(arg0: $Slot): ($UpgradeContainerBase<never, never>) | undefined;
        detectSettingsChangeAndReload(): boolean;
        isNotPlayersInventorySlot(arg0: number): boolean;
        transferItemsToStorage(arg0: boolean): void;
        removeOpenTabId(): void;
        getColumnsTaken(): number;
        setOpenTabId(arg0: number): void;
        isUpgradeRunnable(arg0: number): boolean;
        getNumberOfUpgradeSlots(): number;
        getBlockPosition(): ($BlockPos) | undefined;
        getVisibleStorageItem(): ($ItemStack) | undefined;
        handlePacket(arg0: $CompoundTag_): void;
        setSearchPhrase(arg0: string): void;
        getExtraSlots(): $List<$Slot>;
        setUpgradeEnabled(arg0: number, arg1: boolean): void;
        getOpenContainer(): ($UpgradeContainerBase<never, never>) | undefined;
        transferItemsToPlayerInventory(arg0: boolean): void;
        getStorageWrapper(): S;
        getErrorUpgradeSlotChangeResult(): ($UpgradeSlotChangeResult) | undefined;
        hasSomethingMessedWithStorage(): boolean;
        openSettings(): void;
        getNumberOfRows(): number;
        isInfiniteSlot(arg0: number): boolean;
        getUpgradeEnabled(arg0: number): boolean;
        getSlotFilterItem(arg0: number): $ItemStack;
        canDisableUpgrade(arg0: number): boolean;
        getSearchPhrase(): string;
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
        get firstUpgradeSlot(): number;
        get inventorySlotsSize(): number;
        get upgradeSlotsSize(): number;
        get totalSlotsNumber(): number;
        set upgradeChangeListener(value: $Consumer_<$StorageContainerMenuBase<never>>);
        get numberOfStorageInventorySlots(): number;
        get entity(): ($Entity) | undefined;
        get upgradeContainers(): $Map<number, $UpgradeContainerBase<never, never>>;
        get firstLevelStorage(): boolean;
        get columnsTaken(): number;
        set openTabId(value: number);
        get numberOfUpgradeSlots(): number;
        get blockPosition(): ($BlockPos) | undefined;
        get visibleStorageItem(): ($ItemStack) | undefined;
        get extraSlots(): $List<$Slot>;
        get openContainer(): ($UpgradeContainerBase<never, never>) | undefined;
        get storageWrapper(): S;
        get errorUpgradeSlotChangeResult(): ($UpgradeSlotChangeResult) | undefined;
        get numberOfRows(): number;
    }
    export class $IServerUpdater {
    }
    export interface $IServerUpdater {
        sendBooleanToServer(arg0: string, arg1: boolean): void;
        sendDataToServer(arg0: $Supplier_<$CompoundTag>): void;
    }
    export class $ISyncedContainer {
    }
    export interface $ISyncedContainer {
        handlePacket(arg0: $CompoundTag_): void;
    }
    /**
     * Values that may be interpreted as {@link $ISyncedContainer}.
     */
    export type $ISyncedContainer_ = ((arg0: $CompoundTag) => void);
}
