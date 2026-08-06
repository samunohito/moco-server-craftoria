import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Consumer_, $LongConsumer_, $Predicate_ } from "@package/java/util/function";
import { $ObjectCollection, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $LongOpenHashSet, $LongIterator, $Long2ObjectOpenHashMap, $LongCollection, $LongSet, $Long2ObjectMap$Entry, $Long2ObjectFunction_, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $Collector, $Stream } from "@package/java/util/stream";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $Map_, $Map$Entry, $Set, $Collection_ } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/ca/teamdman/sfm/common/util" {
    export class $BlockPosSet extends $LongOpenHashSet {
        remove(arg0: $BlockPos_): boolean;
        add(arg0: $BlockPos_): boolean;
        static of(...arg0: $BlockPos_[]): $BlockPosSet;
        contains(arg0: $BlockPos_): boolean;
        static collector(): $Collector<$BlockPos, $BlockPosSet, $BlockPosSet>;
        blockPosIterator(): $BlockPosIterator;
        boundingBox(): $BoundingBox;
        addAllPositions(arg0: $Collection_<$BlockPos_>): void;
        removeIfPosition(arg0: $Predicate_<$BlockPos>): boolean;
        constructor(arg0: number[], arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Iterator<never>);
        constructor(arg0: $Iterator<never>, arg1: number);
        constructor(arg0: $LongIterator);
        constructor(arg0: $Collection_<$BlockPos_>);
        constructor(arg0: number[]);
        constructor(arg0: number[], arg1: number);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: $Collection_<number>, arg1: number);
        constructor();
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: $LongIterator, arg1: number);
        constructor(arg0: $LongCollection);
        constructor(arg0: $LongCollection, arg1: number);
    }
    export class $BlockPosMap<T> extends $Long2ObjectOpenHashMap<T> {
        put(arg0: $BlockPos_, arg1: number): number;
        containsKey(arg0: $BlockPos_): boolean;
        positions(): $BlockPosIterator;
        removeAllPositions(arg0: $BlockPosSet): void;
        getFromPosition(arg0: $BlockPos_): number;
        removePosition(arg0: $BlockPos_): number;
        entrySet(): $Set<$Map$Entry<number, T>>;
        constructor(arg0: $Map_<number, number>);
        constructor(arg0: $Long2ObjectMap<number>, arg1: number);
        constructor(arg0: $Long2ObjectMap<number>);
        constructor(arg0: number[], arg1: number[], arg2: number);
        constructor(arg0: number[], arg1: number[]);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Map_<number, number>, arg1: number);
    }
    export class $ChunkPosMap<T> {
        remove(arg0: $ChunkAccess): T;
        remove(arg0: $ChunkPos): T;
        remove(arg0: number): T;
        remove(arg0: $BlockPos_): T;
        size(): number;
        get(arg0: $ChunkPos): T;
        get(arg0: $ChunkAccess): T;
        get(arg0: number): T;
        get(arg0: $BlockPos_): T;
        put(arg0: number, arg1: T): T;
        values(): $ObjectCollection<T>;
        clear(): void;
        isEmpty(): boolean;
        entrySet(): $ObjectSet<$Long2ObjectMap$Entry<T>>;
        containsKey(arg0: number): boolean;
        computeIfAbsent(arg0: number, arg1: $Long2ObjectFunction_<T>): T;
        computeIfAbsent(arg0: $BlockPos_, arg1: $Long2ObjectFunction_<T>): T;
        computeIfAbsent(arg0: $ChunkPos, arg1: $Long2ObjectFunction_<T>): T;
        keySet(): $LongSet;
        constructor();
        get empty(): boolean;
    }
    export class $BlockPosIterator implements $Iterator<$BlockPos$MutableBlockPos>, $Iterable<$BlockPos$MutableBlockPos> {
        remove(): void;
        iterator(): $Iterator<$BlockPos$MutableBlockPos>;
        hasNext(): boolean;
        stream(): $Stream<$BlockPos$MutableBlockPos>;
        skip(arg0: number): number;
        forEachLong(arg0: $LongConsumer_): void;
        forEachRemaining(arg0: $Consumer_<$BlockPos$MutableBlockPos>): void;
        spliterator(): $Spliterator<$BlockPos$MutableBlockPos>;
        forEach(arg0: $Consumer_<$BlockPos$MutableBlockPos>): void;
        next(): $BlockPos$MutableBlockPos;
        constructor(arg0: $LongIterator);
        [Symbol.iterator](): Iterator<$BlockPos$MutableBlockPos>
    }
    export class $Unit extends $Enum<$Unit> {
        static values(): $Unit[];
        static valueOf(arg0: string): $Unit;
        static INSTANCE: $Unit;
    }
    /**
     * Values that may be interpreted as {@link $Unit}.
     */
    export type $Unit_ = "instance";
}
