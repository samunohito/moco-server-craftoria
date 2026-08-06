import { $IntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/klikli_dev/occultism/api/common/data" {
    export class $WorkAreaSize extends $Enum<$WorkAreaSize> implements $StringRepresentable {
        static get(arg0: string): $WorkAreaSize;
        static get(arg0: number): $WorkAreaSize;
        equals(arg0: number): boolean;
        static values(): $WorkAreaSize[];
        static valueOf(arg0: string): $WorkAreaSize;
        getValue(): number;
        next(): $WorkAreaSize;
        getDescriptionId(): string;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SMALL: $WorkAreaSize;
        static CODEC: $Codec<$WorkAreaSize>;
        static MEDIUM: $WorkAreaSize;
        static LARGE: $WorkAreaSize;
        static BY_ID: $IntFunction<$WorkAreaSize>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WorkAreaSize>;
        get value(): number;
        get descriptionId(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WorkAreaSize}.
     */
    export type $WorkAreaSize_ = "enum.occultism.work_area_size.small" | "enum.occultism.work_area_size.medium" | "enum.occultism.work_area_size.large";
}
