import { $AdvancementHolder, $AdvancementHolder_ } from "@package/net/minecraft/advancements";

declare module "@package/net/bivrik/fancytoasts/client/toast" {
    export class $IAdvancementAccessor {
    }
    export interface $IAdvancementAccessor {
        getAdvancementHolder(): $AdvancementHolder;
        get advancementHolder(): $AdvancementHolder;
    }
    /**
     * Values that may be interpreted as {@link $IAdvancementAccessor}.
     */
    export type $IAdvancementAccessor_ = (() => $AdvancementHolder_);
}
