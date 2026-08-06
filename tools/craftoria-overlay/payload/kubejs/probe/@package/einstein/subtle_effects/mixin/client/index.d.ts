import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
export * as block from "@package/einstein/subtle_effects/mixin/client/block";
export * as item from "@package/einstein/subtle_effects/mixin/client/item";
export * as entity from "@package/einstein/subtle_effects/mixin/client/entity";
export * as particle from "@package/einstein/subtle_effects/mixin/client/particle";

declare module "@package/einstein/subtle_effects/mixin/client" {
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        loadShaderEffect(arg0: $ResourceLocation_): void;
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = ((arg0: $ResourceLocation) => void);
}
