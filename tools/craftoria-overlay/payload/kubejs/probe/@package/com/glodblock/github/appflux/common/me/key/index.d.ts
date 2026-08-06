import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $EnergyType_, $EnergyType } from "@package/com/glodblock/github/appflux/common/me/key/type";
import { $AEKey } from "@package/appeng/api/stacks";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as type from "@package/com/glodblock/github/appflux/common/me/key/type";

declare module "@package/com/glodblock/github/appflux/common/me/key" {
    export class $FluxKey extends $AEKey {
        static of(arg0: $EnergyType_): $FluxKey;
        getEnergyType(): $EnergyType;
        static CODEC: $Codec<$FluxKey>;
        static MAP_CODEC: $MapCodec<$FluxKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        get energyType(): $EnergyType;
    }
}
