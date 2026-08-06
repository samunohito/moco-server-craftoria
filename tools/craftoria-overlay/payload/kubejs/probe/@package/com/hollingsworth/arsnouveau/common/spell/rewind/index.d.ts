import { $RewindEvent } from "@package/com/hollingsworth/arsnouveau/common/event/timed";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/hollingsworth/arsnouveau/common/spell/rewind" {
    export class $RewindEntityData implements $IRewindCallback {
        onRewind(arg0: $RewindEvent): void;
        gameTime: number;
        deltaMovement: $Vec3;
        health: number;
        position: $Vec3;
        constructor(arg0: number, arg1: $Vec3_, arg2: $Vec3_, arg3: number);
    }
    export class $IRewindCallback {
    }
    export interface $IRewindCallback {
        onRewind(arg0: $RewindEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $IRewindCallback}.
     */
    export type $IRewindCallback_ = ((arg0: $RewindEvent) => void);
}
