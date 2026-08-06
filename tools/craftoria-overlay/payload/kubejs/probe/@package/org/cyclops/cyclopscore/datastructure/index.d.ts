import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumMap, $Map_ } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $WeakReference } from "@package/java/lang/ref";

declare module "@package/org/cyclops/cyclopscore/datastructure" {
    export class $DimPos implements $Comparable<$DimPos> {
        compareTo(arg0: $DimPos): number;
        static of(arg0: $Level_, arg1: $BlockPos_): $DimPos;
        static of(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_): $DimPos;
        static of(arg0: string, arg1: $BlockPos_): $DimPos;
        isLoaded(): boolean;
        getLevel(arg0: boolean): $Level;
        getLevel(): string;
        setWorldReference(arg0: $WeakReference<$Level_>): void;
        withPosition(arg0: $BlockPos_): $DimPos;
        getBlockPos(): $BlockPos;
        getLevelKey(): $ResourceKey<$Level>;
        getWorldReference(): $WeakReference<$Level>;
        get loaded(): boolean;
        get blockPos(): $BlockPos;
        get levelKey(): $ResourceKey<$Level>;
    }
    export class $EnumFacingMap<V> extends $EnumMap<$Direction, V> {
        static newMap<V>(arg0: $Map_<$Direction_, V>): $EnumFacingMap<V>;
        static newMap<V>(arg0: $EnumMap<$Direction_, V>): $EnumFacingMap<V>;
        static newMap<V>(): $EnumFacingMap<V>;
        static forAllValues<V>(arg0: V, arg1: V, arg2: V, arg3: V, arg4: V, arg5: V): $EnumFacingMap<V>;
        constructor(arg0: $Map_<$Direction_, V>);
        constructor(arg0: $EnumMap<$Direction_, V>);
        constructor();
    }
}
