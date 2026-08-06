import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
export * as golem from "@package/cn/leolezury/eternalstarlight/common/entity/living/npc/boarwarf/golem";

declare module "@package/cn/leolezury/eternalstarlight/common/entity/living/npc/boarwarf" {
    export class $BoarwarfType extends $Record {
        texture(): $ResourceLocation;
        biome(): $Holder<$Biome>;
        textureFull(): $ResourceLocation;
        static CODEC: $Codec<$BoarwarfType>;
        constructor(biome: $Holder_<$Biome>, texture: $ResourceLocation_);
        constructor(biome: $Holder_<$Biome>, texture: $ResourceLocation_, textureFull: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $BoarwarfType}.
     */
    export type $BoarwarfType_ = RegistryTypes.EternalStarlightBoarwarfType | { textureFull?: $ResourceLocation_, biome?: $Holder_<$Biome>, texture?: $ResourceLocation_,  } | [textureFull?: $ResourceLocation_, biome?: $Holder_<$Biome>, texture?: $ResourceLocation_, ];
    export interface $BoarwarfType extends RegistryMarked<RegistryTypes.EternalStarlightBoarwarfTypeTag, RegistryTypes.EternalStarlightBoarwarfType> {}
}
