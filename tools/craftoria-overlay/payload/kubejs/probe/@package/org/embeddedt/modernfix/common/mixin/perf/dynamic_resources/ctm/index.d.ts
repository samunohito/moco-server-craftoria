import { $BakedModel, $ModelBakery$BakedCacheKey_, $ModelBakery$BakedCacheKey } from "@package/net/minecraft/client/resources/model";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/org/embeddedt/modernfix/common/mixin/perf/dynamic_resources/ctm" {
    export class $CTMModelBakeryAccessor {
    }
    export interface $CTMModelBakeryAccessor {
        mfix$getBakedCache(): $Map<$ModelBakery$BakedCacheKey, $BakedModel>;
    }
    /**
     * Values that may be interpreted as {@link $CTMModelBakeryAccessor}.
     */
    export type $CTMModelBakeryAccessor_ = (() => $Map_<$ModelBakery$BakedCacheKey_, $BakedModel>);
}
