import { $Consumer_ } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IStorageWrapper } from "@package/net/p3pp3rf1y/sophisticatedcore/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Runnable_, $Class } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";

declare module "@package/net/p3pp3rf1y/sophisticatedcore/upgrades" {
    export class $IRenderedBatteryUpgrade$BatteryRenderInfo {
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_): $IRenderedBatteryUpgrade$BatteryRenderInfo;
        setChargeRatio(arg0: number): void;
        getChargeRatio(): number;
        constructor(arg0: number);
    }
    export class $UpgradeType<T extends $IUpgradeWrapper> {
        create(arg0: $IStorageWrapper, arg1: $ItemStack_, arg2: $Consumer_<$ItemStack>): T;
        constructor(arg0: $UpgradeType$IFactory<T>);
    }
    export class $UpgradeHandler extends $ItemStackHandler {
        copyTo(arg0: $UpgradeHandler): void;
        getWrappersThatImplementFromMainStorage<T>(arg0: $Class<T>): $List<T>;
        hasUpgrade<T extends $IUpgradeWrapper>(arg0: $UpgradeType<T>): boolean;
        refreshWrappersThatImplementAndTypeWrappers(): void;
        setRenderUpgradeItems(): void;
        removeRefreshCallback(): void;
        setPersistent(arg0: boolean): void;
        getTypeWrappers<T extends $IUpgradeWrapper>(arg0: $UpgradeType<T>): $List<T>;
        getWrappersThatImplement<T>(arg0: $Class<T>): $List<T>;
        getSlotWrappers(): $Map<number, $IUpgradeWrapper>;
        saveInventory(): void;
        increaseSize(arg0: number): void;
        setRefreshCallBack(arg0: $Runnable_): void;
        refreshUpgradeWrappers(): void;
        registerUpgradeDefaultsHandler<T extends $IUpgradeWrapper>(arg0: $Class<T>, arg1: $Consumer_<T>): void;
        getListOfWrappersThatImplement<T>(arg0: $Class<T>): $List<T>;
        static UPGRADE_INVENTORY_TAG: string;
        constructor(arg0: number, arg1: $IStorageWrapper, arg2: $CompoundTag_, arg3: $Runnable_, arg4: $Runnable_);
        set persistent(value: boolean);
        get slotWrappers(): $Map<number, $IUpgradeWrapper>;
        set refreshCallBack(value: $Runnable_);
    }
    export class $IRenderedTankUpgrade$TankRenderInfo {
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_): $IRenderedTankUpgrade$TankRenderInfo;
        setFluid(arg0: $FluidStack_): void;
        getFluid(): ($FluidStack) | undefined;
        setFillRatio(arg0: number): void;
        getFillRatio(): number;
        constructor();
        constructor(arg0: $FluidStack_ | null, arg1: number);
    }
    export class $IUpgradeWrapper {
    }
    export interface $IUpgradeWrapper {
        isEnabled(): boolean;
        setEnabled(arg0: boolean): void;
        onAdded(): void;
        hideSettingsTab(): boolean;
        canBeDisabled(): boolean;
        onBeforeRemoved(): void;
        getUpgradeStack(): $ItemStack;
        get upgradeStack(): $ItemStack;
    }
}
