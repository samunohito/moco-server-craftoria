import { $Predicate } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";
import { $WeaponTrait } from "@package/org/xiyu/spartanweaponryunofficial/api/trait";

declare module "@package/org/xiyu/spartanweaponryunofficial/util" {
    export class $WeaponType extends $Enum<$WeaponType> {
        static values(): $WeaponType[];
        static valueOf(arg0: string): $WeaponType;
        getTraitFilter(): $Predicate<$WeaponTrait>;
        static RANGED: $WeaponType;
        static MELEE: $WeaponType;
        static THROWING: $WeaponType;
        get traitFilter(): $Predicate<$WeaponTrait>;
    }
    /**
     * Values that may be interpreted as {@link $WeaponType}.
     */
    export type $WeaponType_ = "melee" | "ranged" | "throwing";
}
