import { $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $Value } from "@package/lv/id/bonne/animalpen/interaction/value";

declare module "@package/lv/id/bonne/animalpen/processing/function/api" {
    export class $ShearStateAccessor {
    }
    export interface $ShearStateAccessor {
        setShearedState(arg0: boolean): void;
        set shearedState(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ShearStateAccessor}.
     */
    export type $ShearStateAccessor_ = ((arg0: boolean) => void);
    export class $EntityFunction {
    }
    export interface $EntityFunction {
        interactPlayer(player: $ServerPlayer, interactionHand: $InteractionHand_, itemConsumed: $ItemStack_, amount: number, mob: $Mob, componentHolder: $ItemStack_, blockPos: $BlockPos_, dataKey: string, dataValue: $Value): boolean;
        processFunction(serverLevel: $ServerLevel, mob: $Mob, componentHolder: $ItemStack_, blockPos: $BlockPos_, dataKey: string, dataValue: $Value): boolean;
        interactDispenser(serverLevel: $ServerLevel, dispenserInventory: $Container, itemConsumed: $ItemStack_, amount: number, mob: $Mob, componentHolder: $ItemStack_, blockPos: $BlockPos_, dataKey: string, dataValue: $Value): boolean;
    }
}
