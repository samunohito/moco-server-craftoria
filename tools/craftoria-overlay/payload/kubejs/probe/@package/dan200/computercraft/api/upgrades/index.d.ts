import { $Function_ } from "@package/java/util/function";
import { $Holder$Reference } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";

declare module "@package/dan200/computercraft/api/upgrades" {
    export interface $UpgradeType<T> extends RegistryMarked<RegistryTypes.ComputercraftTurtleUpgradeTypeTag, RegistryTypes.ComputercraftTurtleUpgradeType> {}
    export class $UpgradeType<T extends $UpgradeBase> {
        static create<T extends $UpgradeBase>(arg0: $MapCodec_<T>): $UpgradeType<T>;
        static simple<T extends $UpgradeBase>(arg0: T): $UpgradeType<T>;
        static simpleWithCustomItem<T extends $UpgradeBase>(arg0: $Function_<$ItemStack, T>): $UpgradeType<T>;
    }
    export interface $UpgradeType<T extends $UpgradeBase> {
        codec(): $MapCodec<T>;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeType}.
     */
    export type $UpgradeType_<T> = RegistryTypes.ComputercraftPocketUpgradeType | RegistryTypes.ComputercraftTurtleUpgradeType | (() => $MapCodec_<T>);
    export class $UpgradeBase {
        static getDefaultAdjective(arg0: $ResourceLocation_): string;
    }
    export interface $UpgradeBase {
        getType(): $UpgradeType<never>;
        getUpgradeItem(arg0: $DataComponentPatch_): $ItemStack;
        isItemSuitable(arg0: $ItemStack_): boolean;
        getAdjective(): $Component;
        getCraftingItem(): $ItemStack;
        getUpgradeData(arg0: $ItemStack_): $DataComponentPatch;
        get type(): $UpgradeType<never>;
        get adjective(): $Component;
        get craftingItem(): $ItemStack;
    }
    export class $UpgradeData<T extends $UpgradeBase> extends $Record {
        static of<T extends $UpgradeBase>(arg0: $Holder$Reference<T>, arg1: $DataComponentPatch_): $UpgradeData<T>;
        data(): $DataComponentPatch;
        holder(): $Holder$Reference<T>;
        getUpgradeItem(): $ItemStack;
        static ofDefault<T extends $UpgradeBase>(arg0: $Holder$Reference<T>): $UpgradeData<T>;
        upgrade(): T;
        constructor(holder: $Holder$Reference<T>, data: $DataComponentPatch_);
        get upgradeItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData}.
     */
    export type $UpgradeData_<T> = { holder?: $Holder$Reference<$UpgradeBase>, data?: $DataComponentPatch_,  } | [holder?: $Holder$Reference<$UpgradeBase>, data?: $DataComponentPatch_, ];
}
