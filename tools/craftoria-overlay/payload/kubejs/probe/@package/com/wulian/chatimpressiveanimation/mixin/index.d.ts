import { $Message_, $Message } from "@package/com/mojang/brigadier";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/wulian/chatimpressiveanimation/mixin" {
    export class $ChatHudLineAccessor {
    }
    export interface $ChatHudLineAccessor {
        getCreationTick(): number;
        get creationTick(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChatHudLineAccessor}.
     */
    export type $ChatHudLineAccessor_ = (() => number);
    export class $ChatHudAccessor {
    }
    export interface $ChatHudAccessor {
        getVisibleMessages(): $List<$Message>;
        get visibleMessages(): $List<$Message>;
    }
    /**
     * Values that may be interpreted as {@link $ChatHudAccessor}.
     */
    export type $ChatHudAccessor_ = (() => $List_<$Message_>);
}
