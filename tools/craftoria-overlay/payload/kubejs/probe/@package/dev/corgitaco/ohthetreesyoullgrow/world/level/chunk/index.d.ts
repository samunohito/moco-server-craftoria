import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $List } from "@package/java/util";

declare module "@package/dev/corgitaco/ohthetreesyoullgrow/world/level/chunk" {
    export class $RandomTickScheduler {
    }
    export interface $RandomTickScheduler {
        getScheduledRandomTicks(): $List<$BlockPos>;
        scheduleRandomTick(arg0: $BlockPos_): void;
        get scheduledRandomTicks(): $List<$BlockPos>;
    }
}
