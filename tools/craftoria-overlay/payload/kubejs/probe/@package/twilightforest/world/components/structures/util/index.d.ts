import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $TemplateMarkerHandler_, $TemplateMarkerHandler } from "@package/twilightforest/world/components/structures/markerhandler";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/twilightforest/world/components/structures/util" {
    export interface $TemplateMarkerHandlerList extends RegistryMarked<RegistryTypes.TwilightTemplateMarkerHandlerListTag, RegistryTypes.TwilightTemplateMarkerHandlerList> {}
    export class $TemplateMarkerHandlerList extends $Record {
        static of(...arg0: $TemplateMarkerHandler_[]): $TemplateMarkerHandlerList;
        markerHandlers(): $List<$TemplateMarkerHandler>;
        static CODEC: $Codec<$TemplateMarkerHandlerList>;
        static HOLDER_CODEC: $Codec<$Holder<$TemplateMarkerHandlerList>>;
        constructor(markerHandlers: $List_<$TemplateMarkerHandler_>);
    }
    /**
     * Values that may be interpreted as {@link $TemplateMarkerHandlerList}.
     */
    export type $TemplateMarkerHandlerList_ = RegistryTypes.TwilightTemplateMarkerHandlerList | { markerHandlers?: $List_<$TemplateMarkerHandler_>,  } | [markerHandlers?: $List_<$TemplateMarkerHandler_>, ];
}
