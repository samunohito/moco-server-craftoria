import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $DataResult, $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $BonusType_, $BonusType } from "@package/io/redspace/ironsjewelry/core/bonuses";
import { $IBonusParameterType, $IBonusParameterType_ } from "@package/io/redspace/ironsjewelry/core/parameters";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/io/redspace/ironsjewelry/core/data" {
    export interface $MaterialDefinition extends RegistryMarked<RegistryTypes.IronsJewelryMaterialTag, RegistryTypes.IronsJewelryMaterial> {}
    export class $BonusInstance extends $Record {
        parameter(): $Map<$IBonusParameterType<never>, $Object>;
        bonusType(): $BonusType;
        quality(): number;
        cooldown(): ($QualityScalar) | undefined;
        getTooltipDescription(): $List<$Component>;
        constructor(bonusType: $BonusType_, quality: number, parameter: $Map_<$IBonusParameterType_<never>, $Object>, cooldown: ($QualityScalar_) | undefined);
        get tooltipDescription(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $BonusInstance}.
     */
    export type $BonusInstance_ = { parameter?: $Map_<$IBonusParameterType_<never>, $Object>, quality?: number, cooldown?: ($QualityScalar_) | undefined, bonusType?: $BonusType_,  } | [parameter?: $Map_<$IBonusParameterType_<never>, $Object>, quality?: number, cooldown?: ($QualityScalar_) | undefined, bonusType?: $BonusType_, ];
    export class $PartIngredient extends $Record {
        part(): $Holder<$PartDefinition>;
        bonuses(): $List<$Bonus>;
        materialCost(): number;
        drawOrder(): number;
        static CODEC: $Codec<$PartIngredient>;
        constructor(part: $Holder_<$PartDefinition>, materialCost: number, drawOrder: number, bonuses: $List_<$Bonus_>);
    }
    /**
     * Values that may be interpreted as {@link $PartIngredient}.
     */
    export type $PartIngredient_ = { bonuses?: $List_<$Bonus_>, materialCost?: number, part?: $Holder_<$PartDefinition>, drawOrder?: number,  } | [bonuses?: $List_<$Bonus_>, materialCost?: number, part?: $Holder_<$PartDefinition>, drawOrder?: number, ];
    export interface $PatternDefinition extends RegistryMarked<RegistryTypes.IronsJewelryPatternTag, RegistryTypes.IronsJewelryPattern> {}
    export interface $JewelryType extends RegistryMarked<RegistryTypes.IronsJewelryJewelryTypeTag, RegistryTypes.IronsJewelryJewelryType> {}
    export class $Bonus extends $Record {
        bonusType(): $BonusType;
        cooldown(): ($QualityScalar) | undefined;
        parameterValue(): $Map<$IBonusParameterType<never>, $Object>;
        qualityMultiplier(): number;
        static CODEC: $Codec<$Bonus>;
        constructor(arg0: $BonusType_, arg1: number);
        constructor(bonusType: $BonusType_, qualityMultiplier: number, cooldown: ($QualityScalar_) | undefined, parameterValue: $Map_<$IBonusParameterType_<never>, $Object>);
    }
    /**
     * Values that may be interpreted as {@link $Bonus}.
     */
    export type $Bonus_ = { bonusType?: $BonusType_, qualityMultiplier?: number, cooldown?: ($QualityScalar_) | undefined, parameterValue?: $Map_<$IBonusParameterType_<never>, $Object>,  } | [bonusType?: $BonusType_, qualityMultiplier?: number, cooldown?: ($QualityScalar_) | undefined, parameterValue?: $Map_<$IBonusParameterType_<never>, $Object>, ];
    export class $MaterialDefinition extends $Record {
        materialType(): $List<string>;
        quality(): number;
        descriptionId(): string;
        ingredient(): $Ingredient;
        paletteLocation(): $ResourceLocation;
        bonusParameters(): $Map<$IBonusParameterType<never>, $Object>;
        static CODEC: $Codec<$MaterialDefinition>;
        constructor(descriptionId: string, ingredient: $Ingredient_, materialType: $List_<string>, paletteLocation: $ResourceLocation_, bonusParameters: $Map_<$IBonusParameterType_<never>, $Object>, quality: number);
    }
    /**
     * Values that may be interpreted as {@link $MaterialDefinition}.
     */
    export type $MaterialDefinition_ = RegistryTypes.IronsJewelryMaterial | { materialType?: $List_<string>, ingredient?: $Ingredient_, paletteLocation?: $ResourceLocation_, descriptionId?: string, bonusParameters?: $Map_<$IBonusParameterType_<never>, $Object>, quality?: number,  } | [materialType?: $List_<string>, ingredient?: $Ingredient_, paletteLocation?: $ResourceLocation_, descriptionId?: string, bonusParameters?: $Map_<$IBonusParameterType_<never>, $Object>, quality?: number, ];
    export class $PartDefinition extends $Record {
        descriptionId(): string;
        static simpleGemPart(arg0: string, arg1: string): $PartDefinition;
        static simpleMetalPart(arg0: string, arg1: string): $PartDefinition;
        baseTextureLocation(): $ResourceLocation;
        paletteKey(): $ResourceLocation;
        allowedMaterials(): $List<string>;
        canUseMaterial(arg0: $List_<string>): boolean;
        canUseMaterial(arg0: string): boolean;
        static CODEC: $Codec<$PartDefinition>;
        constructor(descriptionId: string, paletteKey: $ResourceLocation_, allowedMaterials: $List_<string>, baseTextureLocation: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PartDefinition}.
     */
    export type $PartDefinition_ = RegistryTypes.IronsJewelryPart | { baseTextureLocation?: $ResourceLocation_, descriptionId?: string, allowedMaterials?: $List_<string>, paletteKey?: $ResourceLocation_,  } | [baseTextureLocation?: $ResourceLocation_, descriptionId?: string, allowedMaterials?: $List_<string>, paletteKey?: $ResourceLocation_, ];
    export interface $PartDefinition extends RegistryMarked<RegistryTypes.IronsJewelryPartTag, RegistryTypes.IronsJewelryPart> {}
    export class $PatternDefinition extends $Record {
        static validate(arg0: $PatternDefinition_): $DataResult<$PatternDefinition>;
        descriptionId(): string;
        bonuses(): $List<$Tuple<$PartIngredient, $Bonus>>;
        unlockedByDefault(): boolean;
        jewelryType(): $JewelryType;
        getPatternBonusesTooltip(): $List<$MutableComponent>;
        getFullPatternTooltip(): $List<$Component>;
        partForQuality(): ($Holder<$PartDefinition>) | undefined;
        partTemplate(): $List<$PartIngredient>;
        qualityMultiplier(): number;
        static CODEC: $Codec<$PatternDefinition>;
        constructor(descriptionId: string, jewelryType: $JewelryType_, partTemplate: $List_<$PartIngredient_>, partForQuality: ($Holder_<$PartDefinition>) | undefined, unlockedByDefault: boolean, qualityMultiplier: number);
        get patternBonusesTooltip(): $List<$MutableComponent>;
        get fullPatternTooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $PatternDefinition}.
     */
    export type $PatternDefinition_ = RegistryTypes.IronsJewelryPattern | { qualityMultiplier?: number, partForQuality?: ($Holder_<$PartDefinition>) | undefined, descriptionId?: string, partTemplate?: $List_<$PartIngredient_>, jewelryType?: $JewelryType_, unlockedByDefault?: boolean,  } | [qualityMultiplier?: number, partForQuality?: ($Holder_<$PartDefinition>) | undefined, descriptionId?: string, partTemplate?: $List_<$PartIngredient_>, jewelryType?: $JewelryType_, unlockedByDefault?: boolean, ];
    export class $QualityScalar extends $Record {
        min(): number;
        max(): (number) | undefined;
        sample(arg0: number): number;
        baseAmount(): number;
        qualityScalar(): number;
        static CODEC: $Codec<$QualityScalar>;
        static CONSTANT_CODEC: $Codec<$QualityScalar>;
        static DIRECT_CODEC: $Codec<$QualityScalar>;
        constructor(baseAmount: number, qualityScalar: number, min: number, max: (number) | undefined);
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $QualityScalar}.
     */
    export type $QualityScalar_ = { baseAmount?: number, max?: (number) | undefined, qualityScalar?: number, min?: number,  } | [baseAmount?: number, max?: (number) | undefined, qualityScalar?: number, min?: number, ];
    export class $JewelryType extends $Record {
        item(): $Holder<$Item>;
        getCuriosSlotIdentifier(): (string) | undefined;
        constructor(item: $Holder_<$Item>);
        get curiosSlotIdentifier(): (string) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $JewelryType}.
     */
    export type $JewelryType_ = RegistryTypes.IronsJewelryJewelryType | { item?: $Holder_<$Item>,  } | [item?: $Holder_<$Item>, ];
}
