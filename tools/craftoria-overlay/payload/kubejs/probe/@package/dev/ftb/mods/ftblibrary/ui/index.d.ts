import { $Component_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $BooleanConsumer_, $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $BaseScreenAccessor } from "@package/dev/uncandango/alltheleaks/mixin/core/main/accessor";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Color4I, $ImageIcon, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Iterable_, $Enum, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Key, $KeyModifiers, $MouseButton } from "@package/dev/ftb/mods/ftblibrary/ui/input";
export * as input from "@package/dev/ftb/mods/ftblibrary/ui/input";

declare module "@package/dev/ftb/mods/ftblibrary/ui" {
    export class $ContextMenu extends $ModalPanel implements $PopupMenu {
        getModalPanel(): $ModalPanel;
        setMaxRows(maxRows: number): void;
        hasIcons(): boolean;
        setDrawVerticalSeparators(drawVerticalSeparators: boolean): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        get modalPanel(): $ModalPanel;
        set maxRows(value: number);
        set drawVerticalSeparators(value: boolean);
    }
    export class $Panel extends $Widget {
        add(widget: $Widget): void;
        addAll(list: $Iterable_<$Widget>): void;
        setOffset(flag: boolean): void;
        getContentHeight(): number;
        getWidgets(): $List<$Widget>;
        getContentWidth(): number;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        align(layout: $WidgetLayout_): number;
        addWidgets(): void;
        clearWidgets(): void;
        getScrollStep(): number;
        getWidget(index: number): $Widget;
        alignWidgets(): void;
        isDefaultScrollVertical(): boolean;
        drawOffsetBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        isMouseOverAnyWidget(): boolean;
        scrollPanel(scroll: number): boolean;
        movePanelScroll(dx: number, dy: number): boolean;
        getOnlyRenderWidgetsInside(): boolean;
        setScrollStep(s: number): void;
        refreshWidgets(): void;
        setOnlyRenderWidgetsInside(value: boolean): void;
        getOnlyInteractWithWidgetsInside(): boolean;
        drawWidget(graphics: $GuiGraphics, theme: $Theme, widget: $Widget, x: number, y: number, w: number, h: number): void;
        isOffset(): boolean;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        setScrollX(scroll: number): void;
        getScrollX(): number;
        getScrollY(): number;
        setScrollY(scroll: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
        get contentHeight(): number;
        get widgets(): $List<$Widget>;
        get contentWidth(): number;
        get defaultScrollVertical(): boolean;
        get mouseOverAnyWidget(): boolean;
    }
    export class $WidgetType extends $Enum<$WidgetType> {
        static values(): $WidgetType[];
        static valueOf(name: string): $WidgetType;
        static mouseOver(mouseOver: boolean): $WidgetType;
        static DISABLED: $WidgetType;
        static MOUSE_OVER: $WidgetType;
        static NORMAL: $WidgetType;
    }
    /**
     * Values that may be interpreted as {@link $WidgetType}.
     */
    export type $WidgetType_ = "normal" | "mouse_over" | "disabled";
    export class $Theme {
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, color: $Color4I, flags: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, flags: number): number;
        getFont(): $Font;
        drawButton(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        getStringWidth(text: string): number;
        getStringWidth(text: $FormattedText): number;
        getStringWidth(text: $FormattedCharSequence_): number;
        drawScrollBarBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawPanelBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        trimStringToWidth(text: string, width: number): string;
        trimStringToWidth(text: $FormattedText, width: number): $FormattedText;
        drawTextBox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        getContentColor(type: $WidgetType_): $Color4I;
        getFontHeight(): number;
        drawScrollBar(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, vertical: boolean): void;
        drawSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawContextMenuBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawWidget(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawGui(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawCheckboxBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, radioButton: boolean): void;
        getInvertedContentColor(): $Color4I;
        listFormattedStringToWidth(text: $FormattedText, width: number): $List<$FormattedText>;
        trimStringToWidthReverse(text: string, width: number): string;
        drawCheckbox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, selected: boolean, radioButton: boolean): void;
        drawContainerSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawHorizontalTab(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, selected: boolean): void;
        static MOUSE_OVER: number;
        static BACKGROUND_SQUARES: $ImageIcon;
        static CENTERED: number;
        static SHADOW: number;
        static CENTERED_V: number;
        static DARK: number;
        static renderDebugBoxes: boolean;
        static UNICODE: number;
        static DEFAULT: $Theme;
        constructor();
        get font(): $Font;
        get fontHeight(): number;
        get invertedContentColor(): $Color4I;
    }
    export class $BaseScreen extends $Panel implements $BaseScreenAccessor {
        getMinecraft(): $Minecraft;
        onInit(): boolean;
        drawForeground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getTheme(): $Theme;
        onPostInit(): void;
        shouldCloseOnEsc(): boolean;
        isMouseOver(x: number, y: number, w: number, h: number): boolean;
        isMouseOver(widget: $Widget): boolean;
        onBack(): void;
        updateGui(mx: number, my: number, pt: number): void;
        openContextMenu(newContextMenu: $ContextMenu): void;
        openContextMenu(menuItems: $List_<$ContextMenuItem>): $ContextMenu;
        doesGuiPauseGame(): boolean;
        openDropdownMenu(menuItems: $List_<$ContextMenuItem>): $DropDownMenu;
        openDropdownMenu(dropDownMenu: $DropDownMenu): void;
        openPopupMenu(popupMenu: $PopupMenu_): void;
        getContextMenu(): ($ModalPanel) | undefined;
        onClosedByKey(key: $Key): boolean;
        drawDefaultBackground(graphics: $GuiGraphics): boolean;
        pushModalPanel(modalPanel: $ModalPanel): void;
        openYesNoFull(title: $Component_, desc: $Component_, callback: $BooleanConsumer_): void;
        setFocusedWidget(widget: $Widget): void;
        getMaxZLevel(): number;
        usePreviousScreenOnBack(): boolean;
        getPrevScreen(): $Screen;
        setPreviousScreen(prevScreen: $Screen): void;
        setRenderBlur(renderBlur: boolean): void;
        closeModalPanel(panel: $ModalPanel): void;
        anyModalPanelOpen(): boolean;
        popModalPanel(): $ModalPanel;
        shouldRenderBlur(): boolean;
        openYesNo(title: $Component_, desc: $Component_, callback: $Runnable_): void;
        initGui(): void;
        atl$setPrevScreen(arg0: $Screen): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(previousScreen: $Screen);
        constructor();
        get minecraft(): $Minecraft;
        get theme(): $Theme;
        get contextMenu(): ($ModalPanel) | undefined;
        set focusedWidget(value: $Widget);
        get maxZLevel(): number;
        get prevScreen(): $Screen;
        set previousScreen(value: $Screen);
        set renderBlur(value: boolean);
    }
    export class $ModalPanel extends $Panel {
        getExtraZlevel(): number;
        setExtraZlevel(extraZlevel: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
    }
    export class $IScreenWrapper {
    }
    export interface $IScreenWrapper extends $IOpenableScreen {
        openGui(): void;
        getGui(): $BaseScreen;
        closeGui(openPrevScreen: boolean): void;
        get gui(): $BaseScreen;
    }
    /**
     * Values that may be interpreted as {@link $IScreenWrapper}.
     */
    export type $IScreenWrapper_ = (() => $BaseScreen);
    export class $CursorType extends $Enum<$CursorType> {
        static values(): $CursorType[];
        static valueOf(name: string): $CursorType;
        static set(type: $CursorType_): void;
        static VRESIZE: $CursorType;
        static ARROW: $CursorType;
        static CROSSHAIR: $CursorType;
        static IBEAM: $CursorType;
        static HRESIZE: $CursorType;
        static HAND: $CursorType;
    }
    /**
     * Values that may be interpreted as {@link $CursorType}.
     */
    export type $CursorType_ = "arrow" | "ibeam" | "crosshair" | "hand" | "hresize" | "vresize";
    export class $Button extends $Widget {
        setTitle(s: $Component_): $Button;
        setIcon(i: $Icon): $Button;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        onClicked(arg0: $MouseButton): void;
        setForceButtonSize(forceButtonSize: boolean): $Button;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, t: $Component_, i: $Icon);
        constructor(panel: $Panel);
        set title(value: $Component_);
        set icon(value: $Icon);
        set forceButtonSize(value: boolean);
    }
    export class $DropDownMenu extends $ModalPanel implements $PopupMenu {
        getModalPanel(): $ModalPanel;
        setMaxHeightPercent(maxHeightPercent: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        get modalPanel(): $ModalPanel;
        set maxHeightPercent(value: number);
    }
    export class $IOpenableScreen {
    }
    export interface $IOpenableScreen extends $Runnable {
        run(): void;
        openGui(): void;
        closeContextMenu(): void;
        openGuiLater(): void;
        openAfter(runnable: $Runnable_): $Runnable;
        closeGui(): void;
        closeGui(openPrevScreen: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IOpenableScreen}.
     */
    export type $IOpenableScreen_ = (() => void);
    export class $WidgetLayout {
        static VERTICAL: $WidgetLayout;
        static NO_PADDING: $WidgetLayout$Padding;
        static HORIZONTAL: $WidgetLayout;
        static NONE: $WidgetLayout;
    }
    export interface $WidgetLayout {
        align(arg0: $Panel): number;
        getLayoutPadding(): $WidgetLayout$Padding;
        get layoutPadding(): $WidgetLayout$Padding;
    }
    /**
     * Values that may be interpreted as {@link $WidgetLayout}.
     */
    export type $WidgetLayout_ = ((arg0: $Panel) => number);
    export class $PopupMenu {
    }
    export interface $PopupMenu {
        getModalPanel(): $ModalPanel;
        get modalPanel(): $ModalPanel;
    }
    /**
     * Values that may be interpreted as {@link $PopupMenu}.
     */
    export type $PopupMenu_ = (() => $ModalPanel);
    export class $ContextMenuItem implements $Comparable<$ContextMenuItem> {
        compareTo(o: $ContextMenuItem): number;
        isEnabled(): boolean;
        static separator(): $ContextMenuItem;
        getIcon(): $Icon;
        setEnabled(enabled: boolean): $ContextMenuItem;
        static title(title: $Component_): $ContextMenuItem;
        getTitle(): $Component;
        static subMenu(title: $Component_, icon: $Icon, subItems: $List_<$ContextMenuItem>): $ContextMenuItem;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        createWidget(panel: $ContextMenu): $Widget;
        onClicked(button: $Button, panel: $Panel, mouseButton: $MouseButton): void;
        addMouseOverText(list: $TooltipList): void;
        getYesNoText(): $Component;
        isClickable(): boolean;
        setYesNoText(s: $Component_): $ContextMenuItem;
        setCloseMenu(v: boolean): $ContextMenuItem;
        static SEPARATOR: $ContextMenuItem;
        constructor(title: $Component_, icon: $Icon, callback: $Consumer_<$Button>);
        get icon(): $Icon;
        get clickable(): boolean;
        set closeMenu(value: boolean);
    }
    export class $Widget$DrawLayer extends $Enum<$Widget$DrawLayer> {
        static values(): $Widget$DrawLayer[];
        static valueOf(name: string): $Widget$DrawLayer;
        static FOREGROUND: $Widget$DrawLayer;
        static BACKGROUND: $Widget$DrawLayer;
    }
    /**
     * Values that may be interpreted as {@link $Widget$DrawLayer}.
     */
    export type $Widget$DrawLayer_ = "background" | "foreground";
    export class $Widget implements $IScreenWrapper, $Comparable<$Widget> {
        compareTo(widget: $Widget): number;
        isEnabled(): boolean;
        getParent(): $Panel;
        setSize(w: number, h: number): void;
        getWidth(): number;
        getHeight(): number;
        tick(): void;
        mousePressed(button: $MouseButton): boolean;
        static isKeyDown(key: number): boolean;
        onClosed(): void;
        /**
         * @deprecated
         */
        getScreen(): $Window;
        getWindow(): $Window;
        getMouseY(): number;
        getMouseX(): number;
        keyPressed(key: $Key): boolean;
        getX(): number;
        setWidth(v: number): void;
        setHeight(v: number): void;
        getTitle(): $Component;
        getCursor(): $CursorType;
        getY(): number;
        setY(v: number): void;
        setX(v: number): void;
        draw(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        static isShiftKeyDown(): boolean;
        mouseDoubleClicked(button: $MouseButton): boolean;
        getPosX(): number;
        getPosY(): number;
        setPos(x: number, y: number): void;
        charTyped(c: string, modifiers: $KeyModifiers): boolean;
        mouseReleased(button: $MouseButton): void;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        mouseScrolled(scroll: number): boolean;
        keyReleased(key: $Key): void;
        isMouseOver(): boolean;
        getPartialTicks(): number;
        handleClick(scheme: string, path: string): boolean;
        handleClick(click: string): boolean;
        getWidgetType(): $WidgetType;
        shouldDraw(): boolean;
        setPosAndSize(x: number, y: number, w: number, h: number): $Widget;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        updateMouseOver(mouseX: number, mouseY: number): void;
        shouldAddMouseOverText(): boolean;
        isGhostIngredientTarget(ingredient: $Object): boolean;
        acceptGhostIngredient(ingredient: $Object): void;
        getGui(): $BaseScreen;
        static getClipboardString(): string;
        getDrawLayer(): $Widget$DrawLayer;
        static setClipboardString(string: string): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        setDrawLayer(drawLayer: $Widget$DrawLayer_): void;
        addMouseOverText(list: $TooltipList): void;
        static isMouseButtonDown(button: $MouseButton): boolean;
        playClickSound(): void;
        static isCtrlKeyDown(): boolean;
        getIngredientUnderMouse(): ($PositionedIngredient) | undefined;
        openGui(): void;
        closeGui(openPrevScreen: boolean): void;
        run(): void;
        closeContextMenu(): void;
        openGuiLater(): void;
        openAfter(runnable: $Runnable_): $Runnable;
        closeGui(): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(p: $Panel);
        get enabled(): boolean;
        get parent(): $Panel;
        get screen(): $Window;
        get window(): $Window;
        get mouseY(): number;
        get mouseX(): number;
        get title(): $Component;
        get cursor(): $CursorType;
        static get shiftKeyDown(): boolean;
        get mouseOver(): boolean;
        get partialTicks(): number;
        get widgetType(): $WidgetType;
        get gui(): $BaseScreen;
        static get ctrlKeyDown(): boolean;
        get ingredientUnderMouse(): ($PositionedIngredient) | undefined;
    }
}
