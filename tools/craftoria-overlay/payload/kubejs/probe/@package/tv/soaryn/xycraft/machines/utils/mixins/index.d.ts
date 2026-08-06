import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/tv/soaryn/xycraft/machines/utils/mixins" {
    export class $ILightMixinInterface {
    }
    export interface $ILightMixinInterface {
        xycraft$checkVolume(arg0: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $ILightMixinInterface}.
     */
    export type $ILightMixinInterface_ = ((arg0: $BlockPos) => void);
    export class $ILevelLightEngineMix {
        static of(arg0: $Level_): $ILevelLightEngineMix;
    }
    export interface $ILevelLightEngineMix {
        xycraft$checkVolume(arg0: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $ILevelLightEngineMix}.
     */
    export type $ILevelLightEngineMix_ = ((arg0: $BlockPos) => void);
}
