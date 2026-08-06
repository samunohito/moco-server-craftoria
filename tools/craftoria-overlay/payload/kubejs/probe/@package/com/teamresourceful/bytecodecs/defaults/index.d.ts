import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Map_, $Map, $Collection, $Map$Entry, $Set } from "@package/java/util";
import { $ObjectEntryByteCodec, $ByteCodec } from "@package/com/teamresourceful/bytecodecs/base";

declare module "@package/com/teamresourceful/bytecodecs/defaults" {
    export class $MapCodec<K, V> extends $Record implements $ByteCodec<$Map<K, V>> {
        encode(arg0: $Map_<K, V>, arg1: $ByteBuf): void;
        codec(): $PairCodec<K, V>;
        dispatch<O>(arg0: $Function_<$Map<K, V>, $ByteCodec<O>>, arg1: $Function_<O, $Map<K, V>>): $ByteCodec<O>;
        map<R>(arg0: $Function_<$Map<K, V>, R>, arg1: $Function_<R, $Map<K, V>>): $ByteCodec<R>;
        optionalOf(): $ByteCodec<($Map<K, V>) | undefined>;
        optionalOf(arg0: $Supplier_<$Map<K, V>>): $ByteCodec<($Map<K, V>) | undefined>;
        optionalOf(arg0: $Map_<K, V>): $ByteCodec<($Map<K, V>) | undefined>;
        nullableFieldOf<O>(arg0: $Function_<O, $Map<K, V>>): $ObjectEntryByteCodec<O, $Map<K, V>>;
        nullableFieldOf<O>(arg0: $Map_<K, V>, arg1: $Function_<O, $Map<K, V>>): $ObjectEntryByteCodec<O, $Map<K, V>>;
        nullableFieldOf<O>(arg0: $Supplier_<$Map<K, V>>, arg1: $Function_<O, $Map<K, V>>): $ObjectEntryByteCodec<O, $Map<K, V>>;
        collectionOf<C extends $Collection<T>>(arg0: $Function_<number, C>): $ByteCodec<C>;
        mapDispatch<O>(arg0: $Function_<$Map<K, V>, $ByteCodec<O>>): $ByteCodec<$Map<$Map<K, V>, O>>;
        listOf(): $ByteCodec<$List<$Map<K, V>>>;
        optionalFieldOf<O>(arg0: $Supplier_<$Map<K, V>>, arg1: $Function_<O, ($Map<K, V>) | undefined>): $ObjectEntryByteCodec<O, ($Map<K, V>) | undefined>;
        optionalFieldOf<O>(arg0: $Map_<K, V>, arg1: $Function_<O, ($Map<K, V>) | undefined>): $ObjectEntryByteCodec<O, ($Map<K, V>) | undefined>;
        optionalFieldOf<O>(arg0: $Function_<O, ($Map<K, V>) | undefined>): $ObjectEntryByteCodec<O, ($Map<K, V>) | undefined>;
        setOf(): $ByteCodec<$Set<$Map<K, V>>>;
        linkedSetOf(): $ByteCodec<$Set<$Map<K, V>>>;
        fieldOf<O>(arg0: $Function_<O, $Map<K, V>>): $ObjectEntryByteCodec<O, $Map<K, V>>;
        nullableOf(): $ByteCodec<$Map<K, V>>;
        decode(arg0: $ByteBuf): $Map<K, V>;
        constructor(arg0: $ByteCodec<K>, arg1: $ByteCodec<V>);
        constructor(codec: $PairCodec_<K, V>);
    }
    /**
     * Values that may be interpreted as {@link $MapCodec}.
     */
    export type $MapCodec_<K, V> = { codec?: $PairCodec_<any, any>,  } | [codec?: $PairCodec_<any, any>, ];
    export class $PairCodec<K, V> extends $Record implements $ByteCodec<$Map$Entry<K, V>> {
        encode(arg0: $Map$Entry<K, V>, arg1: $ByteBuf): void;
        first(): $ByteCodec<K>;
        second(): $ByteCodec<V>;
        dispatch<O>(arg0: $Function_<$Map$Entry<K, V>, $ByteCodec<O>>, arg1: $Function_<O, $Map$Entry<K, V>>): $ByteCodec<O>;
        map<R>(arg0: $Function_<$Map$Entry<K, V>, R>, arg1: $Function_<R, $Map$Entry<K, V>>): $ByteCodec<R>;
        optionalOf(): $ByteCodec<($Map$Entry<K, V>) | undefined>;
        optionalOf(arg0: $Supplier_<$Map$Entry<K, V>>): $ByteCodec<($Map$Entry<K, V>) | undefined>;
        optionalOf(arg0: $Map$Entry<K, V>): $ByteCodec<($Map$Entry<K, V>) | undefined>;
        nullableFieldOf<O>(arg0: $Function_<O, $Map$Entry<K, V>>): $ObjectEntryByteCodec<O, $Map$Entry<K, V>>;
        nullableFieldOf<O>(arg0: $Map$Entry<K, V>, arg1: $Function_<O, $Map$Entry<K, V>>): $ObjectEntryByteCodec<O, $Map$Entry<K, V>>;
        nullableFieldOf<O>(arg0: $Supplier_<$Map$Entry<K, V>>, arg1: $Function_<O, $Map$Entry<K, V>>): $ObjectEntryByteCodec<O, $Map$Entry<K, V>>;
        collectionOf<C extends $Collection<T>>(arg0: $Function_<number, C>): $ByteCodec<C>;
        mapDispatch<O>(arg0: $Function_<$Map$Entry<K, V>, $ByteCodec<O>>): $ByteCodec<$Map<$Map$Entry<K, V>, O>>;
        listOf(): $ByteCodec<$List<$Map$Entry<K, V>>>;
        optionalFieldOf<O>(arg0: $Supplier_<$Map$Entry<K, V>>, arg1: $Function_<O, ($Map$Entry<K, V>) | undefined>): $ObjectEntryByteCodec<O, ($Map$Entry<K, V>) | undefined>;
        optionalFieldOf<O>(arg0: $Map$Entry<K, V>, arg1: $Function_<O, ($Map$Entry<K, V>) | undefined>): $ObjectEntryByteCodec<O, ($Map$Entry<K, V>) | undefined>;
        optionalFieldOf<O>(arg0: $Function_<O, ($Map$Entry<K, V>) | undefined>): $ObjectEntryByteCodec<O, ($Map$Entry<K, V>) | undefined>;
        setOf(): $ByteCodec<$Set<$Map$Entry<K, V>>>;
        linkedSetOf(): $ByteCodec<$Set<$Map$Entry<K, V>>>;
        fieldOf<O>(arg0: $Function_<O, $Map$Entry<K, V>>): $ObjectEntryByteCodec<O, $Map$Entry<K, V>>;
        nullableOf(): $ByteCodec<$Map$Entry<K, V>>;
        decode(arg0: $ByteBuf): $Map$Entry<K, V>;
        constructor(first: $ByteCodec<K>, second: $ByteCodec<V>);
    }
    /**
     * Values that may be interpreted as {@link $PairCodec}.
     */
    export type $PairCodec_<K, V> = { first?: $ByteCodec<any>, second?: $ByteCodec<any>,  } | [first?: $ByteCodec<any>, second?: $ByteCodec<any>, ];
}
