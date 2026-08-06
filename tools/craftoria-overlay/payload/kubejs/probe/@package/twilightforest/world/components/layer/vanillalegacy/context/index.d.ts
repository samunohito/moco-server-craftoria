import { $Area, $Area_ } from "@package/twilightforest/world/components/layer/vanillalegacy";
import { $LazyArea } from "@package/twilightforest/world/components/layer/vanillalegacy/area";

declare module "@package/twilightforest/world/components/layer/vanillalegacy/context" {
    export class $Context {
    }
    export interface $Context {
        getSeed(): number;
        get seed(): number;
    }
    /**
     * Values that may be interpreted as {@link $Context}.
     */
    export type $Context_ = (() => number);
    export class $BigContext<R extends $Area> {
    }
    export interface $BigContext<R extends $Area> extends $Context {
        createResult(arg0: $Area_): R;
        createResult(arg0: $Area_, arg1: R): R;
        createResult(arg0: $Area_, arg1: R, arg2: R): R;
    }
    export class $LazyAreaContext implements $BigContext<$LazyArea> {
        getSeed(): number;
        createResult(arg0: $Area_, arg1: $LazyArea, arg2: $LazyArea): $LazyArea;
        createResult(arg0: $Area_, arg1: $LazyArea): $LazyArea;
        createResult(arg0: $Area_): $LazyArea;
        constructor(arg0: number, arg1: number);
        get seed(): number;
    }
}
