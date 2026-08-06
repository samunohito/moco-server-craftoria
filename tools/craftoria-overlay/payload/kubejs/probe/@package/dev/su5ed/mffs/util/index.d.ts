import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/dev/su5ed/mffs/util" {
    export class $SetBlockEvent extends $LevelEvent {
        getState(): $BlockState;
        getPos(): $BlockPos;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
}
