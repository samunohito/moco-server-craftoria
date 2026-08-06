import { $Object } from "@package/java/lang";

declare module "@package/nolijium/mixinextras/injector/wrapoperation" {
    export class $Operation {
    }
    export interface $Operation {
        call(...arg0: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Operation}.
     */
    export type $Operation_ = ((arg0: $Object[]) => $Object);
}
