import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/heat" {
    export class $IHeatCapacitor {
    }
    export interface $IHeatCapacitor extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        handleHeat(arg0: number): void;
        getInverseInsulation(): number;
        getInverseConduction(): number;
        isAmbientTemperature(): boolean;
        getHeat(): number;
        getTemperature(): number;
        setHeat(arg0: number): void;
        getHeatCapacity(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get inverseInsulation(): number;
        get inverseConduction(): number;
        get ambientTemperature(): boolean;
        get temperature(): number;
        get heatCapacity(): number;
    }
    export class $HeatAPI$HeatTransfer extends $Record {
        adjacentTransfer(): number;
        environmentTransfer(): number;
        constructor(adjacentTransfer: number, environmentTransfer: number);
    }
    /**
     * Values that may be interpreted as {@link $HeatAPI$HeatTransfer}.
     */
    export type $HeatAPI$HeatTransfer_ = { environmentTransfer?: number, adjacentTransfer?: number,  } | [environmentTransfer?: number, adjacentTransfer?: number, ];
    export class $IMekanismHeatHandler {
    }
    export interface $IMekanismHeatHandler extends $ISidedHeatHandler, $IContentsListener {
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
        getTotalTemperature(arg0: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getTotalHeatCapacity(arg0: $Direction_): number;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getTemperature(arg0: number, arg1: $Direction_): number;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        canHandleHeat(): boolean;
        getHeatCapacitors(arg0: $Direction_): $List<$IHeatCapacitor>;
    }
    export class $IHeatHandler {
    }
    export interface $IHeatHandler {
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getTotalInverseConduction(): number;
        getHeatCapacitorCount(): number;
        getTotalTemperature(): number;
        getInverseConduction(arg0: number): number;
        getTotalHeatCapacity(): number;
        getTemperature(arg0: number): number;
        getHeatCapacity(arg0: number): number;
        get totalInverseConduction(): number;
        get heatCapacitorCount(): number;
        get totalTemperature(): number;
        get totalHeatCapacity(): number;
    }
}
