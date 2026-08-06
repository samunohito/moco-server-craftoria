import { $ArrowItem } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";

declare module "@package/de/dafuqs/spectrum/items/tools" {
    export class $GlassArrowVariant {
        static init(): void;
        getArrow(): $ArrowItem;
        getParticleEffect(): $ParticleOptions;
        static AMETHYST: $GlassArrowVariant;
        static MALACHITE: $GlassArrowVariant;
        static CITRINE: $GlassArrowVariant;
        static MOONSTONE: $GlassArrowVariant;
        static TOPAZ: $GlassArrowVariant;
        static ONYX: $GlassArrowVariant;
        constructor();
        get arrow(): $ArrowItem;
        get particleEffect(): $ParticleOptions;
    }
    /**
     * Values that may be interpreted as {@link $GlassArrowVariant}.
     */
    export type $GlassArrowVariant_ = RegistryTypes.SpectrumGlassArrowVariant;
    export interface $GlassArrowVariant extends RegistryMarked<RegistryTypes.SpectrumGlassArrowVariantTag, RegistryTypes.SpectrumGlassArrowVariant> {}
}
