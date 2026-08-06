import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";

declare module "@package/org/xiyu/spartanweaponryunofficial/api/oil" {
    export class $OilEffect$OilEffectType extends $Enum<$OilEffect$OilEffectType> {
        static values(): $OilEffect$OilEffectType[];
        static valueOf(arg0: string): $OilEffect$OilEffectType;
        static POTENT: $OilEffect$OilEffectType;
        static EFFECT_ONLY: $OilEffect$OilEffectType;
        static SUSTAINED: $OilEffect$OilEffectType;
        static NONE: $OilEffect$OilEffectType;
        static STANDARD: $OilEffect$OilEffectType;
    }
    /**
     * Values that may be interpreted as {@link $OilEffect$OilEffectType}.
     */
    export type $OilEffect$OilEffectType_ = "none" | "standard" | "sustained" | "potent" | "effect_only";
    export interface $OilEffect extends RegistryMarked<RegistryTypes.SpartanWeaponryUnofficialOilEffectsTag, RegistryTypes.SpartanWeaponryUnofficialOilEffects> {}
    export class $OilEffect {
        getName(): string;
        getType(): $OilEffect$OilEffectType;
        getColor(arg0: $ItemStack_): number;
        updateFromConfig(arg0: number, arg1: number): void;
        onUse(arg0: number, arg1: $Level_, arg2: $LivingEntity, arg3: $LivingEntity, arg4: $ItemStack_): number;
        getDamageModifier(): number;
        getTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getMaxUses(): number;
        static USE_AQUATIC: $OilEffect$IUsePredicate;
        static USE_NOTHING: $OilEffect$IUsePredicate;
        static USE_ENDER: $OilEffect$IUsePredicate;
        static USE_NECTROTIC: $OilEffect$IUsePredicate;
        static USE_CREEPER: $OilEffect$IUsePredicate;
        static USE_ARTHROPOD: $OilEffect$IUsePredicate;
        static USE_CRYOTIC: $OilEffect$IUsePredicate;
        static USE_UNDEAD: $OilEffect$IUsePredicate;
        constructor(arg0: string, arg1: $OilEffect$OilEffectType_, arg2: number, arg3: number, arg4: number, arg5: $OilEffect$IUsePredicate_, arg6: boolean);
        constructor(arg0: string, arg1: $OilEffect$OilEffectType_, arg2: number, arg3: number, arg4: number, arg5: $OilEffect$IUsePredicate_);
        get name(): string;
        get type(): $OilEffect$OilEffectType;
        get damageModifier(): number;
        get maxUses(): number;
    }
    /**
     * Values that may be interpreted as {@link $OilEffect}.
     */
    export type $OilEffect_ = RegistryTypes.SpartanWeaponryUnofficialOilEffects;
    export class $OilEffect$IUsePredicate {
    }
    export interface $OilEffect$IUsePredicate {
        test(arg0: number, arg1: $OilEffect_, arg2: $Level_, arg3: $LivingEntity, arg4: $LivingEntity): boolean;
    }
    /**
     * Values that may be interpreted as {@link $OilEffect$IUsePredicate}.
     */
    export type $OilEffect$IUsePredicate_ = ((arg0: number, arg1: $OilEffect, arg2: $Level, arg3: $LivingEntity, arg4: $LivingEntity) => boolean);
}
