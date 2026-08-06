
declare module "@package/me/desht/modularrouters/client/util" {
    export class $TintColor {
        getRGB(): number;
        static HSBtoRGB(arg0: number, arg1: number, arg2: number): number;
        darker(): $TintColor;
        static RGBtoHSB(arg0: number, arg1: number, arg2: number, arg3: number[]): number[];
        static getHSBColor(arg0: number, arg1: number, arg2: number): $TintColor;
        getRed(): number;
        getAlpha(): number;
        getBlue(): number;
        getGreen(): number;
        static WHITE: $TintColor;
        static BLACK: $TintColor;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get RGB(): number;
        get red(): number;
        get alpha(): number;
        get blue(): number;
        get green(): number;
    }
}
