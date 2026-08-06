import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_, $Set } from "@package/java/util";
import { $ModConfigSpec$ConfigValue } from "@package/net/neoforged/neoforge/common";

declare module "@package/com/hollingsworth/arsnouveau/common/util" {
    export class $SpellPartConfigUtil$ComboLimits {
        contains(arg0: $ResourceLocation_): boolean;
        parseComboLimits(): $Set<$ResourceLocation>;
        constructor(arg0: $ModConfigSpec$ConfigValue<$List_<string>>);
    }
    export class $SpellPartConfigUtil$AugmentCosts {
        getAugmentCost(arg0: $ResourceLocation_, arg1: number): number;
    }
    export class $SpellPartConfigUtil$AugmentLimits {
        getAugmentLimit(arg0: $ResourceLocation_): number;
    }
}
