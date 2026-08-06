import { $Supplier } from "@package/java/util/function";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $CodecProvider } from "@package/dev/shadowsoffire/placebo/codec";

declare module "@package/dev/shadowsoffire/placebo/reload" {
    export class $DynamicHolder<R extends $CodecProvider<R>> implements $Supplier<R> {
        get(): R;
        getId(): $ResourceLocation;
        is(arg0: $ResourceLocation_): boolean;
        getOptional(): (R) | undefined;
        getRegistryPath(): string;
        isBound(): boolean;
        static EMPTY: $ResourceLocation;
        get id(): $ResourceLocation;
        get optional(): (R) | undefined;
        get registryPath(): string;
        get bound(): boolean;
    }
}
