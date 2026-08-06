import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/blamejared/clumps/helper" {
    export class $IClumpedOrb {
    }
    export interface $IClumpedOrb {
        clumps$getClumpedMap(): $Map<number, number>;
        clumps$setClumpedMap(arg0: $Map_<number, number>): void;
        clumps$resolve(): boolean;
    }
}
