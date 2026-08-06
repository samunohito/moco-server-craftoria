import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/de/cristelknight/cristellib/mixin" {
    export class $PathPackResourcesAccessor {
    }
    export interface $PathPackResourcesAccessor {
        cristellib$getRoot(): $Path;
    }
    /**
     * Values that may be interpreted as {@link $PathPackResourcesAccessor}.
     */
    export type $PathPackResourcesAccessor_ = (() => $Path_);
}
