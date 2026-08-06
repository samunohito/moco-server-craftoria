import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $MultiblockTier } from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/multiblock/tieredshape";

declare module "@package/net/swedz/extended_industrialization/machines/blockentity/multiblock/teslatower" {
    export class $TeslaTowerTier extends $Record implements $MultiblockTier {
        drain(): number;
        blockId(): $ResourceLocation;
        getTranslationKey(): string;
        maxDistance(): number;
        maxTransfer(): number;
        getDisplayName(): $Component;
        constructor(blockId: $ResourceLocation_, maxTransfer: number, maxDistance: number, drain: number);
        get translationKey(): string;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $TeslaTowerTier}.
     */
    export type $TeslaTowerTier_ = { maxDistance?: number, blockId?: $ResourceLocation_, maxTransfer?: number, drain?: number,  } | [maxDistance?: number, blockId?: $ResourceLocation_, maxTransfer?: number, drain?: number, ];
}
