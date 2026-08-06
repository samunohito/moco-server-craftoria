import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";

declare module "@package/com/yungnickyoung/minecraft/betterendisland/mixin/accessor" {
    export class $EndDragonFightAccessor {
    }
    export interface $EndDragonFightAccessor {
        getPortalLocation(): $BlockPos;
        setDragonKilled(arg0: boolean): void;
        invokeCreateNewDragon(): $EnderDragon;
        getPreviouslyKilled(): boolean;
        setPortalLocation(arg0: $BlockPos_): void;
        getGateways(): $ObjectArrayList<number>;
        getDragonEvent(): $ServerBossEvent;
        set dragonKilled(value: boolean);
        get previouslyKilled(): boolean;
        get gateways(): $ObjectArrayList<number>;
        get dragonEvent(): $ServerBossEvent;
    }
}
