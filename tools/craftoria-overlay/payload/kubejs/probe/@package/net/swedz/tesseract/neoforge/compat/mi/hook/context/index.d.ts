import { $MIHook } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook";
export * as listener from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/listener";
export * as machine from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/machine";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context" {
    export class $MIHookContext {
        constructor(arg0: $MIHook);
    }
}
