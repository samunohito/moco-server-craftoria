import { $IPrimaryLevelData, $ExtraFightData } from "@package/com/yungnickyoung/minecraft/betterendisland/world";
import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Map, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $AccessorMixinDimensionDataStorage } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        lockFile(): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_,  } | [worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        worldGenSettingsLifecycle(): $Lifecycle;
        getCustomBossEvents(): $CompoundTag;
        setDifficultyLocked(locked: boolean): void;
        getStorageVersionName(storageVersionId: number): string;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(type: $GameType_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        getLoadedPlayerTag(): $CompoundTag;
        setDifficulty(difficulty: $Difficulty_): void;
        setModdedInfo(name: string, isModded: boolean): void;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        overworldData(): $ServerLevelData;
        get version(): number;
        get levelName(): string;
        get gameRules(): $GameRules;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get hardcore(): boolean;
        get flatWorld(): boolean;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        getSeries(): string;
        isSideSeries(): boolean;
        isCompatible(dataVersion: $DataVersion): boolean;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get series(): string;
        get sideSeries(): boolean;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
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
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        setClearWeatherTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimeFraction(): number;
        getDayTimePerTick(): number;
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get difficulty(): $Difficulty;
        get allowCommands(): boolean;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
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
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        getDifficulty(): $Difficulty;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get gameRules(): $GameRules;
        get thundering(): boolean;
        get hardcore(): boolean;
        get gameTime(): number;
        get dayTime(): number;
        get difficultyLocked(): boolean;
        get difficulty(): $Difficulty;
    }
    export class $DimensionDataStorage implements $AccessorMixinDimensionDataStorage {
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        getCache(): $Map<string, $SavedData>;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
        get cache(): $Map<string, $SavedData>;
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        isSevere(): boolean;
        getTranslationKey(): string;
        shouldBackup(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get severe(): boolean;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        getFileModificationTime(useFallback: boolean): $Instant;
        getLevelId(): string;
        readAdditionalLevelSaveData(arg0: boolean): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        getIconFile(): ($Path) | undefined;
        getLevelPath(folderName: $LevelResource): $Path;
        safeClose(): void;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        deleteLevel(): void;
        hasWorldData(): boolean;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        createPlayerStorage(): $PlayerDataStorage;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        makeWorldBackup(): number;
        estimateDiskSpace(): number;
        renameLevel(saveName: string): void;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        renameAndDropPlayer(saveName: string): void;
        checkForLowDiskSpace(): boolean;
        restoreLevelDataFromOld(): boolean;
        handler$hee001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$ghl000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        getDataTag(): $Dynamic<never>;
        get levelId(): string;
        get iconFile(): ($Path) | undefined;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get dataTag(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        getPlayerDir(): $File;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        setClearWeatherTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimeFraction(): number;
        getDayTimePerTick(): number;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        get levelName(): string;
        set gameTime(value: number);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        set dayTime(value: number);
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        minecraftVersionName(): string;
        minecraftVersion(): $DataVersion;
        lastPlayed(): number;
        levelDataVersion(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        getWorldDirValidator(): $DirectoryValidator;
        isNewLevelIdAcceptable(saveName: string): boolean;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        getLevelPath(saveName: string): $Path;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        levelExists(saveName: string): boolean;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get worldDirValidator(): $DirectoryValidator;
        get baseDir(): $Path;
        get backupPath(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $IPrimaryLevelData {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
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
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        worldGenSettingsLifecycle(): $Lifecycle;
        getCustomBossEvents(): $CompoundTag;
        setDifficultyLocked(locked: boolean): void;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setThunderTime(time: number): void;
        setThundering(locked: boolean): void;
        setRainTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        setRaining(locked: boolean): void;
        setClearWeatherTime(time: number): void;
        getExtraEndDragonFightData(): $ExtraFightData;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        setExtraEndDragonFightData(arg0: $ExtraFightData): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimeFraction(): number;
        getDayTimePerTick(): number;
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        getLoadedPlayerTag(): $CompoundTag;
        setDifficulty(difficulty: $Difficulty_): void;
        setModdedInfo(name: string, isModded: boolean): void;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        overworldData(): $ServerLevelData;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        handler$iof000$yeetusexperimentus$hasConfirmedExperimentalWarning(cir: $CallbackInfoReturnable<any>): void;
        getStorageVersionName(storageVersionId: number): string;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get gameRules(): $GameRules;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get hardcore(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        getIcon(): $Path;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        isExperimental(): boolean;
        getInfo(): $Component;
        requiresManualConversion(): boolean;
        getWorldVersionName(): $MutableComponent;
        primaryActionMessage(): $Component;
        primaryActionActive(): boolean;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        getSettings(): $LevelSettings;
        canDelete(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        isDisabled(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        isCompatible(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        isDowngrade(): boolean;
        canRecreate(): boolean;
        getLastPlayed(): number;
        hasCommands(): boolean;
        shouldBackup(): boolean;
        levelVersion(): $LevelVersion;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get locked(): boolean;
        get icon(): $Path;
        get levelName(): string;
        get experimental(): boolean;
        get info(): $Component;
        get worldVersionName(): $MutableComponent;
        get hardcore(): boolean;
        get levelId(): string;
        get settings(): $LevelSettings;
        get disabled(): boolean;
        get gameMode(): $GameType;
        get compatible(): boolean;
        get downgrade(): boolean;
        get lastPlayed(): number;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
