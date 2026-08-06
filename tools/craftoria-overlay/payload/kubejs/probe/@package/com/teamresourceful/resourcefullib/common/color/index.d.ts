import { $Consumer_ } from "@package/java/util/function";
import { $Dynamic, $Codec, $DataResult } from "@package/com/mojang/serialization";
import { $TextColor, $Style } from "@package/net/minecraft/network/chat";
import { $ByteCodec } from "@package/com/teamresourceful/bytecodecs/base";

declare module "@package/com/teamresourceful/resourcefullib/common/color" {
    export class $Color {
        isDefault(): boolean;
        getValue(): number;
        static parse(color: string): $Color;
        getTextColor(): $TextColor;
        static tryParse(color: string): $Color;
        /**
         * @deprecated
         */
        isRainbow(): boolean;
        getIntRed(): number;
        getAsStyle(): $Style;
        getIntBlue(): number;
        isSpecial(): boolean;
        static parseColor(color: string): number;
        getRGBComponents(compArray: number[]): number[];
        getFloatGreen(): number;
        getFloatBlue(): number;
        getFloatRed(): number;
        getFloatAlpha(): number;
        getIntGreen(): number;
        getIntAlpha(): number;
        static decodeColor(dynamic: $Dynamic<never>): $DataResult<$Color>;
        /**
         * @deprecated
         */
        static initRainbow(): void;
        static createPulsingColor(name: string, startingValue: number, editorConsumer: $Consumer_<$MutableColor>): $Color;
        static createNamedColor(name: string, value: number): $Color;
        withAlpha(alpha: number): $Color;
        static CODEC: $Codec<$Color>;
        static BYTE_CODEC: $ByteCodec<$Color>;
        static RAINBOW: $Color;
        static DEFAULT: $Color;
        static RGB_CODEC: $Codec<$Color>;
        constructor(value: number);
        constructor(r: number, g: number, b: number, a: number);
        get default(): boolean;
        get value(): number;
        get textColor(): $TextColor;
        get rainbow(): boolean;
        get intRed(): number;
        get asStyle(): $Style;
        get intBlue(): number;
        get special(): boolean;
        get floatGreen(): number;
        get floatBlue(): number;
        get floatRed(): number;
        get floatAlpha(): number;
        get intGreen(): number;
        get intAlpha(): number;
    }
    export class $MutableColor extends $Color {
        setRed(r: number): void;
        setGreen(g: number): void;
        setBlue(b: number): void;
        static CODEC: $Codec<$Color>;
        static BYTE_CODEC: $ByteCodec<$Color>;
        static RAINBOW: $Color;
        static DEFAULT: $Color;
        static RGB_CODEC: $Codec<$Color>;
        set red(value: number);
        set green(value: number);
        set blue(value: number);
    }
}
