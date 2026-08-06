import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/machines/blockentities/multiblocks" {
    export class $ElectricBlastFurnaceBlockEntity$Tier extends $Record {
        getDisplayName(): $Component;
        maxBaseEu(): number;
        getTranslationKey(): string;
        englishName(): string;
        coilBlockId(): $ResourceLocation;
        constructor(coilBlockId: $ResourceLocation_, maxBaseEu: number, englishName: string);
        get displayName(): $Component;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ElectricBlastFurnaceBlockEntity$Tier}.
     */
    export type $ElectricBlastFurnaceBlockEntity$Tier_ = { coilBlockId?: $ResourceLocation_, maxBaseEu?: number, englishName?: string,  } | [coilBlockId?: $ResourceLocation_, maxBaseEu?: number, englishName?: string, ];
}
