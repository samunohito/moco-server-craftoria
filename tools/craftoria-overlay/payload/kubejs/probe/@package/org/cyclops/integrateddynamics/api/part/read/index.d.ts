import { $IValueType, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $IAspect, $IAspectVariable, $IAspectRead } from "@package/org/cyclops/integrateddynamics/api/part/aspect";
import { $List } from "@package/java/util";
import { $IPartType, $IPartState, $PartTarget } from "@package/org/cyclops/integrateddynamics/api/part";

declare module "@package/org/cyclops/integrateddynamics/api/part/read" {
    export class $IPartTypeReader<P extends $IPartTypeReader<P, S>, S extends $IPartStateReader<P>> {
    }
    export interface $IPartTypeReader<P extends $IPartTypeReader<P, S>, S extends $IPartStateReader<P>> extends $IPartType<P, S> {
        getVariable<V extends $IValue, T extends $IValueType<V>>(arg0: $PartTarget, arg1: S, arg2: $IAspectRead<V, T>): $IAspectVariable<V>;
        getReadAspects(): $List<$IAspectRead<any, any>>;
        get readAspects(): $List<$IAspectRead<any, any>>;
    }
    export class $IPartStateReader<P extends $IPartTypeReader<any, any>> {
    }
    export interface $IPartStateReader<P extends $IPartTypeReader<any, any>> extends $IPartState<P> {
        getVariable<V extends $IValue, T extends $IValueType<V>>(arg0: $IAspectRead<V, T>): $IAspectVariable<V>;
        setVariable(arg0: $IAspect<any, any>, arg1: $IAspectVariable<any>): void;
        resetVariables(): void;
    }
}
