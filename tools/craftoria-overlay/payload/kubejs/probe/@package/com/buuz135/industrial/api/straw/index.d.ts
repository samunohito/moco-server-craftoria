import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/buuz135/industrial/api/straw" {
    export interface $StrawHandler extends RegistryMarked<RegistryTypes.IndustrialforegoingStrawTag, RegistryTypes.IndustrialforegoingStraw> {}
    export class $StrawHandler {
        getPriority(): number;
        validFluid(arg0: $Fluid_): boolean;
        onDrink(arg0: $Level_, arg1: $BlockPos_, arg2: $Fluid_, arg3: $Player, arg4: boolean): void;
        constructor();
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $StrawHandler}.
     */
    export type $StrawHandler_ = RegistryTypes.IndustrialforegoingStraw;
}
