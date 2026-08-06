import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $AttributeModifier$Operation, $AttributeModifier, $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Record } from "@package/java/lang";

declare module "@package/io/redspace/ironsspellbooks/item/weapons" {
    export class $AttributeContainer extends $Record {
        value(): number;
        attribute(): $Holder<$Attribute>;
        operation(): $AttributeModifier$Operation;
        createModifier(arg0: string): $AttributeModifier;
        constructor(attribute: $Holder_<$Attribute>, value: number, operation: $AttributeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $AttributeContainer}.
     */
    export type $AttributeContainer_ = { attribute?: $Holder_<$Attribute>, operation?: $AttributeModifier$Operation_, value?: number,  } | [attribute?: $Holder_<$Attribute>, operation?: $AttributeModifier$Operation_, value?: number, ];
    export class $IronsWeaponTier {
    }
    export interface $IronsWeaponTier {
        getAttackDamageBonus(): number;
        getAdditionalAttributes(): $AttributeContainer[];
        getSpeed(): number;
        get attackDamageBonus(): number;
        get additionalAttributes(): $AttributeContainer[];
        get speed(): number;
    }
    export class $StaffTier implements $IronsWeaponTier {
        getAttackDamageBonus(): number;
        getAdditionalAttributes(): $AttributeContainer[];
        getSpeed(): number;
        static BLOOD_STAFF: $StaffTier;
        static PYRIUM_STAFF: $StaffTier;
        static ICE_STAFF: $StaffTier;
        static LIGHTNING_ROD: $StaffTier;
        static GRAYBEARD: $StaffTier;
        static ARTIFICER: $StaffTier;
        constructor(arg0: number, arg1: number, ...arg2: $AttributeContainer_[]);
        get attackDamageBonus(): number;
        get additionalAttributes(): $AttributeContainer[];
        get speed(): number;
    }
}
