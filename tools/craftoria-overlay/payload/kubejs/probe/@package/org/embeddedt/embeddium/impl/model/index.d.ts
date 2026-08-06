import { $ModelCuboid } from "@package/org/embeddedt/embeddium/impl/render/immediate/model";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $RandomSource } from "@package/net/minecraft/util";
export * as color from "@package/org/embeddedt/embeddium/impl/model/color";
export * as quad from "@package/org/embeddedt/embeddium/impl/model/quad";

declare module "@package/org/embeddedt/embeddium/impl/model" {
    export class $UnwrappableBakedModel {
        static unwrapIfPossible(arg0: $BakedModel, arg1: $RandomSource): $BakedModel;
    }
    export interface $UnwrappableBakedModel {
        embeddium$getInnerModel(arg0: $RandomSource): $BakedModel;
    }
    /**
     * Values that may be interpreted as {@link $UnwrappableBakedModel}.
     */
    export type $UnwrappableBakedModel_ = ((arg0: $RandomSource) => $BakedModel);
    export class $ModelCuboidAccessor {
    }
    export interface $ModelCuboidAccessor {
        embeddium$getSimpleCuboid(): $ModelCuboid;
        sodium$copy(): $ModelCuboid;
    }
    export class $EpsilonizableBlockElement {
    }
    export interface $EpsilonizableBlockElement {
        embeddium$epsilonize(): void;
    }
    /**
     * Values that may be interpreted as {@link $EpsilonizableBlockElement}.
     */
    export type $EpsilonizableBlockElement_ = (() => void);
}
