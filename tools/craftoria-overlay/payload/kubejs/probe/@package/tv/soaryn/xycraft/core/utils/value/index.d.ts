import { $Consumer_, $Supplier_ } from "@package/java/util/function";

declare module "@package/tv/soaryn/xycraft/core/utils/value" {
    export class $WritableReference<T> {
        static empty<T>(): $WritableReference<T>;
    }
    export interface $WritableReference<T> {
        set(arg0: T): void;
    }
    /**
     * Values that may be interpreted as {@link $WritableReference}.
     */
    export type $WritableReference_<T> = ((arg0: T) => void);
    export class $ReadableReference<T> {
        static of<T>(arg0: T): $ReadableReference<T>;
    }
    export interface $ReadableReference<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $ReadableReference}.
     */
    export type $ReadableReference_<T> = (() => T);
    export class $Reference<T> {
        static of<T>(arg0: $Supplier_<T>, arg1: $Consumer_<T>): $Reference<T>;
    }
    export interface $Reference<T> extends $WritableReference<T>, $ReadableReference<T> {
    }
}
