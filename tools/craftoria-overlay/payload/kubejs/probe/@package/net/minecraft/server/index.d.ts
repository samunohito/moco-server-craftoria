import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $MinecraftServerData as $MinecraftServerData$1, $IMinecraftServer } from "@package/xaero/map/server";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerData, $IMinecraftServer as $IMinecraftServer$1 } from "@package/xaero/common/server";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ServerMidTickTask } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $PlayerDataStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $TeslaNetworkCache, $TeslaNetworkHolder } from "@package/net/swedz/extended_industrialization/machines/component/tesla/network";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $PlayerAdvancementsAccessor as $PlayerAdvancementsAccessor$1 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/entities";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_ } from "@package/java/lang";
import { $AccessorMixinMinecraftServer } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $PlayerAdvancementsAccessor } from "@package/dev/uncandango/alltheleaks/mixin/core/main/accessor";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ITimeTrackingServer, $IProfilingServerFunctionManager } from "@package/org/embeddedt/modernfix/duck";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $PlayerAdvancements implements $PlayerAdvancementsAccessor$1, $PlayerAdvancementsAccessor {
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        stopListening(): void;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        flushDirty(serverPlayer: $ServerPlayer): void;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        setPlayer(serverPlayer: $ServerPlayer): void;
        handler$cnp000$revelationary$triggerAdvancementCriteria(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$kej000$iceberg$onAward(advancementHolder: $AdvancementHolder_, criterionKey: string, callbackInfo: $CallbackInfoReturnable<any>, success: boolean): void;
        getPlayer(): $ServerPlayer;
        bumblezone$getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        progress: $Map<$AdvancementHolder, $AdvancementProgress>;
        player: $ServerPlayer;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        cookie(): D;
        finalDimensions(): $RegistryAccess$Frozen;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { cookie?: any, finalDimensions?: $RegistryAccess$Frozen,  } | [cookie?: any, finalDimensions?: $RegistryAccess$Frozen, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        managers(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener {
        get(location: $ResourceLocation_): $AdvancementHolder;
        tree(): $AdvancementTree;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        handler$dbi000$utilitarian$removeAdvancements(arg0: $Map_<any, any>, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $CallbackInfo): void;
        constructor(registries: $HolderLookup$Provider);
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMotd(): string;
        getPlayerCount(): number;
        getMaxPlayers(): number;
        getServerVersion(): string;
        get motd(): string;
        get playerCount(): number;
        get maxPlayers(): number;
        get serverVersion(): string;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        stepGameIfPaused(sprintTime: number): boolean;
        stopSprinting(): boolean;
        stopStepping(): boolean;
        isSprinting(): boolean;
        checkShouldSprintThisTick(): boolean;
        updateJoiningPlayer(player: $ServerPlayer): void;
        requestGameToSprint(sprintTime: number): boolean;
        endTickWork(): void;
        static MIN_TICKRATE: number;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        packRepository(): $PackRepository;
        safeMode(): boolean;
        initialDataConfig(): $WorldDataConfiguration;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        initMode(): boolean;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { initialDataConfig?: $WorldDataConfiguration_, safeMode?: boolean, initMode?: boolean, packRepository?: $PackRepository,  } | [initialDataConfig?: $WorldDataConfiguration_, safeMode?: boolean, initMode?: boolean, packRepository?: $PackRepository, ];
    export class $ChainedJsonException$Entry {
        getFilename(): string;
        getJsonKeys(): string;
        get filename(): string;
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static getMissingTranslations(): $Set<string>;
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        static realStdoutPrintln(message: string): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        setFilenameAndFlush(message: string): void;
        static forException(exception: $Exception): $ChainedJsonException;
        prependJsonKey(message: string): void;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $RegistryAccess$Frozen;
        datapackWorldgen(): $RegistryAccess$Frozen;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { datapackWorldgen?: $RegistryAccess$Frozen, datapackDimensions?: $RegistryAccess$Frozen, resources?: $ResourceManager, dataConfiguration?: $WorldDataConfiguration_,  } | [datapackWorldgen?: $RegistryAccess$Frozen, datapackDimensions?: $RegistryAccess$Frozen, resources?: $ResourceManager, dataConfiguration?: $WorldDataConfiguration_, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        getProperties(): $DedicatedServerProperties;
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        get properties(): $DedicatedServerProperties;
        get playerNames(): string[];
        get serverPort(): number;
        get serverName(): string;
        get levelIdName(): string;
        get pluginNames(): string;
        get serverIp(): string;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener {
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get availableTags(): $Iterable<$ResourceLocation>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $ITimeTrackingServer, $Trackable, $AccessorMixinMinecraftServer, $IMinecraftServer$1, $IMinecraftServer, $MinecraftServerKJS, $TeslaNetworkHolder, $MinecraftServerAccessor, $ServerMidTickTask {
        getFile(path: string): $Path;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        getConnection(): $ServerConnectionListener;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        getWorldScreenshotFile(): ($Path) | undefined;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        getProfilePermissions(profile: $GameProfile): number;
        restoreInventories(): $Map<any, any>;
        getGameRules(): $GameRules;
        getCustomBossEvents(): $CustomBossEvents;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        getProxy(): $Proxy;
        doRunTask(task: $TickTask): void;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        getFunctions(): $ServerFunctionManager;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        getStatus(): $ServerStatus;
        setPort(idleTimeout: number): void;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        getProfiler(): $ProfilerFiller;
        isLevelEnabled(level: $Level_): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        fillSystemReport(report: $SystemReport): $SystemReport;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        registryAccess(): $RegistryAccess$Frozen;
        getRunningThread(): $Thread;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getFixerUpper(): $DataFixer;
        getRecipeManager(): $RecipeManager;
        getServerResources(): $MinecraftServer$ReloadableResources;
        getProfileKeySignatureValidator(): $SignatureValidator;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        getWorldPath(levelResource: $LevelResource): $Path;
        getCommands(): $Commands;
        sendSystemMessage(component: $Component_): void;
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        getSpawnRadius(level: $ServerLevel | null): number;
        getProfileRepository(): $GameProfileRepository;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        getStructureManager(): $StructureTemplateManager;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        isSingleplayerOwner(profile: $GameProfile): boolean;
        potionBrewing(): $PotionBrewing;
        getData(): $AttachedData<any>;
        atl$getBaseClass(): $Class<any>;
        getScoreboard(): $ServerScoreboard;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        serverLinks(): $ServerLinks;
        getResourceManager(): $ResourceManager;
        getPlayerList(): $PlayerList;
        handler$jjp000$ae2$injectSpatialLevel(arg0: $ChunkProgressListener, arg1: $CallbackInfo): void;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        getSingleplayerProfile(): $GameProfile;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        setPlayerIdleTimeout(idleTimeout: number): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        getCurrentSmoothedTickTime(): number;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        getAverageTickTimeNanos(): number;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        dumpServerProperties(path: $Path_): void;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        getScaledTrackingDistance(trackingDistance: number): number;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        getXaeroWorldMapServerData(): $MinecraftServerData$1;
        mfix$getLastTickStartTime(): number;
        getXaeroMinimapServerData(): $MinecraftServerData;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        setXaeroWorldMapServerData(arg0: $MinecraftServerData$1): void;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        executeTasksMidTick(level: $ServerLevel): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        getCommandStorage(): $CommandStorage;
        getTeslaNetworks(): $TeslaNetworkCache;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        overworld(): $ServerLevel;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        setLocalIp(serverId: string): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        setMotd(serverId: string): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        getServerDirectory(): $Path;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        getModdedStatus(): $ModCheck;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        static setFatalException(fatalException: $RuntimeException): void;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        getNextTickTime(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        getSessionService(): $MinecraftSessionService;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        setPlayerList(list: $PlayerList): void;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        getPackRepository(): $PackRepository;
        getTickTimesNanos(): number[];
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        addTickable(tickable: $Runnable_): void;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        getOverworld(): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        stopTimeProfiler(): $ProfileResults;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        wrap(): $WeakReference<$Trackable>;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTracking(): void;
        self(): $MinecraftServer;
        tell(component: $Component_): void;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        setStatusMessage(component: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        sendData(channel: string, data: $CompoundTag_): void;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getMcEntities(): $Iterable<$Entity>;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        sendData(serverId: string): void;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntities(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        Lootr$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get shutdown(): boolean;
        get connection(): $ServerConnectionListener;
        get functionCompilationLevel(): number;
        get rateLimitPacketsPerSecond(): number;
        get operatorUserPermissionLevel(): number;
        get worldScreenshotFile(): ($Path) | undefined;
        get gameRules(): $GameRules;
        get customBossEvents(): $CustomBossEvents;
        set difficultyLocked(value: boolean);
        get stopped(): boolean;
        get proxy(): $Proxy;
        get hardcore(): boolean;
        get ready(): boolean;
        get paused(): boolean;
        get functions(): $ServerFunctionManager;
        get dedicated(): boolean;
        get status(): $ServerStatus;
        get running(): boolean;
        get profiler(): $ProfilerFiller;
        get keyPair(): $KeyPair;
        get maxChainedNeighborUpdates(): number;
        get published(): boolean;
        get worldData(): $WorldData;
        get advancements(): $ServerAdvancementManager;
        get runningThread(): $Thread;
        get singleplayer(): boolean;
        get fixerUpper(): $DataFixer;
        get recipeManager(): $RecipeManager;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get profileKeySignatureValidator(): $SignatureValidator;
        get scheduledEvents(): $ScheduledEvents;
        get commandBlockEnabled(): boolean;
        get commands(): $Commands;
        get profileRepository(): $GameProfileRepository;
        get forcedGameType(): $GameType;
        get spawningAnimals(): boolean;
        get structureManager(): $StructureTemplateManager;
        get absoluteMaxWorldSize(): number;
        get profileCache(): $GameProfileCache;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get data(): $AttachedData<any>;
        get scoreboard(): $ServerScoreboard;
        get persistentData(): $CompoundTag;
        get resourceManager(): $ResourceManager;
        get tickTimeLoggingEnabled(): boolean;
        get compressionThreshold(): number;
        get spawnProtectionRadius(): number;
        get currentSmoothedTickTime(): number;
        get averageTickTimeNanos(): number;
        get resourcePackRequired(): boolean;
        get timeProfilerRunning(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get tickCount(): number;
        get commandStorage(): $CommandStorage;
        get teslaNetworks(): $TeslaNetworkCache;
        get serverDirectory(): $Path;
        get moddedStatus(): $ModCheck;
        static set fatalException(value: $RuntimeException);
        get serverModName(): string;
        get nextTickTime(): number;
        get playerNames(): string[];
        get sessionService(): $MinecraftSessionService;
        get statusJson(): string;
        get packRepository(): $PackRepository;
        get tickTimesNanos(): number[];
        get playerCount(): number;
        get spawningMonsters(): boolean;
        get maxPlayers(): number;
        get epollEnabled(): boolean;
        get serverVersion(): string;
        get recordingMetrics(): boolean;
        get currentlySaving(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        close(): void;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        resourceManager(): $CloseableResourceManager;
        dataPackResources(): $ReloadableServerResources;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { resourceManager?: $CloseableResourceManager, worldData?: $WorldData, registries?: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, worldData?: $WorldData, registries?: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources?: $ReloadableServerResources, ];
    export class $ServerScoreboard extends $Scoreboard {
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        addDirtyListener(runnable: $Runnable_): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        startTrackingObjective(objective: $Objective): void;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        stopTrackingObjective(objective: $Objective): void;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        listeners(): $List<$PreparableReloadListener>;
        getRecipes(): $RecipeManager;
        kjs$getServerScriptManager(): $ServerScriptManager;
        getAdvancements(): $ServerAdvancementManager;
        getRecipeManager(): $RecipeManager;
        getCommands(): $Commands;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getConditionContext(): $ICondition$IContext;
        kjs$getTagManager(): $TagManager;
        getRegistryLookup(): $HolderLookup$Provider;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        handler$lap000$sliceanddice$injectRecipes(arg0: $CallbackInfo): void;
        get recipes(): $RecipeManager;
        get advancements(): $ServerAdvancementManager;
        get recipeManager(): $RecipeManager;
        get commands(): $Commands;
        get conditionContext(): $ICondition$IContext;
        get registryLookup(): $HolderLookup$Provider;
        get functionLibrary(): $ServerFunctionLibrary;
    }
    export class $WorldLoader$InitConfig extends $Record {
        commandSelection(): $Commands$CommandSelection;
        packConfig(): $WorldLoader$PackConfig;
        functionCompilationLevel(): number;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { packConfig?: $WorldLoader$PackConfig_, functionCompilationLevel?: number, commandSelection?: $Commands$CommandSelection_,  } | [packConfig?: $WorldLoader$PackConfig_, functionCompilationLevel?: number, commandSelection?: $Commands$CommandSelection_, ];
    export class $TickTask implements $Runnable {
        run(): void;
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        prompt(): $Component;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { hash?: string, url?: string, isRequired?: boolean, prompt?: $Component_, id?: $UUID_,  } | [hash?: string, url?: string, isRequired?: boolean, prompt?: $Component_, id?: $UUID_, ];
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string, ];
    export class $Services extends $Record {
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        profileKeySignatureValidator(): $SignatureValidator;
        sessionService(): $MinecraftSessionService;
        profileCache(): $GameProfileCache;
        canValidateProfileKeys(): boolean;
        servicesKeySet(): $ServicesKeySet;
        profileRepository(): $GameProfileRepository;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { servicesKeySet?: $ServicesKeySet_, sessionService?: $MinecraftSessionService, profileRepository?: $GameProfileRepository_, profileCache?: $GameProfileCache,  } | [servicesKeySet?: $ServicesKeySet_, sessionService?: $MinecraftSessionService, profileRepository?: $GameProfileRepository_, profileCache?: $GameProfileCache, ];
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        tick(): void;
        getTagNames(): $Iterable<$ResourceLocation>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        mfix$getProfilingResults(): string;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        getGameLoopSender(): $CommandSourceStack;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get tagNames(): $Iterable<$ResourceLocation>;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get functionNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
    }
}
