import { $Level_ } from "@package/net/minecraft/world/level";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedTankUpgrade$TankRenderInfo } from "@package/net/p3pp3rf1y/sophisticatedcore/upgrades";
import { $IStorageWrapper } from "@package/net/p3pp3rf1y/sophisticatedcore/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/p3pp3rf1y/sophisticatedcore/renderdata" {
    export class $UpgradeRenderDataType<T extends $IUpgradeRenderData> {
        getName(): string;
        cast(arg0: $IUpgradeRenderData_): (T) | undefined;
        deserialize(arg0: $CompoundTag_): T;
        constructor(arg0: string, arg1: $Class<T>, arg2: $Function_<$CompoundTag, T>);
        get name(): string;
    }
    export class $TankPosition extends $Enum<$TankPosition> implements $StringRepresentable {
        static values(): $TankPosition[];
        static valueOf(arg0: string): $TankPosition;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static LEFT: $TankPosition;
        static RIGHT: $TankPosition;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TankPosition}.
     */
    export type $TankPosition_ = "left" | "right";
    export class $RenderInfo {
        validate(arg0: $IStorageWrapper, arg1: $Level_): boolean;
        showsCountsAndFillRatios(): boolean;
        getUpgradeRenderData<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType<T>): (T) | undefined;
        getUpgradeRenderData(): $Map<$UpgradeRenderDataType<never>, $IUpgradeRenderData>;
        setBatteryRenderInfo(arg0: $IRenderedBatteryUpgrade$BatteryRenderInfo): void;
        setRenderUpdateChangeListener(arg0: $Consumer_<$RenderInfo>): void;
        removeUpgradeRenderData(arg0: $UpgradeRenderDataType<never>): void;
        setUpgradeRenderData<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType<T>, arg1: T): void;
        getTankRenderInfos(): $Map<$TankPosition, $IRenderedTankUpgrade$TankRenderInfo>;
        getItemDisplayRenderInfo(): $RenderInfo$ItemDisplayRenderInfo;
        getBatteryRenderInfo(): ($IRenderedBatteryUpgrade$BatteryRenderInfo) | undefined;
        getNbt(): $CompoundTag;
        refreshSlotCountsFillRatiosAndInfiniteSlots(arg0: $List_<number>, arg1: $List_<number>, arg2: $List_<number>): void;
        deserializeFrom(arg0: $CompoundTag_): void;
        refreshItemDisplayRenderInfo(arg0: $List_<$RenderInfo$DisplayItem>, arg1: $List_<number>, arg2: $List_<number>, arg3: $List_<number>, arg4: $List_<number>): void;
        getUpgradeItems(): $List<$ItemStack>;
        resetUpgradeInfo(arg0: boolean): void;
        setTankRenderInfo(arg0: $TankPosition_, arg1: $IRenderedTankUpgrade$TankRenderInfo): void;
        setUpgradeItems(arg0: $List_<$ItemStack_>): void;
        removeAllUpgradeRenderData(): void;
        /**
         * @deprecated
         */
        setDisplayItemsChangeListener(arg0: $Consumer_<$RenderInfo>): void;
        refreshDisplayItemsAndInaccessibleSlots(arg0: $List_<$RenderInfo$DisplayItem>, arg1: $List_<number>): void;
        set renderUpdateChangeListener(value: $Consumer_<$RenderInfo>);
        get tankRenderInfos(): $Map<$TankPosition, $IRenderedTankUpgrade$TankRenderInfo>;
        get itemDisplayRenderInfo(): $RenderInfo$ItemDisplayRenderInfo;
        get nbt(): $CompoundTag;
        set displayItemsChangeListener(value: $Consumer_<$RenderInfo>);
    }
    export class $RenderInfo$DisplayItem {
        getItem(): $ItemStack;
        getRotation(): number;
        getSlotIndex(): number;
        getDisplaySide(): $DisplaySide;
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: $DisplaySide);
        get item(): $ItemStack;
        get rotation(): number;
        get slotIndex(): number;
        get displaySide(): $DisplaySide;
    }
    export class $IUpgradeRenderData {
    }
    export interface $IUpgradeRenderData {
        serializeNBT(): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $IUpgradeRenderData}.
     */
    export type $IUpgradeRenderData_ = (() => $CompoundTag_);
    export class $RenderInfo$ItemDisplayRenderInfo {
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_): $RenderInfo$ItemDisplayRenderInfo;
        getInaccessibleSlots(): $List<number>;
        getDisplayItems(): $List<$RenderInfo$DisplayItem>;
        getDisplayItem(): ($RenderInfo$DisplayItem) | undefined;
        getSlotFillRatios(): $List<number>;
        getSlotCounts(): $List<number>;
        getInfiniteSlots(): $List<number>;
        static SLOT_FILL_RATIOS_TAG: string;
        static SLOT_COUNTS_TAG: string;
        constructor();
        get inaccessibleSlots(): $List<number>;
        get displayItems(): $List<$RenderInfo$DisplayItem>;
        get displayItem(): ($RenderInfo$DisplayItem) | undefined;
        get slotFillRatios(): $List<number>;
        get slotCounts(): $List<number>;
        get infiniteSlots(): $List<number>;
    }
}
