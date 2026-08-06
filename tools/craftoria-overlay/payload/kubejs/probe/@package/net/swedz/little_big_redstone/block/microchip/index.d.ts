import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/net/swedz/little_big_redstone/block/microchip" {
    export class $MicrochipWatcher {
    }
    export interface $MicrochipWatcher {
        getWatchedMicrochip(): $BlockPos;
        setWatchedMicrochip(arg0: $BlockPos_): void;
    }
}
