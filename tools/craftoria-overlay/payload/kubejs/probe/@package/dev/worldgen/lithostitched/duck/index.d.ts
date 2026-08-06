import { $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $PositionalRandomFactory, $SurfaceSystem } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";
export * as mnbs from "@package/dev/worldgen/lithostitched/duck/mnbs";

declare module "@package/dev/worldgen/lithostitched/duck" {
    export class $MansionRoomDuck {
    }
    export interface $MansionRoomDuck extends $RegistryHolder {
        lithostitched$floorNumber(): number;
        lithostitched$getRandom(name: string, random: $RandomSource): string;
    }
    export class $SurfaceSystemAccessor {
    }
    export interface $SurfaceSystemAccessor {
        getNoiseRandom(): $PositionalRandomFactory;
        getBandOffsetNoise(): $NormalNoise;
        get noiseRandom(): $PositionalRandomFactory;
        get bandOffsetNoise(): $NormalNoise;
    }
    export class $RegistryHolder {
    }
    export interface $RegistryHolder {
        setRegistries(registryAccess: $RegistryAccess): void;
        getRegistries(): $RegistryAccess;
    }
    export class $StructurePoolAccess {
    }
    export interface $StructurePoolAccess {
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        get lithostitchedTemplates(): $LithostitchedTemplates;
    }
    export class $ContextAccessor {
    }
    export interface $ContextAccessor {
        getZ(): number;
        getX(): number;
        getBiome(): $Holder<$Biome>;
        getY(): number;
        getChunk(): $ChunkAccess;
        getSystem(): $SurfaceSystem;
        getStoneDepthBelow(): number;
        get z(): number;
        get x(): number;
        get biome(): $Holder<$Biome>;
        get y(): number;
        get chunk(): $ChunkAccess;
        get system(): $SurfaceSystem;
        get stoneDepthBelow(): number;
    }
}
