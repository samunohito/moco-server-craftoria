import { $Codec } from "@package/com/mojang/serialization";
import { $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $MachineColor, $MachineColor_ } from "@package/dev/compactmods/machines/api/machine";
import { $List, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $RoomStructureInfo, $RoomStructureInfo$RoomStructurePlacement_, $RoomDimensions, $RoomDimensions_, $RoomStructureInfo_ } from "@package/dev/compactmods/machines/api/room";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/compactmods/machines/api/room/template" {
    export class $RoomTemplateBuilder {
        build(): $RoomTemplate;
        defaultMachineColor(arg0: $MachineColor_): $RoomTemplateBuilder;
        withFloor(arg0: $BlockState_): $RoomTemplateBuilder;
        addStructure(arg0: $ResourceLocation_, arg1: $RoomStructureInfo$RoomStructurePlacement_): $RoomTemplateBuilder;
        withInternalSizeCubic(arg0: number): $RoomTemplateBuilder;
        withInternalSize(arg0: $RoomDimensions_): $RoomTemplateBuilder;
        withInternalSize(arg0: number, arg1: number, arg2: number): $RoomTemplateBuilder;
    }
    export class $RoomTemplate extends $Record implements $TooltipProvider {
        static builder(): $RoomTemplateBuilder;
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        getBoundariesCenteredAt(arg0: $Vec3_): $AABB;
        structures(): $List<$RoomStructureInfo>;
        defaultMachineColor(): $MachineColor;
        internalDimensions(): $RoomDimensions;
        optionalFloor(): ($BlockState) | undefined;
        getZeroBoundaries(): $AABB;
        static CODEC: $Codec<$RoomTemplate>;
        static NO_TEMPLATE: $ResourceLocation;
        static REGISTRY_KEY: $ResourceKey<$Registry<$RoomTemplate>>;
        static INVALID_TEMPLATE: $RoomTemplate;
        static I18N_STRUCTURE_GEN_TOOLTIP: string;
        static I18N_INTERNAL_ROOM_DIMS: string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RoomTemplate>;
        constructor(arg0: number, arg1: number);
        constructor(internalDimensions: $RoomDimensions_, defaultMachineColor: $MachineColor_, structures: $List_<$RoomStructureInfo_>, optionalFloor: ($BlockState_) | undefined);
        get zeroBoundaries(): $AABB;
    }
    /**
     * Values that may be interpreted as {@link $RoomTemplate}.
     */
    export type $RoomTemplate_ = RegistryTypes.CompactmachinesRoomTemplates | { structures?: $List_<$RoomStructureInfo_>, defaultMachineColor?: $MachineColor_, optionalFloor?: ($BlockState_) | undefined, internalDimensions?: $RoomDimensions_,  } | [structures?: $List_<$RoomStructureInfo_>, defaultMachineColor?: $MachineColor_, optionalFloor?: ($BlockState_) | undefined, internalDimensions?: $RoomDimensions_, ];
    export interface $RoomTemplate extends RegistryMarked<RegistryTypes.CompactmachinesRoomTemplatesTag, RegistryTypes.CompactmachinesRoomTemplates> {}
}
