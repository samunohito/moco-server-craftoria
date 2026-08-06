import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";

declare module "@package/net/satisfy/beachparty/neoforge/core/mixin" {
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
}
