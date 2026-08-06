import { $Consumer_, $ToDoubleFunction_, $Function_, $ToIntBiFunction_, $BiFunction_, $ToLongBiFunction_, $ToDoubleBiFunction_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $ChemicalStack, $Chemical, $Chemical_ } from "@package/mekanism/api/chemical";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
import { $List, $List_, $Collection } from "@package/java/util";
import { $IChemicalAttribute_, $IChemicalAttribute } from "@package/mekanism/api/datamaps/chemical/attribute";

declare module "@package/mekanism/api/chemical/attribute" {
    /**
     * @deprecated
     */
    export class $ChemicalAttribute implements $IChemicalAttribute {
        asModern(): $IChemicalAttribute;
        /**
         * @deprecated
         */
        addTooltipText(arg0: $List_<$Component_>): $List<$Component>;
        toLegacyAttribute(): $ChemicalAttribute;
        collectTooltips(arg0: $Item$TooltipContext, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
        collectTooltips(arg0: $Consumer_<$Component>): void;
        needsValidation(): boolean;
        constructor();
    }
    export class $ChemicalAttributeValidator {
        static create(...arg0: $Class<$ChemicalAttribute>[]): $ChemicalAttributeValidator;
        static createStrict(...arg0: $Class<$ChemicalAttribute>[]): $ChemicalAttributeValidator;
        static DEFAULT: $ChemicalAttributeValidator;
        static ALWAYS_ALLOW: $ChemicalAttributeValidator;
    }
    export interface $ChemicalAttributeValidator {
        /**
         * @deprecated
         */
        validate(arg0: $ChemicalAttribute): boolean;
        validate(arg0: $IChemicalAttribute_): boolean;
        process(arg0: $ChemicalStack): boolean;
        process(arg0: $Holder_<$Chemical>): boolean;
        process(arg0: $Chemical_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChemicalAttributeValidator}.
     */
    export type $ChemicalAttributeValidator_ = ((arg0: $ChemicalAttribute) => boolean);
    export class $IChemicalAttributeContainer<SELF extends $IChemicalAttributeContainer<SELF>> {
    }
    export interface $IChemicalAttributeContainer<SELF extends $IChemicalAttributeContainer<SELF>> {
        /**
         * @deprecated
         */
        get<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        getAttributes(): $Collection<$ChemicalAttribute>;
        /**
         * @deprecated
         */
        has(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<SELF, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<SELF, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<SELF, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<SELF, ATTRIBUTE, V>, arg2: V): V;
        get attributes(): $Collection<$ChemicalAttribute>;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
    }
}
