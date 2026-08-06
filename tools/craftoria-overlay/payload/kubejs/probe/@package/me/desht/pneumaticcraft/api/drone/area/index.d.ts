import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/me/desht/pneumaticcraft/api/drone/area" {
    export class $AreaTypeWidget {
        getDisplayName(): $Component;
        getTranslationKey(): string;
        constructor(arg0: string);
        get displayName(): $Component;
        get translationKey(): string;
    }
    export interface $AreaTypeSerializer<A> extends RegistryMarked<RegistryTypes.PneumaticcraftProgWidgetAreaTypesTag, RegistryTypes.PneumaticcraftProgWidgetAreaTypes> {}
    export class $EnumOldAreaType extends $Enum<$EnumOldAreaType> {
        static values(): $EnumOldAreaType[];
        static valueOf(arg0: string): $EnumOldAreaType;
        static byName(arg0: string): $EnumOldAreaType;
        static X_PYRAMID: $EnumOldAreaType;
        static WALL: $EnumOldAreaType;
        static FILL: $EnumOldAreaType;
        static Y_PYRAMID: $EnumOldAreaType;
        utilizesTypeInfo: boolean;
        static SPHERE: $EnumOldAreaType;
        static RANDOM: $EnumOldAreaType;
        static GRID: $EnumOldAreaType;
        static X_CYLINDER: $EnumOldAreaType;
        static FRAME: $EnumOldAreaType;
        static Y_WALL: $EnumOldAreaType;
        static Z_CYLINDER: $EnumOldAreaType;
        static LINE: $EnumOldAreaType;
        static Z_WALL: $EnumOldAreaType;
        static Z_PYRAMID: $EnumOldAreaType;
        static X_WALL: $EnumOldAreaType;
        static Y_CYLINDER: $EnumOldAreaType;
    }
    /**
     * Values that may be interpreted as {@link $EnumOldAreaType}.
     */
    export type $EnumOldAreaType_ = "fill" | "frame" | "wall" | "sphere" | "line" | "x_wall" | "y_wall" | "z_wall" | "x_cylinder" | "y_cylinder" | "z_cylinder" | "x_pyramid" | "y_pyramid" | "z_pyramid" | "grid" | "random";
    export class $AreaType {
        getName(): string;
        copy(): $AreaType;
        addArea(arg0: $Consumer_<$BlockPos>, arg1: $BlockPos_, arg2: $BlockPos_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getSerializer(): $AreaTypeSerializer<$AreaType>;
        getTranslationKey(): string;
        isDeterministic(): boolean;
        addUIWidgets(arg0: $List_<$AreaTypeWidget>): void;
        convertFromLegacy(arg0: $EnumOldAreaType_, arg1: number): void;
        static CODEC: $Codec<$AreaType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AreaType>;
        constructor(arg0: string);
        get name(): string;
        get serializer(): $AreaTypeSerializer<$AreaType>;
        get translationKey(): string;
        get deterministic(): boolean;
    }
    export class $AreaTypeSerializer<A extends $AreaType> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, A>;
        static createType<A extends $AreaType>(arg0: $Supplier_<A>, arg1: $MapCodec_<A>, arg2: $StreamCodec_<$RegistryFriendlyByteBuf, A>): $AreaTypeSerializer<A>;
        codec(): $MapCodec<A>;
        createDefaultInstance(): A;
        constructor(arg0: $Supplier_<A>, arg1: $MapCodec_<A>, arg2: $StreamCodec_<$RegistryFriendlyByteBuf, A>);
    }
    /**
     * Values that may be interpreted as {@link $AreaTypeSerializer}.
     */
    export type $AreaTypeSerializer_<A> = RegistryTypes.PneumaticcraftProgWidgetAreaTypes;
}
