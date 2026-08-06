import { $SmartBrain, $BrainActivityGroup } from "@package/net/tslat/smartbrainlib/api/core";
import { $ExtendedSensor } from "@package/net/tslat/smartbrainlib/api/core/sensor";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SmartBrainSchedule } from "@package/net/tslat/smartbrainlib/api/core/schedule";
import { $List_, $Map, $Set, $List } from "@package/java/util";
import { $Activity } from "@package/net/minecraft/world/entity/schedule";
export * as core from "@package/net/tslat/smartbrainlib/api/core";

declare module "@package/net/tslat/smartbrainlib/api" {
    export class $SmartBrainOwner<T extends $LivingEntity> {
    }
    export interface $SmartBrainOwner<T extends $LivingEntity> {
        getSchedule(): $SmartBrainSchedule;
        getSensors(): $List<$ExtendedSensor<T>>;
        getScheduleIgnoringActivities(): $Set<$Activity>;
        handleAdditionalBrainSetup(arg0: $SmartBrain<T>): void;
        getCoreTasks(): $BrainActivityGroup<T>;
        getIdleTasks(): $BrainActivityGroup<T>;
        tickBrain(arg0: T): void;
        getActivityPriorities(): $List<$Activity>;
        getAlwaysRunningActivities(): $Set<$Activity>;
        getFightTasks(): $BrainActivityGroup<T>;
        getDefaultActivity(): $Activity;
        getAdditionalTasks(): $Map<$Activity, $BrainActivityGroup<T>>;
        get schedule(): $SmartBrainSchedule;
        get sensors(): $List<$ExtendedSensor<T>>;
        get scheduleIgnoringActivities(): $Set<$Activity>;
        get coreTasks(): $BrainActivityGroup<T>;
        get idleTasks(): $BrainActivityGroup<T>;
        get activityPriorities(): $List<$Activity>;
        get alwaysRunningActivities(): $Set<$Activity>;
        get fightTasks(): $BrainActivityGroup<T>;
        get defaultActivity(): $Activity;
        get additionalTasks(): $Map<$Activity, $BrainActivityGroup<T>>;
    }
    /**
     * Values that may be interpreted as {@link $SmartBrainOwner}.
     */
    export type $SmartBrainOwner_<T> = (() => $List_<$ExtendedSensor<T>>);
}
