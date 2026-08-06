import { $Consumer_ } from "@package/java/util/function";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Codec } from "@package/com/mojang/serialization";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Double2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/doubles";
import { $DensityFunction_, $DensityFunction$FunctionContext } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/twilightforest/world/components/chunkgenerators" {
    export class $TerrainColumn {
        scale(arg0: $DensityFunction$FunctionContext): number;
        depth(arg0: $DensityFunction$FunctionContext): number;
        is(arg0: $ResourceKey_<$Biome>): boolean;
        is(arg0: $Holder_<$Biome>): boolean;
        weight(arg0: $DensityFunction$FunctionContext): number;
        getBiome(arg0: number): $Holder<$Biome>;
        getMainBiome(): $Holder<$Biome>;
        getBiomes(): $Stream<$Holder<$Biome>>;
        getResourceKey(): $ResourceKey<$Biome>;
        getBiomesDebug(arg0: $Consumer_<string>): void;
        static CODEC: $Codec<$TerrainColumn>;
        constructor(arg0: $Holder_<$Biome>, arg1: $Double2ObjectSortedMap<$Holder_<$Biome>>, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_);
        get mainBiome(): $Holder<$Biome>;
        get biomes(): $Stream<$Holder<$Biome>>;
        get resourceKey(): $ResourceKey<$Biome>;
    }
}
