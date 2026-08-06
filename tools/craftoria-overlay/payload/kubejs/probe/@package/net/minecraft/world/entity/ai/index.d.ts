import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType, $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $BrainAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Schedule, $Activity_, $Activity, $Schedule_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $MemoryStatus, $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object } from "@package/java/lang";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as util from "@package/net/minecraft/world/entity/ai/util";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain<E extends $LivingEntity> implements $BrainAccessor<any> {
        static provider<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Brain$Provider<E>;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: U | null): void;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: (U) | undefined): void;
        isActive(activity: $Activity_): boolean;
        setMemoryInternal<U>(memoryType: $MemoryModuleType_<U>, memory: ($ExpirableValue<never>) | undefined): void;
        addActivityAndRemoveMemoryWhenStopped(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>, memoryType: $MemoryModuleType_<never>): void;
        tick(level: $ServerLevel, entity: $Object): void;
        getSchedule(): $Schedule;
        removeAllBehaviors(): void;
        hasMemoryValue(type: $MemoryModuleType_<never>): boolean;
        getMemory<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        stopAll(level: $ServerLevel, entity: $Object): void;
        clearMemories(): void;
        serializeStart<T>(ops: $DynamicOps<T>): $DataResult<T>;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        setMemoryWithExpiry<U>(memoryType: $MemoryModuleType_<U>, memory: U, timeToLive: number): void;
        setActiveActivityToFirstValid(activities: $List_<$Activity_>): void;
        setCoreActivities(newActivities: $Set_<$Activity_>): void;
        addActivity(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>): void;
        addActivity(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>): void;
        setDefaultActivity(activity: $Activity_): void;
        useDefaultActivity(): void;
        setActiveActivityIfPossible(activity: $Activity_): void;
        getTimeUntilExpiry<U>(memoryType: $MemoryModuleType_<U>): number;
        copyWithoutBehaviors(): $Brain<$Object>;
        addActivityWithConditions(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, memoryStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>): void;
        updateActivityFromSchedule(dayTime: number, arg1: number): void;
        isMemoryValue<U>(memoryType: $MemoryModuleType_<U>, memory: U): boolean;
        eraseMemory<U>(type: $MemoryModuleType_<U>): void;
        checkMemory(memoryType: $MemoryModuleType_<never>, memoryStatus: $MemoryStatus_): boolean;
        handler$hhl000$spectrum$slowDownBrainTicks(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $CallbackInfo): void;
        addActivityAndRemoveMemoriesWhenStopped(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, memorieStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>, memoryTypes: $Set_<$MemoryModuleType_<never>>): void;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        activityRequirementsAreMet(activity: $Activity_): boolean;
        forgetOutdatedMemories(): void;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<$BehaviorControl<$Object>>;
        setSchedule(newSchedule: $Schedule_): void;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        static codec<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Codec<$Brain<E>>;
        getMemoryInternal<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        setActiveActivity(activity: $Activity_): void;
        getAvailableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
        getSensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        activityMemoriesToEraseWhenStopped: $Map<$Activity, $Set<$MemoryModuleType<never>>>;
        sensors: $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        coreActivities: $Set<$Activity>;
        activeActivities: $Set<$Activity>;
        memories: $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        availableBehaviorsByPriority: $Map<number, $Map<$Activity, $Set<$BehaviorControl<$Object>>>>;
        activityRequirements: $Map<$Activity, $Set<$Pair<$MemoryModuleType<never>, $MemoryStatus>>>;
        constructor(memoryModuleTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<$Object>>>, memoryValues: $ImmutableList<$Brain$MemoryValue<never>>, codec: $Supplier_<$Codec<$Brain<$Object>>>);
        set activeActivityToFirstValid(value: $List_<$Activity_>);
        set defaultActivity(value: $Activity_);
        set activeActivityIfPossible(value: $Activity_);
        get runningBehaviors(): $List<$BehaviorControl<$Object>>;
        get activeNonCoreActivity(): ($Activity) | undefined;
        set activeActivity(value: $Activity_);
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(ops: $Dynamic<never>): $Brain<E>;
        constructor(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>);
    }
}
