import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $AttributeModifier$Operation, $Attribute, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/redspace/ironsspellbooks/item/armor" {
    export interface $UpgradeOrbType extends RegistryMarked<RegistryTypes.IronsSpellbooksUpgradeOrbTypeTag, RegistryTypes.IronsSpellbooksUpgradeOrbType> {}
    export class $UpgradeOrbType extends $Record {
        attribute(): $Holder<$Attribute>;
        amount(): number;
        operation(): $AttributeModifier$Operation;
        containerItem(): ($ItemStack) | undefined;
        static CODEC: $Codec<$UpgradeOrbType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $UpgradeOrbType>;
        constructor(arg0: $Holder_<$Attribute>, arg1: number, arg2: $AttributeModifier$Operation_, arg3: $Holder_<$Item>);
        constructor(attribute: $Holder_<$Attribute>, amount: number, operation: $AttributeModifier$Operation_, containerItem: ($ItemStack_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $UpgradeOrbType}.
     */
    export type $UpgradeOrbType_ = RegistryTypes.IronsSpellbooksUpgradeOrbType | { amount?: number, operation?: $AttributeModifier$Operation_, containerItem?: ($ItemStack_) | undefined, attribute?: $Holder_<$Attribute>,  } | [amount?: number, operation?: $AttributeModifier$Operation_, containerItem?: ($ItemStack_) | undefined, attribute?: $Holder_<$Attribute>, ];
}
