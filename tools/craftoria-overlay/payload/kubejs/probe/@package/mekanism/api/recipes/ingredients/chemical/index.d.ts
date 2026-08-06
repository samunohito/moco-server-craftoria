import { $Chemical_, $Chemical } from "@package/mekanism/api/chemical";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $List } from "@package/java/util";

declare module "@package/mekanism/api/recipes/ingredients/chemical" {
    export class $ChemicalIngredient implements $Predicate<$Chemical> {
        test(arg0: $Holder_<$Chemical>): boolean;
        /**
         * @deprecated
         */
        test(arg0: $Chemical_): boolean;
        isEmpty(): boolean;
        codec(): $MapCodec<$ChemicalIngredient>;
        generateChemicalHolders(): $Stream<$Holder<$Chemical>>;
        hasNoChemicals(): boolean;
        /**
         * @deprecated
         */
        generateChemicals(): $Stream<$Chemical>;
        getChemicalHolders(): $List<$Holder<$Chemical>>;
        logMissingTags(): void;
        /**
         * @deprecated
         */
        getChemicals(): $List<$Chemical>;
        or(arg0: $Predicate_<$Chemical>): $Predicate<$Chemical>;
        negate(): $Predicate<$Chemical>;
        and(arg0: $Predicate_<$Chemical>): $Predicate<$Chemical>;
        constructor();
        get empty(): boolean;
        get chemicalHolders(): $List<$Holder<$Chemical>>;
        get chemicals(): $List<$Chemical>;
    }
}
