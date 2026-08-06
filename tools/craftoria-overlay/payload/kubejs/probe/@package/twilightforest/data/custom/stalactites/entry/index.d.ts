import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/twilightforest/data/custom/stalactites/entry" {
    export class $Stalactite extends $Record {
        maxLength(): number;
        weight(): number;
        ores(): $Either<$List<$Pair<$Block, number>>, $Block>;
        sizeVariation(): number;
        static CODEC: $Codec<$Stalactite>;
        constructor(ores: $Either<$List_<$Pair<$Block_, number>>, $Block_>, sizeVariation: number, maxLength: number, weight: number);
    }
    /**
     * Values that may be interpreted as {@link $Stalactite}.
     */
    export type $Stalactite_ = { ores?: $Either<$List_<$Pair<$Block_, number>>, $Block_>, weight?: number, maxLength?: number, sizeVariation?: number,  } | [ores?: $Either<$List_<$Pair<$Block_, number>>, $Block_>, weight?: number, maxLength?: number, sizeVariation?: number, ];
    export class $SpeleothemVarietyConfig extends $Record {
        type(): string;
        replace(): boolean;
        shouldDoAStalactite(arg0: $RandomSource): boolean;
        shouldDoAStalagmite(arg0: $RandomSource): boolean;
        baseStalactites(): $List<$ResourceLocation>;
        oreStalactites(): $List<$ResourceLocation>;
        stalagmites(): $List<$ResourceLocation>;
        stalagmiteChance(): number;
        stalactiteChance(): number;
        oreChance(): number;
        static CODEC: $Codec<$SpeleothemVarietyConfig>;
        constructor(type: string, baseStalactites: $List_<$ResourceLocation_>, oreStalactites: $List_<$ResourceLocation_>, stalagmites: $List_<$ResourceLocation_>, oreChance: number, stalactiteChance: number, stalagmiteChance: number, replace: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpeleothemVarietyConfig}.
     */
    export type $SpeleothemVarietyConfig_ = { stalagmiteChance?: number, baseStalactites?: $List_<$ResourceLocation_>, oreStalactites?: $List_<$ResourceLocation_>, type?: string, stalactiteChance?: number, oreChance?: number, replace?: boolean, stalagmites?: $List_<$ResourceLocation_>,  } | [stalagmiteChance?: number, baseStalactites?: $List_<$ResourceLocation_>, oreStalactites?: $List_<$ResourceLocation_>, type?: string, stalactiteChance?: number, oreChance?: number, replace?: boolean, stalagmites?: $List_<$ResourceLocation_>, ];
}
