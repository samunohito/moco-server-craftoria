import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ItemInteractionResult, $InteractionResult, $InteractionResult_, $InteractionHand, $InteractionHand_, $ItemInteractionResult_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $GuiMessage, $GuiMessage$Line } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
export * as structure from "@package/com/hollingsworth/arsnouveau/common/mixin/structure";
export * as jar from "@package/com/hollingsworth/arsnouveau/common/mixin/jar";

declare module "@package/com/hollingsworth/arsnouveau/common/mixin" {
    export class $LivingAccessor {
    }
    export interface $LivingAccessor {
        callGetJumpPower(): number;
    }
    /**
     * Values that may be interpreted as {@link $LivingAccessor}.
     */
    export type $LivingAccessor_ = (() => number);
    export class $BlockBehaviourAccessor {
    }
    export interface $BlockBehaviourAccessor {
        callUseItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccessor}.
     */
    export type $BlockBehaviourAccessor_ = ((arg0: $ItemStack, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $InteractionHand, arg6: $BlockHitResult) => $ItemInteractionResult_);
    export class $MobAccessor {
    }
    export interface $MobAccessor {
        callMobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $MobAccessor}.
     */
    export type $MobAccessor_ = ((arg0: $Player, arg1: $InteractionHand) => $InteractionResult_);
    export class $BrushableBlockEntityAccessor {
    }
    export interface $BrushableBlockEntityAccessor {
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        setLootTableSeed(arg0: number): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
    }
    export class $BlockItemAccessor {
        static invokeUpdateBlockEntityComponents(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
    }
    export interface $BlockItemAccessor {
        invokeUpdateBlockStateFromTag(arg0: $BlockPos_, arg1: $Level_, arg2: $ItemStack_, arg3: $BlockState_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $BlockItemAccessor}.
     */
    export type $BlockItemAccessor_ = ((arg0: $BlockPos, arg1: $Level, arg2: $ItemStack, arg3: $BlockState) => $BlockState_);
    export class $ChatComponentAccessor {
    }
    export interface $ChatComponentAccessor {
        getAllMessages(): $List<$GuiMessage>;
        getTrimmedMessages(): $List<$GuiMessage$Line>;
        get allMessages(): $List<$GuiMessage>;
        get trimmedMessages(): $List<$GuiMessage$Line>;
    }
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        getBoardingCooldown(): number;
        setBoardingCooldown(arg0: number): void;
    }
    export class $PufferfishAccessor {
        static targetConditions(): $TargetingConditions;
    }
    export interface $PufferfishAccessor {
        getInflateCounter(): number;
        setDeflateTimer(arg0: number): void;
        setInflateCounter(arg0: number): void;
        getDeflateTimer(): number;
    }
}
