import { $WeaponAttributes } from "@package/net/bettercombat/api";
import { $Enum } from "@package/java/lang";
export * as knockback from "@package/net/bettercombat/logic/knockback";

declare module "@package/net/bettercombat/logic" {
    export class $PlayerAttackProperties {
    }
    export interface $PlayerAttackProperties {
        setComboCount(arg0: number): void;
        getComboCount(): number;
    }
    export class $ItemStackNBTWeaponAttributes {
    }
    export interface $ItemStackNBTWeaponAttributes {
        hasInvalidAttributes(): boolean;
        getWeaponAttributes(): $WeaponAttributes;
        setInvalidAttributes(arg0: boolean): void;
        setWeaponAttributes(arg0: $WeaponAttributes): void;
        set invalidAttributes(value: boolean);
    }
    export class $AnimatedHand extends $Enum<$AnimatedHand> {
        static values(): $AnimatedHand[];
        static valueOf(name: string): $AnimatedHand;
        static from(isOffHand: boolean, isTwoHanded: boolean): $AnimatedHand;
        isOffHand(): boolean;
        static MAIN_HAND: $AnimatedHand;
        static TWO_HANDED: $AnimatedHand;
        static OFF_HAND: $AnimatedHand;
        get offHand(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AnimatedHand}.
     */
    export type $AnimatedHand_ = "main_hand" | "off_hand" | "two_handed";
}
