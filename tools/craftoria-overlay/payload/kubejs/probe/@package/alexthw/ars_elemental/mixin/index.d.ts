import { $UUID_ } from "@package/java/util";

declare module "@package/alexthw/ars_elemental/mixin" {
    export class $FoxInvoker {
    }
    export interface $FoxInvoker {
        callAddTrustedUUID(arg0: $UUID_): void;
        callTrusts(arg0: $UUID_): boolean;
    }
    export class $ZombieInvoker {
    }
    export interface $ZombieInvoker {
        callStartUnderWaterConversion(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ZombieInvoker}.
     */
    export type $ZombieInvoker_ = ((arg0: number) => void);
}
