import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/de/dafuqs/spectrum/entity/variants" {
    export interface $KindlingVariant extends RegistryMarked<RegistryTypes.SpectrumKindlingVariantTag, RegistryTypes.SpectrumKindlingVariant> {}
    export interface $LizardHornVariant extends RegistryMarked<RegistryTypes.SpectrumLizardHornVariantTag, RegistryTypes.SpectrumLizardHornVariant> {}
    export class $KindlingVariant {
        getAngryClippedTexture(): $ResourceLocation;
        getBlinkingClippedTexture(): $ResourceLocation;
        getDefaultTexture(): $ResourceLocation;
        getBlinkingTexture(): $ResourceLocation;
        getClippedTexture(): $ResourceLocation;
        getAngryTexture(): $ResourceLocation;
        getClippingLootTable(): $ResourceKey<$LootTable>;
        static CODEC: $Codec<$Holder<$KindlingVariant>>;
        static DIRECT_CODEC: $Codec<$KindlingVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KindlingVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$KindlingVariant>>;
        static DEFAULT: $ResourceKey<$KindlingVariant>;
        get angryClippedTexture(): $ResourceLocation;
        get blinkingClippedTexture(): $ResourceLocation;
        get defaultTexture(): $ResourceLocation;
        get blinkingTexture(): $ResourceLocation;
        get clippedTexture(): $ResourceLocation;
        get angryTexture(): $ResourceLocation;
        get clippingLootTable(): $ResourceKey<$LootTable>;
    }
    /**
     * Values that may be interpreted as {@link $KindlingVariant}.
     */
    export type $KindlingVariant_ = RegistryTypes.SpectrumKindlingVariant;
    export class $LizardFrillVariant {
        getTextureLocation(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$LizardFrillVariant>>;
        static SIMPLE: $ResourceKey<$LizardFrillVariant>;
        static DIRECT_CODEC: $Codec<$LizardFrillVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LizardFrillVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$LizardFrillVariant>>;
        get textureLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $LizardFrillVariant}.
     */
    export type $LizardFrillVariant_ = RegistryTypes.SpectrumLizardFrillVariant;
    export interface $LizardFrillVariant extends RegistryMarked<RegistryTypes.SpectrumLizardFrillVariantTag, RegistryTypes.SpectrumLizardFrillVariant> {}
    export class $LizardHornVariant {
        getTextureLocation(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$LizardHornVariant>>;
        static DIRECT_CODEC: $Codec<$LizardHornVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LizardHornVariant>;
        static HORNY: $ResourceKey<$LizardHornVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$LizardHornVariant>>;
        get textureLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $LizardHornVariant}.
     */
    export type $LizardHornVariant_ = RegistryTypes.SpectrumLizardHornVariant;
}
