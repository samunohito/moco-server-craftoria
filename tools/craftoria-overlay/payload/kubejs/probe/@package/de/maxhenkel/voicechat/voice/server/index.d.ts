import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $VoicechatSocket, $Group$Type } from "@package/de/maxhenkel/voicechat/api";
import { $SocketAddress } from "@package/java/net";
import { $Packet, $Secret, $NetworkMessage, $MicPacket, $PingPacket, $SoundPacket, $ClientGroup, $PlayerState } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread } from "@package/java/lang";
import { $UUID, $Map, $UUID_, $Collection_, $Collection } from "@package/java/util";
import { $CategoryManager } from "@package/de/maxhenkel/voicechat/plugins";

declare module "@package/de/maxhenkel/voicechat/voice/server" {
    export class $PingManager$PingListener {
    }
    export interface $PingManager$PingListener {
        onPong(arg0: number, arg1: number): void;
        onFailedAttempt(arg0: number): void;
        onTimeout(arg0: number): void;
    }
    export class $Server extends $Thread {
        close(): void;
        getPort(): number;
        getConnection(arg0: $UUID_): $ClientConnection;
        broadcast(arg0: $Collection_<$ServerPlayer>, arg1: $SoundPacket<never>, arg2: $ServerPlayer | null, arg3: $PlayerState | null, arg4: $UUID_ | null, arg5: string): void;
        isClosed(): boolean;
        sendPacket(arg0: $Packet<never>, arg1: $ClientConnection): boolean;
        getBroadcastRange(arg0: number): number;
        getSender(arg0: $NetworkMessage): $ClientConnection;
        getPlayerStateManager(): $PlayerStateManager;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        getSocket(): $VoicechatSocket;
        changePort(arg0: number): void;
        getServer(): $MinecraftServer;
        getConnections(): $Map<$UUID, $ClientConnection>;
        getSecret(arg0: $UUID_): $Secret;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        sendSoundPacket(arg0: $ServerPlayer | null, arg1: $PlayerState | null, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $ClientConnection | null, arg5: $SoundPacket<never>, arg6: string): void;
        getPingManager(): $PingManager;
        getCategoryManager(): $ServerCategoryManager;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        generateNewSecret(arg0: $UUID_): $Secret;
        getGroupManager(): $ServerGroupManager;
        onMicPacket(arg0: $UUID_, arg1: $MicPacket): void;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        sendPacketRaw(arg0: $Packet<never>, arg1: $ClientConnection): void;
        disconnectClient(arg0: $UUID_): void;
        getUnconnectedSender(arg0: $NetworkMessage): $ClientConnection;
        hasSecret(arg0: $UUID_): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $MinecraftServer);
        get port(): number;
        get closed(): boolean;
        get playerStateManager(): $PlayerStateManager;
        get socket(): $VoicechatSocket;
        get server(): $MinecraftServer;
        get connections(): $Map<$UUID, $ClientConnection>;
        get pingManager(): $PingManager;
        get categoryManager(): $ServerCategoryManager;
        get groupManager(): $ServerGroupManager;
    }
    export class $PingManager {
        sendPing(arg0: $ClientConnection, arg1: number, arg2: number, arg3: $PingManager$PingListener): void;
        onPongPacket(arg0: $PingPacket): void;
        checkTimeouts(): void;
        constructor(arg0: $Server);
    }
    export class $PlayerStateManager {
        getState(arg0: $UUID_): $PlayerState;
        setGroup(arg0: $ServerPlayer, arg1: $UUID_ | null): void;
        getStates(): $Collection<$PlayerState>;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        broadcastState(arg0: $ServerPlayer | null, arg1: $PlayerState): void;
        broadcastRemoveState(arg0: $ServerPlayer): void;
        static defaultDisconnectedState(arg0: $ServerPlayer): $PlayerState;
        constructor(arg0: $Server);
        get states(): $Collection<$PlayerState>;
    }
    export class $ClientConnection {
        getAddress(): $SocketAddress;
        getPlayerUUID(): $UUID;
        send(arg0: $Server, arg1: $NetworkMessage): void;
        getLastKeepAliveResponse(): number;
        setLastKeepAliveResponse(arg0: number): void;
        constructor(arg0: $UUID_, arg1: $SocketAddress);
        get address(): $SocketAddress;
        get playerUUID(): $UUID;
    }
    export class $ServerCategoryManager extends $CategoryManager {
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
    }
    export class $ServerGroupManager {
        removeGroup(arg0: $UUID_): boolean;
        getGroup(arg0: $UUID_): $Group;
        getGroups(): $Map<$UUID, $Group>;
        addGroup(arg0: $Group, arg1: $ServerPlayer | null): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        joinGroup(arg0: $Group | null, arg1: $ServerPlayer, arg2: string | null): void;
        leaveGroup(arg0: $ServerPlayer): void;
        getPlayerGroup(arg0: $ServerPlayer): $Group;
        cleanupGroups(): void;
        constructor(arg0: $Server);
        get groups(): $Map<$UUID, $Group>;
    }
    export class $Group {
        getName(): string;
        isHidden(): boolean;
        isOpen(): boolean;
        getId(): $UUID;
        getType(): $Group$Type;
        isNormal(): boolean;
        getPassword(): string;
        isPersistent(): boolean;
        isIsolated(): boolean;
        toClientGroup(): $ClientGroup;
        constructor();
        constructor(arg0: $UUID_, arg1: string);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean, arg4: boolean, arg5: $Group$Type);
        get name(): string;
        get hidden(): boolean;
        get open(): boolean;
        get id(): $UUID;
        get type(): $Group$Type;
        get normal(): boolean;
        get password(): string;
        get persistent(): boolean;
        get isolated(): boolean;
    }
}
