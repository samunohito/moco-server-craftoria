import { $VertexFormatElement_ } from "@package/com/mojang/blaze3d/vertex";
import { $CommonVertexAttributeInterface } from "@package/dev/ferriarnus/monocle/embeddiumCompatibility/mixin/entity";
import { $Enum } from "@package/java/lang";

declare module "@package/org/embeddedt/embeddium/api/vertex/attributes" {
    export class $CommonVertexAttribute extends $Enum<$CommonVertexAttribute> implements $CommonVertexAttributeInterface {
        static values(): $CommonVertexAttribute[];
        static valueOf(arg0: string): $CommonVertexAttribute;
        static createAttribute$monocle_$md$f87c94$0(arg0: string, arg1: number, arg2: $VertexFormatElement_): $CommonVertexAttribute;
        getByteLength(): number;
        static getCommonType(arg0: $VertexFormatElement_): $CommonVertexAttribute;
        static POSITION: $CommonVertexAttribute;
        static TEXTURE: $CommonVertexAttribute;
        static COLOR: $CommonVertexAttribute;
        static LIGHT: $CommonVertexAttribute;
        static COUNT: number;
        static NORMAL: $CommonVertexAttribute;
        static OVERLAY: $CommonVertexAttribute;
        get byteLength(): number;
    }
    /**
     * Values that may be interpreted as {@link $CommonVertexAttribute}.
     */
    export type $CommonVertexAttribute_ = "position" | "color" | "texture" | "overlay" | "light" | "normal" | "tangent" | "mid_tex_coord" | "block_id" | "entity_id" | "mid_block";
}
