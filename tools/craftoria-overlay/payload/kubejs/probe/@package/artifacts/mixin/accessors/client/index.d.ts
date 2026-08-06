import { $EntityModel } from "@package/net/minecraft/client/model";
import { $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";

declare module "@package/artifacts/mixin/accessors/client" {
    export class $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
    }
    export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayerParent<T, M> {
        getLayers(): $List<$RenderLayer<T, M>>;
        get layers(): $List<$RenderLayer<T, M>>;
    }
}
