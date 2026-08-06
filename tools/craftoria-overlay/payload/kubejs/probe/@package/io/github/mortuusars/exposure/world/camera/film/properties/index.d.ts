import { $ColorPalette } from "@package/io/github/mortuusars/exposure/data";
import { $DitherMode, $DitherMode_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ExposureType, $ExposureType_ } from "@package/io/github/mortuusars/exposure/world/camera";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/film/properties" {
    export class $Levels extends $Record {
        black(): number;
        highlights(): number;
        white(): number;
        shadows(): number;
        midtones(): number;
        static CODEC: $Codec<$Levels>;
        static EMPTY: $Levels;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Levels>;
        constructor(shadows: number, midtones: number, highlights: number, black: number, white: number);
    }
    /**
     * Values that may be interpreted as {@link $Levels}.
     */
    export type $Levels_ = { midtones?: number, black?: number, shadows?: number, white?: number, highlights?: number,  } | [midtones?: number, black?: number, shadows?: number, white?: number, highlights?: number, ];
    export class $HSB extends $Record {
        hue(): number;
        saturation(): number;
        brightness(): number;
        static CODEC: $Codec<$HSB>;
        static EMPTY: $HSB;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $HSB>;
        constructor(hue: number, saturation: number, brightness: number);
    }
    /**
     * Values that may be interpreted as {@link $HSB}.
     */
    export type $HSB_ = { saturation?: number, hue?: number, brightness?: number,  } | [saturation?: number, hue?: number, brightness?: number, ];
    export class $ColorBalance extends $Record {
        b(): number;
        g(): number;
        r(): number;
        static CODEC: $Codec<$ColorBalance>;
        static EMPTY: $ColorBalance;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ColorBalance>;
        constructor(r: number, g: number, b: number);
    }
    /**
     * Values that may be interpreted as {@link $ColorBalance}.
     */
    export type $ColorBalance_ = { r?: number, b?: number, g?: number,  } | [r?: number, b?: number, g?: number, ];
    export class $FilmProperties extends $Record {
        getSize(): number;
        size(): (number) | undefined;
        type(): $ExposureType;
        style(): $FilmStyle;
        withStyle(style: $FilmStyle_): $FilmProperties;
        getColorPalette(access: $RegistryAccess): $Holder<$ColorPalette>;
        withType(type: $ExposureType_): $FilmProperties;
        withSize(size: number): $FilmProperties;
        colorPalette(): $ResourceKey<$ColorPalette>;
        ditherMode(): $DitherMode;
        withDitherMode(ditherMode: $DitherMode_): $FilmProperties;
        withColorPalette(colorPalette: $ResourceKey_<$ColorPalette>): $FilmProperties;
        static CODEC: $Codec<$FilmProperties>;
        static EMPTY: $FilmProperties;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FilmProperties>;
        constructor(type: $ExposureType_, size: (number) | undefined, colorPalette: $ResourceKey_<$ColorPalette>, ditherMode: $DitherMode_, style: $FilmStyle_);
    }
    /**
     * Values that may be interpreted as {@link $FilmProperties}.
     */
    export type $FilmProperties_ = { style?: $FilmStyle_, type?: $ExposureType_, ditherMode?: $DitherMode_, size?: (number) | undefined, colorPalette?: $ResourceKey_<$ColorPalette>,  } | [style?: $FilmStyle_, type?: $ExposureType_, ditherMode?: $DitherMode_, size?: (number) | undefined, colorPalette?: $ResourceKey_<$ColorPalette>, ];
    export class $FilmStyle extends $Record {
        static create(): $FilmStyle;
        levels(): $Levels;
        withNoise(noise: number): $FilmStyle;
        hsb(): $HSB;
        contrast(): number;
        colorBalance(): $ColorBalance;
        withSensitivity(sensitivity: number): $FilmStyle;
        withLevels(levels: $Levels_): $FilmStyle;
        withHSB(hsb: $HSB_): $FilmStyle;
        sensitivity(): number;
        withContrast(contrast: number): $FilmStyle;
        withColorBalance(colorBalance: $ColorBalance_): $FilmStyle;
        noise(): number;
        static CODEC: $Codec<$FilmStyle>;
        static EMPTY: $FilmStyle;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FilmStyle>;
        constructor(sensitivity: number, contrast: number, levels: $Levels_, hsb: $HSB_, colorBalance: $ColorBalance_, noise: number);
    }
    /**
     * Values that may be interpreted as {@link $FilmStyle}.
     */
    export type $FilmStyle_ = { noise?: number, levels?: $Levels_, sensitivity?: number, hsb?: $HSB_, contrast?: number, colorBalance?: $ColorBalance_,  } | [noise?: number, levels?: $Levels_, sensitivity?: number, hsb?: $HSB_, contrast?: number, colorBalance?: $ColorBalance_, ];
}
