import { $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $WeightedRandomListAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/util";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/util/random" {
    export class $WeightedEntry$IntrusiveBase implements $WeightedEntry {
        getWeight(): $Weight;
        constructor(weight: number);
        constructor(weight: $Weight);
        get weight(): $Weight;
    }
    export class $SimpleWeightedRandomList<E> extends $WeightedRandomList<$WeightedEntry$Wrapper<E>> {
        static builder<E>(): $SimpleWeightedRandomList$Builder<E>;
        static single<E>(data: E): $SimpleWeightedRandomList<E>;
        static empty<E>(): $SimpleWeightedRandomList<E>;
        static wrappedCodec<E>(elementCodec: $Codec_<E>): $Codec<$SimpleWeightedRandomList<E>>;
        static wrappedCodecAllowingEmpty<E>(elementCodec: $Codec_<E>): $Codec<$SimpleWeightedRandomList<E>>;
        getRandomValue(random: $RandomSource): ($WeightedEntry$Wrapper<E>) | undefined;
        totalWeight: number;
    }
    export class $WeightedEntry {
        static wrap<T>(data: T, weight: number): $WeightedEntry$Wrapper<T>;
    }
    export interface $WeightedEntry {
        getWeight(): $Weight;
        get weight(): $Weight;
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry}.
     */
    export type $WeightedEntry_ = (() => $Weight);
    export class $SimpleWeightedRandomList$Builder<E> {
        add(data: E, weight: number): $SimpleWeightedRandomList$Builder<E>;
        add(data: E): $SimpleWeightedRandomList$Builder<E>;
        build(): $SimpleWeightedRandomList<E>;
        constructor();
    }
    export class $WeightedRandomList<E extends $WeightedEntry> implements $WeightedRandomListAccessor {
        isEmpty(): boolean;
        static create<E extends $WeightedEntry>(...items: E[]): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(items: $List_<E>): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(): $WeightedRandomList<E>;
        unwrap(): $List<E>;
        getRandom(random: $RandomSource): (E) | undefined;
        static codec<E extends $WeightedEntry>(elementCodec: $Codec_<E>): $Codec<$WeightedRandomList<E>>;
        bumblezone$getTotalWeight(): number;
        totalWeight: number;
        get empty(): boolean;
    }
    export class $Weight {
        static of(weight: number): $Weight;
        asInt(): number;
        static CODEC: $Codec<$Weight>;
    }
    export class $WeightedEntry$Wrapper<T> extends $Record implements $WeightedEntry {
        data(): T;
        weight(): $Weight;
        getWeight(): $Weight;
        static codec<E>(elementCodec: $Codec_<E>): $Codec<$WeightedEntry$Wrapper<E>>;
        constructor(data: T, weight: $Weight);
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry$Wrapper}.
     */
    export type $WeightedEntry$Wrapper_<T> = { weight?: $Weight, data?: any,  } | [weight?: $Weight, data?: any, ];
    export class $WeightedRandom {
        static getRandomItem<T extends $WeightedEntry>(random: $RandomSource, entries: $List_<T>): (T) | undefined;
        static getRandomItem<T extends $WeightedEntry>(random: $RandomSource, entries: $List_<T>, totalWeight: number): (T) | undefined;
        static getWeightedItem<T extends $WeightedEntry>(entries: $List_<T>, weightedIndex: number): (T) | undefined;
        static getTotalWeight(entries: $List_<$WeightedEntry_>): number;
    }
}
