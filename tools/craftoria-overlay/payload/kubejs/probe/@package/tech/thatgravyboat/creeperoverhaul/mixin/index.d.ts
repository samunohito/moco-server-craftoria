import { $EntityModel } from "@package/net/minecraft/client/model";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";

declare module "@package/tech/thatgravyboat/creeperoverhaul/mixin" {
    export class $LivingEntityRendererInvoker<T extends $LivingEntity, M extends $EntityModel<T>> {
    }
    export interface $LivingEntityRendererInvoker<T extends $LivingEntity, M extends $EntityModel<T>> {
        invokeAddLayer(arg0: $RenderLayer<T, M>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererInvoker}.
     */
    export type $LivingEntityRendererInvoker_<T, M> = ((arg0: $RenderLayer<T, M>) => boolean);
}
