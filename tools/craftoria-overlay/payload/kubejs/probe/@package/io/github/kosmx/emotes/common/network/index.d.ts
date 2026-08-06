import { $NetHashMap, $NetData } from "@package/io/github/kosmx/emotes/common/network/objects";
import { $Enum } from "@package/java/lang";
import { $UUID_, $HashMap } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $KeyframeAnimation } from "@package/dev/kosmx/playerAnim/core/data";
export * as objects from "@package/io/github/kosmx/emotes/common/network/objects";

declare module "@package/io/github/kosmx/emotes/common/network" {
    export class $EmotePacket {
        write(): $ByteBuffer;
        read(byteBuffer: $ByteBuffer): $NetData;
        data: $NetData;
        static defaultVersions: $HashMap<number, number>;
        subPackets: $NetHashMap;
    }
    export class $EmotePacket$Builder {
        copy(): $EmotePacket$Builder;
        build(): $EmotePacket;
        build(sizeLimit: number): $EmotePacket;
        setThreshold(t: number): $EmotePacket$Builder;
        setVersion(versions: $HashMap<number, number>): $EmotePacket$Builder;
        configureToSaveEmote(emoteData: $KeyframeAnimation): $EmotePacket$Builder;
        configureToStreamEmote(emoteData: $KeyframeAnimation): $EmotePacket$Builder;
        configureToStreamEmote(emoteData: $KeyframeAnimation, player: $UUID_ | null): $EmotePacket$Builder;
        configureToSendStop(emoteID: $UUID_, player: $UUID_ | null): $EmotePacket$Builder;
        configureToSendStop(emoteID: $UUID_): $EmotePacket$Builder;
        configureToConfigExchange(songEnabled: boolean): $EmotePacket$Builder;
        configureEmoteTick(tick: number): $EmotePacket$Builder;
        setSizeLimit(sizeLimit: number): $EmotePacket$Builder;
        copyAndGetData(): $NetData;
        configureTarget(target: $UUID_ | null): $EmotePacket$Builder;
        removePlayerID(): void;
        constructor(data: $NetData);
        constructor();
        set threshold(value: number);
        set version(value: $HashMap<number, number>);
        set sizeLimit(value: number);
    }
    export class $PacketTask extends $Enum<$PacketTask> {
        static values(): $PacketTask[];
        static valueOf(name: string): $PacketTask;
        static getTaskFromID(b: number): $PacketTask;
        static CONFIG: $PacketTask;
        static STOP: $PacketTask;
        isEmoteStream: boolean;
        playerBound: boolean;
        static STREAM: $PacketTask;
        exchangeHeader: boolean;
        static UNKNOWN: $PacketTask;
        id: number;
        static FILE: $PacketTask;
    }
    /**
     * Values that may be interpreted as {@link $PacketTask}.
     */
    export type $PacketTask_ = "unknown" | "stream" | "config" | "stop" | "file";
}
