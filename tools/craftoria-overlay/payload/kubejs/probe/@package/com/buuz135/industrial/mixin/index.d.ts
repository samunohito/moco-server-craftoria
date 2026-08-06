import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/buuz135/industrial/mixin" {
    export class $IBushBlockMixin {
    }
    export interface $IBushBlockMixin {
        invokeMayPlaceOn(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IBushBlockMixin}.
     */
    export type $IBushBlockMixin_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
}
