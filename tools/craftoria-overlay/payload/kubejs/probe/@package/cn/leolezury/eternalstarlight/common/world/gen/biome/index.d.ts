import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/cn/leolezury/eternalstarlight/common/world/gen/biome" {
    export interface $BiomeData extends RegistryMarked<RegistryTypes.EternalStarlightBiomeDataTag, RegistryTypes.EternalStarlightBiomeData> {}
    export class $BiomeData extends $Record {
        height(): number;
        variance(): number;
        biome(): $Holder<$Biome>;
        fluidBlock(): $Holder<$Block>;
        hasRivers(): boolean;
        isOcean(): boolean;
        static CODEC: $Codec<$BiomeData>;
        constructor(biome: $Holder_<$Biome>, fluidBlock: $Holder_<$Block>, height: number, variance: number, hasRivers: boolean, isOcean: boolean);
        get ocean(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BiomeData}.
     */
    export type $BiomeData_ = RegistryTypes.EternalStarlightBiomeData | { variance?: number, isOcean?: boolean, height?: number, biome?: $Holder_<$Biome>, fluidBlock?: $Holder_<$Block>, hasRivers?: boolean,  } | [variance?: number, isOcean?: boolean, height?: number, biome?: $Holder_<$Biome>, fluidBlock?: $Holder_<$Block>, hasRivers?: boolean, ];
}
