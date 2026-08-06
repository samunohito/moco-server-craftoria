import { $ModelPart$Polygon } from "@package/net/minecraft/client/model/geom";
import { $PoseStack$Pose, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $List } from "@package/java/util";
export * as accessors from "@package/io/github/kosmx/bendylib/impl/accessors";

declare module "@package/io/github/kosmx/bendylib/impl" {
    export class $ICuboid {
    }
    export interface $ICuboid {
        render(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number): void;
        copyState(arg0: $ICuboid): void;
        getQuads(): $List<$ModelPart$Polygon>;
        disableAfterDraw(): boolean;
        get quads(): $List<$ModelPart$Polygon>;
    }
}
