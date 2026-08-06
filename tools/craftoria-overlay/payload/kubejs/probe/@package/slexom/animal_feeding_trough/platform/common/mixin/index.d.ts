import { $WrappedGoal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Predicate } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $Set, $Set_ } from "@package/java/util";

declare module "@package/slexom/animal_feeding_trough/platform/common/mixin" {
    export class $TemptGoalAccessor {
    }
    export interface $TemptGoalAccessor {
        getFoodPredicate(): $Predicate<$ItemStack>;
        getMob(): $PathfinderMob;
        getSpeed(): number;
        get foodPredicate(): $Predicate<$ItemStack>;
        get mob(): $PathfinderMob;
        get speed(): number;
    }
    export class $GoalSelectorAccessor {
    }
    export interface $GoalSelectorAccessor {
        getGoals(): $Set<$WrappedGoal>;
        get goals(): $Set<$WrappedGoal>;
    }
    /**
     * Values that may be interpreted as {@link $GoalSelectorAccessor}.
     */
    export type $GoalSelectorAccessor_ = (() => $Set_<$WrappedGoal>);
}
