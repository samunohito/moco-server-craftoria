import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $ProtoChunkExtension } from "@package/com/ishland/c2me/rewrites/chunksystem/common/async_chunkio";
import { $MapCodec_, $DataResult, $Codec, $MapCodec, $Codec_ } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ChunkGeneratorAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $RandomTickScheduler as $RandomTickScheduler$1 } from "@package/dev/corgitaco/ohthetreesyoullgrow/world/level/chunk";
import { $WeakReference } from "@package/java/lang/ref";
import { $BitStorage, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $AttachmentType, $AttachmentType_, $IAttachmentHolder, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ExtendedPalettedContainer } from "@package/org/embeddedt/modernfix/chunk";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $StructureSet_, $StructureSet, $StructureStart, $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeManager$NoiseBiomeSource, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $WorldChunkAccess } from "@package/net/puffish/skillsmod/access";
import { $ChunkGeneratorStructureStateAccessor as $ChunkGeneratorStructureStateAccessor$1 } from "@package/com/yungnickyoung/minecraft/betterdeserttemples/mixin/accessor";
import { $AntiFarmingPerChunk$State } from "@package/net/puffish/skillsmod/experience/source/builtin/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ReadableContainerExtended } from "@package/org/embeddedt/embeddium/impl/world";
import { $RandomTickScheduler } from "@package/corgitaco/corgilib/world/level";
import { $ChunkGeneratorStructureStateAccessor } from "@package/com/yungnickyoung/minecraft/betterjungletemples/mixin/accessor";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $Set_, $Map, $Map$Entry, $Set, $List, $EnumSet, $Map_, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $Function_, $BiPredicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $WorldGenRegion, $FullChunkStatus, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $SectionPos, $IdMap, $Direction, $HolderLookup, $Direction8 } from "@package/net/minecraft/core";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $IChunkGenerator, $IWorldChunk, $IChunkSection, $IUpgradeData } from "@package/com/ishland/c2me/base/mixin/access";
import { $Heightmap$Types_, $BelowZeroRetrogen, $RandomState, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap } from "@package/net/minecraft/world/level/levelgen";
import { $LevelAccessor, $LightLayer_, $LevelReader, $ChunkPos, $BlockGetter, $ClipContext, $NoiseColumn, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager, $Level_ } from "@package/net/minecraft/world/level";
import { $SerializableTickContainer_, $SerializableTickContainer, $TickContainerAccess, $ProtoChunkTicks, $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $GeneratorHeightGetter } from "@package/net/potionstudios/biomeswevegone/util";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        factory(): $Palette$Factory;
        bits(): number;
        createData(registry: $IdMap<T>, paletteResize: $PaletteResize_<T>, size: number): $PalettedContainer$Data<T>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Configuration}.
     */
    export type $PalettedContainer$Configuration_<T> = { bits?: number, factory?: $Palette$Factory_,  } | [bits?: number, factory?: $Palette$Factory_, ];
    /**
     * A representation of a 16x16x16 cube of nibbles (half-bytes).
     */
    export class $DataLayer {
        /**
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         * @return The value of this data layer at the provided position.
         */
        get(x: number, y: number, z: number): number;
        isEmpty(): boolean;
        fill(size: number): void;
        /**
         * Sets the value of this data layer at the provided position.
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         */
        set(x: number, y: number, z: number, value: number): void;
        copy(): $DataLayer;
        getData(): number[];
        layerToString(unused: number): string;
        isDefinitelyHomogenous(): boolean;
        isDefinitelyFilledWith(value: number): boolean;
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor(data: number[]);
        constructor(size: number);
        constructor();
        get empty(): boolean;
        get data(): number[];
        get definitelyHomogenous(): boolean;
    }
    export class $ChunkGenerator implements $ChunkGeneratorAccessor, $IChunkGenerator {
        validate(): void;
        getMinY(): number;
        getSeaLevel(): number;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(biome: $Holder_<$Biome>): $BiomeGenerationSettings;
        getNearestGeneratedStructure(structureHoldersSet: $Set_<$Holder_<$Structure>>, level: $ServerLevel, structureManager: $StructureManager, pos: $BlockPos_, skipKnownStructures: boolean, placement: $ConcentricRingsStructurePlacement): $Pair<$BlockPos, $Holder<$Structure>>;
        buildSurface(level: $WorldGenRegion, structureManager: $StructureManager, random: $RandomState, chunk: $ChunkAccess): void;
        findNearestMapStructure(level: $ServerLevel, structure: $HolderSet_<$Structure>, pos: $BlockPos_, searchRadius: number, skipKnownStructures: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        createState(structureSetLookup: $HolderLookup<$StructureSet_>, randomState: $RandomState, seed: number): $ChunkGeneratorStructureState;
        getBaseColumn(x: number, z: number, height: $LevelHeightAccessor, random: $RandomState): $NoiseColumn;
        createBiomes(randomState: $RandomState, blender: $Blender, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        fillFromNoise(blender: $Blender, randomState: $RandomState, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        applyCarvers(level: $WorldGenRegion, seed: number, arg2: $RandomState, random: $BiomeManager, biomeManager: $StructureManager, structureManager: $ChunkAccess, chunk: $GenerationStep$Carving_): void;
        addDebugScreenInfo(info: $List_<string>, random: $RandomState, pos: $BlockPos_): void;
        spawnOriginalMobs(level: $WorldGenRegion): void;
        createStructures(registryAccess: $RegistryAccess, structureState: $ChunkGeneratorStructureState, structureManager: $StructureManager, chunk: $ChunkAccess, structureTemplateManager: $StructureTemplateManager): void;
        createReferences(level: $WorldGenLevel, structureManager: $StructureManager, chunk: $ChunkAccess): void;
        getSpawnHeight(level: $LevelHeightAccessor): number;
        getFirstFreeHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        handler$cgc000$terrablender$validate(arg0: $CallbackInfo): void;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        static getStructureGeneratingAt(structureHoldersSet: $Set_<$Holder_<$Structure>>, level: $LevelReader, structureManager: $StructureManager, skipKnownStructures: boolean, placement: $StructurePlacement, chunkPos: $ChunkPos): $Pair<$BlockPos, $Holder<$Structure>>;
        applyBiomeDecoration(level: $WorldGenLevel, chunk: $ChunkAccess, structureManager: $StructureManager): void;
        refreshFeaturesPerStep(): void;
        getGenDepth(): number;
        getMobsAt(biome: $Holder_<$Biome>, structureManager: $StructureManager, category: $MobCategory_, pos: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getFirstOccupiedHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        getBaseHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        getGetter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        getBiomeSource(): $BiomeSource;
        setBiomeSource(biomeSource: $BiomeSource): void;
        setFeaturesPerStep(supplier: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $Codec<$ChunkGenerator>;
        constructor(biomeSource: $BiomeSource);
        constructor(biomeSource: $BiomeSource, generationSettingsGetter: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        get minY(): number;
        get seaLevel(): number;
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        get genDepth(): number;
        get getter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, packedData: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(pos: number): $BlockState;
        setBlock(pos: number, state: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(x: number, y: number, z: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $ChunkGeneratorStructureState implements $ChunkGeneratorStructureStateAccessor, $ChunkGeneratorStructureStateAccessor$1 {
        getLevelSeed(): number;
        randomState(): $RandomState;
        static createForNormal(randomState: $RandomState, seed: number, arg2: $BiomeSource, biomeSource: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        static createForFlat(randomState: $RandomState, levelSeed: number, arg2: $BiomeSource, biomeSource: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        ensureStructuresGenerated(): void;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        getPlacementsForStructure(structure: $Holder_<$Structure>): $List<$StructurePlacement>;
        getRingPositionsFor(placement: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        hasStructureChunkInRange(structureSet: $Holder_<$StructureSet>, x: number, z: number, range: number): boolean;
        getBiomeSource(): $BiomeSource;
        get levelSeed(): number;
        get biomeSource(): $BiomeSource;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        getStartForStructure(structure: $Structure_): $StructureStart;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        storage(): ($LongStream) | undefined;
        paletteEntries(): $List<T>;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$PackedData}.
     */
    export type $PalettedContainerRO$PackedData_<T> = { storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>,  } | [storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>, ];
    /**
     * During world generation, adjacent chunks may be fully generated (and thus be level chunks), but are often needed in proto chunk form. This wraps a completely generated chunk as a proto chunk.
     */
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        static NO_FILLED_SECTION: number;
        constructor(wrapped: $LevelChunk, allowWrites: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        size(): number;
        getIndex(x: number, y: number, z: number): number;
        getConfiguration<A>(registry: $IdMap<A>, size: number): $PalettedContainer$Configuration<A>;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        blocks(): $SerializableTickContainer<$Block>;
        fluids(): $SerializableTickContainer<$Fluid>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccess$TicksToSave}.
     */
    export type $ChunkAccess$TicksToSave_ = { blocks?: $SerializableTickContainer_<$Block>, fluids?: $SerializableTickContainer_<$Fluid>,  } | [blocks?: $SerializableTickContainer_<$Block>, fluids?: $SerializableTickContainer_<$Fluid>, ];
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity {
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $Trackable, $RandomTickScheduler, $RandomTickScheduler$1, $GeneratorHeightGetter {
        getData<T>(arg0: $AttachmentType_<T>): T;
        getHeight(type: $Heightmap$Types_, x: number, z: number): number;
        getHeight(generator: $ChunkGenerator, heightmapType: $Heightmap$Types_, worldX: number, worldZ: number, randomState: $RandomState, sampleRaw: boolean): number;
        getHeight(): number;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getLevel(): $Level;
        setBlockState(pos: $BlockPos_, state: $BlockState_, isMoving: boolean): $BlockState;
        setBlockEntity(blockEntity: $BlockEntity): void;
        getMinBuildHeight(): number;
        removeBlockEntity(pos: $BlockPos_): void;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isLightCorrect(): boolean;
        getPos(): $ChunkPos;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isUnsaved(): boolean;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(predicate: $Predicate_<$BlockState>, output: $BiConsumer_<$BlockPos, $BlockState>): void;
        markPosForPostprocessing(pos: $BlockPos_): void;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        getOrCreateHeightmapUnprimed(type: $Heightmap$Types_): $Heightmap;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData(type: $AttachmentType_<never>): boolean;
        getSections(): $LevelChunkSection[];
        removeData<T>(arg0: $AttachmentType_<T>): T;
        fillBiomesFromNoise(resolver: $BiomeResolver_, sampler: $Climate$Sampler_): void;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isOldNoiseGeneration(): boolean;
        addPackedPostProcess(packedPosition: number, index: number): void;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        getBlockEntityNbtForSaving(pos: $BlockPos_, registries: $HolderLookup$Provider): $CompoundTag;
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        getOrCreateNoiseChunk(noiseChunkCreator: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        getHighestGeneratedStatus(): $ChunkStatus;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAnyStructureReferences(): boolean;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        incrementInhabitedTime(amount: number): void;
        initializeLightSources(): void;
        getStartForStructure(structure: $Structure_): $StructureStart;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        static getOrCreateOffsetList(packedPositions: $ShortList[], index: number): $ShortList;
        getListenerRegistry(sectionY: number): $GameEventListenerRegistry;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        setUnsaved(lightCorrect: boolean): void;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        getBlockTicks(): $TickContainerAccess<$Block>;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAttachments(): boolean;
        getAllStarts(): $Map<$Structure, $StructureStart>;
        getSection(index: number): $LevelChunkSection;
        getHighestFilledSectionIndex(): number;
        getScheduledRandomTicks(): $List<any>;
        addEntity(entity: $Entity): void;
        atl$getBaseClass(): $Class<any>;
        getInhabitedTime(): number;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isUpgrading(): boolean;
        getPersistedStatus(): $ChunkStatus;
        getBlendingData(): $BlendingData;
        isSectionEmpty(y: number): boolean;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        scheduleRandomTick(pos: $BlockPos_): void;
        /**
         * @deprecated
         */
        carverBiome(caverBiomeSettingsSupplier: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        setHeightmap(type: $Heightmap$Types_, data: number[]): void;
        setLightCorrect(lightCorrect: boolean): void;
        setBlendingData(blendingData: $BlendingData): void;
        setInhabitedTime(amount: number): void;
        isYSpaceEmpty(startY: number, endY: number): boolean;
        getAllReferences(): $Map<any, any>;
        setBlockEntityNbt(tag: $CompoundTag_): void;
        setAllStarts(structureReferencesMap: $Map_<$Structure_, $StructureStart>): void;
        hasPrimedHeightmap(type: $Heightmap$Types_): boolean;
        getBlockEntityNbt(pos: $BlockPos_): $CompoundTag;
        getPostProcessing(): $ShortList[];
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        getUpgradeData(): $UpgradeData;
        getLightEmission(pos: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData<T>(type: $Supplier_<$AttachmentType<T>>): boolean;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $AttachmentType_<T>): (T) | undefined;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $Supplier_<$AttachmentType<never>>): void;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $AttachmentType_<never>): void;
        wrap(): $WeakReference<$Trackable>;
        startTracking(): void;
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
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, inhabitedTime: number, arg5: $LevelChunkSection[] | null, sections: $BlendingData | null);
        get level(): $Level;
        get minBuildHeight(): number;
        get pos(): $ChunkPos;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get sections(): $LevelChunkSection[];
        get oldNoiseGeneration(): boolean;
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get highestGeneratedStatus(): $ChunkStatus;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get highestSectionPosition(): number;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get blockTicks(): $TickContainerAccess<$Block>;
        get highestFilledSectionIndex(): number;
        get scheduledRandomTicks(): $List<any>;
        get heightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        get upgrading(): boolean;
        get persistedStatus(): $ChunkStatus;
        get skyLightSources(): $ChunkSkyLightSources;
        get postProcessing(): $ShortList[];
        get upgradeData(): $UpgradeData;
        get maxLightLevel(): number;
        get maxSection(): number;
        get maxBuildHeight(): number;
        get minSection(): number;
        get sectionsCount(): number;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity {
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        copyFrom(palette: $Palette<T>, bitStorage: $BitStorage): void;
        storage(): $BitStorage;
        palette(): $Palette<T>;
        getSerializedSize(): number;
        get serializedSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Data}.
     */
    export type $PalettedContainer$Data_<T> = { configuration?: $PalettedContainer$Configuration_<any>, storage?: $BitStorage, palette?: $Palette<any>,  } | [configuration?: $PalettedContainer$Configuration_<any>, storage?: $BitStorage, palette?: $Palette<any>, ];
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $ExtendedPalettedContainer<any>, $ReadableContainerExtended<any> {
        get(x: number, y: number, z: number): T;
        /**
         * Counts the number of instances of each state in the container.
         * The provided consumer is invoked for each state with the number of instances.
         */
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        set(x: number, y: number, z: number, state: T): void;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        getAndSet(x: number, y: number, z: number, state: T): T;
        release(): void;
        acquire(): void;
        getAll(consumer: $Consumer_<T>): void;
        pack(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        maybeHas(predicate: $Predicate_<T>): boolean;
        static codecRW<T>(registry: $IdMap<T>, codec: $Codec_<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainer<T>>;
        mfix$getPalette(): $Palette<any>;
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
        sodium$copy(): $PalettedContainerRO<any>;
        getSerializedSize(): number;
        recreate(): $PalettedContainer<T>;
        getAndSetUnchecked(x: number, y: number, z: number, state: T): T;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: $Object[]): void;
        static codecRO<T>(registry: $IdMap<T>, codec: $Codec_<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainerRO<T>>;
        data: $PalettedContainer$Data<T>;
        strategy: $PalettedContainer$Strategy;
        constructor(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, values: $List_<T>);
        constructor(registry: $IdMap<T>, palette: T, strategy: $PalettedContainer$Strategy);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(state: T, count: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData implements $IUpgradeData {
        isEmpty(): boolean;
        write(): $CompoundTag;
        upgrade(chunk: $LevelChunk): void;
        getSidesToUpgrade(): $EnumSet<$Direction8>;
        getCenterIndicesToUpgrade(): number[][];
        static EMPTY: $UpgradeData;
        constructor(tag: $CompoundTag_, level: $LevelHeightAccessor);
        get empty(): boolean;
        get sidesToUpgrade(): $EnumSet<$Direction8>;
        get centerIndicesToUpgrade(): number[][];
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        get(x: number, y: number, z: number): T;
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        write(buffer: $FriendlyByteBuf): void;
        getAll(consumer: $Consumer_<T>): void;
        pack(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        recreate(): $PalettedContainer<T>;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(chunk: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(level: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, value: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        constructor(registry: $IdMap<T>, resizeHandler: $PaletteResize_<T>, value: $List_<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(index: number);
    }
    export class $LevelChunkSection implements $IChunkSection {
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        release(): void;
        acquire(): void;
        getStates(): $PalettedContainer<$BlockState>;
        setBlockState(x: number, y: number, z: number, state: $BlockState_, useLocks: boolean): $BlockState;
        setBlockState(x: number, y: number, z: number, state: $BlockState_): $BlockState;
        readBiomes(buffer: $FriendlyByteBuf): void;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        hasOnlyAir(): boolean;
        /**
         * @return `true` if this section has any states matching the given predicate. As the internal representation uses a `Palette`, this is more efficient than looping through every position in the section, or indeed the chunk.
         */
        maybeHas(predicate: $Predicate_<$BlockState>): boolean;
        fillBiomesFromNoise(biomeResolver: $BiomeResolver_, climateSampler: $Climate$Sampler_, x: number, y: number, z: number): void;
        getBlockState(x: number, y: number, z: number): $BlockState;
        getFluidState(x: number, y: number, z: number): $FluidState;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTicking(): boolean;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        getSerializedSize(): number;
        recalcBlockCounts(): void;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingBlocks(): boolean;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingFluids(): boolean;
        getBiomeContainer(): $PalettedContainerRO<$Holder<$Biome>>;
        getBlockStateContainer(): $PalettedContainer<$BlockState>;
        static SECTION_WIDTH: number;
        tickingBlockCount: number;
        nonEmptyBlockCount: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        tickingFluidCount: number;
        states: $PalettedContainer<$BlockState>;
        constructor(states: $PalettedContainer<$BlockState_>, biomes: $PalettedContainerRO<$Holder_<$Biome>>);
        constructor(biomeRegistry: $Registry<$Biome_>);
        get randomlyTicking(): boolean;
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get serializedSize(): number;
        get randomlyTickingBlocks(): boolean;
        get randomlyTickingFluids(): boolean;
        get biomeContainer(): $PalettedContainerRO<$Holder<$Biome>>;
        get blockStateContainer(): $PalettedContainer<$BlockState>;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder, $WorldChunkAccess, $RandomTickScheduler, $RandomTickScheduler$1, $IWorldChunk {
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isEmpty(): boolean;
        unregisterTickContainerFromLevel(level: $ServerLevel): void;
        getFullStatus(): $FullChunkStatus;
        setLoaded(loaded: boolean): void;
        registerTickContainerInLevel(level: $ServerLevel): void;
        postProcessGeneration(): void;
        replaceWithPacketData(buffer: $FriendlyByteBuf, tag: $CompoundTag_, outputTagConsumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        getAntiFarmingPerChunkState(): $AntiFarmingPerChunk$State;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        getBlockEntity(pos: $BlockPos_, creationType: $LevelChunk$EntityCreationType_): $BlockEntity;
        getFluidState(x: number, y: number, z: number): $FluidState;
        clearAllBlockEntities(): void;
        addAndRegisterBlockEntity(blockEntity: $BlockEntity): void;
        unpackTicks(pos: number): void;
        runPostLoad(): void;
        replaceBiomes(buffer: $FriendlyByteBuf): void;
        setFullStatus(fullStatus: $Supplier_<$FullChunkStatus>): void;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isLoadedToWorld(): boolean;
        xaero_wm_chunkClean: boolean;
        xaero_chunkClean: boolean;
        static NO_FILLED_SECTION: number;
        constructor(level: $ServerLevel, chunk: $ProtoChunk, postLoad: $LevelChunk$PostLoadProcessor_ | null);
        constructor(level: $Level_, pos: $ChunkPos, data: $UpgradeData, blockTicks: $LevelChunkTicks<$Block_>, fluidTicks: $LevelChunkTicks<$Fluid_>, inhabitedTime: number, arg6: $LevelChunkSection[] | null, sections: $LevelChunk$PostLoadProcessor_ | null, postLoad: $BlendingData | null);
        constructor(level: $Level_, pos: $ChunkPos);
        get empty(): boolean;
        set loaded(value: boolean);
        get antiFarmingPerChunkState(): $AntiFarmingPerChunk$State;
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
        get loadedToWorld(): boolean;
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        close(): void;
        setSpawnSettings(hostile: boolean, peaceful: boolean): void;
        getLightEngine(): $LevelLightEngine;
        tick(hasTimeLeft: $BooleanSupplier_, tickChunks: boolean): void;
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        /**
         * @return A human-readable string representing data about this chunk source.
         */
        gatherStats(): string;
        getChunkNow(chunkX: number, chunkZ: number): $LevelChunk;
        getChunk(chunkX: number, chunkZ: number, load: boolean): $LevelChunk;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        /**
         * @return `true` if a chunk is loaded at the provided position, without forcing a chunk load.
         */
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getLoadedChunksCount(): number;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        constructor();
        get lightEngine(): $LevelLightEngine;
        get loadedChunksCount(): number;
    }
    export class $ProtoChunk extends $ChunkAccess implements $ProtoChunkExtension {
        getOrCreateCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        getEntities(): $List<$CompoundTag>;
        static unpackOffsetCoordinates(packedPos: number, yOffset: number, chunkPos: $ChunkPos): $BlockPos;
        getCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        addEntity(tag: $CompoundTag_): void;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        static packOffsetCoordinates(pos: $BlockPos_): number;
        setInitialMainThreadComputeFuture(future: $CompletableFuture<any>): void;
        getInitialMainThreadComputeFuture(): $CompletableFuture<any>;
        setBlendingInfo(pos: $ChunkPos, bitSets: $List_<any>): void;
        setPersistedStatus(status: $ChunkStatus_): void;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        getNeedBlending(): boolean;
        setCarvingMask(step: $GenerationStep$Carving_, carvingMask: $CarvingMask): void;
        setLightEngine(lightEngine: $LevelLightEngine): void;
        setBelowZeroRetrogen(belowZeroRetrogen: $BelowZeroRetrogen | null): void;
        setBlendingComputeFuture(future: $CompletableFuture<any>): void;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, sections: $LevelChunkSection[] | null, blockTicks: $ProtoChunkTicks<$Block_>, liquidTicks: $ProtoChunkTicks<$Fluid_>, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        get entities(): $List<$CompoundTag>;
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
        set persistedStatus(value: $ChunkStatus_);
        get needBlending(): boolean;
        set lightEngine(value: $LevelLightEngine);
        set belowZeroRetrogen(value: $BelowZeroRetrogen | null);
        set blendingComputeFuture(value: $CompletableFuture<any>);
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        getEntries(): $List<T>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>, values: $List_<T>);
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>);
        get size(): number;
        get entries(): $List<T>;
        get serializedSize(): number;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        updateShape(state: $BlockState_, direction: $Direction_, offsetState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, offsetPos: $BlockPos_): $BlockState;
        processChunk(level: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        close(): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        getSection(pos: $BlockPos_): $LevelChunkSection;
        constructor(level: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(registry: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        getLevel(): $BlockGetter;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        constructor(registry: $IdMap<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        xaero_wm_chunkClean: boolean;
        xaero_chunkClean: boolean;
        static NO_FILLED_SECTION: number;
        constructor(level: $Level_, pos: $ChunkPos, biome: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        get(x: number, y: number, z: number): boolean;
        toArray(): number[];
        stream(pos: $ChunkPos): $Stream<$BlockPos>;
        set(x: number, y: number, z: number): void;
        setAdditionalMask(additionalMask: $CarvingMask$Mask_): void;
        constructor(mask: number, minY: number);
        constructor(mask: number[], minY: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
