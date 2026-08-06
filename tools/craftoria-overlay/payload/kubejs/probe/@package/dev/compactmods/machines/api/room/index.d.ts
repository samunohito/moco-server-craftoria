import { $Level } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MachineColor, $MachineColor_ } from "@package/dev/compactmods/machines/api/machine";
import { $IForwardingAttachmentHolder } from "@package/dev/compactmods/machines/api/attachment";
import { $IRoomBoundaries, $IRoomBoundaries_ } from "@package/dev/compactmods/machines/api/room/spatial";
import { $CompactRoomCapability } from "@package/dev/compactmods/machines/api/room/capability";
import { $StringRepresentable$StringRepresentableCodec, $StringRepresentable } from "@package/net/minecraft/util";
import { $AttachmentType, $AttachmentType_, $IAttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as upgrade from "@package/dev/compactmods/machines/api/room/upgrade";
export * as template from "@package/dev/compactmods/machines/api/room/template";
export * as spatial from "@package/dev/compactmods/machines/api/room/spatial";
export * as capability from "@package/dev/compactmods/machines/api/room/capability";

declare module "@package/dev/compactmods/machines/api/room" {
    export class $RoomStructureInfo extends $Record {
        template(): $ResourceLocation;
        placement(): $RoomStructureInfo$RoomStructurePlacement;
        static CODEC: $Codec<$RoomStructureInfo>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $RoomStructureInfo>;
        constructor(template: $ResourceLocation_, placement: $RoomStructureInfo$RoomStructurePlacement_);
    }
    /**
     * Values that may be interpreted as {@link $RoomStructureInfo}.
     */
    export type $RoomStructureInfo_ = { template?: $ResourceLocation_, placement?: $RoomStructureInfo$RoomStructurePlacement_,  } | [template?: $ResourceLocation_, placement?: $RoomStructureInfo$RoomStructurePlacement_, ];
    export class $RoomStructureInfo$RoomStructurePlacement extends $Enum<$RoomStructureInfo$RoomStructurePlacement> implements $StringRepresentable {
        static values(): $RoomStructureInfo$RoomStructurePlacement[];
        static valueOf(arg0: string): $RoomStructureInfo$RoomStructurePlacement;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTERED_FLOOR: $RoomStructureInfo$RoomStructurePlacement;
        static CENTERED: $RoomStructureInfo$RoomStructurePlacement;
        static CODEC: $StringRepresentable$StringRepresentableCodec<$RoomStructureInfo$RoomStructurePlacement>;
        static CENTERED_CEILING: $RoomStructureInfo$RoomStructurePlacement;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RoomStructureInfo$RoomStructurePlacement}.
     */
    export type $RoomStructureInfo$RoomStructurePlacement_ = "centered_ceiling" | "centered" | "centered_floor";
    export class $RoomInstance extends $Record implements $IForwardingAttachmentHolder {
        code(): string;
        level(): $ServerLevel;
        server(): $MinecraftServer;
        getCapability<T, C>(arg0: $CompactRoomCapability<T, C>): T;
        getCapability<T, C>(arg0: $CompactRoomCapability<T, C>, arg1: C): T;
        levelKey(): $ResourceKey<$Level>;
        defaultMachineColor(): $MachineColor;
        attachmentHolder(): $Supplier<$IAttachmentHolder>;
        boundaries(): $IRoomBoundaries;
        getData<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        hasData(arg0: $AttachmentType_<never>): boolean;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        hasAttachments(): boolean;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        syncData(arg0: $AttachmentType_<never>): void;
        constructor(server: $MinecraftServer, levelKey: $ResourceKey_<$Level>, code: string, defaultMachineColor: $MachineColor_, boundaries: $IRoomBoundaries_);
    }
    /**
     * Values that may be interpreted as {@link $RoomInstance}.
     */
    export type $RoomInstance_ = { code?: string, levelKey?: $ResourceKey_<$Level>, server?: $MinecraftServer, boundaries?: $IRoomBoundaries_, defaultMachineColor?: $MachineColor_,  } | [code?: string, levelKey?: $ResourceKey_<$Level>, server?: $MinecraftServer, boundaries?: $IRoomBoundaries_, defaultMachineColor?: $MachineColor_, ];
    export class $RoomDimensions extends $Record {
        depth(): number;
        width(): number;
        height(): number;
        static cubic(arg0: number): $RoomDimensions;
        static CODEC: $Codec<$RoomDimensions>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RoomDimensions>;
        constructor(arg0: number);
        constructor(width: number, depth: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $RoomDimensions}.
     */
    export type $RoomDimensions_ = { height?: number, depth?: number, width?: number,  } | [height?: number, depth?: number, width?: number, ];
}
