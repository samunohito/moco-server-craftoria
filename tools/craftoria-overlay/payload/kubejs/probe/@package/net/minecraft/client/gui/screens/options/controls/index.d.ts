import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $KeyMapping, $Options } from "@package/net/minecraft/client";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List } from "@package/java/util";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $AccessKeyBindsScreen, $AccessKeyBindsScreenNeoForge } from "@package/com/blamejared/controlling/mixin";

declare module "@package/net/minecraft/client/gui/screens/options/controls" {
    export class $KeyBindsList extends $ContainerObjectSelectionList<$KeyBindsList$Entry> {
        resetMappingAndUpdateButtons(): void;
        refreshEntries(): void;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        focused: boolean;
        y: number;
        hovered: $KeyBindsList$Entry;
        height: number;
        constructor(keyBindsScreen: $KeyBindsScreen, minecraft: $Minecraft);
    }
    export class $KeyBindsList$Entry extends $ContainerObjectSelectionList$Entry<$KeyBindsList$Entry> {
        constructor();
    }
    export class $ControlsScreen extends $OptionsSubScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $KeyBindsList$CategoryEntry extends $KeyBindsList$Entry {
        constructor(name: $KeyBindsList, arg1: $Component_);
    }
    export class $KeyBindsList$KeyEntry extends $KeyBindsList$Entry {
        key: $KeyMapping;
        constructor(key: $KeyBindsList, name: $KeyMapping, arg2: $Component_);
    }
    export class $KeyBindsScreen extends $OptionsSubScreen implements $AccessKeyBindsScreen, $AccessKeyBindsScreenNeoForge {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isIsLastModifierHeldDown(): boolean;
        getLastPressedModifier(): $InputConstants$Key;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isIsLastKeyHeldDown(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setIsLastKeyHeldDown(focused: boolean): void;
        controlling$getResetButton(): $Button;
        controlling$setResetButton(arg0: $Button): void;
        setLastPressedModifier(arg0: $InputConstants$Key): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setIsLastModifierHeldDown(focused: boolean): void;
        controlling$getKeyBindsList(): $KeyBindsList;
        controlling$setKeyBindsList(arg0: $KeyBindsList): void;
        getLastPressedKey(): $InputConstants$Key;
        setLastPressedKey(arg0: $InputConstants$Key): void;
        selectedKey: $KeyMapping;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        lastKeySelection: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
}
