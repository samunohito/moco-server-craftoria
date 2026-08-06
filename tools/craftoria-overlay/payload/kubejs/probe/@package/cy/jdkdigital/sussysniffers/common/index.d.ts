import { $ServerLevelAccessor } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/cy/jdkdigital/sussysniffers/common" {
    export class $SnifferVariant extends $Record {
        size(): number;
        static getVariant(arg0: $ServerLevelAccessor, arg1: $BlockPos_): $Holder<$SnifferVariant>;
        texture(): $ResourceLocation;
        static END_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static SCULK_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static CHERRY_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static NETHER_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static BEDROCK_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static DEFAULT_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static DARK_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static PURPLE_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static AZALEA_SNIFFER: $DeferredHolder<$SnifferVariant, $SnifferVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SnifferVariant>>;
        constructor(texture: $ResourceLocation_, size: number);
    }
    /**
     * Values that may be interpreted as {@link $SnifferVariant}.
     */
    export type $SnifferVariant_ = RegistryTypes.SussysniffersSnifferVariant | { texture?: $ResourceLocation_, size?: number,  } | [texture?: $ResourceLocation_, size?: number, ];
    export interface $SnifferVariant extends RegistryMarked<RegistryTypes.SussysniffersSnifferVariantTag, RegistryTypes.SussysniffersSnifferVariant> {}
}
