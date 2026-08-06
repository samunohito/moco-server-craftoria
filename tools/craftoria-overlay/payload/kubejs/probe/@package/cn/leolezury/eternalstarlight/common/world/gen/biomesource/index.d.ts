import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Climate$ParameterList, $Climate$Sampler_, $BiomeSource } from "@package/net/minecraft/world/level/biome";
import { $BiomeData } from "@package/cn/leolezury/eternalstarlight/common/world/gen/biome";
import { $Record } from "@package/java/lang";
import { $List_ } from "@package/java/util";

declare module "@package/cn/leolezury/eternalstarlight/common/world/gen/biomesource" {
    export class $ESBiomeSource$RiverEntry extends $Record {
        size(): number;
        offset(): number;
        transitionData(): ($Holder<$BiomeData>) | undefined;
        canGenerateInOcean(): boolean;
        transitionSize(): number;
        riverData(): $Holder<$BiomeData>;
        canGenerateInOceanOnly(): boolean;
        static CODEC: $Codec<$ESBiomeSource$RiverEntry>;
        constructor(riverData: $Holder_<$BiomeData>, size: number, transitionData: ($Holder_<$BiomeData>) | undefined, transitionSize: number, offset: number, canGenerateInOcean: boolean, canGenerateInOceanOnly: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ESBiomeSource$RiverEntry}.
     */
    export type $ESBiomeSource$RiverEntry_ = { offset?: number, canGenerateInOcean?: boolean, transitionSize?: number, canGenerateInOceanOnly?: boolean, riverData?: $Holder_<$BiomeData>, size?: number, transitionData?: ($Holder_<$BiomeData>) | undefined,  } | [offset?: number, canGenerateInOcean?: boolean, transitionSize?: number, canGenerateInOceanOnly?: boolean, riverData?: $Holder_<$BiomeData>, size?: number, transitionData?: ($Holder_<$BiomeData>) | undefined, ];
    export class $ESBiomeSource extends $BiomeSource {
        getHeight(blockX: number, blockZ: number, sampler: $Climate$Sampler_): number;
        setSeed(seed: number): void;
        static posAsLong(x: number, z: number): number;
        getBiomeData(blockX: number, blockY: number, blockZ: number, sampler: $Climate$Sampler_): $Holder<$BiomeData>;
        static CODEC: $MapCodec<$ESBiomeSource>;
        constructor(climateList: $Climate$ParameterList<$Holder_<$BiomeData>>, rivers: $List_<$ESBiomeSource$RiverEntry_>);
        set seed(value: number);
    }
}
