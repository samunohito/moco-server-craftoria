import { $Stalactite, $SpeleothemVarietyConfig } from "@package/twilightforest/data/custom/stalactites/entry";
import { $Supplier_, $Function, $Supplier } from "@package/java/util/function";
import { $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Iterable, $Record } from "@package/java/lang";
import { $RectangleLatticeIterator$TriangularLatticeConfig, $RectangleLatticeIterator$TriangularLatticeConfig_ } from "@package/twilightforest/util/iterators";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $RandomSource } from "@package/net/minecraft/util";
export * as util from "@package/twilightforest/world/components/structures/util";
export * as markerhandler from "@package/twilightforest/world/components/structures/markerhandler";

declare module "@package/twilightforest/world/components/structures" {
    export interface $StructureSpeleothemConfig extends RegistryMarked<RegistryTypes.TwilightStructureSpeleothemSettingsTag, RegistryTypes.TwilightStructureSpeleothemSettings> {}
    export class $StructureSpeleothemConfig extends $Record {
        speleothemVarietyType(): string;
        speleothemVarietyConfig(): $Supplier<$SpeleothemVarietyConfig>;
        shouldDoAStalactite(arg0: $RandomSource): boolean;
        shouldDoAStalagmite(arg0: $RandomSource): boolean;
        static fromLocation(arg0: $RectangleLatticeIterator$TriangularLatticeConfig_, arg1: string): $StructureSpeleothemConfig;
        getStalactite(arg0: $RandomSource): $Stalactite;
        latticeIterator(arg0: $BoundingBox | null, arg1: number): $Iterable<$BlockPos$MutableBlockPos>;
        getSpeleothem(arg0: boolean, arg1: $RandomSource): $Stalactite;
        getStalagmite(arg0: $RandomSource): $Stalactite;
        stalagmiteVariety(): $Supplier<$Function<$RandomSource, $Stalactite>>;
        getVarietyConfig(): $SpeleothemVarietyConfig;
        latticeConfig(): $RectangleLatticeIterator$TriangularLatticeConfig;
        stalactiteVariety(): $Supplier<$Function<$RandomSource, $Stalactite>>;
        static CODEC: $Codec<$StructureSpeleothemConfig>;
        constructor(latticeConfig: $RectangleLatticeIterator$TriangularLatticeConfig_, speleothemVarietyType: string, speleothemVarietyConfig: $Supplier_<$SpeleothemVarietyConfig>, stalactiteVariety: $Supplier_<$Function<$RandomSource, $Stalactite>>, stalagmiteVariety: $Supplier_<$Function<$RandomSource, $Stalactite>>);
        get varietyConfig(): $SpeleothemVarietyConfig;
    }
    /**
     * Values that may be interpreted as {@link $StructureSpeleothemConfig}.
     */
    export type $StructureSpeleothemConfig_ = RegistryTypes.TwilightStructureSpeleothemSettings | { latticeConfig?: $RectangleLatticeIterator$TriangularLatticeConfig_, stalactiteVariety?: $Supplier_<$Function<$RandomSource, $Stalactite>>, speleothemVarietyConfig?: $Supplier_<$SpeleothemVarietyConfig>, stalagmiteVariety?: $Supplier_<$Function<$RandomSource, $Stalactite>>, speleothemVarietyType?: string,  } | [latticeConfig?: $RectangleLatticeIterator$TriangularLatticeConfig_, stalactiteVariety?: $Supplier_<$Function<$RandomSource, $Stalactite>>, speleothemVarietyConfig?: $Supplier_<$SpeleothemVarietyConfig>, stalagmiteVariety?: $Supplier_<$Function<$RandomSource, $Stalactite>>, speleothemVarietyType?: string, ];
}
