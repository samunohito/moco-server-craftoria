import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";

declare module "@package/dev/muon/irons_apothic/mixin" {
    export class $SchoolTypeAccessor {
    }
    export interface $SchoolTypeAccessor {
        irons_apothic$getPowerAttribute(): $Holder<$Attribute>;
    }
    /**
     * Values that may be interpreted as {@link $SchoolTypeAccessor}.
     */
    export type $SchoolTypeAccessor_ = (() => $Holder_<$Attribute>);
}
