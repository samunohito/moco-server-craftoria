import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $List } from "@package/java/util";

declare module "@package/corgitaco/corgilib/world/level" {
    export class $RandomTickScheduler {
    }
    export interface $RandomTickScheduler {
        getScheduledRandomTicks(): $List<$BlockPos>;
        scheduleRandomTick(arg0: $BlockPos_): void;
        get scheduledRandomTicks(): $List<$BlockPos>;
    }
}
