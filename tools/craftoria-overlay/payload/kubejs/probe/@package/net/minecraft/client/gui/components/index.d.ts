import { $PanoramaRenderer, $Rect2i } from "@package/net/minecraft/client/renderer";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $Message, $ParseResults } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GuiMessage, $OptionInstance, $GuiMessage$Line, $GuiMessageTag, $OptionInstance$TooltipSupplier_, $GuiMessage$Line_, $Minecraft, $GuiMessage_, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $TooltipAccessor } from "@package/traben/entity_texture_features/mixin/mixins/accessor";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_ } from "@package/net/minecraft/world";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $LocalIntRef, $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $IMixinAbstractWidget, $IMixinEditBox } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $ScreenRectangle_, $FocusNavigationEvent$ArrowNavigation_, $FocusNavigationEvent_, $FocusNavigationEvent$TabNavigation_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $AbstractWidgetAccessor } from "@package/it/hurts/octostudios/octolib/mixin";
import { $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $TooltipAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $IMixinEditBox as $IMixinEditBox$1, $IMixinAbstractWidget as $IMixinAbstractWidget$1, $IMixinAbstractSliderButton, $IMixinBossHealthOverlay, $IMixinSplashRenderer, $IMixinSuggestionsList, $IMixinButton, $IMixinCommandSuggestions } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $MultilineTextFieldAccess } from "@package/dev/ftb/mods/ftblibrary/core/mixin/common";
import { $BuggerScreenRenderLinesInvoker } from "@package/io/github/mortuusars/exposure/mixin/client";
import { $UUID_, $Map, $OptionalInt, $UUID, $List, $SequencedCollection, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $IClickableWidget } from "@package/xaero/lib/client/gui/widget";
import { $CheckboxAccessor, $ImageButtonAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $ChatComponentAccessor } from "@package/com/hollingsworth/arsnouveau/common/mixin";
import { $Supplier_, $Consumer_, $BiFunction, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BooleanSupplier_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $EditBoxMixin } from "@package/com/almostreliable/merequester/mixin/accessors";
import { $Suggestions, $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $CustomizableWidget$CustomBackgroundResetBehavior_, $CustomizableWidget, $UniqueLabeledSwitchCycleButton, $CustomizableSlider, $CustomizableWidget$CustomBackgroundResetBehavior, $UniqueWidget } from "@package/de/keksuccino/fancymenu/util/rendering/ui/widget";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $ChatHudAccessor } from "@package/com/wulian/chatimpressiveanimation/mixin";
import { $AbstractSelectionListAccess } from "@package/com/matyrobbrt/keybindbundles/mixin/access";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $AbstractSliderButtonAccessor } from "@package/com/hollingsworth/nuggets/mixin";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $AccessorAbstractWidget } from "@package/net/darkhax/bookshelf/common/mixin/access/client/gui";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ITooltipAccessor } from "@package/giselle/jei_mekanism_multiblocks/client";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableSpriteImageWidget$Sprite } from "@package/io/github/jamalam360/jamlib/client/mixinsupport";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier, $TooltipAccessor, $TooltipAccess, $ITooltipAccessor {
        static create(message: $Component_): $Tooltip;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        jei_mekanism_multiblocks$getMessage(): $Component;
        jei_mekanism_multiblocks$getNarration(): $Component;
        getMessage(): $Component;
        setCachedTooltip(arg0: $List_<$FormattedCharSequence_>): void;
        cachedTooltip: $List<$FormattedCharSequence>;
        message: $Component;
        splitWithLanguage: $Language;
        constructor(message: $Component_, narration: $Component_ | null);
    }
    export class $CommonButtons {
        static language(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        static accessibility(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        createTooltipPositioner(screenRectangle: $ScreenRectangle_, hovering: boolean, focused: boolean): $ClientTooltipPositioner;
        setDelay(delay: $Duration_): void;
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        updateNarration(output: $NarrationElementOutput): void;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { message?: $Component_, action?: $Consumer_<$PopupScreen>,  } | [message?: $Component_, action?: $Consumer_<$PopupScreen>, ];
    export class $MultilineTextField$StringView extends $Record {
        beginIndex(): number;
        endIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { endIndex?: number, beginIndex?: number,  } | [endIndex?: number, beginIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isSelected(): boolean;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
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
        constructor(tabManager: $TabManager, tab: $Tab, width: number, height: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
        refresh(location: $Vec3_): void;
        getText(): $Component;
        getClosest(location: $Vec3_): $SubtitleOverlay$SoundPlayedAt;
        isStillActive(): boolean;
        purgeOldInstances(displayTime: number): void;
        isAudibleFrom(location: $Vec3_): boolean;
        constructor(text: $Component_, range: number, location: $Vec3_);
        get text(): $Component;
        get stillActive(): boolean;
    }
    export class $SplashRenderer implements $IMixinSplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        getSplashFancyMenu(): string;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        splash: string;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
        get splashFancyMenu(): string;
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        scrollbarWidth(): number;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getScrollBarHeight(): number;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get scrollBarHeight(): number;
    }
    export class $Button extends $AbstractButton implements $IMixinButton {
        static builder(message: $Component_, onPress: $Button$OnPress_): $Button$Builder;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        handler$ijl000$nerb$onPress(ci: $CallbackInfo): void;
        setPressActionFancyMenu(arg0: $Button$OnPress_): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        focused: boolean;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        set pressActionFancyMenu(value: $Button$OnPress_);
    }
    export class $CycleButton$Builder<T> {
        create(message: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        withTooltip(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withInitialValue(initialValue: T): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withValues(...values: T[]): $CycleButton$Builder<T>;
        withValues(values: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(values: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withCustomNarration(narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        constructor(valueStringifier: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        size(x: number, y: number): $Button$Builder;
        bounds(x: number, y: number, width: number, height: number): $Button$Builder;
        pos(x: number, y: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(width: number): $Button$Builder;
        tooltip(tooltip: $Tooltip | null): $Button$Builder;
        createNarration(createNarration: $Button$CreateNarration_): $Button$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(font: $Font, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, maxRows: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, component: $Component_, maxWidth: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        getWidth(): number;
        getLineCount(): number;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number): void;
        renderLeftAlignedNoShadow(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): number;
        renderLeftAligned(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        get width(): number;
        get lineCount(): number;
    }
    export class $CommandSuggestions$SuggestionsList implements $IMixinSuggestionsList {
        cycle(change: number): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        select(change: number): void;
        mouseClicked(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(delta: number): boolean;
        modify$feh000$chat_heads$chatheads$renderChatHead(y: number, playerRef: $LocalRef<any>, graphicsRef: $LocalRef<any>): number;
        useSuggestion(): void;
        handler$feh000$chat_heads$chatheads$fixOutOfBoundChatHeads(commandSuggestions: $CommandSuggestions, x: number, y: number, width: number, suggestions: $List_<any>, narrateFirstSuggestion: boolean, ci: $CallbackInfo): void;
        localvar$feh000$chat_heads$chatheads$captureGuiGraphics(guiGraphics: $GuiGraphics, graphicsRef: $LocalRef<any>): $GuiGraphics;
        localvar$feh000$chat_heads$chatheads$captureSuggestion(suggestion: $Suggestion, playerRef: $LocalRef<any>): $Suggestion;
        modify$feh000$chat_heads$chatheads$enlargeBackground(x: number, playerRef: $LocalRef<any>): number;
        getRectFancyMenu(): $Rect2i;
        getOffsetFancyMenu(): number;
        getLastMouseFancyMenu(): $Vec2;
        setLastMouseFancyMenu(arg0: $Vec2): void;
        getCurrentFancyMenu(): number;
        get rectFancyMenu(): $Rect2i;
        get offsetFancyMenu(): number;
        get currentFancyMenu(): number;
    }
    export class $LogoRenderer {
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number): void;
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number, height: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(keepLogoThroughFade: boolean);
    }
    export class $Checkbox$Builder {
        pos(x: number, y: number): $Checkbox$Builder;
        build(): $Checkbox;
        maxWidth(maxWidth: number): $Checkbox$Builder;
        tooltip(tooltip: $Tooltip): $Checkbox$Builder;
        selected(option: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(selected: boolean): $Checkbox$Builder;
        onValueChange(onValueChange: $Checkbox$OnValueChange_): $Checkbox$Builder;
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { formattedScore?: $Component_, scoreWidth?: number, name?: $Component_, score?: number,  } | [formattedScore?: $Component_, scoreWidth?: number, name?: $Component_, score?: number, ];
    export class $ImageWidget$Texture extends $ImageWidget {
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
    }
    export class $SpriteIconButton extends $Button {
        static builder(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton$Builder;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        focused: boolean;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(cycleButton: $CycleButton<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $AbstractSelectionListAccess, $AbstractSelectionListAccessor {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowLeft(): number;
        /**
         * Gets the focused GUI element.
         */
        getSelected(): E;
        setScrollAmount(scroll: number): void;
        setSelected(entry: E | null): void;
        updateSizeAndPosition(width: number, height: number, y: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScroll(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowRight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowWidth(): number;
        getScrollAmount(): number;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): E;
        replaceEntries(entries: $Collection_<E>): void;
        clampScrollAmount(): void;
        updateSize(width: number, layout: $HeaderAndFooterLayout): void;
        /**
         * Gets the focused GUI element.
         */
        getFirstElement(): E;
        setClampedScrollAmount(scroll: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        kbb$getScrollbarPosition(): number;
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
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get rowLeft(): number;
        get maxScroll(): number;
        get rowRight(): number;
        get rowWidth(): number;
        get firstElement(): E;
        set clampedScrollAmount(value: number);
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        focused: boolean;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        setFocused(arg0: $GuiEventListener | null): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        setDragging(arg0: boolean): void;
        handleTabNavigation(arg0: $FocusNavigationEvent$TabNavigation_): $ComponentPath;
        handleArrowNavigation(arg0: $FocusNavigationEvent$ArrowNavigation_): $ComponentPath;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
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
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $MultilineTextField implements $MultilineTextFieldAccess {
        value(): string;
        setValue(text: string): void;
        cursor(): number;
        keyPressed(keyCode: number): boolean;
        hasSelection(): boolean;
        getSelected(): $MultilineTextField$StringView;
        getSelectedText(): string;
        deleteText(length: number): void;
        insertText(text: string): void;
        getLineCount(): number;
        setCharacterLimit(length: number): void;
        setValueListener(valueListener: $Consumer_<string>): void;
        hasCharacterLimit(): boolean;
        setSelecting(selecting: boolean): void;
        setCursorListener(cursorListener: $Runnable_): void;
        getLineAtCursor(): number;
        seekCursorToPoint(x: number, arg1: number): void;
        characterLimit(): number;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        getLineView(offset: number): $MultilineTextField$StringView;
        getNextWord(): $MultilineTextField$StringView;
        seekCursorLine(length: number): void;
        getPreviousWord(): $MultilineTextField$StringView;
        seekCursor(whence: $Whence_, position: number): void;
        setSelectCursor(length: number): void;
        static NO_CHARACTER_LIMIT: number;
        selectCursor: number;
        constructor(font: $Font, width: number);
        get selected(): $MultilineTextField$StringView;
        get selectedText(): string;
        get lineCount(): number;
        set valueListener(value: $Consumer_<string>);
        set selecting(value: boolean);
        set cursorListener(value: $Runnable_);
        get lineAtCursor(): number;
        get nextWord(): $MultilineTextField$StringView;
        get previousWord(): $MultilineTextField$StringView;
    }
    export class $ChatComponent$State {
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(listener: $GuiEventListener | null): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isDragging(): boolean;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): $GuiEventListener;
        focusPathAtIndex(event: $FocusNavigationEvent_, index: number): $ComponentPath;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        narratables(): $List<$NarratableEntry>;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Sets if the GUI element is dragging or not.
         */
        setDragging(dragging: boolean): void;
        /**
         * Handles tab-based navigation events.
         * 
         * @return The next focus path for tab navigation, or `null` if no suitable path is found.
         */
        handleTabNavigation(tabNavigation: $FocusNavigationEvent$TabNavigation_): $ComponentPath;
        /**
         * Handles arrow-based navigation events.
         * 
         * @return The next focus path for arrow navigation, or `null` if no suitable path is found.
         */
        handleArrowNavigation(arrowNavigation: $FocusNavigationEvent$ArrowNavigation_): $ComponentPath;
        /**
         * Returns the first event listener that intersects with the mouse coordinates.
         */
        getChildAt(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        constructor();
    }
    export class $Checkbox extends $AbstractButton implements $CheckboxAccessor {
        static builder(message: $Component_, font: $Font): $Checkbox$Builder;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        selected(): boolean;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static getBoxSize(font: $Font): number;
        /**
         * Sets the focus state of the GUI element.
         */
        setSelected(focused: boolean): void;
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
        constructor(x: number, y: number, maxWidth: number, message: $Component_, font: $Font, selected: boolean, onValueChange: $Checkbox$OnValueChange_);
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
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
        constructor(font: $Font, message: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(width: number, height: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(width: number): $SpriteIconButton$Builder;
        sprite(sprite: $ResourceLocation_, spriteWidth: number, spriteHeight: number): $SpriteIconButton$Builder;
        narration(narration: $Button$CreateNarration_): $SpriteIconButton$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean);
    }
    export class $PlainTextButton extends $Button {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        focused: boolean;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, font: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget implements $MutableSpriteImageWidget$Sprite {
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
    }
    export class $WidgetSprites extends $Record {
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        disabled(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_,  } | [enabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, ];
    export class $ImageButton extends $Button implements $ImageButtonAccessor {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        getSprites(): $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        focused: boolean;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(component: $FormattedText, maxWidth: number, font: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
        update(value: number, guiTicks: number): void;
        displayedValue(): number;
        isBlinking(guiTicks: number): boolean;
        constructor(displayedValue: number);
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        initTextureValues(sprites: $WidgetSprites_): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isStateTriggered(): boolean;
        setStateTriggered(triggered: boolean): void;
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
        constructor(x: number, y: number, width: number, height: number, initialState: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { width?: number, text?: $FormattedCharSequence_,  } | [width?: number, text?: $FormattedCharSequence_, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>,  } | [slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { time?: number, location?: $Vec3_,  } | [time?: number, location?: $Vec3_, ];
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $AccessorAbstractWidget, $IMixinAbstractWidget, $IMixinAbstractWidget$1, $UniqueWidget, $CustomizableWidget, $AbstractWidgetAccessor {
        getMessage(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        setSize(width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        handler$dka002$moremousetweaks$mouseClicked(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        static renderScrollingString$bookshelf_$md$f87c94$0(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        clicked(mouseX: number, arg1: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        setWidth(height: number): void;
        setHeight(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        setMessage(message: $Component_): void;
        setAlpha(alpha: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        setY(height: number): void;
        setX(height: number): void;
        getCustomLabelFancyMenu(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isLabelShadowFancyMenu(): boolean;
        setCustomHeightFancyMenu(arg0: number): void;
        setHoverLabelFancyMenu(message: $Component_): void;
        setCustomXFancyMenu(arg0: number): void;
        getUnhoverSoundFancyMenu(): $IAudio;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        getLabelScaleFancyMenu(): number;
        setLabelScaleFancyMenu(alpha: number): void;
        getHoverSoundFancyMenu(): $IAudio;
        resolveLabelScaleFancyMenu(): number;
        setCustomWidthFancyMenu(arg0: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastFocusStateFancyMenu(focused: boolean): void;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        getHoverLabelFancyMenu(): $Component;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        setCustomYFancyMenu(arg0: number): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastHoverStateFancyMenu(): boolean;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setCustomLabelFancyMenu(message: $Component_): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastFocusStateFancyMenu(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastHoverStateFancyMenu(focused: boolean): void;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        /**
         * Sets the focus state of the GUI element.
         */
        setLabelShadowFancyMenu(focused: boolean): void;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        setRectangle(width: number, height: number, x: number, y: number): void;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        playDownSound(handler: $SoundManager): void;
        clearFGColor(): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setHiddenFancyMenu(focused: boolean): void;
        setTabOrderGroup(height: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastHoverOrFocusStateFancyMenu(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastHoverOrFocusStateFancyMenu(focused: boolean): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        addHoverStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        getHoverStateListenersFancyMenu(): $List<any>;
        getFocusStateListenersFancyMenu(): $List<any>;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        addFocusStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setUnderlineLabelOnHoverFancyMenu(focused: boolean): void;
        getCustomClickSoundFancyMenu(): $IAudio;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        setNineSliceBorderX_FancyMenu(height: number): void;
        setNineSliceBorderBottom_FancyMenu(height: number): void;
        setNineSliceBorderTop_FancyMenu(height: number): void;
        getHitboxRotationDegreesFancyMenu(): number;
        setNineSliceBorderLeft_FancyMenu(height: number): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        getWidgetIdentifierFancyMenu(): string;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        setNineSliceBorderRight_FancyMenu(height: number): void;
        setNineSliceBorderY_FancyMenu(height: number): void;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        getTooltip(): $Tooltip;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        setTooltip(tooltip: $Tooltip | null): void;
        resetWidgetCustomizationsFancyMenu(): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHiddenFancyMenu(): boolean;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        isMouseOver(mouseX: number, arg1: number): boolean;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        onRelease(mouseX: number, arg1: number): void;
        setFGColor(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        getHoverOrFocusStateListenersFancyMenu(): $List<any>;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        resetWidgetSizeAndPositionFancyMenu(): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setNineSliceCustomBackground_FancyMenu(focused: boolean): void;
        addHoverOrFocusStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        getResetCustomizationsListenersFancyMenu(): $List<any>;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        setPosition(width: number, height: number): void;
        /**
         * Handles the logic for when this widget is clicked. Vanilla calls this after `AbstractWidget#mouseClicked(double, double, int)` validates that:
         * 
         * - this widget is active and visible
         * - the button can be handled by this widget
         * - the mouse is over this widget
         */
        onClick(mouseX: number, mouseY: number, button: number): void;
        stopHoverSoundFancyMenu(): void;
        stopUnhoverSoundFancyMenu(): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickHoverStateListenersFancyMenu(focused: boolean): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickFocusStateListenersFancyMenu(focused: boolean): void;
        getOriginalMessageFancyMenu(): $Component;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        stopCustomClickSoundFancyMenu(): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickHoverOrFocusStateListenersFancyMenu(focused: boolean): void;
        setMessageFieldFancyMenu(message: $Component_): void;
        setHeightKonkrete(height: number): void;
        getAlphaFancyMenu(): number;
        setHeightFancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getLocalY(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getLocalX(): number;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get right(): number;
        set alpha(value: number);
        get hoveredOrFocused(): boolean;
        get hoverStateListenersFancyMenu(): $List<any>;
        get focusStateListenersFancyMenu(): $List<any>;
        set nineSliceBorderX_FancyMenu(value: number);
        set nineSliceBorderBottom_FancyMenu(value: number);
        set nineSliceBorderTop_FancyMenu(value: number);
        get hitboxRotationDegreesFancyMenu(): number;
        set nineSliceBorderLeft_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        set nineSliceBorderY_FancyMenu(value: number);
        get hovered(): boolean;
        set tooltipDelay(value: $Duration_);
        get bottom(): number;
        get hoverOrFocusStateListenersFancyMenu(): $List<any>;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        get resetCustomizationsListenersFancyMenu(): $List<any>;
        get currentFocusPath(): $ComponentPath;
        get originalMessageFancyMenu(): $Component;
        set messageFieldFancyMenu(value: $Component_);
        set heightKonkrete(value: number);
        get alphaFancyMenu(): number;
        set heightFancyMenu(value: number);
        get localY(): number;
        get localX(): number;
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(messageSupplier: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { maxWidth?: number, message?: $Component_, maxRows?: $OptionalInt,  } | [maxWidth?: number, message?: $Component_, maxRows?: $OptionalInt, ];
    export class $DebugScreenOverlay implements $BuggerScreenRenderLinesInvoker {
        reset(): void;
        clearChunkCache(): void;
        render(guiGraphics: $GuiGraphics): void;
        toggleProfilerChart(): void;
        toggleNetworkCharts(): void;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(frameDuration: number): void;
        toggleFpsCharts(): void;
        toggleOverlay(): void;
        getTickTimeLogger(): $LocalSampleLogger;
        handler$gjf000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        getPingLogger(): $LocalSampleLogger;
        showNetworkCharts(): boolean;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        drawLines(guiGraphics: $GuiGraphics, lines: $List_<string>, leftSide: boolean): void;
        constructor(minecraft: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get bandwidthLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
    }
    export class $PopupScreen extends $Screen {
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
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $IMixinEditBox, $AccessEditBox, $IMixinEditBox$1, $EditBoxMixin {
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isEditable(): boolean;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setFilter(validator: $Predicate_<string>): void;
        setVisible(select: boolean): void;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLength(): number;
        setHint(hint: $Component_): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        moveCursor(delta: number, select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteText(num: number): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        setBordered(select: boolean): void;
        setResponder(responder: $Consumer_<string>): void;
        setCanLoseFocus(select: boolean): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setEditable(select: boolean): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        setTextShadow(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        moveCursorToEnd(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        moveCursorTo(delta: number, select: boolean): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        moveCursorToStart(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        renderHighlight(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        getWordPosition(delta: number): number;
        getScreenX(delta: number): number;
        /**
         * Returns the current position of the cursor.
         */
        getTextColorUneditableFancyMenu(): number;
        invokeRenderHighlightFancyMenu(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        searchables$getResponder(): $Consumer<string>;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        onValueChangeKonkrete(textToWrite: string): void;
        /**
         * Returns the current position of the cursor.
         */
        getTextColorFancyMenu(): number;
        /**
         * Returns the current position of the cursor.
         */
        getHighlightPosFancyMenu(): number;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getSuggestionFancyMenu(): string;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLengthKonkrete(): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getIsEditableFancyMenu(): boolean;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getIsEditableKonkrete(): boolean;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getBorderedFancyMenu(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLengthFancyMenu(): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        invokeDeleteTextFancyMenu(num: number): void;
        /**
         * Returns the current position of the cursor.
         */
        getDisplayPosFancyMenu(): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        merequester$isEditable(): boolean;
        searchables$getFilter(): $Predicate<string>;
        getFocusedTimeFancyMenu(): number;
        getFormatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        /**
         * Returns the current position of the cursor.
         */
        getHightlightPosKonkrete(): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setDisplayPosFancyMenu(num: number): void;
        getHintFancyMenu(): $Component;
        static CURSOR_INSERT_WIDTH: number;
        static CURSOR_BLINK_INTERVAL_MS: number;
        tooltip: $WidgetTooltipHolder;
        bordered: boolean;
        static DEFAULT_TEXT_COLOR: number;
        static CURSOR_APPEND_CHARACTER: string;
        displayPos: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static CURSOR_INSERT_COLOR: number;
        textColorUneditable: number;
        value: string;
        textShadow: boolean;
        height: number;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        focusedTime: number;
        visible: boolean;
        static BACKWARDS: number;
        suggestion: string;
        responder: $Consumer<string>;
        active: boolean;
        cursorPos: number;
        static MIN_SCROLL_PERIOD: number;
        textColor: number;
        filter: $Predicate<string>;
        formatter: $BiFunction<string, number, $FormattedCharSequence>;
        highlightPos: number;
        hint: $Component;
        x: number;
        focused: boolean;
        y: number;
        static FORWARDS: number;
        maxLength: number;
        font: $Font;
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        constructor(font: $Font, width: number, height: number, message: $Component_);
        get highlighted(): string;
        get innerWidth(): number;
        get textColorUneditableFancyMenu(): number;
        get textColorFancyMenu(): number;
        get highlightPosFancyMenu(): number;
        get suggestionFancyMenu(): string;
        get maxLengthKonkrete(): number;
        get isEditableFancyMenu(): boolean;
        get isEditableKonkrete(): boolean;
        get borderedFancyMenu(): boolean;
        get maxLengthFancyMenu(): number;
        get focusedTimeFancyMenu(): number;
        get formatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        get hightlightPosKonkrete(): number;
        get hintFancyMenu(): $Component;
    }
    export class $StringWidget extends $AbstractStringWidget {
        alignCenter(): $StringWidget;
        alignLeft(): $StringWidget;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        alignRight(): $StringWidget;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        alignX: number;
        static MIN_SCROLL_PERIOD: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        constructor(width: number, height: number, message: $Component_, font: $Font);
        constructor(message: $Component_, font: $Font);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        focused: boolean;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(checkbox: $Checkbox, value: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(width: number): void;
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
        constructor(maxWidth: number, message: $Component_, font: $Font, alwaysShowBorder: boolean, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton implements $UniqueLabeledSwitchCycleButton {
        getValue(): T;
        static builder<T>(valueStringifier: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(value: T): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static booleanBuilder(componentOn: $Component_, componentOff: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static onOffBuilder(initialValue: boolean): $CycleButton$Builder<boolean>;
        createDefaultNarrationMessage(): $MutableComponent;
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        setLabeledSwitchComponentLabel_FancyMenu(message: $Component_): void;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<T>;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        x: number;
        focused: boolean;
        y: number;
        height: number;
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(color: number): $FittingMultiLineTextWidget;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        showingScrollBar(): boolean;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(button: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
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
    }
    export class $ImageWidget extends $AbstractWidget {
        static sprite(width: number, height: number, sprite: $ResourceLocation_): $ImageWidget;
        static texture(width: number, height: number, texture: $ResourceLocation_, textureWidth: number, textureHeight: number): $ImageWidget;
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
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
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
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay implements $IMixinBossHealthOverlay {
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        shouldCreateWorldFog(): boolean;
        render(guiGraphics: $GuiGraphics): void;
        shouldPlayMusic(): boolean;
        shouldDarkenScreen(): boolean;
        get_events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        static OVERLAY_BACKGROUND_SPRITES: $ResourceLocation[];
        static OVERLAY_PROGRESS_SPRITES: $ResourceLocation[];
        events: $Map<$UUID, $LerpingBossEvent>;
        constructor(minecraft: $Minecraft);
        get _events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(color: number): $AbstractStringWidget;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        render(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        renderBack(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
        reversed(): $SequencedCollection<E>;
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
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
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { signature?: $MessageSignature_, deletableAfter?: number,  } | [signature?: $MessageSignature_, deletableAfter?: number, ];
    export class $AbstractButton extends $AbstractWidget implements $IClickableWidget {
        setXaero_tooltip(arg0: $Supplier_<any>): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        getXaero_tooltip(): $Supplier<any>;
        onPress(): void;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
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
        constructor(width: number, height: number, model: $EntityModelSet, skin: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setColor(color: number): $MultiLineTextWidget;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setMaxWidth(color: number): $MultiLineTextWidget;
        setMaxRows(color: number): $MultiLineTextWidget;
        setCentered(centered: boolean): $MultiLineTextWidget;
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
        constructor(message: $Component_, font: $Font);
        constructor(x: number, y: number, message: $Component_, font: $Font);
        set color(value: number);
        set maxWidth(value: number);
        set maxRows(value: number);
        set centered(value: boolean);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        getNarration(): $Component;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions implements $IMixinCommandSuggestions {
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        getNarrationMessage(): $Component;
        hide(): void;
        isVisible(): boolean;
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        setAllowHiding(allowHiding: boolean): void;
        updateCommandInfo(): void;
        getUsageNarration(): $Component;
        mouseScrolled(delta: number): boolean;
        setAllowSuggestions(allowHiding: boolean): void;
        showSuggestions(allowHiding: boolean): void;
        renderSuggestions(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): boolean;
        renderUsage(guiGraphics: $GuiGraphics): void;
        invokeSortSuggestionsFancyMenu(suggestions: $Suggestions): $List<$Suggestion>;
        getKeepSuggestionsFancyMenu(): boolean;
        invokeUpdateUsageInfoFancyMenu(): void;
        getAllowSuggestionsFancyMenu(): boolean;
        getPendingSuggestionsFancyMenu(): $CompletableFuture<$Suggestions>;
        setPendingSuggestionsFancyMenu(arg0: $CompletableFuture<$Suggestions>): void;
        getCurrentParseFancyMenu(): $ParseResults<$SharedSuggestionProvider>;
        setCurrentParseFancyMenu(arg0: $ParseResults<$SharedSuggestionProvider>): void;
        setSuggestionsFancyMenu(arg0: $CommandSuggestions$SuggestionsList): void;
        getCommandUsageFancyMenu(): $List<$FormattedCharSequence>;
        getSuggestionsFancyMenu(): $CommandSuggestions$SuggestionsList;
        suggestions: $CommandSuggestions$SuggestionsList;
        constructor(minecraft: $Minecraft, screen: $Screen, input: $EditBox, font: $Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number);
        get narrationMessage(): $Component;
        get visible(): boolean;
        set allowHiding(value: boolean);
        get usageNarration(): $Component;
        set allowSuggestions(value: boolean);
        get keepSuggestionsFancyMenu(): boolean;
        get allowSuggestionsFancyMenu(): boolean;
        get commandUsageFancyMenu(): $List<$FormattedCharSequence>;
    }
    export class $PopupScreen$Builder {
        build(): $PopupScreen;
        onClose(onClose: $Runnable_): $PopupScreen$Builder;
        setWidth(width: number): $PopupScreen$Builder;
        setMessage(message: $Component_): $PopupScreen$Builder;
        addButton(message: $Component_, action: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setImage(image: $ResourceLocation_): $PopupScreen$Builder;
        constructor(backgroundScreen: $Screen, title: $Component_);
        set width(value: number);
        set message(value: $Component_);
        set image(value: $ResourceLocation_);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
    }
    export class $ChatComponent implements $ChatComponentAccessor, $ChatHudAccessor {
        getWidth(): number;
        static getWidth(height: number): number;
        getHeight(): number;
        static getHeight(height: number): number;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        modify$fed000$chat_heads$chatheads$moveText(font: $Font, formattedCharSequence: $FormattedCharSequence_, x: number, y: number, color: number, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): number;
        handler$fed000$chat_heads$chatheads$renderChatHead(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): void;
        constant$dae000$placebo$unEscapeChatLogNewlines(arg0: string): string;
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        addMessage(chatComponent: $Component_): void;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        scrollChat(posInc: number): void;
        static defaultUnfocusedPct(): number;
        constant$chg002$nolijium$a(arg0: number): number;
        restoreState(state: $ChatComponent$State): void;
        getScale(): number;
        getRecentChat(): $ArrayListDeque<string>;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        getLinesPerPage(): number;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        deleteMessage(messageSignature: $MessageSignature_): void;
        modify$fed000$chat_heads$chatheads$correctClickPosition(x: number, guiMessage: $GuiMessage$Line_): number;
        handler$fed000$chat_heads$chatheads$forgetRenderData(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo): void;
        handler$kcm000$sounds$$mention_recieve_sound_effect(arg0: $Component_, arg1: $MessageSignature_, arg2: $GuiMessageTag_, arg3: $CallbackInfo): void;
        modifyExpressionValue$fed000$chat_heads$chatheads$fixTextOverflow(original: number): number;
        storeState(): $ChatComponent$State;
        handler$kcm000$sounds$$cooldown_period(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $CallbackInfo): void;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        getVisibleMessages(): $List<$Message>;
        getAllMessages(): $List<$GuiMessage>;
        getTrimmedMessages(): $List<$GuiMessage$Line>;
        allMessages: $List<$GuiMessage>;
        constructor(minecraft: $Minecraft);
        get scale(): number;
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get chatFocused(): boolean;
        get visibleMessages(): $List<$Message>;
        get trimmedMessages(): $List<$GuiMessage$Line>;
    }
    export class $PlayerTabOverlay {
        reset(): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        setHeader(footer: $Component_ | null): void;
        setFooter(footer: $Component_ | null): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set header(value: $Component_ | null);
        set footer(value: $Component_ | null);
    }
    export class $PlayerFaceRenderer {
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number, drawHat: boolean, upsideDown: boolean): void;
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number): void;
        static draw(guiGraphics: $GuiGraphics, skin: $PlayerSkin_, x: number, y: number, size: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        findOption(option: $OptionInstance<never>): $AbstractWidget;
        applyUnsavedChanges(): void;
        addSmall(leftOption: $AbstractWidget, rightOption: $AbstractWidget | null): void;
        addSmall(...options: $OptionInstance<never>[]): void;
        addSmall(options: $List_<$AbstractWidget>): void;
        addBig(option: $OptionInstance<never>): void;
        getMouseOver(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
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
        hovered: $OptionsList$Entry;
        height: number;
        constructor(minecraft: $Minecraft, width: number, screen: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        render(guiGraphics: $GuiGraphics): void;
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        audibleSubtitles: $List<$SubtitleOverlay$Subtitle>;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget implements $AbstractSliderButtonAccessor, $IMixinAbstractSliderButton, $CustomizableSlider {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(height: number): void;
        setNineSliceCustomSliderBackground_FancyMenu(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        setNineSliceSliderHandleBorderLeft_FancyMenu(height: number): void;
        setNineSliceSliderBackgroundBorderY_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        setNineSliceSliderHandleBorderBottom_FancyMenu(height: number): void;
        setNineSliceSliderHandleBorderRight_FancyMenu(height: number): void;
        setNineSliceSliderBackgroundBorderX_FancyMenu(height: number): void;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(height: number): void;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        setNineSliceSliderHandleBorderTop_FancyMenu(height: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        setNineSliceCustomSliderHandle_FancyMenu(focused: boolean): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        setNineSliceSliderHandleBorderY_FancyMenu(height: number): void;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setNineSliceSliderHandleBorderX_FancyMenu(height: number): void;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        getCanChangeValueFancyMenu(): boolean;
        callGetHandleSprite(): $ResourceLocation;
        callGetSprite(): $ResourceLocation;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_, value: number);
        get canChangeValueFancyMenu(): boolean;
    }
    export class $LockIconButton extends $Button {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isLocked(): boolean;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setLocked(locked: boolean): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        focused: boolean;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, onPress: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget {
        getValue(): string;
        setValue(fullText: string): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        setCharacterLimit(characterLimit: number): void;
        setValueListener(valueListener: $Consumer_<string>): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getInnerHeight(): number;
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
        constructor(font: $Font, x: number, y: number, width: number, height: number, placeholder: $Component_, message: $Component_);
        set characterLimit(value: number);
        set valueListener(value: $Consumer_<string>);
        get innerHeight(): number;
    }
}
