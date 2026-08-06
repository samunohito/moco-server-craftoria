import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";

declare module "@package/einstein/subtle_effects/mixin/client/item" {
    export class $BucketItemAccessor {
    }
    export interface $BucketItemAccessor {
        getContent(): $Fluid;
        get content(): $Fluid;
    }
    /**
     * Values that may be interpreted as {@link $BucketItemAccessor}.
     */
    export type $BucketItemAccessor_ = (() => $Fluid_);
}
