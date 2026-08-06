import { $MapCodec_, $DynamicOps, $Codec_ } from "@package/com/mojang/serialization";
import { $Tag_ } from "@package/net/minecraft/nbt";

declare module "@package/dev/compactmods/machines/mixin" {
    export class $CodecNbtFunctions {
    }
    export interface $CodecNbtFunctions {
        store<T>(arg0: $MapCodec_<T>, arg1: T): void;
        store<T>(arg0: string, arg1: $Codec_<T>, arg2: $DynamicOps<$Tag_>, arg3: T): void;
        store<T>(arg0: $MapCodec_<T>, arg1: $DynamicOps<$Tag_>, arg2: T): void;
        store<T>(arg0: string, arg1: $Codec_<T>, arg2: T): void;
        read<T>(arg0: string, arg1: $Codec_<T>): (T) | undefined;
        read<T>(arg0: string, arg1: $Codec_<T>, arg2: $DynamicOps<$Tag_>): (T) | undefined;
        read<T>(arg0: $MapCodec_<T>): (T) | undefined;
        read<T>(arg0: $MapCodec_<T>, arg1: $DynamicOps<$Tag_>): (T) | undefined;
        storeNullable<T>(arg0: string, arg1: $Codec_<T>, arg2: $DynamicOps<$Tag_>, arg3: T | null): void;
        storeNullable<T>(arg0: string, arg1: $Codec_<T>, arg2: T | null): void;
    }
}
