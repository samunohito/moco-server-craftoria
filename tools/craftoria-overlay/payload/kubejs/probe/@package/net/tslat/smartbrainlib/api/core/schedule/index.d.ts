import { $Consumer_ } from "@package/java/util/function";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $Activity, $Schedule, $Activity_, $Timeline } from "@package/net/minecraft/world/entity/schedule";

declare module "@package/net/tslat/smartbrainlib/api/core/schedule" {
    export class $SmartBrainSchedule extends $Schedule {
        tick(arg0: $LivingEntity): $Activity;
        scheduleTask(arg0: $LivingEntity, arg1: number, arg2: $Consumer_<$LivingEntity>): void;
        activityAt(arg0: number, arg1: $Activity_): $SmartBrainSchedule;
        doAt(arg0: number, arg1: $Consumer_<$LivingEntity>): $SmartBrainSchedule;
        clearSchedule(): void;
        timelines: $Map<$Activity, $Timeline>;
        static WORK_START_TIME: number;
        static VILLAGER_DEFAULT: $Schedule;
        static VILLAGER_BABY: $Schedule;
        static SIMPLE: $Schedule;
        static TOTAL_WORK_TIME: number;
        static EMPTY: $Schedule;
        constructor();
        constructor(arg0: $SmartBrainSchedule$Type_);
    }
    export class $SmartBrainSchedule$Type extends $Enum<$SmartBrainSchedule$Type> {
        static values(): $SmartBrainSchedule$Type[];
        static valueOf(arg0: string): $SmartBrainSchedule$Type;
        resolve(arg0: $LivingEntity): number;
        resolveDelay(arg0: $LivingEntity, arg1: number): number;
        static DAYTIME: $SmartBrainSchedule$Type;
        static AGE: $SmartBrainSchedule$Type;
    }
    /**
     * Values that may be interpreted as {@link $SmartBrainSchedule$Type}.
     */
    export type $SmartBrainSchedule$Type_ = "daytime" | "age";
}
