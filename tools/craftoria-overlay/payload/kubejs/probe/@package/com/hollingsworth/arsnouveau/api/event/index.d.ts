import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $ServerTickEvent } from "@package/net/neoforged/neoforge/event/tick";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ParticleEmitter } from "@package/com/hollingsworth/arsnouveau/api/particle";
import { $ISummon } from "@package/com/hollingsworth/arsnouveau/api/entity";
import { $AbstractEffect, $SpellContext, $SpellResolver, $SpellStats$Builder, $AbstractSpellPart, $SpellStats, $Spell } from "@package/com/hollingsworth/arsnouveau/api/spell";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $EntityProjectileSpell } from "@package/com/hollingsworth/arsnouveau/common/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/hollingsworth/arsnouveau/api/event" {
    export class $EffectResolveEvent extends $Event {
        rayTraceResult: $HitResult;
        spell: $Spell;
        resolver: $SpellResolver;
        world: $Level;
        resolveEffect: $AbstractEffect;
        context: $SpellContext;
        shooter: $LivingEntity;
        spellStats: $SpellStats;
    }
    export class $EffectResolveEvent$Pre extends $EffectResolveEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        rayTraceResult: $HitResult;
        spell: $Spell;
        resolver: $SpellResolver;
        world: $Level;
        resolveEffect: $AbstractEffect;
        context: $SpellContext;
        shooter: $LivingEntity;
        spellStats: $SpellStats;
        constructor(arg0: $Level_, arg1: $LivingEntity, arg2: $HitResult, arg3: $Spell, arg4: $SpellContext, arg5: $AbstractEffect, arg6: $SpellStats, arg7: $SpellResolver);
    }
    export class $ManaRegenCalcEvent extends $LivingEvent {
        getRegen(): number;
        setRegen(arg0: number): void;
        constructor(arg0: $LivingEntity, arg1: number);
    }
    export class $FamiliarSummonEvent extends $EntityEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        owner: $Entity;
        constructor(arg0: $Entity, arg1: $Entity);
    }
    export class $SpellCostCalcEvent$Pre extends $SpellCostCalcEvent {
        context: $SpellContext;
        currentCost: number;
        constructor(arg0: $SpellContext, arg1: number);
    }
    export class $ITimedEvent {
    }
    export interface $ITimedEvent {
        getID(): string;
        serialize(arg0: $CompoundTag_): $CompoundTag;
        tick(arg0: boolean): void;
        tick(arg0: $ServerTickEvent): void;
        onServerStopping(): void;
        isExpired(): boolean;
        onPacketHandled(): void;
        get ID(): string;
        get expired(): boolean;
    }
    export class $SpellResolveEvent extends $Event {
        rayTraceResult: $HitResult;
        spell: $Spell;
        resolver: $SpellResolver;
        world: $Level;
        context: $SpellContext;
        shooter: $LivingEntity;
    }
    export class $SummonEvent extends $Event {
        summon: $ISummon;
        rayTraceResult: $HitResult;
        world: $Level;
        stats: $SpellStats;
        context: $SpellContext;
        shooter: $LivingEntity;
        constructor(arg0: $HitResult, arg1: $Level_, arg2: $LivingEntity | null, arg3: $SpellStats, arg4: $SpellContext, arg5: $ISummon);
    }
    export class $SpellCastEvent extends $LivingEvent implements $ICancellableEvent {
        getWorld(): $Level;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        spell: $Spell;
        context: $SpellContext;
        constructor(arg0: $Spell, arg1: $SpellContext);
        get world(): $Level;
    }
    export class $SpellResolveEvent$Post extends $SpellResolveEvent {
        rayTraceResult: $HitResult;
        spell: $Spell;
        resolver: $SpellResolver;
        world: $Level;
        context: $SpellContext;
        shooter: $LivingEntity;
        constructor(arg0: $Level_, arg1: $LivingEntity, arg2: $HitResult, arg3: $Spell, arg4: $SpellContext, arg5: $SpellResolver);
    }
    export class $PlayerPostLogOutEvent extends $PlayerEvent {
        constructor(arg0: $Player);
    }
    export class $DispelEvent$Post extends $DispelEvent {
        rayTraceResult: $HitResult;
        world: $Level;
        context: $SpellContext;
        shooter: $LivingEntity;
        augments: $SpellStats;
        constructor(arg0: $HitResult, arg1: $Level_, arg2: $LivingEntity | null, arg3: $SpellStats, arg4: $SpellContext);
    }
    export class $SuccessfulTreeGrowthEvent extends $Event {
        level: $ServerLevel;
        pos: $BlockPos;
        sapling: $BlockState;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $SpellDamageEvent$Post extends $SpellDamageEvent {
        caster: $LivingEntity;
        damage: number;
        context: $SpellContext;
        damageSource: $DamageSource;
        target: $Entity;
        constructor(arg0: $DamageSource_, arg1: $LivingEntity, arg2: $Entity, arg3: number, arg4: $SpellContext);
    }
    export class $EntityPreRemovalEvent extends $Event {
        getLevel(): $Level;
        getEntity(): $Entity;
        constructor(arg0: $Level_, arg1: $Entity);
        get level(): $Level;
        get entity(): $Entity;
    }
    export class $SummonEvent$Death extends $Event {
        summon: $ISummon;
        world: $Level;
        wasExpiration: boolean;
        source: $DamageSource;
        constructor(arg0: $Level_, arg1: $ISummon, arg2: $DamageSource_ | null, arg3: boolean);
    }
    export class $MaxManaCalcEvent extends $LivingEvent {
        setMax(arg0: number): void;
        getMax(): number;
        setReserve(arg0: number): void;
        getReserve(): number;
        constructor(arg0: $LivingEntity, arg1: number);
    }
    export class $SpellDamageEvent$Pre extends $SpellDamageEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        caster: $LivingEntity;
        damage: number;
        context: $SpellContext;
        damageSource: $DamageSource;
        target: $Entity;
        constructor(arg0: $DamageSource_, arg1: $LivingEntity, arg2: $Entity, arg3: number, arg4: $SpellContext);
    }
    export class $SpellCostCalcEvent$Post extends $SpellCostCalcEvent {
        context: $SpellContext;
        currentCost: number;
        constructor(arg0: $SpellContext, arg1: number);
    }
    export class $DelayedSpellEvent implements $ITimedEvent {
        tick(arg0: boolean): void;
        isExpired(): boolean;
        resolveSpell(): void;
        getID(): string;
        serialize(arg0: $CompoundTag_): $CompoundTag;
        tick(arg0: $ServerTickEvent): void;
        onServerStopping(): void;
        onPacketHandled(): void;
        duration: number;
        result: $HitResult;
        resolver: $SpellResolver;
        world: $Level;
        showParticles: boolean;
        emitter: $ParticleEmitter;
        constructor(arg0: number, arg1: $HitResult, arg2: $Level_, arg3: $SpellResolver);
        constructor(arg0: number, arg1: $HitResult, arg2: $Level_, arg3: $SpellResolver, arg4: boolean);
        get expired(): boolean;
        get ID(): string;
    }
    export class $DispelEvent$Pre extends $DispelEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        rayTraceResult: $HitResult;
        world: $Level;
        context: $SpellContext;
        shooter: $LivingEntity;
        augments: $SpellStats;
        constructor(arg0: $HitResult, arg1: $Level_, arg2: $LivingEntity | null, arg3: $SpellStats, arg4: $SpellContext);
    }
    export class $SpellCostCalcEvent extends $Event {
        context: $SpellContext;
        currentCost: number;
        /**
         * @deprecated
         */
        constructor(arg0: $SpellContext, arg1: number);
    }
    export class $EffectResolveEvent$Post extends $EffectResolveEvent {
        rayTraceResult: $HitResult;
        spell: $Spell;
        resolver: $SpellResolver;
        world: $Level;
        resolveEffect: $AbstractEffect;
        context: $SpellContext;
        shooter: $LivingEntity;
        spellStats: $SpellStats;
        constructor(arg0: $Level_, arg1: $LivingEntity, arg2: $HitResult, arg3: $Spell, arg4: $SpellContext, arg5: $AbstractEffect, arg6: $SpellStats, arg7: $SpellResolver);
    }
    export class $SpellDamageEvent extends $Event {
        caster: $LivingEntity;
        damage: number;
        context: $SpellContext;
        damageSource: $DamageSource;
        target: $Entity;
    }
    export class $SpellResolveEvent$Pre extends $SpellResolveEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        rayTraceResult: $HitResult;
        spell: $Spell;
        resolver: $SpellResolver;
        world: $Level;
        context: $SpellContext;
        shooter: $LivingEntity;
        constructor(arg0: $Level_, arg1: $LivingEntity, arg2: $HitResult, arg3: $Spell, arg4: $SpellContext, arg5: $SpellResolver);
    }
    export class $SpellModifierEvent extends $Event {
        caster: $LivingEntity;
        spellPart: $AbstractSpellPart;
        rayTraceResult: $HitResult;
        world: $Level;
        spellContext: $SpellContext;
        builder: $SpellStats$Builder;
        constructor(arg0: $LivingEntity, arg1: $SpellStats$Builder, arg2: $AbstractSpellPart, arg3: $HitResult, arg4: $Level_, arg5: $SpellContext);
    }
    export class $SpellProjectileHitEvent extends $EntityEvent implements $ICancellableEvent {
        getProjectile(): $EntityProjectileSpell;
        getHitResult(): $HitResult;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        hit: $HitResult;
        projectile: $EntityProjectileSpell;
        constructor(arg0: $EntityProjectileSpell, arg1: $HitResult);
        get hitResult(): $HitResult;
    }
    export class $DispelEvent extends $Event {
        rayTraceResult: $HitResult;
        world: $Level;
        context: $SpellContext;
        shooter: $LivingEntity;
        augments: $SpellStats;
        constructor(arg0: $HitResult, arg1: $Level_, arg2: $LivingEntity | null, arg3: $SpellStats, arg4: $SpellContext);
    }
}
