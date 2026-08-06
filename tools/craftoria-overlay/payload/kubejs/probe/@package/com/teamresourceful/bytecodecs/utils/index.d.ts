import { $Consumer_, $Function, $Function_ } from "@package/java/util/function";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/teamresourceful/bytecodecs/utils" {
    export class $Either<L, R> {
        static value<T>(arg0: $Either_<T, T>): T;
        static ofLeft<L, R>(arg0: L): $Either<L, R>;
        static ofRight<L, R>(arg0: R): $Either<L, R>;
    }
    export interface $Either<L, R> {
        map<T>(arg0: $Function_<L, T>, arg1: $Function_<R, T>): T;
        left(): (L) | undefined;
        right(): (R) | undefined;
        rightOrThrow(): R;
        leftOrThrow(): L;
        ifLeft(arg0: $Consumer_<L>): $Either<L, R>;
        ifRight(arg0: $Consumer_<R>): $Either<L, R>;
        leftOr(arg0: L): L;
        rightOr(arg0: R): R;
        isLeft(): boolean;
        isRight(): boolean;
        mapEither<F, S>(arg0: $Function_<L, F>, arg1: $Function_<R, S>): $Either<F, S>;
        mapLeft<T>(arg0: $Function_<L, T>): $Either<T, R>;
        mapRight<T>(arg0: $Function_<R, T>): $Either<L, T>;
        ifRightOrElse(arg0: $Consumer_<R>, arg1: $Runnable_): $Either<L, R>;
        ifLeftOrElse(arg0: $Consumer_<L>, arg1: $Runnable_): $Either<L, R>;
    }
    /**
     * Values that may be interpreted as {@link $Either}.
     */
    export type $Either_<L, R> = ((arg0: $Function<L, any>, arg1: $Function<R, any>) => any);
}
