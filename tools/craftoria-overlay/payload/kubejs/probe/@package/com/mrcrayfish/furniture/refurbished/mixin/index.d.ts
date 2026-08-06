import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
export * as client from "@package/com/mrcrayfish/furniture/refurbished/mixin/client";

declare module "@package/com/mrcrayfish/furniture/refurbished/mixin" {
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        refurbishedFurnitureBlockPosAffectsMovement(): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = (() => $BlockPos_);
}
