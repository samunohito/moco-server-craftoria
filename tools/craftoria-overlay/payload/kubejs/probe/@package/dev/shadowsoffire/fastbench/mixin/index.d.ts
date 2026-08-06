import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/dev/shadowsoffire/fastbench/mixin" {
    export class $AbstractContainerMenuInvoker {
    }
    export interface $AbstractContainerMenuInvoker {
        _moveItemStackTo(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbstractContainerMenuInvoker}.
     */
    export type $AbstractContainerMenuInvoker_ = ((arg0: $ItemStack, arg1: number, arg2: number, arg3: boolean) => boolean);
}
