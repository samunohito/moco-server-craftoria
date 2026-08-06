import { $Level_ } from "@package/net/minecraft/world/level";
import { $UpgradeBase, $UpgradeData_, $UpgradeData, $UpgradeType } from "@package/dan200/computercraft/api/upgrades";
import { $Registry } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $IPeripheral } from "@package/dan200/computercraft/api/peripheral";

declare module "@package/dan200/computercraft/api/pocket" {
    export class $IPocketUpgrade {
        static typeRegistry(): $ResourceKey<$Registry<$UpgradeType<$IPocketUpgrade>>>;
        static REGISTRY: $ResourceKey<$Registry<$IPocketUpgrade>>;
    }
    export interface $IPocketUpgrade extends $UpgradeBase {
        update(arg0: $IPocketAccess, arg1: $IPeripheral): void;
        getType(): $UpgradeType<$IPocketUpgrade>;
        createPeripheral(arg0: $IPocketAccess): $IPeripheral;
        onRightClick(arg0: $Level_, arg1: $IPocketAccess, arg2: $IPeripheral): boolean;
        get type(): $UpgradeType<$IPocketUpgrade>;
    }
    /**
     * Values that may be interpreted as {@link $IPocketUpgrade}.
     */
    export type $IPocketUpgrade_ = RegistryTypes.ComputercraftPocketUpgrade;
    export interface $IPocketUpgrade extends RegistryMarked<RegistryTypes.ComputercraftPocketUpgradeTag, RegistryTypes.ComputercraftPocketUpgrade> {}
    export class $IPocketAccess {
    }
    export interface $IPocketAccess {
        getLevel(): $ServerLevel;
        getPosition(): $Vec3;
        setLight(arg0: number): void;
        getLight(): number;
        getEntity(): $Entity;
        getUpgradeData(): $DataComponentPatch;
        getUpgrade(): $UpgradeData<$IPocketUpgrade>;
        setUpgrade(arg0: $UpgradeData_<$IPocketUpgrade_>): void;
        getColour(): number;
        invalidatePeripheral(): void;
        setUpgradeData(arg0: $DataComponentPatch_): void;
        setColour(arg0: number): void;
        get level(): $ServerLevel;
        get position(): $Vec3;
        get entity(): $Entity;
    }
}
