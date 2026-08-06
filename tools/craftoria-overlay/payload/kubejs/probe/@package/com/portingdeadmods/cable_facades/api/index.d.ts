import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Map_, $Map } from "@package/java/util";
import { $FacadeData_, $FacadeData } from "@package/com/portingdeadmods/cable_facades/data";

declare module "@package/com/portingdeadmods/cable_facades/api" {
    export class $StructureTemplateFacadeAccess {
    }
    export interface $StructureTemplateFacadeAccess {
        cableFacades$getFacadeMap(): $Map<$BlockPos, $FacadeData>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateFacadeAccess}.
     */
    export type $StructureTemplateFacadeAccess_ = (() => $Map_<$BlockPos_, $FacadeData_>);
}
