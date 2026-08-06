import { $HolderLookup$Provider, $RegistryAccess } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MobEffectCategory_, $MobEffectCategory } from "@package/net/minecraft/world/effect";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as passive from "@package/twilightforest/entity/passive";

declare module "@package/twilightforest/entity" {
    export class $MagicPaintingVariant$Layer$OpacityModifier extends $Record {
        type(): $MagicPaintingVariant$Layer$OpacityModifier$Type;
        min(): number;
        max(): number;
        from(): number;
        to(): number;
        item(): $ItemStack;
        multiplier(): number;
        invert(): boolean;
        effectCategory(): ($MobEffectCategory) | undefined;
        static MOB_EFFECT_CATEGORY_CODEC: $Codec<$MobEffectCategory>;
        static CODEC: $Codec<$MagicPaintingVariant$Layer$OpacityModifier>;
        constructor(type: $MagicPaintingVariant$Layer$OpacityModifier$Type_, multiplier: number, invert: boolean, min: number, max: number, from: number, to: number, item: $ItemStack_, effectCategory: ($MobEffectCategory_) | undefined);
        constructor(arg0: $MagicPaintingVariant$Layer$OpacityModifier$Type_, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: $MobEffectCategory_);
        constructor(arg0: $MagicPaintingVariant$Layer$OpacityModifier$Type_, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: $ItemStack_);
        constructor(arg0: $MagicPaintingVariant$Layer$OpacityModifier$Type_, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $MagicPaintingVariant$Layer$OpacityModifier$Type_, arg1: number, arg2: boolean, arg3: number, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $MagicPaintingVariant$Layer$OpacityModifier}.
     */
    export type $MagicPaintingVariant$Layer$OpacityModifier_ = { from?: number, type?: $MagicPaintingVariant$Layer$OpacityModifier$Type_, max?: number, to?: number, effectCategory?: ($MobEffectCategory_) | undefined, item?: $ItemStack_, multiplier?: number, invert?: boolean, min?: number,  } | [from?: number, type?: $MagicPaintingVariant$Layer$OpacityModifier$Type_, max?: number, to?: number, effectCategory?: ($MobEffectCategory_) | undefined, item?: $ItemStack_, multiplier?: number, invert?: boolean, min?: number, ];
    export class $MagicPaintingVariant$Layer$OpacityModifier$Type extends $Enum<$MagicPaintingVariant$Layer$OpacityModifier$Type> implements $StringRepresentable {
        static values(): $MagicPaintingVariant$Layer$OpacityModifier$Type[];
        static valueOf(arg0: string): $MagicPaintingVariant$Layer$OpacityModifier$Type;
        usesRange(): boolean;
        getSerializedName(): string;
        powerOfMultiplier(): boolean;
        getRemappedEnumConstantName(): string;
        static STORM: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static DISTANCE: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static WEATHER: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static SINE_TIME: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static DAY_TIME: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static LIGHTNING: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static HOLDING_ITEM: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static HEALTH: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static HUNGER: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        static MOB_EFFECT_CATEGORY: $MagicPaintingVariant$Layer$OpacityModifier$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MagicPaintingVariant$Layer$OpacityModifier$Type}.
     */
    export type $MagicPaintingVariant$Layer$OpacityModifier$Type_ = "distance" | "weather" | "storm" | "lightning" | "day_time" | "sine_time" | "health" | "hunger" | "holding_item" | "mob_effect_category";
    export class $MagicPaintingVariant extends $Record {
        layers(): $List<$MagicPaintingVariant$Layer>;
        static getVariant(arg0: $HolderLookup$Provider | null, arg1: string): ($MagicPaintingVariant) | undefined;
        static getVariant(arg0: $HolderLookup$Provider | null, arg1: $ResourceLocation_): ($MagicPaintingVariant) | undefined;
        static getVariant(arg0: $HolderLookup$Provider | null, arg1: $ResourceKey_<$MagicPaintingVariant>): ($MagicPaintingVariant) | undefined;
        width(): number;
        height(): number;
        static getVariantId(arg0: $RegistryAccess, arg1: $MagicPaintingVariant_): string;
        backTexture(): $ResourceLocation;
        author(): $Component;
        static getVariantResourceLocation(arg0: $RegistryAccess, arg1: $MagicPaintingVariant_): $ResourceLocation;
        static CODEC: $Codec<$MagicPaintingVariant>;
        constructor(width: number, height: number, layers: $List_<$MagicPaintingVariant$Layer_>, author: $Component_, backTexture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $MagicPaintingVariant}.
     */
    export type $MagicPaintingVariant_ = RegistryTypes.TwilightMagicPaintings | { backTexture?: $ResourceLocation_, layers?: $List_<$MagicPaintingVariant$Layer_>, height?: number, width?: number, author?: $Component_,  } | [backTexture?: $ResourceLocation_, layers?: $List_<$MagicPaintingVariant$Layer_>, height?: number, width?: number, author?: $Component_, ];
    export class $MagicPaintingVariant$Layer extends $Record {
        path(): string;
        parallax(): $MagicPaintingVariant$Layer$Parallax;
        fullbright(): boolean;
        localLighting(): boolean;
        opacityModifier(): $MagicPaintingVariant$Layer$OpacityModifier;
        static CODEC: $Codec<$MagicPaintingVariant$Layer>;
        constructor(path: string, parallax: $MagicPaintingVariant$Layer$Parallax_ | null, opacityModifier: $MagicPaintingVariant$Layer$OpacityModifier_ | null, fullbright: boolean, localLighting: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MagicPaintingVariant$Layer}.
     */
    export type $MagicPaintingVariant$Layer_ = { localLighting?: boolean, fullbright?: boolean, path?: string, parallax?: $MagicPaintingVariant$Layer$Parallax_, opacityModifier?: $MagicPaintingVariant$Layer$OpacityModifier_,  } | [localLighting?: boolean, fullbright?: boolean, path?: string, parallax?: $MagicPaintingVariant$Layer$Parallax_, opacityModifier?: $MagicPaintingVariant$Layer$OpacityModifier_, ];
    export class $MagicPaintingVariant$Layer$Parallax extends $Record {
        type(): $MagicPaintingVariant$Layer$Parallax$Type;
        width(): number;
        height(): number;
        multiplier(): number;
        static CODEC: $Codec<$MagicPaintingVariant$Layer$Parallax>;
        constructor(type: $MagicPaintingVariant$Layer$Parallax$Type_, multiplier: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $MagicPaintingVariant$Layer$Parallax}.
     */
    export type $MagicPaintingVariant$Layer$Parallax_ = { multiplier?: number, height?: number, width?: number, type?: $MagicPaintingVariant$Layer$Parallax$Type_,  } | [multiplier?: number, height?: number, width?: number, type?: $MagicPaintingVariant$Layer$Parallax$Type_, ];
    export class $MagicPaintingVariant$Layer$Parallax$Type extends $Enum<$MagicPaintingVariant$Layer$Parallax$Type> implements $StringRepresentable {
        static values(): $MagicPaintingVariant$Layer$Parallax$Type[];
        static valueOf(arg0: string): $MagicPaintingVariant$Layer$Parallax$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static LINEAR_TIME: $MagicPaintingVariant$Layer$Parallax$Type;
        static SINE_TIME: $MagicPaintingVariant$Layer$Parallax$Type;
        static VIEW_ANGLE: $MagicPaintingVariant$Layer$Parallax$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MagicPaintingVariant$Layer$Parallax$Type}.
     */
    export type $MagicPaintingVariant$Layer$Parallax$Type_ = "view_angle" | "linear_time" | "sine_time";
    export interface $MagicPaintingVariant extends RegistryMarked<RegistryTypes.TwilightMagicPaintingsTag, RegistryTypes.TwilightMagicPaintings> {}
}
