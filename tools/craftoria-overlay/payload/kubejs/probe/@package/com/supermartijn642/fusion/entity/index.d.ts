import { $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
export * as model from "@package/com/supermartijn642/fusion/entity/model";

declare module "@package/com/supermartijn642/fusion/entity" {
    export class $VanillaModelLayerProperties {
        static get(location: $ModelLayerLocation, renderer: $EntityRenderer<never>): $VanillaModelLayerProperties;
        transform(poseStack: $PoseStack): void;
        getOffsetZ(): number;
        getOffsetY(): number;
        getOffsetX(): number;
        shouldFlipY(): boolean;
        shouldFlipZ(): boolean;
        shouldFlipX(): boolean;
        get offsetZ(): number;
        get offsetY(): number;
        get offsetX(): number;
    }
}
