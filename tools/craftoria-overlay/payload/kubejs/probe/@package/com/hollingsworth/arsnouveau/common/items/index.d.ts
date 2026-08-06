import { $Rarity_, $Item$Properties, $Item, $Rarity } from "@package/net/minecraft/world/item";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractSpellPart } from "@package/com/hollingsworth/arsnouveau/api/spell";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";

declare module "@package/com/hollingsworth/arsnouveau/common/items" {
    export class $ModItem extends $Item {
        withTooltip(arg0: string): $ModItem;
        withTooltip(arg0: $Component_): $ModItem;
        withRarity(arg0: $Rarity_): $ModItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        tooltip: $List<$Component>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        rarity: $Rarity;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        constructor();
    }
    export class $ItemScroll$SortPref extends $Enum<$ItemScroll$SortPref> {
        static values(): $ItemScroll$SortPref[];
        static valueOf(arg0: string): $ItemScroll$SortPref;
        static HIGH: $ItemScroll$SortPref;
        static LOW: $ItemScroll$SortPref;
        static HIGHEST: $ItemScroll$SortPref;
        static INVALID: $ItemScroll$SortPref;
    }
    /**
     * Values that may be interpreted as {@link $ItemScroll$SortPref}.
     */
    export type $ItemScroll$SortPref_ = "invalid" | "low" | "high" | "highest";
    export class $Glyph extends $ModItem {
        getName(): $Component;
        spellPart: $AbstractSpellPart;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        tooltip: $List<$Component>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        rarity: $Rarity;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $AbstractSpellPart);
        get name(): $Component;
    }
}
