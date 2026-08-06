import { $TagKey_ } from "@package/net/minecraft/tags";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/shadowsoffire/apotheosis/util" {
    export class $IFestiveMarker {
    }
    export interface $IFestiveMarker {
        isMarked(): boolean;
        setMarked(arg0: boolean): void;
    }
    export class $DamageSourceExtension {
    }
    export interface $DamageSourceExtension {
        addTag(arg0: $TagKey_<$DamageType>): void;
        removeTag(arg0: $TagKey_<$DamageType>): void;
    }
}
