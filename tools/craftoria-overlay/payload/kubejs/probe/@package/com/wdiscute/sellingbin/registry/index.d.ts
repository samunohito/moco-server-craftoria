import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $AbstractProcessor_, $AbstractProcessor } from "@package/com/wdiscute/sellingbin/processors";

declare module "@package/com/wdiscute/sellingbin/registry" {
    export class $SBDataMaps$ItemValue extends $Record {
        baseValue(): number;
        processors(): $List<$AbstractProcessor>;
        static CODEC: $Codec<$SBDataMaps$ItemValue>;
        static EMPTY: $SBDataMaps$ItemValue;
        constructor(baseValue: number, processors: $List_<$AbstractProcessor_>);
    }
    /**
     * Values that may be interpreted as {@link $SBDataMaps$ItemValue}.
     */
    export type $SBDataMaps$ItemValue_ = { baseValue?: number, processors?: $List_<$AbstractProcessor_>,  } | [baseValue?: number, processors?: $List_<$AbstractProcessor_>, ];
}
