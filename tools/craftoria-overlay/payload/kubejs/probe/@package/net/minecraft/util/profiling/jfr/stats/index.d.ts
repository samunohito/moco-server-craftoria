import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ColumnPos_, $ColumnPos } from "@package/net/minecraft/server/level";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $RecordedEvent } from "@package/jdk/jfr/consumer";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/util/profiling/jfr/stats" {
    export class $FileIOStat extends $Record {
        bytes(): number;
        duration(): $Duration;
        path(): string;
        static summary(duration: $Duration_, stats: $List_<$FileIOStat_>): $FileIOStat$Summary;
        constructor(arg0: $Duration_, arg1: string | null, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $FileIOStat}.
     */
    export type $FileIOStat_ = { duration?: $Duration_, bytes?: number, path?: string,  } | [duration?: $Duration_, bytes?: number, path?: string, ];
    export class $TimedStat {
    }
    export interface $TimedStat {
        duration(): $Duration;
    }
    /**
     * Values that may be interpreted as {@link $TimedStat}.
     */
    export type $TimedStat_ = (() => $Duration_);
    export class $IoSummary<T> {
        getTotalCount(): number;
        getTotalSize(): number;
        getSizePerSecond(): number;
        getCountsPerSecond(): number;
        largestSizeContributors(): $List<$Pair<T, $IoSummary$CountAndSize>>;
        constructor(recordingDuration: $Duration_, entries: $List_<$Pair<T, $IoSummary$CountAndSize_>>);
        get totalCount(): number;
        get totalSize(): number;
        get sizePerSecond(): number;
        get countsPerSecond(): number;
    }
    export class $ChunkGenStat extends $Record implements $TimedStat {
        static from(event: $RecordedEvent): $ChunkGenStat;
        status(): $ChunkStatus;
        duration(): $Duration;
        level(): string;
        worldPos(): $ColumnPos;
        chunkPos(): $ChunkPos;
        constructor(arg0: $Duration_, arg1: $ChunkPos, arg2: $ColumnPos_, arg3: $ChunkStatus_, arg4: string);
    }
    /**
     * Values that may be interpreted as {@link $ChunkGenStat}.
     */
    export type $ChunkGenStat_ = { status?: $ChunkStatus_, chunkPos?: $ChunkPos, level?: string, duration?: $Duration_, worldPos?: $ColumnPos_,  } | [status?: $ChunkStatus_, chunkPos?: $ChunkPos, level?: string, duration?: $Duration_, worldPos?: $ColumnPos_, ];
    export class $GcHeapStat$Timing extends $Enum<$GcHeapStat$Timing> {
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Timing}.
     */
    export type $GcHeapStat$Timing_ = "before_gc" | "after_gc";
    export class $IoSummary$CountAndSize extends $Record {
        totalCount(): number;
        totalSize(): number;
        averageSize(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $IoSummary$CountAndSize}.
     */
    export type $IoSummary$CountAndSize_ = { totalCount?: number, totalSize?: number,  } | [totalCount?: number, totalSize?: number, ];
    export class $FileIOStat$Summary extends $Record {
        counts(): number;
        totalBytes(): number;
        timeSpentInIO(): $Duration;
        bytesPerSecond(): number;
        countsPerSecond(): number;
        topTenContributorsByTotalBytes(): $List<$Pair<string, number>>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Duration_, arg5: $List_<$Pair<string, number>>);
    }
    /**
     * Values that may be interpreted as {@link $FileIOStat$Summary}.
     */
    export type $FileIOStat$Summary_ = { bytesPerSecond?: number, countsPerSecond?: number, totalBytes?: number, topTenContributorsByTotalBytes?: $List_<$Pair<string, number>>, counts?: number, timeSpentInIO?: $Duration_,  } | [bytesPerSecond?: number, countsPerSecond?: number, totalBytes?: number, topTenContributorsByTotalBytes?: $List_<$Pair<string, number>>, counts?: number, timeSpentInIO?: $Duration_, ];
    export class $TimedStatSummary<T extends $TimedStat> extends $Record {
        count(): number;
        static summary<T extends $TimedStat>(stats: $List_<T>): $TimedStatSummary<T>;
        totalDuration(): $Duration;
        percentilesNanos(): $Map<number, number>;
        secondSlowest(): T;
        fastest(): T;
        slowest(): T;
        constructor(arg0: T, arg1: T, arg2: T | null, arg3: number, arg4: $Map_<number, number>, arg5: $Duration_);
    }
    /**
     * Values that may be interpreted as {@link $TimedStatSummary}.
     */
    export type $TimedStatSummary_<T> = { fastest?: $TimedStat_, slowest?: $TimedStat_, totalDuration?: $Duration_, secondSlowest?: $TimedStat_, percentilesNanos?: $Map_<number, number>, count?: number,  } | [fastest?: $TimedStat_, slowest?: $TimedStat_, totalDuration?: $Duration_, secondSlowest?: $TimedStat_, percentilesNanos?: $Map_<number, number>, count?: number, ];
    export class $ThreadAllocationStat extends $Record {
        static from(event: $RecordedEvent): $ThreadAllocationStat;
        timestamp(): $Instant;
        threadName(): string;
        static summary(stats: $List_<$ThreadAllocationStat_>): $ThreadAllocationStat$Summary;
        totalBytes(): number;
        constructor(arg0: $Instant, arg1: string, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $ThreadAllocationStat}.
     */
    export type $ThreadAllocationStat_ = { timestamp?: $Instant, threadName?: string, totalBytes?: number,  } | [timestamp?: $Instant, threadName?: string, totalBytes?: number, ];
    export class $TickTimeStat extends $Record {
        static from(event: $RecordedEvent): $TickTimeStat;
        timestamp(): $Instant;
        currentAverage(): $Duration;
        constructor(arg0: $Instant, arg1: $Duration_);
    }
    /**
     * Values that may be interpreted as {@link $TickTimeStat}.
     */
    export type $TickTimeStat_ = { currentAverage?: $Duration_, timestamp?: $Instant,  } | [currentAverage?: $Duration_, timestamp?: $Instant, ];
    export class $GcHeapStat$Summary extends $Record {
        duration(): $Duration;
        gcTotalDuration(): $Duration;
        allocationRateBytesPerSecond(): number;
        gcOverHead(): number;
        totalGCs(): number;
        constructor(arg0: $Duration_, arg1: $Duration_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Summary}.
     */
    export type $GcHeapStat$Summary_ = { allocationRateBytesPerSecond?: number, gcTotalDuration?: $Duration_, duration?: $Duration_, totalGCs?: number,  } | [allocationRateBytesPerSecond?: number, gcTotalDuration?: $Duration_, duration?: $Duration_, totalGCs?: number, ];
    export class $GcHeapStat extends $Record {
        static from(event: $RecordedEvent): $GcHeapStat;
        timestamp(): $Instant;
        timing(): $GcHeapStat$Timing;
        static summary(duration: $Duration_, stats: $List_<$GcHeapStat_>, gcTotalDuration: $Duration_, totalGCs: number): $GcHeapStat$Summary;
        heapUsed(): number;
        constructor(arg0: $Instant, arg1: number, arg2: $GcHeapStat$Timing_);
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat}.
     */
    export type $GcHeapStat_ = { timestamp?: $Instant, timing?: $GcHeapStat$Timing_, heapUsed?: number,  } | [timestamp?: $Instant, timing?: $GcHeapStat$Timing_, heapUsed?: number, ];
    export class $ChunkIdentification extends $Record {
        x(): number;
        static from(event: $RecordedEvent): $ChunkIdentification;
        z(): number;
        level(): string;
        dimension(): string;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkIdentification}.
     */
    export type $ChunkIdentification_ = { x?: number, dimension?: string, level?: string, z?: number,  } | [x?: number, dimension?: string, level?: string, z?: number, ];
    export class $CpuLoadStat extends $Record {
        static from(event: $RecordedEvent): $CpuLoadStat;
        system(): number;
        jvm(): number;
        userJvm(): number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $CpuLoadStat}.
     */
    export type $CpuLoadStat_ = { userJvm?: number, jvm?: number, system?: number,  } | [userJvm?: number, jvm?: number, system?: number, ];
    export class $PacketIdentification extends $Record {
        static from(event: $RecordedEvent): $PacketIdentification;
        direction(): string;
        packetId(): string;
        protocolId(): string;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $PacketIdentification}.
     */
    export type $PacketIdentification_ = { direction?: string, protocolId?: string, packetId?: string,  } | [direction?: string, protocolId?: string, packetId?: string, ];
    export class $ThreadAllocationStat$Summary extends $Record {
        allocationsPerSecondByThread(): $Map<string, number>;
        constructor(arg0: $Map_<string, number>);
    }
    /**
     * Values that may be interpreted as {@link $ThreadAllocationStat$Summary}.
     */
    export type $ThreadAllocationStat$Summary_ = { allocationsPerSecondByThread?: $Map_<string, number>,  } | [allocationsPerSecondByThread?: $Map_<string, number>, ];
}
