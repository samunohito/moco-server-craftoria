import { $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/me/clefal/lootbeams/duck" {
    export class $PoseCopy {
    }
    export interface $PoseCopy {
        loot_Beams_Refork$copy(): $PoseStack$Pose;
    }
    /**
     * Values that may be interpreted as {@link $PoseCopy}.
     */
    export type $PoseCopy_ = (() => $PoseStack$Pose);
}
