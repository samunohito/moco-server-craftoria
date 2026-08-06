import { $IOException } from "@package/java/io";
import { $Executor_, $BlockingQueue } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $SecretPacket } from "@package/de/maxhenkel/voicechat/net";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Speaker } from "@package/de/maxhenkel/voicechat/voice/client/speaker";
import { $ClientVoicechatSocket } from "@package/de/maxhenkel/voicechat/api";
import { $ALCCapabilities, $ALCapabilities } from "@package/org/lwjgl/openal";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetAddress } from "@package/java/net";
import { $ServerConfig$Codec } from "@package/de/maxhenkel/voicechat/config";
import { $Secret, $NetworkMessage, $SoundPacket } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread, $Runnable_, $Exception } from "@package/java/lang";
export * as speaker from "@package/de/maxhenkel/voicechat/voice/client/speaker";

declare module "@package/de/maxhenkel/voicechat/voice/client" {
    export class $ClientVoicechat {
        connect(arg0: $InitializationData): void;
        close(): void;
        getConnection(): $ClientVoicechatConnection;
        setRecording(arg0: boolean): boolean;
        getStartTime(): number;
        getRecorder(): $AudioRecorder;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        onVoiceChatDisconnected(): void;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        getSoundManager(): $SoundManager;
        toggleRecording(): boolean;
        getTalkCache(): $TalkCache;
        getMicThread(): $MicThread;
        reloadAudio(): void;
        closeMicThread(): void;
        reloadSoundManager(): void;
        closeAudioChannel(arg0: $UUID_): boolean;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        getInitializationData(): $InitializationData;
        constructor();
        get connection(): $ClientVoicechatConnection;
        set recording(value: boolean);
        get startTime(): number;
        get recorder(): $AudioRecorder;
        get soundManager(): $SoundManager;
        get talkCache(): $TalkCache;
        get micThread(): $MicThread;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get initializationData(): $InitializationData;
    }
    export class $AudioChannel extends $Thread {
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        isClosed(): boolean;
        addToQueue(arg0: $SoundPacket<never>): void;
        getChannelId(): $UUID;
        canKill(): boolean;
        getPacketBuffer(): $AudioPacketBuffer;
        closeAndKill(): void;
        getLostPackets(): number;
        getSpeaker(): $Speaker;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $UUID_);
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get closed(): boolean;
        get channelId(): $UUID;
        get packetBuffer(): $AudioPacketBuffer;
        get lostPackets(): number;
        get speaker(): $Speaker;
    }
    export class $AudioRecorder {
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(arg0: number): string;
        getDuration(): string;
        getStartTime(): number;
        getStorage(arg0: number): string;
        getStorage(): string;
        saveAndClose(): void;
        getRecordedPlayerCount(): number;
        flushChunkThreaded(arg0: $UUID_): void;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get startTime(): number;
        get recordedPlayerCount(): number;
    }
    export class $InitializationData {
        getPlayerUUID(): $UUID;
        getServerIP(): string;
        getVoiceChatDistance(): number;
        getKeepAlive(): number;
        getSecret(): $Secret;
        allowRecording(): boolean;
        groupsEnabled(): boolean;
        getCodec(): $ServerConfig$Codec;
        getServerPort(): number;
        getMtuSize(): number;
        constructor(arg0: string, arg1: $SecretPacket);
        get playerUUID(): $UUID;
        get serverIP(): string;
        get voiceChatDistance(): number;
        get keepAlive(): number;
        get secret(): $Secret;
        get codec(): $ServerConfig$Codec;
        get serverPort(): number;
        get mtuSize(): number;
    }
    export class $MicrophoneException extends $IOException {
        constructor(arg0: string);
        constructor(arg0: $Exception);
    }
    export class $AudioPacketBuffer {
        getSize(): number;
        clear(): void;
        poll(arg0: $BlockingQueue<$SoundPacket<never>>): $SoundPacket<never>;
        constructor(arg0: number);
        get size(): number;
    }
    export class $SoundManager {
        close(): void;
        static create(): $SoundManager;
        static create(arg0: string | null): $SoundManager;
        isClosed(): boolean;
        openContext(): boolean;
        getMaxGain(): number;
        static getAlError(arg0: number): string;
        static cleanDeviceName(arg0: string): string;
        static canEnumerate(): boolean;
        closeContext(): void;
        static getAllSpeakers(): $List<string>;
        static canEnumerateAll(): boolean;
        static checkAlError(): boolean;
        static getAlcError(arg0: number): string;
        static checkAlcError(arg0: number): boolean;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        constructor(arg0: string | null, arg1: number, arg2: number, arg3: $ALCCapabilities, arg4: $ALCapabilities, arg5: number);
        get closed(): boolean;
        get maxGain(): number;
        static get allSpeakers(): $List<string>;
    }
    export class $TalkCache {
        isTalking(arg0: $Entity): boolean;
        isTalking(arg0: $UUID_): boolean;
        isWhispering(arg0: $UUID_): boolean;
        isWhispering(arg0: $Entity): boolean;
        updateLevel(arg0: $UUID_, arg1: string | null, arg2: boolean, arg3: number[]): void;
        updateCategoryVolume(arg0: string, arg1: number): void;
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        getPlayerAudioLevel(arg0: $UUID_): number;
        getCategoryAudioLevel(arg0: string): number;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        isConnected(): boolean;
        disconnect(): void;
        isInitialized(): boolean;
        checkTimeout(): void;
        sendToServer(arg0: $NetworkMessage): boolean;
        getSocket(): $ClientVoicechatSocket;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get address(): $InetAddress;
        get data(): $InitializationData;
        get connected(): boolean;
        get initialized(): boolean;
        get socket(): $ClientVoicechatSocket;
    }
    export class $MicThread extends $Thread {
        close(): void;
        isClosed(): boolean;
        isTalking(): boolean;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        isWhispering(): boolean;
        setMicrophoneLocked(arg0: boolean): void;
        shouldTransmitAudio(): boolean;
        pollMic(): number[];
        pollProcessedAudio(arg0: boolean): number[];
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat | null, arg1: $ClientVoicechatConnection | null, arg2: $Consumer_<$MicrophoneException>);
        get closed(): boolean;
        get talking(): boolean;
        get whispering(): boolean;
        set microphoneLocked(value: boolean);
    }
}
