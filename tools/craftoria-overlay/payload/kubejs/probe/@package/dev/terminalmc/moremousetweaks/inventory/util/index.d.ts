import { $Enum } from "@package/java/lang";

declare module "@package/dev/terminalmc/moremousetweaks/inventory/util" {
    export class $ScrollAction extends $Enum<$ScrollAction> {
        static values(): $ScrollAction[];
        static valueOf(arg0: string): $ScrollAction;
        cancelsCustomActions(): boolean;
        cancelsAllActions(): boolean;
        static SUCCESS: $ScrollAction;
        static ABORT: $ScrollAction;
        static PASS: $ScrollAction;
        static FAILURE: $ScrollAction;
    }
    /**
     * Values that may be interpreted as {@link $ScrollAction}.
     */
    export type $ScrollAction_ = "pass" | "success" | "failure" | "abort";
}
