import { $MutableComponent, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Runnable_, $Exception } from "@package/java/lang";
export * as variable from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
export * as expression from "@package/org/cyclops/integrateddynamics/api/evaluate/expression";

declare module "@package/org/cyclops/integrateddynamics/api/evaluate" {
    export class $EvaluationException extends $Exception {
        resolve(): void;
        getErrorMessage(): $MutableComponent;
        addResolutionListeners(arg0: $Runnable_): void;
        isRetryEvaluation(): boolean;
        setRetryEvaluation(arg0: boolean): void;
        constructor(arg0: $MutableComponent_);
        get errorMessage(): $MutableComponent;
    }
}
