import { $BlockGetter, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/net/blay09/mods/farmingforblockheads/mixin" {
    export class $FarmBlockAccessor {
        static callShouldMaintainFarmland(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        static callIsNearWater(arg0: $LevelReader, arg1: $BlockPos_): boolean;
    }
    export interface $FarmBlockAccessor {
    }
}
