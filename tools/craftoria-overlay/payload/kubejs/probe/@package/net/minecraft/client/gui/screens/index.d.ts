import { $AccessorMenuScreens } from "@package/net/darkhax/bookshelf/neoforge/mixin/access/gui/screen";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ReloadInstance } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $FormattedCharSequence, $FormattedCharSequence_, $ProgressListener } from "@package/net/minecraft/util";
import { $TransferState_, $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $Music } from "@package/net/minecraft/sounds";
import { $CreateWorldScreen, $WorldCreationContext_ } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CustomizableScreen } from "@package/de/keksuccino/fancymenu/util/rendering/ui/screen";
import { $URI } from "@package/java/net";
import { $Connection, $DisconnectionDetails_ } from "@package/net/minecraft/network";
import { $ClientTooltipPositioner, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $StructureSet_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ScreenAccessor as $ScreenAccessor$1 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $IMixinScreen } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $FocusNavigationEvent$TabNavigation, $FocusNavigationEvent$ArrowNavigation, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $AccessorScreen } from "@package/vazkii/patchouli/mixin/client";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BanDetails_ } from "@package/com/mojang/authlib/minecraft";
import { $GuiEventListener, $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $IMixinConnectScreen, $IMixinChatScreen, $IMixinProgressScreen, $IMixinLevelLoadingScreen, $IMixinReceivingLevelScreen, $IMixinScreen as $IMixinScreen$1 } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $List, $List_ } from "@package/java/util";
import { $MenuScreensAccess } from "@package/com/hypherionmc/pocketmachines/mixin/accessor";
import { $ScreenAccessor as $ScreenAccessor$4 } from "@package/net/blay09/mods/balm/mixin";
import { $ScreenAccessor as $ScreenAccessor$2 } from "@package/com/mrcrayfish/furniture/refurbished/mixin/client";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Consumer_, $BooleanSupplier_ } from "@package/java/util/function";
import { $HolderGetter, $Holder } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $SimpleTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Throwable, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $ScreenAccess } from "@package/com/matyrobbrt/keybindbundles/mixin/access";
import { $ScreenAccessor as $ScreenAccessor$3 } from "@package/com/hollingsworth/nuggets/mixin";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarratableEntry$NarrationPriority_ } from "@package/net/minecraft/client/gui/narration";
import { $Tooltip, $EditBox, $ObjectSelectionList, $SplashRenderer, $Renderable, $WidgetTooltipHolder, $LogoRenderer, $Button$OnPress, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $IMixinScreen as $IMixinScreen$2 } from "@package/de/keksuccino/modernworldcreation/mixin/mixins/common/client";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ScreenAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as options from "@package/net/minecraft/client/gui/screens/options";
export * as inventory from "@package/net/minecraft/client/gui/screens/inventory";
export * as reporting from "@package/net/minecraft/client/gui/screens/reporting";
export * as recipebook from "@package/net/minecraft/client/gui/screens/recipebook";
export * as achievement from "@package/net/minecraft/client/gui/screens/achievement";
export * as worldselection from "@package/net/minecraft/client/gui/screens/worldselection";
export * as packs from "@package/net/minecraft/client/gui/screens/packs";
export * as advancements from "@package/net/minecraft/client/gui/screens/advancements";
export * as telemetry from "@package/net/minecraft/client/gui/screens/telemetry";
export * as multiplayer from "@package/net/minecraft/client/gui/screens/multiplayer";
export * as social from "@package/net/minecraft/client/gui/screens/social";
export * as debug from "@package/net/minecraft/client/gui/screens/debug";

