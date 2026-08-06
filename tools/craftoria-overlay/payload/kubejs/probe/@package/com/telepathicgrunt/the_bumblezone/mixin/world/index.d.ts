import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Climate$ParameterPoint_, $BiomeManager$NoiseBiomeSource, $Climate$Sampler } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StructureTemplate, $StructureTemplate$Palette, $StructureTemplate$StructureEntityInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List, $List_ } from "@package/java/util";
import { $NoiseRouter_, $NoiseRouter } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/telepathicgrunt/the_bumblezone/mixin/world" {
    export class $StructurePoolAccessor {
    }
    export interface $StructurePoolAccessor {
        bumblezone$getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePoolAccessor}.
     */
    export type $StructurePoolAccessor_ = (() => $List_<$Pair<$StructurePoolElement, number>>);
    export class $StructureTemplateAccessor {
    }
    export interface $StructureTemplateAccessor {
        bumblezone$getEntityInfoList(): $List<$StructureTemplate$StructureEntityInfo>;
        bumblezone$getBlocks(): $List<$StructureTemplate$Palette>;
    }
    export class $NoiseChunkAccessor {
    }
    export interface $NoiseChunkAccessor {
        bumblezone$callGetInterpolatedState(): $BlockState;
        bumblezone$callCachedClimateSampler(arg0: $NoiseRouter_, arg1: $List_<$Climate$ParameterPoint_>): $Climate$Sampler;
    }
    export class $NoiseGeneratorSettingsAccessor {
    }
    export interface $NoiseGeneratorSettingsAccessor {
        bumblezone$setNoiseRouter(arg0: $NoiseRouter_): void;
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettingsAccessor}.
     */
    export type $NoiseGeneratorSettingsAccessor_ = ((arg0: $NoiseRouter) => void);
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        bumblezone$getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
    }
    /**
     * Values that may be interpreted as {@link $SinglePoolElementAccessor}.
     */
    export type $SinglePoolElementAccessor_ = (() => $Either<$ResourceLocation_, $StructureTemplate>);
    export class $BiomeManagerAccessor {
    }
    export interface $BiomeManagerAccessor {
        bumblezone$getBiomeZoomSeed(): number;
        bumblezone$getNoiseBiomeSource(): $BiomeManager$NoiseBiomeSource;
    }
}
