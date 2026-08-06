import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SoundType, $SoundType_ } from "@package/net/minecraft/world/level/block";

declare module "@package/dev/imb11/sounds/mixin/accessors" {
    export class $BlockAccessor {
    }
    export interface $BlockAccessor {
        invokeGetSoundType(arg0: $BlockState_): $SoundType;
    }
    /**
     * Values that may be interpreted as {@link $BlockAccessor}.
     */
    export type $BlockAccessor_ = ((arg0: $BlockState) => $SoundType_);
}
