import { $Writer } from "@package/java/io";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $LongSortedSet, $LongSet, $Long2ObjectFunction_, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $UUID_, $List_ } from "@package/java/util";
import { $ClassInstanceMultiMap, $AbortableIterationConsumer_, $AbortableIterationConsumer$Continuation } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $FullChunkStatus_, $FullChunkStatus } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream, $LongStream } from "@package/java/util/stream";
import { $Enum, $Iterable, $AutoCloseable, $Class } from "@package/java/lang";
import { $ITryFlushable } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $IServerEntityManager } from "@package/com/ishland/c2me/base/mixin/access";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/entity" {
    export class $EntityTickList {
        remove(entity: $Entity): void;
        add(entity: $Entity): void;
        contains(entity: $Entity): boolean;
        forEach(entity: $Consumer_<$Entity>): void;
        constructor();
    }
    export class $Visibility extends $Enum<$Visibility> {
        static values(): $Visibility[];
        static valueOf(arg0: string): $Visibility;
        isAccessible(): boolean;
        isTicking(): boolean;
        static fromFullChunkStatus(fullChunkStatus: $FullChunkStatus_): $Visibility;
        static TICKING: $Visibility;
        static TRACKED: $Visibility;
        static HIDDEN: $Visibility;
        get accessible(): boolean;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Visibility}.
     */
    export type $Visibility_ = "hidden" | "tracked" | "ticking";
    export class $EntityPersistentStorage<T> {
    }
    export interface $EntityPersistentStorage<T> extends $AutoCloseable {
        flush(synchronize: boolean): void;
        close(): void;
        storeEntities(entities: $ChunkEntities<T>): void;
        loadEntities(pos: $ChunkPos): $CompletableFuture<$ChunkEntities<T>>;
    }
    export class $ChunkStatusUpdateListener {
    }
    export interface $ChunkStatusUpdateListener {
        onChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusUpdateListener}.
     */
    export type $ChunkStatusUpdateListener_ = ((arg0: $ChunkPos, arg1: $FullChunkStatus) => void);
    export class $EntitySection<T extends $EntityAccess> {
        remove(entity: T): boolean;
        size(): number;
        isEmpty(): boolean;
        add(entity: T): void;
        getStatus(): $Visibility;
        getEntities(bounds: $AABB_, consumer: $AbortableIterationConsumer_<T>): $AbortableIterationConsumer$Continuation;
        getEntities(): $Stream<T>;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): $AbortableIterationConsumer$Continuation;
        updateChunkStatus(chunkStatus: $Visibility_): $Visibility;
        storage: $ClassInstanceMultiMap<T>;
        constructor(entityClazz: $Class<T>, chunkStatus: $Visibility_);
        get empty(): boolean;
        get status(): $Visibility;
    }
    export class $PersistentEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $EntityTypeTest<B, T extends B> {
        static forClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
        static forExactClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
    }
    export interface $EntityTypeTest<B, T extends B> {
        tryCast(entity: B): T;
        getBaseClass(): $Class<B>;
        get baseClass(): $Class<B>;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getId(): number;
        getUUID(): $UUID;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        shouldBeSaved(): boolean;
        isAlwaysTicking(): boolean;
        blockPosition(): $BlockPos;
        setRemoved(removalReason: $Entity$RemovalReason_): void;
        getBoundingBox(): $AABB;
        getPassengersAndSelf(): $Stream<$EntityAccess>;
        getSelfAndPassengers(): $Stream<$EntityAccess>;
        get id(): number;
        get UUID(): $UUID;
        set levelCallback(value: $EntityInLevelCallback);
        get alwaysTicking(): boolean;
        set removed(value: $Entity$RemovalReason_);
        get boundingBox(): $AABB;
        get passengersAndSelf(): $Stream<$EntityAccess>;
        get selfAndPassengers(): $Stream<$EntityAccess>;
    }
    export class $EntityLookup<T extends $EntityAccess> {
        remove(entity: T): void;
        add(entity: T): void;
        count(): number;
        getEntity(uuid: $UUID_): T;
        getEntity(id: number): T;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        getAllEntities(): $Iterable<T>;
        constructor();
        get allEntities(): $Iterable<T>;
    }
    export class $LevelEntityGetter<T extends $EntityAccess> {
    }
    export interface $LevelEntityGetter<T extends $EntityAccess> {
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get(uuid: $UUID_): T;
        get(id: number): T;
        getAll(): $Iterable<T>;
        get all(): $Iterable<T>;
    }
    export class $LevelCallback<T> {
    }
    export interface $LevelCallback<T> {
        onTickingEnd(entity: T): void;
        onTrackingEnd(entity: T): void;
        onSectionChange(entity: T): void;
        onTickingStart(entity: T): void;
        onTrackingStart(entity: T): void;
        onDestroyed(entity: T): void;
        onCreated(entity: T): void;
    }
    export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable, $ITryFlushable, $IServerEntityManager {
        count(): number;
        close(): void;
        isLoaded(uuid: $UUID_): boolean;
        tick(): void;
        updateChunkStatus(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        updateChunkStatus(pos: $ChunkPos, visibility: $Visibility_): void;
        addNewEntity(entity: T): boolean;
        areEntitiesLoaded(chunkPos: number): boolean;
        canPositionTick(pos: $BlockPos_): boolean;
        canPositionTick(chunkPos: $ChunkPos): boolean;
        dumpSections(writer: $Writer): void;
        c2me$tryFlush(): boolean;
        addLegacyChunkEntities(entities: $Stream<T>): void;
        addNewEntityWithoutEvent(entity: T): boolean;
        addWorldGenChunkEntities(entities: $Stream<T>): void;
        gatherStats(): string;
        autoSave(): void;
        saveAll(): void;
        getEntityGetter(): $LevelEntityGetter<T>;
        invokeGetLoadedChunks(): $LongSet;
        visibleEntityStorage: $EntityLookup<T>;
        chunkVisibility: $Long2ObjectMap<$Visibility>;
        sectionStorage: $EntitySectionStorage<T>;
        permanentStorage: $EntityPersistentStorage<T>;
        constructor(entityClass: $Class<T>, callbacks: $LevelCallback<T>, permanentStorage: $EntityPersistentStorage<T>);
        get entityGetter(): $LevelEntityGetter<T>;
    }
    export class $EntityInLevelCallback {
        static NULL: $EntityInLevelCallback;
    }
    export interface $EntityInLevelCallback {
        onMove(): void;
        onRemove(reason: $Entity$RemovalReason_): void;
    }
    export class $PersistentEntitySectionManager$ChunkLoadStatus extends $Enum<$PersistentEntitySectionManager$ChunkLoadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManager$ChunkLoadStatus}.
     */
    export type $PersistentEntitySectionManager$ChunkLoadStatus_ = "fresh" | "pending" | "loaded";
    export class $EntitySectionStorage<T extends $EntityAccess> {
        remove(sectionId: number): void;
        count(): number;
        getEntities(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<T>): void;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        getSection(sectionPos: number): $EntitySection<T>;
        getExistingSectionsInChunk(pos: number): $Stream<$EntitySection<T>>;
        getAllChunksWithExistingSections(): $LongSet;
        getExistingSectionPositionsInChunk(pos: number): $LongStream;
        getOrCreateSection(sectionPos: number): $EntitySection<T>;
        forEachAccessibleNonEmptySection(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<$EntitySection<T>>): void;
        sectionIds: $LongSortedSet;
        constructor(entityClass: $Class<T>, initialSectionVisibility: $Long2ObjectFunction_<$Visibility>);
        get allChunksWithExistingSections(): $LongSet;
    }
    export class $TransientEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $TransientEntitySectionManager<T extends $EntityAccess> {
        count(): number;
        addEntity(entity: T): void;
        gatherStats(): string;
        startTicking(pos: $ChunkPos): void;
        stopTicking(pos: $ChunkPos): void;
        getEntityGetter(): $LevelEntityGetter<T>;
        entityStorage: $EntityLookup<T>;
        sectionStorage: $EntitySectionStorage<T>;
        constructor(clazz: $Class<T>, callbacks: $LevelCallback<T>);
        get entityGetter(): $LevelEntityGetter<T>;
    }
    export class $LevelEntityGetterAdapter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get(uuid: $UUID_): T;
        get(id: number): T;
        getAll(): $Iterable<T>;
        sectionStorage: $EntitySectionStorage<T>;
        constructor(visibleEntities: $EntityLookup<T>, sectionStorage: $EntitySectionStorage<T>);
        get all(): $Iterable<T>;
    }
    export class $ChunkEntities<T> {
        isEmpty(): boolean;
        getPos(): $ChunkPos;
        getEntities(): $Stream<T>;
        constructor(pos: $ChunkPos, entities: $List_<T>);
        get empty(): boolean;
        get pos(): $ChunkPos;
        get entities(): $Stream<T>;
    }
}
