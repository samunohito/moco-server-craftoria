import { $FluxNetwork } from "@package/sonar/fluxnetworks/common/connection";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IFluxDevice } from "@package/sonar/fluxnetworks/api/device";

declare module "@package/sonar/fluxnetworks/common/test" {
    /**
     * @deprecated
     */
    export class $FluxConnectionEvent extends $Event {
        flux: $IFluxDevice;
        constructor(arg0: $IFluxDevice);
    }
    /**
     * @deprecated
     */
    export class $FluxConnectionEvent$Connected extends $FluxConnectionEvent {
        flux: $IFluxDevice;
        network: $FluxNetwork;
        constructor(arg0: $IFluxDevice, arg1: $FluxNetwork);
    }
    /**
     * @deprecated
     */
    export class $FluxConnectionEvent$Disconnected extends $FluxConnectionEvent {
        flux: $IFluxDevice;
        network: $FluxNetwork;
        constructor(arg0: $IFluxDevice, arg1: $FluxNetwork);
    }
}
