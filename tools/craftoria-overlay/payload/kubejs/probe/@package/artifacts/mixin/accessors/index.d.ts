import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Player } from "@package/net/minecraft/world/entity/player";
export * as client from "@package/artifacts/mixin/accessors/client";

declare module "@package/artifacts/mixin/accessors" {
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        getLastHurtByPlayer(): $Player;
        getLastHurtByPlayerTime(): number;
        get lastHurtByPlayer(): $Player;
        get lastHurtByPlayerTime(): number;
    }
    export class $MobAccessor {
    }
    export interface $MobAccessor {
        getGoalSelector(): $GoalSelector;
        get goalSelector(): $GoalSelector;
    }
    /**
     * Values that may be interpreted as {@link $MobAccessor}.
     */
    export type $MobAccessor_ = (() => $GoalSelector);
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        callGetBlockPosBelowThatAffectsMyMovement(): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = (() => $BlockPos_);
}
