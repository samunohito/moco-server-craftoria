import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $CTType, $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/fr/iglee42/createcasing/kubejs/wrappers" {
    export class $KJSCTTypeWrapper {
        static getCtType(arg0: $ResourceLocation_): $CTType;
        static VERTICAL: $CTType;
        static HORIZONTAL: $CTType;
        static OMNIDIRECTIONAL: $CTType;
    }
    export interface $KJSCTTypeWrapper {
    }
    export class $KJSSpriteShiftWrapper {
        static get(arg0: string, arg1: string): $SpriteShiftEntry;
        static omni(arg0: $ResourceLocation_): $CTSpriteShiftEntry;
        static getCT(arg0: $CTType, arg1: $ResourceLocation_): $CTSpriteShiftEntry;
        static getCT(arg0: $CTType, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $CTSpriteShiftEntry;
        static horizontal(arg0: $ResourceLocation_): $CTSpriteShiftEntry;
        static vertical(arg0: $ResourceLocation_): $CTSpriteShiftEntry;
        static getFromCreate(arg0: string): $SpriteShiftEntry;
        static getFromCreate(arg0: string, arg1: string): $SpriteShiftEntry;
    }
    export interface $KJSSpriteShiftWrapper {
    }
}
