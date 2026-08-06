import { $Climate$Sampler_, $Climate$Sampler, $BiomeSource } from "@package/net/minecraft/world/level/biome";

declare module "@package/com/telepathicgrunt/the_bumblezone/worldgen/dimension" {
    export class $NoiseChunkExtension {
    }
    export interface $NoiseChunkExtension {
        the_bumblezone$setBiomeSource(arg0: $BiomeSource): void;
        the_bumblezone$getBiomeSource(): $BiomeSource;
        the_bumblezone$setCachedClimateSampler(arg0: $Climate$Sampler_): void;
        the_bumblezone$getCachedClimateSampler(): $Climate$Sampler;
    }
}
