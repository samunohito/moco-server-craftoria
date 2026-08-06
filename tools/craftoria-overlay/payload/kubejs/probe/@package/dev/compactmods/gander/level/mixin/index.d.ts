import { $StructureTemplate$Palette } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List_, $List } from "@package/java/util";

declare module "@package/dev/compactmods/gander/level/mixin" {
    export class $StructureTemplateAccessor {
    }
    export interface $StructureTemplateAccessor {
        getPalettes(): $List<$StructureTemplate$Palette>;
        get palettes(): $List<$StructureTemplate$Palette>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateAccessor}.
     */
    export type $StructureTemplateAccessor_ = (() => $List_<$StructureTemplate$Palette>);
}
