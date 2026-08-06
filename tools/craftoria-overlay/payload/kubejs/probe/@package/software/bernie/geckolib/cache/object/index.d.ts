import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        topLevelBones(): $List<$GeoBone>;
        getBone(arg0: string): ($GeoBone) | undefined;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_,  } | [topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_, ];
    export class $GeoBone {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getMirror(): boolean;
        setRotY(arg0: number): void;
        setRotX(arg0: number): void;
        getRotX(): number;
        getRotY(): number;
        getScaleX(): number;
        getScaleY(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getScaleZ(): number;
        setPosY(arg0: number): void;
        setPosZ(arg0: number): void;
        getPosZ(): number;
        getRotZ(): number;
        setRotZ(arg0: number): void;
        setPosX(arg0: number): void;
        getRotationVector(): $Vector3d;
        getCubes(): $List<$GeoCube>;
        getModelPosition(): $Vector3d;
        getPosX(): number;
        getPosY(): number;
        setScaleX(arg0: number): void;
        setScaleZ(arg0: number): void;
        setScaleY(arg0: number): void;
        saveSnapshot(): $BoneSnapshot;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        getWorldPosition(): $Vector3d;
        setHidden(arg0: boolean): void;
        getLocalPosition(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        shouldNeverRender(): boolean;
        getScaleVector(): $Vector3d;
        setChildrenHidden(arg0: boolean): void;
        getPositionVector(): $Vector3d;
        isHidingChildren(): boolean;
        getChildBones(): $List<$GeoBone>;
        isTrackingMatrices(): boolean;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        getWorldSpaceNormal(): $Matrix3f;
        getLocalSpaceMatrix(): $Matrix4f;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        getModelRotationMatrix(): $Matrix4f;
        setTrackingMatrices(arg0: boolean): void;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        saveInitialSnapshot(): void;
        markPositionAsChanged(): void;
        markRotationAsChanged(): void;
        getInitialSnapshot(): $BoneSnapshot;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        markScaleAsChanged(): void;
        hasRotationChanged(): boolean;
        hasScaleChanged(): boolean;
        resetStateChanges(): void;
        hasPositionChanged(): boolean;
        getInflate(): number;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getPivotZ(): number;
        getPivotY(): number;
        getPivotX(): number;
        setPivotY(arg0: number): void;
        setPivotX(arg0: number): void;
        setPivotZ(arg0: number): void;
        getReset(): boolean;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
        get rotationVector(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get worldPosition(): $Vector3d;
        get localPosition(): $Vector3d;
        get scaleVector(): $Vector3d;
        set childrenHidden(value: boolean);
        get positionVector(): $Vector3d;
        get hidingChildren(): boolean;
        get childBones(): $List<$GeoBone>;
        get modelRotationMatrix(): $Matrix4f;
        get initialSnapshot(): $BoneSnapshot;
        get inflate(): number;
        get reset(): boolean;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { direction?: $Direction_, normal?: $Vector3f, vertices?: $GeoVertex_[],  } | [direction?: $Direction_, normal?: $Vector3f, vertices?: $GeoVertex_[], ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        mirror(): boolean;
        rotation(): $Vec3;
        quads(): $GeoQuad[];
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean,  } | [pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texU(): number;
        texV(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { position?: $Vector3f, texV?: number, texU?: number,  } | [position?: $Vector3f, texV?: number, texU?: number, ];
}
