import { $BiConsumer_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Color } from "@package/io/github/mortuusars/exposure/util/color";
import { $Attachment_, $CameraItem } from "@package/io/github/mortuusars/exposure/world/item/camera";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Runnable_, $Enum, $Record } from "@package/java/lang";
import { $UUID, $UUID_ } from "@package/java/util";
import { $Packet } from "@package/io/github/mortuusars/exposure/network/packet";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as capture from "@package/io/github/mortuusars/exposure/world/camera/capture";
export * as film from "@package/io/github/mortuusars/exposure/world/camera/film";
export * as frame from "@package/io/github/mortuusars/exposure/world/camera/frame";
export * as component from "@package/io/github/mortuusars/exposure/world/camera/component";

declare module "@package/io/github/mortuusars/exposure/world/camera" {
    export class $ColorChannel extends $Enum<$ColorChannel> implements $StringRepresentable {
        static values(): $ColorChannel[];
        static valueOf(name: string): $ColorChannel;
        static fromStringOrDefault(serializedName: string, defaultValue: $ColorChannel_): $ColorChannel;
        getSerializedName(): string;
        getShader(): $ResourceLocation;
        static fromStringOptional(serializedName: string): ($ColorChannel) | undefined;
        static fromFilterStack(stack: $ItemStack_): ($ColorChannel) | undefined;
        getRepresentationColor(): number;
        static fromStringOrThrow(serializedName: string): $ColorChannel;
        getRemappedEnumConstantName(): string;
        static RED: $ColorChannel;
        static CODEC: $Codec<$ColorChannel>;
        static BLUE: $ColorChannel;
        static GREEN: $ColorChannel;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ColorChannel>;
        get serializedName(): string;
        get shader(): $ResourceLocation;
        get representationColor(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ColorChannel}.
     */
    export type $ColorChannel_ = "red" | "green" | "blue";
    export class $CameraId extends $Record {
        matches(stack: $ItemStack_): boolean;
        static create(): $CameraId;
        uuid(): $UUID;
        static ofStack(stack: $ItemStack_): $CameraId;
        static CODEC: $Codec<$CameraId>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CameraId>;
        constructor(uuid: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $CameraId}.
     */
    export type $CameraId_ = { uuid?: $UUID_,  } | [uuid?: $UUID_, ];
    export class $FilmColor extends $Record {
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        constructor(r: number, g: number, b: number, a: number);
    }
    /**
     * Values that may be interpreted as {@link $FilmColor}.
     */
    export type $FilmColor_ = { a?: number, g?: number, b?: number, r?: number,  } | [a?: number, g?: number, b?: number, r?: number, ];
    export class $Camera {
        update(): void;
        isEmpty(): boolean;
        map<T>(map: $Function_<$ItemStack, T>, orElse: T): T;
        map<T>(map: $Function_<$ItemStack, T>): (T) | undefined;
        map<T>(map: $BiFunction_<$CameraItem, $ItemStack, T>): (T) | undefined;
        map<T>(map: $BiFunction_<$CameraItem, $ItemStack, T>, orElse: T): T;
        getId(): $CameraId;
        release(): void;
        isActive(): boolean;
        ifPresent(ifPresent: $BiConsumer_<$CameraItem, $ItemStack>, orElse: $Runnable_): $Camera;
        ifPresent(ifPresent: $BiConsumer_<$CameraItem, $ItemStack>): $Camera;
        inSelfieMode(): boolean;
        idMatches(id: $CameraId_): boolean;
        deactivate(): boolean;
        getItemStack(): $ItemStack;
        createSyncPacket(): $Packet;
        getHolder(): $CameraHolder;
        isShutterOpen(): boolean;
        mapAttachment<T extends $Item, R>(attachment: $Attachment_<T>, func: $BiFunction_<T, $ItemStack, R>): (R) | undefined;
        constructor(holder: $CameraHolder, id: $CameraId_);
        get empty(): boolean;
        get id(): $CameraId;
        get active(): boolean;
        get itemStack(): $ItemStack;
        get holder(): $CameraHolder;
        get shutterOpen(): boolean;
    }
    export class $ExposureType extends $Enum<$ExposureType> implements $StringRepresentable {
        static values(): $ExposureType[];
        static valueOf(name: string): $ExposureType;
        static byName(name: string): ($ExposureType) | undefined;
        getSerializedName(): string;
        getImageColor(): $Color;
        getFilmColor(): $FilmColor;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ExposureType>;
        static COLOR: $ExposureType;
        static BLACK_AND_WHITE: $ExposureType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ExposureType>;
        get serializedName(): string;
        get imageColor(): $Color;
        get filmColor(): $FilmColor;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ExposureType}.
     */
    export type $ExposureType_ = "color" | "black_and_white";
}
