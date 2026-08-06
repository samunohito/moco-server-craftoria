import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ILinkable, $IControllableStorage, $ControllerBlockEntityBase } from "@package/net/p3pp3rf1y/sophisticatedcore/controller";
import { $Codec } from "@package/com/mojang/serialization";
import { $IStorageWrapper } from "@package/net/p3pp3rf1y/sophisticatedcore/api";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map_, $Map, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Nameable, $Clearable } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $BlockEntity, $ContainerOpenersCounter } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/p3pp3rf1y/sophisticatedstorage/block" {
    export class $IFillLevelDisplay {
    }
    export interface $IFillLevelDisplay {
        toggleFillLevelVisibility(): void;
        shouldShowFillLevels(): boolean;
        getSlotFillLevels(): $List<number>;
        get slotFillLevels(): $List<number>;
    }
    export class $SophisticatedOpenersCounter extends $ContainerOpenersCounter {
        setForPhysicalBlock(arg0: boolean): void;
        constructor();
        set forPhysicalBlock(value: boolean);
    }
    export class $IMaterialHolder {
    }
    export interface $IMaterialHolder {
        getMaterials(): $Map<$BarrelMaterial, $ResourceLocation>;
        setMaterials(arg0: $Map_<$BarrelMaterial_, $ResourceLocation_>): void;
        canHoldMaterials(): boolean;
    }
    export class $ILockable {
    }
    export interface $ILockable {
        isLocked(): boolean;
        toggleLock(): void;
        toggleLockVisibility(): void;
        shouldShowLock(): boolean;
        get locked(): boolean;
    }
    export class $BarrelMaterial$MaterialModelPart extends $Enum<$BarrelMaterial$MaterialModelPart> {
        static values(): $BarrelMaterial$MaterialModelPart[];
        static valueOf(arg0: string): $BarrelMaterial$MaterialModelPart;
        static CORE: $BarrelMaterial$MaterialModelPart;
        static TRIM: $BarrelMaterial$MaterialModelPart;
        static BOTH: $BarrelMaterial$MaterialModelPart;
    }
    /**
     * Values that may be interpreted as {@link $BarrelMaterial$MaterialModelPart}.
     */
    export type $BarrelMaterial$MaterialModelPart_ = "both" | "trim" | "core";
    export class $ITierDisplay {
    }
    export interface $ITierDisplay {
        toggleTierVisiblity(): void;
        shouldShowTier(): boolean;
    }
    export class $IUpgradeDisplay {
    }
    export interface $IUpgradeDisplay {
        toggleUpgradesVisiblity(): void;
        shouldShowUpgrades(): boolean;
    }
    export class $BarrelMaterial extends $Enum<$BarrelMaterial> implements $StringRepresentable {
        static values(): $BarrelMaterial[];
        static valueOf(arg0: string): $BarrelMaterial;
        getChildren(): $BarrelMaterial[];
        isLeaf(): boolean;
        static fromName(arg0: string): $BarrelMaterial;
        getSerializedName(): string;
        getMaterialModelPart(): $BarrelMaterial$MaterialModelPart;
        static getFillFromDefaults(arg0: $BarrelMaterial_): $List<$BarrelMaterial>;
        getRemappedEnumConstantName(): string;
        static ALL: $BarrelMaterial;
        static CODEC: $Codec<$BarrelMaterial>;
        static SIDE_TRIM: $BarrelMaterial;
        static BOTTOM: $BarrelMaterial;
        static TOP_INNER_TRIM: $BarrelMaterial;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BarrelMaterial>;
        static SIDE: $BarrelMaterial;
        static SIDE_ALL: $BarrelMaterial;
        static TOP: $BarrelMaterial;
        static ALL_BUT_TRIM: $BarrelMaterial;
        static TOP_TRIM: $BarrelMaterial;
        static ALL_TRIM: $BarrelMaterial;
        static TOP_ALL: $BarrelMaterial;
        static BOTTOM_TRIM: $BarrelMaterial;
        static BOTTOM_ALL: $BarrelMaterial;
        get children(): $BarrelMaterial[];
        get leaf(): boolean;
        get serializedName(): string;
        get materialModelPart(): $BarrelMaterial$MaterialModelPart;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BarrelMaterial}.
     */
    export type $BarrelMaterial_ = "side" | "side_trim" | "bottom" | "bottom_trim" | "top" | "top_trim" | "top_inner_trim" | "all" | "all_trim" | "all_but_trim" | "top_all" | "side_all" | "bottom_all";
    export class $StorageBlockEntity extends $BlockEntity implements $IControllableStorage, $ILinkable, $ILockable, $Nameable, $ITierDisplay, $IUpgradeDisplay, $Clearable {
        getName(): $Component;
        isOpen(): boolean;
        isLocked(): boolean;
        getDisplayName(): $Component;
        getControllerPos(): ($BlockPos) | undefined;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        setCustomName(arg0: $Component_): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getExternalItemHandler(arg0: $Direction_ | null): $IItemHandler;
        getCustomName(): $Component;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $StorageBlockEntity): void;
        onNeighborChange(arg0: $BlockPos_): void;
        clearContent(): void;
        recheckOpen(): void;
        dropContents(): void;
        setControllerPos(arg0: $BlockPos_): void;
        canBeConnected(): boolean;
        allowsEmptySlotsMatchingItemInsertsWhenLocked(): boolean;
        getStorageBlockPos(): $BlockPos;
        canConnectStorages(): boolean;
        getStorageBlockLevel(): $Level;
        removeControllerPos(): void;
        isLinked(): boolean;
        setBeingUpgraded(arg0: boolean): void;
        setShouldBeOpen(arg0: boolean): void;
        toggleLock(): void;
        getSlotFillPercentage(arg0: number): number;
        getConnectablePositions(): $Set<$BlockPos>;
        memorizesItemsWhenLocked(): boolean;
        setUpdateBlockRender(): void;
        toggleTierVisiblity(): void;
        loadSynchronizedData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        toggleLockVisibility(): void;
        toggleUpgradesVisiblity(): void;
        linkToController(arg0: $BlockPos_): void;
        connectLinkedSelf(): boolean;
        isBeingUpgraded(): boolean;
        shouldShowTier(): boolean;
        setNotLinked(): void;
        shouldShowUpgrades(): boolean;
        shouldDropContents(): boolean;
        shouldShowLock(): boolean;
        getOpenersCounter(): $SophisticatedOpenersCounter;
        changeStorageSize(arg0: number, arg1: number): void;
        onInventoryInputOutputHandlerRefresh(): void;
        tryToAddToController(): void;
        removeFromController(): void;
        registerWithControllerOnLoad(): void;
        registerInventoryStackListeners(): void;
        updateEmptySlots(): void;
        addToController(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_): void;
        hasStorageData(): boolean;
        registerController(arg0: $ControllerBlockEntityBase): void;
        changeSlots(arg0: number): void;
        unregisterController(): void;
        unlinkFromController(): void;
        canBeLinked(): boolean;
        hasCustomName(): boolean;
        addToAdjacentController(): void;
        runOnController(arg0: $Level_, arg1: $Consumer_<$ControllerBlockEntityBase>): void;
        saveControllerPos(arg0: $CompoundTag_): void;
        loadControllerPos(arg0: $CompoundTag_): void;
        getStorageWrapper(): $IStorageWrapper;
        static UPDATE_BLOCK_RENDER_TAG: string;
        static ATTACHMENTS_NBT_KEY: string;
        static STORAGE_WRAPPER_TAG: string;
        get name(): $Component;
        get open(): boolean;
        get locked(): boolean;
        get displayName(): $Component;
        get storageBlockPos(): $BlockPos;
        get storageBlockLevel(): $Level;
        get linked(): boolean;
        set shouldBeOpen(value: boolean);
        get connectablePositions(): $Set<$BlockPos>;
        get openersCounter(): $SophisticatedOpenersCounter;
        get storageWrapper(): $IStorageWrapper;
    }
    export class $ICountDisplay {
    }
    export interface $ICountDisplay {
        toggleCountVisibility(): void;
        shouldShowCounts(): boolean;
        getSlotCounts(): $List<number>;
        get slotCounts(): $List<number>;
    }
}
