import { $AdvancementHolder, $AdvancementProgress, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityDimensions } from "@package/net/minecraft/world/entity";
import { $UUID_, $UUID, $Map_, $Map } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/telepathicgrunt/the_bumblezone/mixin/entities" {
    export class $AgeableMobAccessor {
        static bumblezone$getDATA_BABY_ID(): $EntityDataAccessor<boolean>;
    }
    export interface $AgeableMobAccessor {
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        bumblezone$setLastDamageStamp(arg0: number): void;
        bumblezone$setLastDamageSource(arg0: $DamageSource_): void;
        bumblezone$isJumping(): boolean;
        bumblezone$callIsAlwaysExperienceDropper(): boolean;
        bumblezone$callHurtArmor(arg0: $DamageSource_, arg1: number): void;
    }
    export class $ServerPlayerAccessor {
    }
    export interface $ServerPlayerAccessor {
        bumblezone$setStartingToFallPosition(arg0: $Vec3_): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerAccessor}.
     */
    export type $ServerPlayerAccessor_ = ((arg0: $Vec3) => void);
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        bumblezone$callVibrationAndSoundEffectsFromBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean, arg3: boolean, arg4: $Vec3_): boolean;
        bumblezone$getDimensions(): $EntityDimensions;
        bumblezone$setNextStep(arg0: number): void;
        bumblezone$callGetTypeName(): $Component;
        bumblezone$callCollide(arg0: $Vec3_): $Vec3;
        bumblezone$getNextStep(): number;
    }
    export class $FoxAccessor {
    }
    export interface $FoxAccessor {
        bumblezone$callTrusts(arg0: $UUID_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FoxAccessor}.
     */
    export type $FoxAccessor_ = ((arg0: $UUID) => boolean);
    export class $PlayerAdvancementsAccessor {
    }
    export interface $PlayerAdvancementsAccessor {
        bumblezone$getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancementsAccessor}.
     */
    export type $PlayerAdvancementsAccessor_ = (() => $Map_<$AdvancementHolder_, $AdvancementProgress>);
    export class $BeeEntityInvoker {
    }
    export interface $BeeEntityInvoker {
        bumblezone$callSetHasNectar(arg0: boolean): void;
        bumblezone$callSetHasStung(arg0: boolean): void;
    }
    export class $AbstractArrowAccessor {
    }
    export interface $AbstractArrowAccessor {
        bumblezone$callGetPickupItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $AbstractArrowAccessor}.
     */
    export type $AbstractArrowAccessor_ = (() => $ItemStack_);
    export class $ExperienceOrbAccessor {
    }
    export interface $ExperienceOrbAccessor {
        bumblezone$setValue(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ExperienceOrbAccessor}.
     */
    export type $ExperienceOrbAccessor_ = ((arg0: number) => void);
    export class $EntityCollisionContextAccessor {
    }
    export interface $EntityCollisionContextAccessor {
        bumblezone$getHeldItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollisionContextAccessor}.
     */
    export type $EntityCollisionContextAccessor_ = (() => $ItemStack_);
    export class $MobAccessor {
    }
    export interface $MobAccessor {
        bumblezone$getTargetSelector(): $GoalSelector;
    }
    /**
     * Values that may be interpreted as {@link $MobAccessor}.
     */
    export type $MobAccessor_ = (() => $GoalSelector);
    export class $ItemEntityAccessor {
    }
    export interface $ItemEntityAccessor {
        bumblezone$getThrower(): $UUID;
    }
    /**
     * Values that may be interpreted as {@link $ItemEntityAccessor}.
     */
    export type $ItemEntityAccessor_ = (() => $UUID_);
}
