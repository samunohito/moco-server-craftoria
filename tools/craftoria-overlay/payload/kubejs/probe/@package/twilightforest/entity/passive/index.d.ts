import { $Holder_, $HolderSet_, $Holder, $RegistryAccess, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/twilightforest/entity/passive" {
    export class $TinyBirdVariant extends $Record {
        static getVariant(arg0: $RegistryAccess, arg1: $Holder_<$Biome>, arg2: $RandomSource): $Holder<$TinyBirdVariant>;
        texture(): $ResourceLocation;
        spawnBiomes(): ($HolderSet<$Biome>) | undefined;
        static CODEC: $Codec<$Holder<$TinyBirdVariant>>;
        static DIRECT_CODEC: $Codec<$TinyBirdVariant>;
        constructor(arg0: $ResourceLocation_);
        constructor(texture: $ResourceLocation_, spawnBiomes: ($HolderSet_<$Biome>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TinyBirdVariant}.
     */
    export type $TinyBirdVariant_ = RegistryTypes.TwilightTinyBirdVariant | { texture?: $ResourceLocation_, spawnBiomes?: ($HolderSet_<$Biome>) | undefined,  } | [texture?: $ResourceLocation_, spawnBiomes?: ($HolderSet_<$Biome>) | undefined, ];
    export class $DwarfRabbitVariant extends $Record {
        static getVariant(arg0: $RegistryAccess, arg1: $Holder_<$Biome>, arg2: $RandomSource): $Holder<$DwarfRabbitVariant>;
        texture(): $ResourceLocation;
        spawnBiomes(): ($HolderSet<$Biome>) | undefined;
        static getRandomCommonVariant(arg0: $RegistryAccess, arg1: $RandomSource): $Holder<$DwarfRabbitVariant>;
        static CODEC: $Codec<$Holder<$DwarfRabbitVariant>>;
        static DIRECT_CODEC: $Codec<$DwarfRabbitVariant>;
        constructor(arg0: $ResourceLocation_);
        constructor(texture: $ResourceLocation_, spawnBiomes: ($HolderSet_<$Biome>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DwarfRabbitVariant}.
     */
    export type $DwarfRabbitVariant_ = RegistryTypes.TwilightDwarfRabbitVariant | { texture?: $ResourceLocation_, spawnBiomes?: ($HolderSet_<$Biome>) | undefined,  } | [texture?: $ResourceLocation_, spawnBiomes?: ($HolderSet_<$Biome>) | undefined, ];
    export interface $TinyBirdVariant extends RegistryMarked<RegistryTypes.TwilightTinyBirdVariantTag, RegistryTypes.TwilightTinyBirdVariant> {}
    export interface $DwarfRabbitVariant extends RegistryMarked<RegistryTypes.TwilightDwarfRabbitVariantTag, RegistryTypes.TwilightDwarfRabbitVariant> {}
}
