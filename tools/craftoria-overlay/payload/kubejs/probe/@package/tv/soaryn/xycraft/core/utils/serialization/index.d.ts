import { $Supplier_, $Function_, $BiFunction_, $IntFunction_ } from "@package/java/util/function";
import { $Reference } from "@package/tv/soaryn/xycraft/core/utils/value";
import { $Function5_, $Function4_, $Function3_, $Either, $Function8_, $Function7_, $Function6_ } from "@package/com/mojang/datafixers/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Class } from "@package/java/lang";
import { $Map, $Collection } from "@package/java/util";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/tv/soaryn/xycraft/core/utils/serialization" {
    export class $BinarySerializer<T> {
        static of<T>(arg0: $BinaryWriter_<T>, arg1: $BinaryReader_<T>): $BinarySerializer<T>;
        static of<TSerializedType>(arg0: $StreamCodec_<$RegistryFriendlyByteBuf, TSerializedType>): $BinarySerializer<TSerializedType>;
        static optionalOf<T>(arg0: $BinarySerializer<T>): $BinarySerializer<(T) | undefined>;
        static ofType<T, T1, T2, T3, T4, T5>(arg0: $Function5_<T1, T2, T3, T4, T5, T>, arg1: $Function_<T, T1>, arg2: $BinarySerializer<T1>, arg3: $Function_<T, T2>, arg4: $BinarySerializer<T2>, arg5: $Function_<T, T3>, arg6: $BinarySerializer<T3>, arg7: $Function_<T, T4>, arg8: $BinarySerializer<T4>, arg9: $Function_<T, T5>, arg10: $BinarySerializer<T5>): $BinarySerializer<T>;
        static ofType<T, T1, T2, T3, T4>(arg0: $Function4_<T1, T2, T3, T4, T>, arg1: $Function_<T, T1>, arg2: $BinarySerializer<T1>, arg3: $Function_<T, T2>, arg4: $BinarySerializer<T2>, arg5: $Function_<T, T3>, arg6: $BinarySerializer<T3>, arg7: $Function_<T, T4>, arg8: $BinarySerializer<T4>): $BinarySerializer<T>;
        static ofType<T, T1, T2, T3>(arg0: $Function3_<T1, T2, T3, T>, arg1: $Function_<T, T1>, arg2: $BinarySerializer<T1>, arg3: $Function_<T, T2>, arg4: $BinarySerializer<T2>, arg5: $Function_<T, T3>, arg6: $BinarySerializer<T3>): $BinarySerializer<T>;
        static ofType<T, T1>(arg0: $Function_<T1, T>, arg1: $Function_<T, T1>, arg2: $BinarySerializer<T1>): $BinarySerializer<T>;
        static ofType<T>(arg0: $Supplier_<T>): $BinarySerializer<T>;
        static ofType<T, T1, T2, T3, T4, T5, T6, T7>(arg0: $Function7_<T1, T2, T3, T4, T5, T6, T7, T>, arg1: $Function_<T, T1>, arg2: $BinarySerializer<T1>, arg3: $Function_<T, T2>, arg4: $BinarySerializer<T2>, arg5: $Function_<T, T3>, arg6: $BinarySerializer<T3>, arg7: $Function_<T, T4>, arg8: $BinarySerializer<T4>, arg9: $Function_<T, T5>, arg10: $BinarySerializer<T5>, arg11: $Function_<T, T6>, arg12: $BinarySerializer<T6>, arg13: $Function_<T, T7>, arg14: $BinarySerializer<T7>): $BinarySerializer<T>;
        static ofType<T, T1, T2, T3, T4, T5, T6>(arg0: $Function6_<T1, T2, T3, T4, T5, T6, T>, arg1: $Function_<T, T1>, arg2: $BinarySerializer<T1>, arg3: $Function_<T, T2>, arg4: $BinarySerializer<T2>, arg5: $Function_<T, T3>, arg6: $BinarySerializer<T3>, arg7: $Function_<T, T4>, arg8: $BinarySerializer<T4>, arg9: $Function_<T, T5>, arg10: $BinarySerializer<T5>, arg11: $Function_<T, T6>, arg12: $BinarySerializer<T6>): $BinarySerializer<T>;
        static ofType<T, T1, T2>(arg0: $BiFunction_<T1, T2, T>, arg1: $Function_<T, T1>, arg2: $BinarySerializer<T1>, arg3: $Function_<T, T2>, arg4: $BinarySerializer<T2>): $BinarySerializer<T>;
        static ofType<T, T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, T>, arg1: $Function_<T, T1>, arg2: $BinarySerializer<T1>, arg3: $Function_<T, T2>, arg4: $BinarySerializer<T2>, arg5: $Function_<T, T3>, arg6: $BinarySerializer<T3>, arg7: $Function_<T, T4>, arg8: $BinarySerializer<T4>, arg9: $Function_<T, T5>, arg10: $BinarySerializer<T5>, arg11: $Function_<T, T6>, arg12: $BinarySerializer<T6>, arg13: $Function_<T, T7>, arg14: $BinarySerializer<T7>, arg15: $Function_<T, T8>, arg16: $BinarySerializer<T8>): $BinarySerializer<T>;
        static ofArray<T>(arg0: $IntFunction_<T[]>, arg1: $BinarySerializer<T>): $BinarySerializer<T[]>;
        static placeholder<T>(): $BinarySerializer<T>;
        static eitherOf<LEFT, RIGHT>(arg0: $BinarySerializer<LEFT>, arg1: $BinarySerializer<RIGHT>): $BinarySerializer<$Either<LEFT, RIGHT>>;
        static ofMap<M extends $Map<K, V>, K, V>(arg0: $Supplier_<M>, arg1: $BinarySerializer<K>, arg2: $BinarySerializer<V>): $BinarySerializer<M>;
        static ofReference<T>(arg0: $BinarySerializer<T>): $BinarySerializer<$Reference<T>>;
        static ofCollection<T extends $Collection<V>, V>(arg0: $Supplier_<T>, arg1: $BinarySerializer<V>): $BinarySerializer<T>;
        static ofEnum<T extends $Enum<T>>(arg0: $Class<T>): $BinarySerializer<T>;
    }
    export interface $BinarySerializer<T> extends $BinaryWriter<T>, $BinaryReader<T> {
        map<V>(arg0: $Function_<V, T>, arg1: $Function_<T, V>): $BinarySerializer<V>;
        nullable(): $BinarySerializer<T>;
        asStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    export class $BinaryWriter<T> {
    }
    export interface $BinaryWriter<T> {
        serialize(arg0: $RegistryFriendlyByteBuf, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BinaryWriter}.
     */
    export type $BinaryWriter_<T> = ((arg0: $RegistryFriendlyByteBuf, arg1: T) => void);
    export class $BinaryReader<T> {
    }
    export interface $BinaryReader<T> {
        deserialize(arg0: $RegistryFriendlyByteBuf): T;
    }
    /**
     * Values that may be interpreted as {@link $BinaryReader}.
     */
    export type $BinaryReader_<T> = ((arg0: $RegistryFriendlyByteBuf) => T);
}
