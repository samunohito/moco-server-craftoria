import { $Holder_, $HolderSet_, $Holder, $RegistryAccess, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/cn/leolezury/eternalstarlight/common/entity/living/animal" {
    export interface $ShimmerLacewingVariant extends RegistryMarked<RegistryTypes.EternalStarlightShimmerLacewingVariantTag, RegistryTypes.EternalStarlightShimmerLacewingVariant> {}
    export class $EntVariant extends $Record {
        leaves(): $Holder<$Item>;
        texture(): $ResourceLocation;
        biomes(): $HolderSet<$Biome>;
        static getSpawnVariant(registryAccess: $RegistryAccess, holder: $Holder_<$Biome>): $Holder<$EntVariant>;
        textureFull(): $ResourceLocation;
        static CODEC: $Codec<$EntVariant>;
        constructor(leaves: $Holder_<$Item>, texture: $ResourceLocation_, biomes: $HolderSet_<$Biome>);
        constructor(leaves: $Holder_<$Item>, texture: $ResourceLocation_, textureFull: $ResourceLocation_, biomes: $HolderSet_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $EntVariant}.
     */
    export type $EntVariant_ = RegistryTypes.EternalStarlightEntVariant | { texture?: $ResourceLocation_, leaves?: $Holder_<$Item>, biomes?: $HolderSet_<$Biome>, textureFull?: $ResourceLocation_,  } | [texture?: $ResourceLocation_, leaves?: $Holder_<$Item>, biomes?: $HolderSet_<$Biome>, textureFull?: $ResourceLocation_, ];
    export interface $EntVariant extends RegistryMarked<RegistryTypes.EternalStarlightEntVariantTag, RegistryTypes.EternalStarlightEntVariant> {}
    export class $ShimmerLacewingVariant extends $Record {
        texture(): $ResourceLocation;
        biomes(): $HolderSet<$Biome>;
        static getSpawnVariant(registryAccess: $RegistryAccess, holder: $Holder_<$Biome>): $Holder<$ShimmerLacewingVariant>;
        glowTexture(): $ResourceLocation;
        glowTextureFull(): $ResourceLocation;
        textureFull(): $ResourceLocation;
        static CODEC: $Codec<$ShimmerLacewingVariant>;
        constructor(texture: $ResourceLocation_, glowTexture: $ResourceLocation_, biomes: $HolderSet_<$Biome>);
        constructor(texture: $ResourceLocation_, textureFull: $ResourceLocation_, glowTexture: $ResourceLocation_, glowTextureFull: $ResourceLocation_, biomes: $HolderSet_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $ShimmerLacewingVariant}.
     */
    export type $ShimmerLacewingVariant_ = RegistryTypes.EternalStarlightShimmerLacewingVariant | { glowTextureFull?: $ResourceLocation_, textureFull?: $ResourceLocation_, glowTexture?: $ResourceLocation_, texture?: $ResourceLocation_, biomes?: $HolderSet_<$Biome>,  } | [glowTextureFull?: $ResourceLocation_, textureFull?: $ResourceLocation_, glowTexture?: $ResourceLocation_, texture?: $ResourceLocation_, biomes?: $HolderSet_<$Biome>, ];
}
