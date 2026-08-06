import { $CauldronInteraction$InteractionMap, $CauldronInteraction$InteractionMap_ } from "@package/net/minecraft/core/cauldron";

declare module "@package/dev/xkmc/fruitsdelight/mixin" {
    export class $AbstractCauldronBlockAccessor {
    }
    export interface $AbstractCauldronBlockAccessor {
        getInteractions(): $CauldronInteraction$InteractionMap;
        get interactions(): $CauldronInteraction$InteractionMap;
    }
    /**
     * Values that may be interpreted as {@link $AbstractCauldronBlockAccessor}.
     */
    export type $AbstractCauldronBlockAccessor_ = (() => $CauldronInteraction$InteractionMap_);
}
