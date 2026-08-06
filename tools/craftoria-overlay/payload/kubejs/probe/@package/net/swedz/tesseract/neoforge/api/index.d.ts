import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/swedz/tesseract/neoforge/api" {
    export class $WorldPos extends $Record {
        pos(): $BlockPos;
        isLoaded(): boolean;
        level(): $ServerLevel;
        getZ(): number;
        getX(): number;
        dimension(): $ResourceKey<$Level>;
        isTicking(): boolean;
        getY(): number;
        distanceSqr(arg0: $WorldPos_): number;
        isSameDimension(arg0: $WorldPos_): boolean;
        static CODEC: $Codec<$WorldPos>;
        static MAP_CODEC: $MapCodec<$WorldPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WorldPos>;
        constructor(dimension: $ResourceKey_<$Level>, pos: $BlockPos_);
        constructor(arg0: $Level_, arg1: $BlockPos_);
        get loaded(): boolean;
        get z(): number;
        get x(): number;
        get ticking(): boolean;
        get y(): number;
    }
    /**
     * Values that may be interpreted as {@link $WorldPos}.
     */
    export type $WorldPos_ = { pos?: $BlockPos_, dimension?: $ResourceKey_<$Level>,  } | [pos?: $BlockPos_, dimension?: $ResourceKey_<$Level>, ];
}
