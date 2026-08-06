import { $Holder, $HolderLookup$Provider, $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";

declare module "@package/cn/leolezury/eternalstarlight/common/item/combat" {
    export class $SeedsLauncherAmmoType extends $Record {
        item(): $Holder<$Item>;
        damageMultiplier(): number;
        speedMultiplier(): number;
        cooldown(): number;
        static getAmmoType(registryAccess: $HolderLookup$Provider, item: $Item_): $Holder<$SeedsLauncherAmmoType>;
        cooldownAsTicks(): number;
        static CODEC: $Codec<$SeedsLauncherAmmoType>;
        constructor(item: $Holder_<$Item>, damageMultiplier: number, speedMultiplier: number, cooldown: number);
    }
    /**
     * Values that may be interpreted as {@link $SeedsLauncherAmmoType}.
     */
    export type $SeedsLauncherAmmoType_ = RegistryTypes.EternalStarlightSeedsLauncherAmmoType | { damageMultiplier?: number, speedMultiplier?: number, cooldown?: number, item?: $Holder_<$Item>,  } | [damageMultiplier?: number, speedMultiplier?: number, cooldown?: number, item?: $Holder_<$Item>, ];
    export interface $SeedsLauncherAmmoType extends RegistryMarked<RegistryTypes.EternalStarlightSeedsLauncherAmmoTypeTag, RegistryTypes.EternalStarlightSeedsLauncherAmmoType> {}
}
