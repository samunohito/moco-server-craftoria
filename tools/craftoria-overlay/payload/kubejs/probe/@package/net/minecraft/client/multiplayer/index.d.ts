import { $ServerLinks_, $ServerLinks } from "@package/net/minecraft/server";
import { $LevelRenderer, $DimensionSpecialEffects, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $URL } from "@package/java/net";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $FriendlyByteBuf, $Connection, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AccessorClientAdvancementManager } from "@package/de/dafuqs/revelationary/mixin/client";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageValidator, $Component_, $PlayerChatMessage, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider, $SharedSuggestionProvider$TextCoordinates } from "@package/net/minecraft/commands";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $AccessorMultiPlayerGameMode } from "@package/xfacthd/framedblocks/mixin/client";
import { $IMixinServerList } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $BiomeSeedProvider } from "@package/org/embeddedt/embeddium/impl/world";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $UUID_, $ArrayList, $Map, $List, $Map_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Exception, $Throwable, $Enum, $Iterable, $Thread, $Record, $Runnable_ } from "@package/java/lang";
import { $MultiPlayerGameModeAccess } from "@package/commoble/morered/mixin";
import { $GameRules, $ChunkPos, $ColorResolver_, $GameType, $GameType_, $EntityGetter, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $Renderable, $DebugScreenOverlay, $ChatComponent$State } from "@package/net/minecraft/client/gui/components";
import { $ClientboundGameProfilePacket_, $ClientboundHelloPacket, $ClientboundLoginCompressionPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $BetterStatus_, $BetterStatus, $ServerDataExtension } from "@package/dev/wuffs/bcc/data";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ANIChunkStorageProvider } from "@package/com/hollingsworth/arsnouveau/common/camera";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $ClientRecipeBook, $User } from "@package/net/minecraft/client";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementTree$Listener, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $InteractionResult, $InteractionHand_, $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $TransientEntitySectionManager, $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $IMixinClientPacketListener } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $AccessorClientAdvancements } from "@package/vazkii/patchouli/mixin/client";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $EntityHitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ChunkTracker, $ChunkTrackerHolder } from "@package/org/embeddedt/embeddium/impl/render/chunk/map";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $ISandstormClientDataProvider, $SandstormClientData } from "@package/com/yungnickyoung/minecraft/yungscavebiomes/client/render/sandstorm";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetTitleTextPacket_, $ClientboundSetActionBarTextPacket_, $ClientboundTickingStatePacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundPlayerLookAtPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundLightUpdatePacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundPlayerCombatEndPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundBlockChangedAckPacket_, $ClientboundStopSoundPacket, $ClientboundRemoveEntitiesPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundPlayerPositionPacket, $ClientboundRespawnPacket_, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundRecipePacket, $ClientboundAwardStatsPacket_, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundContainerClosePacket, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetObjectivePacket, $ClientboundSetEntityDataPacket_, $ClientboundPlaceGhostRecipePacket, $ClientboundSetTitlesAnimationPacket, $ClientboundHorseScreenOpenPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelEventPacket, $ClientboundLevelParticlesPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundTabListPacket_, $ClientboundSetScorePacket_, $ClientboundMerchantOffersPacket, $ClientboundTeleportEntityPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetEntityMotionPacket, $ClientboundSetHealthPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundMoveVehiclePacket, $ClientboundBlockEventPacket, $ClientboundPlayerAbilitiesPacket } from "@package/net/minecraft/network/protocol/game";
import { $CachingClientLevel, $ClonedClientLevel } from "@package/com/sonicether/soundphysics/world";
import { $ClientboundResetChatPacket, $ClientboundUpdateEnabledFeaturesPacket_, $ClientConfigurationPacketListener, $ClientboundFinishConfigurationPacket, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ClientLevelAccessor } from "@package/com/yungnickyoung/minecraft/ribbits/mixin/mixins/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $WorldMapSession } from "@package/xaero/map";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(registryKey: $ResourceKey_<$Registry<never>>, networkPayload: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(registryAccess: $RegistryAccess, isMemoryConnection: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(userApiService: $UserApiService, uuid: $UUID_, gameDirectory: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener {
        tick(): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        connection: $Connection;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $IMixinClientPacketListener, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS, $ClientPacketListenerAccessor {
        getId(): $UUID;
        close(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        tick(): void;
        clearLevel(): void;
        sendUnsignedCommand(command: string): boolean;
        getDebugQueryHandler(): $DebugQueryHandler;
        sendChat(message: string): void;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        getRecipeManager(): $RecipeManager;
        updateSearchTrees(): void;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        sendCommand(message: string): void;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        scoreboard(): $Scoreboard;
        potionBrewing(): $PotionBrewing;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        serverLinks(): $ServerLinks;
        getLocalGameProfile(): $GameProfile;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        searchTrees(): $SessionSearchTrees;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handler$cgk000$nolijium$a(arg0: $CallbackInfo): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        getXaero_worldmapSession(): $WorldMapSession;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        handler$hed001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$ghi000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$ikn000$ftbchunks$handleLevelChunkFTBC(packet: $ClientboundLevelChunkWithLightPacket, ci: $CallbackInfo): void;
        handler$eai000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$ghi000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$hed001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$ikn000$ftbchunks$handleBlockUpdateFTBC(packet: $ClientboundBlockUpdatePacket, ci: $CallbackInfo): void;
        handler$dji000$moremousetweaks$afterSlotItemChange(arg0: $ClientboundContainerSetSlotPacket, arg1: $CallbackInfo): void;
        handler$ghi001$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$hed001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$ghi000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
        handler$ghi000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$ghi000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$hed000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$hef001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$ghi000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$ghi002$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$hed001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$dbf000$bookshelf$onInit(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_, arg3: $CallbackInfo): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handler$hed001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$dji000$moremousetweaks$beforeHeldItemChange(arg0: $ClientboundSetCarriedItemPacket, arg1: $CallbackInfo): void;
        handler$ikn000$ftbchunks$handleChunkBlocksUpdateFTBC(packet: $ClientboundSectionBlocksUpdatePacket, ci: $CallbackInfo): void;
        handler$ghi000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$hed001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$ghi000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$feg000$chat_heads$chatheads$captureSenderInfo(packet: $ClientboundPlayerChatPacket_, ci: $CallbackInfo, senderInfo: $LocalRef<any>): void;
        modify$feg000$chat_heads$chatheads$rememberSenderInfo(playerChatMessage: $PlayerChatMessage_, senderInfo: $LocalRef<any>): $PlayerChatMessage;
        handler$hed001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$ghi000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$jfe000$yungscavebiomes$addSandSnapperDiggingTickableSound(arg0: $Entity, arg1: $CallbackInfo): void;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        kjs$sessionData(): $KubeSessionData;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        handler$hdk000$immersive_aircraft$onEntityPassengersSetInject(packet: $ClientboundSetPassengersPacket, ci: $CallbackInfo): void;
        setCommandsKonkrete(arg0: $CommandDispatcher<$SharedSuggestionProvider>): void;
        getCommandsKonkrete(): $CommandDispatcher<$SharedSuggestionProvider>;
        catnip$getServerChunkRadius(): number;
        serverChunkRadius: number;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get id(): $UUID;
        get level(): $ClientLevel;
        get debugQueryHandler(): $DebugQueryHandler;
        get advancements(): $ClientAdvancements;
        get serverData(): $ServerData;
        get recipeManager(): $RecipeManager;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get localGameProfile(): $GameProfile;
        get suggestionsProvider(): $ClientSuggestionProvider;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        set keyPair(value: $ProfileKeyPair_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExtension {
        type(): $ServerData$Type;
        /**
         * Returns an NBTTagCompound with the server's name, IP and maybe acceptTextures.
         */
        write(): $CompoundTag;
        /**
         * Takes an NBTTagCompound with 'name' and 'ip' keys, returns a ServerData instance.
         */
        static read(nbtCompound: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(state: $ServerData$State_): void;
        copyFrom(serverData: $ServerData): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
        getIconBytes(): number[];
        copyNameIconFrom(serverData: $ServerData): void;
        setBetterData(arg0: $BetterStatus_): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        getBetterData(): $BetterStatus;
        setIconBytes(iconBytes: number[] | null): void;
        static validateIcon(icon: number[] | null): number[];
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        betterStatus: $BetterStatus;
        name: string;
        version: $Component;
        status: $Component;
        constructor(name: string, ip: string, type: $ServerData$Type_);
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList implements $IMixinServerList {
        remove(serverData: $ServerData): void;
        /**
         * Counts the number of ServerData instances in the list.
         */
        size(): number;
        /**
         * Gets the ServerData instance stored for the given index in the list.
         */
        get(index: number): $ServerData;
        get(ip: string): $ServerData;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        load(): void;
        replace(index: number, server: $ServerData): void;
        add(server: $ServerData, hidden: boolean): void;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        save(): void;
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
        unhide(ip: string): $ServerData;
        static saveSingleServer(serverData: $ServerData): void;
        getServerListFancyMenu(): $List<$ServerData>;
        constructor(minecraft: $Minecraft);
        get serverListFancyMenu(): $List<$ServerData>;
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage {
        replace(chunkIndex: number, chunk: $LevelChunk, replaceWith: $LevelChunk | null): $LevelChunk;
        replace(chunkIndex: number, chunk: $LevelChunk | null): void;
        getIndex(x: number, z: number): number;
        inRange(x: number, z: number): boolean;
        dumpChunks(filePath: string): void;
        getChunk(chunkIndex: number): $LevelChunk;
        viewCenterZ: number;
        chunks: $AtomicReferenceArray<$LevelChunk>;
        viewCenterX: number;
        constructor(chunkRadius: $ClientChunkCache, arg1: number);
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        getTabListDisplayName(): $Component;
        getLatency(): number;
        getSkin(): $PlayerSkin;
        hasVerifiableChat(): boolean;
        getTeam(): $PlayerTeam;
        getChatSession(): $RemoteChatSession;
        getGameMode(): $GameType;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(displayName: $Component_ | null): void;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get profile(): $GameProfile;
        get latency(): number;
        get skin(): $PlayerSkin;
        get team(): $PlayerTeam;
        get chatSession(): $RemoteChatSession;
        get gameMode(): $GameType;
        get messageValidator(): $SignedMessageValidator;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(packet: $ClientboundPongResponsePacket_): void;
        constructor(connection: $ClientPacketListener, delayTimer: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(userApiService: $UserApiService, user: $User, gameDirectory: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        recipes(): $SearchTree<$RecipeCollection>;
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        updateCreativeTooltips(registries: $HolderLookup$Provider, items: $List_<$ItemStack_>): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        rebuildAfterLanguageChange(): void;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { hash?: string, url?: $URL, id?: $UUID_,  } | [hash?: string, url?: $URL, id?: $UUID_, ];
    export class $ClientAdvancements implements $AccessorClientAdvancementManager, $AccessorClientAdvancements {
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setSelectedTab(advancement: $AdvancementHolder_ | null, tellServer: boolean): void;
        setListener(listener: $ClientAdvancements$Listener | null): void;
        handler$coc000$revelationary$onAdvancementSync(arg0: $ClientboundUpdateAdvancementsPacket, arg1: $CallbackInfo): void;
        handler$iad000$patchouli$onSync(arg0: $ClientboundUpdateAdvancementsPacket, arg1: $CallbackInfo): void;
        getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        progress: $Map<$AdvancementHolder, $AdvancementProgress>;
        constructor(minecraft: $Minecraft, telemetryManager: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener | null);
    }
    export class $MultiPlayerGameMode implements $MultiPlayerGameModeAccess, $AccessorMultiPlayerGameMode {
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        destroyBlock(pos: $BlockPos_): boolean;
        /**
         * Syncs the current player item with the server
         */
        tick(): void;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        getPreviousPlayerMode(): $GameType;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        handlePickItem(index: number): void;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
         */
        handleCreativeModeItemAdd(stack: $ItemStack_, slotId: number): void;
        getPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        handler$dmf000$inventoryprofilesnext$clickCreativeStack(arg0: $ItemStack_, arg1: number, arg2: $CallbackInfo): void;
        handler$hdj000$immersive_aircraft$hasRidingInventory(cir: $CallbackInfoReturnable<any>): void;
        getDestroyStage(): number;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        handler$dme000$inventoryprofilesnext$clickSlotPre(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$dme000$inventoryprofilesnext$clickSlot(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$dmf000$inventoryprofilesnext$pickItem(arg0: number, arg1: $CallbackInfo): void;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        handler$dmh000$inventoryprofilesnext$internalOnSlotClickBegin(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$dmh000$inventoryprofilesnext$postInternalOnSlotClickBegin(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$ggd000$bettercombat$cancelBlockBreaking_FixAttackCD(ci: $CallbackInfo): void;
        setDestroyProgress(arg0: number): void;
        setIsDestroying(arg0: boolean): void;
        setDestroyTicks(arg0: number): void;
        getDestroyBlockPos(): $BlockPos;
        setDestroyDelay(index: number): void;
        callSameDestroyTarget(pos: $BlockPos_): boolean;
        framedblocks$setDestroyDelay(index: number): void;
        destroyBlockPos: $BlockPos;
        destroyDelay: number;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get alwaysFlying(): boolean;
        get previousPlayerMode(): $GameType;
        get destroying(): boolean;
        get serverControlledInventory(): boolean;
        get playerMode(): $GameType;
        get destroyStage(): number;
        set destroyTicks(value: number);
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(version: number, motd: string, players: string, capacity: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener {
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        isAcceptingMessages(): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        setMinigameName(minigameName: string | null): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(connection: $Connection, minecraft: $Minecraft, serverData: $ServerData | null, parent: $Screen | null, newWorld: boolean, worldLoadDuration: $Duration_ | null, updateStatus: $Consumer_<$Component>, cookies: $TransferState_ | null);
        get acceptingMessages(): boolean;
        set minigameName(value: string | null);
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(connection: $ClientPacketListener, debugScreenOverlay: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(registryKey: $ResourceKey_<$Registry<never>>, registryEntries: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        collectGameRegistries(resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, isMemoryConnection: boolean): $RegistryAccess$Frozen;
        appendTags(tags: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        constructor();
    }
    export class $ClientLevel extends $Level implements $IClientLevel, $IXaeroMinimapClientWorld, $IWorldMapClientWorld, $ClientLevelKJS, $ISandstormClientDataProvider, $ClientLevelAccessor, $CachingClientLevel, $BiomeSeedProvider, $ChunkTrackerHolder {
        unload(chunk: $LevelChunk): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        handler$zzf000$tinymultiblocklib$destroyBlockProgress(arg0: number, arg1: $BlockPos_, arg2: number, arg3: $CallbackInfo): void;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        animateTick(posX: number, posY: number, posZ: number): void;
        entitiesForRendering(): $Iterable<$Entity>;
        getSandstormClientData(): $SandstormClientData;
        sodium$getBiomeSeed(): number;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        handleBlockChangedAck(sequence: number): void;
        isLightUpdateQueueEmpty(): boolean;
        getXaero_minimapData(): $MinimapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        setServerSimulationDistance(sequence: number): void;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        getServerSimulationDistance(): number;
        effects(): $DimensionSpecialEffects;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        addEntity(entity: $Entity): void;
        handler$iep000$perception$onPlaySound(x: number, y: number, z: number, soundEvent: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number, distanceDelay: boolean, seed: number, ci: $CallbackInfo): void;
        sound_physics_remastered$getCachedClone(): $ClonedClientLevel;
        modifyReturnValue$cgj000$nolijium$a(partialTick: number): number;
        sound_physics_remastered$setCachedClone(arg0: $ClonedClientLevel | null): void;
        modifyReturnValue$cgj000$nolijium$b(partialTick: number): number;
        handler$ifc001$perception$onPlaySound(x: number, y: number, z: number, soundEvent: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number, distanceDelay: boolean, seed: number, ci: $CallbackInfo): void;
        handler$gjg000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        getSkyDarken(partialTick: number): number;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block_, blockPos: $BlockPos$MutableBlockPos): void;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        getEntityCount(): number;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        queueLightUpdate(task: $Runnable_): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        tickNonPassenger(entity: $Entity): void;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        getStarBrightness(partialTick: number): number;
        getCloudColor(partialTick: number): $Vec3;
        xaerolib_getData(): $ClientLevelData;
        xaerolib_setData(arg0: $ClientLevelData): void;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        getSkyFlashTime(): number;
        sodium$getTracker(): $ChunkTracker;
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        callGetEntities(): $LevelEntityGetter<$Entity>;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        entityStorage: $TransientEntitySectionManager<$Entity>;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(connection: $ClientPacketListener, clientLevelData: $ClientLevel$ClientLevelData, dimension: $ResourceKey_<$Level>, dimensionType: $Holder_<$DimensionType>, viewDistance: number, serverSimulationDistance: number, profiler: $Supplier_<$ProfilerFiller>, levelRenderer: $LevelRenderer, isDebug: boolean, biomeZoomSeed: number);
        get sandstormClientData(): $SandstormClientData;
        get lightUpdateQueueEmpty(): boolean;
        set gameTime(value: number);
        get entityCount(): number;
        get skyFlashTime(): number;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDifficultyLocked(difficultyLocked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setGameTime(dayTime: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setRaining(difficultyLocked: boolean): void;
        setDayTime(dayTime: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        getDifficulty(): $Difficulty;
        setDifficulty(difficulty: $Difficulty_): void;
        getHorizonHeight(level: $LevelHeightAccessor): number;
        handler$inp000$polylib$setDifficulty(newDifficulty: $Difficulty_, ci: $CallbackInfo): void;
        getClearColorScale(): number;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get gameRules(): $GameRules;
        get thundering(): boolean;
        get hardcore(): boolean;
        get clearColorScale(): number;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        pingServer(serverData: $ServerData, serverListUpdater: $Runnable_, stateUpdater: $Runnable_): void;
        static formatPlayerCount(players: number, capacity: number): $Component;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $ANIChunkStorageProvider {
        drop(chunkPos: $ChunkPos): void;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        handler$hal000$ars_nouveau$an$onUpdateViewRadius(arg0: number, arg1: $CallbackInfo): void;
        updateViewRadius(viewDistance: number): void;
        updateViewCenter(x: number, z: number): void;
        handler$hal000$ars_nouveau$an$onDrop(arg0: $ChunkPos, arg1: $CallbackInfo): void;
        handler$hal000$ars_nouveau$an$onInit(arg0: $ClientLevel, arg1: number, arg2: $CallbackInfo): void;
        ANnewStorage(arg0: number): $ClientChunkCache$Storage;
        lightEngine: $LevelLightEngine;
        storage: $ClientChunkCache$Storage;
        constructor(level: $ClientLevel, viewDistance: number);
    }
    export class $KnownPacksManager {
        createResourceManager(): $CloseableResourceManager;
        trySelectingPacks(packs: $List_<$KnownPack_>): $List<$KnownPack>;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number,  } | [packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number, ];
    export class $CommonListenerCookie extends $Record {
        serverData(): $ServerData;
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        connectionType(): $ConnectionType;
        serverLinks(): $ServerLinks;
        serverBrand(): string;
        postDisconnectScreen(): $Screen;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        customReportDetails(): $Map<string, string>;
        chatState(): $ChatComponent$State;
        receivedRegistries(): $RegistryAccess$Frozen;
        localGameProfile(): $GameProfile;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { serverBrand?: string, connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>,  } | [serverBrand?: string, connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        send(packet: $Packet<never>): void;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        serverBrand(): string;
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        handlePing(packet: $ClientboundPingPacket): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        flow(): $PacketFlow;
        /**
         * {@inheritDoc}
         */
        disconnect(reason: $Component_): void;
        send(payload: $CustomPacketPayload_): void;
        /**
         * {@inheritDoc}
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(crashReport: $CrashReport): void;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        connection: $Connection;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getCustomTabSugggestions(): $Collection<string>;
        hasPermission(level: number): boolean;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get customTabSugggestions(): $Collection<string>;
        get allTeams(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get availableSounds(): $Stream<$ResourceLocation>;
    }
    export class $ChunkBatchSizeCalculator {
        onBatchStart(): void;
        getDesiredChunksPerTick(): number;
        onBatchFinished(batchSize: number): void;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
