import { $DoubleConsumer_ } from "@package/java/util/function";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Layout } from "@package/net/minecraft/client/gui/layouts";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $WidgetTooltipHolder, $Renderable, $AbstractScrollWidget } from "@package/net/minecraft/client/gui/components";
import { $Options } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/telemetry" {
    export class $TelemetryInfoScreen extends $Screen {
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
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $TelemetryEventWidget extends $AbstractScrollWidget {
        updateLayout(): void;
        setOnScrolledListener(onScrolledListener: $DoubleConsumer_ | null): void;
        onOptInChanged(optIn: boolean): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, font: $Font);
        set onScrolledListener(value: $DoubleConsumer_ | null);
    }
    export class $TelemetryEventWidget$ContentBuilder {
    }
    export class $TelemetryEventWidget$Content extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventWidget$Content}.
     */
    export type $TelemetryEventWidget$Content_ = { narration?: $Component_, container?: $Layout,  } | [narration?: $Component_, container?: $Layout, ];
}
