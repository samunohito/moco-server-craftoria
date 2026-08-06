import { $Supplier_, $IntSupplier_, $LongSupplier_ } from "@package/java/util/function";
import { $Object2LongMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $MetricCategory_, $MetricCategory } from "@package/net/minecraft/util/profiling/metrics";
import { $Path_ } from "@package/java/nio/file";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $List, $Map_, $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
export * as jfr from "@package/net/minecraft/util/profiling/jfr";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $EmptyProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getEndTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getProfilerResults(): string;
        getNanoDuration(): number;
        getTickDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get profilerResults(): string;
        get nanoDuration(): number;
        get tickDuration(): number;
    }
    export class $ActiveProfiler implements $ProfileCollector {
        push(nameSupplier: $Supplier_<string>): void;
        push(name: string): void;
        /**
         * End section
         */
        pop(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        /**
         * End section
         */
        endTick(): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        popPush(name: string): void;
        getResults(): $ProfileResults;
        /**
         * End section
         */
        startTick(): void;
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        markForCharting(category: $MetricCategory_): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        incrementCounter(name: string): void;
        constructor(startTimeNano: $LongSupplier_, startTimeTicks: $IntSupplier_, warn: boolean);
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        push(nameSupplier: $Supplier_<string>): void;
        push(name: string): void;
        /**
         * End section
         */
        pop(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        /**
         * End section
         */
        endTick(): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        popPush(name: string): void;
        getResults(): $ProfileResults;
        /**
         * End section
         */
        startTick(): void;
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        markForCharting(category: $MetricCategory_): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        incrementCounter(name: string): void;
        static INSTANCE: $InactiveProfiler;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        constructor();
        get count(): number;
        get duration(): number;
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
    }
    export class $ProfilerFiller {
        static tee(first: $ProfilerFiller, second: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        push(entryId: string): void;
        push(entryIdSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
        /**
         * End section
         */
        endTick(): void;
        popPush(entryId: string): void;
        popPush(entryIdSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        startTick(): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(entryIdSupplier: $Supplier_<string>): void;
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(entryId: string): void;
        markForCharting(category: $MetricCategory_): void;
    }
    export class $ContinuousProfiler {
        isEnabled(): boolean;
        enable(): void;
        disable(): void;
        getFiller(): $ProfilerFiller;
        getResults(): $ProfileResults;
        constructor(realTime: $LongSupplier_, tickCount: $IntSupplier_);
        get enabled(): boolean;
        get filler(): $ProfilerFiller;
        get results(): $ProfileResults;
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        get count(): number;
        get duration(): number;
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
    }
    export class $SingleTickProfiler {
        endTick(): void;
        startTick(): $ProfilerFiller;
        static createTickProfiler(name: string): $SingleTickProfiler;
        static decorateFiller(profiler: $ProfilerFiller, singleTickProfiler: $SingleTickProfiler | null): $ProfilerFiller;
        constructor(realTime: $LongSupplier_, location: string, saveThreshold: number);
    }
    export class $ResultField implements $Comparable<$ResultField> {
        compareTo(arg0: $ResultField): number;
        getColor(): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(name: string, percentage: number, arg2: number, globalPercentage: number);
        get color(): number;
    }
    export class $FilledProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getTickDuration(): number;
        getEndTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getProfilerResults(): string;
        getNanoDuration(): number;
        constructor(entries: $Map_<string, $ProfilerPathEntry>, startTimeNano: number, arg2: number, startTimeTicks: number, endTimeNano: number);
        get tickDuration(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get profilerResults(): string;
        get nanoDuration(): number;
    }
    export class $ProfileResults {
        static demanglePath(path: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getNanoDuration(): number;
        getTickDuration(): number;
        getEndTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getProfilerResults(): string;
        get nanoDuration(): number;
        get tickDuration(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get profilerResults(): string;
    }
    export class $ProfileCollector {
    }
    export interface $ProfileCollector extends $ProfilerFiller {
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $FilledProfileResults$CounterCollector {
    }
}
