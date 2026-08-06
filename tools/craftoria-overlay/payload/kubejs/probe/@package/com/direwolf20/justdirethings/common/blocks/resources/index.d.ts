import { $Level_ } from "@package/net/minecraft/world/level";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $IdMapper } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $BlockState_, $StateDefinition, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BuddingAmethystBlock, $Block$BlockStatePairKey, $Block } from "@package/net/minecraft/world/level/block";
import { $ThreadLocal } from "@package/java/lang";

declare module "@package/com/direwolf20/justdirethings/common/blocks/resources" {
    export class $TimeCrystalBuddingBlock extends $BuddingAmethystBlock {
        advance(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: number): void;
        canAdvanceToCustom(arg0: $Level_, arg1: $BlockState_): number;
        canAdvanceTo(arg0: $Level_, arg1: $BlockState_): number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$BuddingAmethystBlock>;
        static GROWTH_CHANCE: number;
        static STAGE: $IntegerProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor();
    }
}
