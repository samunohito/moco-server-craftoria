import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/cn/leolezury/eternalstarlight/common/entity/living/npc/boarwarf/golem" {
    export class $AstralGolemMaterial extends $Record {
        texture(): $ResourceLocation;
        tintColor(): number;
        material(): $Holder<$Item>;
        defenseMultiplier(): number;
        attackDamageMultiplier(): number;
        textureFull(): $ResourceLocation;
        static CODEC: $Codec<$AstralGolemMaterial>;
        constructor(material: $Holder_<$Item>, attackDamageMultiplier: number, defenseMultiplier: number, texture: $ResourceLocation_, tintColor: number);
        constructor(material: $Holder_<$Item>, attackDamageMultiplier: number, defenseMultiplier: number, texture: $ResourceLocation_, textureFull: $ResourceLocation_, tintColor: number);
    }
    /**
     * Values that may be interpreted as {@link $AstralGolemMaterial}.
     */
    export type $AstralGolemMaterial_ = RegistryTypes.EternalStarlightAstralGolemMaterial | { tintColor?: number, attackDamageMultiplier?: number, material?: $Holder_<$Item>, textureFull?: $ResourceLocation_, texture?: $ResourceLocation_, defenseMultiplier?: number,  } | [tintColor?: number, attackDamageMultiplier?: number, material?: $Holder_<$Item>, textureFull?: $ResourceLocation_, texture?: $ResourceLocation_, defenseMultiplier?: number, ];
    export interface $AstralGolemMaterial extends RegistryMarked<RegistryTypes.EternalStarlightAstralGolemMaterialTag, RegistryTypes.EternalStarlightAstralGolemMaterial> {}
}
