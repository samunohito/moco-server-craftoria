import { $Duration_ } from "@package/java/time";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ObjectSelectionList$Entry, $WidgetTooltipHolder, $ObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $GameNarrator } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";

declare module "@package/net/minecraft/realms" {
    export class $RealmsObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $ObjectSelectionList<E> {
        clear(): void;
        addEntry(entry: E): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getItemCount(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxPosition(): number;
        getRowTop(index: number): number;
        setSelectedItem(index: number): void;
        selectItem(index: number): void;
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
        hovered: E;
        height: number;
        get itemCount(): number;
        get maxPosition(): number;
        set selectedItem(value: number);
    }
    export class $RepeatedNarrator$Params {
    }
    export class $RealmsScreen extends $Screen {
        createLabelNarration(): $Component;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_);
    }
    export class $RepeatedNarrator {
        narrate(narrator: $GameNarrator, narration: $Component_): void;
        constructor(duration: $Duration_);
    }
    export class $DisconnectedRealmsScreen extends $RealmsScreen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $Screen, title: $Component_, reason: $Component_);
    }
    export class $RealmsLabel implements $Renderable {
        getText(): $Component;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        constructor(text: $Component_, x: number, y: number, color: number);
        get text(): $Component;
    }
    export class $RealmsConnect {
        connect(server: $RealmsServer, address: $ServerAddress): void;
        abort(): void;
        tick(): void;
        constructor(onlineScreen: $Screen);
    }
}
