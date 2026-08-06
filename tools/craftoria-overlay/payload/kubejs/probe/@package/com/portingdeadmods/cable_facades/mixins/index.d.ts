import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/com/portingdeadmods/cable_facades/mixins" {
    export class $LevelRendererAccess {
        static callRenderShape(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $VoxelShape, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    export interface $LevelRendererAccess {
        callRenderHitOutline(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Entity, arg3: number, arg4: number, arg5: number, arg6: $BlockPos_, arg7: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccess}.
     */
    export type $LevelRendererAccess_ = ((arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Entity, arg3: number, arg4: number, arg5: number, arg6: $BlockPos, arg7: $BlockState) => void);
}
