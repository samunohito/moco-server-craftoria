import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Map, $List } from "@package/java/util";

declare module "@package/org/embeddedt/embeddium/render/entity" {
    export class $ModelPartExtended {
        static of(arg0: $ModelPart): $ModelPartExtended;
    }
    export interface $ModelPartExtended {
        embeddium$asOptional(): ($ModelPart) | undefined;
        embeddium$getPartsList(): $List<$ModelPart>;
        embeddium$getDescendantsByName(): $Map<string, $ModelPart>;
    }
}
