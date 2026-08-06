import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack_, $UseAnim, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $WeaponMaterial } from "@package/org/xiyu/spartanweaponryunofficial/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableMultimap$Builder } from "@package/com/google/common/collect";
import { $AttributeModifier_, $Attribute_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List_ } from "@package/java/util";
import { $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $InteractionResult, $InteractionResultHolder, $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ChatFormatting } from "@package/net/minecraft";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum } from "@package/java/lang";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/org/xiyu/spartanweaponryunofficial/api/trait" {
    export class $IActionTraitCallback {
    }
    export interface $IActionTraitCallback {
        use(arg0: $ItemStack_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        releaseUsing(arg0: $ItemStack_, arg1: $Level_, arg2: $LivingEntity, arg3: number, arg4: number): void;
        getUseDuration(arg0: $ItemStack_, arg1: $LivingEntity): number;
        useOn(arg0: $UseOnContext): $InteractionResult;
        getUseAnimation(arg0: $ItemStack_): $UseAnim;
        onUsingTick(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number, arg3: number): void;
        doesSneakBypassUse(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IActionTraitCallback}.
     */
    export type $IActionTraitCallback_ = ((arg0: $ItemStack, arg1: $Level, arg2: $Player, arg3: $InteractionHand) => $InteractionResultHolder<$ItemStack_>);
    export class $IThrowingTraitCallback {
    }
    export interface $IThrowingTraitCallback {
        modifyThrowingChargeTime(arg0: $WeaponMaterial, arg1: number): number;
        onThrowingProjectileSpawn(arg0: $WeaponMaterial, arg1: $AbstractArrow): void;
    }
    export class $WeaponTrait$InvalidReason extends $Enum<$WeaponTrait$InvalidReason> {
        static values(): $WeaponTrait$InvalidReason[];
        static valueOf(arg0: string): $WeaponTrait$InvalidReason;
        getLanguageKey(): string;
        static WEAPON_NOT_MELEE: $WeaponTrait$InvalidReason;
        static WEAPON_NOT_RANGED: $WeaponTrait$InvalidReason;
        static MATERIAL_ACTION_TRAIT: $WeaponTrait$InvalidReason;
        static WEAPON_NOT_SUPPORTED: $WeaponTrait$InvalidReason;
        static WEAPON_NOT_THROWING: $WeaponTrait$InvalidReason;
        static MULTIPLE_ACTION_TRAITS: $WeaponTrait$InvalidReason;
        static NONE: $WeaponTrait$InvalidReason;
        get languageKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $WeaponTrait$InvalidReason}.
     */
    export type $WeaponTrait$InvalidReason_ = "none" | "multiple_action_traits" | "material_action_trait" | "weapon_not_melee" | "weapon_not_ranged" | "weapon_not_throwing" | "weapon_not_supported";
    export class $WeaponTrait {
        getType(): string;
        setLevel(arg0: number): $WeaponTrait;
        getLevel(): number;
        getModId(): string;
        addTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>, arg2: boolean, arg3: $WeaponTrait$InvalidReason_): void;
        addTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>, arg2: boolean): void;
        canPerformToolAction(arg0: $ItemStack_, arg1: $ItemAbility_): boolean;
        isMeleeTrait(): boolean;
        isRangedTrait(): boolean;
        getMeleeCallback(): ($IMeleeTraitCallback) | undefined;
        getRangedCallback(): ($IRangedTraitCallback) | undefined;
        isThrowingTrait(): boolean;
        getActionCallback(): ($IActionTraitCallback) | undefined;
        getQuality(): $WeaponTrait$TraitQuality;
        isEnchantmentCompatible(arg0: $Enchantment_): boolean;
        isEnchantmentIncompatible(arg0: $Enchantment_): boolean;
        getThrowingCallback(): ($IThrowingTraitCallback) | undefined;
        setRanged(): $WeaponTrait;
        setMelee(): $WeaponTrait;
        getGenericCallback(): ($IGenericTraitCallback) | undefined;
        getMagnitude(): number;
        /**
         * @deprecated
         */
        setUniversal(arg0: boolean): $WeaponTrait;
        setUniversal(): $WeaponTrait;
        isActionTrait(): boolean;
        setThrowing(): $WeaponTrait;
        /**
         * @deprecated
         */
        setActionTrait(): $WeaponTrait;
        setMagnitude(arg0: number): $WeaponTrait;
        static INVALID_FORMAT: $ChatFormatting[];
        static DESCRIPTION_FORMAT: $ChatFormatting[];
        constructor(arg0: string, arg1: string, arg2: $WeaponTrait$TraitQuality_);
        get type(): string;
        get modId(): string;
        get meleeTrait(): boolean;
        get rangedTrait(): boolean;
        get meleeCallback(): ($IMeleeTraitCallback) | undefined;
        get rangedCallback(): ($IRangedTraitCallback) | undefined;
        get throwingTrait(): boolean;
        get actionCallback(): ($IActionTraitCallback) | undefined;
        get quality(): $WeaponTrait$TraitQuality;
        get throwingCallback(): ($IThrowingTraitCallback) | undefined;
        get genericCallback(): ($IGenericTraitCallback) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $WeaponTrait}.
     */
    export type $WeaponTrait_ = RegistryTypes.SpartanWeaponryUnofficialWeaponTraits;
    export class $IRangedTraitCallback {
    }
    export interface $IRangedTraitCallback {
        modifyHeavyCrossbowLoadTime(arg0: $WeaponMaterial, arg1: number): number;
        modifyHeavyCrossbowAimTime(arg0: $WeaponMaterial, arg1: number): number;
        modifyLongbowDrawTime(arg0: $WeaponMaterial, arg1: number): number;
        onProjectileSpawn(arg0: $WeaponMaterial, arg1: $AbstractArrow): void;
    }
    export class $IGenericTraitCallback {
    }
    export interface $IGenericTraitCallback {
        onItemUpdate(arg0: $WeaponMaterial, arg1: $ItemStack_, arg2: $Level_, arg3: $LivingEntity, arg4: number, arg5: boolean): void;
        onModifyAttributes(arg0: $ImmutableMultimap$Builder<$Attribute_, $AttributeModifier_>): void;
        onDamageItem<T extends $LivingEntity>(arg0: $ItemStack_, arg1: T, arg2: number): number;
        onCreateItem(arg0: $WeaponMaterial, arg1: $ItemStack_): void;
    }
    export class $WeaponTrait$TraitQuality extends $Enum<$WeaponTrait$TraitQuality> {
        static values(): $WeaponTrait$TraitQuality[];
        static valueOf(arg0: string): $WeaponTrait$TraitQuality;
        getFormatting(): $ChatFormatting;
        static POSITIVE: $WeaponTrait$TraitQuality;
        static NEGATIVE: $WeaponTrait$TraitQuality;
        static NEUTRAL: $WeaponTrait$TraitQuality;
        get formatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $WeaponTrait$TraitQuality}.
     */
    export type $WeaponTrait$TraitQuality_ = "positive" | "neutral" | "negative";
    export class $IMeleeTraitCallback {
    }
    export interface $IMeleeTraitCallback extends $IGenericTraitCallback {
        onHitEntity(arg0: $WeaponMaterial, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $LivingEntity, arg4: $Entity): void;
        onItemUpdate(arg0: $WeaponMaterial, arg1: $ItemStack_, arg2: $Level_, arg3: $LivingEntity, arg4: number, arg5: boolean): void;
        modifyDamageDealt(arg0: $WeaponMaterial, arg1: number, arg2: $DamageSource_, arg3: $LivingEntity, arg4: $LivingEntity): number;
        modifyDamageTaken(arg0: $WeaponMaterial, arg1: number, arg2: $DamageSource_, arg3: $LivingEntity, arg4: $LivingEntity): number;
        onModifyAttributes(arg0: $ImmutableMultimap$Builder<$Attribute_, $AttributeModifier_>): void;
        onModifyAttributesMelee(arg0: $ImmutableMultimap$Builder<$Attribute_, $AttributeModifier_>): void;
        onCreateItem(arg0: $WeaponMaterial, arg1: $ItemStack_): void;
    }
    export interface $WeaponTrait extends RegistryMarked<RegistryTypes.SpartanWeaponryUnofficialWeaponTraitsTag, RegistryTypes.SpartanWeaponryUnofficialWeaponTraits> {}
}
