import { $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $IMagicEntity } from "@package/io/redspace/ironsspellbooks/api/entity";
import { $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $List_ } from "@package/java/util";

declare module "@package/io/redspace/ironsspellbooks/entity/mobs/goals" {
    export class $WarlockAttackGoal extends $WizardAttackGoal {
        meleeRange(): number;
        setMeleeBias(arg0: number, arg1: number): $WarlockAttackGoal;
        setIsFlying(): $WarlockAttackGoal;
        setMeleeMovespeedModifier(arg0: number): $WarlockAttackGoal;
        setSpells(arg0: $List_<$AbstractSpell_>, arg1: $List_<$AbstractSpell_>, arg2: $List_<$AbstractSpell_>, arg3: $List_<$AbstractSpell_>): $WarlockAttackGoal;
        setMeleeAttackInverval(arg0: number, arg1: number): $WarlockAttackGoal;
        constructor(arg0: $IMagicEntity, arg1: number, arg2: number, arg3: number);
        set meleeMovespeedModifier(value: number);
    }
    export class $WizardRecoverGoal extends $Goal {
        constructor(arg0: $IMagicEntity);
        constructor(arg0: $IMagicEntity, arg1: number, arg2: number);
    }
    export class $WizardSupportGoal<T extends $PathfinderMob> extends $Goal {
        setIsFlying(): $WizardSupportGoal<T>;
        setSpells(arg0: $List_<$AbstractSpell_>, arg1: $List_<$AbstractSpell_>): $WizardSupportGoal<T>;
        setSpellQuality(arg0: number, arg1: number): $WizardSupportGoal<T>;
        constructor(arg0: T, arg1: number, arg2: number);
        constructor(arg0: T, arg1: number, arg2: number, arg3: number);
    }
    export class $WizardAttackGoal extends $Goal {
        isActing(): boolean;
        setIsFlying(): $WizardAttackGoal;
        getStrafeMultiplier(): number;
        setSpells(arg0: $List_<$AbstractSpell_>, arg1: $List_<$AbstractSpell_>, arg2: $List_<$AbstractSpell_>, arg3: $List_<$AbstractSpell_>): $WizardAttackGoal;
        setDrinksPotions(): $WizardAttackGoal;
        setAllowFleeing(arg0: boolean): $WizardAttackGoal;
        setSpellQuality(arg0: number, arg1: number): $WizardAttackGoal;
        setSingleUseSpell(arg0: $AbstractSpell_, arg1: number, arg2: number, arg3: number, arg4: number): $WizardAttackGoal;
        constructor(arg0: $IMagicEntity, arg1: number, arg2: number);
        constructor(arg0: $IMagicEntity, arg1: number, arg2: number, arg3: number);
        get acting(): boolean;
        get strafeMultiplier(): number;
        set allowFleeing(value: boolean);
    }
    export class $GustDefenseGoal extends $Goal {
        shouldAreaAttack(arg0: $LivingEntity): boolean;
        constructor(arg0: $IMagicEntity);
    }
    export class $WispAttackGoal extends $Goal {
        constructor(arg0: $PathfinderMob, arg1: number);
    }
    export class $SpellBarrageGoal extends $Goal {
        constructor(arg0: $IMagicEntity, arg1: $AbstractSpell_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
}
