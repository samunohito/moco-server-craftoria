import { $Enum } from "@package/java/lang";
import { $ICuboid } from "@package/io/github/kosmx/bendylib/impl";
import { $Tuple } from "@package/net/minecraft/util";
export * as impl from "@package/io/github/kosmx/bendylib/impl";

declare module "@package/io/github/kosmx/bendylib" {
    export class $ModelPartAccessor$Workaround extends $Enum<$ModelPartAccessor$Workaround> {
        static values(): $ModelPartAccessor$Workaround[];
        static valueOf(name: string): $ModelPartAccessor$Workaround;
        static ExportQuads: $ModelPartAccessor$Workaround;
        static VanillaDraw: $ModelPartAccessor$Workaround;
        static None: $ModelPartAccessor$Workaround;
    }
    /**
     * Values that may be interpreted as {@link $ModelPartAccessor$Workaround}.
     */
    export type $ModelPartAccessor$Workaround_ = "exportquads" | "vanilladraw" | "none";
    export class $ICuboidBuilder<C extends $ICuboid> {
    }
    export interface $ICuboidBuilder<C extends $ICuboid> {
        build(arg0: $ICuboidBuilder$Data): C;
    }
    /**
     * Values that may be interpreted as {@link $ICuboidBuilder}.
     */
    export type $ICuboidBuilder_<C> = ((arg0: $ICuboidBuilder$Data) => C);
    export class $ICuboidBuilder$Data {
        extraZ: number;
        extraX: number;
        mirror: boolean;
        extraY: number;
        textureWidth: number;
        textureHeight: number;
        sizeX: number;
        u: number;
        v: number;
        x: number;
        y: number;
        pivot: number;
        z: number;
        sizeY: number;
        sizeZ: number;
        constructor();
        constructor(u: number, v: number, x: number, y: number, z: number, sizeX: number, sizeY: number, sizeZ: number, extraX: number, extraY: number, extraZ: number, mirror: boolean, textureWidth: number, textureHeight: number, pivot: number);
        constructor(u: number, v: number, x: number, y: number, z: number, sizeX: number, sizeY: number, sizeZ: number, extraX: number, extraY: number, extraZ: number, mirror: boolean, textureWidth: number, textureHeight: number);
    }
    export class $MutableCuboid {
    }
    export interface $MutableCuboid {
        copyStateFrom(arg0: $MutableCuboid): void;
        getActiveMutator(): $Tuple<string, $ICuboid>;
        registerMutator(arg0: string, arg1: $ICuboidBuilder_<$ICuboid>): boolean;
        unregisterMutator(arg0: string): boolean;
        getCuboidBuilder(arg0: string): $ICuboidBuilder<$ICuboid>;
        /**
         * @deprecated
         */
        getMutator(arg0: string): $ICuboid;
        hasMutator(arg0: string): boolean;
        getAndActivateMutator(arg0: string): $ICuboid;
        get activeMutator(): $Tuple<string, $ICuboid>;
    }
}
