import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $BonusInstance_ } from "@package/io/redspace/ironsjewelry/core/data";
import { $List } from "@package/java/util";
import { $IBonusParameterType } from "@package/io/redspace/ironsjewelry/core/parameters";

declare module "@package/io/redspace/ironsjewelry/core/bonuses" {
    export class $BonusType {
        getDescriptionId(): string;
        getTooltipDescriptionId(): string;
        getTooltipDescription(arg0: $BonusInstance_): $List<$Component>;
        getParameterType(): $IBonusParameterType<never>;
        static REGISTRY_CODEC: $Codec<$BonusType>;
        constructor();
        get descriptionId(): string;
        get tooltipDescriptionId(): string;
        get parameterType(): $IBonusParameterType<never>;
    }
    /**
     * Values that may be interpreted as {@link $BonusType}.
     */
    export type $BonusType_ = RegistryTypes.IronsJewelryBonusType;
    export interface $BonusType extends RegistryMarked<RegistryTypes.IronsJewelryBonusTypeTag, RegistryTypes.IronsJewelryBonusType> {}
}
