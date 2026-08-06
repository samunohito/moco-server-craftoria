import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/io/redspace/ironsspellbooks/worldgen" {
    export class $IExtendedNoiseChunk {
    }
    export interface $IExtendedNoiseChunk {
        irons_spellbooks$setAquifierStatus(arg0: $IExtendedNoiseChunk$AquifierNuke_): void;
        irons_spellbooks$getAquifierStatus(): $IExtendedNoiseChunk$AquifierNuke;
    }
    export class $IExtendedNoiseChunk$AquifierNuke extends $Record {
        boundingBoxes(): $BoundingBox[];
        constructor(boundingBoxes: $BoundingBox[]);
    }
    /**
     * Values that may be interpreted as {@link $IExtendedNoiseChunk$AquifierNuke}.
     */
    export type $IExtendedNoiseChunk$AquifierNuke_ = { boundingBoxes?: $BoundingBox[],  } | [boundingBoxes?: $BoundingBox[], ];
}
