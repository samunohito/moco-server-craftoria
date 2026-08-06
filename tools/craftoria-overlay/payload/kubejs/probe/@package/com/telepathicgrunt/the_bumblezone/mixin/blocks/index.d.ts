import { $BlockGetter, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockSource_, $DispenseItemBehavior, $BlockSource } from "@package/net/minecraft/core/dispenser";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $BlockEntityRendererProvider_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks" {
    export class $StemBlockAccessor {
    }
    export interface $StemBlockAccessor {
        bumblezone$getFruit(): $ResourceKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $StemBlockAccessor}.
     */
    export type $StemBlockAccessor_ = (() => $ResourceKey_<$Block>);
    export class $BrushableBlockEntityAccessor {
    }
    export interface $BrushableBlockEntityAccessor {
        bumblezone$callDropContent(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $BrushableBlockEntityAccessor}.
     */
    export type $BrushableBlockEntityAccessor_ = ((arg0: $Player) => void);
    export class $DispenserBlockInvoker {
        static bumblezone$getDISPENSER_REGISTRY(): $Map<$Item, $DispenseItemBehavior>;
    }
    export interface $DispenserBlockInvoker {
    }
    export class $FallingBlockEntityAccessor {
    }
    export interface $FallingBlockEntityAccessor {
        bumblezone$setBlockState(arg0: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $FallingBlockEntityAccessor}.
     */
    export type $FallingBlockEntityAccessor_ = ((arg0: $BlockState) => void);
    export class $FlowingFluidAccessor {
    }
    export interface $FlowingFluidAccessor {
        bumblezone$callSourceNeighborCount(arg0: $LevelReader, arg1: $BlockPos_): number;
        bumblezone$callCanPassThroughWall(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        bumblezone$callSpreadToSides(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockState_): void;
    }
    export class $DefaultDispenseItemBehaviorInvoker {
    }
    export interface $DefaultDispenseItemBehaviorInvoker {
        bumblezone$invokeExecute(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $DefaultDispenseItemBehaviorInvoker}.
     */
    export type $DefaultDispenseItemBehaviorInvoker_ = ((arg0: $BlockSource, arg1: $ItemStack) => $ItemStack_);
    export class $VineBlockAccessor {
    }
    export interface $VineBlockAccessor {
        bumblezone$callCanSupportAtFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VineBlockAccessor}.
     */
    export type $VineBlockAccessor_ = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $Direction) => boolean);
    export class $BlockEntityRenderersAccessor {
        static bumblezone$callRegister<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRendererProvider_<T>): void;
    }
    export interface $BlockEntityRenderersAccessor {
    }
    export class $BlockEntityAccessor {
    }
    export interface $BlockEntityAccessor {
        bumblezone$setType(arg0: $BlockEntityType_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAccessor}.
     */
    export type $BlockEntityAccessor_ = ((arg0: $BlockEntityType<never>) => void);
}
