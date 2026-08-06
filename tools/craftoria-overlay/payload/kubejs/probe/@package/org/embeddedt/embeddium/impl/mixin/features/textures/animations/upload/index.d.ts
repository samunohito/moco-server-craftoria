import { $SpriteContents$FrameInfo, $SpriteContents$AnimatedTexture } from "@package/net/minecraft/client/renderer/texture";
import { $List } from "@package/java/util";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/org/embeddedt/embeddium/impl/mixin/features/textures/animations/upload" {
    export class $SpriteContentsAnimatorImplAccessor {
    }
    export interface $SpriteContentsAnimatorImplAccessor {
        getFrameIndex(): number;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getFrameTicks(): number;
        get frameIndex(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
        get frameTicks(): number;
    }
    export class $SpriteContentsAnimationAccessor {
    }
    export interface $SpriteContentsAnimationAccessor {
        getFrameRowSize(): number;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        get frameRowSize(): number;
        get frames(): $List<$SpriteContents$FrameInfo>;
    }
    export class $SpriteContentsAccessor {
    }
    export interface $SpriteContentsAccessor {
        getImages(): $NativeImage[];
        get images(): $NativeImage[];
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAccessor}.
     */
    export type $SpriteContentsAccessor_ = (() => $NativeImage[]);
    export class $SpriteContentsAnimationFrameAccessor {
    }
    export interface $SpriteContentsAnimationFrameAccessor {
        getIndex(): number;
        getTime(): number;
        get index(): number;
        get time(): number;
    }
}
