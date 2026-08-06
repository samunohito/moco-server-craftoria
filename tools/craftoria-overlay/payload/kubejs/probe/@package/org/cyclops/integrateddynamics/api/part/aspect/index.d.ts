import { $IPartTypeWriter, $IPartStateWriter } from "@package/org/cyclops/integrateddynamics/api/part/write";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $IPartNetwork, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $IVariable, $IValueType, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $IAspectPropertyTypeInstance, $IAspectProperties } from "@package/org/cyclops/integrateddynamics/api/part/aspect/property";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $List_, $Collection } from "@package/java/util";
import { $PartPos, $IPartType, $IPartState, $PartTarget } from "@package/org/cyclops/integrateddynamics/api/part";
export * as property from "@package/org/cyclops/integrateddynamics/api/part/aspect/property";

declare module "@package/org/cyclops/integrateddynamics/api/part/aspect" {
    export class $AspectUpdateType extends $Enum<$AspectUpdateType> {
        static values(): $AspectUpdateType[];
        static valueOf(arg0: string): $AspectUpdateType;
        static BLOCK_UPDATE: $AspectUpdateType;
        static NETWORK_TICK: $AspectUpdateType;
        static NEVER: $AspectUpdateType;
    }
    /**
     * Values that may be interpreted as {@link $AspectUpdateType}.
     */
    export type $AspectUpdateType_ = "network_tick" | "block_update" | "never";
    export class $IAspectRead<V extends $IValue, T extends $IValueType<V>> {
    }
    export interface $IAspectRead<V extends $IValue, T extends $IValueType<V>> extends $IAspect<V, T> {
        getUpdateType(): $AspectUpdateType;
        createNewVariable(arg0: $Supplier_<$PartTarget>): $IAspectVariable<V>;
        /**
         * @deprecated
         */
        createNewVariable(arg0: $PartTarget): $IAspectVariable<V>;
        get updateType(): $AspectUpdateType;
    }
    export class $IAspect<V extends $IValue, T extends $IValueType<V>> {
    }
    export interface $IAspect<V extends $IValue, T extends $IValueType<V>> {
        update<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: $INetwork, arg1: $IPartNetwork, arg2: P, arg3: $PartTarget, arg4: S): void;
        getProperties<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: P, arg1: $PartTarget, arg2: S): $IAspectProperties;
        setProperties<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: P, arg1: $PartTarget, arg2: S, arg3: $IAspectProperties): void;
        getUniqueName(): $ResourceLocation;
        getValueType(): T;
        getDefaultProperties(): $IAspectProperties;
        getTranslationKey(): string;
        hasProperties<P extends $IPartType<P, S>, S extends $IPartState<P>>(): boolean;
        loadTooltip(arg0: $List_<$Component_>, arg1: boolean): void;
        getPropertiesContainerProvider(arg0: $PartPos): $MenuProvider;
        getPropertyTypes(): $Collection<$IAspectPropertyTypeInstance<any, any>>;
        get uniqueName(): $ResourceLocation;
        get valueType(): T;
        get defaultProperties(): $IAspectProperties;
        get translationKey(): string;
        get propertyTypes(): $Collection<$IAspectPropertyTypeInstance<any, any>>;
    }
    export class $IAspectWrite<V extends $IValue, T extends $IValueType<V>> {
    }
    export interface $IAspectWrite<V extends $IValue, T extends $IValueType<V>> extends $IAspect<V, T> {
        write<P extends $IPartTypeWriter<P, S>, S extends $IPartStateWriter<P>>(arg0: P, arg1: $PartTarget, arg2: S, arg3: $IVariable<V>): void;
        onDeactivate<P extends $IPartTypeWriter<P, S>, S extends $IPartStateWriter<P>>(arg0: P, arg1: $PartTarget, arg2: S): void;
        onActivate<P extends $IPartTypeWriter<P, S>, S extends $IPartStateWriter<P>>(arg0: P, arg1: $PartTarget, arg2: S): void;
    }
    export class $IAspectVariable<V extends $IValue> {
    }
    export interface $IAspectVariable<V extends $IValue> extends $IVariable<V> {
        getTarget(): $PartTarget;
        getAspect(): $IAspectRead<V, never>;
        get target(): $PartTarget;
        get aspect(): $IAspectRead<V, never>;
    }
}
