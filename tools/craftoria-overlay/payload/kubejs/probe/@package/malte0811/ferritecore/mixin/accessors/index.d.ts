import { $Direction$Axis } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $BitSetDVSAccess {
    }
    export interface $BitSetDVSAccess extends $DiscreteVSAccess {
        getYMin(): number;
        getXMin(): number;
        getZMin(): number;
        getZMax(): number;
        getYMax(): number;
        getXMax(): number;
        getStorage(): $BitSet;
        get YMin(): number;
        get XMin(): number;
        get ZMin(): number;
        get ZMax(): number;
        get YMax(): number;
        get XMax(): number;
        get storage(): $BitSet;
    }
    export class $SliceShapeAccess {
    }
    export interface $SliceShapeAccess extends $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $DiscreteVSAccess {
    }
    export interface $DiscreteVSAccess {
        getYSize(): number;
        getXSize(): number;
        getZSize(): number;
        get YSize(): number;
        get XSize(): number;
        get ZSize(): number;
    }
    export class $ArrayVSAccess {
    }
    export interface $ArrayVSAccess extends $VoxelShapeAccess {
        setXPoints(arg0: $DoubleList): void;
        getYPoints(): $DoubleList;
        getXPoints(): $DoubleList;
        getZPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        setZPoints(arg0: $DoubleList): void;
    }
    export class $BakedQuadAccess {
    }
    export interface $BakedQuadAccess {
        setVertices(arg0: number[]): void;
        set vertices(value: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BakedQuadAccess}.
     */
    export type $BakedQuadAccess_ = ((arg0: number[]) => void);
    export class $SubShapeAccess {
    }
    export interface $SubShapeAccess extends $DiscreteVSAccess {
        getParent(): $DiscreteVoxelShape;
        getEndX(): number;
        getEndY(): number;
        getStartZ(): number;
        getEndZ(): number;
        getStartY(): number;
        getStartX(): number;
        get parent(): $DiscreteVoxelShape;
        get endX(): number;
        get endY(): number;
        get startZ(): number;
        get endZ(): number;
        get startY(): number;
        get startX(): number;
    }
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        setShape(arg0: $DiscreteVoxelShape): void;
        getFaces(): $VoxelShape[];
        setFaces(arg0: $VoxelShape[]): void;
    }
}
