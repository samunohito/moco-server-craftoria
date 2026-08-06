import { $InputStream } from "@package/java/io";
import { $ChunkPos, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Comparable, $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $BufferedImage } from "@package/java/awt/image";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftblibrary/math" {
    export class $PixelBuffer {
        fill(col: number): void;
        fill(startX: number, startY: number, w: number, h: number, col: number): void;
        static from(stream: $InputStream): $PixelBuffer;
        static from(img: $BufferedImage): $PixelBuffer;
        copy(): $PixelBuffer;
        getWidth(): number;
        getHeight(): number;
        getRGB(startX: number, startY: number, w: number, h: number, p: number[]): number[];
        getRGB(x: number, y: number): number;
        getPixels(): number[];
        setPixels(p: number[]): void;
        setRGB(startX: number, startY: number, w: number, h: number, rgbArray: number[]): void;
        setRGB(startX: number, startY: number, buffer: $PixelBuffer): void;
        setRGB(x: number, y: number, col: number): void;
        getSubimage(x: number, y: number, w: number, h: number): $PixelBuffer;
        toImage(type: number): $BufferedImage;
        toByteBuffer(alpha: boolean): $ByteBuffer;
        constructor(w: number, h: number);
        get width(): number;
        get height(): number;
    }
    export class $ChunkDimPos extends $Record implements $Comparable<$ChunkDimPos> {
        compareTo(o: $ChunkDimPos_): number;
        offset(ox: number, oz: number): $ChunkDimPos;
        x(): number;
        z(): number;
        dimension(): $ResourceKey<$Level>;
        chunkPos(): $ChunkPos;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ChunkDimPos>;
        constructor(dimension: $ResourceKey_<$Level>, chunkPos: $ChunkPos);
        constructor(entity: $Entity);
        constructor(world: $Level_, pos: $BlockPos_);
        constructor(dim: $ResourceKey_<$Level>, x: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkDimPos}.
     */
    export type $ChunkDimPos_ = { chunkPos?: $ChunkPos, dimension?: $ResourceKey_<$Level>,  } | [chunkPos?: $ChunkPos, dimension?: $ResourceKey_<$Level>, ];
}
