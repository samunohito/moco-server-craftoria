import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/kekecreations/jinxedlib/common/data" {
    export interface $Compostables extends RegistryMarked<RegistryTypes.JinxedlibCompostablesTag, RegistryTypes.JinxedlibCompostables> {}
    export class $Compostables extends $Record {
        values(): $Map<$Holder<$Item>, number>;
        canVillagerCompost(): boolean;
        static CODEC: $Codec<$Compostables>;
        constructor(values: $Map_<$Holder_<$Item>, number>, canVillagerCompost: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Compostables}.
     */
    export type $Compostables_ = RegistryTypes.JinxedlibCompostables | { canVillagerCompost?: boolean, values?: $Map_<$Holder_<$Item>, number>,  } | [canVillagerCompost?: boolean, values?: $Map_<$Holder_<$Item>, number>, ];
    export class $FurnaceFuels extends $Record {
        values(): $Map<$Holder<$Item>, number>;
        static CODEC: $Codec<$FurnaceFuels>;
        constructor(values: $Map_<$Holder_<$Item>, number>);
    }
    /**
     * Values that may be interpreted as {@link $FurnaceFuels}.
     */
    export type $FurnaceFuels_ = RegistryTypes.JinxedlibFurnaceFuels | { values?: $Map_<$Holder_<$Item>, number>,  } | [values?: $Map_<$Holder_<$Item>, number>, ];
    export interface $FurnaceFuels extends RegistryMarked<RegistryTypes.JinxedlibFurnaceFuelsTag, RegistryTypes.JinxedlibFurnaceFuels> {}
}
