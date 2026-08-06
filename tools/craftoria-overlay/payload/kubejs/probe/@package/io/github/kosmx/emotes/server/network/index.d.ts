import { $ByteBuffer } from "@package/java/nio";
import { $INetworkInstance } from "@package/io/github/kosmx/emotes/api/proxy";
import { $Pair } from "@package/dev/kosmx/playerAnim/core/util";
import { $KeyframeAnimation } from "@package/dev/kosmx/playerAnim/core/data";

declare module "@package/io/github/kosmx/emotes/server/network" {
    export class $EmotePlayTracker {
        isForced(): boolean;
        setPlayedEmote(data: $KeyframeAnimation | null, isForced: boolean): void;
        getPlayedEmote(): $Pair<$KeyframeAnimation, number>;
        constructor();
        get forced(): boolean;
    }
    export class $IServerNetworkInstance {
    }
    export interface $IServerNetworkInstance extends $INetworkInstance {
        disconnect(arg0: string): void;
        sendGeyserPacket(arg0: $ByteBuffer): void;
        getEmoteTracker(): $EmotePlayTracker;
        trackPlayState(): boolean;
        closeConnection(): void;
        get emoteTracker(): $EmotePlayTracker;
    }
}
