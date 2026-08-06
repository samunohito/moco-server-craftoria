import { $Predicate, $Supplier, $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $ItemDisplay } from "@package/twilightforest/client/overlay/display";

declare module "@package/twilightforest/item/travellers_gear/modifiers/display" {
    export class $ItemDisplayType extends $Record {
        display(): $Supplier<$ItemDisplay>;
        validItems(): $Predicate<$ItemStack>;
        slotTexture(): ($ResourceLocation) | undefined;
        constructor(validItems: $Predicate_<$ItemStack>, display: $Supplier_<$ItemDisplay>, slotTexture: ($ResourceLocation_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemDisplayType}.
     */
    export type $ItemDisplayType_ = RegistryTypes.TwilightItemDisplayType | { validItems?: $Predicate_<$ItemStack>, slotTexture?: ($ResourceLocation_) | undefined, display?: $Supplier_<$ItemDisplay>,  } | [validItems?: $Predicate_<$ItemStack>, slotTexture?: ($ResourceLocation_) | undefined, display?: $Supplier_<$ItemDisplay>, ];
    export interface $ItemDisplayType extends RegistryMarked<RegistryTypes.TwilightItemDisplayTypeTag, RegistryTypes.TwilightItemDisplayType> {}
}
