import { $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix3f } from "@package/org/joml";

declare module "@package/net/bettercombat/client/collision" {
    export class $OrientedBoundingBox {
        scale(scale: number): $OrientedBoundingBox;
        offset(offset: $Vec3_): $OrientedBoundingBox;
        contains(point: $Vec3_): boolean;
        copy(): $OrientedBoundingBox;
        intersects(boundingBox: $AABB_): boolean;
        intersects(otherOBB: $OrientedBoundingBox): boolean;
        updateVertex(): $OrientedBoundingBox;
        static Intersects(a: $OrientedBoundingBox, b: $OrientedBoundingBox): boolean;
        offsetAlongAxisZ(offset: number): $OrientedBoundingBox;
        offsetAlongAxisX(offset: number): $OrientedBoundingBox;
        offsetAlongAxisY(offset: number): $OrientedBoundingBox;
        extent: $Vec3;
        vertex8: $Vec3;
        vertex5: $Vec3;
        vertex4: $Vec3;
        vertices: $Vec3[];
        vertex7: $Vec3;
        center: $Vec3;
        rotation: $Matrix3f;
        vertex6: $Vec3;
        scaledAxisY: $Vec3;
        scaledAxisZ: $Vec3;
        scaledAxisX: $Vec3;
        axisZ: $Vec3;
        axisY: $Vec3;
        axisX: $Vec3;
        vertex1: $Vec3;
        vertex3: $Vec3;
        vertex2: $Vec3;
        constructor(obb: $OrientedBoundingBox);
        constructor(box: $AABB_);
        constructor(center: $Vec3_, size: $Vec3_, yaw: number, pitch: number);
        constructor(center: $Vec3_, width: number, height: number, depth: number, yaw: number, pitch: number);
    }
}
