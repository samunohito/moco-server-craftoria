import { $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/twilightforest/world/components/structures/markerhandler" {
    export interface $TemplateMarkerHandlerType extends RegistryMarked<RegistryTypes.TwilightforestTemplateMarkerHandlerTypeTag, RegistryTypes.TwilightforestTemplateMarkerHandlerType> {}
    export class $TemplateMarkerHandler {
        static parseRange(arg0: string, arg1: $RandomSource, arg2: number, arg3: number): number;
    }
    export interface $TemplateMarkerHandler {
        getType(): $TemplateMarkerHandlerType;
        handleDataMarker(arg0: string, arg1: $BlockPos_, arg2: $WorldGenLevel, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkGenerator, arg6: $Rotation_): boolean;
        get type(): $TemplateMarkerHandlerType;
    }
    /**
     * Values that may be interpreted as {@link $TemplateMarkerHandler}.
     */
    export type $TemplateMarkerHandler_ = RegistryTypes.TwilightTemplateMarkerHandler;
    export interface $TemplateMarkerHandler extends RegistryMarked<RegistryTypes.TwilightTemplateMarkerHandlerTag, RegistryTypes.TwilightTemplateMarkerHandler> {}
    export class $TemplateMarkerHandlerType {
    }
    export interface $TemplateMarkerHandlerType {
        getCodec(): $MapCodec<$TemplateMarkerHandler>;
        get codec(): $MapCodec<$TemplateMarkerHandler>;
    }
    /**
     * Values that may be interpreted as {@link $TemplateMarkerHandlerType}.
     */
    export type $TemplateMarkerHandlerType_ = RegistryTypes.TwilightforestTemplateMarkerHandlerType | (() => $MapCodec_<$TemplateMarkerHandler_>);
}
