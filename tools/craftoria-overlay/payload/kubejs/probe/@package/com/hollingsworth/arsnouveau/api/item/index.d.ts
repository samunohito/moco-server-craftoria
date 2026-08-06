import { $Level_ } from "@package/net/minecraft/world/level";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SpellContext, $AbstractSpellPart, $SpellStats$Builder } from "@package/com/hollingsworth/arsnouveau/api/spell";
import { $HitResult } from "@package/net/minecraft/world/phys";
export * as inv from "@package/com/hollingsworth/arsnouveau/api/item/inv";

declare module "@package/com/hollingsworth/arsnouveau/api/item" {
    export class $ISpellModifier {
    }
    export interface $ISpellModifier {
        applyModifiers(arg0: $SpellStats$Builder, arg1: $AbstractSpellPart, arg2: $HitResult, arg3: $Level_, arg4: $LivingEntity | null, arg5: $SpellContext): $SpellStats$Builder;
    }
}
