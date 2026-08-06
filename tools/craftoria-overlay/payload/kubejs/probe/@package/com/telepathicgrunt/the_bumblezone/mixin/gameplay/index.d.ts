import { $Item, $ItemCooldowns$CooldownInstance } from "@package/net/minecraft/world/item";
import { $Map } from "@package/java/util";

declare module "@package/com/telepathicgrunt/the_bumblezone/mixin/gameplay" {
    export class $ItemCooldownsAccessor {
    }
    export interface $ItemCooldownsAccessor {
        bumblezone$getCooldowns(): $Map<$Item, $ItemCooldowns$CooldownInstance>;
        bumblezone$getTickCount(): number;
    }
    export class $ServerGamePacketListenerImplAccessor {
    }
    export interface $ServerGamePacketListenerImplAccessor {
        bumblezone$setAboveGroundTickCount(arg0: number): void;
        bumblezone$setAboveGroundVehicleTickCount(arg0: number): void;
    }
    export class $CooldownInstanceAccessor {
    }
    export interface $CooldownInstanceAccessor {
        bumblezone$getStartTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $CooldownInstanceAccessor}.
     */
    export type $CooldownInstanceAccessor_ = (() => number);
}
