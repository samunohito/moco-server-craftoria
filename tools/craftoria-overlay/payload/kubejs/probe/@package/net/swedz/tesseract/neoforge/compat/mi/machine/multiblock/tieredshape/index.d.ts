import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/machine/multiblock/tieredshape" {
    export class $MultiblockTier {
    }
    export interface $MultiblockTier {
        getDisplayName(): $Component;
        blockId(): $ResourceLocation;
        getTranslationKey(): string;
        get displayName(): $Component;
        get translationKey(): string;
    }
}
