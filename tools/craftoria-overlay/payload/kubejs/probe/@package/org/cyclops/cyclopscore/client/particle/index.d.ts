import { $Runnable_, $Runnable } from "@package/java/lang";

declare module "@package/org/cyclops/cyclopscore/client/particle" {
    export class $BufferBuilderWrapper {
    }
    export interface $BufferBuilderWrapper {
        cc$setRunnableOnBuild(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $BufferBuilderWrapper}.
     */
    export type $BufferBuilderWrapper_ = ((arg0: $Runnable) => void);
}
