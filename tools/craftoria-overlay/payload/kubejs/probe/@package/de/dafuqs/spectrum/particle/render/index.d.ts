import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Camera } from "@package/net/minecraft/client";

declare module "@package/de/dafuqs/spectrum/particle/render" {
    export class $ExtendedParticleManager {
    }
    export interface $ExtendedParticleManager {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedParticleManager}.
     */
    export type $ExtendedParticleManager_ = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: $Camera, arg3: number) => void);
}
