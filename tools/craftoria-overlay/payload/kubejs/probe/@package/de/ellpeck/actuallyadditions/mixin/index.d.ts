import { $Container } from "@package/net/minecraft/world";

declare module "@package/de/ellpeck/actuallyadditions/mixin" {
    export class $ItemCombinerMenuAccessor {
    }
    export interface $ItemCombinerMenuAccessor {
        getInputSlots(): $Container;
        get inputSlots(): $Container;
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuAccessor}.
     */
    export type $ItemCombinerMenuAccessor_ = (() => $Container);
}
