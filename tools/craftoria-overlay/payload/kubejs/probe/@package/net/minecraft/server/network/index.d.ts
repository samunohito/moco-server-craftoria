import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $Codec, $Codec_ } from "@package/com/mojang/serialization";
import { $ServerInfo, $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerStatusPacketListener, $ServerStatus_, $ServerboundStatusRequestPacket } from "@package/net/minecraft/network/protocol/status";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RelativeMovement_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Set_, $List, $List_ } from "@package/java/util";
import { $ServerboundCookieResponsePacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ServerboundKeepAlivePacket, $ServerboundCustomPayloadPacket_, $ServerboundPongPacket, $ServerboundResourcePackPacket_, $ServerboundClientInformationPacket_, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $ServerGamePacketListenerImplAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/gameplay";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $EmotesMixinNetwork } from "@package/io/github/kosmx/emotes/arch/network";
import { $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetAddress, $SocketAddress } from "@package/java/net";
import { $PacketSendListener, $Connection, $DisconnectionDetails_, $TickablePacketListener, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $RuntimeException, $Exception, $Throwable, $Iterable_, $Record, $AutoCloseable } from "@package/java/lang";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $ChatType$Bound_, $PlayerChatMessage_, $FilterMask } from "@package/net/minecraft/network/chat";
import { $ServerboundLoginAcknowledgedPacket, $ServerLoginPacketListener, $ServerboundKeyPacket, $ServerboundHelloPacket_, $ServerboundCustomQueryAnswerPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $IRenderDistanceOverride } from "@package/com/ishland/c2me/notickvd/common";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerHandshakePacketListener, $ClientIntentionPacket_ } from "@package/net/minecraft/network/protocol/handshake";
import { $ServerboundSetCommandMinecartPacket, $ServerboundJigsawGeneratePacket, $ServerboundDebugSampleSubscriptionPacket_, $ServerboundChangeDifficultyPacket, $ServerboundPlaceRecipePacket, $ServerboundUseItemPacket, $ServerboundBlockEntityTagQueryPacket, $ServerboundPickItemPacket, $ServerboundChatPacket_, $ServerGamePacketListener, $ServerboundPlayerActionPacket, $ServerboundPaddleBoatPacket, $ServerboundMoveVehiclePacket, $ServerboundLockDifficultyPacket, $ServerboundSetBeaconPacket_, $ServerboundSetStructureBlockPacket, $ServerboundPlayerInputPacket, $ServerboundEditBookPacket_, $ServerboundConfigurationAcknowledgedPacket, $ServerboundClientCommandPacket, $ServerboundSelectTradePacket, $ServerboundPlayerCommandPacket, $ServerboundSeenAdvancementsPacket, $ServerboundSwingPacket, $ServerboundSetJigsawBlockPacket, $ServerboundMovePlayerPacket, $ServerboundContainerClickPacket, $ServerboundPlayerAbilitiesPacket, $ServerboundCommandSuggestionPacket, $ServerboundEntityTagQueryPacket, $ServerboundRecipeBookChangeSettingsPacket, $ServerboundInteractPacket, $ServerboundChunkBatchReceivedPacket_, $ServerboundSetCarriedItemPacket, $ServerboundChatSessionUpdatePacket_, $ServerboundSetCommandBlockPacket, $ServerboundSignUpdatePacket, $ServerboundAcceptTeleportationPacket, $ServerboundChatAckPacket_, $ServerboundContainerSlotStateChangedPacket_, $ServerboundUseItemOnPacket, $ServerboundContainerClosePacket, $ServerboundTeleportToEntityPacket, $ServerboundChatCommandSignedPacket_, $ServerboundChatCommandPacket_, $ServerboundRenameItemPacket, $ServerboundContainerButtonClickPacket_, $ServerboundRecipeBookSeenRecipePacket, $ServerboundSetCreativeModeSlotPacket_ } from "@package/net/minecraft/network/protocol/game";
import { $ServerConfigurationPacketListener, $ServerboundFinishConfigurationPacket, $ServerboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ServerboundPingRequestPacket } from "@package/net/minecraft/network/protocol/ping";
import { $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $ServerCommonPacketListenerAccessor } from "@package/io/github/kosmx/emotes/arch/mixin";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $IServerNetworkInstance } from "@package/io/github/kosmx/emotes/server/network";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/net/minecraft/server/network/config";

