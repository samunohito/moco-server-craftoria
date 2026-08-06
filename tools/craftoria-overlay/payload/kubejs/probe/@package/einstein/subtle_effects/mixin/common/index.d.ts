import { $Slot } from "@package/net/minecraft/world/inventory";
export * as entity from "@package/einstein/subtle_effects/mixin/common/entity";

declare module "@package/einstein/subtle_effects/mixin/common" {
    export class $StonecutterMenuAccessor {
    }
    export interface $StonecutterMenuAccessor {
        getInputSlot(): $Slot;
        get inputSlot(): $Slot;
    }
    /**
     * Values that may be interpreted as {@link $StonecutterMenuAccessor}.
     */
    export type $StonecutterMenuAccessor_ = (() => $Slot);
}
