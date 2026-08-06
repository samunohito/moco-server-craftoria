import { $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";

declare module "@package/lv/id/bonne/animalpen/mixin/invokers" {
    export class $MobInvoker {
    }
    export interface $MobInvoker {
        callGetEquipmentDropChance(arg0: $EquipmentSlot_): number;
    }
    /**
     * Values that may be interpreted as {@link $MobInvoker}.
     */
    export type $MobInvoker_ = ((arg0: $EquipmentSlot) => number);
}
