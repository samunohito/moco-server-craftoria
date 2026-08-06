import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/io/github/jamalam360/jamlib/client/mixinsupport" {
    export class $MutableSpriteImageWidget$Sprite {
    }
    export interface $MutableSpriteImageWidget$Sprite {
        setSprite(arg0: $ResourceLocation_): void;
        set sprite(value: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $MutableSpriteImageWidget$Sprite}.
     */
    export type $MutableSpriteImageWidget$Sprite_ = ((arg0: $ResourceLocation) => void);
}