declare module "@package/net/minecraft/client/gui/screens" {
    export class $LoadingOverlay extends $Overlay {
        static registerTextures(minecraft: $Minecraft): void;
        reload: $ReloadInstance;
        static FADE_OUT_TIME: number;
        static FADE_IN_TIME: number;
        constructor(minecraft: $Minecraft, reload: $ReloadInstance, onFinish: $Consumer_<($Throwable) | undefined>, fadeIn: boolean);
    }
    export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
        create(menu: T, inventory: $Inventory, title: $Component_): U;
        fromPacket(title: $Component_, type: $MenuType_<T>, mc: $Minecraft, windowId: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MenuScreens$ScreenConstructor}.
     */
    export type $MenuScreens$ScreenConstructor_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
    export class $ReceivingLevelScreen extends $Screen implements $IMixinReceivingLevelScreen {
        setCreatedAtFancyMenu(time: number): void;
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
        constructor(levelReceived: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_);
        set createdAtFancyMenu(value: number);
    }
    export class $DatapackLoadFailureScreen extends $Screen {
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
        constructor(cancelCallback: $Runnable_, safeModeCallback: $Runnable_);
    }
    export class $CreateBuffetWorldScreen extends $Screen {
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
        constructor(parent: $Screen, context: $WorldCreationContext_, applySettings: $Consumer_<$Holder<$Biome>>);
    }
    export class $OutOfMemoryScreen extends $Screen {
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
        constructor();
    }
    export class $ReceivingLevelScreen$Reason extends $Enum<$ReceivingLevelScreen$Reason> {
        static values(): $ReceivingLevelScreen$Reason[];
        static valueOf(arg0: string): $ReceivingLevelScreen$Reason;
        static OTHER: $ReceivingLevelScreen$Reason;
        static NETHER_PORTAL: $ReceivingLevelScreen$Reason;
        static END_PORTAL: $ReceivingLevelScreen$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ReceivingLevelScreen$Reason}.
     */
    export type $ReceivingLevelScreen$Reason_ = "nether_portal" | "end_portal" | "other";
    export class $PresetFlatWorldScreen$PresetsList$Entry extends $ObjectSelectionList$Entry<$PresetFlatWorldScreen$PresetsList$Entry> {
    }
    export class $ProgressScreen extends $Screen implements $ProgressListener, $IMixinProgressScreen {
        stop(): void;
        progressStart(component: $Component_): void;
        progressStage(component: $Component_): void;
        /**
         * Updates the progress bar on the loading screen to the specified amount.
         */
        progressStagePercentage(progress: number): void;
        progressStartNoAbort(component: $Component_): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getProgressFancyMenu(): number;
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
        constructor(clearScreenAfterStop: boolean);
        get progressFancyMenu(): number;
    }
    export class $ConnectScreen extends $Screen implements $IMixinConnectScreen {
        static startConnecting(parent: $Screen, minecraft: $Minecraft, serverAddress: $ServerAddress, serverData: $ServerData, isQuickPlay: boolean, transferState: $TransferState_ | null): void;
        static invokeConstructFancyMenu$fancymenu_$md$f87c94$0(arg0: $Screen, arg1: $Component_): $ConnectScreen;
        static MENU_BACKGROUND: $ResourceLocation;
        static UNKNOWN_HOST_MESSAGE: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static ABORT_CONNECTION: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        connection: $Connection;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ErrorScreen extends $Screen {
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
        constructor(title: $Component_, message: $Component_);
    }
    export class $DirectJoinServerScreen extends $Screen {
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
        constructor(lastScreen: $Screen, callback: $BooleanConsumer_, serverData: $ServerData);
    }
    export class $CreateBuffetWorldScreen$BiomeList$Entry extends $ObjectSelectionList$Entry<$CreateBuffetWorldScreen$BiomeList$Entry> {
    }
    export class $CreateFlatWorldScreen extends $Screen {
        settings(): $FlatLevelGeneratorSettings;
        setConfig(generator: $FlatLevelGeneratorSettings): void;
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
        constructor(parent: $CreateWorldScreen, applySettings: $Consumer_<$FlatLevelGeneratorSettings>, generator: $FlatLevelGeneratorSettings);
        set config(value: $FlatLevelGeneratorSettings);
    }
    export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $IMixinScreen$2, $ScreenAccess, $IMixinScreen, $ScreenAccessor$4, $ScreenAccessor$3, $AccessorScreen, $IMixinScreen$1, $CustomizableScreen, $ScreenAccessor$2, $ScreenAccessor$1, $ScreenAccessor {
        init(minecraft: $Minecraft, width: number, height: number): void;
        resize(minecraft: $Minecraft, width: number, height: number): void;
        added(): void;
        removed(): void;
        onClose(): void;
        getMinecraft(): $Minecraft;
        tick(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasAltDown(): boolean;
        addWidget<T extends $GuiEventListener>(widget: T): T;
        static findNarratableWidget(entries: $List_<$NarratableEntry>, target: $NarratableEntry | null): $Screen$NarratableSearchResult;
        getNarrationMessage(): $Component;
        triggerImmediateNarration(onlyNarrateNew: boolean): void;
        handleComponentClicked(style: $Style | null): boolean;
        handler$hfn011$relics$tick(arg0: $CallbackInfo): void;
        updateNarratorStatus(onlyNarrateNew: boolean): void;
        afterKeyboardAction(): void;
        handleDelayedNarration(): void;
        getTitle(): $Component;
        handler$kgb003$legendarytooltips$keyPressed(i: number, j: number, k: number, info: $CallbackInfoReturnable<any>): void;
        handler$kfk000$equipmentcompare$screenClosed(info: $CallbackInfo): void;
        handler$kgb001$legendarytooltips$screenClosed(info: $CallbackInfo): void;
        static isCopy(keyCode: number): boolean;
        static getTooltipFromItem(minecraft: $Minecraft, item: $ItemStack_): $List<$Component>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasControlDown(): boolean;
        static wrapScreenError(action: $Runnable_, errorDesc: string, screenName: string): void;
        getBackgroundMusic(): $Music;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasShiftDown(): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isPauseScreen(): boolean;
        addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        clearFocus(): void;
        static isPaste(keyCode: number): boolean;
        static isCut(keyCode: number): boolean;
        handler$kfk002$equipmentcompare$keyPressed(i: number, j: number, k: number, info: $CallbackInfoReturnable<any>): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        shouldCloseOnEsc(): boolean;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderBackground(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static isSelectAll(keyCode: number): boolean;
        createArrowEvent(direction: $ScreenDirection_): $FocusNavigationEvent$ArrowNavigation;
        setInitialFocus(listener: $GuiEventListener): void;
        addRenderableOnly<T extends $Renderable>(renderable: T): T;
        createTabEvent(): $FocusNavigationEvent$TabNavigation;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWithTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        rebuildWidgets(): void;
        onFilesDrop(packs: $List_<$Path_>): void;
        afterMouseAction(): void;
        afterMouseMove(): void;
        static renderMenuBackgroundTexture(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, width: number, height: number): void;
        renderTransparentBackground(partialTick: $GuiGraphics): void;
        handler$ijn000$nerb$onWidgetAdded(widget: $GuiEventListener, cir: $CallbackInfoReturnable<any>): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        removeOnInitChildrenFancyMenu(): $List<any>;
        setTooltipForNextRenderPass(title: $Component_): void;
        setTooltipForNextRenderPass(tooltip: $Tooltip, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(packs: $List_<$FormattedCharSequence_>): void;
        handler$hfn001$relics$render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getChildren(): $List<$GuiEventListener>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getRenderablesKonkrete(): $List<$Renderable>;
        kbb$repositionElements(): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getChildrenKonkrete(): $List<$GuiEventListener>;
        invoke_init_FancyMenu(): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        balm_getRenderables(): $List<$Renderable>;
        balm$addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        balm_getNarratables(): $List<$NarratableEntry>;
        invokeAddWidgetKonkrete<T extends $GuiEventListener>(widget: T): T;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        catnip$getRenderables(): $List<$Renderable>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        get_initialized_FancyMenu(): boolean;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getNarratables(): $List<$NarratableEntry>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getRenderables(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getNarratablesFancyMenu(): $List<$NarratableEntry>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getChildrenFancyMenu(): $List<$GuiEventListener>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getRenderablesFancyMenu(): $List<$Renderable>;
        invoke_setInitialFocus_ModernWorldCreation(listener: $GuiEventListener): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        get_narratables_ModernWorldCreation(): $List<$NarratableEntry>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        get_renderables_ModernWorldCreation(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        balm_getChildren(): $List<$GuiEventListener>;
        setFontKonkrete(arg0: $Font): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        libgui$getChildren(): $List<$GuiEventListener>;
        invokeAddRenderableWidgetKonkrete<T extends $GuiEventListener>(widget: T): T;
        invokeRemoveWidgetFancyMenu(listener: $GuiEventListener): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        get_children_ModernWorldCreation(): $List<$GuiEventListener>;
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
        get minecraft(): $Minecraft;
        get narrationMessage(): $Component;
        get backgroundMusic(): $Music;
        get pauseScreen(): boolean;
        set initialFocus(value: $GuiEventListener);
        get renderablesKonkrete(): $List<$Renderable>;
        get childrenKonkrete(): $List<$GuiEventListener>;
        get _initialized_FancyMenu(): boolean;
        get narratablesFancyMenu(): $List<$NarratableEntry>;
        get childrenFancyMenu(): $List<$GuiEventListener>;
        get renderablesFancyMenu(): $List<$Renderable>;
        get _narratables_ModernWorldCreation(): $List<$NarratableEntry>;
        get _renderables_ModernWorldCreation(): $List<$Renderable>;
        set fontKonkrete(value: $Font);
        get _children_ModernWorldCreation(): $List<$GuiEventListener>;
    }
    export class $CreateFlatWorldScreen$DetailsList$Entry extends $ObjectSelectionList$Entry<$CreateFlatWorldScreen$DetailsList$Entry> {
    }
    export class $MenuScreens implements $AccessorMenuScreens, $MenuScreensAccess {
        /**
         * @deprecated
         */
        static register<M extends $AbstractContainerMenu, U extends $Screen>(type: $MenuType_<M>, factory: $MenuScreens$ScreenConstructor_<M, U>): void;
        static init(): void;
        static create<T extends $AbstractContainerMenu>(type: $MenuType_<T>, mc: $Minecraft, windowId: number, title: $Component_): void;
        static register$bookshelf_$md$f87c94$0(type: $MenuType_<any>, factory: $MenuScreens$ScreenConstructor_<any, any>): void;
        static selfTest(): boolean;
        static pocketmachines_register$pocketmachin_$md$f87c94$1(type: $MenuType_<any>, factory: $MenuScreens$ScreenConstructor_<any, any>): void;
        static getScreenFactory<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>): ($MenuScreens$ScreenConstructor<T, never>) | undefined;
        constructor();
    }
    export class $DemoIntroScreen extends $Screen {
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
        constructor();
    }
    export class $LevelLoadingScreen extends $Screen implements $IMixinLevelLoadingScreen {
        static renderChunks(guiGraphics: $GuiGraphics, progressListener: $StoringChunkProgressListener, x: number, y: number, arg4: number, arg5: number): void;
        getProgressListenerFancyMenu(): $StoringChunkProgressListener;
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
        constructor(progressListener: $StoringChunkProgressListener);
        get progressListenerFancyMenu(): $StoringChunkProgressListener;
    }
    export class $RecoverWorldDataScreen extends $Screen {
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
        constructor(minecraft: $Minecraft, callback: $BooleanConsumer_, storageAccess: $LevelStorageSource$LevelStorageAccess);
    }
    export class $EditServerScreen extends $Screen {
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
        constructor(lastScreen: $Screen, callback: $BooleanConsumer_, serverData: $ServerData);
    }
    export class $TitleScreen extends $Screen {
        handler$zkn000$iris$firstInit(arg0: $CallbackInfo): void;
        static preloadResources(texMngr: $TextureManager, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        handler$kcc007$sounds$init(arg0: $CallbackInfo): void;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        fading: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        splash: $SplashRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(fading: boolean, logoRenderer: $LogoRenderer | null);
        constructor(fading: boolean);
        constructor();
    }
    export class $GenericMessageScreen extends $Screen {
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
        constructor(arg0: $Component_);
    }
    export class $GenericWaitingScreen extends $Screen {
        static createCompleted(title: $Component_, messageText: $Component_, buttonLabel: $Component_, buttonCallback: $Runnable_): $GenericWaitingScreen;
        static createWaiting(title: $Component_, buttonLabel: $Component_, buttonCallback: $Runnable_): $GenericWaitingScreen;
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
    export class $ConfirmScreen extends $Screen {
        setDelay(y: number): void;
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
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_);
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, yesButton: $Component_, noButton: $Component_);
        set delay(value: number);
    }
    export class $LoadingDotsText {
        static get(millis: number): string;
        constructor();
    }
    export class $NoticeWithLinkScreen extends $Screen {
        static createWorldSymlinkWarningScreen(onClose: $Runnable_): $Screen;
        static createPackSymlinkWarningScreen(onClose: $Runnable_): $Screen;
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
        constructor(title: $Component_, message: $Component_, uri: $URI, onClose: $Runnable_);
    }
    export class $ChatScreen extends $Screen implements $IMixinChatScreen {
        handleChatInput(message: string, addToRecentChat: boolean): void;
        /**
         * Input is relative and is applied directly to the sentHistoryCursor so -1 is the previous message, 1 is the next message from the current cursor position.
         */
        moveInHistory(msgPos: number): void;
        handler$kcp000$sounds$$typing_sound_effect(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        handler$chh002$nolijium$a(arg0: $CallbackInfo): void;
        handler$chh000$nolijium$a(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        handler$chh000$nolijium$a(arg0: string, arg1: $CallbackInfo): void;
        normalizeChatMessage(message: string): string;
        modify$chh000$nolijium$a(message: string): string;
        getInputFancyMenu(): $EditBox;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        client: $Minecraft;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(initial: string);
        get inputFancyMenu(): $EditBox;
    }
    export class $PauseScreen$FeedbackSubScreen extends $Screen {
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
    export class $CreateBuffetWorldScreen$BiomeList extends $ObjectSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry> {
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
        hovered: $CreateBuffetWorldScreen$BiomeList$Entry;
        height: number;
    }
    export class $DisconnectedScreen extends $Screen {
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
        constructor(parent: $Screen, title: $Component_, details: $DisconnectionDetails_, buttonText: $Component_);
        constructor(parent: $Screen, title: $Component_, details: $DisconnectionDetails_);
        constructor(parent: $Screen, title: $Component_, reason: $Component_, buttonText: $Component_);
        constructor(parent: $Screen, title: $Component_, reason: $Component_);
    }
    export class $ConfirmLinkScreen extends $ConfirmScreen {
        static confirmLink(lastScreen: $Screen, uri: $URI): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, url: string, trusted: boolean): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, uri: $URI, trusted: boolean): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, url: string): $Button$OnPress;
        /**
         * Copies the link to the system clipboard.
         */
        copyToClipboard(): void;
        static confirmLinkNow(lastScreen: $Screen, url: string, trusted: boolean): void;
        static confirmLinkNow(lastScreen: $Screen, url: string): void;
        static confirmLinkNow(lastScreen: $Screen, uri: $URI, trusted: boolean): void;
        static confirmLinkNow(lastScreen: $Screen, uri: $URI): void;
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
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, url: string, noButton: $Component_, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, uri: $URI, noButton: $Component_, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, uri: $URI, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, url: string, trusted: boolean);
        constructor(callback: $BooleanConsumer_, url: string, trusted: boolean);
    }
    export class $ShareToLanScreen extends $Screen {
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
        constructor(lastScreen: $Screen);
    }
    export class $DeathScreen$TitleConfirmScreen extends $ConfirmScreen {
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
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_);
    }
    export class $BackupConfirmScreen extends $Screen {
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
        constructor(onCancel: $Runnable_, onProceed: $BackupConfirmScreen$Listener_, title: $Component_, description: $Component_, promptForCacheErase: boolean);
    }
    export class $BackupConfirmScreen$Listener {
    }
    export interface $BackupConfirmScreen$Listener {
        proceed(confirmed: boolean, eraseCache: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BackupConfirmScreen$Listener}.
     */
    export type $BackupConfirmScreen$Listener_ = ((arg0: boolean, arg1: boolean) => void);
    export class $FaviconTexture implements $AutoCloseable {
        clear(): void;
        close(): void;
        upload(image: $NativeImage): void;
        static forWorld(textureManager: $TextureManager, worldName: string): $FaviconTexture;
        textureLocation(): $ResourceLocation;
        static forServer(textureManager: $TextureManager, worldName: string): $FaviconTexture;
    }
    export class $PresetFlatWorldScreen extends $Screen {
        static fromString(blockGetter: $HolderGetter<$Block_>, biomeGetter: $HolderGetter<$Biome_>, structureSetGetter: $HolderGetter<$StructureSet_>, placedFeatureGetter: $HolderGetter<$PlacedFeature_>, settings: string, layerGenerationSettings: $FlatLevelGeneratorSettings): $FlatLevelGeneratorSettings;
        updateButtonValidity(valid: boolean): void;
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
        static UNKNOWN_PRESET: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $CreateFlatWorldScreen);
    }
    export class $PauseScreen extends $Screen {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        showsPauseMenu(): boolean;
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
        constructor(showPauseMenu: boolean);
    }
    export class $WinScreen$CreditsReader {
    }
    export interface $WinScreen$CreditsReader {
    }
    /**
     * Values that may be interpreted as {@link $WinScreen$CreditsReader}.
     */
    export type $WinScreen$CreditsReader_ = (() => void);
    export class $Screen$DeferredTooltipRendering extends $Record {
        tooltip(): $List<$FormattedCharSequence>;
        positioner(): $ClientTooltipPositioner;
        constructor(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_);
    }
    /**
     * Values that may be interpreted as {@link $Screen$DeferredTooltipRendering}.
     */
    export type $Screen$DeferredTooltipRendering_ = { tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_,  } | [tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_, ];
    export class $AccessibilityOnboardingScreen extends $Screen {
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
        constructor(options: $Options, onClose: $Runnable_);
    }
    export class $InBedChatScreen extends $ChatScreen {
        onPlayerWokeUp(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        client: $Minecraft;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $CreditsAndAttributionScreen extends $Screen {
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
        constructor(lastScreen: $Screen);
    }
    export class $Overlay implements $Renderable {
        isPauseScreen(): boolean;
        constructor();
        get pauseScreen(): boolean;
    }
    export class $LoadingOverlay$LogoTexture extends $SimpleTexture {
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
    }
    export class $CreateFlatWorldScreen$DetailsList extends $ObjectSelectionList<$CreateFlatWorldScreen$DetailsList$Entry> {
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
        hovered: $CreateFlatWorldScreen$DetailsList$Entry;
        height: number;
    }
    export class $PresetFlatWorldScreen$PresetsList extends $ObjectSelectionList<$PresetFlatWorldScreen$PresetsList$Entry> {
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
        hovered: $PresetFlatWorldScreen$PresetsList$Entry;
        height: number;
    }
    export class $AlertScreen extends $Screen {
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
        constructor(callback: $Runnable_, title: $Component_, text: $Component_);
        constructor(callback: $Runnable_, title: $Component_, messageText: $Component_, okButton: $Component_, shouldCloseOnEsc: boolean);
    }
    export class $Screen$NarratableSearchResult {
        entry: $NarratableEntry;
        index: number;
        priority: $NarratableEntry$NarrationPriority;
        constructor(entry: $NarratableEntry, index: number, priority: $NarratableEntry$NarrationPriority_);
    }
    export class $DeathScreen extends $Screen {
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
        constructor(causeOfDeath: $Component_ | null, hardcore: boolean);
    }
    export class $WinScreen extends $Screen {
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
        constructor(poem: boolean, onFinished: $Runnable_);
    }
    export class $BanNoticeScreens {
        static create(callback: $BooleanConsumer_, banDetails: $BanDetails_): $ConfirmLinkScreen;
        static createSkinBan(callback: $Runnable_): $ConfirmLinkScreen;
        static createNameBan(username: string, callback: $Runnable_): $ConfirmLinkScreen;
        static NAME_BAN_TITLE: $Component;
        constructor();
    }
}
