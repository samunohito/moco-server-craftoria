import { $LootParams } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/telepathicgrunt/the_bumblezone/mixin/loot" {
    export class $LootContextAccessor {
    }
    export interface $LootContextAccessor {
        bumblezone$getParams(): $LootParams;
    }
    /**
     * Values that may be interpreted as {@link $LootContextAccessor}.
     */
    export type $LootContextAccessor_ = (() => $LootParams);
}
