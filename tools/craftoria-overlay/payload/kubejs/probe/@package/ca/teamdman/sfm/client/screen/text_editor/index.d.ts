import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Enum } from "@package/java/lang";
import { $ISFMTextEditScreenOpenContext } from "@package/ca/teamdman/sfm/client/text_editor";

declare module "@package/ca/teamdman/sfm/client/screen/text_editor" {
    export class $ISFMTextEditScreen$OpenBehaviour extends $Enum<$ISFMTextEditScreen$OpenBehaviour> {
        static values(): $ISFMTextEditScreen$OpenBehaviour[];
        static valueOf(arg0: string): $ISFMTextEditScreen$OpenBehaviour;
        static Replace: $ISFMTextEditScreen$OpenBehaviour;
        static Push: $ISFMTextEditScreen$OpenBehaviour;
    }
    /**
     * Values that may be interpreted as {@link $ISFMTextEditScreen$OpenBehaviour}.
     */
    export type $ISFMTextEditScreen$OpenBehaviour_ = "push" | "replace";
    export class $ISFMTextEditScreen {
    }
    export interface $ISFMTextEditScreen {
        openContext(): $ISFMTextEditScreenOpenContext;
        openBehaviour(): $ISFMTextEditScreen$OpenBehaviour;
        asScreen(): $Screen;
        onPreferenceChanged(): void;
    }
    /**
     * Values that may be interpreted as {@link $ISFMTextEditScreen}.
     */
    export type $ISFMTextEditScreen_ = (() => $ISFMTextEditScreenOpenContext);
}
