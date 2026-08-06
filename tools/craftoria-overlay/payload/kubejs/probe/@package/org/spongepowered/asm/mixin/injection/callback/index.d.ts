import { $Type } from "@package/org/objectweb/asm";

declare module "@package/org/spongepowered/asm/mixin/injection/callback" {
    export class $CallbackInfoReturnable<R> extends $CallbackInfo {
        getReturnValueJ(): number;
        getReturnValueS(): number;
        getReturnValueZ(): boolean;
        setReturnValue(arg0: R): void;
        getReturnValueB(): number;
        getReturnValueF(): number;
        getReturnValueI(): number;
        getReturnValueD(): number;
        getReturnValueC(): string;
        getReturnValue(): R;
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string, arg1: boolean, arg2: R);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: string);
        constructor(arg0: string, arg1: boolean, arg2: number);
        get returnValueJ(): number;
        get returnValueS(): number;
        get returnValueZ(): boolean;
        get returnValueB(): number;
        get returnValueF(): number;
        get returnValueI(): number;
        get returnValueD(): number;
        get returnValueC(): string;
    }
    export class $CallbackInfo implements $Cancellable {
        getId(): string;
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        static getCallInfoClassName(arg0: $Type): string;
        constructor(arg0: string, arg1: boolean);
        get id(): string;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
    export class $Cancellable {
    }
    export interface $Cancellable {
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
}
