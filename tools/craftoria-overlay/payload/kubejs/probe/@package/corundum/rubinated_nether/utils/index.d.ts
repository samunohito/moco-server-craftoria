import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/corundum/rubinated_nether/utils" {
    export class $UpdateListenerHolder {
        static addUpdateListener(arg0: $Level_, arg1: $BlockUpdateListener): void;
    }
    export interface $UpdateListenerHolder {
        rubinatedNether$handleBlockUpdate(arg0: $BlockPos_): void;
        rubinatedNether$addUpdateListener(arg0: $BlockUpdateListener): void;
    }
    export class $BlockUpdateListener {
    }
    export interface $BlockUpdateListener {
        getListenedPositions(): $Stream<$BlockPos>;
        shouldRemove(): boolean;
        handleBlockUpdate(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        get listenedPositions(): $Stream<$BlockPos>;
    }
}
