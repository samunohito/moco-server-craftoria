import { $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/mod/azure/azurelib/common/cache/object" {
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        mirror(): boolean;
        rotation(): $Vec3;
        quads(): $GeoQuad[];
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean,  } | [pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, ];
}
