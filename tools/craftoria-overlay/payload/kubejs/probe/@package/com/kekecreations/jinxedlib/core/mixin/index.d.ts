import { $WoodType_, $WoodType } from "@package/net/minecraft/world/level/block/state/properties";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SpriteSource, $SpriteSourceType } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $ClampedItemPropertyFunction_ } from "@package/net/minecraft/client/renderer/item";

declare module "@package/com/kekecreations/jinxedlib/core/mixin" {
    export class $ItemPropertiesInvoker {
        static invokeRegister(arg0: $Item_, arg1: $ResourceLocation_, arg2: $ClampedItemPropertyFunction_): void;
    }
    export interface $ItemPropertiesInvoker {
    }
    export class $SpriteSourcesInvoker {
        static invokeRegister(arg0: string, arg1: $MapCodec_<$SpriteSource>): $SpriteSourceType;
    }
    export interface $SpriteSourcesInvoker {
    }
    export class $WoodTypeInvoker {
        static invokeRegister(arg0: $WoodType_): $WoodType;
    }
    export interface $WoodTypeInvoker {
    }
}
