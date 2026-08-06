import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/einstein/subtle_effects/mixin/client/block" {
    export class $AmethystClusterBlockAccessor {
    }
    export interface $AmethystClusterBlockAccessor {
        getHeight(): number;
        getAABBOffset(): number;
        get height(): number;
        get AABBOffset(): number;
    }
    export class $AbstractCauldronBlockAccessor {
    }
    export interface $AbstractCauldronBlockAccessor {
        getFillHeight(arg0: $BlockState_): number;
        isEntityInside(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Entity): boolean;
    }
}
