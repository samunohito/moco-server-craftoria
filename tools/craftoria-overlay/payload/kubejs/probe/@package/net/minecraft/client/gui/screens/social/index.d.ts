import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID, $List, $Set, $UUID_, $Collection_ } from "@package/java/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/gui/screens/social" {
    export class $SocialInteractionsScreen$Page extends $Enum<$SocialInteractionsScreen$Page> {
        static values(): $SocialInteractionsScreen$Page[];
        static valueOf(arg0: string): $SocialInteractionsScreen$Page;
        static ALL: $SocialInteractionsScreen$Page;
        static BLOCKED: $SocialInteractionsScreen$Page;
        static HIDDEN: $SocialInteractionsScreen$Page;
    }
    /**
     * Values that may be interpreted as {@link $SocialInteractionsScreen$Page}.
     */
    export type $SocialInteractionsScreen$Page_ = "all" | "hidden" | "blocked";
    export class $PlayerEntry extends $ContainerObjectSelectionList$Entry<$PlayerEntry> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isRemoved(): boolean;
        setRemoved(hasRecentMessages: boolean): void;
        getPlayerId(): $UUID;
        getPlayerName(): string;
        setHasRecentMessages(hasRecentMessages: boolean): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        hasRecentMessages(): boolean;
        getSkinGetter(): $Supplier<$PlayerSkin>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isChatReportable(): boolean;
        static BG_FILL: number;
        static PLAYERNAME_COLOR: number;
        static BG_FILL_REMOVED: number;
        static SKIN_SHADE: number;
        static PLAYER_STATUS_COLOR: number;
        constructor(minecraft: $Minecraft, socialInteractionsScreen: $SocialInteractionsScreen, id: $UUID_, playerName: string, skinGetter: $Supplier_<$PlayerSkin>, playerReportable: boolean);
        get playerId(): $UUID;
        get playerName(): string;
        get skinGetter(): $Supplier<$PlayerSkin>;
        get chatReportable(): boolean;
    }
    export class $SocialInteractionsScreen extends $Screen {
        onAddPlayer(playerInfo: $PlayerInfo): void;
        onRemovePlayer(id: $UUID_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static LIST_START: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static SEARCH_START: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        constructor(lastScreen: $Screen | null);
    }
    export class $SocialInteractionsPlayerList extends $ContainerObjectSelectionList<$PlayerEntry> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isEmpty(): boolean;
        addPlayer(playerInfo: $PlayerInfo, page: $SocialInteractionsScreen$Page_): void;
        setFilter(filter: string): void;
        removePlayer(id: $UUID_): void;
        updatePlayerList(ids: $Collection_<$UUID_>, scrollAmount: number, arg2: boolean): void;
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
        hovered: $PlayerEntry;
        height: number;
        constructor(socialInteractionsScreen: $SocialInteractionsScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get empty(): boolean;
        set filter(value: string);
    }
    export class $PlayerSocialManager {
        isHidden(id: $UUID_): boolean;
        addPlayer(playerInfo: $PlayerInfo): void;
        showPlayer(id: $UUID_): void;
        hidePlayer(id: $UUID_): void;
        isBlocked(id: $UUID_): boolean;
        stopOnlineMode(): void;
        startOnlineMode(): void;
        shouldHideMessageFrom(id: $UUID_): boolean;
        removePlayer(id: $UUID_): void;
        getHiddenPlayers(): $Set<$UUID>;
        handler$bfk000$supplementaries$supp$getPlayer(arg0: $PlayerInfo, arg1: $CallbackInfo): void;
        handler$bfk000$supplementaries$supp$removePlayer(arg0: $UUID_, arg1: $CallbackInfo): void;
        getDiscoveredUUID(uuid: string): $UUID;
        constructor(minecraft: $Minecraft, service: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
