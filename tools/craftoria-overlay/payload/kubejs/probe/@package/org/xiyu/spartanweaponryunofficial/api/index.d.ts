import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Function_ } from "@package/java/util/function";
import { $Tier_, $Item, $ItemStack_, $Tier } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Tool } from "@package/net/minecraft/world/item/component";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List, $List_ } from "@package/java/util";
import { $WeaponTrait } from "@package/org/xiyu/spartanweaponryunofficial/api/trait";
import { $WeaponType_ } from "@package/org/xiyu/spartanweaponryunofficial/util";
export * as trait from "@package/org/xiyu/spartanweaponryunofficial/api/trait";
export * as oil from "@package/org/xiyu/spartanweaponryunofficial/api/oil";

declare module "@package/org/xiyu/spartanweaponryunofficial/api" {
    export class $WeaponMaterial implements $Tier, $IReloadable {
        static builder(arg0: string, arg1: string): $WeaponMaterial$Builder;
        reload(): void;
        translateName(): $Component;
        /**
         * @deprecated
         */
        getLevel(): number;
        getRepairTagName(): string;
        getRepairTag(): $TagKey<$Item>;
        getModId(): string;
        getAttackDamageBonus(): number;
        getEnchantmentValue(): number;
        setDurability(arg0: number): void;
        static colorRGB(arg0: number, arg1: number, arg2: number): number;
        static colorRGB(arg0: number, arg1: number, arg2: number): number;
        getSpeed(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getUses(): number;
        setIncorrectBlocksForDrops(arg0: $TagKey_<$Block>): $WeaponMaterial;
        setUseCustomDisplayName(): $WeaponMaterial;
        setUseCustomDisplayName(arg0: $Function_<string, string>): $WeaponMaterial;
        useCustomDisplayName(): boolean;
        getPrimaryColour(): number;
        getTraitsTag(): $TagKey<$WeaponTrait>;
        addTraitsToTooltip(arg0: $ItemStack_, arg1: $WeaponType_, arg2: $List_<$Component_>, arg3: boolean): void;
        /**
         * @deprecated
         */
        addTraitsToTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>, arg2: boolean): void;
        addTagErrorTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getSecondaryColour(): number;
        /**
         * @deprecated
         */
        getBonusTraits(): $List<$WeaponTrait>;
        getBonusTraits(arg0: $WeaponType_): $List<$WeaponTrait>;
        /**
         * @deprecated
         */
        hasAnyBonusTraits(): boolean;
        hasAnyBonusTraits(arg0: $WeaponType_): boolean;
        setAttackDamage(arg0: number): void;
        getMaterialName(): string;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        static GOLD: $WeaponMaterial;
        static NETHERITE: $WeaponMaterial;
        static WOOD: $WeaponMaterial;
        static DIAMOND: $WeaponMaterial;
        static SILVER: $WeaponMaterial;
        static PLATINUM: $WeaponMaterial;
        static COPPER: $WeaponMaterial;
        static IRON: $WeaponMaterial;
        static INVAR: $WeaponMaterial;
        static ALUMINUM: $WeaponMaterial;
        static BRONZE: $WeaponMaterial;
        static STEEL: $WeaponMaterial;
        static NICKEL: $WeaponMaterial;
        static CONSTANTAN: $WeaponMaterial;
        static DEFAULT_SECONDARY_COLOUR: number;
        static TIN: $WeaponMaterial;
        static DEFAULT_PRIMARY_COLOUR: number;
        static LEATHER: $WeaponMaterial;
        static ELECTRUM: $WeaponMaterial;
        static STONE: $WeaponMaterial;
        static LEAD: $WeaponMaterial;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TagKey_<$Item>, arg7: $TagKey_<$WeaponTrait>);
        constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $TagKey_<$Item>, arg9: $TagKey_<$WeaponTrait>);
        constructor(arg0: string, arg1: string, arg2: $Tier_, arg3: $TagKey_<$Item>, arg4: $TagKey_<$WeaponTrait>);
        get level(): number;
        get repairTagName(): string;
        get repairTag(): $TagKey<$Item>;
        get modId(): string;
        get attackDamageBonus(): number;
        get enchantmentValue(): number;
        set durability(value: number);
        get speed(): number;
        get repairIngredient(): $Ingredient;
        get uses(): number;
        get primaryColour(): number;
        get traitsTag(): $TagKey<$WeaponTrait>;
        get secondaryColour(): number;
        set attackDamage(value: number);
        get materialName(): string;
    }
    export class $WeaponMaterial$Builder {
        build(): $WeaponMaterial;
        colours(arg0: number, arg1: number): $WeaponMaterial$Builder;
        durability(arg0: number): $WeaponMaterial$Builder;
        enchantmentValue(arg0: number): $WeaponMaterial$Builder;
        incorrectBlocksForDrops(arg0: $TagKey_<$Block>): $WeaponMaterial$Builder;
        attackDamageBonus(arg0: number): $WeaponMaterial$Builder;
        tier(arg0: $Tier_): $WeaponMaterial$Builder;
        baseDamage(arg0: number): $WeaponMaterial$Builder;
        colors(arg0: number, arg1: number): $WeaponMaterial$Builder;
        speed(arg0: number): $WeaponMaterial$Builder;
        repairTag(arg0: $TagKey_<$Item>): $WeaponMaterial$Builder;
        traitsTag(arg0: $TagKey_<$WeaponTrait>): $WeaponMaterial$Builder;
        enchantability(arg0: number): $WeaponMaterial$Builder;
    }
    export class $IReloadable {
    }
    export interface $IReloadable {
        reload(): void;
    }
    /**
     * Values that may be interpreted as {@link $IReloadable}.
     */
    export type $IReloadable_ = (() => void);
}
