import { $EmotePacket$Builder } from "@package/io/github/kosmx/emotes/common/network";
import { $Consumer_ } from "@package/java/util/function";
import { $UUID_, $HashMap } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/io/github/kosmx/emotes/api/proxy" {
    export class $INetworkInstance {
        static safeGetBytesFromBuffer(byteBuffer: $ByteBuffer): number[];
    }
    export interface $INetworkInstance {
        isActive(): boolean;
        maxDataSize(): number;
        safeProxy(): boolean;
        getRemoteVersions(): $HashMap<number, number>;
        setVersions(arg0: $HashMap<number, number>): void;
        sendPlayerID(): boolean;
        /**
         * @deprecated
         */
        presenceResponse(): void;
        receiveMessage(byteBuffer: $ByteBuffer, player: $UUID_): void;
        /**
         * @deprecated
         */
        sendConfigCallback(): void;
        sendC2SConfig(consumer: $Consumer_<$EmotePacket$Builder>): void;
        getRemoteVersion(): number;
        sendMessage(arg0: $EmotePacket$Builder, arg1: $UUID_ | null): void;
        allowEmoteStreamC2S(): boolean;
        trustReceivedPlayer(): boolean;
        isServerTrackingPlayState(): boolean;
        get active(): boolean;
        get remoteVersions(): $HashMap<number, number>;
        set versions(value: $HashMap<number, number>);
        get remoteVersion(): number;
        get serverTrackingPlayState(): boolean;
    }
}
