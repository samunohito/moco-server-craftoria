import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnumEntries } from "@package/kotlin/enums";
import { $EntityDimensions, $Entity } from "@package/net/minecraft/world/entity";
import { $TimedoorEntity } from "@package/earth/terrarium/tempad/common/entity";
import { $Object, $Enum } from "@package/java/lang";
import { $ByteCodec } from "@package/com/teamresourceful/bytecodecs/base";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/earth/terrarium/tempad/api/sizing" {
    export class $SizingType$Companion {
        getCodec(): $Codec<$SizingType<never>>;
        getByteCodec(): $ByteCodec<$SizingType<never>>;
        constructor(arg0: $DefaultConstructorMarker);
        get codec(): $Codec<$SizingType<never>>;
        get byteCodec(): $ByteCodec<$SizingType<never>>;
    }
    export class $TimedoorPlacementSettings$Companion {
        getCodec(): $Codec<$TimedoorPlacementSettings>;
        getByteCodec(): $ByteCodec<$TimedoorPlacementSettings>;
        get codec(): $Codec<$TimedoorPlacementSettings>;
        get byteCodec(): $ByteCodec<$TimedoorPlacementSettings>;
    }
    export class $SizingType<T extends $TimedoorPlacementSettings> {
        getId(): $ResourceLocation;
        copy(arg0: $ResourceLocation_, arg1: $ByteCodec<T>, arg2: $MapCodec_<T>): $SizingType<T>;
        static copy$default(arg0: $SizingType<any>, arg1: $ResourceLocation_, arg2: $ByteCodec<any>, arg3: $MapCodec_<any>, arg4: number, arg5: $Object): $SizingType<any>;
        component1(): $ResourceLocation;
        component3(): $MapCodec<T>;
        component2(): $ByteCodec<T>;
        getCodec(): $MapCodec<T>;
        getByteCodec(): $ByteCodec<T>;
        static access$getByteCodec$cp(): $ByteCodec<any>;
        static access$getCodec$cp(): $Codec<any>;
        static Companion: $SizingType$Companion;
        constructor(arg0: $ResourceLocation_, arg1: $ByteCodec<T>, arg2: $MapCodec_<T>);
        get id(): $ResourceLocation;
        get codec(): $MapCodec<T>;
        get byteCodec(): $ByteCodec<T>;
    }
    export class $TimedoorPlacementSettings {
        static Companion: $TimedoorPlacementSettings$Companion;
    }
    export interface $TimedoorPlacementSettings {
        getType(): $SizingType<never>;
        getDimensions(): $EntityDimensions;
        getShowLineAnimation(): boolean;
        isInside(arg0: $TimedoorEntity, arg1: $Entity): boolean;
        depthAtPercent(arg0: number): number;
        placeTimedoor(arg0: $DoorType_, arg1: $Vec3_, arg2: number, arg3: $TimedoorEntity): void;
        widthAtPercent(arg0: number): number;
        heightAtPercent(arg0: number): number;
        get type(): $SizingType<never>;
        get dimensions(): $EntityDimensions;
        get showLineAnimation(): boolean;
    }
    export class $DoorType extends $Enum<$DoorType> {
        static values(): $DoorType[];
        static valueOf(arg0: string): $DoorType;
        static getEntries(): $EnumEntries<$DoorType>;
        static ENTRY: $DoorType;
        static EXIT: $DoorType;
        static get entries(): $EnumEntries<$DoorType>;
    }
    /**
     * Values that may be interpreted as {@link $DoorType}.
     */
    export type $DoorType_ = "entry" | "exit";
}
