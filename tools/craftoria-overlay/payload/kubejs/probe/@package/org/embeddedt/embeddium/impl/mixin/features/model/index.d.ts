import { $ModelData, $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Map } from "@package/java/util";

declare module "@package/org/embeddedt/embeddium/impl/mixin/features/model" {
    export class $SimpleBakedModelAccessor {
    }
    export interface $SimpleBakedModelAccessor {
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        get blockRenderTypes(): $ChunkRenderTypeSet;
    }
    /**
     * Values that may be interpreted as {@link $SimpleBakedModelAccessor}.
     */
    export type $SimpleBakedModelAccessor_ = (() => $ChunkRenderTypeSet);
    export class $ItemBlockRenderTypesInvoker {
        static invokeGetRenderLayers(arg0: $BlockState_): $ChunkRenderTypeSet;
    }
    export interface $ItemBlockRenderTypesInvoker {
    }
    export class $MultipartModelDataAccessor {
        static getProperty(): $ModelProperty<$Map<$BakedModel, $ModelData>>;
        static get property(): $ModelProperty<$Map<$BakedModel, $ModelData>>;
    }
    export interface $MultipartModelDataAccessor {
    }
}
