import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/block/grower" {
    export class $TreeGrower {
        modifyReturnValue$gpm000$ars_nouveau$growTree(arg0: boolean, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        growTree(level: $ServerLevel, chunkGenerator: $ChunkGenerator, pos: $BlockPos_, state: $BlockState_, random: $RandomSource): boolean;
        getConfiguredMegaFeature(random: $RandomSource): $ResourceKey<$ConfiguredFeature<never, never>>;
        getConfiguredFeature(random: $RandomSource, flowers: boolean): $ResourceKey<$ConfiguredFeature<never, never>>;
        static MANGROVE: $TreeGrower;
        static SPRUCE: $TreeGrower;
        static CHERRY: $TreeGrower;
        static CODEC: $Codec<$TreeGrower>;
        static BIRCH: $TreeGrower;
        static JUNGLE: $TreeGrower;
        static ACACIA: $TreeGrower;
        static OAK: $TreeGrower;
        static AZALEA: $TreeGrower;
        static DARK_OAK: $TreeGrower;
        constructor(name: string, megaTree: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, tree: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, flowers: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined);
        constructor(name: string, secondaryChance: number, megaTree: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, secondaryMegaTree: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, tree: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, secondaryTree: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, flowers: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, secondaryFlowers: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined);
    }
}
