import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/com/anthonyhilyard/iceberg/util" {
    export class $ITooltipAccess {
    }
    export interface $ITooltipAccess {
        getIcebergTooltipStack(): $ItemStack;
        setIcebergTooltipStack(arg0: $ItemStack_): void;
    }
}
