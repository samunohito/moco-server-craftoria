import { $Consumer_ } from "@package/java/util/function";
import { $CreateWorldScreen } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/de/keksuccino/modernworldcreation/util/rendering/screens" {
    export class $ExtendedCreateWorldScreen {
    }
    export interface $ExtendedCreateWorldScreen {
        setOnInitBody_ModernWorldCreation(arg0: $Consumer_<$CreateWorldScreen>): void;
        postPostRenderTask_ModernWorldCreation(arg0: $ExtendedCreateWorldScreen$MWCRenderTask_): void;
        set onInitBody_ModernWorldCreation(value: $Consumer_<$CreateWorldScreen>);
    }
    export class $ExtendedCreateWorldScreen$MWCRenderTask {
    }
    export interface $ExtendedCreateWorldScreen$MWCRenderTask {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedCreateWorldScreen$MWCRenderTask}.
     */
    export type $ExtendedCreateWorldScreen$MWCRenderTask_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
}
