import { $Vocabulary } from "@package/org/antlr/v4/runtime";
import { $List_, $Set, $Collection_, $List } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/org/antlr/v4/runtime/misc" {
    export class $IntervalSet implements $IntSet {
        remove(arg0: number): void;
        size(): number;
        get(arg0: number): number;
        toString(arg0: boolean): string;
        /**
         * @deprecated
         */
        toString(arg0: string[]): string;
        toString(arg0: $Vocabulary): string;
        clear(): void;
        add(arg0: number): void;
        add(arg0: number, arg1: number): void;
        toArray(): number[];
        toList(): $List<number>;
        static of(arg0: number, arg1: number): $IntervalSet;
        static of(arg0: number): $IntervalSet;
        contains(arg0: number): boolean;
        addAll(arg0: $IntSet): $IntervalSet;
        toSet(): $Set<number>;
        complement(arg0: number, arg1: number): $IntervalSet;
        or(arg0: $IntSet): $IntervalSet;
        static or(arg0: $IntervalSet[]): $IntervalSet;
        static subtract(arg0: $IntervalSet, arg1: $IntervalSet): $IntervalSet;
        and(arg0: $IntSet): $IntervalSet;
        isNil(): boolean;
        isReadonly(): boolean;
        setReadonly(arg0: boolean): void;
        getIntervals(): $List<$Interval>;
        getMaxElement(): number;
        toIntegerList(): $IntegerList;
        getMinElement(): number;
        complement(arg0: $IntSet): $IntSet;
        subtract(arg0: $IntSet): $IntSet;
        static EMPTY_SET: $IntervalSet;
        static COMPLETE_CHAR_SET: $IntervalSet;
        constructor(...arg0: number[]);
        constructor(arg0: $IntervalSet);
        constructor(arg0: $List_<$Interval>);
        get nil(): boolean;
        get intervals(): $List<$Interval>;
        get maxElement(): number;
        get minElement(): number;
    }
    export class $IntegerList {
        size(): number;
        get(arg0: number): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: number): void;
        toArray(): number[];
        toCharArray(): string[];
        contains(arg0: number): boolean;
        addAll(arg0: number[]): void;
        addAll(arg0: $Collection_<number>): void;
        addAll(arg0: $IntegerList): void;
        set(arg0: number, arg1: number): number;
        sort(): void;
        trimToSize(): void;
        removeRange(arg0: number, arg1: number): void;
        binarySearch(arg0: number, arg1: number, arg2: number): number;
        binarySearch(arg0: number): number;
        removeAt(arg0: number): number;
        constructor(arg0: $Collection_<number>);
        constructor(arg0: $IntegerList);
        constructor(arg0: number);
        constructor();
        get empty(): boolean;
    }
    export class $Interval {
        length(): number;
        static of(arg0: number, arg1: number): $Interval;
        disjoint(arg0: $Interval): boolean;
        union(arg0: $Interval): $Interval;
        intersection(arg0: $Interval): $Interval;
        adjacent(arg0: $Interval): boolean;
        startsBeforeDisjoint(arg0: $Interval): boolean;
        startsAfterDisjoint(arg0: $Interval): boolean;
        startsBeforeNonDisjoint(arg0: $Interval): boolean;
        startsAfterNonDisjoint(arg0: $Interval): boolean;
        differenceNotProperlyContained(arg0: $Interval): $Interval;
        properlyContains(arg0: $Interval): boolean;
        startsAfter(arg0: $Interval): boolean;
        a: number;
        b: number;
        static INTERVAL_POOL_MAX_VALUE: number;
        static INVALID: $Interval;
        constructor(arg0: number, arg1: number);
    }
    export class $IntSet {
    }
    export interface $IntSet {
        remove(arg0: number): void;
        size(): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        add(arg0: number): void;
        toList(): $List<number>;
        contains(arg0: number): boolean;
        addAll(arg0: $IntSet): $IntSet;
        complement(arg0: $IntSet): $IntSet;
        or(arg0: $IntSet): $IntSet;
        subtract(arg0: $IntSet): $IntSet;
        and(arg0: $IntSet): $IntSet;
        isNil(): boolean;
        get nil(): boolean;
    }
}
