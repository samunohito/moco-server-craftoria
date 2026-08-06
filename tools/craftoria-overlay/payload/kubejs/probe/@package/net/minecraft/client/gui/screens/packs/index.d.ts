import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $PackRepository, $PackSource, $Pack, $PackCompatibility } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Runnable_, $AutoCloseable } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/packs" {
    export class $PackSelectionScreen$Watcher implements $AutoCloseable {
    }
    export class $PackSelectionModel {
        commit(): void;
        getSelected(): $Stream<$PackSelectionModel$Entry>;
        findNewPacks(): void;
        getUnselected(): $Stream<$PackSelectionModel$Entry>;
        constructor(onListChanged: $Runnable_, iconGetter: $Function_<$Pack, $ResourceLocation>, repository: $PackRepository, output: $Consumer_<$PackRepository>);
        get selected(): $Stream<$PackSelectionModel$Entry>;
        get unselected(): $Stream<$PackSelectionModel$Entry>;
    }
    export class $PackSelectionModel$SelectedPackEntry extends $PackSelectionModel$EntryBase {
        pack: $Pack;
    }
    export class $PackSelectionModel$UnselectedPackEntry extends $PackSelectionModel$EntryBase {
        pack: $Pack;
    }
    export class $TransferableSelectionList extends $ObjectSelectionList<$TransferableSelectionList$PackEntry> {
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        screen: $PackSelectionScreen;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        focused: boolean;
        y: number;
        hovered: $TransferableSelectionList$PackEntry;
        height: number;
        constructor(minecraft: $Minecraft, screen: $PackSelectionScreen, width: number, height: number, title: $Component_);
    }
    export class $PackSelectionModel$EntryBase implements $PackSelectionModel$Entry {
        getId(): string;
        isRequired(): boolean;
        getDescription(): $Component;
        getTitle(): $Component;
        moveDown(): void;
        moveUp(): void;
        getCompatibility(): $PackCompatibility;
        isFixedPosition(): boolean;
        getPackSource(): $PackSource;
        getIconTexture(): $ResourceLocation;
        canMoveDown(): boolean;
        canMoveUp(): boolean;
        canSelect(): boolean;
        canUnselect(): boolean;
        getExtendedDescription(): $Component;
        pack: $Pack;
        constructor(pack: $PackSelectionModel, arg1: $Pack);
        get id(): string;
        get required(): boolean;
        get description(): $Component;
        get title(): $Component;
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get iconTexture(): $ResourceLocation;
        get extendedDescription(): $Component;
    }
    export class $PackSelectionScreen extends $Screen {
        clearSelected(): void;
        updateFocus(selection: $TransferableSelectionList): void;
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
        constructor(repository: $PackRepository, output: $Consumer_<$PackRepository>, packDir: $Path_, title: $Component_);
    }
    export class $TransferableSelectionList$PackEntry extends $ObjectSelectionList$Entry<$TransferableSelectionList$PackEntry> {
        getPackId(): string;
        keyboardSelection(): void;
        constructor(minecraft: $Minecraft, parent: $TransferableSelectionList, pack: $PackSelectionModel$Entry);
        get packId(): string;
    }
    export class $PackSelectionModel$Entry {
    }
    export interface $PackSelectionModel$Entry {
        getId(): string;
        unselect(): void;
        isRequired(): boolean;
        getDescription(): $Component;
        canSelect(): boolean;
        getTitle(): $Component;
        isSelected(): boolean;
        select(): void;
        moveDown(): void;
        moveUp(): void;
        getCompatibility(): $PackCompatibility;
        isFixedPosition(): boolean;
        getPackSource(): $PackSource;
        getIconTexture(): $ResourceLocation;
        canMoveDown(): boolean;
        canUnselect(): boolean;
        getExtendedDescription(): $Component;
        canMoveUp(): boolean;
        get id(): string;
        get required(): boolean;
        get description(): $Component;
        get title(): $Component;
        get selected(): boolean;
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get iconTexture(): $ResourceLocation;
        get extendedDescription(): $Component;
    }
}
