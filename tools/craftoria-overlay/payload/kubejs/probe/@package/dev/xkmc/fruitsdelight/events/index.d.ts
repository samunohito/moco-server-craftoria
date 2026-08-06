import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/dev/xkmc/fruitsdelight/events" {
    export class $FoodDataAccessor {
    }
    export interface $FoodDataAccessor {
        fruitsdelight$setPlayer(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $FoodDataAccessor}.
     */
    export type $FoodDataAccessor_ = ((arg0: $Player) => void);
}
