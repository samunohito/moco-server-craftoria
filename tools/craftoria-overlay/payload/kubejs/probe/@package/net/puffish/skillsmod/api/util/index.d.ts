import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Collection_ } from "@package/java/util";

declare module "@package/net/puffish/skillsmod/api/util" {
    export class $Result<S, F> {
        static failure<L, F>(f: F): $Result<L, F>;
        static success<S, R>(s: S): $Result<S, R>;
    }
    export interface $Result<S, F> {
        flatMap<S2, F2>(arg0: $Function_<S, $Result<S2, F2>>, arg1: $Function_<F, $Result<S2, F2>>): $Result<S2, F2>;
        orElse<F2>(arg0: $Function_<F, $Result<S, F2>>): $Result<S, F2>;
        andThen<S2>(arg0: $Function_<S, $Result<S2, F>>): $Result<S2, F>;
        ifFailure(arg0: $Consumer_<F>): $Result<S, F>;
        getSuccess(): (S) | undefined;
        ifSuccess(arg0: $Consumer_<S>): $Result<S, F>;
        mapSuccess<L2>(arg0: $Function_<S, L2>): $Result<L2, F>;
        mapFailure<F2>(arg0: $Function_<F, F2>): $Result<S, F2>;
        getFailure(): (F) | undefined;
        getFailureOrElse(arg0: $Function_<S, F>): F;
        getSuccessOrElse(arg0: $Function_<F, S>): S;
    }
    export class $Problem {
        static message(message: string): $Problem;
        static combine(problems: $Collection_<$Problem_>): $Problem;
        static combine(...problems: $Problem_[]): $Problem;
    }
    export interface $Problem {
        toString(): string;
    }
    /**
     * Values that may be interpreted as {@link $Problem}.
     */
    export type $Problem_ = (() => string);
}
