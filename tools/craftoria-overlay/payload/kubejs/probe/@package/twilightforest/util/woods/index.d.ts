import { $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $StructureTemplate$StructureBlockInfo_, $StructureTemplate$StructureBlockInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";

declare module "@package/twilightforest/util/woods" {
    export class $WoodPalette {
        contains(arg0: $Block_): boolean;
        getWoodShapeFromBlock(arg0: $Block_): $WoodPalette$WoodShapes;
        modifyBlockWithType(arg0: $WoodPalette_, arg1: $BlockState_): $BlockState;
        modifyBlockWithType(arg0: $WoodPalette_, arg1: $StructureTemplate$StructureBlockInfo_): $StructureTemplate$StructureBlockInfo;
        static CODEC: $Codec<$WoodPalette>;
        constructor(arg0: $Holder_<$Block>, arg1: $Holder_<$Block>, arg2: $Holder_<$Block>, arg3: $Holder_<$Block>, arg4: $Holder_<$Block>, arg5: $Holder_<$Block>, arg6: $Holder_<$Block>, arg7: $Holder_<$Block>);
        constructor(arg0: $Block_, arg1: $Block_, arg2: $Block_, arg3: $Block_, arg4: $Block_, arg5: $Block_, arg6: $Block_, arg7: $Block_);
    }
    /**
     * Values that may be interpreted as {@link $WoodPalette}.
     */
    export type $WoodPalette_ = RegistryTypes.TwilightWoodPalettes;
    export class $WoodPalette$WoodShapes extends $Enum<$WoodPalette$WoodShapes> {
        static values(): $WoodPalette$WoodShapes[];
        static valueOf(arg0: string): $WoodPalette$WoodShapes;
        static BANISTER: $WoodPalette$WoodShapes;
        static BUTTON: $WoodPalette$WoodShapes;
        static BLOCK: $WoodPalette$WoodShapes;
        static STAIRS: $WoodPalette$WoodShapes;
        static GATE: $WoodPalette$WoodShapes;
        static FENCE: $WoodPalette$WoodShapes;
        static SLAB: $WoodPalette$WoodShapes;
        static PLATE: $WoodPalette$WoodShapes;
        static INVALID: $WoodPalette$WoodShapes;
    }
    /**
     * Values that may be interpreted as {@link $WoodPalette$WoodShapes}.
     */
    export type $WoodPalette$WoodShapes_ = "block" | "stairs" | "slab" | "button" | "fence" | "gate" | "plate" | "banister" | "invalid";
    export interface $WoodPalette extends RegistryMarked<RegistryTypes.TwilightWoodPalettesTag, RegistryTypes.TwilightWoodPalettes> {}
}
