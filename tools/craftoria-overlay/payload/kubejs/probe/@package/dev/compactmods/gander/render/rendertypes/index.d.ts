import { $RenderType$CompositeState, $RenderType } from "@package/net/minecraft/client/renderer";
import { $TranslucentRenderTargetLayer } from "@package/dev/compactmods/gander/render/translucency";

declare module "@package/dev/compactmods/gander/render/rendertypes" {
    export class $GanderCompositeRenderType {
        static of(arg0: $RenderType): $GanderCompositeRenderType;
    }
    export interface $GanderCompositeRenderType {
        state(): $RenderType$CompositeState;
        targetingTranslucentRenderTarget(arg0: $TranslucentRenderTargetLayer, arg1: $TranslucentRenderTargetLayer): $RenderType;
    }
}
