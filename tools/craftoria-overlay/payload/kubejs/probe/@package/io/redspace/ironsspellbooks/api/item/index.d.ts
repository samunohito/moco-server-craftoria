import { $UpgradeOrbType } from "@package/io/redspace/ironsspellbooks/item/armor";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/redspace/ironsspellbooks/api/item" {
    export class $UpgradeData extends $Record {
        static set(arg0: $ItemStack_, arg1: $UpgradeData_): void;
        upgrades(): $Map<$Holder<$UpgradeOrbType>, number>;
        addUpgrade(arg0: $ItemStack_, arg1: $Holder_<$UpgradeOrbType>, arg2: string): $UpgradeData;
        getTotalUpgrades(): number;
        static getUpgradeData(arg0: $ItemStack_): $UpgradeData;
        static hasUpgradeData(arg0: $ItemStack_): boolean;
        getUpgradedSlot(): string;
        static removeUpgradeData(arg0: $ItemStack_): void;
        upgradedSlot(): string;
        static Upgrades: string;
        static CODEC: $Codec<$UpgradeData>;
        static UPGRADES: string;
        static SLOT: string;
        static COUNT: string;
        static REAL_CODEC: $Codec<$UpgradeData>;
        static NONE: $UpgradeData;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $UpgradeData>;
        static UPGRADE_TYPE: string;
        constructor(upgrades: $Map_<$Holder_<$UpgradeOrbType>, number>, upgradedSlot: string);
        get totalUpgrades(): number;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData}.
     */
    export type $UpgradeData_ = { upgrades?: $Map_<$Holder_<$UpgradeOrbType>, number>, upgradedSlot?: string,  } | [upgrades?: $Map_<$Holder_<$UpgradeOrbType>, number>, upgradedSlot?: string, ];
}
