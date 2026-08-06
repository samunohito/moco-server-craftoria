import { $Int2ObjectOpenHashMap, $Int2IntFunction, $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Consumer } from "@package/java/util/function";
import { $IntervalSet } from "@package/org/antlr/v4/runtime/misc";
import { $LocalizationEntry } from "@package/ca/teamdman/sfm/common/localization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Runnable_, $Record, $StringBuilder } from "@package/java/lang";
import { $LabelPositionHolder } from "@package/ca/teamdman/sfm/common/label";
import { $LinkedList, $ArrayDeque } from "@package/java/util";
import { $ISFMTextEditScreen } from "@package/ca/teamdman/sfm/client/screen/text_editor";
export * as action from "@package/ca/teamdman/sfm/client/text_editor/action";

declare module "@package/ca/teamdman/sfm/client/text_editor" {
    export class $ISFMTextEditScreenOpenContext {
        static EXIT_WITHOUT_SAVING_CONFIRM_SCREEN_MESSAGE: $LocalizationEntry;
        static EXIT_WITHOUT_SAVING_CONFIRM_SCREEN_NO_BUTTON: $LocalizationEntry;
        static EXIT_WITHOUT_SAVING_CONFIRM_SCREEN_TITLE: $LocalizationEntry;
        static EXIT_WITHOUT_SAVING_CONFIRM_SCREEN_YES_BUTTON: $LocalizationEntry;
    }
    export interface $ISFMTextEditScreenOpenContext {
        initialValue(): string;
        saveWriter(): $Consumer<string>;
        onTryClose(arg0: string, arg1: $Runnable_): void;
        labelPositionHolder(): $LabelPositionHolder;
        onSaveAndClose(arg0: string): void;
    }
    export class $Caret extends $Record {
        compareTo(arg0: $Caret_): number;
        moveUpOneLine(arg0: $Int2IntFunction_): $Caret;
        moveDownOneLine(arg0: $Int2IntFunction_, arg1: number): $Caret;
        lineIndex(): number;
        moveLeftOneCharacter(arg0: $Int2IntFunction_): $Caret;
        moveRightOneCharacter(arg0: $Int2IntFunction_, arg1: number): $Caret;
        gapIndex(): number;
        constructor(lineIndex: number, gapIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $Caret}.
     */
    export type $Caret_ = { gapIndex?: number, lineIndex?: number,  } | [gapIndex?: number, lineIndex?: number, ];
    export class $TextEditContext extends $Record {
        lines(): $LinkedList<$StringBuilder>;
        copy(): $TextEditContext;
        getContent(): string;
        multiCursor(): $MultiCursor;
        deleteSelectedText(): void;
        lineLengths(): $Int2IntFunction;
        assertInvariants(): void;
        selectedCharactersByLine(): $Int2ObjectOpenHashMap<$IntervalSet>;
        insertTextAtCursors(arg0: string): void;
        getCharacterCount(): number;
        constructor(multiCursor: $MultiCursor_, lines: $LinkedList<$StringBuilder>);
        constructor(arg0: string);
        constructor();
        get content(): string;
        get characterCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextEditContext}.
     */
    export type $TextEditContext_ = { multiCursor?: $MultiCursor_, lines?: $LinkedList<$StringBuilder>,  } | [multiCursor?: $MultiCursor_, lines?: $LinkedList<$StringBuilder>, ];
    export class $Cursor extends $Record {
        tail(): $Caret;
        head(): $Caret;
        getEnd(): $Caret;
        growSelectionLeft(arg0: $Int2IntFunction_): $Cursor;
        hasSelection(): boolean;
        growSelectionRight(arg0: $Int2IntFunction_, arg1: number): $Cursor;
        getBeginning(): $Caret;
        isHeadOnLeft(): boolean;
        constructor(arg0: number);
        constructor(tail: $Caret_, head: $Caret_);
        get end(): $Caret;
        get beginning(): $Caret;
        get headOnLeft(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Cursor}.
     */
    export type $Cursor_ = { head?: $Caret_, tail?: $Caret_,  } | [head?: $Caret_, tail?: $Caret_, ];
    export interface $ISFMTextEditorRegistration extends RegistryMarked<RegistryTypes.SfmTextEditorTag, RegistryTypes.SfmTextEditor> {}
    export class $ISFMTextEditorRegistration {
    }
    export interface $ISFMTextEditorRegistration {
        createScreen(arg0: $ISFMTextEditScreenOpenContext): $ISFMTextEditScreen;
    }
    /**
     * Values that may be interpreted as {@link $ISFMTextEditorRegistration}.
     */
    export type $ISFMTextEditorRegistration_ = RegistryTypes.SfmTextEditor | ((arg0: $ISFMTextEditScreenOpenContext) => $ISFMTextEditScreen);
    export class $MultiCursor extends $Record {
        addCursor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        cursors(): $ArrayDeque<$Cursor>;
        constructor();
        constructor(cursors: $ArrayDeque<$Cursor_>);
    }
    /**
     * Values that may be interpreted as {@link $MultiCursor}.
     */
    export type $MultiCursor_ = { cursors?: $ArrayDeque<$Cursor_>,  } | [cursors?: $ArrayDeque<$Cursor_>, ];
}
