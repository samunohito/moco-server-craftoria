import { $AdvancementHolder, $AdvancementProgress, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/de/dafuqs/revelationary/mixin/client" {
    export class $AccessorClientAdvancementManager {
    }
    export interface $AccessorClientAdvancementManager {
        getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        get progress(): $Map<$AdvancementHolder, $AdvancementProgress>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorClientAdvancementManager}.
     */
    export type $AccessorClientAdvancementManager_ = (() => $Map_<$AdvancementHolder_, $AdvancementProgress>);
    export class $WorldRendererMixinAccessor {
    }
    export interface $WorldRendererMixinAccessor {
        invokeSetSectionDirty(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $WorldRendererMixinAccessor}.
     */
    export type $WorldRendererMixinAccessor_ = ((arg0: number, arg1: number, arg2: number, arg3: boolean) => void);
}
