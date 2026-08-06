import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $SpriteSource, $SpriteSourceType } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $PotDecorations, $PotDecorations_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/kekecreations/arts_and_crafts/core/mixin" {
    export class $DecoratedPotBlockEntityAccessor {
    }
    export interface $DecoratedPotBlockEntityAccessor {
        setDecorations(arg0: $PotDecorations_): void;
        set decorations(value: $PotDecorations_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntityAccessor}.
     */
    export type $DecoratedPotBlockEntityAccessor_ = ((arg0: $PotDecorations) => void);
    export class $SpriteSourcesMixin {
        static invokeRegister(arg0: string, arg1: $MapCodec_<$SpriteSource>): $SpriteSourceType;
    }
    export interface $SpriteSourcesMixin {
    }
}
