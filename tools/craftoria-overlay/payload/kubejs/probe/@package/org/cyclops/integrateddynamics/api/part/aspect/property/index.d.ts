import { $Predicate } from "@package/java/util/function";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $IValueType, $ValueDeseralizationContext_, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $Collection } from "@package/java/util";

declare module "@package/org/cyclops/integrateddynamics/api/part/aspect/property" {
    export class $IAspectProperties {
    }
    export interface $IAspectProperties {
        clone(): $IAspectProperties;
        getValue<T extends $IValueType<V>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance<T, V>): V;
        setValue<T extends $IValueType<V>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance<T, V>, arg1: V): void;
        fromNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_): void;
        toNBT(arg0: $ValueDeseralizationContext_): $CompoundTag;
        /**
         * @deprecated
         */
        getTypes(): $Collection<$IAspectPropertyTypeInstance<any, any>>;
        removeValue<T extends $IValueType<V>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance<T, V>): void;
        get types(): $Collection<$IAspectPropertyTypeInstance<any, any>>;
    }
    export class $IAspectPropertyTypeInstance<T extends $IValueType<V>, V extends $IValue> {
    }
    export interface $IAspectPropertyTypeInstance<T extends $IValueType<V>, V extends $IValue> {
        getType(): T;
        getValidator(): $Predicate<V>;
        getTranslationKey(): string;
        get type(): T;
        get validator(): $Predicate<V>;
        get translationKey(): string;
    }
}
