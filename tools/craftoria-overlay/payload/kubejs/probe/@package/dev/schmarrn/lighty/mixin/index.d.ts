import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/dev/schmarrn/lighty/mixin" {
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        getConfusionAnimationTick(): number;
        callBobHurt(arg0: $PoseStack, arg1: number): void;
        callBobView(arg0: $PoseStack, arg1: number): void;
        get confusionAnimationTick(): number;
    }
}
