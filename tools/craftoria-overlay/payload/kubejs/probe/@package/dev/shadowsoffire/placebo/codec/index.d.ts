import { $Supplier_, $Function_, $Consumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $MapCodec, $Lifecycle, $DynamicOps, $Decoder, $Encoder, $Decoder$Terminal, $Codec_, $Dynamic, $Decoder$Simple, $Codec, $Codec$ResultFunction, $Decoder$Boxed, $DataResult } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/dev/shadowsoffire/placebo/codec" {
    export class $CodecMap<V extends $CodecProvider<V>> implements $Codec<V> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<V, T>>;
        encode<T>(arg0: V, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        getValue(arg0: $ResourceLocation_): $Codec<V>;
        isEmpty(): boolean;
        getKey(arg0: $Codec_<never>): $ResourceLocation;
        register(arg0: $ResourceLocation_, arg1: $Codec_<V>): void;
        containsKey(arg0: $ResourceLocation_): boolean;
        getDefaultCodec(): $Codec<V>;
        setDefaultCodec(arg0: $Codec_<V>): void;
        dispatch<E>(arg0: string, arg1: $Function_<E, V>, arg2: $Function_<V, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<V, $DataResult<V>>): $Codec<V>;
        orElse(arg0: $UnaryOperator_<string>, arg1: V): $Codec<V>;
        orElse(arg0: V): $Codec<V>;
        orElse(arg0: $Consumer_<string>, arg1: V): $Codec<V>;
        orElseGet(arg0: $Supplier_<V>): $Codec<V>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<V>): $Codec<V>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<V>): $Codec<V>;
        listOf(arg0: number, arg1: number): $Codec<$List<V>>;
        listOf(): $Codec<$List<V>>;
        comapFlatMap<S>(arg0: $Function_<V, $DataResult<S>>, arg1: $Function_<S, V>): $Codec<S>;
        stable(): $Codec<V>;
        sizeLimitedListOf(arg0: number): $Codec<$List<V>>;
        flatComapMap<S>(arg0: $Function_<V, S>, arg1: $Function_<S, $DataResult<V>>): $Codec<S>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, V>, arg2: $Function_<V, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $MapCodec<E>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: V, arg3: $Lifecycle): $MapCodec<V>;
        optionalFieldOf(arg0: string, arg1: V, arg2: $Lifecycle): $MapCodec<V>;
        optionalFieldOf(arg0: string, arg1: V): $MapCodec<V>;
        optionalFieldOf(arg0: string): $MapCodec<(V) | undefined>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<V>>, arg2: $Function_<V, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchStable<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $Codec<E>;
        lenientOptionalFieldOf(arg0: string, arg1: V, arg2: $Lifecycle): $MapCodec<V>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(V) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: V): $MapCodec<V>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: V, arg3: $Lifecycle): $MapCodec<V>;
        xmap<S>(arg0: $Function_<V, S>, arg1: $Function_<S, V>): $Codec<S>;
        mapResult(arg0: $Codec$ResultFunction<V>): $Codec<V>;
        deprecated(arg0: number): $Codec<V>;
        fieldOf(arg0: string): $MapCodec<V>;
        flatXmap<S>(arg0: $Function_<V, $DataResult<S>>, arg1: $Function_<S, $DataResult<V>>): $Codec<S>;
        comap<B>(arg0: $Function_<B, V>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<V>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: V): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<V, T>>;
        map<B>(arg0: $Function_<V, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<V, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<V>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<V>;
        boxed(): $Decoder$Boxed<V>;
        terminal(): $Decoder$Terminal<V>;
        simple(): $Decoder$Simple<V>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<V>;
        withLifecycle(arg0: $Lifecycle): $Encoder<V>;
        constructor(arg0: string);
    }
    export class $CodecProvider<R> {
    }
    export interface $CodecProvider<R> {
        getCodec(): $Codec<R>;
        get codec(): $Codec<R>;
    }
    /**
     * Values that may be interpreted as {@link $CodecProvider}.
     */
    export type $CodecProvider_<R> = (() => $Codec_<R>);
}
