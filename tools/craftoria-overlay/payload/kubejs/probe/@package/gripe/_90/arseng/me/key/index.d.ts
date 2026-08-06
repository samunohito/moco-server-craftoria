import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AEKey } from "@package/appeng/api/stacks";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/gripe/_90/arseng/me/key" {
    export class $SourceKey extends $AEKey {
        static CODEC: $Codec<$AEKey>;
        static MAP_CODEC: $MapCodec<$AEKey>;
        static MAX_SOURCE: number;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static KEY: $SourceKey;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
    }
}
