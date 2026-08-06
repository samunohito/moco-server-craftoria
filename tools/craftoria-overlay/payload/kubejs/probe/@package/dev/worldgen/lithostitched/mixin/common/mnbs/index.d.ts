import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Climate$ParameterList, $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/dev/worldgen/lithostitched/mixin/common/mnbs" {
    export class $MNBSPLAccessor {
    }
    export interface $MNBSPLAccessor {
        setParameters(parameterList: $Climate$ParameterList<$Holder_<$Biome>>): void;
        set parameters(value: $Climate$ParameterList<$Holder_<$Biome>>);
    }
    /**
     * Values that may be interpreted as {@link $MNBSPLAccessor}.
     */
    export type $MNBSPLAccessor_ = ((parameterList: $Climate$ParameterList<$Holder<$Biome>>) => void);
}
