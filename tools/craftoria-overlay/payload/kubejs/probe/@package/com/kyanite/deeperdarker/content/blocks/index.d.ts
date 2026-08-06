import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/kyanite/deeperdarker/content/blocks" {
    export class $OthersidePortalBlock$PortalSpawnEvent extends $BlockEvent implements $ICancellableEvent {
        getSize(): $OthersidePortalBlock$OthersidePortalShape;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $OthersidePortalBlock$OthersidePortalShape);
        get size(): $OthersidePortalBlock$OthersidePortalShape;
    }
    export class $OthersidePortalBlock$OthersidePortalShape {
        isValid(): boolean;
        isComplete(): boolean;
        createPortalBlocks(): void;
        static MIN_WIDTH: number;
        static MIN_HEIGHT: number;
        static MAX_WIDTH: number;
        static MAX_HEIGHT: number;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$Axis_);
        get valid(): boolean;
        get complete(): boolean;
    }
}
