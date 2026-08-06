import { $Supplier_, $Function_, $Function, $BiConsumer_ } from "@package/java/util/function";
import { $Either } from "@package/com/teamresourceful/bytecodecs/utils";
import { $MapCodec, $PairCodec } from "@package/com/teamresourceful/bytecodecs/defaults";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $UUID, $List, $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/com/teamresourceful/bytecodecs/base" {
    export class $ObjectEntryByteCodec<O, T> extends $Record implements $WrappedByteCodec<T> {
        getter(): $Function<O, T>;
        mapEncode(arg0: O, arg1: $ByteBuf): void;
        codec(): $ByteCodec<T>;
        decode(arg0: $ByteBuf): T;
        encode(arg0: T, arg1: $ByteBuf): void;
        dispatch<O>(arg0: $Function_<T, $ByteCodec<O>>, arg1: $Function_<O, T>): $ByteCodec<O>;
        map<R>(arg0: $Function_<T, R>, arg1: $Function_<R, T>): $ByteCodec<R>;
        optionalOf(): $ByteCodec<(T) | undefined>;
        optionalOf(arg0: $Supplier_<T>): $ByteCodec<(T) | undefined>;
        optionalOf(arg0: T): $ByteCodec<(T) | undefined>;
        nullableFieldOf<O>(arg0: $Function_<O, T>): $ObjectEntryByteCodec<O, T>;
        nullableFieldOf<O>(arg0: T, arg1: $Function_<O, T>): $ObjectEntryByteCodec<O, T>;
        nullableFieldOf<O>(arg0: $Supplier_<T>, arg1: $Function_<O, T>): $ObjectEntryByteCodec<O, T>;
        collectionOf<C extends $Collection<T>>(arg0: $Function_<number, C>): $ByteCodec<C>;
        mapDispatch<O>(arg0: $Function_<T, $ByteCodec<O>>): $ByteCodec<$Map<T, O>>;
        listOf(): $ByteCodec<$List<T>>;
        optionalFieldOf<O>(arg0: $Supplier_<T>, arg1: $Function_<O, (T) | undefined>): $ObjectEntryByteCodec<O, (T) | undefined>;
        optionalFieldOf<O>(arg0: T, arg1: $Function_<O, (T) | undefined>): $ObjectEntryByteCodec<O, (T) | undefined>;
        optionalFieldOf<O>(arg0: $Function_<O, (T) | undefined>): $ObjectEntryByteCodec<O, (T) | undefined>;
        setOf(): $ByteCodec<$Set<T>>;
        linkedSetOf(): $ByteCodec<$Set<T>>;
        fieldOf<O>(arg0: $Function_<O, T>): $ObjectEntryByteCodec<O, T>;
        nullableOf(): $ByteCodec<T>;
        constructor(codec: $ByteCodec<T>, getter: $Function_<O, T>);
        get ter(): $Function<O, T>;
    }
    /**
     * Values that may be interpreted as {@link $ObjectEntryByteCodec}.
     */
    export type $ObjectEntryByteCodec_<O, T> = { getter?: $Function_<any, any>, codec?: $ByteCodec<any>,  } | [getter?: $Function_<any, any>, codec?: $ByteCodec<any>, ];
    export class $WrappedByteCodec<T> {
    }
    export interface $WrappedByteCodec<T> extends $ByteCodec<T> {
        decode(arg0: $ByteBuf): T;
        encode(arg0: T, arg1: $ByteBuf): void;
        codec(): $ByteCodec<T>;
    }
    /**
     * Values that may be interpreted as {@link $WrappedByteCodec}.
     */
    export type $WrappedByteCodec_<T> = (() => $ByteCodec<T>);
    export class $ByteCodec<T> {
        static unit<T>(arg0: T): $ByteCodec<T>;
        static unit<T>(arg0: $Supplier_<T>): $ByteCodec<T>;
        static choice<T>(arg0: $ByteCodec<T>, arg1: $ByteCodec<T>, arg2: $Function_<T, $Either<T, T>>): $ByteCodec<T>;
        static passthrough<T>(arg0: $BiConsumer_<$ByteBuf, T>, arg1: $Function_<$ByteBuf, T>): $ByteCodec<T>;
        static mapOf<K, V>(arg0: $ByteCodec<K>, arg1: $ByteCodec<V>): $MapCodec<K, V>;
        static either<F, S>(arg0: $ByteCodec<F>, arg1: $ByteCodec<S>): $ByteCodec<$Either<F, S>>;
        static ofEnum<T extends $Enum<T>>(arg0: $Class<T>): $ByteCodec<T>;
        static pairOf<K, V>(arg0: $ByteCodec<K>, arg1: $ByteCodec<V>): $PairCodec<K, V>;
        static FLOAT: $ByteCodec<number>;
        static VAR_INT: $ByteCodec<number>;
        static STRING_COMPONENT: $ByteCodec<string>;
        static CHAR: $ByteCodec<string>;
        static BOOLEAN: $ByteCodec<boolean>;
        static INT: $ByteCodec<number>;
        static SHORT: $ByteCodec<number>;
        static VAR_LONG: $ByteCodec<number>;
        static BYTE: $ByteCodec<number>;
        static STRING: $ByteCodec<string>;
        static DOUBLE: $ByteCodec<number>;
        static UUID: $ByteCodec<$UUID>;
        static LONG: $ByteCodec<number>;
    }
    export interface $ByteCodec<T> {
        dispatch<O>(arg0: $Function_<T, $ByteCodec<O>>, arg1: $Function_<O, T>): $ByteCodec<O>;
        decode(arg0: $ByteBuf): T;
        encode(arg0: T, arg1: $ByteBuf): void;
        map<R>(arg0: $Function_<T, R>, arg1: $Function_<R, T>): $ByteCodec<R>;
        optionalOf(): $ByteCodec<(T) | undefined>;
        optionalOf(arg0: $Supplier_<T>): $ByteCodec<(T) | undefined>;
        optionalOf(arg0: T): $ByteCodec<(T) | undefined>;
        nullableFieldOf<O>(arg0: $Function_<O, T>): $ObjectEntryByteCodec<O, T>;
        nullableFieldOf<O>(arg0: T, arg1: $Function_<O, T>): $ObjectEntryByteCodec<O, T>;
        nullableFieldOf<O>(arg0: $Supplier_<T>, arg1: $Function_<O, T>): $ObjectEntryByteCodec<O, T>;
        collectionOf<C extends $Collection<T>>(arg0: $Function_<number, C>): $ByteCodec<C>;
        mapDispatch<O>(arg0: $Function_<T, $ByteCodec<O>>): $ByteCodec<$Map<T, O>>;
        listOf(): $ByteCodec<$List<T>>;
        optionalFieldOf<O>(arg0: $Supplier_<T>, arg1: $Function_<O, (T) | undefined>): $ObjectEntryByteCodec<O, (T) | undefined>;
        optionalFieldOf<O>(arg0: T, arg1: $Function_<O, (T) | undefined>): $ObjectEntryByteCodec<O, (T) | undefined>;
        optionalFieldOf<O>(arg0: $Function_<O, (T) | undefined>): $ObjectEntryByteCodec<O, (T) | undefined>;
        setOf(): $ByteCodec<$Set<T>>;
        linkedSetOf(): $ByteCodec<$Set<T>>;
        fieldOf<O>(arg0: $Function_<O, T>): $ObjectEntryByteCodec<O, T>;
        nullableOf(): $ByteCodec<T>;
    }
}
