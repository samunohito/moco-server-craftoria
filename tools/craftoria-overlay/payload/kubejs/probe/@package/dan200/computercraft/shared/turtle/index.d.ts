import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dan200/computercraft/shared/turtle" {
    export class $TurtleOverlay extends $Record {
        model(): $ResourceLocation;
        static showElfOverlay(arg0: $TurtleOverlay_, arg1: boolean): boolean;
        showElfOverlay(): boolean;
        static CODEC: $Codec<$Holder<$TurtleOverlay>>;
        static ELF_MODEL: $ResourceLocation;
        static DIRECT_CODEC: $Codec<$TurtleOverlay>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TurtleOverlay>>;
        static REGISTRY: $ResourceKey<$Registry<$TurtleOverlay>>;
        constructor(model: $ResourceLocation_, showElfOverlay: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TurtleOverlay}.
     */
    export type $TurtleOverlay_ = RegistryTypes.ComputercraftTurtleOverlay | { showElfOverlay?: boolean, model?: $ResourceLocation_,  } | [showElfOverlay?: boolean, model?: $ResourceLocation_, ];
    export interface $TurtleOverlay extends RegistryMarked<RegistryTypes.ComputercraftTurtleOverlayTag, RegistryTypes.ComputercraftTurtleOverlay> {}
}
