import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/com/hollingsworth/arsnouveau/api/documentation" {
    export class $ReloadDocumentationEvent$AddEntries extends $ReloadDocumentationEvent {
        constructor();
    }
    export class $ReloadDocumentationEvent extends $Event {
    }
    export class $ReloadDocumentationEvent$Post extends $ReloadDocumentationEvent {
        constructor();
    }
    export class $DocAssets$BlitInfo extends $Record {
        location(): $ResourceLocation;
        v(): number;
        u(): number;
        width(): number;
        height(): number;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
        constructor(location: $ResourceLocation_, u: number, v: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $DocAssets$BlitInfo}.
     */
    export type $DocAssets$BlitInfo_ = { height?: number, location?: $ResourceLocation_, v?: number, u?: number, width?: number,  } | [height?: number, location?: $ResourceLocation_, v?: number, u?: number, width?: number, ];
}
