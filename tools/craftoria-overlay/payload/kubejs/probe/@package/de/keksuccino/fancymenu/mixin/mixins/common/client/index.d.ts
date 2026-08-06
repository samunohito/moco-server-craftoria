import { $MultiBufferSource$BufferSource, $Rect2i, $PostPass, $PostChain } from "@package/net/minecraft/client/renderer";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $ResourceLoadStateTracker, $Options$FieldAccess } from "@package/net/minecraft/client";
import { $UUID, $List, $Map_, $UUID_, $List_, $Map, $Set } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $BiFunction } from "@package/java/util/function";
import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $SpectatorMenu } from "@package/net/minecraft/client/gui/spectator";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Suggestions, $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $FilePackResources$SharedZipFileAccess, $PackResources, $PackType } from "@package/net/minecraft/server/packs";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $WritableByteChannel } from "@package/java/nio/channels";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $EditBox, $Button$OnPress, $LerpingBossEvent, $Button$OnPress_, $CommandSuggestions$SuggestionsList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $PlayerModelPart } from "@package/net/minecraft/world/entity/player";
import { $NativeImage$Format_, $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $ZipFile } from "@package/java/util/zip";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $ConnectScreen, $Screen } from "@package/net/minecraft/client/gui/screens";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/de/keksuccino/fancymenu/mixin/mixins/common/client" {
    export class $IMixinLevelLoadingScreen {
    }
    export interface $IMixinLevelLoadingScreen {
        getProgressListenerFancyMenu(): $StoringChunkProgressListener;
        get progressListenerFancyMenu(): $StoringChunkProgressListener;
    }
    /**
     * Values that may be interpreted as {@link $IMixinLevelLoadingScreen}.
     */
    export type $IMixinLevelLoadingScreen_ = (() => $StoringChunkProgressListener);
    export class $IMixinButton {
    }
    export interface $IMixinButton {
        setPressActionFancyMenu(arg0: $Button$OnPress_): void;
        set pressActionFancyMenu(value: $Button$OnPress_);
    }
    /**
     * Values that may be interpreted as {@link $IMixinButton}.
     */
    export type $IMixinButton_ = ((arg0: $Button$OnPress) => void);
    export class $IMixinCommandSuggestions {
    }
    export interface $IMixinCommandSuggestions {
        invokeSortSuggestionsFancyMenu(arg0: $Suggestions): $List<$Suggestion>;
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
        get keepSuggestionsFancyMenu(): boolean;
        get allowSuggestionsFancyMenu(): boolean;
        get commandUsageFancyMenu(): $List<$FormattedCharSequence>;
    }
    export class $IMixinProgressScreen {
    }
    export interface $IMixinProgressScreen {
        getProgressFancyMenu(): number;
        get progressFancyMenu(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinProgressScreen}.
     */
    export type $IMixinProgressScreen_ = (() => number);
    export class $IMixinGui {
    }
    export interface $IMixinGui {
        get_toolHighlightTimer_FancyMenu(): number;
        get_overlayMessageString_FancyMenu(): $Component;
        get_overlayMessageTime_FancyMenu(): number;
        get_subtitle_FancyMenu(): $Component;
        get_title_FancyMenu(): $Component;
        get _toolHighlightTimer_FancyMenu(): number;
        get _overlayMessageString_FancyMenu(): $Component;
        get _overlayMessageTime_FancyMenu(): number;
        get _subtitle_FancyMenu(): $Component;
        get _title_FancyMenu(): $Component;
    }
    export class $IMixinCompositePackResources {
    }
    export interface $IMixinCompositePackResources {
        getPackResourcesStack_FancyMenu(): $List<$PackResources>;
        getPrimaryPackResources_FancyMenu(): $PackResources;
        get packResourcesStack_FancyMenu(): $List<$PackResources>;
        get primaryPackResources_FancyMenu(): $PackResources;
    }
    export class $IMixinEditBox {
    }
    export interface $IMixinEditBox {
        getTextColorUneditableFancyMenu(): number;
        invokeRenderHighlightFancyMenu(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getTextColorFancyMenu(): number;
        getHighlightPosFancyMenu(): number;
        getSuggestionFancyMenu(): string;
        getIsEditableFancyMenu(): boolean;
        getBorderedFancyMenu(): boolean;
        getMaxLengthFancyMenu(): number;
        invokeDeleteTextFancyMenu(arg0: number): void;
        getDisplayPosFancyMenu(): number;
        getFocusedTimeFancyMenu(): number;
        getFormatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        setDisplayPosFancyMenu(arg0: number): void;
        getHintFancyMenu(): $Component;
        get textColorUneditableFancyMenu(): number;
        get textColorFancyMenu(): number;
        get highlightPosFancyMenu(): number;
        get suggestionFancyMenu(): string;
        get isEditableFancyMenu(): boolean;
        get borderedFancyMenu(): boolean;
        get maxLengthFancyMenu(): number;
        get focusedTimeFancyMenu(): number;
        get formatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        get hintFancyMenu(): $Component;
    }
    export class $IMixinAbstractContainerScreen {
    }
    export interface $IMixinAbstractContainerScreen {
        get_hoveredSlot_FancyMenu(): $Slot;
        get_draggingItem_FancyMenu(): $ItemStack;
        get _hoveredSlot_FancyMenu(): $Slot;
        get _draggingItem_FancyMenu(): $ItemStack;
    }
    export class $IMixinPlayerModel {
    }
    export interface $IMixinPlayerModel {
        getCloakFancyMenu(): $ModelPart;
        get cloakFancyMenu(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPlayerModel}.
     */
    export type $IMixinPlayerModel_ = (() => $ModelPart);
    export class $IMixinFilePackResources {
    }
    export interface $IMixinFilePackResources {
        getZipFileAccess_FancyMenu(): $FilePackResources$SharedZipFileAccess;
        getPrefix_FancyMenu(): string;
        get zipFileAccess_FancyMenu(): $FilePackResources$SharedZipFileAccess;
        get prefix_FancyMenu(): string;
    }
    export class $IMixinMinecraft {
    }
    export interface $IMixinMinecraft {
        getReloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        openChatScreenFancyMenu(arg0: string): void;
        get reloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
    }
    export class $IMixinSplashRenderer {
    }
    export interface $IMixinSplashRenderer {
        getSplashFancyMenu(): string;
        get splashFancyMenu(): string;
    }
    /**
     * Values that may be interpreted as {@link $IMixinSplashRenderer}.
     */
    export type $IMixinSplashRenderer_ = (() => string);
    export class $IMixinBossHealthOverlay {
    }
    export interface $IMixinBossHealthOverlay {
        get_events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        get _events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinBossHealthOverlay}.
     */
    export type $IMixinBossHealthOverlay_ = (() => $Map_<$UUID_, $LerpingBossEvent>);
    export class $IMixinGuiGraphics {
    }
    export interface $IMixinGuiGraphics {
        getBufferSource_FancyMenu(): $MultiBufferSource$BufferSource;
        get bufferSource_FancyMenu(): $MultiBufferSource$BufferSource;
    }
    /**
     * Values that may be interpreted as {@link $IMixinGuiGraphics}.
     */
    export type $IMixinGuiGraphics_ = (() => $MultiBufferSource$BufferSource);
    export class $IMixinSuggestionsList {
    }
    export interface $IMixinSuggestionsList {
        getRectFancyMenu(): $Rect2i;
        getOffsetFancyMenu(): number;
        getLastMouseFancyMenu(): $Vec2;
        setLastMouseFancyMenu(arg0: $Vec2): void;
        getCurrentFancyMenu(): number;
        get rectFancyMenu(): $Rect2i;
        get offsetFancyMenu(): number;
        get currentFancyMenu(): number;
    }
    export class $IMixinPostChain {
    }
    export interface $IMixinPostChain {
        getPasses_FancyMenu(): $List<$PostPass>;
        get passes_FancyMenu(): $List<$PostPass>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPostChain}.
     */
    export type $IMixinPostChain_ = (() => $List_<$PostPass>);
    export class $IMixinMusicManager {
    }
    export interface $IMixinMusicManager {
        getCurrentMusic_FancyMenu(): $SoundInstance;
        get currentMusic_FancyMenu(): $SoundInstance;
    }
    /**
     * Values that may be interpreted as {@link $IMixinMusicManager}.
     */
    export type $IMixinMusicManager_ = (() => $SoundInstance);
    export class $IMixinRealmsNotificationsScreen {
    }
    export interface $IMixinRealmsNotificationsScreen {
        get_numberOfPendingInvites_FancyMenu(): number;
        get_trialAvailable_FancyMenu(): boolean;
        get_hasUnreadNews_FancyMenu(): boolean;
        get_hasUnseenNotifications(): boolean;
        get_validClient_FancyMenu(): $CompletableFuture<boolean>;
        get _numberOfPendingInvites_FancyMenu(): number;
        get _trialAvailable_FancyMenu(): boolean;
        get _hasUnreadNews_FancyMenu(): boolean;
        get _hasUnseenNotifications(): boolean;
        get _validClient_FancyMenu(): $CompletableFuture<boolean>;
    }
    export class $IMixinPathPackResources {
    }
    export interface $IMixinPathPackResources {
        getRoot_FancyMenu(): $Path;
        get root_FancyMenu(): $Path;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPathPackResources}.
     */
    export type $IMixinPathPackResources_ = (() => $Path_);
    export class $IMixinServerList {
    }
    export interface $IMixinServerList {
        getServerListFancyMenu(): $List<$ServerData>;
        get serverListFancyMenu(): $List<$ServerData>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinServerList}.
     */
    export type $IMixinServerList_ = (() => $List_<$ServerData>);
    export class $IMixinSpectatorGui {
    }
    export interface $IMixinSpectatorGui {
        get_menu_FancyMenu(): $SpectatorMenu;
        invoke_getHotbarAlpha_FancyMenu(): number;
        get _menu_FancyMenu(): $SpectatorMenu;
    }
    export class $IMixinConnectScreen {
        static invokeConstructFancyMenu(arg0: $Screen, arg1: $Component_): $ConnectScreen;
    }
    export interface $IMixinConnectScreen {
    }
    export class $IMixinFilePackResourcesSharedZipFileAccess {
    }
    export interface $IMixinFilePackResourcesSharedZipFileAccess {
        getOrCreateZipFile_FancyMenu(): $ZipFile;
        get orCreateZipFile_FancyMenu(): $ZipFile;
    }
    /**
     * Values that may be interpreted as {@link $IMixinFilePackResourcesSharedZipFileAccess}.
     */
    export type $IMixinFilePackResourcesSharedZipFileAccess_ = (() => $ZipFile);
    export class $IMixinGameRenderer {
    }
    export interface $IMixinGameRenderer {
        getBlurEffect_FancyMenu(): $PostChain;
        get blurEffect_FancyMenu(): $PostChain;
    }
    /**
     * Values that may be interpreted as {@link $IMixinGameRenderer}.
     */
    export type $IMixinGameRenderer_ = (() => $PostChain);
    export class $IMixinNativeImage {
        static invoke_class_constructor_FancyMenu(arg0: $NativeImage$Format_, arg1: number, arg2: number, arg3: boolean, arg4: number): $NativeImage;
    }
    export interface $IMixinNativeImage {
        invoke_writeToChannel_FancyMenu(arg0: $WritableByteChannel): boolean;
        get_pixels_FancyMenu(): number;
        get _pixels_FancyMenu(): number;
    }
    export class $IMixinAbstractSliderButton {
    }
    export interface $IMixinAbstractSliderButton {
        getCanChangeValueFancyMenu(): boolean;
        get canChangeValueFancyMenu(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMixinAbstractSliderButton}.
     */
    export type $IMixinAbstractSliderButton_ = (() => boolean);
    export class $IMixinVanillaPackResources {
    }
    export interface $IMixinVanillaPackResources {
        getRootPaths_FancyMenu(): $List<$Path>;
        getPathsForType_FancyMenu(): $Map<$PackType, $List<$Path>>;
        get rootPaths_FancyMenu(): $List<$Path>;
        get pathsForType_FancyMenu(): $Map<$PackType, $List<$Path>>;
    }
    export class $IMixinClientLanguage {
    }
    export interface $IMixinClientLanguage {
        getStorageFancyMenu(): $Map<string, string>;
        get storageFancyMenu(): $Map<string, string>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinClientLanguage}.
     */
    export type $IMixinClientLanguage_ = (() => $Map_<string, string>);
    export class $IMixinChatScreen {
    }
    export interface $IMixinChatScreen {
        getInputFancyMenu(): $EditBox;
        get inputFancyMenu(): $EditBox;
    }
    /**
     * Values that may be interpreted as {@link $IMixinChatScreen}.
     */
    export type $IMixinChatScreen_ = (() => $EditBox);
    export class $IMixinAbstractWidget {
    }
    export interface $IMixinAbstractWidget {
        setMessageFieldFancyMenu(arg0: $Component_): void;
        getAlphaFancyMenu(): number;
        setHeightFancyMenu(arg0: number): void;
        set messageFieldFancyMenu(value: $Component_);
        get alphaFancyMenu(): number;
        set heightFancyMenu(value: number);
    }
    export class $IMixinOptions {
    }
    export interface $IMixinOptions {
        getModelPartsFancyMenu(): $Set<$PlayerModelPart>;
        invokeProcessOptionsFancyMenu(arg0: $Options$FieldAccess): void;
        get modelPartsFancyMenu(): $Set<$PlayerModelPart>;
    }
    export class $IMixinScreen {
    }
    export interface $IMixinScreen {
        invoke_init_FancyMenu(): void;
        get_initialized_FancyMenu(): boolean;
        getNarratablesFancyMenu(): $List<$NarratableEntry>;
        getChildrenFancyMenu(): $List<$GuiEventListener>;
        getRenderablesFancyMenu(): $List<$Renderable>;
        invokeRemoveWidgetFancyMenu(arg0: $GuiEventListener): void;
        get _initialized_FancyMenu(): boolean;
        get narratablesFancyMenu(): $List<$NarratableEntry>;
        get childrenFancyMenu(): $List<$GuiEventListener>;
        get renderablesFancyMenu(): $List<$Renderable>;
    }
    export class $IMixinReceivingLevelScreen {
    }
    export interface $IMixinReceivingLevelScreen {
        setCreatedAtFancyMenu(arg0: number): void;
        set createdAtFancyMenu(value: number);
    }
    /**
     * Values that may be interpreted as {@link $IMixinReceivingLevelScreen}.
     */
    export type $IMixinReceivingLevelScreen_ = ((arg0: number) => void);
}
