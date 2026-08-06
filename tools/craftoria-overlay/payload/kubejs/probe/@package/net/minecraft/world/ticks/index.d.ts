import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $CompoundTag, $ListTag_, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Comparator, $Queue, $List, $List_ } from "@package/java/util";
import { $Container } from "@package/net/minecraft/world";
import { $LongPredicate_, $Consumer_, $BiConsumer_, $Predicate_, $Supplier_, $Function_, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Enum, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $IChunkTickScheduler, $ISimpleTickScheduler } from "@package/com/ishland/c2me/base/mixin/access";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/ticks" {
    export class $ContainerSingleItem {
    }
    export interface $ContainerSingleItem extends $Container {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        splitTheItem(slot: number): $ItemStack;
        removeTheItem(): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        getTheItem(): $ItemStack;
        setTheItem(item: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        get empty(): boolean;
        get containerSize(): number;
    }
    export class $ScheduledTick<T> extends $Record {
        priority(): $TickPriority;
        type(): T;
        static probe<T>(type: T, pos: $BlockPos_): $ScheduledTick<T>;
        pos(): $BlockPos;
        subTickOrder(): number;
        triggerTick(): number;
        static INTRA_TICK_DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$ScheduledTick<never>>;
        static DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        constructor(type: T, pos: $BlockPos_, triggerTick: number, arg3: number);
        constructor(type: T, pos: $BlockPos_, triggerTick: number, arg3: $TickPriority_, priority: number);
    }
    /**
     * Values that may be interpreted as {@link $ScheduledTick}.
     */
    export type $ScheduledTick_<T> = { subTickOrder?: number, type?: any, pos?: $BlockPos_, priority?: $TickPriority_, triggerTick?: number,  } | [subTickOrder?: number, type?: any, pos?: $BlockPos_, priority?: $TickPriority_, triggerTick?: number, ];
    export class $LevelTicks<T> implements $LevelTickAccess<T> {
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        tick(gameTime: number, arg1: number, maxAllowedTicks: $BiConsumer_<$BlockPos, T>): void;
        clearArea(area: $BoundingBox): void;
        copyArea(area: $BoundingBox, offset: $Vec3i): void;
        addContainer(chunkPos: $ChunkPos, chunkTicks: $LevelChunkTicks<T>): void;
        removeContainer(chunkPos: $ChunkPos): void;
        willTickThisTick(pos: $BlockPos_, type: T): boolean;
        copyAreaFrom(levelTicks: $LevelTicks<T>, area: $BoundingBox, offset: $Vec3i): void;
        allContainers: $Long2ObjectMap<$LevelChunkTicks<T>>;
        constructor(tickCheck: $LongPredicate_, profiler: $Supplier_<$ProfilerFiller>);
    }
    export class $TickPriority extends $Enum<$TickPriority> {
        static values(): $TickPriority[];
        static valueOf(arg0: string): $TickPriority;
        getValue(): number;
        static byValue(priority: number): $TickPriority;
        static EXTREMELY_LOW: $TickPriority;
        static VERY_HIGH: $TickPriority;
        static HIGH: $TickPriority;
        static LOW: $TickPriority;
        static VERY_LOW: $TickPriority;
        static EXTREMELY_HIGH: $TickPriority;
        static NORMAL: $TickPriority;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $TickPriority}.
     */
    export type $TickPriority_ = "extremely_high" | "very_high" | "high" | "normal" | "low" | "very_low" | "extremely_low";
    export class $LevelTicks$PosAndContainerConsumer<T> {
    }
    export interface $LevelTicks$PosAndContainerConsumer<T> {
    }
    /**
     * Values that may be interpreted as {@link $LevelTicks$PosAndContainerConsumer}.
     */
    export type $LevelTicks$PosAndContainerConsumer_<T> = (() => void);
    export class $TickAccess<T> {
    }
    export interface $TickAccess<T> {
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
    }
    export class $BlackholeTickAccess {
        static emptyLevelList<T>(): $LevelTickAccess<T>;
        static emptyContainer<T>(): $TickContainerAccess<T>;
        constructor();
    }
    export class $WorldGenTickAccess<T> implements $LevelTickAccess<T> {
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        willTickThisTick(pos: $BlockPos_, type: T): boolean;
        constructor(containerGetter: $Function_<$BlockPos, $TickContainerAccess<T>>);
    }
    export class $LevelTickAccess<T> {
    }
    export interface $LevelTickAccess<T> extends $TickAccess<T> {
        willTickThisTick(pos: $BlockPos_, type: T): boolean;
    }
    export class $LevelChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T>, $IChunkTickScheduler<any> {
        static load<T>(tag: $ListTag_, isParser: $Function_<string, (T) | undefined>, pos: $ChunkPos): $LevelChunkTicks<T>;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        peek(): $ScheduledTick<T>;
        removeIf(predicate: $Predicate_<$ScheduledTick<T>>): void;
        poll(): $ScheduledTick<T>;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        getAll(): $Stream<$ScheduledTick<T>>;
        unpack(gameTime: number): void;
        setOnTickAdded(onTickAdded: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>> | null): void;
        save(gameTime: number, arg1: $Function_<T, string>): $Tag;
        getTicks(): $List<$SavedTick<T>>;
        getTickQueue(): $Queue<$ScheduledTick<T>>;
        constructor();
        constructor(pendingTicks: $List_<$SavedTick_<T>>);
        get all(): $Stream<$ScheduledTick<T>>;
        set onTickAdded(value: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>> | null);
        get ticks(): $List<$SavedTick<T>>;
        get tickQueue(): $Queue<$ScheduledTick<T>>;
    }
    export class $TickContainerAccess<T> {
    }
    export interface $TickContainerAccess<T> extends $TickAccess<T> {
    }
    export class $SerializableTickContainer<T> {
    }
    export interface $SerializableTickContainer<T> {
        save(gameTime: number, arg1: $Function_<T, string>): $Tag;
    }
    /**
     * Values that may be interpreted as {@link $SerializableTickContainer}.
     */
    export type $SerializableTickContainer_<T> = ((arg0: number, arg1: $Function<T, string>) => $Tag_);
    export class $ProtoChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T>, $ISimpleTickScheduler<any> {
        static load<T>(tag: $ListTag_, idParser: $Function_<string, (T) | undefined>, chunkPos: $ChunkPos): $ProtoChunkTicks<T>;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        save(gameTime: number, arg1: $Function_<T, string>): $Tag;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        scheduledTicks(): $List<$SavedTick<T>>;
        getScheduledTicks(): $List<$SavedTick<T>>;
        constructor();
    }
    export class $ContainerSingleItem$BlockContainerSingleItem {
    }
    export interface $ContainerSingleItem$BlockContainerSingleItem extends $ContainerSingleItem {
        getContainerBlockEntity(): $BlockEntity;
        stillValid(arg0: $Player): boolean;
        get containerBlockEntity(): $BlockEntity;
    }
    export class $SavedTick<T> extends $Record {
        priority(): $TickPriority;
        type(): T;
        delay(): number;
        save(idGetter: $Function_<T, string>): $CompoundTag;
        static probe<T>(type: T, pos: $BlockPos_): $SavedTick<T>;
        pos(): $BlockPos;
        unpack(gameTime: number, arg1: number): $ScheduledTick<T>;
        static loadTick<T>(tag: $CompoundTag_, idParser: $Function_<string, (T) | undefined>): ($SavedTick<T>) | undefined;
        static loadTickList<T>(tag: $ListTag_, idParser: $Function_<string, (T) | undefined>, chunkPos: $ChunkPos, output: $Consumer_<$SavedTick<T>>): void;
        static saveTick<T>(tick: $ScheduledTick_<T>, idGetter: $Function_<T, string>, gameTime: number): $CompoundTag;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$SavedTick<never>>;
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: $TickPriority_);
    }
    /**
     * Values that may be interpreted as {@link $SavedTick}.
     */
    export type $SavedTick_<T> = { priority?: $TickPriority_, pos?: $BlockPos_, delay?: number, type?: any,  } | [priority?: $TickPriority_, pos?: $BlockPos_, delay?: number, type?: any, ];
}
