import { $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Predicate_ } from "@package/java/util/function";
import { $TamableAnimal, $Mob, $LivingEntity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $Class } from "@package/java/lang";
import { $NearestAttackableTargetGoalAccessor, $HurtByTargetGoalAccessor } from "@package/it/hurts/octostudios/reliquified_twilight_forest/mixin";
import { $IronGolem } from "@package/net/minecraft/world/entity/animal";

declare module "@package/net/minecraft/world/entity/ai/goal/target" {
    export class $NonTameRandomTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        targetType: $Class<T>;
        constructor(tamableMob: $TamableAnimal, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
    }
    export class $DefendVillageTargetGoal extends $TargetGoal {
        handler$fdf000$guardvillagers$modifyRep(arg0: $CallbackInfoReturnable<any>): void;
        constructor(golem: $IronGolem);
    }
    export class $OwnerHurtByTargetGoal extends $TargetGoal {
        constructor(tameAnimal: $TamableAnimal);
    }
    export class $HurtByTargetGoal extends $TargetGoal implements $HurtByTargetGoalAccessor {
        setAlertOthers(...reinforcementTypes: $Class<never>[]): $HurtByTargetGoal;
        getTimestamp(): number;
        getToIgnoreDamage(): $Class<never>[];
        timestamp: number;
        constructor(mob: $PathfinderMob, ...toIgnoreDamage: $Class<never>[]);
        set alertOthers(value: $Class<never>[]);
        get toIgnoreDamage(): $Class<never>[];
    }
    export class $ResetUniversalAngerTargetGoal<T extends $Mob> extends $Goal {
        constructor(mob: T, alertOthersOfSameType: boolean);
    }
    export class $TargetGoal extends $Goal {
        setUnseenMemoryTicks(unseenMemoryTicks: number): $TargetGoal;
        constructor(mob: $Mob, mustSee: boolean);
        constructor(mob: $Mob, mustSee: boolean, mustReach: boolean);
        set unseenMemoryTicks(value: number);
    }
    export class $OwnerHurtTargetGoal extends $TargetGoal {
        constructor(tameAnimal: $TamableAnimal);
    }
    export class $NearestHealableRaiderTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        /**
         * Execute a one shot task or start executing a continuous task
         */
        decrementCooldown(): void;
        getCooldown(): number;
        targetType: $Class<T>;
        constructor(mob: $Raider, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        get cooldown(): number;
    }
    export class $NearestAttackableWitchTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        setCanAttack(active: boolean): void;
        targetType: $Class<T>;
        constructor(mob: $Raider, targetType: $Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        set canAttack(value: boolean);
    }
    export class $NearestAttackableTargetGoal<T extends $LivingEntity> extends $TargetGoal implements $NearestAttackableTargetGoalAccessor {
        setTarget(target: $LivingEntity | null): void;
        getTargetType(): $Class<never>;
        targetType: $Class<T>;
        constructor(mob: $Mob, targetType: $Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean, mustReach: boolean);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity>);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean);
        set target(value: $LivingEntity | null);
    }
}
