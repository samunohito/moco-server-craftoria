import { $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";

declare module "@package/org/cyclops/integrateddynamics/api/evaluate/expression" {
    export class $ILazyExpressionValueCache {
    }
    export interface $ILazyExpressionValueCache {
        getValue(arg0: number): $IValue;
        setValue(arg0: number, arg1: $IValue): void;
        hasValue(arg0: number): boolean;
        removeValue(arg0: number): void;
    }
}
