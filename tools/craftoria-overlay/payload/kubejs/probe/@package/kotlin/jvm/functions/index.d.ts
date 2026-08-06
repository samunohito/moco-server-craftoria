import { $Function } from "@package/kotlin";

declare module "@package/kotlin/jvm/functions" {
    export class $Function1<P1, R> {
    }
    export interface $Function1<P1, R> extends $Function<R> {
        invoke(arg0: P1): R;
    }
    /**
     * Values that may be interpreted as {@link $Function1}.
     */
    export type $Function1_<P1, R> = ((arg0: P1) => R);
}
