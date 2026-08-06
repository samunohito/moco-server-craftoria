import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Holder_, $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $AbstractSpell } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Attribute, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Enum } from "@package/java/lang";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $StaffTier } from "@package/io/redspace/ironsspellbooks/item/weapons";

declare module "@package/com/squoshi/irons_spells_js/item" {
    export class $CustomStaff$Builder$StaffTierEnum extends $Enum<$CustomStaff$Builder$StaffTierEnum> {
        static values(): $CustomStaff$Builder$StaffTierEnum[];
        static valueOf(arg0: string): $CustomStaff$Builder$StaffTierEnum;
        getTier(): $StaffTier;
        static BLOOD_STAFF: $CustomStaff$Builder$StaffTierEnum;
        static ICE_STAFF: $CustomStaff$Builder$StaffTierEnum;
        static LIGHTNING_ROD: $CustomStaff$Builder$StaffTierEnum;
        static GRAYBEARD: $CustomStaff$Builder$StaffTierEnum;
        static ARTIFICER: $CustomStaff$Builder$StaffTierEnum;
        get tier(): $StaffTier;
    }
    /**
     * Values that may be interpreted as {@link $CustomStaff$Builder$StaffTierEnum}.
     */
    export type $CustomStaff$Builder$StaffTierEnum_ = "graybeard" | "artificer" | "ice_staff" | "lightning_rod" | "blood_staff";
    export class $CustomMagicSwordItem$TierBuilder {
        addAttribute(arg0: $Holder_<$Attribute>, arg1: number, arg2: $AttributeModifier$Operation_): $CustomMagicSwordItem$TierBuilder;
        setUses(arg0: number): $CustomMagicSwordItem$TierBuilder;
        setDamage(arg0: number): $CustomMagicSwordItem$TierBuilder;
        setSpeed(arg0: number): $CustomMagicSwordItem$TierBuilder;
        setIncorrectBlocksForDrops(arg0: $TagKey_<$Block>): $CustomMagicSwordItem$TierBuilder;
        setRepairIngredient(arg0: $Supplier_<$Ingredient>): $CustomMagicSwordItem$TierBuilder;
        setEnchantmentValue(arg0: number): $CustomMagicSwordItem$TierBuilder;
        useBaseTier(arg0: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum_, arg1: boolean): $CustomMagicSwordItem$TierBuilder;
        constructor();
        set uses(value: number);
        set damage(value: number);
        set speed(value: number);
        set incorrectBlocksForDrops(value: $TagKey_<$Block>);
        set repairIngredient(value: $Supplier_<$Ingredient>);
        set enchantmentValue(value: number);
    }
    export class $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum extends $Enum<$CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum> {
        static values(): $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum[];
        static valueOf(arg0: string): $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static LEGIONNAIRE_FLAMBERGE: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static DREADSWORD: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static CRYSTAL_MAGEHUNTER: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static DECREPIT_FLAMBERGE: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static MISERY: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static DECREPIT_SCYTHE: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static METAL_MAGEHUNTER: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static CLAYMORE: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static TRUTHSEEKER: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static HELLRAZOR: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static SPELLBREAKER: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
        static AMETHYST_RAPIER: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;
    }
    /**
     * Values that may be interpreted as {@link $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum}.
     */
    export type $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum_ = "hellrazor" | "legionnaire_flamberge" | "decrepit_flamberge" | "decrepit_scythe" | "dreadsword" | "misery" | "metal_magehunter" | "crystal_magehunter" | "spellbreaker" | "truthseeker" | "claymore" | "amethyst_rapier";
    export class $CustomStaff$Builder extends $ItemBuilder {
        setTier(arg0: $Consumer_<$CustomStaff$Builder$StaffTierBuilder>): this;
        setEnchantmentValue(arg0: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
        set tier(value: $Consumer_<$CustomStaff$Builder$StaffTierBuilder>);
        set enchantmentValue(value: number);
    }
    export class $CustomStaff$Builder$StaffTierBuilder {
        addAttribute(arg0: $Holder_<$Attribute>, arg1: number, arg2: $AttributeModifier$Operation_): $CustomStaff$Builder$StaffTierBuilder;
        setDamage(arg0: number): $CustomStaff$Builder$StaffTierBuilder;
        setSpeed(arg0: number): $CustomStaff$Builder$StaffTierBuilder;
        useBaseTier(arg0: $CustomStaff$Builder$StaffTierEnum_, arg1: boolean): $CustomStaff$Builder$StaffTierBuilder;
        constructor();
        set damage(value: number);
        set speed(value: number);
    }
    export class $CustomSpellBook$Builder extends $ItemBuilder {
        /**
         * Adds a default attribute to the item. Can be used multiple times.
         * The modifier operation can be either `ADD_MULTIPLIED_BASE`, `ADD_MULTIPLIED_TOTAL` or `ADD_VALUE`.
         */
        addAttribute(arg0: $Holder_<$Attribute>, arg1: number, arg2: $AttributeModifier$Operation_): this;
        /**
         * Adds a default spell to the item. Can be used multiple times. It takes a spell ID (or a spell object) and the spell level.
         * This will turn into Unique Spellbook.
         */
        addSpell(arg0: $Holder_<$AbstractSpell>, arg1: number): this;
        /**
         * Sets an affinity that will make this spell a +1 level boost.
         */
        setAffinitySpell(arg0: $Holder_<$AbstractSpell>): this;
        /**
         * Sets the maximum amount of spell slots the spell book can have.
         */
        setMaxSpellSlots(arg0: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
        set affinitySpell(value: $Holder_<$AbstractSpell>);
        set maxSpellSlots(value: number);
    }
    export class $CustomMagicSwordItem$Builder extends $ItemBuilder {
        addSpell(arg0: $Holder_<$AbstractSpell>, arg1: number): $CustomMagicSwordItem$Builder;
        setTier(arg0: $Consumer_<$CustomMagicSwordItem$TierBuilder>): $CustomMagicSwordItem$Builder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
        set tier(value: $Consumer_<$CustomMagicSwordItem$TierBuilder>);
    }
}
