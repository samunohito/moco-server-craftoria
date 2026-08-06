import { $CommonVertexAttribute } from "@package/org/embeddedt/embeddium/api/vertex/attributes";
import { $VertexFormatElement_ } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/dev/ferriarnus/monocle/embeddiumCompatibility/mixin/entity" {
    export class $CommonVertexAttributeInterface {
        static createAttribute(arg0: string, arg1: number, arg2: $VertexFormatElement_): $CommonVertexAttribute;
    }
    export interface $CommonVertexAttributeInterface {
    }
}
