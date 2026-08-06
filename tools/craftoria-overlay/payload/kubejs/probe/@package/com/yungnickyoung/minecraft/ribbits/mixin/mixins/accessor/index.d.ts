import { $BlockSetType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $DoorBlock } from "@package/net/minecraft/world/level/block";

declare module "@package/com/yungnickyoung/minecraft/ribbits/mixin/mixins/accessor" {
    export class $DoorBlockAccessor {
        static createDoorBlock(arg0: $BlockSetType_, arg1: $BlockBehaviour$Properties): $DoorBlock;
    }
    export interface $DoorBlockAccessor {
    }
}
