import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectOpenHashMap, $Long2IntLinkedOpenHashMap, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongMap, $Long2IntMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerScoreboard, $PlayerAdvancements, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISyncLoadManager, $IVanillaChunkManager, $SchedulingManager } from "@package/com/ishland/c2me/base/common/scheduler";
import { $EntityDimensions, $WalkAnimationState, $HumanoidArm_, $PortalProcessor, $Entity, $Entity$RemovalReason_, $HumanoidArm, $EntityType, $Entity$RemovalReason, $LivingEntity, $ReputationEventHandler_ } from "@package/net/minecraft/world/entity";
import { $ILevelEventRedirect } from "@package/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IServerChunkCacheExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $IServerLevel } from "@package/alternate/current/interfaces/mixin";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $OutgoingChatMessage, $RemoteChatSession, $RemoteChatSession_, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ChunkTicketManagerExtension } from "@package/com/ishland/c2me/notickvd/common";
import { $LevelChunk, $ImposterProtoChunk, $ChunkGeneratorStructureState, $LightChunkGetter, $ChunkSource, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SlotReference, $IQuiverPlayer } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess, $LevelData, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockDestructionProgressExtension } from "@package/com/simibubi/create/foundation/block/render";
import { $Duration_ } from "@package/java/time";
import { $BlockableEventLoop, $ProcessorHandle, $ProcessorMailbox } from "@package/net/minecraft/util/thread";
import { $LevelStem_, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ServerStatsCounter, $ServerRecipeBook } from "@package/net/minecraft/stats";
import { $ICapabilityInvalidationListener_ } from "@package/net/neoforged/neoforge/capabilities";
import { $IWorldMapServerLevel } from "@package/xaero/map/core";
import { $PacketAndPayloadAcceptor } from "@package/net/neoforged/neoforge/network/bundle";
import { $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ServerLevelAccessor as $ServerLevelAccessor$1 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $ArrayList, $Stack, $Map, $List, $Collection_, $List_, $Collection, $Comparator, $Set } from "@package/java/util";
import { $BlockPos, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $HolderLookup, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerPlayerAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/entities";
import { $Throwable, $IllegalStateException, $Runnable, $Enum, $Comparable, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $AccessorMixinChunkMap } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $TicketDistanceLevelPropagatorExtension, $IChunkSystemAccess } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";
import { $CustomSpawner_, $LightLayer_, $ChunkPos, $BlockGetter, $ColorResolver_, $Level_, $GameType, $GameType_, $EntityGetter, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $NaturalSpawner$SpawnState, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $LinkManager, $LinkManager$Access } from "@package/com/mrcrayfish/furniture/refurbished/electricity";
import { $TempleStateCache, $ITempleStateCacheProvider } from "@package/com/yungnickyoung/minecraft/betterdeserttemples/world/state";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerPlayerEntityMixin } from "@package/immersive_aircraft/mixin";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionTransition$PostDimensionTransition_, $PortalForcer, $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $ServerPlayerData as $ServerPlayerData$1, $IServerPlayer as $IServerPlayer$2 } from "@package/xaero/common/server/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $RandomSource, $ProgressListener, $StaticCache2D, $Unit, $SortedArraySet } from "@package/net/minecraft/util";
import { $IServerPlayer, $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $BossEvent$BossBarOverlay_, $InteractionResult, $InteractionHand_, $Container, $BossEvent, $RandomSequences, $DifficultyInstance, $BossEvent$BossBarColor_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ReportedException } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ContainerSynchronizer, $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $DuckChunkHolder } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $PersistentEntitySectionManager, $EntityTypeTest, $LevelCallback, $EntityTickList, $ChunkStatusUpdateListener_ } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $WireHandler } from "@package/alternate/current/wire";
import { $Biome$Precipitation, $Biome, $BiomeManager, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $TextFilter, $ServerPlayerConnection, $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Inventory, $ChatVisiblity, $Abilities, $Player, $ChatVisiblity_ } from "@package/net/minecraft/world/entity/player";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $SandstormServerData, $ISandstormServerDataProvider } from "@package/com/yungnickyoung/minecraft/yungscavebiomes/sandstorm";
import { $ChunkScanAccess, $ChunkStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $ServerLevelKJS, $ServerPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ServerPlayerGameModeAccess, $ServerPlayerAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $DynamicGraphMinFixedPoint, $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $IntConsumer_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $IntSupplier_, $IntConsumer, $IntSupplier, $Function_ } from "@package/java/util/function";
import { $ServerWorldCapabilities } from "@package/xaero/map/capabilities";
import { $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathTypeCache } from "@package/net/minecraft/world/level/pathfinder";
import { $Path_ } from "@package/java/nio/file";
import { $TheChunkSystem } from "@package/com/ishland/c2me/rewrites/chunksystem/common";
import { $ChunkStep_, $ChunkStatus, $ChunkStatus_, $WorldGenContext } from "@package/net/minecraft/world/level/chunk/status";
import { $IChunkTicket, $ISimulationDistanceLevelPropagator, $IChunkTicketManager, $IServerChunkManager, $ITACSTicketManager, $IChunkHolder, $IChunkTicketManagerDistanceFromNearestPlayerTracker, $ISyncedClientOptions, $IChunkTicketManagerNearbyChunkTicketUpdater, $IServerLightingProvider, $IThreadedAnvilChunkStorage, $IThreadedAnvilChunkStorageTicketManager } from "@package/com/ishland/c2me/base/mixin/access";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $LevelTicks, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $IThreadedAnvilChunkStorage as $IThreadedAnvilChunkStorage$1 } from "@package/com/ishland/c2me/opts/scheduling/common/idle_tasks";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $ServerboundPlayerActionPacket$Action_, $CommonPlayerSpawnInfo, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Raid, $Raids } from "@package/net/minecraft/world/entity/raid";
import { $ServerPlayerData as $ServerPlayerData$2, $IServerPlayer as $IServerPlayer$1 } from "@package/xaero/map/server/player";
import { $Stream } from "@package/java/util/stream";
import { $ServerChunkCacheAccessor, $EntityTrackerAccessor } from "@package/io/github/kosmx/emotes/arch/mixin";
import { $ServerLevelAccessor } from "@package/com/yungnickyoung/minecraft/yungscavebiomes/mixin/accessor";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as progress from "@package/net/minecraft/server/level/progress";

