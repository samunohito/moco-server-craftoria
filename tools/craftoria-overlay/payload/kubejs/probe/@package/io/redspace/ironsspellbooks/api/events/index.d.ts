import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SchoolType_, $CastSource, $SchoolType, $CastSource_, $SpellData, $AbstractSpell, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $EntityTeleportEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $SpellDamageSource } from "@package/io/redspace/ironsspellbooks/damage";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/io/redspace/ironsspellbooks/api/events" {
    export class $SpellOnCastEvent extends $PlayerEvent {
        setSpellLevel(arg0: number): void;
        setManaCost(arg0: number): void;
        getOriginalManaCost(): number;
        getOriginalSpellLevel(): number;
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        getManaCost(): number;
        getSpellId(): string;
        getSchoolType(): $SchoolType;
        constructor(arg0: $Player, arg1: string, arg2: number, arg3: number, arg4: $SchoolType_, arg5: $CastSource_);
        get originalManaCost(): number;
        get originalSpellLevel(): number;
        get castSource(): $CastSource;
        get spellId(): string;
        get schoolType(): $SchoolType;
    }
    export class $ChangeManaEvent extends $PlayerEvent implements $ICancellableEvent {
        getMagicData(): $MagicData;
        getOldMana(): number;
        getNewMana(): number;
        setNewMana(arg0: number): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $MagicData, arg2: number, arg3: number);
        get magicData(): $MagicData;
        get oldMana(): number;
    }
    export class $SpellSummonEvent<K extends $LivingEntity> extends $LivingEvent {
        getCreature(): K;
        getSpellLevel(): number;
        getSpellId(): $ResourceLocation;
        getCaster(): $LivingEntity;
        setCreature(arg0: K): void;
        constructor(arg0: $LivingEntity, arg1: K, arg2: $ResourceLocation_, arg3: number);
        get spellLevel(): number;
        get spellId(): $ResourceLocation;
        get caster(): $LivingEntity;
    }
    export class $SpellPreCastEvent extends $PlayerEvent implements $ICancellableEvent {
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        getSpellId(): string;
        getSchoolType(): $SchoolType;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: string, arg2: number, arg3: $SchoolType_, arg4: $CastSource_);
        get spellLevel(): number;
        get castSource(): $CastSource;
        get spellId(): string;
        get schoolType(): $SchoolType;
    }
    export class $CounterSpellEvent extends $Event implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        caster: $Entity;
        target: $Entity;
        constructor(arg0: $Entity, arg1: $Entity);
    }
    export class $SpellHealEvent extends $LivingEvent {
        getTargetEntity(): $LivingEntity;
        getHealAmount(): number;
        getSchoolType(): $SchoolType;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: number, arg3: $SchoolType_);
        get targetEntity(): $LivingEntity;
        get healAmount(): number;
        get schoolType(): $SchoolType;
    }
    export class $SpellCooldownAddedEvent$Pre extends $SpellCooldownAddedEvent implements $ICancellableEvent {
        setEffectiveCooldown(arg0: number): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
        set effectiveCooldown(value: number);
    }
    export class $SpellDamageEvent extends $LivingEvent implements $ICancellableEvent {
        getSpellDamageSource(): $SpellDamageSource;
        setAmount(arg0: number): void;
        getAmount(): number;
        getOriginalAmount(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: number, arg2: $SpellDamageSource);
        get spellDamageSource(): $SpellDamageSource;
        get originalAmount(): number;
    }
    export class $InscribeSpellEvent extends $PlayerEvent implements $ICancellableEvent {
        getSpellData(): $SpellData;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $SpellData);
        get spellData(): $SpellData;
    }
    export class $SpellCooldownAddedEvent$Post extends $SpellCooldownAddedEvent {
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
    }
    export class $SpellTeleportEvent extends $EntityTeleportEvent {
        getSpell(): $AbstractSpell;
        constructor(arg0: $AbstractSpell_, arg1: $Entity, arg2: number, arg3: number, arg4: number);
        get spell(): $AbstractSpell;
    }
    export class $SpellCooldownAddedEvent extends $Event {
        getEntity(): $Player;
        getEffectiveCooldown(): number;
        getCastSource(): $CastSource;
        getSpell(): $AbstractSpell;
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
        get entity(): $Player;
        get effectiveCooldown(): number;
        get castSource(): $CastSource;
        get spell(): $AbstractSpell;
    }
    export class $ModifySpellLevelEvent extends $Event {
        setLevel(arg0: number): void;
        getLevel(): number;
        getEntity(): $LivingEntity;
        getBaseLevel(): number;
        addLevels(arg0: number): void;
        getSpell(): $AbstractSpell;
        constructor(arg0: $AbstractSpell_, arg1: $LivingEntity, arg2: number, arg3: number);
        get entity(): $LivingEntity;
        get baseLevel(): number;
        get spell(): $AbstractSpell;
    }
}
