import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $DynamicOps, $Codec_ } from "@package/com/mojang/serialization";
import { $ClientStatusPacketListener } from "@package/net/minecraft/network/protocol/status";
import { $Tag_, $Tag, $NbtAccounter, $CompoundTag } from "@package/net/minecraft/nbt";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $HashMap, $UUID_, $Map, $UUID, $List, $EnumSet, $Map_, $Date, $Collection_, $Collection, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $ByteToMessageDecoder$Cumulator, $MessageToMessageEncoder, $EncoderException, $MessageToMessageDecoder, $ByteToMessageDecoder, $MessageToByteEncoder } from "@package/io/netty/handler/codec";
import { $EmotesMixinConnection } from "@package/io/github/kosmx/emotes/arch/network";
import { $IntFunction_, $Supplier_, $IntFunction, $Consumer_, $Function, $BiConsumer_, $Function_, $BiFunction_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $RegistryAccess, $Registry, $SectionPos } from "@package/net/minecraft/core";
import { $IFriendlyByteBufExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path_, $Path } from "@package/java/nio/file";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetSocketAddress, $SocketAddress, $URI } from "@package/java/net";
import { $PacketType, $PacketFlow, $PacketFlow_, $BundlerInfo, $PacketType_, $Packet } from "@package/net/minecraft/network/protocol";
import { $CharSequence, $Enum, $Exception, $Throwable, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $Cipher } from "@package/javax/crypto";
import { $OutputStream } from "@package/java/io";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Marker } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $PublicKey } from "@package/java/security";
import { $Instant } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $ChannelHandlerContext, $Channel, $ChannelDuplexHandler, $ChannelPipeline, $ChannelInboundHandlerAdapter, $DefaultEventLoopGroup, $SimpleChannelInboundHandler, $ChannelFuture, $ChannelOutboundHandlerAdapter } from "@package/io/netty/channel";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $TriConsumer_ } from "@package/org/apache/commons/lang3/function";
import { $StreamCodec, $StreamEncoder_, $StreamDecoder_ } from "@package/net/minecraft/network/codec";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as protocol from "@package/net/minecraft/network/protocol";
export * as chat from "@package/net/minecraft/network/chat";
export * as syncher from "@package/net/minecraft/network/syncher";
export * as codec from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network" {
    /**
     * Channel handler that handles protocol decryption.
     * 
     * @see Connection#setEncryptionKey
     */
    export class $CipherDecoder extends $MessageToMessageDecoder<$ByteBuf> {
        constructor(cipher: $Cipher);
    }
    export class $Utf8String {
        static write(buffer: $ByteBuf, string: $CharSequence, maxLength: number): void;
        static read(buffer: $ByteBuf, maxLength: number): string;
        constructor();
    }
    export class $MonitorFrameDecoder extends $ChannelInboundHandlerAdapter {
        constructor(monitor: $BandwidthDebugMonitor);
    }
    export class $VarLong {
        static write(buffer: $ByteBuf, value: number): $ByteBuf;
        static read(buffer: $ByteBuf): number;
        static hasContinuationBit(data: number): boolean;
        static getByteSize(data: number): number;
        constructor();
    }
    /**
     * Variant of `Connection` that monitors the amount of received packets and disables receiving if the set limit is exceeded.
     */
    export class $RateKickingConnection extends $Connection {
        static PACKET_MARKER: $Marker;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(rateLimitPacketsPerSecond: number);
    }
    export class $DisconnectionDetails extends $Record {
        reason(): $Component;
        report(): ($Path) | undefined;
        bugReportLink(): ($URI) | undefined;
        constructor(reason: $Component_);
        constructor(arg0: $Component_, arg1: ($Path_) | undefined, arg2: ($URI) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DisconnectionDetails}.
     */
    export type $DisconnectionDetails_ = { report?: ($Path_) | undefined, bugReportLink?: ($URI) | undefined, reason?: $Component_,  } | [report?: ($Path_) | undefined, bugReportLink?: ($URI) | undefined, reason?: $Component_, ];
    /**
     * Describes how packets are handled. There are various implementations of this class for each possible protocol (e.g. PLAY, CLIENTBOUND; PLAY, SERVERBOUND; etc.)
     */
    export class $PacketListener {
    }
    export interface $PacketListener {
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        isAcceptingMessages(): boolean;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        get acceptingMessages(): boolean;
    }
    export class $ProtocolInfo$Unbound<T extends $PacketListener, B extends $ByteBuf> {
    }
    export interface $ProtocolInfo$Unbound<T extends $PacketListener, B extends $ByteBuf> {
        id(): $ConnectionProtocol;
        bind(bufferFactory: $Function_<$ByteBuf, B>): $ProtocolInfo<T>;
        flow(): $PacketFlow;
        listPackets(visitor: $ProtocolInfo$Unbound$PacketVisitor_): void;
    }
    export class $UnconfiguredPipelineHandler$Outbound extends $ChannelOutboundHandlerAdapter {
        constructor();
    }
    /**
     * Describes the set of packets a connection understands at a given point.
     * A connection always starts out in state `#HANDSHAKING`. In this state the client sends its desired protocol using
     * `ClientIntentionPacket`. The server then either accepts the connection and switches to the desired protocol or it disconnects the client (for example in case of an outdated client).
     * 
     * Each protocol has a `PacketListener` implementation tied to it for server and client respectively.
     * 
     * Every packet must correspond to exactly one protocol.
     */
    export class $ConnectionProtocol extends $Enum<$ConnectionProtocol> {
        static values(): $ConnectionProtocol[];
        static valueOf(arg0: string): $ConnectionProtocol;
        id(): string;
        isPlay(): boolean;
        isConfiguration(): boolean;
        static PLAY: $ConnectionProtocol;
        static STATUS: $ConnectionProtocol;
        static CONFIGURATION: $ConnectionProtocol;
        static LOGIN: $ConnectionProtocol;
        static HANDSHAKING: $ConnectionProtocol;
        get play(): boolean;
        get configuration(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionProtocol}.
     */
    export type $ConnectionProtocol_ = "handshaking" | "play" | "status" | "login" | "configuration";
    export class $NoOpFrameEncoder extends $ChannelOutboundHandlerAdapter {
        constructor();
    }
    export class $RegistryFriendlyByteBuf extends $FriendlyByteBuf {
        registryAccess(): $RegistryAccess;
        getConnectionType(): $ConnectionType;
        /**
         * @deprecated
         */
        static decorator(registry: $RegistryAccess): $Function<$ByteBuf, $RegistryFriendlyByteBuf>;
        static decorator(arg0: $RegistryAccess, arg1: $ConnectionType_): $Function<$ByteBuf, $RegistryFriendlyByteBuf>;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        /**
         * @deprecated
         */
        constructor(source: $ByteBuf, registryAccess: $RegistryAccess);
        constructor(arg0: $ByteBuf, arg1: $RegistryAccess, arg2: $ConnectionType_);
        get connectionType(): $ConnectionType;
    }
    export class $ProtocolSwapHandler {
        static handleOutboundTerminalPacket(context: $ChannelHandlerContext, packet: $Packet<never>): void;
        static handleInboundTerminalPacket(context: $ChannelHandlerContext, packet: $Packet<never>): void;
    }
    export interface $ProtocolSwapHandler {
    }
    /**
     * Channel handler that handles protocol encryption.
     * 
     * @see Connection#setEncryptionKey
     */
    export class $CipherEncoder extends $MessageToByteEncoder<$ByteBuf> {
        constructor(cipher: $Cipher);
    }
    export class $TickablePacketListener {
    }
    export interface $TickablePacketListener extends $PacketListener {
        tick(): void;
    }
    export class $FriendlyByteBuf extends $ByteBuf implements $IFriendlyByteBufExtension {
        clear(): $FriendlyByteBuf;
        getBytes(index: number, out: $OutputStream, length: number): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuf): $FriendlyByteBuf;
        writeInt(newCapacity: number): $FriendlyByteBuf;
        setChar(index: number, value: number): $FriendlyByteBuf;
        setShort(index: number, value: number): $FriendlyByteBuf;
        setLong(index: number, value: number): $FriendlyByteBuf;
        setFloat(index: number, value: number): $FriendlyByteBuf;
        setDouble(index: number, value: number): $FriendlyByteBuf;
        capacity(newCapacity: number): $FriendlyByteBuf;
        readBytes(out: $OutputStream, length: number): $FriendlyByteBuf;
        writeBytes(destination: $ByteBuf): $FriendlyByteBuf;
        writeBytes(destination: $ByteBuf, destinationIndex: number, length: number): $FriendlyByteBuf;
        writeBytes(destination: $ByteBuffer): $FriendlyByteBuf;
        writeBytes(destination: number[], destinationIndex: number, length: number): $FriendlyByteBuf;
        writeBytes(destination: number[]): $FriendlyByteBuf;
        writeBytes(destination: $ByteBuf, length: number): $FriendlyByteBuf;
        writeChar(newCapacity: number): $FriendlyByteBuf;
        skipBytes(newCapacity: number): $FriendlyByteBuf;
        writeBoolean(value: boolean): $FriendlyByteBuf;
        writeByte(newCapacity: number): $FriendlyByteBuf;
        writeLong(value: number): $FriendlyByteBuf;
        writeDouble(value: number): $FriendlyByteBuf;
        /**
         * Reads a String with a maximum length of `Short.MAX_VALUE`.
         * 
         * @see #readUtf(int)
         * @see #writeUtf
         */
        readUtf(): string;
        /**
         * Reads a string with a maximum length from this buffer.
         * 
         * @see #writeUtf
         */
        readUtf(maxLength: number): string;
        getSource(): $ByteBuf;
        setIndex(index: number, value: number): $FriendlyByteBuf;
        /**
         * Write a timestamp as milliseconds since the unix epoch.
         * 
         * @see #readDate
         */
        writeDate(time: $Date): $FriendlyByteBuf;
        /**
         * Reads an enum of the given type T using the ordinal encoded as a VarInt from the buffer.
         * 
         * @see #writeEnum
         */
        readEnum<T extends $Enum<T>>(enumClass: $Class<T>): T;
        static readByteArray(buffer: $ByteBuf): number[];
        readByteArray(): number[];
        readByteArray(maxLength: number): number[];
        static readByteArray(buffer: $ByteBuf, maxSize: number): number[];
        writeByteArray(destination: number[]): $FriendlyByteBuf;
        static writeByteArray(buffer: $ByteBuf, array: number[]): void;
        readerIndex(newCapacity: number): $FriendlyByteBuf;
        setMediumLE(index: number, value: number): $FriendlyByteBuf;
        markWriterIndex(): $FriendlyByteBuf;
        markReaderIndex(): $FriendlyByteBuf;
        discardReadBytes(): $FriendlyByteBuf;
        writeMedium(newCapacity: number): $FriendlyByteBuf;
        writeMediumLE(newCapacity: number): $FriendlyByteBuf;
        /**
         * Reads a SectionPos encoded as a long from the buffer.
         * 
         * @see #writeSectionPos
         */
        readSectionPos(): $SectionPos;
        readCollection<T, C extends $Collection<T>>(collectionFactory: $IntFunction_<C>, elementReader: $StreamDecoder_<$FriendlyByteBuf, T>): C;
        /**
         * Write a BitSet as a long[].
         * 
         * @see #readBitSet
         */
        writeBitSet(bitSet: $BitSet): void;
        writeJsonWithCodec<T>(codec: $Codec_<T>, value: T): void;
        writeCollection<T>(collection: $Collection_<T>, elementWriter: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        writeEnumSet<E extends $Enum<E>>(enumSet: $EnumSet<E>, enumClass: $Class<E>): void;
        readOptional<T>(reader: $StreamDecoder_<$FriendlyByteBuf, T>): (T) | undefined;
        /**
         * Reads a ChunkPos encoded as a long from the buffer.
         * 
         * @see #writeChunkPos
         */
        readChunkPos(): $ChunkPos;
        /**
         * Read a VarInt N from this buffer, then reads N values by calling `reader`.
         */
        readWithCount(reader: $Consumer_<$FriendlyByteBuf>): void;
        writeResourceKey(resourceKey: $ResourceKey_<never>): void;
        /**
         * Writes a SectionPos encoded as a long to the buffer.
         * 
         * @see #readSectionPos
         */
        writeSectionPos(sectionPos: $SectionPos): $FriendlyByteBuf;
        writeVarInt(newCapacity: number): $FriendlyByteBuf;
        writeOptional<T>(optional: (T) | undefined, writer: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        /**
         * Read an IntList of VarInts from this buffer.
         * 
         * @see #writeIntIdList
         */
        readIntIdList(): $IntList;
        readFixedBitSet(size: number): $BitSet;
        /**
         * @deprecated
         */
        writeWithCodec<T>(ops: $DynamicOps<$Tag_>, codec: $Codec_<T>, value: T): $FriendlyByteBuf;
        writeFixedBitSet(bitSet: $BitSet, size: number): void;
        /**
         * Writes an array of VarInts to the buffer, prefixed by the length of the array (as a VarInt).
         * 
         * @see #readVarIntArray
         */
        writeVarIntArray(array: number[]): $FriendlyByteBuf;
        /**
         * Reads a length-prefixed array of longs with a maximum length from the buffer.
         * Will try to use the given long[] if possible. Note that if an array with the correct size is given, maxLength is ignored.
         */
        readLongArray(array: number[] | null, maxLength: number): number[];
        /**
         * Reads a length-prefixed array of longs from the buffer.
         * Will try to use the given long[] if possible. Note that if an array with the correct size is given, maxLength is ignored.
         */
        readLongArray(array: number[] | null): number[];
        /**
         * Reads a length-prefixed array of longs from the buffer.
         */
        readLongArray(): number[];
        /**
         * Writes an array of longs to the buffer, prefixed by the length of the array (as a VarInt).
         * 
         * @see #readLongArray
         */
        writeLongArray(array: number[]): $FriendlyByteBuf;
        readGlobalPos(): $GlobalPos;
        readResourceKey<T>(registryKey: $ResourceKey_<$Registry<T>>): $ResourceKey<T>;
        readJsonWithCodec<T>(codec: $Codec_<T>): T;
        writeGlobalPos(pos: $GlobalPos_): void;
        /**
         * Writes a ChunkPos encoded as a long to the buffer.
         * 
         * @see #readChunkPos
         */
        writeChunkPos(chunkPos: $ChunkPos): $FriendlyByteBuf;
        /**
         * Reads a compressed long from the buffer. To do so it maximally reads 10 byte-sized chunks whose most significant bit dictates whether another byte should be read.
         * 
         * @see #writeVarLong
         */
        readVarLong(): number;
        readEnumSet<E extends $Enum<E>>(enumClass: $Class<E>): $EnumSet<E>;
        writeVarLong(value: number): $FriendlyByteBuf;
        readInstant(): $Instant;
        writeInstant(instant: $Instant): void;
        readPublicKey(): $PublicKey;
        writePublicKey(publicKey: $PublicKey): $FriendlyByteBuf;
        /**
         * Read a BlockHitResult.
         * 
         * @see #writeBlockHitResult
         */
        readBlockHitResult(): $BlockHitResult;
        /**
         * @deprecated
         */
        readWithCodec<T>(ops: $DynamicOps<$Tag_>, codec: $Codec_<T>, nbtAccounter: $NbtAccounter): T;
        /**
         * Write an IntList to this buffer. Every element is encoded as a VarInt.
         * 
         * @see #readIntIdList
         */
        writeIntIdList(itIdList: $IntList): void;
        readRegistryKey<T>(): $ResourceKey<$Registry<T>>;
        /**
         * Reads an array of VarInts from this buffer.
         * 
         * @see #writeVarIntArray
         */
        readVarIntArray(): number[];
        /**
         * Reads an array of VarInts with a maximum length from this buffer.
         * 
         * @see #writeVarIntArray
         */
        readVarIntArray(maxLength: number): number[];
        static readUUID(buffer: $ByteBuf): $UUID;
        /**
         * Reads a UUID encoded as two longs from this buffer.
         * 
         * @see #writeUUID
         */
        readUUID(): $UUID;
        /**
         * Writes a UUID encoded as two longs to this buffer.
         * 
         * @see #readUUID
         */
        writeUUID(uuid: $UUID_): $FriendlyByteBuf;
        static writeUUID(buffer: $ByteBuf, id: $UUID_): void;
        readList<T>(elementReader: $StreamDecoder_<$FriendlyByteBuf, T>): $List<T>;
        readMap<K, V>(keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $StreamDecoder_<$FriendlyByteBuf, V>): $Map<K, V>;
        readMap<K, V, M extends $Map<K, V>>(mapFactory: $IntFunction_<M>, keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $StreamDecoder_<$FriendlyByteBuf, V>): M;
        readNbt(nbtAccounter: $NbtAccounter): $Tag;
        static readNbt(buffer: $ByteBuf, nbtAccounter: $NbtAccounter): $Tag;
        static readNbt(buffer: $ByteBuf): $CompoundTag;
        /**
         * Reads a NBT CompoundTag from this buffer.
         * `null` is a valid value and may be returned.
         * 
         * This method will read a maximum of 0x200000 bytes.
         * 
         * @see #writeNbt
         * @see #readAnySizeNbt
         * @see #readNbt(NbtAccounter)
         */
        readNbt(): $CompoundTag;
        static writeNbt(buffer: $ByteBuf, nbt: $Tag_ | null): void;
        writeNbt(tag: $Tag_ | null): $FriendlyByteBuf;
        readVector3f(): $Vector3f;
        static readVector3f(buffer: $ByteBuf): $Vector3f;
        static writeVector3f(buffer: $ByteBuf, vector3f: $Vector3f): void;
        writeVector3f(vector3f: $Vector3f): void;
        writeQuaternion(quaternion: $Quaternionf): void;
        static writeQuaternion(buffer: $ByteBuf, quaternion: $Quaternionf): void;
        writeNullable<T>(value: T | null, writer: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        static writeNullable<T, B extends $ByteBuf>(buffer: B, value: T | null, writer: $StreamEncoder_<B, T>): void;
        static readNullable<T, B extends $ByteBuf>(buffer: B, reader: $StreamDecoder_<B, T>): T;
        readNullable<T>(reader: $StreamDecoder_<$FriendlyByteBuf, T>): T;
        readQuaternion(): $Quaternionf;
        static readQuaternion(buffer: $ByteBuf): $Quaternionf;
        /**
         * @deprecated
         */
        readWithCodecTrusted<T>(ops: $DynamicOps<$Tag_>, codec: $Codec_<T>): T;
        /**
         * Write a ResourceLocation using its String representation.
         * 
         * @see #readResourceLocation
         */
        writeResourceLocation(resourceLocation: $ResourceLocation_): $FriendlyByteBuf;
        /**
         * Read a ResourceLocation using its String representation.
         * 
         * @see #writeResourceLocation
         */
        readResourceLocation(): $ResourceLocation;
        /**
         * Write a BlockHitResult.
         * 
         * @see #readBlockHitResult
         */
        writeBlockHitResult(result: $BlockHitResult): void;
        touch(): $FriendlyByteBuf;
        touch(hint: $Object): $FriendlyByteBuf;
        writeMap<K, V>(map: $Map_<K, V>, keyWriter: $StreamEncoder_<$FriendlyByteBuf, K>, valueWriter: $StreamEncoder_<$FriendlyByteBuf, V>): void;
        /**
         * Writes a BlockPos encoded as a long to the buffer.
         * 
         * @see #readBlockPos
         */
        writeBlockPos(pos: $BlockPos_): $FriendlyByteBuf;
        static writeBlockPos(buffer: $ByteBuf, pos: $BlockPos_): void;
        static readBlockPos(buffer: $ByteBuf): $BlockPos;
        /**
         * Reads a BlockPos encoded as a long from the buffer.
         * 
         * @see #writeBlockPos
         */
        readBlockPos(): $BlockPos;
        setBytes(index: number, destination: $ByteBuf, destinationIndex: number, length: number): $FriendlyByteBuf;
        setBytes(index: number, destination: number[]): $FriendlyByteBuf;
        setBytes(index: number, destination: $ByteBuffer): $FriendlyByteBuf;
        setBytes(index: number, destination: number[], destinationIndex: number, length: number): $FriendlyByteBuf;
        writeZero(newCapacity: number): $FriendlyByteBuf;
        setIntLE(index: number, value: number): $FriendlyByteBuf;
        setShortLE(index: number, value: number): $FriendlyByteBuf;
        retain(newCapacity: number): $FriendlyByteBuf;
        writeIntLE(newCapacity: number): $FriendlyByteBuf;
        setZero(index: number, value: number): $FriendlyByteBuf;
        /**
         * Reads a compressed int from the buffer. To do so it maximally reads 5 byte-sized chunks whose most significant bit dictates whether another byte should be read.
         * 
         * @see #writeVarInt
         */
        readVarInt(): number;
        /**
         * Writes a String with a maximum length.
         * 
         * @see #readUtf
         */
        writeUtf(string: string, maxLength: number): $FriendlyByteBuf;
        /**
         * Writes a String with a maximum length of `Short.MAX_VALUE`.
         * 
         * @see #readUtf
         */
        writeUtf(string: string): $FriendlyByteBuf;
        static limitValue<T>(_function: $IntFunction_<T>, limit: number): $IntFunction<T>;
        writeVec3(vec3: $Vec3_): void;
        readVec3(): $Vec3;
        /**
         * Read a timestamp as milliseconds since the unix epoch.
         * 
         * @see #writeDate
         */
        readDate(): $Date;
        /**
         * Writes an enum of the given type T using the ordinal encoded as a VarInt to the buffer.
         * 
         * @see #readEnum
         */
        writeEnum(value: $Enum<never>): $FriendlyByteBuf;
        writeById<T>(idGetter: $ToIntFunction_<T>, value: T): $FriendlyByteBuf;
        readById<T>(idLookuo: $IntFunction_<T>): T;
        /**
         * Read a BitSet as a long[].
         * 
         * @see #writeBitSet
         */
        readBitSet(): $BitSet;
        /**
         * Writes a byte to the buffer
         */
        writeByte(value: number): $FriendlyByteBuf;
        writeArray<T>(arg0: T[], arg1: $StreamEncoder_<$FriendlyByteBuf, T>): $FriendlyByteBuf;
        readArray<T>(arg0: $IntFunction_<T[]>, arg1: $StreamDecoder_<$FriendlyByteBuf, T>): T[];
        /**
         * Variant of `FriendlyByteBuf#readMap(StreamDecoder, StreamDecoder)` that allows reading values
         * that depend on the key.
         */
        readMap<K, V>(keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $BiFunction_<$FriendlyByteBuf, K, V>): $Map<K, V>;
        /**
         * Writes the entries in the given set to the buffer, by first writing the count and then writing each entry.
         */
        writeObjectCollection<T>(set: $Collection_<T>, writer: $BiConsumer_<T, $FriendlyByteBuf>): void;
        /**
         * Variant of `FriendlyByteBuf#writeMap(Map, StreamEncoder, StreamEncoder)` that allows writing values
         * that depend on the key.
         */
        writeMap<K, V>(map: $Map_<K, V>, keyWriter: $StreamEncoder_<$FriendlyByteBuf, K>, valueWriter: $TriConsumer_<$FriendlyByteBuf, K, V>): void;
        retain(): $ByteBuf;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        constructor(source: $ByteBuf);
        get source(): $ByteBuf;
    }
    export class $VarInt {
        static write(buffer: $ByteBuf, value: number): $ByteBuf;
        static read(buffer: $ByteBuf): number;
        static hasContinuationBit(data: number): boolean;
        static getByteSize(data: number): number;
        constructor();
    }
    export class $ProtocolInfo$Unbound$PacketVisitor {
    }
    export interface $ProtocolInfo$Unbound$PacketVisitor {
        accept(packetType: $PacketType_<never>, index: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolInfo$Unbound$PacketVisitor}.
     */
    export type $ProtocolInfo$Unbound$PacketVisitor_ = ((arg0: $PacketType<never>, arg1: number) => void);
    /**
     * Used to signify that a packet encoding error is not fatal. If a packet fails to encode, but `Packet#isSkippable` returns true, then this exception is thrown instead and `Connection` will log a message instead of closing the connection.
     */
    export class $SkipPacketException extends $EncoderException {
        constructor(cause: $Throwable);
    }
    export class $UnconfiguredPipelineHandler$InboundConfigurationTask {
    }
    export interface $UnconfiguredPipelineHandler$InboundConfigurationTask {
        run(context: $ChannelHandlerContext): void;
        andThen(task: $UnconfiguredPipelineHandler$InboundConfigurationTask_): $UnconfiguredPipelineHandler$InboundConfigurationTask;
    }
    /**
     * Values that may be interpreted as {@link $UnconfiguredPipelineHandler$InboundConfigurationTask}.
     */
    export type $UnconfiguredPipelineHandler$InboundConfigurationTask_ = ((arg0: $ChannelHandlerContext) => void);
    /**
     * Main netty packet decoder. Reads the packet ID as a VarInt and creates the corresponding packet
     * based on the current `ConnectionProtocol`.
     */
    export class $PacketDecoder<T extends $PacketListener> extends $ByteToMessageDecoder implements $ProtocolSwapHandler {
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(protocolInfo: $ProtocolInfo<T>);
    }
    export class $PacketSendListener {
        static thenRun(onSuccessOrFailure: $Runnable_): $PacketSendListener;
        static exceptionallySend(exceptionalPacketSupplier: $Supplier_<$Packet<never>>): $PacketSendListener;
    }
    export interface $PacketSendListener {
        onFailure(): $Packet<never>;
        onSuccess(): void;
    }
    /**
     * Handles compression of network traffic.
     * 
     * @see Connection#setupCompression
     */
    export class $CompressionEncoder extends $MessageToByteEncoder<$ByteBuf> {
        setThreshold(threshold: number): void;
        getThreshold(): number;
        constructor(threshold: number);
    }
    export class $PacketBundlePacker extends $MessageToMessageDecoder<$Packet<never>> {
        constructor(bundlerInfo: $BundlerInfo);
    }
    export class $ClientboundPacketListener {
    }
    export interface $ClientboundPacketListener extends $PacketListener {
        flow(): $PacketFlow;
    }
    /**
     * Main netty packet encoder. Writes the packet ID as a VarInt based on the current `ConnectionProtocol` as well as the packet's data.
     */
    export class $PacketEncoder<T extends $PacketListener> extends $MessageToByteEncoder<$Packet<T>> {
        getProtocolInfo(): $ProtocolInfo<T>;
        constructor(protocolInfo: $ProtocolInfo<T>);
        get protocolInfo(): $ProtocolInfo<T>;
    }
    /**
     * Prepends each frame ("packet") with its length encoded as a VarInt. Every frame's length must fit within a 3-byte VarInt.
     * 
     * @see Varint21FrameDecoder
     */
    export class $Varint21LengthFieldPrepender extends $MessageToByteEncoder<$ByteBuf> {
        static MAX_VARINT21_BYTES: number;
        constructor();
    }
    export class $BandwidthDebugMonitor {
        tick(): void;
        onReceive(amount: number): void;
        constructor(bandwithLogger: $LocalSampleLogger);
    }
    export class $NoOpFrameDecoder extends $ChannelInboundHandlerAdapter {
        constructor();
    }
    export class $CipherBase {
    }
    /**
     * Handles decompression of network traffic.
     * 
     * @see Connection#setupCompression
     */
    export class $CompressionDecoder extends $ByteToMessageDecoder {
        setThreshold(threshold: number, validateDecompressed: boolean): void;
        static MAXIMUM_UNCOMPRESSED_LENGTH: number;
        static MAXIMUM_COMPRESSED_LENGTH: number;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(threshold: number, validateDecompressed: boolean);
    }
    export class $HandlerNames {
        static LEGACY_QUERY: string;
        static ENCODER: string;
        static DECOMPRESS: string;
        static BUNDLER: string;
        static PACKET_HANDLER: string;
        static COMPRESS: string;
        static INBOUND_CONFIG: string;
        static DECRYPT: string;
        static UNBUNDLER: string;
        static OUTBOUND_CONFIG: string;
        static SPLITTER: string;
        static LATENCY: string;
        static ENCRYPT: string;
        static TIMEOUT: string;
        static PREPENDER: string;
        static DECODER: string;
        constructor();
    }
    export class $PacketBundleUnpacker extends $MessageToMessageEncoder<$Packet<never>> {
        constructor(bundlerInfo: $BundlerInfo);
    }
    export class $UnconfiguredPipelineHandler {
        static setupInboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>): $UnconfiguredPipelineHandler$InboundConfigurationTask;
        static setupOutboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>): $UnconfiguredPipelineHandler$OutboundConfigurationTask;
        constructor();
        static set upInboundProtocol(value: $ProtocolInfo<T>);
        static set upOutboundProtocol(value: $ProtocolInfo<T>);
    }
    export class $ServerboundPacketListener {
    }
    export interface $ServerboundPacketListener extends $PacketListener {
        flow(): $PacketFlow;
    }
    export class $UnconfiguredPipelineHandler$Inbound extends $ChannelDuplexHandler {
        constructor();
    }
    export class $Connection extends $SimpleChannelInboundHandler<$Packet<never>> implements $EmotesMixinConnection {
        static connect(address: $InetSocketAddress, useEpollIfAvailable: boolean, connection: $Connection): $ChannelFuture;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        setReadOnly(): void;
        channel(): $Channel;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isConnected(): boolean;
        /**
         * Returns the socket address of the remote side. Server-only.
         */
        getRemoteAddress(): $SocketAddress;
        disconnect(disconnectionDetails: $DisconnectionDetails_): void;
        /**
         * Closes the channel with a given reason. The reason is stored for later and will be used for informational purposes (info log on server,
         * disconnection screen on the client). This method is also called on the client when the server requests disconnection via
         * `ClientboundDisconnectPacket`.
         * 
         * Closing the channel this way does not send any disconnection packets, it simply terminates the underlying netty channel.
         */
        disconnect(message: $Component_): void;
        /**
         * Gets the current handler for processing packets
         */
        getPacketListener(): $PacketListener;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getReceiving(): $PacketFlow;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        tick(): void;
        send(packet: $Packet<never>, sendListener: $PacketSendListener | null, flush: boolean): void;
        send(packet: $Packet<never>, sendListener: $PacketSendListener | null): void;
        send(packet: $Packet<never>): void;
        initiateServerboundPlayConnection<S extends $ServerboundPacketListener, C extends $ClientboundPacketListener>(hostName: string, port: number, serverboundProtocol: $ProtocolInfo<S>, clientbountProtocol: $ProtocolInfo<C>, packetListener: C, isTransfer: boolean): void;
        initiateServerboundPlayConnection(hostName: string, port: number, packetListener: $ClientLoginPacketListener): void;
        /**
         * Prepares a clientside Connection for a local in-memory connection ("single player").
         * Establishes a connection to the socket supplied and configures the channel pipeline (only the packet handler is necessary,
         * since this is for an in-memory connection). Returns the newly created instance.
         */
        static connectToLocalServer(address: $SocketAddress): $Connection;
        emotecraft$getRemoteVersions(): $HashMap<any, any>;
        setListenerForServerboundHandshake(packetListener: $PacketListener): void;
        static connectToServer(address: $InetSocketAddress, useEpollIfAvailable: boolean, sampleLogger: $LocalSampleLogger | null): $Connection;
        runOnceConnected(action: $Consumer_<$Connection>): void;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isEncrypted(): boolean;
        /**
         * Enables encryption for this connection using the given decrypting and encrypting ciphers.
         * This adds new handlers to this connection's pipeline which handle the decrypting and encrypting.
         * This happens as part of the normal network handshake.
         * 
         * @see net.minecraft.network.protocol.login.ClientboundHelloPacket
         * @see net.minecraft.network.protocol.login.ServerboundKeyPacket
         */
        setEncryptionKey(decryptingCipher: $Cipher, encryptingCipher: $Cipher): void;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        flushChannel(): void;
        setBandwidthLogger(bandwithLogger: $LocalSampleLogger): void;
        getLoggableAddress(logIps: boolean): string;
        /**
         * Enables or disables compression for this connection. If `threshold` is >= 0 then a `CompressionDecoder` and `CompressionEncoder`
         * are installed in the pipeline or updated if they already exist. If `threshold` is < 0 then any such codec are removed.
         * 
         * Compression is enabled as part of the connection handshake when the server sends `ClientboundLoginCompressionPacket`.
         */
        setupCompression(threshold: number, validateDecompressed: boolean): void;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getDirection(): $PacketFlow;
        getInboundProtocol(): $ProtocolInfo<never>;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isMemoryConnection(): boolean;
        initiateServerboundStatusConnection(hostName: string, port: number, packetListener: $ClientStatusPacketListener): void;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isConnecting(): boolean;
        setupInboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>, packetInfo: T): void;
        setupOutboundProtocol(protocolInfo: $ProtocolInfo<never>): void;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        handleDisconnection(): void;
        handler$fei000$chat_heads$chatheads$resetServerKnowledge(ci: $CallbackInfo): void;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getSending(): $PacketFlow;
        getDisconnectionDetails(): $DisconnectionDetails;
        static configureSerialization(pipeline: $ChannelPipeline, flow: $PacketFlow_, memoryOnly: boolean, bandwithDebugMonitor: $BandwidthDebugMonitor | null): void;
        configurePacketHandler(pipeline: $ChannelPipeline): void;
        getAverageReceivedPackets(): number;
        getAverageSentPackets(): number;
        emotecraft$setVersions(map: $HashMap<any, any>): void;
        static configureInMemoryPipeline(pipeline: $ChannelPipeline, flow: $PacketFlow_): void;
        static PACKET_MARKER: $Marker;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(receiving: $PacketFlow_);
        get connected(): boolean;
        get remoteAddress(): $SocketAddress;
        get packetListener(): $PacketListener;
        get receiving(): $PacketFlow;
        set listenerForServerboundHandshake(value: $PacketListener);
        get encrypted(): boolean;
        set bandwidthLogger(value: $LocalSampleLogger);
        get direction(): $PacketFlow;
        get inboundProtocol(): $ProtocolInfo<never>;
        get memoryConnection(): boolean;
        get connecting(): boolean;
        set upOutboundProtocol(value: $ProtocolInfo<never>);
        get sending(): $PacketFlow;
        get disconnectionDetails(): $DisconnectionDetails;
        get averageReceivedPackets(): number;
        get averageSentPackets(): number;
    }
    export class $ProtocolInfo<T extends $PacketListener> {
    }
    export interface $ProtocolInfo<T extends $PacketListener> {
        id(): $ConnectionProtocol;
        flow(): $PacketFlow;
        bundlerInfo(): $BundlerInfo;
        codec(): $StreamCodec<$ByteBuf, $Packet<T>>;
    }
    /**
     * Counterpart to `Varint21LengthFieldPrepender`. Decodes each frame ("packet") by first reading its length and then its data.
     */
    export class $Varint21FrameDecoder extends $ByteToMessageDecoder {
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(monitor: $BandwidthDebugMonitor | null);
    }
    export class $UnconfiguredPipelineHandler$OutboundConfigurationTask {
    }
    export interface $UnconfiguredPipelineHandler$OutboundConfigurationTask {
        run(context: $ChannelHandlerContext): void;
        andThen(task: $UnconfiguredPipelineHandler$OutboundConfigurationTask_): $UnconfiguredPipelineHandler$OutboundConfigurationTask;
    }
    /**
     * Values that may be interpreted as {@link $UnconfiguredPipelineHandler$OutboundConfigurationTask}.
     */
    export type $UnconfiguredPipelineHandler$OutboundConfigurationTask_ = ((arg0: $ChannelHandlerContext) => void);
}
