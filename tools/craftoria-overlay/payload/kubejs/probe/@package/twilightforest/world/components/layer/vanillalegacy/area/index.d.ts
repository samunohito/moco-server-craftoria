import { $LazyAreaExtension } from "@package/com/ishland/tfthreadsafetyaddon/common/ducks";
import { $Long2ObjectLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Area, $Area_ } from "@package/twilightforest/world/components/layer/vanillalegacy";
import { $LinkedBlockingQueue, $ConcurrentHashMap } from "@package/java/util/concurrent";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";

declare module "@package/twilightforest/world/components/layer/vanillalegacy/area" {
    export class $LazyArea implements $Area, $LazyAreaExtension {
        getBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
        getMaxCache(): number;
        tfthreadsafetyaddon$setCachedSamples(cachedSamples: $Long2ObjectLinkedOpenHashMap<any>): void;
        constructor(arg0: $ConcurrentHashMap<number, $ResourceKey_<$Biome>>, arg1: $LinkedBlockingQueue<number>, arg2: number, arg3: $Area_);
        get maxCache(): number;
    }
}
