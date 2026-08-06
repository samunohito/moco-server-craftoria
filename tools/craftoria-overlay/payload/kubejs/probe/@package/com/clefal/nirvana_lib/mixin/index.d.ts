import { $RenderType$CompositeState, $RenderType$CompositeRenderType } from "@package/net/minecraft/client/renderer";
import { $VertexFormat$Mode_, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/com/clefal/nirvana_lib/mixin" {
    export class $AccessorRenderType {
        static create(arg0: string, arg1: $VertexFormat, arg2: $VertexFormat$Mode_, arg3: number, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState): $RenderType$CompositeRenderType;
    }
    export interface $AccessorRenderType {
    }
}
