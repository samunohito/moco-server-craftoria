import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $Spliterator, $Iterator } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/twilightforest/util/iterators" {
    export class $RectangleLatticeIterator$TriangularLatticeConfig extends $Record {
        spacing(): number;
        zOffset(): number;
        static fromNBT(arg0: $CompoundTag_): $RectangleLatticeIterator$TriangularLatticeConfig;
        zSpacing(): number;
        xSpacing(): number;
        xOffset(): number;
        boundedGrid(arg0: $BoundingBox, arg1: number): $ZippedIterator<$BlockPos$MutableBlockPos>;
        static CODEC: $Codec<$RectangleLatticeIterator$TriangularLatticeConfig>;
        static DEFAULT: $RectangleLatticeIterator$TriangularLatticeConfig;
        constructor(spacing: number, xOffset: number, zOffset: number, xSpacing: number, zSpacing: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $RectangleLatticeIterator$TriangularLatticeConfig}.
     */
    export type $RectangleLatticeIterator$TriangularLatticeConfig_ = { spacing?: number, xSpacing?: number, zSpacing?: number, xOffset?: number, zOffset?: number,  } | [spacing?: number, xSpacing?: number, zSpacing?: number, xOffset?: number, zOffset?: number, ];
    export class $ZippedIterator<E> implements $Iterator<E>, $Iterable<E> {
        iterator(): $Iterator<E>;
        hasNext(): boolean;
        next(): E;
        static fromIterables<E>(arg0: $Iterable_<E>, arg1: $Iterable_<E>): $ZippedIterator<E>;
        remove(): void;
        forEachRemaining(arg0: $Consumer_<E>): void;
        spliterator(): $Spliterator<E>;
        forEach(arg0: $Consumer_<E>): void;
        constructor(arg0: $Iterator<E>, arg1: $Iterator<E>);
        [Symbol.iterator](): Iterator<E>
    }
}
