import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SyncedTrackedPlayer } from "@package/xaero/map/server/radar/tracker";
import { $Object } from "@package/java/lang";
import { $UUID_, $Set, $UUID } from "@package/java/util";

declare module "@package/xaero/map/server/player" {
    export class $ServerPlayerData {
        static get(arg0: $ServerPlayer): $ServerPlayerData;
        getCurrentlySyncedPlayers(): $Set<$UUID>;
        setLastTrackedPlayerSync(arg0: number): void;
        getLastTrackedPlayerSync(): number;
        setClientModNetworkVersion(arg0: number): void;
        ensureLastSyncedData(): $SyncedTrackedPlayer;
        getClientModNetworkVersion(): number;
        ensureCurrentlySyncedPlayers(): $Set<$UUID>;
        hasMod(): boolean;
        getLastSyncedData(): $SyncedTrackedPlayer;
        setOpacData(arg0: $Object): void;
        getOpacData(): $Object;
        constructor(arg0: $UUID_);
        get currentlySyncedPlayers(): $Set<$UUID>;
        get lastSyncedData(): $SyncedTrackedPlayer;
    }
    export class $IServerPlayer {
    }
    export interface $IServerPlayer {
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData): void;
        getXaeroWorldMapPlayerData(): $ServerPlayerData;
    }
}