declare module "@package/net/minecraft/server/network" {
    export class $ServerGamePacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerGamePacketListener, $ServerPlayerConnection, $TickablePacketListener, $ServerGamePacketListenerImplAccessor, $EmotesMixinNetwork, $IRenderDistanceOverride {
        getRemoteAddress(): $SocketAddress;
        emotecraft$getServerNetworkInstance(): $IServerNetworkInstance;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCustomCommandSuggestions(packet: $ServerboundCommandSuggestionPacket): void;
        handleContainerSlotStateChanged(packet: $ServerboundContainerSlotStateChangedPacket_): void;
        handleRecipeBookSeenRecipePacket(packet: $ServerboundRecipeBookSeenRecipePacket): void;
        /**
         * Processes a range of action-types: sneaking, sprinting, waking from sleep, opening the inventory or setting jump height of the horse the player is riding
         */
        handlePlayerCommand(packet: $ServerboundPlayerCommandPacket): void;
        /**
         * Executes a container/inventory slot manipulation as indicated by the packet. Sends the serverside result if they didn't match the indicated result and prevents further manipulation by the player until he confirms that it has the same open container/inventory
         */
        handleContainerClick(packet: $ServerboundContainerClickPacket): void;
        /**
         * Update the server with an ItemStack in a slot.
         */
        handleSetCreativeModeSlot(packet: $ServerboundSetCreativeModeSlotPacket_): void;
        /**
         * Processes the client closing windows (container)
         */
        handleContainerClose(packet: $ServerboundContainerClosePacket): void;
        /**
         * Enchants the item identified by the packet given some convoluted conditions (matching window, which should/shouldn't be in use?)
         */
        handleContainerButtonClick(packet: $ServerboundContainerButtonClickPacket_): void;
        sendPlayerChatMessage(chatMessage: $PlayerChatMessage_, boundType: $ChatType$Bound_): void;
        /**
         * Processes a player starting/stopping flying
         */
        handlePlayerAbilities(packet: $ServerboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(packet: $ServerboundChangeDifficultyPacket): void;
        sendDisguisedChatMessage(message: $Component_, boundType: $ChatType$Bound_): void;
        tick(): void;
        getPlayer(): $ServerPlayer;
        c2me_notickvd$setRenderDistance(sequence: number): void;
        handleConfigurationAcknowledged(packet: $ServerboundConfigurationAcknowledgedPacket): void;
        handleTeleportToEntityPacket(packet: $ServerboundTeleportToEntityPacket): void;
        handleDebugSampleSubscription(packet: $ServerboundDebugSampleSubscriptionPacket_): void;
        handlePickItem(packet: $ServerboundPickItemPacket): void;
        handleSignUpdate(packet: $ServerboundSignUpdatePacket): void;
        handleChatCommand(packet: $ServerboundChatCommandPacket_): void;
        handleUseItemOn(packet: $ServerboundUseItemOnPacket): void;
        handleAnimate(packet: $ServerboundSwingPacket): void;
        /**
         * Called when a client is using an item while not pointing at a block, but simply using an item
         */
        handleUseItem(packet: $ServerboundUseItemPacket): void;
        handlePaddleBoat(packet: $ServerboundPaddleBoatPacket): void;
        handleChatAck(packet: $ServerboundChatAckPacket_): void;
        /**
         * Processes left and right clicks on entities
         */
        handleInteract(packet: $ServerboundInteractPacket): void;
        switchToConfig(): void;
        /**
         * Processes the player initiating/stopping digging on a particular spot, as well as a player dropping items
         */
        handlePlayerAction(packet: $ServerboundPlayerActionPacket): void;
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        /**
         * Processes clients perspective on player positioning and/or orientation
         */
        handleMovePlayer(packet: $ServerboundMovePlayerPacket): void;
        addPendingMessage(message: $PlayerChatMessage_): void;
        handlePlaceRecipe(packet: $ServerboundPlaceRecipePacket): void;
        handleAcceptTeleportPacket(packet: $ServerboundAcceptTeleportationPacket): void;
        handleSeenAdvancements(packet: $ServerboundSeenAdvancementsPacket): void;
        ackBlockChangesUpTo(sequence: number): void;
        handleSetCommandBlock(packet: $ServerboundSetCommandBlockPacket): void;
        resetPosition(): void;
        /**
         * Teleports the player position to the (relative) values specified, and syncs to the client
         */
        teleport(x: number, arg1: number, y: number, arg3: number, z: number, arg5: $Set_<$RelativeMovement_>): void;
        teleport(x: number, arg1: number, y: number, arg3: number, z: number): void;
        handler$hpp000$xycraft_machines$xycraft$handlePlayerAbilities(arg0: $ServerboundPlayerAbilitiesPacket, arg1: $CallbackInfo): void;
        /**
         * Processes the client status updates: respawn attempt from player, opening statistics or achievements, or acquiring 'open inventory' achievement
         */
        handleClientCommand(packet: $ServerboundClientCommandPacket): void;
        /**
         * Process chat messages (broadcast back to clients) and commands (executes)
         */
        handleChat(packet: $ServerboundChatPacket_): void;
        handleBlockEntityTagQuery(packet: $ServerboundBlockEntityTagQueryPacket): void;
        /**
         * Updates which quickbar slot is selected
         */
        handleSetCarriedItem(packet: $ServerboundSetCarriedItemPacket): void;
        handleSetCommandMinecart(packet: $ServerboundSetCommandMinecartPacket): void;
        handleSetStructureBlock(packet: $ServerboundSetStructureBlockPacket): void;
        handleSetJigsawBlock(packet: $ServerboundSetJigsawBlockPacket): void;
        handleSetBeaconPacket(packet: $ServerboundSetBeaconPacket_): void;
        handleSignedChatCommand(packet: $ServerboundChatCommandSignedPacket_): void;
        handleJigsawGenerate(packet: $ServerboundJigsawGeneratePacket): void;
        handleEntityTagQuery(packet: $ServerboundEntityTagQueryPacket): void;
        handleRecipeBookChangeSettingsPacket(packet: $ServerboundRecipeBookChangeSettingsPacket): void;
        handler$ild000$ftbquests$handleClientInformation(packet: $ServerboundClientInformationPacket_, ci: $CallbackInfo): void;
        localvar$zze000$tinymultiblocklib$useAllower(arg0: $Vec3_, arg1: $ServerLevel, arg2: $BlockPos_): $Vec3;
        redirect$gfn000$bettercombat$getStackInHand(instance: $ServerPlayer, hand: $InteractionHand_): $ItemStack;
        handleRenameItem(packet: $ServerboundRenameItemPacket): void;
        handleSelectTrade(packet: $ServerboundSelectTradePacket): void;
        handleEditBook(packet: $ServerboundEditBookPacket_): void;
        filterTextPacket(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        filterTextPacket(text: string): $CompletableFuture<$FilteredText>;
        handleMoveVehicle(packet: $ServerboundMoveVehiclePacket): void;
        /**
         * Processes player movement input. Includes walking, strafing, jumping, and sneaking. Excludes riding and toggling flying/sprinting.
         */
        handlePlayerInput(packet: $ServerboundPlayerInputPacket): void;
        handleLockDifficulty(packet: $ServerboundLockDifficultyPacket): void;
        handleChatSessionUpdate(packet: $ServerboundChatSessionUpdatePacket_): void;
        handleChunkBatchReceived(packet: $ServerboundChunkBatchReceivedPacket_): void;
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        /**
         * Sends all given payloads as a bundle to the client.
         */
        sendBundled(payloads: $Iterable_<$CustomPacketPayload>): void;
        bumblezone$setAboveGroundTickCount(sequence: number): void;
        bumblezone$setAboveGroundVehicleTickCount(sequence: number): void;
        static LATENCY_CHECK_INTERVAL: number;
        aboveGroundTickCount: number;
        connection: $Connection;
        aboveGroundVehicleTickCount: number;
        chunkSender: $PlayerChunkSender;
        player: $ServerPlayer;
        constructor(server: $MinecraftServer, connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_);
        get remoteAddress(): $SocketAddress;
    }
    export class $ServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask {
    }
    export interface $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(task: $Consumer_<$Packet<never>>): void;
    }
    export class $TextFilterClient$JoinOrLeaveEncoder {
    }
    export interface $TextFilterClient$JoinOrLeaveEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$JoinOrLeaveEncoder}.
     */
    export type $TextFilterClient$JoinOrLeaveEncoder_ = (() => void);
    export class $ServerConnectionListener$LatencySimulator$DelayedMessage {
    }
    export class $ServerLoginPacketListenerImpl$State extends $Enum<$ServerLoginPacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginPacketListenerImpl$State}.
     */
    export type $ServerLoginPacketListenerImpl$State_ = "hello" | "key" | "authenticating" | "negotiating" | "verifying" | "waiting_for_dupe_disconnect" | "protocol_switching" | "accepted";
    export class $ServerConnectionListener {
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        stop(): void;
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        tick(): void;
        /**
         * Adds a channel that listens locally
         */
        startMemoryChannel(): $SocketAddress;
        getServer(): $MinecraftServer;
        getConnections(): $List<$Connection>;
        /**
         * Adds a channel that listens on publicly accessible network ports
         */
        startTcpServerListener(address: $InetAddress | null, port: number): void;
        running: boolean;
        static SERVER_EVENT_GROUP: $Supplier<$NioEventLoopGroup>;
        static SERVER_EPOLL_EVENT_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(server: $MinecraftServer);
        get server(): $MinecraftServer;
        get connections(): $List<$Connection>;
    }
    export class $LegacyQueryHandler extends $ChannelInboundHandlerAdapter {
        constructor(server: $ServerInfo);
    }
    export class $ServerConnectionListener$LatencySimulator extends $ChannelInboundHandlerAdapter {
    }
    export class $ServerConfigurationPacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerConfigurationPacketListener, $TickablePacketListener, $IRenderDistanceOverride {
        tick(): void;
        c2me_notickvd$setRenderDistance(renderDistance: number): void;
        finishCurrentTask(taskType: $ConfigurationTask$Type_): void;
        handleConfigurationFinished(packet: $ServerboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(packet: $ServerboundSelectKnownPacks_): void;
        handler$gdg000$glitchcore$onStartConfiguration(arg0: $CallbackInfo): void;
        returnToWorld(): void;
        startConfiguration(): void;
        static LATENCY_CHECK_INTERVAL: number;
        connection: $Connection;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
    }
    export class $CommonListenerCookie extends $Record {
        transferred(): boolean;
        static createInitial(gameProfile: $GameProfile, transferred: boolean): $CommonListenerCookie;
        latency(): number;
        connectionType(): $ConnectionType;
        clientInformation(): $ClientInformation;
        gameProfile(): $GameProfile;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: number, arg2: $ClientInformation_, arg3: boolean);
        constructor(gameProfile: $GameProfile, latency: number, clientInformation: $ClientInformation_, transferred: boolean, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { gameProfile?: $GameProfile, connectionType?: $ConnectionType_, clientInformation?: $ClientInformation_, latency?: number, transferred?: boolean,  } | [gameProfile?: $GameProfile, connectionType?: $ConnectionType_, clientInformation?: $ClientInformation_, latency?: number, transferred?: boolean, ];
    export class $ServerGamePacketListenerImpl$EntityInteraction {
    }
    export interface $ServerGamePacketListenerImpl$EntityInteraction {
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImpl$EntityInteraction}.
     */
    export type $ServerGamePacketListenerImpl$EntityInteraction_ = (() => void);
    export class $TextFilterClient$IgnoreStrategy {
        static select(threshold: number): $TextFilterClient$IgnoreStrategy;
        static ignoreOverThreshold(threshold: number): $TextFilterClient$IgnoreStrategy;
        static NEVER_IGNORE: $TextFilterClient$IgnoreStrategy;
        static IGNORE_FULLY_FILTERED: $TextFilterClient$IgnoreStrategy;
    }
    export interface $TextFilterClient$IgnoreStrategy {
        shouldIgnore(text: string, threshold: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$IgnoreStrategy}.
     */
    export type $TextFilterClient$IgnoreStrategy_ = ((arg0: string, arg1: number) => boolean);
    export class $Filterable<T> extends $Record {
        get(filtered: boolean): T;
        map<U>(mappingFunction: $Function_<T, U>): $Filterable<U>;
        static from(filteredText: $FilteredText_): $Filterable<string>;
        resolve<U>(resolver: $Function_<T, (U) | undefined>): ($Filterable<U>) | undefined;
        raw(): T;
        filtered(): (T) | undefined;
        static passThrough<T>(value: T): $Filterable<T>;
        static streamCodec<B extends $ByteBuf, T>(codec: $StreamCodec_<B, T>): $StreamCodec<B, $Filterable<T>>;
        static codec<T>(codec: $Codec_<T>): $Codec<$Filterable<T>>;
        constructor(arg0: T, arg1: (T) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Filterable}.
     */
    export type $Filterable_<T> = { raw?: any, filtered?: (T) | undefined,  } | [raw?: any, filtered?: (T) | undefined, ];
    export class $TextFilter {
        static DUMMY: $TextFilter;
    }
    export interface $TextFilter {
        join(): void;
        processMessageBundle(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        leave(): void;
        processStreamMessage(text: string): $CompletableFuture<$FilteredText>;
    }
    export class $TextFilterClient$RequestFailedException extends $RuntimeException {
    }
    export class $TextFilterClient$PlayerContext implements $TextFilter {
    }
    export class $LegacyProtocolUtils {
        static writeLegacyString(buffer: $ByteBuf, string: string): void;
        static readLegacyString(buffer: $ByteBuf): string;
        static GET_INFO_PACKET_VERSION_1: number;
        static GET_INFO_PACKET_ID: number;
        static CUSTOM_PAYLOAD_PACKET_ID: number;
        static FAKE_PROTOCOL_VERSION: number;
        static CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: string;
        static DISCONNECT_PACKET_ID: number;
        constructor();
    }
    export class $ServerStatusPacketListenerImpl implements $ServerStatusPacketListener {
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleStatusRequest(packet: $ServerboundStatusRequestPacket): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        constructor(status: $ServerStatus_, connection: $Connection);
        constructor(arg0: $ServerStatus_, arg1: $Connection, arg2: string);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask$Type extends $Record {
        id(): string;
        constructor(arg0: $ResourceLocation_);
        constructor(id: string);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationTask$Type}.
     */
    export type $ConfigurationTask$Type_ = { id?: string,  } | [id?: string, ];
    export class $PlayerChunkSender {
        onChunkBatchReceivedByClient(desiredBatchSize: number): void;
        dropChunk(player: $ServerPlayer, chunkPos: $ChunkPos): void;
        sendNextChunks(player: $ServerPlayer): void;
        isPending(chunkPos: number): boolean;
        markChunkPendingToSend(chunk: $LevelChunk): void;
        static MIN_CHUNKS_PER_TICK: number;
        static MAX_CHUNKS_PER_TICK: number;
        constructor(memoryConnection: boolean);
    }
    export class $ServerCommonPacketListenerImpl implements $ServerCommonPacketListener, $ServerCommonPacketListenerAccessor {
        getOwner(): $GameProfile;
        disconnect(reason: $Component_): void;
        disconnect(disconnectionDetails: $DisconnectionDetails_): void;
        handlePong(packet: $ServerboundPongPacket): void;
        latency(): number;
        send(packet: $Packet<never>, listener: $PacketSendListener | null): void;
        send(packet: $Packet<never>): void;
        /**
         * @return the connection type of this packet listener
         */
        getConnectionType(): $ConnectionType;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        handleResourcePackResponse(packet: $ServerboundResourcePackPacket_): void;
        /**
         * @return the main thread event loop
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        handleCustomPayload(packet: $ServerboundCustomPayloadPacket_): void;
        onDisconnect(disconnectionDetails: $DisconnectionDetails_): void;
        resumeFlushing(): void;
        suspendFlushing(): void;
        handleKeepAlive(packet: $ServerboundKeepAlivePacket): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        /**
         * {@inheritDoc}
         */
        send(payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to the client of this listener.
         */
        send(payload: $CustomPacketPayload_, listener: $PacketSendListener): void;
        flow(): $PacketFlow;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        static LATENCY_CHECK_INTERVAL: number;
        connection: $Connection;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
        get owner(): $GameProfile;
        get connectionType(): $ConnectionType;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $FilteredText extends $Record {
        mask(): $FilterMask;
        raw(): string;
        isFiltered(): boolean;
        filteredOrEmpty(): string;
        filtered(): string;
        static passThrough(raw: string): $FilteredText;
        static fullyFiltered(raw: string): $FilteredText;
        static EMPTY: $FilteredText;
        constructor(arg0: string, arg1: $FilterMask);
    }
    /**
     * Values that may be interpreted as {@link $FilteredText}.
     */
    export type $FilteredText_ = { raw?: string, mask?: $FilterMask,  } | [raw?: string, mask?: $FilterMask, ];
    export class $TextFilterClient implements $AutoCloseable {
        close(): void;
        createContext(profile: $GameProfile): $TextFilter;
        static createFromConfig(config: string): $TextFilterClient;
    }
    export class $ServerLoginPacketListenerImpl implements $ServerLoginPacketListener, $TickablePacketListener {
        disconnect(reason: $Component_): void;
        tick(): void;
        getUserName(): string;
        handleHello(packet: $ServerboundHelloPacket_): void;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        isAcceptingMessages(): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleLoginAcknowledgement(packet: $ServerboundLoginAcknowledgedPacket): void;
        handleCustomQueryPacket(packet: $ServerboundCustomQueryAnswerPacket_): void;
        handleKey(packet: $ServerboundKeyPacket): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(server: $MinecraftServer, connection: $Connection, transferred: boolean);
        get userName(): string;
        get acceptingMessages(): boolean;
    }
    export class $TextFilterClient$MessageEncoder {
    }
    export interface $TextFilterClient$MessageEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$MessageEncoder}.
     */
    export type $TextFilterClient$MessageEncoder_ = (() => void);
    export class $ServerPlayerConnection {
    }
    export interface $ServerPlayerConnection {
        getPlayer(): $ServerPlayer;
        send(packet: $Packet<never>): void;
        get player(): $ServerPlayer;
    }
    export class $MemoryServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
}
