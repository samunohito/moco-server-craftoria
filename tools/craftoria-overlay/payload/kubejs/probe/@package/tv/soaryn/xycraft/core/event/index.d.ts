import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ItemEvent } from "@package/net/neoforged/neoforge/event/entity/item";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/tv/soaryn/xycraft/core/event" {
    export class $BlockOnRemoveEvent extends $BlockEvent {
        getNextState(): $BlockState;
        isMovedByPiston(): boolean;
        constructor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean);
        get nextState(): $BlockState;
        get movedByPiston(): boolean;
    }
    export class $ItemEntityTickEvent extends $ItemEvent {
        static onTick(arg0: $ItemEntity): void;
        constructor(arg0: $ItemEntity);
    }
    export class $BlockOnPlacedEvent extends $BlockEvent {
        getNewState(): $BlockState;
        isMovedByPiston(): boolean;
        constructor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean);
        get newState(): $BlockState;
        get movedByPiston(): boolean;
    }
}
