import { $LongFunction_ } from "@package/java/util/function";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LazyArea } from "@package/twilightforest/world/components/layer/vanillalegacy/area";
import { $LazyAreaContext } from "@package/twilightforest/world/components/layer/vanillalegacy/context";
export * as area from "@package/twilightforest/world/components/layer/vanillalegacy/area";
export * as context from "@package/twilightforest/world/components/layer/vanillalegacy/context";

declare module "@package/twilightforest/world/components/layer/vanillalegacy" {
    export class $Area {
    }
    export interface $Area {
        getBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $Area}.
     */
    export type $Area_ = ((arg0: number, arg1: number) => $ResourceKey_<$Biome>);
    export class $BiomeLayerType {
    }
    export interface $BiomeLayerType {
        getCodec(): $MapCodec<$BiomeLayerFactory>;
        get codec(): $MapCodec<$BiomeLayerFactory>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeLayerType}.
     */
    export type $BiomeLayerType_ = RegistryTypes.TwilightBiomeLayerType | (() => $MapCodec_<$BiomeLayerFactory_>);
    export class $BiomeLayerFactory {
    }
    export interface $BiomeLayerFactory {
        getType(): $BiomeLayerType;
        build(arg0: $LongFunction_<$LazyAreaContext>): $LazyArea;
        get type(): $BiomeLayerType;
    }
    /**
     * Values that may be interpreted as {@link $BiomeLayerFactory}.
     */
    export type $BiomeLayerFactory_ = RegistryTypes.TwilightBiomeLayerStack;
    export interface $BiomeLayerFactory extends RegistryMarked<RegistryTypes.TwilightBiomeLayerStackTag, RegistryTypes.TwilightBiomeLayerStack> {}
    export interface $BiomeLayerType extends RegistryMarked<RegistryTypes.TwilightBiomeLayerTypeTag, RegistryTypes.TwilightBiomeLayerType> {}
}
