import { $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $EntityFunction } from "@package/lv/id/bonne/animalpen/processing/function/api";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $Value } from "@package/lv/id/bonne/animalpen/interaction/value";

declare module "@package/lv/id/bonne/animalpen/processing/function/wrapper" {
    export interface $EntityFunctionEntry extends RegistryMarked<RegistryTypes.AnimalPenEntityFunctionTag, RegistryTypes.AnimalPenEntityFunction> {}
    export class $EntityFunctionEntry {
        "function"(): $EntityFunction;
        interactPlayer(player: $ServerPlayer, hand: $InteractionHand_, item: $ItemStack_, amount: number, mob: $Mob, componentHolder: $ItemStack_, pos: $BlockPos_, dataKey: string, dataValue: $Value): boolean;
        processFunction(level: $ServerLevel, mob: $Mob, componentHolder: $ItemStack_, pos: $BlockPos_, dataKey: string, dataValue: $Value): boolean;
        interactDispenser(level: $ServerLevel, inventory: $Container, item: $ItemStack_, amount: number, mob: $Mob, componentHolder: $ItemStack_, pos: $BlockPos_, dataKey: string, dataValue: $Value): boolean;
        static CODEC: $Codec<$EntityFunctionEntry>;
        constructor(arg0: $EntityFunction);
    }
    /**
     * Values that may be interpreted as {@link $EntityFunctionEntry}.
     */
    export type $EntityFunctionEntry_ = RegistryTypes.AnimalPenEntityFunction;
}
