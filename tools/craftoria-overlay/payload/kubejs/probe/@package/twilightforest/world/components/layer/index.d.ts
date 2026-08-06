import { $BiomeDensitySourceExtension } from "@package/com/ishland/tfthreadsafetyaddon/common/ducks";
import { $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Codec } from "@package/com/mojang/serialization";
import { $BiomeLayerFactory } from "@package/twilightforest/world/components/layer/vanillalegacy";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $List_, $Map_ } from "@package/java/util";
import { $DensityFunction$FunctionContext } from "@package/net/minecraft/world/level/levelgen";
import { $TerrainColumn } from "@package/twilightforest/world/components/chunkgenerators";
export * as vanillalegacy from "@package/twilightforest/world/components/layer/vanillalegacy";

declare module "@package/twilightforest/world/components/layer" {
    export class $BiomeDensitySource$DensityData {
        depth: number;
        scale: number;
        constructor(arg0: number, arg1: number);
    }
    export class $BiomeDensitySource implements $BiomeDensitySourceExtension {
        collectPossibleBiomes(): $Stream<$Holder<$Biome>>;
        tfthreadsafetyaddon$recreate(): $BiomeDensitySource;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        addDebugInfo(arg0: $List_<string>, arg1: $BlockPos_): void;
        getBiomeColumnKey(arg0: number, arg1: number): $Holder<$Biome>;
        getTerrainColumn(arg0: $ResourceKey_<$Biome>): ($TerrainColumn) | undefined;
        getTerrainColumn(arg0: number, arg1: number): ($TerrainColumn) | undefined;
        sampleTerrain(arg0: number, arg1: number, arg2: $DensityFunction$FunctionContext): $BiomeDensitySource$DensityData;
        static CODEC: $Codec<$BiomeDensitySource>;
        constructor(arg0: $List_<$TerrainColumn>, arg1: $Holder_<$BiomeLayerFactory>);
        constructor(arg0: $Map_<$ResourceKey_<$Biome>, $TerrainColumn>, arg1: $Holder_<$BiomeLayerFactory>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeDensitySource}.
     */
    export type $BiomeDensitySource_ = RegistryTypes.TwilightBiomeTerrainData;
    export interface $BiomeDensitySource extends RegistryMarked<RegistryTypes.TwilightBiomeTerrainDataTag, RegistryTypes.TwilightBiomeTerrainData> {}
}
