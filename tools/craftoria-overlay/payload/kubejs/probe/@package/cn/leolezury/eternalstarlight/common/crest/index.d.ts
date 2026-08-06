import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $AttributeModifier$Operation, $Attribute, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $ManaType_, $AbstractSpell, $ManaType } from "@package/cn/leolezury/eternalstarlight/common/spell";

declare module "@package/cn/leolezury/eternalstarlight/common/crest" {
    export interface $Crest extends RegistryMarked<RegistryTypes.EternalStarlightCrestTag, RegistryTypes.EternalStarlightCrest> {}
    export class $Crest$MobEffectWithLevel extends $Record {
        level(): number;
        effect(): $Holder<$MobEffect>;
        levelAddition(): number;
        static CODEC: $Codec<$Crest$MobEffectWithLevel>;
        constructor(effect: $Holder_<$MobEffect>, level: number, levelAddition: number);
    }
    /**
     * Values that may be interpreted as {@link $Crest$MobEffectWithLevel}.
     */
    export type $Crest$MobEffectWithLevel_ = { effect?: $Holder_<$MobEffect>, levelAddition?: number, level?: number,  } | [effect?: $Holder_<$MobEffect>, levelAddition?: number, level?: number, ];
    export class $Crest extends $Record {
        type(): $ManaType;
        maxLevel(): number;
        texture(): $ResourceLocation;
        attributeModifiers(): ($List<$Crest$LevelBasedAttributeModifier>) | undefined;
        effects(): ($List<$Crest$MobEffectWithLevel>) | undefined;
        getSpell(): ($AbstractSpell) | undefined;
        spell(): ($Holder<$AbstractSpell>) | undefined;
        static CODEC: $Codec<$Crest>;
        constructor(type: $ManaType_, maxLevel: number, texture: $ResourceLocation_, spell: $Holder_<$AbstractSpell>, effects: $List_<$Crest$MobEffectWithLevel_>, attributeModifiers: $List_<$Crest$LevelBasedAttributeModifier_>);
        constructor(type: $ManaType_, maxLevel: number, texture: $ResourceLocation_, spell: ($Holder_<$AbstractSpell>) | undefined, effects: ($List_<$Crest$MobEffectWithLevel_>) | undefined, attributeModifiers: ($List_<$Crest$LevelBasedAttributeModifier_>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Crest}.
     */
    export type $Crest_ = RegistryTypes.EternalStarlightCrest | { maxLevel?: number, type?: $ManaType_, texture?: $ResourceLocation_, effects?: ($List_<$Crest$MobEffectWithLevel_>) | undefined, attributeModifiers?: ($List_<$Crest$LevelBasedAttributeModifier_>) | undefined, spell?: ($Holder_<$AbstractSpell>) | undefined,  } | [maxLevel?: number, type?: $ManaType_, texture?: $ResourceLocation_, effects?: ($List_<$Crest$MobEffectWithLevel_>) | undefined, attributeModifiers?: ($List_<$Crest$LevelBasedAttributeModifier_>) | undefined, spell?: ($Holder_<$AbstractSpell>) | undefined, ];
    export class $Crest$LevelBasedAttributeModifier extends $Record {
        id(): $ResourceLocation;
        attribute(): $Holder<$Attribute>;
        amount(): number;
        operation(): $AttributeModifier$Operation;
        getModifier(level: number): $AttributeModifier;
        amountAddition(): number;
        static CODEC: $Codec<$Crest$LevelBasedAttributeModifier>;
        constructor(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, amountAddition: number, operation: $AttributeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $Crest$LevelBasedAttributeModifier}.
     */
    export type $Crest$LevelBasedAttributeModifier_ = { operation?: $AttributeModifier$Operation_, attribute?: $Holder_<$Attribute>, amountAddition?: number, id?: $ResourceLocation_, amount?: number,  } | [operation?: $AttributeModifier$Operation_, attribute?: $Holder_<$Attribute>, amountAddition?: number, id?: $ResourceLocation_, amount?: number, ];
}
