import { $PacketTask } from "@package/io/github/kosmx/emotes/common/network";
import { $HashMap, $UUID } from "@package/java/util";
import { $KeyframeAnimation } from "@package/dev/kosmx/playerAnim/core/data";

declare module "@package/io/github/kosmx/emotes/common/network/objects" {
    export class $NetHashMap extends $HashMap<number, $AbstractNetworkPacket> {
        put(packet: $AbstractNetworkPacket): void;
        constructor();
    }
    export class $NetData {
        copy(): $NetData;
        prepareAndValidate(): boolean;
        stopEmoteID: $UUID;
        purpose: $PacketTask;
        threshold: number;
        tick: number;
        isForced: boolean;
        valid: boolean;
        sizeLimit: number;
        versions: $HashMap<number, number>;
        emoteData: $KeyframeAnimation;
        writeSong: boolean;
        wasEmoteData: boolean;
        versionsUpdated: boolean;
        player: $UUID;
        constructor();
    }
}
