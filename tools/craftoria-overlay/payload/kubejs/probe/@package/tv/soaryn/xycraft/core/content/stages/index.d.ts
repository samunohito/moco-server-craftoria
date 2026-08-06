import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $IStage } from "@package/tv/soaryn/xycraft/api/content";

declare module "@package/tv/soaryn/xycraft/core/content/stages" {
    export class $IStageType<T extends $IStage> {
    }
    export interface $IStageType<T extends $IStage> {
        codec(): $MapCodec<T>;
    }
    /**
     * Values that may be interpreted as {@link $IStageType}.
     */
    export type $IStageType_<T> = RegistryTypes.XycraftStages | (() => $MapCodec_<T>);
    export interface $IStageType<T> extends RegistryMarked<RegistryTypes.XycraftStagesTag, RegistryTypes.XycraftStages> {}
}
