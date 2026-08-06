import { $Registry } from "@package/net/minecraft/core";
import { $Climate$Sampler_, $Biome, $Climate$Sampler, $Biome_, $BiomeSource } from "@package/net/minecraft/world/level/biome";

declare module "@package/com/yungnickyoung/minecraft/yungscavebiomes/world" {
    export class $NoiseSamplerBiomeHolder {
    }
    export interface $NoiseSamplerBiomeHolder {
        getBiomeSource(): $BiomeSource;
        setClimateSampler(arg0: $Climate$Sampler_): void;
        setBiomeSource(arg0: $BiomeSource): void;
        setBiomeRegistry(arg0: $Registry<$Biome_>): void;
        setWorldSeed(arg0: number): void;
        getWorldSeed(): number;
        getClimateSampler(): $Climate$Sampler;
        getBiomeRegistry(): $Registry<$Biome>;
    }
}
