import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $List } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/mrcrayfish/furniture/refurbished/mixin/client" {
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        getChildren(): $List<$GuiEventListener>;
        getNarratables(): $List<$NarratableEntry>;
        get children(): $List<$GuiEventListener>;
        get narratables(): $List<$NarratableEntry>;
    }
}
