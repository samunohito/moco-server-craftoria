import { $BiomeDensitySource, $BiomeDensitySource_ } from "@package/twilightforest/world/components/layer";
import { $Long2ObjectLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";

declare module "@package/com/ishland/tfthreadsafetyaddon/common/ducks" {
    export class $BiomeDensitySourceExtension {
    }
    export interface $BiomeDensitySourceExtension {
        tfthreadsafetyaddon$recreate(): $BiomeDensitySource;
    }
    /**
     * Values that may be interpreted as {@link $BiomeDensitySourceExtension}.
     */
    export type $BiomeDensitySourceExtension_ = (() => $BiomeDensitySource_);
    export class $LazyAreaExtension {
    }
    export interface $LazyAreaExtension {
        tfthreadsafetyaddon$setCachedSamples(arg0: $Long2ObjectLinkedOpenHashMap<$ResourceKey_<$Biome>>): void;
    }
    /**
     * Values that may be interpreted as {@link $LazyAreaExtension}.
     */
    export type $LazyAreaExtension_ = ((arg0: $Long2ObjectLinkedOpenHashMap<$ResourceKey<$Biome>>) => void);
}
