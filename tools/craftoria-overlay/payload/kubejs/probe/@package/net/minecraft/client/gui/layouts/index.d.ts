import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $AccessorGridLayout } from "@package/com/terraformersmc/mod_menu/mixin";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout implements $AccessorGridLayout {
        spacing(columnSpacing: number): $GridLayout;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number): T;
        defaultCellSetting(): $LayoutSettings;
        createRowHelper(columns: number): $GridLayout$RowHelper;
        newCellSettings(): $LayoutSettings;
        rowSpacing(columnSpacing: number): $GridLayout;
        columnSpacing(columnSpacing: number): $GridLayout;
        getChildren(): $List<$LayoutElement>;
        constructor();
        constructor(x: number, y: number);
        get children(): $List<$LayoutElement>;
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T): T;
        getGrid(): $GridLayout;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        arrangeElements(): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        static alignInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_, deltaX: number, deltaY: number): void;
        static alignInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number, deltaX: number, deltaY: number): void;
        static centerInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number): void;
        static centerInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_): void;
        setMinDimensions(minWidth: number, minHeight: number): $FrameLayout;
        newChildLayoutSettings(): $LayoutSettings;
        setMinWidth(minHeight: number): $FrameLayout;
        defaultChildLayoutSetting(): $LayoutSettings;
        setMinHeight(minHeight: number): $FrameLayout;
        static alignInDimension(position: number, rectangleLength: number, childLength: number, setter: $Consumer_<number>, delta: number): void;
        constructor(x: number, y: number, width: number, height: number);
        constructor(width: number, height: number);
        constructor();
        set minWidth(value: number);
        set minHeight(value: number);
    }
    export class $LinearLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        spacing(spacing: number): $LinearLayout;
        getX(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        getY(): number;
        setY(x: number): void;
        setX(x: number): void;
        static horizontal(): $LinearLayout;
        defaultCellSetting(): $LayoutSettings;
        static vertical(): $LinearLayout;
        newCellSettings(): $LayoutSettings;
        arrangeElements(): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(width: number, height: number, orientation: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        getY(): number;
        setY(x: number): void;
        setX(x: number): void;
        arrangeElements(): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(x: number, y: number, width: number, height: number);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        getY(): number;
        setY(x: number): void;
        setX(x: number): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        addChild<T extends $LayoutElement>(layout: $GridLayout, element: T, index: number, layoutSettings: $LayoutSettings): T;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        copy(): $LayoutSettings;
        padding(padding: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        paddingBottom(padding: number): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        paddingTop(padding: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        paddingRight(padding: number): $LayoutSettings;
        paddingLeft(padding: number): $LayoutSettings;
        paddingHorizontal(padding: number): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        paddingVertical(padding: number): $LayoutSettings;
        alignVertically(xAlignment: number): $LayoutSettings;
        alignHorizontally(xAlignment: number): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        static width(height: number): $SpacerElement;
        static height(height: number): $SpacerElement;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        getY(): number;
        setY(x: number): void;
        setX(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setPosition(width: number, height: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_, layoutSettings: $Consumer_<$LayoutSettings>): $Layout;
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, layoutSettingsCreator: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        constructor(width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
        constructor(x: number, y: number, width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        copy(): $LayoutSettings$LayoutSettingsImpl;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingBottom(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingRight(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingLeft(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingHorizontal(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        paddingTop(paddingLeft: number): $LayoutSettings;
        paddingVertical(paddingLeft: number): $LayoutSettings;
        alignHorizontally(yAlignment: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor();
        constructor(other: $LayoutSettings$LayoutSettingsImpl);
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        getContentHeight(): number;
        getX(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getY(): number;
        setY(footerHeight: number): void;
        setX(footerHeight: number): void;
        getHeaderHeight(): number;
        addTitleHeader(message: $Component_, font: $Font): void;
        addToContents<T extends $LayoutElement>(child: T): T;
        addToContents<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T): T;
        addToFooter<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        setHeaderHeight(footerHeight: number): void;
        setFooterHeight(footerHeight: number): void;
        addToHeader<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToHeader<T extends $LayoutElement>(child: T): T;
        arrangeElements(): void;
        getFooterHeight(): number;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(screen: $Screen, headerHeight: number, footerHeight: number);
        constructor(screen: $Screen, height: number);
        constructor(screen: $Screen);
        get width(): number;
        get height(): number;
        get contentHeight(): number;
        get rectangle(): $ScreenRectangle;
    }
}
