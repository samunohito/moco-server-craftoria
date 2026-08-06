import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec, $DataResult } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
export * as display from "@package/twilightforest/item/travellers_gear/modifiers/display";

declare module "@package/twilightforest/item/travellers_gear/modifiers" {
    export class $TravellersModifier {
        static validateEquipment(arg0: $EquipmentSlotGroup_): $DataResult<$EquipmentSlotGroup>;
        static CODEC: $Codec<$TravellersModifier>;
    }
    export interface $TravellersModifier {
        group(): $EquipmentSlotGroup;
        isActive(arg0: $ItemStack_, arg1: $ResourceKey_<$TravellersModifier>, arg2: boolean): boolean;
        getPrefix(): string;
        getDescription(): $List<$Component>;
        isAbility(): boolean;
        hasModifier(arg0: $ItemStack_): boolean;
        codec(): $MapCodec<$TravellersModifier>;
        get prefix(): string;
        get description(): $List<$Component>;
        get ability(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TravellersModifier}.
     */
    export type $TravellersModifier_ = RegistryTypes.TwilightTravellersModifiers;
    export interface $TravellersModifier extends RegistryMarked<RegistryTypes.TwilightTravellersModifiersTag, RegistryTypes.TwilightTravellersModifiers> {}
}
