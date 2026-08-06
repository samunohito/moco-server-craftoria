import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $SpellRarity, $SpellRarity_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
export * as weapons from "@package/io/redspace/ironsspellbooks/item/weapons";
export * as armor from "@package/io/redspace/ironsspellbooks/item/armor";

declare module "@package/io/redspace/ironsspellbooks/item" {
    export class $InkItem extends $Item {
        fluid(): $Holder<$Fluid>;
        getRarity(): $SpellRarity;
        static getInkForRarity(arg0: $SpellRarity_): $InkItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $SpellRarity_, arg1: $Holder_<$Fluid>);
        get rarity(): $SpellRarity;
    }
}
