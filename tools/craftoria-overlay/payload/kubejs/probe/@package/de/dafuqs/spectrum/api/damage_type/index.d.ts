import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/de/dafuqs/spectrum/api/damage_type" {
    export class $StackTracking {
    }
    export interface $StackTracking {
        spectrum$getTrackedStack(): ($ItemStack) | undefined;
        spectrum$setTrackedStack(arg0: $ItemStack_): void;
    }
}
