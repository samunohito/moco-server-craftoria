import { $Class } from "@package/java/lang";

declare module "@package/it/hurts/octostudios/reliquified_twilight_forest/mixin" {
    export class $HurtByTargetGoalAccessor {
    }
    export interface $HurtByTargetGoalAccessor {
        getTimestamp(): number;
        getToIgnoreDamage(): $Class<never>[];
        get timestamp(): number;
        get toIgnoreDamage(): $Class<never>[];
    }
    export class $NearestAttackableTargetGoalAccessor {
    }
    export interface $NearestAttackableTargetGoalAccessor {
        getTargetType(): $Class<never>;
        get targetType(): $Class<never>;
    }
    /**
     * Values that may be interpreted as {@link $NearestAttackableTargetGoalAccessor}.
     */
    export type $NearestAttackableTargetGoalAccessor_ = (() => $Class<never>);
}
