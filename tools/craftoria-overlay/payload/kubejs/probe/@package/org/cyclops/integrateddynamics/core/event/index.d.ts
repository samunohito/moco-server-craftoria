import { $ModLifecycleEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $ModContainer } from "@package/net/neoforged/fml";

declare module "@package/org/cyclops/integrateddynamics/core/event" {
    export class $IntegratedDynamicsSetupEvent extends $ModLifecycleEvent {
        constructor(arg0: $ModContainer);
    }
}
