import { $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/me/clefal/lootbeams/mixin" {
    export class $PoseInvoker {
        static createPose(arg0: $PoseStack$Pose): $PoseStack$Pose;
    }
    export interface $PoseInvoker {
    }
}
