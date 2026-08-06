import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $UpgradeHandler } from "@package/net/p3pp3rf1y/sophisticatedcore/upgrades";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SortBy_, $SortBy } from "@package/net/p3pp3rf1y/sophisticatedcore/common/gui";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $SettingsHandler } from "@package/net/p3pp3rf1y/sophisticatedcore/settings";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID } from "@package/java/util";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $InventoryHandler, $ITrackedContentsItemHandler } from "@package/net/p3pp3rf1y/sophisticatedcore/inventory";
import { $IFluidHandler$FluidAction_, $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ITintable } from "@package/net/p3pp3rf1y/sophisticatedcore/util";
import { $RenderInfo } from "@package/net/p3pp3rf1y/sophisticatedcore/renderdata";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/net/p3pp3rf1y/sophisticatedcore/api" {
    export class $IStorageFluidHandler {
    }
    export interface $IStorageFluidHandler extends $IFluidHandlerItem {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_, arg2: boolean): number;
        fill(arg0: $TagKey_<$Fluid>, arg1: number, arg2: $Fluid_, arg3: $IFluidHandler$FluidAction_, arg4: boolean): number;
        fill(arg0: $TagKey_<$Fluid>, arg1: number, arg2: $Fluid_, arg3: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_, arg2: boolean): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_, arg2: boolean): $FluidStack;
        drain(arg0: $TagKey_<$Fluid>, arg1: number, arg2: $IFluidHandler$FluidAction_, arg3: boolean): $FluidStack;
    }
    export class $IStorageWrapper {
        static SETTINGS_TAG: string;
    }
    export interface $IStorageWrapper extends $ITintable {
        sort(): void;
        getDisplayName(): $Component;
        getSortBy(): $SortBy;
        setSortBy(arg0: $SortBy_): void;
        getSettingsHandler(): $SettingsHandler;
        onInit(arg0: $Level_): void;
        getInventoryForInputOutput(): $ITrackedContentsItemHandler;
        getNumberOfSlotRows(): number;
        getWrappedStorageStack(): $ItemStack;
        setContentsChangeHandler(arg0: $Runnable_): void;
        onContentsNbtUpdated(): void;
        registerOnInventoryInputOutputHandlerRefreshListener(arg0: $Runnable_): void;
        setInventorySlotChangeHandler(arg0: $Runnable_): void;
        setUpgradeCachesInvalidatedHandler(arg0: $Runnable_): void;
        refreshInventoryForInputOutput(): void;
        getRenderInfo(): $RenderInfo;
        getEnergyStorage(): ($IEnergyStorage) | undefined;
        getFluidHandler(): ($IStorageFluidHandler) | undefined;
        removeOpenTabId(): void;
        setColumnsTaken(arg0: number, arg1: boolean): void;
        getColumnsTaken(): number;
        setOpenTabId(arg0: number): void;
        fillWithLoot(arg0: $Player): void;
        getOpenTabId(): (number) | undefined;
        isUpgradeRunnable(arg0: $ItemStack_): boolean;
        setPersistent(arg0: boolean): void;
        getInventoryHandler(): $InventoryHandler;
        getInventoryForUpgradeProcessing(): $ITrackedContentsItemHandler;
        getUpgradeHandler(): $UpgradeHandler;
        refreshInventoryForUpgradeProcessing(): void;
        getContentsUuid(): ($UUID) | undefined;
        getBaseStackSizeMultiplier(): number;
        getStorageType(): string;
        get displayName(): $Component;
        get settingsHandler(): $SettingsHandler;
        get inventoryForInputOutput(): $ITrackedContentsItemHandler;
        get numberOfSlotRows(): number;
        get wrappedStorageStack(): $ItemStack;
        set contentsChangeHandler(value: $Runnable_);
        set inventorySlotChangeHandler(value: $Runnable_);
        set upgradeCachesInvalidatedHandler(value: $Runnable_);
        get renderInfo(): $RenderInfo;
        get energyStorage(): ($IEnergyStorage) | undefined;
        get fluidHandler(): ($IStorageFluidHandler) | undefined;
        set persistent(value: boolean);
        get inventoryHandler(): $InventoryHandler;
        get inventoryForUpgradeProcessing(): $ITrackedContentsItemHandler;
        get upgradeHandler(): $UpgradeHandler;
        get contentsUuid(): ($UUID) | undefined;
        get baseStackSizeMultiplier(): number;
        get storageType(): string;
    }
}
