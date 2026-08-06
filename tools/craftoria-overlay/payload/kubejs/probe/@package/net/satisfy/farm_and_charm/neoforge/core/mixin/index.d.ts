import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/net/satisfy/farm_and_charm/neoforge/core/mixin" {
    export class $MobAccessor {
    }
    export interface $MobAccessor {
        farmAndCharm$getGoalSelector(): $GoalSelector;
    }
    /**
     * Values that may be interpreted as {@link $MobAccessor}.
     */
    export type $MobAccessor_ = (() => $GoalSelector);
    export class $TemptGoalAccessor {
    }
    export interface $TemptGoalAccessor {
        getPlayer(): $Player;
        get player(): $Player;
    }
    /**
     * Values that may be interpreted as {@link $TemptGoalAccessor}.
     */
    export type $TemptGoalAccessor_ = (() => $Player);
}
