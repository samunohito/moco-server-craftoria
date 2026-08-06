import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        isActive(): boolean;
        getWidth(): number;
        getHeight(): number;
        getEndX(): number;
        getPosition(): $Position;
        setVisible(arg0: boolean): void;
        getX(): number;
        getEndY(): number;
        setActive(arg0: boolean): void;
        getY(): number;
        isVisible(): boolean;
        setFocused(arg0: boolean): void;
        isDragging(): boolean;
        isFocused(): boolean;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setDragging(arg0: boolean): void;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        get width(): number;
        get height(): number;
        get endX(): number;
        get position(): $Position;
        get x(): number;
        get endY(): number;
        get y(): number;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
    }
}
