import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $AbstractSliderButton } from "@package/net/minecraft/client/gui/components";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Runnable_, $Runnable, $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";

declare module "@package/de/keksuccino/fancymenu/util/rendering/ui/widget" {
    export class $UniqueLabeledSwitchCycleButton {
    }
    export interface $UniqueLabeledSwitchCycleButton {
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        setLabeledSwitchComponentLabel_FancyMenu(arg0: $Component_): void;
    }
    export class $CustomizableSlider {
    }
    export interface $CustomizableSlider {
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(arg0: number): void;
        setNineSliceCustomSliderBackground_FancyMenu(arg0: boolean): void;
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        setNineSliceSliderHandleBorderLeft_FancyMenu(arg0: number): void;
        setNineSliceSliderBackgroundBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        setNineSliceSliderHandleBorderBottom_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderRight_FancyMenu(arg0: number): void;
        setNineSliceSliderBackgroundBorderX_FancyMenu(arg0: number): void;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(arg0: number): void;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        setNineSliceSliderHandleBorderTop_FancyMenu(arg0: number): void;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        setNineSliceCustomSliderHandle_FancyMenu(arg0: boolean): void;
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        setNineSliceSliderHandleBorderY_FancyMenu(arg0: number): void;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setNineSliceSliderHandleBorderX_FancyMenu(arg0: number): void;
    }
    export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<$CustomizableWidget$CustomBackgroundResetBehavior> {
        static values(): $CustomizableWidget$CustomBackgroundResetBehavior[];
        static valueOf(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_NEVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER_AND_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
    }
    /**
     * Values that may be interpreted as {@link $CustomizableWidget$CustomBackgroundResetBehavior}.
     */
    export type $CustomizableWidget$CustomBackgroundResetBehavior_ = "reset_never" | "reset_on_hover" | "reset_on_unhover" | "reset_on_hover_and_unhover";
    export class $UniqueWidget {
    }
    export interface $UniqueWidget {
        getWidgetIdentifierFancyMenu(): string;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
    }
    export class $CustomizableWidget {
    }
    export interface $CustomizableWidget {
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        getCustomLabelFancyMenu(): $Component;
        isLabelShadowFancyMenu(): boolean;
        setCustomHeightFancyMenu(arg0: number): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        setCustomXFancyMenu(arg0: number): void;
        getUnhoverSoundFancyMenu(): $IAudio;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        getLabelScaleFancyMenu(): number;
        setLabelScaleFancyMenu(arg0: number): void;
        getHoverSoundFancyMenu(): $IAudio;
        resolveLabelScaleFancyMenu(): number;
        setCustomWidthFancyMenu(arg0: number): void;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        getHoverLabelFancyMenu(): $Component;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        setCustomYFancyMenu(arg0: number): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        getLastHoverStateFancyMenu(): boolean;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        getLastFocusStateFancyMenu(): boolean;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        setLabelShadowFancyMenu(arg0: boolean): void;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        stopHoverSoundFancyMenu(): void;
        stopUnhoverSoundFancyMenu(): void;
        setHiddenFancyMenu(arg0: boolean): void;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getHoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setUnderlineLabelOnHoverFancyMenu(arg0: boolean): void;
        getCustomClickSoundFancyMenu(): $IAudio;
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        setNineSliceBorderBottom_FancyMenu(arg0: number): void;
        getOriginalMessageFancyMenu(): $Component;
        setNineSliceBorderTop_FancyMenu(arg0: number): void;
        getHitboxRotationDegreesFancyMenu(): number;
        setNineSliceBorderLeft_FancyMenu(arg0: number): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        stopCustomClickSoundFancyMenu(): void;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        setNineSliceBorderRight_FancyMenu(arg0: number): void;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        resetWidgetCustomizationsFancyMenu(): void;
        isHiddenFancyMenu(): boolean;
        getHoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        resetWidgetSizeAndPositionFancyMenu(): void;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        getResetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get hoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get focusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        set nineSliceBorderX_FancyMenu(value: number);
        set nineSliceBorderBottom_FancyMenu(value: number);
        get originalMessageFancyMenu(): $Component;
        set nineSliceBorderTop_FancyMenu(value: number);
        get hitboxRotationDegreesFancyMenu(): number;
        set nineSliceBorderLeft_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        set nineSliceBorderY_FancyMenu(value: number);
        get hoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        get resetCustomizationsListenersFancyMenu(): $List<$Runnable>;
    }
}
