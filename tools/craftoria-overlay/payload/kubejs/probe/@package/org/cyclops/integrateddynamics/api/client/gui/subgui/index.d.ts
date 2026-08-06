import { $Predicate_ } from "@package/java/util/function";
import { $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $List_ } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IConfigRenderPattern } from "@package/org/cyclops/integrateddynamics/api/logicprogrammer";

declare module "@package/org/cyclops/integrateddynamics/api/client/gui/subgui" {
    export class $ISubGuiBox {
    }
    export interface $ISubGuiBox extends $ISubGui {
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        getY(): number;
        get width(): number;
        get height(): number;
        get x(): number;
        get y(): number;
    }
    export class $IGuiInputElementValueType<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
    }
    export interface $IGuiInputElementValueType<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<S, G, C> {
        getValue(): $IValue;
        setValue(arg0: $IValue): void;
        setValidator(arg0: $Predicate_<$IValue>): void;
        setValueInGui(arg0: S, arg1: boolean): void;
        set validator(value: $Predicate_<$IValue>);
    }
    export class $IGuiInputElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
    }
    export interface $IGuiInputElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
        getName(): $Component;
        validate(): $Component;
        getSymbol(): string;
        getColor(): number;
        deactivate(): void;
        activate(): void;
        loadTooltip(arg0: $List_<$Component_>): void;
        getRenderPattern(): $IConfigRenderPattern;
        createSubGui(arg0: number, arg1: number, arg2: number, arg3: number, arg4: G, arg5: C): S;
        get name(): $Component;
        get symbol(): string;
        get color(): number;
        get renderPattern(): $IConfigRenderPattern;
    }
    export class $ISubGui {
    }
    export interface $ISubGui {
        init(arg0: number, arg1: number): void;
        tick(): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        renderBg(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $TextureManager, arg4: $Font, arg5: number, arg6: number, arg7: number): void;
        drawGuiContainerForegroundLayer(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $TextureManager, arg4: $Font, arg5: number, arg6: number): void;
    }
}
