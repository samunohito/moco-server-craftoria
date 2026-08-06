import { $ModelPart, $ModelPart$Cube, $ModelPart$Polygon } from "@package/net/minecraft/client/model/geom";
import { $Map, $List } from "@package/java/util";
import { $ModelPartAccessor$Workaround_ } from "@package/io/github/kosmx/bendylib";

declare module "@package/io/github/kosmx/bendylib/impl/accessors" {
    export class $IModelPartAccessor {
    }
    export interface $IModelPartAccessor {
        getChildren(): $Map<string, $ModelPart>;
        getCuboids(): $List<$ModelPart$Cube>;
        setWorkaround(arg0: $ModelPartAccessor$Workaround_): void;
        get children(): $Map<string, $ModelPart>;
        get cuboids(): $List<$ModelPart$Cube>;
        set workaround(value: $ModelPartAccessor$Workaround_);
    }
    export class $CuboidSideAccessor {
    }
    export interface $CuboidSideAccessor {
        getSides(): $ModelPart$Polygon[];
        resetSides(): void;
        setSides(arg0: $ModelPart$Polygon[]): void;
        doSideSwapping(): void;
    }
}
