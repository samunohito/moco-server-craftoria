import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $EnumMap } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/portingdeadmods/cable_facades/data" {
    export class $FacadeData extends $Record {
        facadeType(): $ResourceLocation;
        hasFace(arg0: $Direction_): boolean;
        getFace(arg0: $Direction_): $BlockState;
        isFullBlock(): boolean;
        isDirectional(): boolean;
        getFullBlock(): $BlockState;
        static directional(arg0: $ResourceLocation_, arg1: $EnumMap<$Direction_, $BlockState_>): $FacadeData;
        static directional(arg0: $EnumMap<$Direction_, $BlockState_>): $FacadeData;
        static directional(arg0: $Direction_, arg1: $BlockState_): $FacadeData;
        directional(): $EnumMap<$Direction, $BlockState>;
        static directional(arg0: $ResourceLocation_, arg1: $Direction_, arg2: $BlockState_): $FacadeData;
        static fullBlock(arg0: $ResourceLocation_, arg1: $BlockState_): $FacadeData;
        fullBlock(): $BlockState;
        static fullBlock(arg0: $BlockState_): $FacadeData;
        withFace(arg0: $Direction_, arg1: $BlockState_): $FacadeData;
        withoutFace(arg0: $Direction_): $FacadeData;
        static CODEC: $Codec<$FacadeData>;
        static MIGRATION_CODEC: $Codec<$FacadeData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FacadeData>;
        constructor(arg0: $BlockState_, arg1: $EnumMap<$Direction_, $BlockState_>);
        constructor(facadeType: $ResourceLocation_, fullBlock: $BlockState_, directional: $EnumMap<$Direction_, $BlockState_>);
    }
    /**
     * Values that may be interpreted as {@link $FacadeData}.
     */
    export type $FacadeData_ = { fullBlock?: $BlockState_, facadeType?: $ResourceLocation_, directional?: $EnumMap<$Direction_, $BlockState_>,  } | [fullBlock?: $BlockState_, facadeType?: $ResourceLocation_, directional?: $EnumMap<$Direction_, $BlockState_>, ];
}
