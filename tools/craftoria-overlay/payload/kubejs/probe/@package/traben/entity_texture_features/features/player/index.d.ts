import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $ETFTexture } from "@package/traben/entity_texture_features/features/texture_handlers";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $ETFConfigScreenSkinTool$NoseType } from "@package/traben/entity_texture_features/config/screens/skin";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PlayerModelPart_, $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/traben/entity_texture_features/features/player" {
    export class $ETFPlayerTexture {
        changeSkinToThisForTool(image: $NativeImage): void;
        getOriginal(): $ResourceLocation;
        getBaseTextureIdentifierOrNullForVanilla(player: $ETFEntityRenderState): $ResourceLocation;
        getBaseTextureIdentifierOrNullForVanilla(player: $Player): $ResourceLocation;
        getBaseTextureEmissiveIdentifierOrNullForNone(): $ResourceLocation;
        getBaseHeadTextureIdentifierOrNullForVanilla(): $ResourceLocation;
        canUseFeaturesForThisPlayer(): boolean;
        checkTexture(skipSkinLoad: boolean): void;
        isCorrectObjectForThisSkin(check: $ResourceLocation_): boolean;
        static getSkinPixelColourToNumber(color: number): number;
        static getSkinNumberToPixelColour(color: number): number;
        texturedNoseIdentifierEnchanted: $ResourceLocation;
        etfTextureOfFinalBaseSkin: $ETFTexture;
        coatStyle: number;
        baseEnchantBlinkIdentifier: $ResourceLocation;
        noseType: $ETFConfigScreenSkinTool$NoseType;
        hasVillagerNose: boolean;
        static SKIN_NAMESPACE: string;
        baseEnchantIdentifier: $ResourceLocation;
        hasEnchant: boolean;
        coatLength: number;
        blinkHeight: number;
        wasForcedSolid: boolean;
        hasFeatures: boolean;
        blinkType: number;
        hasEmissives: boolean;
        static clientPlayerOriginalSkinImageForTool: $NativeImage;
        texturedNoseIdentifierEmissive: $ResourceLocation;
        shouldRetryOnFail: boolean;
        static remappingETFSkin: boolean;
        texturedNoseIdentifier: $ResourceLocation;
        baseEnchantBlink2Identifier: $ResourceLocation;
        player: $ETFPlayerEntity;
        constructor(player: $ETFPlayerEntity, rendererGivenSkin: $ResourceLocation_);
        constructor();
        get original(): $ResourceLocation;
        get baseTextureEmissiveIdentifierOrNullForNone(): $ResourceLocation;
        get baseHeadTextureIdentifierOrNullForVanilla(): $ResourceLocation;
    }
    export class $ETFPlayerSkinHolder {
    }
    export interface $ETFPlayerSkinHolder {
        etf$getETFPlayerTexture(): $ETFPlayerTexture;
    }
    /**
     * Values that may be interpreted as {@link $ETFPlayerSkinHolder}.
     */
    export type $ETFPlayerSkinHolder_ = (() => $ETFPlayerTexture);
    export class $ETFPlayerEntity {
    }
    export interface $ETFPlayerEntity extends $ETFEntity {
        etf$getUuidAsString(): string;
        etf$getInventory(): $Inventory;
        etf$isTeammate(arg0: $Player): boolean;
        etf$getEntity(): $Entity;
        etf$getName(): $Component;
        /**
         * @deprecated
         */
        etf$isPartVisible(arg0: $PlayerModelPart_): boolean;
    }
}
