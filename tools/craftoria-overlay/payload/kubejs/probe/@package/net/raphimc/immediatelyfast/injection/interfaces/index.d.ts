import { $MapAtlasTexture } from "@package/net/raphimc/immediatelyfast/feature/map_atlas_generation";

declare module "@package/net/raphimc/immediatelyfast/injection/interfaces" {
    export class $IMapRenderer {
    }
    export interface $IMapRenderer {
        immediatelyFast$getMapAtlasTexture(arg0: number): $MapAtlasTexture;
        immediatelyFast$getAtlasMapping(arg0: number): number;
    }
}
