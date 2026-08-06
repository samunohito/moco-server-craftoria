import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";
import { $TextEditContext_ } from "@package/ca/teamdman/sfm/client/text_editor";

declare module "@package/ca/teamdman/sfm/client/text_editor/action" {
    export interface $ITextEditAction extends RegistryMarked<RegistryTypes.SfmTextEditorActionTag, RegistryTypes.SfmTextEditorAction> {}
    export class $KeyboardImpulse extends $Record {
        modifiers(): number;
        keyCode(): number;
        scanCode(): number;
        constructor(keyCode: number, scanCode: number, modifiers: number);
    }
    /**
     * Values that may be interpreted as {@link $KeyboardImpulse}.
     */
    export type $KeyboardImpulse_ = { scanCode?: number, modifiers?: number, keyCode?: number,  } | [scanCode?: number, modifiers?: number, keyCode?: number, ];
    export class $ITextEditAction {
    }
    export interface $ITextEditAction {
        priority(): number;
        matches(arg0: $TextEditContext_, arg1: $KeyboardImpulse_): boolean;
        apply(arg0: $TextEditContext_, arg1: $KeyboardImpulse_): void;
    }
    /**
     * Values that may be interpreted as {@link $ITextEditAction}.
     */
    export type $ITextEditAction_ = RegistryTypes.SfmTextEditorAction;
}
