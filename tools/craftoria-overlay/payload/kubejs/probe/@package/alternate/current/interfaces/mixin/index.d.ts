import { $WireHandler } from "@package/alternate/current/wire";

declare module "@package/alternate/current/interfaces/mixin" {
    export class $IServerLevel {
    }
    export interface $IServerLevel {
        alternate_current$getWireHandler(): $WireHandler;
    }
    /**
     * Values that may be interpreted as {@link $IServerLevel}.
     */
    export type $IServerLevel_ = (() => $WireHandler);
}
