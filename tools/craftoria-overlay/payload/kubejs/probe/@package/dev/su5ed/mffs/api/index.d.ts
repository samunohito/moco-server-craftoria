import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/dev/su5ed/mffs/api" {
    export class $EventForceManipulate extends $LevelEvent {
        getBeforePos(): $BlockPos;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_);
        get beforePos(): $BlockPos;
    }
    export class $EventForceManipulate$EventPreForceManipulate extends $EventForceManipulate implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_);
    }
}
