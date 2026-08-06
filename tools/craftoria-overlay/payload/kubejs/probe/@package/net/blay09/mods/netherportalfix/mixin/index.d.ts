import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/net/blay09/mods/netherportalfix/mixin" {
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        getLastPos(): $BlockPos;
        get lastPos(): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => $BlockPos_);
}
