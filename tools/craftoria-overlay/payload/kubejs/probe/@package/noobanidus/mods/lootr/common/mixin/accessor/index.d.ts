import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $Map_, $Map } from "@package/java/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $LockCode, $LockCode_ } from "@package/net/minecraft/world";
import { $ChunkHolder } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable, $Iterable_ } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/noobanidus/mods/lootr/common/mixin/accessor" {
    export class $AccessorMixinBaseContainerBlockEntity {
    }
    export interface $AccessorMixinBaseContainerBlockEntity {
        invokeGetItems(): $NonNullList<$ItemStack>;
        setLockKey(arg0: $LockCode_): void;
        getLockKey(): $LockCode;
    }
    export class $AccessorMixinFallingBlockEntity {
    }
    export interface $AccessorMixinFallingBlockEntity {
        lootr$setBlockState(arg0: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinFallingBlockEntity}.
     */
    export type $AccessorMixinFallingBlockEntity_ = ((arg0: $BlockState) => void);
    export class $AccessorMixinBrushableBlockEntity {
    }
    export interface $AccessorMixinBrushableBlockEntity {
        lootr$getLootTable(): $ResourceKey<$LootTable>;
        lootr$getLootTableSeed(): number;
    }
    export class $AccessorMixinBlock {
    }
    export interface $AccessorMixinBlock {
        lootr$spawnDestroyParticles(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinBlock}.
     */
    export type $AccessorMixinBlock_ = ((arg0: $Level, arg1: $Player, arg2: $BlockPos, arg3: $BlockState) => void);
    export class $AccessorMixinDimensionDataStorage {
    }
    export interface $AccessorMixinDimensionDataStorage {
        getCache(): $Map<string, $SavedData>;
        get cache(): $Map<string, $SavedData>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinDimensionDataStorage}.
     */
    export type $AccessorMixinDimensionDataStorage_ = (() => $Map_<string, $SavedData>);
    export class $AccessorMixinLootTable {
    }
    export interface $AccessorMixinLootTable {
        getRandomSequence(): ($ResourceLocation) | undefined;
        get randomSequence(): ($ResourceLocation) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinLootTable}.
     */
    export type $AccessorMixinLootTable_ = (() => ($ResourceLocation_) | undefined);
    export class $AccessorMixinChunkMap {
    }
    export interface $AccessorMixinChunkMap {
        lootr$getChunks(): $Iterable<$ChunkHolder>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinChunkMap}.
     */
    export type $AccessorMixinChunkMap_ = (() => $Iterable_<$ChunkHolder>);
    export class $AccessorMixinItemFrame {
        static lootr$getDataItem(): $EntityDataAccessor<$ItemStack>;
    }
    export interface $AccessorMixinItemFrame {
        lootr$isFixed(): boolean;
        lootr$onItemChanged(arg0: $ItemStack_): void;
    }
    export class $AccessorMixinMinecraftServer {
    }
    export interface $AccessorMixinMinecraftServer {
        Lootr$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinMinecraftServer}.
     */
    export type $AccessorMixinMinecraftServer_ = (() => $LevelStorageSource$LevelStorageAccess);
}