declare module "@package/net/minecraft/server/level" {
    export class $ChunkTrackingView$Positioned extends $Record implements $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        center(): $ChunkPos;
        viewDistance(): number;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        isInViewDistance(x: number, z: number): boolean;
        constructor(arg0: $ChunkPos, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkTrackingView$Positioned}.
     */
    export type $ChunkTrackingView$Positioned_ = { viewDistance?: number, center?: $ChunkPos,  } | [viewDistance?: number, center?: $ChunkPos, ];
    export class $PlayerRespawnLogic {
        static getSpawnPosInChunk(level: $ServerLevel, chunkPos: $ChunkPos): $BlockPos;
        constructor();
    }
    export class $Ticket<T> implements $Comparable<$Ticket<never>>, $IChunkTicket {
        compareTo(other: $Ticket<never>): number;
        getType(): $TicketType<$Ticket<never>>;
        getTicketLevel(): number;
        isForceTicks(): boolean;
        invokeIsExpired(currentTime: number): boolean;
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>, arg3: boolean);
        get type(): $TicketType<$Ticket<never>>;
        get ticketLevel(): number;
        get forceTicks(): boolean;
    }
    export class $TicketType<T> {
        static create<T>(name: string, comparator: $Comparator<T>): $TicketType<T>;
        static create<T>(name: string, comparator: $Comparator<T>, lifespan: number): $TicketType<T>;
        timeout(): number;
        getComparator(): $Comparator<T>;
        static PLAYER: $TicketType<$ChunkPos>;
        static POST_TELEPORT: $TicketType<number>;
        static DRAGON: $TicketType<$Unit>;
        static START: $TicketType<$Unit>;
        static FORCED: $TicketType<$ChunkPos>;
        static UNKNOWN: $TicketType<$ChunkPos>;
        static PORTAL: $TicketType<$BlockPos>;
        get comparator(): $Comparator<T>;
    }
    export class $ChunkHolder$PlayerProvider {
    }
    export interface $ChunkHolder$PlayerProvider {
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$PlayerProvider}.
     */
    export type $ChunkHolder$PlayerProvider_ = ((arg0: $ChunkPos, arg1: boolean) => $List_<$ServerPlayer>);
    export class $ServerBossEvent extends $BossEvent {
        /**
         * Makes the boss visible to the given player.
         */
        addPlayer(player: $ServerPlayer): void;
        setVisible(visible: boolean): void;
        isVisible(): boolean;
        /**
         * Makes the boss visible to the given player.
         */
        removePlayer(player: $ServerPlayer): void;
        /**
         * The returned collection is unmodifiable
         */
        getPlayers(): $Collection<$ServerPlayer>;
        removeAllPlayers(): void;
        visible: boolean;
        players: $Set<$ServerPlayer>;
        constructor(name: $Component_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_);
    }
    export class $ChunkHolder$LevelChangeListener {
    }
    export interface $ChunkHolder$LevelChangeListener {
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$LevelChangeListener}.
     */
    export type $ChunkHolder$LevelChangeListener_ = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: number, arg3: $IntConsumer) => void);
    export class $ChunkHolder extends $GenerationChunkHolder implements $DuckChunkHolder, $IChunkHolder {
        getFullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        c2me$undirtyLight(): void;
        getEntityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        broadcastChanges(chunk: $LevelChunk): void;
        blockChanged(pos: $BlockPos_): void;
        getTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        sectionLightChanged(type: $LightLayer_, sectionY: number): void;
        c2me$shouldScheduleUndirty(): boolean;
        c2me$queueLightSectionDirty(type: $LightLayer_, sectionY: number): void;
        getTickingChunk(): $LevelChunk;
        refreshAccessibility(): void;
        wasAccessibleSinceLastSave(): boolean;
        getChunkToSend(): $LevelChunk;
        isReadyForSaving(): boolean;
        getSaveSyncFuture(): $CompletableFuture<never>;
        getSendSyncFuture(): $CompletableFuture<never>;
        setTicketLevel(queueLevel: number): void;
        setQueueLevel(queueLevel: number): void;
        addSendDependency(dependency: $CompletableFuture<never>): void;
        addSaveDependency(dependency: $CompletableFuture<never>): void;
        invokeUpdateFutures(chunkMap: $ChunkMap, executor: $Executor_): void;
        static UNLOADED_LEVEL_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        currentlyLoading: $LevelChunk;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        constructor(pos: $ChunkPos, ticketLevel: number, levelHeightAccessor: $LevelHeightAccessor, lightEngine: $LevelLightEngine, onLevelChange: $ChunkHolder$LevelChangeListener_, playerProvider: $ChunkHolder$PlayerProvider_);
        get fullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        get entityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        get tickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        get tickingChunk(): $LevelChunk;
        get chunkToSend(): $LevelChunk;
        get readyForSaving(): boolean;
        get saveSyncFuture(): $CompletableFuture<never>;
        get sendSyncFuture(): $CompletableFuture<never>;
        set ticketLevel(value: number);
        set queueLevel(value: number);
    }
    export class $WorldGenRegion implements $WorldGenLevel {
        getHeight(): number;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        /**
         * @deprecated
         */
        getLevel(): $ServerLevel;
        getSeaLevel(): number;
        getLightEngine(): $LevelLightEngine;
        dimensionType(): $DimensionType;
        getMinBuildHeight(): number;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, boundingBox: $AABB_, predicate: $Predicate_<$Entity> | null): $List<$Entity>;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        getWorldBorder(): $WorldBorder;
        enabledFeatures(): $FeatureFlagSet;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ChunkSource;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        getFluidState(pos: $BlockPos_): $FluidState;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        getShade(direction: $Direction_, shade: boolean): number;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity>): $Player;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getBlockTicks(): $LevelTickAccess<$Block>;
        addFreshEntity(entity: $Entity): boolean;
        ensureCanWrite(pos: $BlockPos_): boolean;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        getCenter(): $ChunkPos;
        isClientSide(): boolean;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        /**
         * Gets the random world seed.
         */
        nextSubTickCount(): number;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getServer(): $MinecraftServer;
        levelEvent(player: $Player | null, type: number, pos: $BlockPos_, data: number): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): void;
        removeBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        getUncachedNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getRandom(): $RandomSource;
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        addFreshEntityWithPassengers(entity: $Entity): void;
        blockUpdated(pos: $BlockPos_, block: $Block_): void;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number): void;
        getDifficulty(): $Difficulty;
        levelEvent(type: number, pos: $BlockPos_, data: number): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_): void;
        /**
         * Gets the random world seed.
         */
        dayTime(): number;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        getTimeOfDay(partialTick: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        hasChunkAt(chunkX: number, chunkZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        isWaterAt(pos: $BlockPos_): boolean;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        holderLookup<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        containsAnyLiquid(collisionBox: $AABB_): boolean;
        isEmptyBlock(pos: $BlockPos_): boolean;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        /**
         * @deprecated
         */
        hasChunksAt(from: $BlockPos_, to: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromZ: number, toX: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): boolean;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        self(): $EntityGetter;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(pos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        isUnobstructed(entity: $Entity): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        noCollision(entity: $Entity): boolean;
        noCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        shouldPassThroughWalls(arg0: $Player): boolean;
        isVerticalCollision(arg0: $VoxelShape, arg1: $AABB_, arg2: $Player): boolean;
        /**
         * Returns whether a redstone signal is emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        hasSignal(pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(pos: $BlockPos_, direction: $Direction_): number;
        hasNeighborSignal(pos: $BlockPos_): boolean;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        getDirectSignalTo(pos: $BlockPos_): number;
        getBestNeighborSignal(pos: $BlockPos_): number;
        /**
         * Returns the control signal emitted from the given position in the given direction.
         * If `diodesOnly` is `true`, this method returns the direct signal emitted if
         * and only if this position is occupied by a diode (i.e. a repeater or comparator).
         * Otherwise, if this position is occupied by a
         * redstone block,
         * this method will return the redstone signal emitted by it. If not, this method will
         * return the direct signal emitted from this position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getControlInputSignal(pos: $BlockPos_, direction: $Direction_, diodesOnly: boolean): number;
        /**
         * Shortcut method to get an optional holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holder<T>(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(center: $BlockPos_, range: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        destroyBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will cause a block update.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        getEntities(): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getLightEmission(pos: $BlockPos_): number;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        getBlockStates(aabb: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getMaxSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getMaxBuildHeight(): number;
        getMinSection(): number;
        getSectionsCount(): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        hasBiomes(): boolean;
        getBiomeFabric(pos: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(level: $ServerLevel, cache: $StaticCache2D<$GenerationChunkHolder>, generatingStep: $ChunkStep_, center: $ChunkAccess);
        get seed(): number;
        get level(): $ServerLevel;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get minBuildHeight(): number;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get blockTicks(): $LevelTickAccess<$Block>;
        set currentlyGenerating(value: $Supplier_<string> | null);
        get center(): $ChunkPos;
        get clientSide(): boolean;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get server(): $MinecraftServer;
        get random(): $RandomSource;
        get difficulty(): $Difficulty;
        get moonPhase(): number;
        get moonBrightness(): number;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get maxLightLevel(): number;
        get maxSection(): number;
        get maxBuildHeight(): number;
        get minSection(): number;
        get sectionsCount(): number;
    }
    export class $ChunkTrackingView {
        static of(center: $ChunkPos, viewDistance: number): $ChunkTrackingView;
        /**
         * Calculates the chunks that the player needs to drop in the `oldChunkTrackingView` and the chunks that need to be sent for the `newChunkTrackingView`. The chunks that overlap in both views can be kept.
         */
        static difference(oldChunkTrackingView: $ChunkTrackingView, newChunkTrackingView: $ChunkTrackingView, chunkMarker: $Consumer_<$ChunkPos>, chunkDropper: $Consumer_<$ChunkPos>): void;
        /**
         * Check if a chunk `(x,z)` is within a `viewDistance` which is centered on `(centerX, centerZ)`
         */
        static isWithinDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        static isInViewDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number): boolean;
        static EMPTY: $ChunkTrackingView;
    }
    export interface $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        isInViewDistance(x: number, z: number): boolean;
    }
    export class $GenerationChunkHolder {
        failAndClearPendingFuture(status: number, future: $CompletableFuture<$ChunkResult<$ChunkAccess>>): void;
        getFullStatus(): $FullChunkStatus;
        getChunkIfPresent(status: $ChunkStatus_): $ChunkAccess;
        getPos(): $ChunkPos;
        applyStep(step: $ChunkStep_, chunkMap: $GeneratingChunkMap, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getPersistedStatus(): $ChunkStatus;
        rescheduleChunkTask(chunkMap: $ChunkMap, targetStatus: $ChunkStatus_ | null): void;
        getChunkIfPresentUnchecked(status: $ChunkStatus_): $ChunkAccess;
        scheduleChunkGenerationTask(targetStatus: $ChunkStatus_, chunkMap: $ChunkMap): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        removeTask(task: $ChunkGenerationTask): void;
        increaseGenerationRefCount(): void;
        decreaseGenerationRefCount(): void;
        getGenerationRefCount(): number;
        failAndClearPendingFuturesBetween(highestAllowableStatus: $ChunkStatus_ | null, currentStatus: $ChunkStatus_): void;
        findHighestStatusWithPendingFuture(generationStatus: $ChunkStatus_ | null): $ChunkStatus;
        getTicketLevel(): number;
        getLatestChunk(): $ChunkAccess;
        getLatestStatus(): $ChunkStatus;
        getOrCreateFuture(targetStatus: $ChunkStatus_): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        acquireStatusBump(status: $ChunkStatus_): boolean;
        replaceProtoChunk(chunk: $ImposterProtoChunk): void;
        completeFuture(targetStatus: $ChunkStatus_, chunkAccess: $ChunkAccess): void;
        isStatusDisallowed(status: $ChunkStatus_): boolean;
        getAllFutures(): $List<$Pair<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        getQueueLevel(): number;
        currentlyLoading: $LevelChunk;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        constructor(pos: $ChunkPos);
        get fullStatus(): $FullChunkStatus;
        get pos(): $ChunkPos;
        get persistedStatus(): $ChunkStatus;
        get generationRefCount(): number;
        get ticketLevel(): number;
        get latestChunk(): $ChunkAccess;
        get latestStatus(): $ChunkStatus;
        get allFutures(): $List<$Pair<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        get queueLevel(): number;
    }
    export class $ChunkResult<T> {
        static of<T>(value: T): $ChunkResult<T>;
        static orElse<R>(chunkResult: $ChunkResult<R>, orElse: R | null): R;
        static error<T>(errorSupplier: $Supplier_<string>): $ChunkResult<T>;
        static error<T>(error: string): $ChunkResult<T>;
    }
    export interface $ChunkResult<T> {
        map<R>(mappingFunction: $Function_<T, R>): $ChunkResult<R>;
        orElse(value: T | null): T;
        orElseThrow<E extends $Throwable>(exceptionSupplier: $Supplier_<E>): T;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(action: $Consumer_<T>): $ChunkResult<T>;
        get success(): boolean;
    }
    export class $ServerChunkCache$ChunkAndHolder extends $Record {
        holder(): $ChunkHolder;
        chunk(): $LevelChunk;
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCache$ChunkAndHolder}.
     */
    export type $ServerChunkCache$ChunkAndHolder_ = { holder?: $ChunkHolder, chunk?: $LevelChunk,  } | [holder?: $ChunkHolder, chunk?: $LevelChunk, ];
    export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension, $IServerChunkManager, $ISyncLoadManager {
        save(flush: boolean): void;
        move(player: $ServerPlayer): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        setViewDistance(simulationDistance: number): void;
        getCurrentSyncLoad(): $ChunkPos;
        getChunkFuture(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getChunkDebugData(chunkPos: $ChunkPos): string;
        pollTask(): boolean;
        getGenerator(): $ChunkGenerator;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        getPendingTasksCount(): number;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        randomState(): $RandomState;
        getGeneratorState(): $ChunkGeneratorStructureState;
        chunkScanner(): $ChunkScanAccess;
        getDataStorage(): $DimensionDataStorage;
        getPoiManager(): $PoiManager;
        getLastSpawnState(): $NaturalSpawner$SpawnState;
        isPositionTicking(chunkPos: number): boolean;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        addEntity(entity: $Entity): void;
        removeEntity(entity: $Entity): void;
        blockChanged(pos: $BlockPos_): void;
        removeTicketsOnClosing(): void;
        getTickingGenerated(): number;
        setSimulationDistance(simulationDistance: number): void;
        self(): $ServerChunkCache;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcast(entity: $Entity, payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcastAndSend(entity: $Entity, payload: $CustomPacketPayload_): void;
        invokeUpdateChunks(): boolean;
        getMainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
        getTicketManager(): $DistanceManager;
        mainThread: $Thread;
        level: $ServerLevel;
        chunkMap: $ChunkMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, generator: $ChunkGenerator, viewDistance: number, simulationDistance: number, sync: boolean, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>);
        get lightEngine(): $ThreadedLevelLightEngine;
        set viewDistance(value: number);
        get currentSyncLoad(): $ChunkPos;
        get generator(): $ChunkGenerator;
        get pendingTasksCount(): number;
        get generatorState(): $ChunkGeneratorStructureState;
        get dataStorage(): $DimensionDataStorage;
        get poiManager(): $PoiManager;
        get lastSpawnState(): $NaturalSpawner$SpawnState;
        get tickingGenerated(): number;
        set simulationDistance(value: number);
        get mainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
        get ticketManager(): $DistanceManager;
    }
    export class $ChunkResult$Success<T> extends $Record implements $ChunkResult<T> {
        value(): T;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        constructor(arg0: T);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Success}.
     */
    export type $ChunkResult$Success_<T> = { value?: any,  } | [value?: any, ];
    export class $PlayerMap {
        ignored(player: $ServerPlayer): boolean;
        addPlayer(player: $ServerPlayer, skipPlayer: boolean): void;
        removePlayer(player: $ServerPlayer): void;
        getAllPlayers(): $Set<$ServerPlayer>;
        ignorePlayer(player: $ServerPlayer): void;
        unIgnorePlayer(player: $ServerPlayer): void;
        ignoredOrUnknown(player: $ServerPlayer): boolean;
        constructor();
        get allPlayers(): $Set<$ServerPlayer>;
    }
    export class $ChunkLevel {
        static isLoaded(level: number): boolean;
        static fullStatus(level: number): $FullChunkStatus;
        static byStatus(status: $FullChunkStatus_): number;
        static byStatus(status: $ChunkStatus_): number;
        static getStatusAroundFullChunk(level: number): $ChunkStatus;
        static getStatusAroundFullChunk(distance: number, chunkStatus: $ChunkStatus_ | null): $ChunkStatus;
        static generationStatus(level: number): $ChunkStatus;
        static isEntityTicking(level: number): boolean;
        static isBlockTicking(level: number): boolean;
        static RADIUS_AROUND_FULL_CHUNK: number;
        static MAX_LEVEL: number;
        constructor();
    }
    export class $ServerEntity {
        getLastSentYRot(): number;
        getLastSentXRot(): number;
        getPositionBase(): $Vec3;
        getLastSentMovement(): $Vec3;
        addPairing(player: $ServerPlayer): void;
        sendPairingData(arg0: $ServerPlayer, arg1: $PacketAndPayloadAcceptor<$ClientGamePacketListener>): void;
        getLastSentYHeadRot(): number;
        removePairing(player: $ServerPlayer): void;
        sendChanges(): void;
        static FORCED_POS_UPDATE_PERIOD: number;
        constructor(level: $ServerLevel, entity: $Entity, updateInterval: number, trackDelta: boolean, broadcast: $Consumer_<$Packet<never>>);
        get lastSentYRot(): number;
        get lastSentXRot(): number;
        get positionBase(): $Vec3;
        get lastSentMovement(): $Vec3;
        get lastSentYHeadRot(): number;
    }
    export class $GeneratingChunkMap {
    }
    export interface $GeneratingChunkMap {
        runGenerationTasks(): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
    }
    export class $ColumnPos extends $Record {
        x(): number;
        z(): number;
        toLong(): number;
        static getZ(pos: number): number;
        static getX(pos: number): number;
        static asLong(x: number, z: number): number;
        toChunkPos(): $ChunkPos;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ColumnPos}.
     */
    export type $ColumnPos_ = { x?: number, z?: number,  } | [x?: number, z?: number, ];
    export class $ChunkTaskPriorityQueue<T> {
        pop(): $Stream<$Either<T, $Runnable>>;
        hasWork(): boolean;
        static PRIORITY_LEVEL_COUNT: number;
        constructor(name: string, maxTasks: number);
    }
    export class $ChunkGenerationTask {
        static create(chunkMap: $GeneratingChunkMap, targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        getCenter(): $GenerationChunkHolder;
        markForCancellation(): void;
        runUntilWait(): $CompletableFuture<never>;
        targetStatus: $ChunkStatus;
        get center(): $GenerationChunkHolder;
    }
    export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<$Runnable> {
    }
    export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
        compareTo(other: $BlockDestructionProgress): number;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getId(): number;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getUpdatedRenderTick(): number;
        create$setExtraPositions(arg0: $Set_<any>): void;
        create$getExtraPositions(): $Set<any>;
        getPos(): $BlockPos;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getProgress(): number;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        updateTick(damage: number): void;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        setProgress(damage: number): void;
        constructor(id: number, pos: $BlockPos_);
        get id(): number;
        get updatedRenderTick(): number;
        get pos(): $BlockPos;
    }
    export class $TickingTracker extends $ChunkTracker implements $ISimulationDistanceLevelPropagator {
        getLevel(chunkPos: $ChunkPos): number;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removeTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        addTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        runAllUpdates(): void;
        getTicketDebugString(chunkPos: number): string;
        replacePlayerTicketsLevel(ticketLevel: number): void;
        getLevels(): $Long2ByteMap;
        static SOURCE: number;
        static MAX_LEVEL: number;
        constructor();
        get levels(): $Long2ByteMap;
    }
    export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable, $IServerLightingProvider {
        close(): void;
        lightChunk(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        addTask(chunkX: number, chunkZ: number, type: $ThreadedLevelLightEngine$TaskType_, task: $Runnable_): void;
        tryScheduleUpdate(): void;
        initializeLight(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        waitForPendingTasks(x: number, z: number): $CompletableFuture<never>;
        invokeEnqueue(chunkX: number, chunkZ: number, queueLevelSupplier: $IntSupplier_, type: $ThreadedLevelLightEngine$TaskType_, task: $Runnable_): void;
        invokeUpdateChunkStatus(chunkPos: $ChunkPos): void;
        static DEFAULT_BATCH_SIZE: number;
        static LIGHT_SECTION_PADDING: number;
        constructor(lightChunk: $LightChunkGetter, chunkMap: $ChunkMap, skyLight: boolean, taskMailbox: $ProcessorMailbox<$Runnable_>, sorterMailbox: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ThreadedLevelLightEngine$TaskType extends $Enum<$ThreadedLevelLightEngine$TaskType> {
        static values(): $ThreadedLevelLightEngine$TaskType[];
        static valueOf(arg0: string): $ThreadedLevelLightEngine$TaskType;
        static PRE_UPDATE: $ThreadedLevelLightEngine$TaskType;
        static POST_UPDATE: $ThreadedLevelLightEngine$TaskType;
    }
    /**
     * Values that may be interpreted as {@link $ThreadedLevelLightEngine$TaskType}.
     */
    export type $ThreadedLevelLightEngine$TaskType_ = "pre_update" | "post_update";
    export class $ChunkTaskPriorityQueueSorter$Release {
    }
    export class $DistanceManager$FixedPlayerDistanceChunkTracker extends $ChunkTracker implements $IChunkTicketManagerDistanceFromNearestPlayerTracker {
        runAllUpdates(): void;
        getMaxDistance(): number;
        static SOURCE: number;
        get maxDistance(): number;
    }
    export class $DistanceManager$PlayerTicketTracker extends $DistanceManager$FixedPlayerDistanceChunkTracker implements $IChunkTicketManagerNearbyChunkTicketUpdater {
        updateViewDistance(viewDistance: number): void;
        getDistances(): $Long2IntMap;
        static SOURCE: number;
        get distances(): $Long2IntMap;
    }
    export class $DemoMode extends $ServerPlayerGameMode {
        static DEMO_DAYS: number;
        static TOTAL_PLAY_TICKS: number;
        destroyProgressStart: number;
        gameTicks: number;
        lastSentState: number;
        destroyPos: $BlockPos;
        constructor(player: $ServerPlayer);
    }
    export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        static SOURCE: number;
    }
    export class $ChunkResult$Fail<T> extends $Record implements $ChunkResult<T> {
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        error(): $Supplier<string>;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        constructor(arg0: $Supplier_<string>);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Fail}.
     */
    export type $ChunkResult$Fail_<T> = { error?: $Supplier_<string>,  } | [error?: $Supplier_<string>, ];
    export class $ChunkTaskPriorityQueueSorter$Message<T> {
    }
    export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
        static values(): $FullChunkStatus[];
        static valueOf(arg0: string): $FullChunkStatus;
        isOrAfter(status: $FullChunkStatus_): boolean;
        static ENTITY_TICKING: $FullChunkStatus;
        static INACCESSIBLE: $FullChunkStatus;
        static FULL: $FullChunkStatus;
        static BLOCK_TICKING: $FullChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $FullChunkStatus}.
     */
    export type $FullChunkStatus_ = "inaccessible" | "full" | "block_ticking" | "entity_ticking";
    export class $ServerLevel$EntityCallbacks implements $LevelCallback<$Entity> {
        onTickingEnd(arg0: $Entity): void;
        onTrackingEnd(arg0: $Entity): void;
        onSectionChange(arg0: $Entity): void;
        onTickingStart(arg0: $Entity): void;
        onTrackingStart(arg0: $Entity): void;
        onDestroyed(arg0: $Entity): void;
        onCreated(arg0: $Entity): void;
    }
    export class $ClientInformation extends $Record implements $ISyncedClientOptions {
        write(buffer: $FriendlyByteBuf): void;
        language(): string;
        textFilteringEnabled(): boolean;
        static createDefault(): $ClientInformation;
        chatVisibility(): $ChatVisiblity;
        allowsListing(): boolean;
        viewDistance(): number;
        modelCustomisation(): number;
        chatColors(): boolean;
        mainHand(): $HumanoidArm;
        setViewDistance(arg0: number): void;
        static MAX_LANGUAGE_LENGTH: number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: number, arg2: $ChatVisiblity_, arg3: boolean, arg4: number, arg5: $HumanoidArm_, arg6: boolean, arg7: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientInformation}.
     */
    export type $ClientInformation_ = { modelCustomisation?: number, viewDistance?: number, language?: string, allowsListing?: boolean, chatVisibility?: $ChatVisiblity_, chatColors?: boolean, mainHand?: $HumanoidArm_, textFilteringEnabled?: boolean,  } | [modelCustomisation?: number, viewDistance?: number, language?: string, allowsListing?: boolean, chatVisibility?: $ChatVisiblity_, chatColors?: boolean, mainHand?: $HumanoidArm_, textFilteringEnabled?: boolean, ];
    export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $GeneratingChunkMap, $ServerChunkCacheAccessor, $AccessorMixinChunkMap, $IThreadedAnvilChunkStorage$1, $IThreadedAnvilChunkStorage, $IVanillaChunkManager, $IChunkSystemAccess {
        size(): number;
        generator(): $ChunkGenerator;
        move(player: $ServerPlayer): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        runGenerationTasks(): void;
        getChunkDebugData(pos: $ChunkPos): string;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        getChunks(): $Iterable<$ChunkHolder>;
        anyPlayerCloseEnoughForSpawning(chunkPos: $ChunkPos): boolean;
        getDistanceManager(): $DistanceManager;
        resendBiomesForChunks(chunks: $List_<$ChunkAccess>): void;
        hasWork(): boolean;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
        getTickingGenerated(): number;
        c2me$runOneChunkAutoSave(): boolean;
        c2me$getTheChunkSystem(): $TheChunkSystem;
        getVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        c2me$getSchedulingManager(): $SchedulingManager;
        getStorageName(): string;
        getPlayersWatching(arg0: $Entity): $List<$ServerPlayer>;
        /**
         * Checks if a chunk is on the edge of the player's view distance.
         */
        isChunkTracked(player: $ServerPlayer, x: number, z: number): boolean;
        scheduleOnMainThreadMailbox(arg0: $ChunkTaskPriorityQueueSorter$Message<$Runnable_>): void;
        prepareAccessibleChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        prepareEntityTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        /**
         * Sets level and loads/unloads chunk.
         */
        updateChunkScheduling(chunkPos: number, level: number, newLevel: $ChunkHolder, holder: number): $ChunkHolder;
        prepareTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getPlayersCloseForSpawning(chunkPos: $ChunkPos): $List<$ServerPlayer>;
        waitForLightBeforeSending(chunkPos: $ChunkPos, range: number): void;
        getUpdatingChunkIfPresent(chunkPos: number): $ChunkHolder;
        debugFuturesAndCreateReportedException(exception: $IllegalStateException, details: string): $ReportedException;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        getChunkToSend(chunkPos: number): $LevelChunk;
        getWorldGenerationProgressListener(): $ChunkProgressListener;
        getWorld(): $ServerLevel;
        getTrackedEntity(): $Int2ObjectMap<$EntityTrackerAccessor>;
        invokeSave(chunk: $ChunkAccess): boolean;
        getMainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        invokeUpdateHolderMap(): boolean;
        getCurrentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        setChunkHolderListDirty(flush: boolean): void;
        getLightingProvider(): $ThreadedLevelLightEngine;
        getGenerationContext(): $WorldGenContext;
        invokeSendToPlayers(chunk: $LevelChunk): void;
        getTotalChunksLoadedCount(): $AtomicInteger;
        invokeGetChunkHolder(chunkPos: number): $ChunkHolder;
        invokeOnChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        getChunkToNextSaveTimeMs(): $Long2LongMap;
        invokeGetUpdatedChunkNbt(pos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        getPointOfInterestStorage(): $PoiManager;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        lootr$getChunks(): $Iterable<$ChunkHolder>;
        playerMap: $PlayerMap;
        entityMap: $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        level: $ServerLevel;
        updatingChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static MIN_VIEW_DISTANCE: number;
        visibleChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static MAX_VIEW_DISTANCE: number;
        static FORCED_TICKET_LEVEL: number;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        pendingUnloads: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, mainThreadExecutor: $BlockableEventLoop<$Runnable_>, lightChunk: $LightChunkGetter, generator: $ChunkGenerator, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>, viewDistance: number, sync: boolean);
        get chunks(): $Iterable<$ChunkHolder>;
        get distanceManager(): $DistanceManager;
        get tickingGenerated(): number;
        get storageName(): string;
        get worldGenerationProgressListener(): $ChunkProgressListener;
        get world(): $ServerLevel;
        get trackedEntity(): $Int2ObjectMap<$EntityTrackerAccessor>;
        get mainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        get currentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        set chunkHolderListDirty(value: boolean);
        get lightingProvider(): $ThreadedLevelLightEngine;
        get generationContext(): $WorldGenContext;
        get totalChunksLoadedCount(): $AtomicInteger;
        get chunkToNextSaveTimeMs(): $Long2LongMap;
        get pointOfInterestStorage(): $PoiManager;
    }
    export class $ServerPlayerGameMode implements $ServerPlayerGameModeAccess {
        /**
         * Sets the world instance.
         */
        setLevel(serverLevel: $ServerLevel): void;
        getGameModeForPlayer(): $GameType;
        changeGameModeForPlayer(gameModeForPlayer: $GameType_): boolean;
        /**
         * Attempts to harvest a block
         */
        destroyBlock(pos: $BlockPos_): boolean;
        tick(): void;
        useItem(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_, hitResult: $BlockHitResult): $InteractionResult;
        /**
         * Get if we are in creative game mode.
         */
        isCreative(): boolean;
        getPreviousGameModeForPlayer(): $GameType;
        /**
         * Get if we are in creative game mode.
         */
        isSurvival(): boolean;
        handler$fla000$justhammers$beforeMineBlock(arg0: $BlockPos_, arg1: $CallbackInfoReturnable<any>): void;
        handleBlockBreakAction(pos: $BlockPos_, action: $ServerboundPlayerActionPacket$Action_, face: $Direction_, maxBuildHeight: number, sequence: number): void;
        destroyAndAck(pos: $BlockPos_, sequence: number, message: string): void;
        handler$fla000$justhammers$beforeRemoveBlock(arg0: $BlockPos_, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Get if we are in creative game mode.
         */
        isDestroyingBlock(): boolean;
        /**
         * Get if we are in creative game mode.
         */
        hasDelayedDestroy(): boolean;
        destroyProgressStart: number;
        gameTicks: number;
        lastSentState: number;
        destroyPos: $BlockPos;
        constructor(player: $ServerPlayer);
        set level(value: $ServerLevel);
        get gameModeForPlayer(): $GameType;
        get creative(): boolean;
        get previousGameModeForPlayer(): $GameType;
        get survival(): boolean;
        get destroyingBlock(): boolean;
    }
    export class $ChunkMap$DistanceManager extends $DistanceManager implements $ITACSTicketManager, $IThreadedAnvilChunkStorageTicketManager {
        getField_17443(): $ChunkMap;
        c2me$getSuperClass(): $ChunkMap;
        get field_17443(): $ChunkMap;
    }
    export class $ServerPlayer$RespawnPosAngle extends $Record {
        position(): $Vec3;
        static of(position: $Vec3_, towardsPos: $BlockPos_): $ServerPlayer$RespawnPosAngle;
        yaw(): number;
        constructor(position: $Vec3_, yaw: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayer$RespawnPosAngle}.
     */
    export type $ServerPlayer$RespawnPosAngle_ = { yaw?: number, position?: $Vec3_,  } | [yaw?: number, position?: $Vec3_, ];
    export class $DistanceManager implements $IChunkTicketManager, $ChunkTicketManagerExtension {
        addPlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        shouldForceTicks(chunkPos: number): boolean;
        removePlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        getDebugStatus(): string;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        inEntityTickingRange(chunkPos: number): boolean;
        inBlockTickingRange(chunkPos: number): boolean;
        /**
         * Returns the number of chunks taken into account when calculating the mob cap
         */
        getNaturalSpawnChunkCount(): number;
        getTickets(chunkPos: number): $SortedArraySet<$Ticket<never>>;
        removeTicketsOnClosing(): void;
        addTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        runAllUpdates(chunkMap: $ChunkMap): boolean;
        updateSimulationDistance(viewDistance: number): void;
        c2me$closeNoTickVD(): void;
        hasTickets(): boolean;
        handler$gif000$c2me_notickvd$mapSimulationDistance(simulationDistance: number, ci: $CallbackInfo): void;
        updatePlayerTickets(viewDistance: number): void;
        hasPlayersNearby(chunkPos: number): boolean;
        c2me$getPendingLoadsCount(): number;
        getSimulationDistanceTracker(): $TickingTracker;
        getNearbyChunkTicketUpdater(): $DistanceManager$PlayerTicketTracker;
        getTicketsByPosition(): $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        getPlayersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        invokeSetWatchDistance(viewDistance: number): void;
        get debugStatus(): string;
        get naturalSpawnChunkCount(): number;
        get simulationDistanceTracker(): $TickingTracker;
        get nearbyChunkTicketUpdater(): $DistanceManager$PlayerTicketTracker;
        get ticketsByPosition(): $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        get playersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
    }
    export class $ServerPlayer extends $Player implements $IQuiverPlayer, $ServerPlayerAccessor, $IServerPlayer, $ServerPlayerAccess, $IServerPlayer$2, $ServerPlayerEntityMixin, $IServerPlayer$1, $ServerPlayerKJS {
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getLanguage(): string;
        drop(bypassHiddenChat: boolean): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        disconnect(): void;
        getRecipeBook(): $ServerRecipeBook;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        requestedViewDistance(): number;
        /**
         * Add experience levels to this player.
         */
        setExperiencePoints(levels: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackStartFallingPosition(): void;
        createCommonSpawnInfo(level: $ServerLevel): $CommonPlayerSpawnInfo;
        /**
         * Returns if other players can attack this player
         */
        isChangingDimension(): boolean;
        /**
         * Add experience levels to this player.
         */
        setExperienceLevels(levels: number): void;
        checkRidingStatistics(dx: number, arg1: number, dy: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        clearRaidOmenPosition(): void;
        getXaeroMinimapPlayerData(): $ServerPlayerData$1;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData$1): void;
        copyRespawnPosition(player: $ServerPlayer): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        hasChangedDimension(): void;
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData$2): void;
        getChunkTrackingView(): $ChunkTrackingView;
        getXaeroWorldMapPlayerData(): $ServerPlayerData$2;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetLastActionTime(): void;
        shouldFilterMessageTo(player: $ServerPlayer): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        nextContainerCounter(): void;
        setTabListHeaderFooter(arg0: $Component_, arg1: $Component_): void;
        setChunkTrackingView(chunkTrackingView: $ChunkTrackingView): void;
        getRaidOmenPosition(): $BlockPos;
        setRaidOmenPosition(raidOmenPosition: $BlockPos_): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListDisplayName(): $Component;
        handler$jlc000$ae2wtlib$restockDrop(arg0: boolean, arg1: $CallbackInfoReturnable<any>, arg2: $ItemStack_): void;
        findRespawnPositionAndUseSpawnBlock(keepInventory: boolean, postDimensionTransition: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        handler$ijj000$nerb$onAwardRecipesByKey(recipes: $List_<any>, ci: $CallbackInfo): void;
        getStatsCounter(): $ServerStatsCounter;
        onInsideBlock(state: $BlockState_): void;
        restoreFrom(that: $ServerPlayer, keepEverything: boolean): void;
        getRespawnPosition(): $BlockPos;
        serverLevel(): $ServerLevel;
        handler$gdk000$glitchcore$onChangeDimension(arg0: $DimensionTransition_, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackEnteredOrExitedLavaOnVehicle(): void;
        setSpawnExtraParticlesOnFall(spawnExtraParticlesOnFall: boolean): void;
        handler$ijj000$nerb$onAwardRecipes(holders: $Collection_<any>, cir: $CallbackInfoReturnable<any>): void;
        triggerDimensionChangeTriggers(level: $ServerLevel): void;
        updateOptions(clientInformation: $ClientInformation_): void;
        getAdvancements(): $PlayerAdvancements;
        checkMovementStatistics(dx: number, arg1: number, dy: number): void;
        lookAt(fromAnchor: $EntityAnchorArgument$Anchor_, entity: $Entity, toAnchor: $EntityAnchorArgument$Anchor_): void;
        sendSystemMessage(chatComponent: $Component_, actionBar: boolean): void;
        /**
         * Returns if other players can attack this player
         */
        allowsListing(): boolean;
        /**
         * Returns if other players can attack this player
         */
        isRespawnForced(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        showEndCredits(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRespawnAngle(): number;
        setServerLevel(level: $ServerLevel): void;
        doCheckFallDamage(movementX: number, arg1: number, movementY: number, arg3: boolean): void;
        setPlayerInput(strafe: number, forward: number, jumping: boolean, sneaking: boolean): void;
        /**
         * Returns if other players can attack this player
         */
        hasDisconnected(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetSentInfo(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        initInventoryMenu(): void;
        clientInformation(): $ClientInformation;
        getLastSectionPos(): $SectionPos;
        setRespawnPosition(dimension: $ResourceKey_<$Level>, position: $BlockPos_ | null, angle: number, forced: boolean, sendMessage: boolean): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListHeader(): $Component;
        setTabListHeader(component: $Component_): void;
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getIpAddress(): string;
        /**
         * Returns if other players can attack this player
         */
        canChatInColor(): boolean;
        sendServerStatus(serverStatus: $ServerStatus_): void;
        getChatVisibility(): $ChatVisiblity;
        getTextFilter(): $TextFilter;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        refreshTabListName(): void;
        setChatSession(chatSession: $RemoteChatSession_): void;
        sendChatMessage(message: $OutgoingChatMessage, filtered: boolean, boundType: $ChatType$Bound_): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListFooter(): $Component;
        setTabListFooter(component: $Component_): void;
        /**
         * Changes the player's gamemode.
         * 
         * @param gameMode One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
         */
        setGameMode(gameMode: $GameType_): boolean;
        loadGameTypes(compound: $CompoundTag_ | null): void;
        setKnownMovement(knownMovement: $Vec3_): void;
        setLastSectionPos(sectionPos: $SectionPos): void;
        getChatSession(): $RemoteChatSession;
        getRespawnDimension(): $ResourceKey<$Level>;
        getCamera(): $Entity;
        initMenu(menu: $AbstractContainerMenu): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        doTick(): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        setCamera(targetEntity: $Entity | null): void;
        supplementaries$setQuiverSlot(arg0: $SlotReference): void;
        supplementaries$getQuiverSlot(): $SlotReference;
        teleportTo(newLevel: $ServerLevel, x: number, arg2: number, y: number, arg4: number, z: number): void;
        getLastActionTime(): number;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        doCloseContainer(): void;
        xaerolib_getData(): $ServerPlayerData;
        xaerolib_setData(arg0: $ServerPlayerData): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        getSpawnLocation(): $LevelBlock;
        setSpawnLocation(c: $LevelBlock): void;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(spawnExtraParticlesOnFall: boolean): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        unlockAdvancement(statKey: $ResourceLocation_): void;
        revokeAdvancement(statKey: $ResourceLocation_): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        /**
         * Checks, whether the player is a server operator.
         * Returns if other players can attack this player
         */
        isOp(): boolean;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        heal(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(component: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        kick(): void;
        setIsChangingDimension(spawnExtraParticlesOnFall: boolean): void;
        getContainerSynchronizer(): $ContainerSynchronizer;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        ic$nextContainerCounter(): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getContainerCounter(): number;
        bumblezone$setStartingToFallPosition(knownMovement: $Vec3_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        lastHurtByPlayerTime: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        ars_Nouveau$motions: $Stack<any>;
        yHeadRot: number;
        yCloakO: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        fallFlyTicks: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        wonGame: boolean;
        s_bee: $EntityType<any>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        gameMode: $ServerPlayerGameMode;
        object: $Object;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        containerCounter: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        camera: $Entity;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        level: $Level;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        enteredNetherPosition: $Vec3;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(server: $MinecraftServer, level: $ServerLevel, gameProfile: $GameProfile, clientInformation: $ClientInformation_);
        get language(): string;
        get recipeBook(): $ServerRecipeBook;
        set experiencePoints(value: number);
        get changingDimension(): boolean;
        set experienceLevels(value: number);
        get tabListDisplayName(): $Component;
        get statsCounter(): $ServerStatsCounter;
        set spawnExtraParticlesOnFall(value: boolean);
        get advancements(): $PlayerAdvancements;
        get respawnForced(): boolean;
        get respawnAngle(): number;
        get ipAddress(): string;
        get chatVisibility(): $ChatVisiblity;
        get textFilter(): $TextFilter;
        set knownMovement(value: $Vec3_);
        get respawnDimension(): $ResourceKey<$Level>;
        get lastActionTime(): number;
        set creativeMode(value: boolean);
        get op(): boolean;
        get containerSynchronizer(): $ContainerSynchronizer;
    }
    export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener, $AutoCloseable {
        static message<T>(chunk: $GenerationChunkHolder, task: $Function_<$ProcessorHandle<$Unit>, T>): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(chunk: $GenerationChunkHolder, task: $Runnable_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message(task: $Runnable_, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message<T>(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<T>;
        close(): void;
        static release(task: $Runnable_, pos: number, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release;
        getProcessor<T>(processor: $ProcessorHandle<T>, flush: boolean): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<T>>;
        getDebugStatus(): string;
        hasWork(): boolean;
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
        getReleaseProcessor(processor: $ProcessorHandle<$Runnable_>): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        constructor(queues: $List_<$ProcessorHandle<never>>, task: $Executor_, maxTasks: number);
        get debugStatus(): string;
    }
    export class $ServerLevel extends $Level implements $WorldGenLevel, $ILevelEventRedirect, $IWorldMapServerLevel, $LinkManager$Access, $ServerLevelKJS, $ServerLevelAccessor, $ISandstormServerDataProvider, $IServerLevel, $ITempleStateCacheProvider, $ServerLevelAccessor$1 {
        save(progress: $ProgressListener | null, flush: boolean, skipSave: boolean): void;
        unload(chunk: $LevelChunk): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        tryAddFreshEntityWithPassengers(entity: $Entity): boolean;
        alternate_current$getWireHandler(): $WireHandler;
        /**
         * Resets the updateEntityTick field to 0
         */
        cleanCapabilityListenerReferences(): void;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        getLevel(): $ServerLevel;
        removePlayerImmediately(player: $ServerPlayer, reason: $Entity$RemovalReason_): void;
        getTempleStateCache(): $TempleStateCache;
        canSleepThroughNights(): boolean;
        redirect$eac000$observable$onTickLiquid(state: $FluidState, level: $Level_, pos: $BlockPos_): void;
        handler$kod000$ars_elemental$tickChunk(arg0: $LevelChunk, arg1: number, arg2: $CallbackInfo): void;
        redirect$eac000$observable$onTickBlock(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        redirect$eac000$observable$onTickPassenger(entity: $Entity): void;
        handler$gdh000$glitchcore$onAddPlayer(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        refurbishedFurniture$GetLinkManager(): $LinkManager;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>): $List<T>;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>, maxResults: number): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        updateSleepingPlayerList(): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetEmptyTime(): void;
        addDuringTeleport(entity: $Entity): void;
        redirect$eac000$observable$onTickNonPassenger(entity: $Entity): void;
        findNearestMapStructure(structureTag: $TagKey_<$Structure>, pos: $BlockPos_, radius: number, skipExistingChunks: boolean): $BlockPos;
        getFluidTicks(): $LevelTicks<$Fluid>;
        structureManager(): $StructureManager;
        addRespawnedPlayer(player: $ServerPlayer): void;
        isHandlingTick(): boolean;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetWeatherCycle(): void;
        /**
         * @deprecated
         */
        setDragonFight(dragonFight: $EndDragonFight | null): void;
        tickPrecipitation(blockPos: $BlockPos_): void;
        addNewPlayer(player: $ServerPlayer): void;
        getLogicalHeight(): number;
        tickCustomSpawners(spawnEnemies: boolean, spawnFriendlies: boolean): void;
        getDataStorage(): $DimensionDataStorage;
        getPoiManager(): $PoiManager;
        getRandomPlayer(): $ServerPlayer;
        onReputationEvent(type: $ReputationEventType, target: $Entity, host: $ReputationEventHandler_): void;
        areEntitiesLoaded(chunkPos: number): boolean;
        getRandomSequence(location: $ResourceLocation_): $RandomSource;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        getWatchdogStats(): string;
        /**
         * Gets an unmodifiable iterator of all loaded entities in the world.
         */
        getAllEntities(): $Iterable<$Entity>;
        startTickingChunk(chunk: $LevelChunk): void;
        findClosestBiome3d(biomePredicate: $Predicate_<$Holder<$Biome>>, pos: $BlockPos_, radius: number, horizontalStep: number, verticalStep: number): $Pair<$BlockPos, $Holder<$Biome>>;
        getPathTypeCache(): $PathTypeCache;
        clearBlockEvents(boundingBox: $BoundingBox): void;
        sectionsToVillage(pos: $SectionPos): number;
        isCloseToVillage(pos: $BlockPos_, sections: number): boolean;
        getForcedChunks(): $LongSet;
        supp$setRedirected(arg0: boolean, arg1: $Vec3_): void;
        setChunkForced(chunkX: number, chunkZ: number, add: boolean): boolean;
        saveDebugReport(path: $Path_): void;
        getPortalForcer(): $PortalForcer;
        /**
         * @deprecated
         * Returns the Entity with the given ID, or null if it doesn't exist in this World.
         */
        getEntityOrPart(id: number): $Entity;
        getDragonFight(): $EndDragonFight;
        getRandomSequences(): $RandomSequences;
        observable$track(entity: $Entity, consumer: $Consumer_<any>): void;
        getSandstormServerData(): $SandstormServerData;
        tickChunk(chunk: $LevelChunk, randomTickSpeed: number): void;
        redirect$gea000$sereneseasons$tickIceAndSnow_getPrecipitationAt(arg0: $Biome_, arg1: $BlockPos_): $Biome$Precipitation;
        getStructureManager(): $StructureTemplateManager;
        addLegacyChunkEntities(entities: $Stream<$Entity>): void;
        setWeatherParameters(clearTime: number, weatherTime: number, isRaining: boolean, isThundering: boolean): void;
        onStructureStartsAvailable(chunk: $ChunkAccess): void;
        isPositionEntityTicking(pos: $BlockPos_): boolean;
        addWorldGenChunkEntities(entities: $Stream<$Entity>): void;
        isNaturalSpawningAllowed(chunkPos: $ChunkPos): boolean;
        isNaturalSpawningAllowed(pos: $BlockPos_): boolean;
        registerCapabilityListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        findLightningTargetAround(pos: $BlockPos_): $BlockPos;
        getXaero_wm_capabilities(): $ServerWorldCapabilities;
        setXaero_wm_capabilities(arg0: $ServerWorldCapabilities): void;
        setDayTime(time: number): void;
        getScoreboard(): $ServerScoreboard;
        getPlayers(predicate: $Predicate_<$ServerPlayer>, maxResults: number): $List<$ServerPlayer>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>): $List<$ServerPlayer>;
        getDragons(): $List<$EnderDragon>;
        getRaidAt(pos: $BlockPos_): $Raid;
        isVillage(pos: $SectionPos): boolean;
        isVillage(pos: $BlockPos_): boolean;
        isRaided(pos: $BlockPos_): boolean;
        getRaids(): $Raids;
        isFlat(): boolean;
        getPersistentData(): $CompoundTag;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        addWithUUID(entity: $Entity): boolean;
        setDefaultSpawnPos(pos: $BlockPos_, angle: number): void;
        tickNonPassenger(entity: $Entity): void;
        sendParticles<T extends $ParticleOptions>(type: T, posX: number, arg2: number, posY: number, arg4: number, posZ: number, arg6: number, particleCount: number, xOffset: number): number;
        sendParticles<T extends $ParticleOptions>(player: $ServerPlayer, type: T, longDistance: boolean, posX: number, arg4: number, posY: number, arg6: number, posZ: number, arg8: number, particleCount: number, xOffset: number): boolean;
        ensureCanWrite(pos: $BlockPos_): boolean;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        self(): $EntityGetter;
        addFreshEntityWithPassengers(entity: $Entity): void;
        getServerLevelData(): $ServerLevelData;
        create$getEntityTickList(): $EntityTickList;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        restoringBlockSnapshots: boolean;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        xaero_wm_capabilities: $ServerWorldCapabilities;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        serverLevelData: $ServerLevelData;
        static RAIN_DURATION: $IntProvider;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(server: $MinecraftServer, dispatcher: $Executor_, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, serverLevelData: $ServerLevelData, dimension: $ResourceKey_<$Level>, levelStem: $LevelStem_, progressListener: $ChunkProgressListener, isDebug: boolean, biomeZoomSeed: number, arg9: $List_<$CustomSpawner_>, customSpawners: boolean, tickTime: $RandomSequences | null);
        get seed(): number;
        get level(): $ServerLevel;
        get templeStateCache(): $TempleStateCache;
        get fluidTicks(): $LevelTicks<$Fluid>;
        get handlingTick(): boolean;
        get logicalHeight(): number;
        get dataStorage(): $DimensionDataStorage;
        get poiManager(): $PoiManager;
        get randomPlayer(): $ServerPlayer;
        get watchdogStats(): string;
        get allEntities(): $Iterable<$Entity>;
        get pathTypeCache(): $PathTypeCache;
        get forcedChunks(): $LongSet;
        get portalForcer(): $PortalForcer;
        get randomSequences(): $RandomSequences;
        get sandstormServerData(): $SandstormServerData;
        get scoreboard(): $ServerScoreboard;
        get dragons(): $List<$EnderDragon>;
        get raids(): $Raids;
        get flat(): boolean;
        get persistentData(): $CompoundTag;
        set currentlyGenerating(value: $Supplier_<string> | null);
    }
    export class $SectionTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        static SOURCE: number;
    }
    export class $ChunkMap$TrackedEntity implements $EntityTrackerAccessor {
        broadcast(packet: $Packet<never>): void;
        broadcastAndSend(packet: $Packet<never>): void;
        removePlayer(player: $ServerPlayer): void;
        updatePlayer(player: $ServerPlayer): void;
        localvar$haa000$ars_nouveau$an$modifyFlag(arg0: boolean, arg1: $ServerPlayer, arg2: number): boolean;
        updatePlayers(playersList: $List_<$ServerPlayer>): void;
        broadcastRemoved(): void;
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        constructor(entity: $ChunkMap, range: $Entity, updateInterval: number, trackDelta: number, arg4: boolean);
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    export class $DistanceManager$ChunkTicketTracker extends $ChunkTracker implements $TicketDistanceLevelPropagatorExtension {
        getLevel(sectionPos: number): number;
        runDistanceUpdates(toUpdateCount: number): number;
        c2me$getTicketLevelUpdates(): $Long2IntLinkedOpenHashMap;
        static SOURCE: number;
        constructor(arg0: $DistanceManager);
    }
}
