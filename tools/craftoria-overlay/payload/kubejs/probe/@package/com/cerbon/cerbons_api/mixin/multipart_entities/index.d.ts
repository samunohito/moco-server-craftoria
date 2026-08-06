import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $ArrayVoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/com/cerbon/cerbons_api/mixin/multipart_entities" {
    export class $InvokerArrayVoxelShape {
        static init(shape: $DiscreteVoxelShape, xPoints: $DoubleList, yPoints: $DoubleList, zPoints: $DoubleList): $ArrayVoxelShape;
    }
    export interface $InvokerArrayVoxelShape {
    }
}
