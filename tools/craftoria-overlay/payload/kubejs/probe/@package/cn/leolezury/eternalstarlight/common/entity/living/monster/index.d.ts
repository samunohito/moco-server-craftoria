import { $Holder_, $HolderSet_, $Holder, $RegistryAccess, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/cn/leolezury/eternalstarlight/common/entity/living/monster" {
    export class $SeekerVariant extends $Record {
        texture(): $ResourceLocation;
        biomes(): $HolderSet<$Biome>;
        static getSpawnVariant(registryAccess: $RegistryAccess, holder: $Holder_<$Biome>): $Holder<$SeekerVariant>;
        particleColor(): number;
        glowTexture(): $ResourceLocation;
        tentacleEndTexture(): $ResourceLocation;
        tentacleTexture(): $ResourceLocation;
        glowTextureFull(): $ResourceLocation;
        tentacleEndTextureFull(): $ResourceLocation;
        tentacleTextureFull(): $ResourceLocation;
        textureFull(): $ResourceLocation;
        static CODEC: $Codec<$SeekerVariant>;
        constructor(texture: $ResourceLocation_, glowTexture: $ResourceLocation_, tentacleTexture: $ResourceLocation_, tentacleEndTexture: $ResourceLocation_, particleColor: number, biomes: $HolderSet_<$Biome>);
        constructor(texture: $ResourceLocation_, textureFull: $ResourceLocation_, glowTexture: $ResourceLocation_, glowTextureFull: $ResourceLocation_, tentacleTexture: $ResourceLocation_, tentacleTextureFull: $ResourceLocation_, tentacleEndTexture: $ResourceLocation_, tentacleEndTextureFull: $ResourceLocation_, particleColor: number, biomes: $HolderSet_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $SeekerVariant}.
     */
    export type $SeekerVariant_ = RegistryTypes.EternalStarlightSeekerVariant | { biomes?: $HolderSet_<$Biome>, tentacleTexture?: $ResourceLocation_, tentacleTextureFull?: $ResourceLocation_, textureFull?: $ResourceLocation_, particleColor?: number, texture?: $ResourceLocation_, glowTextureFull?: $ResourceLocation_, tentacleEndTexture?: $ResourceLocation_, glowTexture?: $ResourceLocation_, tentacleEndTextureFull?: $ResourceLocation_,  } | [biomes?: $HolderSet_<$Biome>, tentacleTexture?: $ResourceLocation_, tentacleTextureFull?: $ResourceLocation_, textureFull?: $ResourceLocation_, particleColor?: number, texture?: $ResourceLocation_, glowTextureFull?: $ResourceLocation_, tentacleEndTexture?: $ResourceLocation_, glowTexture?: $ResourceLocation_, tentacleEndTextureFull?: $ResourceLocation_, ];
    export interface $SeekerVariant extends RegistryMarked<RegistryTypes.EternalStarlightSeekerVariantTag, RegistryTypes.EternalStarlightSeekerVariant> {}
}
