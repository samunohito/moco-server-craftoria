import { $ServerLinks_ } from "@package/net/minecraft/server";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $LanServer } from "@package/net/minecraft/client/server";
import { $ServerData, $ServerList, $ServerStatusPinger } from "@package/net/minecraft/client/multiplayer";
import { $AccessorJoinMultiplayerScreen, $AccessorServerSelectionListEntry } from "@package/com/illusivesoulworks/cherishedworlds/mixin/core";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AutoCloseable } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/multiplayer" {
    export class $ServerSelectionList$NetworkServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $LanServer;
        getServerNarration(): $Component;
        get serverData(): $LanServer;
        get serverNarration(): $Component;
    }
    export class $ServerSelectionList$Entry extends $ObjectSelectionList$Entry<$ServerSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        constructor();
    }
    export class $JoinMultiplayerScreen extends $Screen implements $AccessorJoinMultiplayerScreen {
        getPinger(): $ServerStatusPinger;
        getServers(): $ServerList;
        setSelected(selected: $ServerSelectionList$Entry): void;
        joinSelectedServer(): void;
        getDeleteButton(): $Button;
        getSelectionList(): $ServerSelectionList;
        static MENU_BACKGROUND: $ResourceLocation;
        static LOWER_ROW_BUTTON_WIDTH: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static FOOTER_HEIGHT: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TOP_ROW_BUTTON_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static BUTTON_ROW_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen);
        get pinger(): $ServerStatusPinger;
        get servers(): $ServerList;
        set selected(value: $ServerSelectionList$Entry);
        get deleteButton(): $Button;
        get selectionList(): $ServerSelectionList;
    }
    export class $SafetyScreen extends $WarningScreen {
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
        constructor(previous: $Screen);
    }
    export class $ServerReconfigScreen extends $Screen {
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
        constructor(title: $Component_, connection: $Connection);
    }
    export class $WarningScreen extends $Screen {
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
    }
    export class $ServerLinksScreen$LinkListEntry extends $ContainerObjectSelectionList$Entry<$ServerLinksScreen$LinkListEntry> {
    }
    export class $ServerSelectionList extends $ObjectSelectionList<$ServerSelectionList$Entry> {
        removed(): void;
        setSelected(entry: $ServerSelectionList$Entry | null): void;
        updateNetworkServers(lanServers: $List_<$LanServer>): void;
        updateOnlineServers(servers: $ServerList): void;
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
        hovered: $ServerSelectionList$Entry;
        height: number;
        constructor(screen: $JoinMultiplayerScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        set selected(value: $ServerSelectionList$Entry | null);
    }
    export class $ServerSelectionList$OnlineServerEntry extends $ServerSelectionList$Entry implements $AccessorServerSelectionListEntry {
        getServerData(): $ServerData;
        updateServerList(): void;
        static createEntry$cherishedworlds_$md$f87c94$0(arg0: $ServerSelectionList, arg1: $JoinMultiplayerScreen, arg2: $ServerData): $ServerSelectionList$OnlineServerEntry;
        get serverData(): $ServerData;
    }
    export class $ServerSelectionList$LANHeader extends $ServerSelectionList$Entry {
        constructor();
    }
    export class $ServerLinksScreen$LinkList extends $ContainerObjectSelectionList<$ServerLinksScreen$LinkListEntry> {
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
        hovered: $ServerLinksScreen$LinkListEntry;
        height: number;
    }
    export class $ServerLinksScreen extends $Screen {
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
        constructor(lastScreen: $Screen, links: $ServerLinks_);
    }
}
