import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/compactmods/machines/api/machine" {
    export class $MachineColor extends $Record {
        red(): number;
        rgb(): number;
        green(): number;
        blue(): number;
        static fromARGB(arg0: number): $MachineColor;
        static fromDyeColor(arg0: $DyeColor_): $MachineColor;
        static CODEC: $Codec<$MachineColor>;
        static HEX_CODEC: $Codec<$MachineColor>;
        static INT_CODEC: $Codec<$MachineColor>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MachineColor>;
        constructor(red: number, green: number, blue: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineColor}.
     */
    export type $MachineColor_ = { blue?: number, red?: number, green?: number,  } | [blue?: number, red?: number, green?: number, ];
}
