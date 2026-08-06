import { $StructureProcessorType_, $StructureTemplate$StructureEntityInfo, $StructureTemplate$Palette, $StructureProcessorType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List } from "@package/java/util";

declare module "@package/com/hollingsworth/arsnouveau/common/mixin/structure" {
    export class $StructureTemplateAccessor {
    }
    export interface $StructureTemplateAccessor {
        getPalettes(): $List<$StructureTemplate$Palette>;
        getEntityInfoList(): $List<$StructureTemplate$StructureEntityInfo>;
        get palettes(): $List<$StructureTemplate$Palette>;
        get entityInfoList(): $List<$StructureTemplate$StructureEntityInfo>;
    }
    export class $StructureProcessorAccessor {
    }
    export interface $StructureProcessorAccessor {
        callGetType(): $StructureProcessorType<never>;
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorAccessor}.
     */
    export type $StructureProcessorAccessor_ = (() => $StructureProcessorType_<never>);
}
