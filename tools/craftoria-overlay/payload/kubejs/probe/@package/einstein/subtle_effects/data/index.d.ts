import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ColorProviderType$ColorProvider, $Colorable } from "@package/einstein/subtle_effects/data/color_providers";
import { $Codec } from "@package/com/mojang/serialization";
import { $BucketItem } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Fluid, $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ParticleEngine$MutableSpriteSet } from "@package/net/minecraft/client/particle";
import { $SplashType_, $SplashType } from "@package/einstein/subtle_effects/data/splash_types";
import { $SimpleParticleType } from "@package/net/minecraft/core/particles";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Supplier } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractCauldronBlock } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";
export * as color_providers from "@package/einstein/subtle_effects/data/color_providers";
export * as splash_types from "@package/einstein/subtle_effects/data/splash_types";

declare module "@package/einstein/subtle_effects/data" {
    export class $DropletOptions extends $Record implements $Colorable {
        tinting(): ($Either<number, boolean>) | undefined;
        colorProvider(): $ColorProviderType$ColorProvider;
        rippleOptions(): ($DropletOptions$RippleOptions) | undefined;
        landParticle(): ($SimpleParticleType) | undefined;
        getColorAndApplyTint(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        static CODEC: $Codec<$DropletOptions>;
        static DEFAULT: $DropletOptions;
        constructor(colorProvider: $ColorProviderType$ColorProvider, tinting: ($Either<number, boolean>) | undefined, rippleOptions: ($DropletOptions$RippleOptions_) | undefined, landParticle: ($SimpleParticleType) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DropletOptions}.
     */
    export type $DropletOptions_ = { landParticle?: ($SimpleParticleType) | undefined, tinting?: ($Either<number, boolean>) | undefined, rippleOptions?: ($DropletOptions$RippleOptions_) | undefined, colorProvider?: $ColorProviderType$ColorProvider,  } | [landParticle?: ($SimpleParticleType) | undefined, tinting?: ($Either<number, boolean>) | undefined, rippleOptions?: ($DropletOptions$RippleOptions_) | undefined, colorProvider?: $ColorProviderType$ColorProvider, ];
    export class $SpriteSetHolder implements $Supplier<$ParticleEngine$MutableSpriteSet> {
        set(arg0: $ParticleEngine$MutableSpriteSet, arg1: boolean): void;
        referencesPreExisting(): boolean;
        get(): $ParticleEngine$MutableSpriteSet;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FluidDefinition extends $Record {
        id(): $ResourceLocation;
        source(): $Fluid;
        is(arg0: $FluidDefinition_): boolean;
        is(arg0: $TagKey_<$Fluid>): boolean;
        is(arg0: $BlockState_): boolean;
        is(arg0: $FluidState): boolean;
        is(arg0: $Fluid_): boolean;
        cauldron(): ($AbstractCauldronBlock) | undefined;
        flowing(): $Fluid;
        lightEmission(): number;
        splashType(): ($SplashType) | undefined;
        bucketItem(): ($BucketItem) | undefined;
        dropletOptions(): $DropletOptions;
        constructor(id: $ResourceLocation_, source: $Fluid_, flowing: $Fluid_, cauldron: ($AbstractCauldronBlock) | undefined, splashType: ($SplashType_) | undefined, bucketItem: ($BucketItem) | undefined, dropletOptions: $DropletOptions_, lightEmission: number);
    }
    /**
     * Values that may be interpreted as {@link $FluidDefinition}.
     */
    export type $FluidDefinition_ = { cauldron?: ($AbstractCauldronBlock) | undefined, dropletOptions?: $DropletOptions_, splashType?: ($SplashType_) | undefined, bucketItem?: ($BucketItem) | undefined, lightEmission?: number, source?: $Fluid_, id?: $ResourceLocation_, flowing?: $Fluid_,  } | [cauldron?: ($AbstractCauldronBlock) | undefined, dropletOptions?: $DropletOptions_, splashType?: ($SplashType_) | undefined, bucketItem?: ($BucketItem) | undefined, lightEmission?: number, source?: $Fluid_, id?: $ResourceLocation_, flowing?: $Fluid_, ];
    export class $DropletOptions$RippleOptions extends $Record implements $Colorable {
        tinting(): ($Either<number, boolean>) | undefined;
        transparency(): ($Either<number, boolean>) | undefined;
        colorProvider(): $ColorProviderType$ColorProvider;
        getColorAndApplyTint(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        static CODEC: $Codec<$DropletOptions$RippleOptions>;
        static DEFAULT: $DropletOptions$RippleOptions;
        constructor(colorProvider: $ColorProviderType$ColorProvider, tinting: ($Either<number, boolean>) | undefined, transparency: ($Either<number, boolean>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DropletOptions$RippleOptions}.
     */
    export type $DropletOptions$RippleOptions_ = { transparency?: ($Either<number, boolean>) | undefined, tinting?: ($Either<number, boolean>) | undefined, colorProvider?: $ColorProviderType$ColorProvider,  } | [transparency?: ($Either<number, boolean>) | undefined, tinting?: ($Either<number, boolean>) | undefined, colorProvider?: $ColorProviderType$ColorProvider, ];
}
