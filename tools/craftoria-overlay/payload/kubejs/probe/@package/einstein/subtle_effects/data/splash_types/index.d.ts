import { $Level_ } from "@package/net/minecraft/world/level";
import { $ColorProviderType$ColorProvider, $Colorable } from "@package/einstein/subtle_effects/data/color_providers";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $SpriteSetHolder, $DropletOptions, $DropletOptions_ } from "@package/einstein/subtle_effects/data";
import { $Record } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/einstein/subtle_effects/data/splash_types" {
    export class $SplashOptions extends $Record implements $Colorable {
        holder(): $SpriteSetHolder;
        tinting(): ($Either<number, boolean>) | undefined;
        transparency(): ($Either<number, boolean>) | undefined;
        colorProvider(): $ColorProviderType$ColorProvider;
        getColorAndApplyTint(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        constructor(holder: $SpriteSetHolder, colorProvider: $ColorProviderType$ColorProvider, tinting: ($Either<number, boolean>) | undefined, transparency: ($Either<number, boolean>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SplashOptions}.
     */
    export type $SplashOptions_ = { transparency?: ($Either<number, boolean>) | undefined, tinting?: ($Either<number, boolean>) | undefined, holder?: $SpriteSetHolder, colorProvider?: $ColorProviderType$ColorProvider,  } | [transparency?: ($Either<number, boolean>) | undefined, tinting?: ($Either<number, boolean>) | undefined, holder?: $SpriteSetHolder, colorProvider?: $ColorProviderType$ColorProvider, ];
    export class $SplashType extends $Record {
        splashOverlayOptions(): $SplashOptions;
        splashRippleOptions(): $SplashOptions;
        splashOptions(): $SplashOptions;
        dropletOptions(): ($DropletOptions) | undefined;
        constructor(splashOptions: $SplashOptions_, splashOverlayOptions: $SplashOptions_, splashRippleOptions: $SplashOptions_, dropletOptions: ($DropletOptions_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SplashType}.
     */
    export type $SplashType_ = { splashOptions?: $SplashOptions_, splashRippleOptions?: $SplashOptions_, splashOverlayOptions?: $SplashOptions_, dropletOptions?: ($DropletOptions_) | undefined,  } | [splashOptions?: $SplashOptions_, splashRippleOptions?: $SplashOptions_, splashOverlayOptions?: $SplashOptions_, dropletOptions?: ($DropletOptions_) | undefined, ];
}
