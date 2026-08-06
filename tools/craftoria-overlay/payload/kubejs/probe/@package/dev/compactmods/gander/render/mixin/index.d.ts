import { $GlStateManager$TextureState } from "@package/com/mojang/blaze3d/platform";

declare module "@package/dev/compactmods/gander/render/mixin" {
    export class $GlStateManagerAccessor {
        static getTEXTURES(): $GlStateManager$TextureState[];
        static getActiveTexture(): number;
        static get TEXTURES(): $GlStateManager$TextureState[];
        static get activeTexture(): number;
    }
    export interface $GlStateManagerAccessor {
    }
}
