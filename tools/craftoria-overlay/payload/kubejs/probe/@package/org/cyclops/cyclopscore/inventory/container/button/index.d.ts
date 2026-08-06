import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";

declare module "@package/org/cyclops/cyclopscore/inventory/container/button" {
    export class $IContainerButtonClickAcceptorServer<C extends $AbstractContainerMenu> {
    }
    export interface $IContainerButtonClickAcceptorServer<C extends $AbstractContainerMenu> {
        onButtonClick(arg0: string): boolean;
        putButtonAction(arg0: string, arg1: $IContainerButtonAction_<C>): void;
    }
    export class $IContainerButtonAction<C extends $AbstractContainerMenu> {
    }
    export interface $IContainerButtonAction<C extends $AbstractContainerMenu> {
        onAction(arg0: string, arg1: C): void;
    }
    /**
     * Values that may be interpreted as {@link $IContainerButtonAction}.
     */
    export type $IContainerButtonAction_<C> = ((arg0: string, arg1: C) => void);
}
