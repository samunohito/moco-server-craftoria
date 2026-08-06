import { $Direction } from "@package/net/minecraft/core";
import { $DimPos } from "@package/org/cyclops/cyclopscore/datastructure";
import { $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";

declare module "@package/org/cyclops/integrateddynamics/api/path" {
    export class $ISidedPathElement {
    }
    export interface $ISidedPathElement extends $Comparable<$ISidedPathElement> {
        getSide(): $Direction;
        getPathElement(): $IPathElement;
        get side(): $Direction;
        get pathElement(): $IPathElement;
    }
    export class $IPathElement {
    }
    export interface $IPathElement extends $Comparable<$IPathElement> {
        getReachableElements(): $Set<$ISidedPathElement>;
        getPosition(): $DimPos;
        get reachableElements(): $Set<$ISidedPathElement>;
        get position(): $DimPos;
    }
}
