import { $Color } from "@package/com/teamresourceful/resourcefullib/common/color";
import { $Level } from "@package/net/minecraft/world/level";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Component, $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Object } from "@package/java/lang";
import { $ByteCodec } from "@package/com/teamresourceful/bytecodecs/base";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/earth/terrarium/tempad/api/locations" {
    export class $NamedGlobalVec3$Companion {
        getNowhere(): $NamedGlobalVec3;
        getCODEC(): $MapCodec<$NamedGlobalVec3>;
        getBYTE_CODEC(): $ByteCodec<$NamedGlobalVec3>;
        constructor(arg0: $DefaultConstructorMarker);
        get nowhere(): $NamedGlobalVec3;
        get CODEC(): $MapCodec<$NamedGlobalVec3>;
        get BYTE_CODEC(): $ByteCodec<$NamedGlobalVec3>;
    }
    export class $NamedGlobalVec3 implements $TooltipComponent {
        getName(): $Component;
        copy(arg0: $Component_, arg1: $Vec3_, arg2: $ResourceKey_<$Level>, arg3: number, arg4: $Color): $NamedGlobalVec3;
        getAngle(): number;
        static copy$default(arg0: $NamedGlobalVec3, arg1: $Component_, arg2: $Vec3_, arg3: $ResourceKey_<any>, arg4: number, arg5: $Color, arg6: number, arg7: $Object): $NamedGlobalVec3;
        getZ(): number;
        getX(): number;
        getColor(): $Color;
        component1(): $Component;
        getPos(): $Vec3;
        getDimension(): $ResourceKey<$Level>;
        getY(): number;
        component3(): $ResourceKey<$Level>;
        component5(): $Color;
        component4(): number;
        component2(): $Vec3;
        static access$getCODEC$cp(): $MapCodec<any>;
        static access$getBYTE_CODEC$cp(): $ByteCodec<any>;
        getDimensionText(): $MutableComponent;
        getOffsetLocation(): $Vec3;
        static access$getNowhere$cp(): $NamedGlobalVec3;
        static Companion: $NamedGlobalVec3$Companion;
        constructor(arg0: $Component_, arg1: $Vec3_, arg2: $ResourceKey_<$Level>, arg3: number, arg4: $Color);
        get name(): $Component;
        get angle(): number;
        get z(): number;
        get x(): number;
        get color(): $Color;
        get pos(): $Vec3;
        get dimension(): $ResourceKey<$Level>;
        get y(): number;
        get dimensionText(): $MutableComponent;
        get offsetLocation(): $Vec3;
    }
}
