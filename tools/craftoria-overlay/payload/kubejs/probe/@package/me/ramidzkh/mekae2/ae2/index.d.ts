import { $ChemicalStack } from "@package/mekanism/api/chemical";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AEKey } from "@package/appeng/api/stacks";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/me/ramidzkh/mekae2/ae2" {
    export class $MekanismKey extends $AEKey {
        static of(arg0: $ChemicalStack): $MekanismKey;
        getStack(): $ChemicalStack;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $MekanismKey;
        withAmount(arg0: number): $ChemicalStack;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $MekanismKey;
        static CODEC: $Codec<$MekanismKey>;
        static MAP_CODEC: $MapCodec<$MekanismKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        get stack(): $ChemicalStack;
    }
}
