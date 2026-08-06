import { $Params } from "@package/net/tysontheember/emberstextapi/immersivemessages/effects/params";
import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $TypewriterTrack, $ObfuscateTrack } from "@package/net/tysontheember/emberstextapi/immersivemessages/effects/animation";
export * as animation from "@package/net/tysontheember/emberstextapi/immersivemessages/effects/animation";
export * as params from "@package/net/tysontheember/emberstextapi/immersivemessages/effects/params";

declare module "@package/net/tysontheember/emberstextapi/immersivemessages/effects" {
    export class $Effect {
        static create(arg0: string, arg1: $Params): $Effect;
    }
    export interface $Effect {
        getName(): string;
        apply(arg0: $EffectSettings): void;
        serialize(): string;
        get name(): string;
    }
    export class $EffectSettings {
        reset(): void;
        copy(): $EffectSettings;
        getSiblings(): $List<$EffectSettings>;
        addSibling(arg0: $EffectSettings): void;
        getSiblingsOrEmpty(): $List<$EffectSettings>;
        hasSiblings(): boolean;
        getPackedColor(): number;
        clampColors(): void;
        siblings: $List<$EffectSettings>;
        codepoint: number;
        static DEFAULT_SCALE: number;
        scale: number;
        obfuscateStableKey: $Object;
        useRandomGlyph: boolean;
        rot: number;
        shadowOffset: number;
        maskTop: number;
        a: number;
        b: number;
        obfuscateTrack: $ObfuscateTrack;
        g: number;
        typewriterTrack: $TypewriterTrack;
        index: number;
        obfuscateSpanLength: number;
        obfuscateSpanStart: number;
        maskBottom: number;
        static DEFAULT_SHADOW_OFFSET: number;
        r: number;
        x: number;
        y: number;
        typewriterIndex: number;
        isShadow: boolean;
        obfuscateKey: $Object;
        absoluteIndex: number;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean);
        get siblingsOrEmpty(): $List<$EffectSettings>;
        get packedColor(): number;
    }
}
