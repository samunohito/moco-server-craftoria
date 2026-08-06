import { $Object } from "@package/java/lang";

declare module "@package/dan200/computercraft/api/lua" {
    export class $ILuaCallback {
    }
    export interface $ILuaCallback {
        resume(arg0: $Object[]): $MethodResult;
    }
    /**
     * Values that may be interpreted as {@link $ILuaCallback}.
     */
    export type $ILuaCallback_ = ((arg0: $Object[]) => $MethodResult);
    export class $MethodResult {
        static of(): $MethodResult;
        static of(...arg0: $Object[]): $MethodResult;
        static of(arg0: $Object): $MethodResult;
        static "yield"(arg0: $Object[], arg1: $ILuaCallback_): $MethodResult;
        getResult(): $Object[];
        getCallback(): $ILuaCallback;
        static pullEvent(arg0: string, arg1: $ILuaCallback_): $MethodResult;
        getErrorAdjust(): number;
        static pullEventRaw(arg0: string, arg1: $ILuaCallback_): $MethodResult;
        adjustError(arg0: number): $MethodResult;
        get result(): $Object[];
        get callback(): $ILuaCallback;
        get errorAdjust(): number;
    }
}
