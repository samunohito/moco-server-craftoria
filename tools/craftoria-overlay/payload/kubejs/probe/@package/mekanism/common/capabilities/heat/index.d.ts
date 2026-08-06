import { $Direction_ } from "@package/net/minecraft/core";
import { $IMekanismHeatHandler, $HeatAPI$HeatTransfer, $IHeatHandler } from "@package/mekanism/api/heat";

declare module "@package/mekanism/common/capabilities/heat" {
    export class $ITileHeatHandler {
    }
    export interface $ITileHeatHandler extends $IMekanismHeatHandler {
        simulate(): $HeatAPI$HeatTransfer;
        simulateAdjacent(): number;
        getAdjacent(side: $Direction_): $IHeatHandler;
        getAmbientTemperature(side: $Direction_): number;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: $Direction_): number;
        simulateEnvironment(): number;
        updateHeatCapacitors(side: $Direction_): void;
    }
}
