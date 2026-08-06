import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Dynamic, $Lifecycle } from "@package/com/mojang/serialization";
import { $RegistryLayer, $RegistryLayer_, $WorldStem, $ReloadableServerResources } from "@package/net/minecraft/server";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $ExtendedCreateWorldScreen$MWCRenderTask_, $ExtendedCreateWorldScreen } from "@package/de/keksuccino/modernworldcreation/util/rendering/screens";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $Minecraft } from "@package/net/minecraft/client";
import { $OptionalLong, $Map, $List, $Collection_, $List_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_, $BiFunction, $UnaryOperator, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $RegistryAccess, $Registry, $Holder_, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $AccessorWorldSelectionScreen, $AccessorWorldSelectionListEntry, $AccessorWorldSelectionList } from "@package/com/illusivesoulworks/cherishedworlds/mixin/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $GridLayoutTab, $TabNavigationBar } from "@package/net/minecraft/client/gui/components/tabs";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $WorldDimensions, $WorldOptions, $WorldDimensions_, $WorldGenSettings_ } from "@package/net/minecraft/world/level/levelgen";
import { $GameType, $WorldDataConfiguration, $GameRules, $WorldDataConfiguration_, $GameRules$Value, $LevelSettings } from "@package/net/minecraft/world/level";
import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EditBox, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $Renderable, $CycleButton, $WidgetTooltipHolder, $ContainerObjectSelectionList, $Button, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $WorldData, $LevelStorageSource, $LevelStorageSource$LevelStorageAccess, $LevelSummary } from "@package/net/minecraft/world/level/storage";
import { $IMixinCreateWorldScreen } from "@package/de/keksuccino/modernworldcreation/mixin/mixins/common/client";
import { $PackRepository, $Pack } from "@package/net/minecraft/server/packs/repository";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/net/minecraft/client/gui/screens/worldselection" {
    export class $SwitchGrid {
        static builder(width: number): $SwitchGrid$Builder;
        refreshStates(): void;
    }
    export class $EditGameRulesScreen$EntryFactory<T extends $GameRules$Value<T>> {
    }
    export interface $EditGameRulesScreen$EntryFactory<T extends $GameRules$Value<T>> {
    }
    /**
     * Values that may be interpreted as {@link $EditGameRulesScreen$EntryFactory}.
     */
    export type $EditGameRulesScreen$EntryFactory_<T> = (() => void);
    export class $EditGameRulesScreen extends $Screen {
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
        constructor(gameRules: $GameRules, exitCallback: $Consumer_<($GameRules) | undefined>);
    }
    export class $PresetEditor {
        /**
         * @deprecated
         */
        static EDITORS: $Map<($ResourceKey<$WorldPreset>) | undefined, $PresetEditor>;
    }
    export interface $PresetEditor {
        createEditScreen(lastScreen: $CreateWorldScreen, context: $WorldCreationContext_): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $PresetEditor}.
     */
    export type $PresetEditor_ = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen);
    export class $WorldSelectionList extends $ObjectSelectionList<$WorldSelectionList$Entry> implements $AccessorWorldSelectionList {
        getScreen(): $SelectWorldScreen;
        setSelected(selected: $WorldSelectionList$Entry | null): void;
        updateFilter(filter: string): void;
        getSelectedOpt(): ($WorldSelectionList$WorldListEntry) | undefined;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getCurrentlyDisplayedLevels(): $List<$LevelSummary>;
        callFillLevels(filter: string, levels: $List_<$LevelSummary>): void;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static DATE_FORMAT: $DateTimeFormatter;
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
        hovered: $WorldSelectionList$Entry;
        height: number;
        constructor(screen: $SelectWorldScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number, filter: string, worlds: $WorldSelectionList | null);
        get screen(): $SelectWorldScreen;
        set selected(value: $WorldSelectionList$Entry | null);
        get selectedOpt(): ($WorldSelectionList$WorldListEntry) | undefined;
        get currentlyDisplayedLevels(): $List<$LevelSummary>;
    }
    export class $WorldCreationContext$OptionsModifier {
    }
    export interface $WorldCreationContext$OptionsModifier extends $UnaryOperator<$WorldOptions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$OptionsModifier}.
     */
    export type $WorldCreationContext$OptionsModifier_ = (() => void);
    export class $SwitchGrid$SwitchBuilder {
        withInfo(info: $Component_): $SwitchGrid$SwitchBuilder;
        withIsActiveCondition(isActiveCondition: $BooleanSupplier_): $SwitchGrid$SwitchBuilder;
    }
    export class $EditGameRulesScreen$BooleanRuleEntry extends $EditGameRulesScreen$GameRuleEntry {
    }
    export class $CreateWorldScreen$GameTab extends $GridLayoutTab {
    }
    export class $WorldSelectionList$LoadingHeader extends $WorldSelectionList$Entry {
        constructor(minecraft: $Minecraft);
    }
    export class $ExperimentsScreen extends $Screen {
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
        constructor(parent: $Screen, packRepository: $PackRepository, output: $Consumer_<$PackRepository>);
    }
    export class $EditWorldScreen extends $Screen {
        static create(minecraft: $Minecraft, levelAccess: $LevelStorageSource$LevelStorageAccess, callback: $BooleanConsumer_): $EditWorldScreen;
        static makeBackupAndShowToast(levelAccess: $LevelStorageSource$LevelStorageAccess): boolean;
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
    export class $CreateWorldScreen$MoreTab extends $GridLayoutTab {
    }
    export class $WorldOpenFlows {
        openWorld(worldName: string, onFail: $Runnable_): void;
        createFreshLevel(levelName: string, levelSettings: $LevelSettings, worldOptions: $WorldOptions, dimensionGetter: $Function_<$RegistryAccess, $WorldDimensions>, lastScreen: $Screen): void;
        recreateWorldData(levelStorage: $LevelStorageSource$LevelStorageAccess): $Pair<$LevelSettings, $WorldCreationContext>;
        localvar$ioe000$yeetusexperimentus$no(a: boolean): boolean;
        createLevelFromExistingSettings(levelStorage: $LevelStorageSource$LevelStorageAccess, resources: $ReloadableServerResources, registries: $LayeredRegistryAccess<$RegistryLayer_>, worldData: $WorldData): void;
        static confirmWorldCreation(minecraft: $Minecraft, screen: $CreateWorldScreen, lifecycle: $Lifecycle, loadWorld: $Runnable_, skipWarnings: boolean): void;
        loadWorldStem(dynamic: $Dynamic<never>, safeMode: boolean, packRepository: $PackRepository): $WorldStem;
        constructor(minecraft: $Minecraft, levelSource: $LevelStorageSource);
    }
    export class $OptimizeWorldScreen extends $Screen {
        static create(minecraft: $Minecraft, callback: $BooleanConsumer_, dataFixer: $DataFixer, levelStorage: $LevelStorageSource$LevelStorageAccess, eraseCache: boolean): $OptimizeWorldScreen;
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
    export class $WorldSelectionList$WorldListEntry extends $WorldSelectionList$Entry implements $AutoCloseable, $AccessorWorldSelectionListEntry {
        getLevelName(): string;
        joinWorld(): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        canJoin(): boolean;
        editWorld(): void;
        deleteWorld(): void;
        recreateWorld(): void;
        doDeleteWorld(): void;
        getWorldSummary(): $LevelSummary;
        summary: $LevelSummary;
        constructor(worldSelectionList: $WorldSelectionList, summary: $WorldSelectionList, arg2: $LevelSummary);
        get levelName(): string;
        get worldSummary(): $LevelSummary;
    }
    export class $EditGameRulesScreen$CategoryRuleEntry extends $EditGameRulesScreen$RuleEntry {
        constructor(label: $EditGameRulesScreen, arg1: $Component_);
    }
    export class $EditGameRulesScreen$GameRuleEntry extends $EditGameRulesScreen$RuleEntry {
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen extends $Screen {
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
    export class $SwitchGrid$InfoUnderneathSettings extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SwitchGrid$InfoUnderneathSettings}.
     */
    export type $SwitchGrid$InfoUnderneathSettings_ = { alwaysMaxHeight?: boolean, maxInfoRows?: number,  } | [alwaysMaxHeight?: boolean, maxInfoRows?: number, ];
    export class $WorldCreationContext extends $Record {
        options(): $WorldOptions;
        validate(): void;
        withOptions(optionsModifier: $WorldCreationContext$OptionsModifier_): $WorldCreationContext;
        dataPackResources(): $ReloadableServerResources;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $Registry<$LevelStem>;
        withSettings(options: $WorldOptions, selectedDimensions: $WorldDimensions_): $WorldCreationContext;
        worldgenRegistries(): $LayeredRegistryAccess<$RegistryLayer>;
        withDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): $WorldCreationContext;
        selectedDimensions(): $WorldDimensions;
        worldgenLoadContext(): $RegistryAccess$Frozen;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $WorldCreationContext;
        constructor(worldGenSettings: $WorldGenSettings_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(options: $WorldOptions, datapackDimensions: $Registry<$LevelStem_>, selectedDimensions: $WorldDimensions_, worldgenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(options: $WorldOptions, selectedDimensions: $WorldDimensions_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext}.
     */
    export type $WorldCreationContext_ = { dataPackResources?: $ReloadableServerResources, datapackDimensions?: $Registry<$LevelStem_>, worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, selectedDimensions?: $WorldDimensions_, options?: $WorldOptions, dataConfiguration?: $WorldDataConfiguration_,  } | [dataPackResources?: $ReloadableServerResources, datapackDimensions?: $Registry<$LevelStem_>, worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, selectedDimensions?: $WorldDimensions_, options?: $WorldOptions, dataConfiguration?: $WorldDataConfiguration_, ];
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry extends $ObjectSelectionList$Entry<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
    }
    export class $CreateWorldScreen$DataPackReloadCookie extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CreateWorldScreen$DataPackReloadCookie}.
     */
    export type $CreateWorldScreen$DataPackReloadCookie_ = { dataConfiguration?: $WorldDataConfiguration_, worldGenSettings?: $WorldGenSettings_,  } | [dataConfiguration?: $WorldDataConfiguration_, worldGenSettings?: $WorldGenSettings_, ];
    export class $WorldCreationContext$DimensionsUpdater {
    }
    export interface $WorldCreationContext$DimensionsUpdater extends $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, $WorldDimensions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$DimensionsUpdater}.
     */
    export type $WorldCreationContext$DimensionsUpdater_ = (() => void);
    export class $SwitchGrid$Builder {
        build(consumer: $Consumer_<$LayoutElement>): $SwitchGrid;
        withPaddingLeft(paddingLeft: number): $SwitchGrid$Builder;
        addSwitch(label: $Component_, stateSupplier: $BooleanSupplier_, onClicked: $Consumer_<boolean>): $SwitchGrid$SwitchBuilder;
        withInfoUnderneath(maxInfoRows: number, alwaysMaxHeight: boolean): $SwitchGrid$Builder;
        withRowSpacing(paddingLeft: number): $SwitchGrid$Builder;
        constructor(width: number);
    }
    export class $WorldCreationUiState {
        getName(): string;
        setName(name: string): void;
        isDebug(): boolean;
        setSeed(name: string): void;
        getSeed(): string;
        getGameRules(): $GameRules;
        isHardcore(): boolean;
        setSettings(settings: $WorldCreationContext_): void;
        getSettings(): $WorldCreationContext;
        addListener(listener: $Consumer_<$WorldCreationUiState>): void;
        setGameMode(gameMode: $WorldCreationUiState$SelectedGameMode_): void;
        onChanged(): void;
        getGameMode(): $WorldCreationUiState$SelectedGameMode;
        getDifficulty(): $Difficulty;
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        updateDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): void;
        getWorldType(): $WorldCreationUiState$WorldTypeEntry;
        setAllowCommands(allowCommands: boolean): void;
        getTargetFolder(): string;
        isGenerateStructures(): boolean;
        setGenerateStructures(allowCommands: boolean): void;
        getNormalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        setWorldType(worldType: $WorldCreationUiState$WorldTypeEntry_): void;
        setGameRules(gameRules: $GameRules): void;
        setBonusChest(allowCommands: boolean): void;
        getAltPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        getPresetEditor(): $PresetEditor;
        isBonusChest(): boolean;
        constructor(savesFolder: $Path_, settings: $WorldCreationContext_, preset: ($ResourceKey_<$WorldPreset>) | undefined, seed: $OptionalLong);
        get debug(): boolean;
        get hardcore(): boolean;
        get targetFolder(): string;
        get normalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get altPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get presetEditor(): $PresetEditor;
    }
    export class $EditGameRulesScreen$RuleEntry extends $ContainerObjectSelectionList$Entry<$EditGameRulesScreen$RuleEntry> {
        constructor(tooltip: $List_<$FormattedCharSequence_> | null);
    }
    export class $WorldSelectionList$Entry extends $ObjectSelectionList$Entry<$WorldSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        constructor();
    }
    export class $SelectWorldScreen extends $Screen implements $AccessorWorldSelectionScreen {
        updateButtonStatus(levelSummary: $LevelSummary | null): void;
        getList(): $WorldSelectionList;
        getDeleteButton(): $Button;
        getSearchBox(): $EditBox;
        static MENU_BACKGROUND: $ResourceLocation;
        static TEST_OPTIONS: $WorldOptions;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        list: $WorldSelectionList;
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
        get deleteButton(): $Button;
        get searchBox(): $EditBox;
    }
    export class $EditGameRulesScreen$RuleList extends $ContainerObjectSelectionList<$EditGameRulesScreen$RuleEntry> {
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
        hovered: $EditGameRulesScreen$RuleEntry;
        height: number;
        constructor(gameRules: $EditGameRulesScreen, arg1: $GameRules);
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackList extends $ObjectSelectionList<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
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
        hovered: $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry;
        height: number;
    }
    export class $WorldCreationUiState$WorldTypeEntry extends $Record {
        preset(): $Holder<$WorldPreset>;
        describePreset(): $Component;
        isAmplified(): boolean;
        constructor(preset: $Holder_<$WorldPreset> | null);
        get amplified(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$WorldTypeEntry}.
     */
    export type $WorldCreationUiState$WorldTypeEntry_ = { preset?: $Holder_<$WorldPreset>,  } | [preset?: $Holder_<$WorldPreset>, ];
    export class $SwitchGrid$LabeledSwitch extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SwitchGrid$LabeledSwitch}.
     */
    export type $SwitchGrid$LabeledSwitch_ = { button?: $CycleButton<boolean>, stateSupplier?: $BooleanSupplier_, isActiveCondition?: $BooleanSupplier_,  } | [button?: $CycleButton<boolean>, stateSupplier?: $BooleanSupplier_, isActiveCondition?: $BooleanSupplier_, ];
    export class $WorldOpenFlows$1Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldOpenFlows$1Data}.
     */
    export type $WorldOpenFlows$1Data_ = { options?: $WorldOptions, existingDimensions?: $Registry<$LevelStem_>, levelSettings?: $LevelSettings,  } | [options?: $WorldOptions, existingDimensions?: $Registry<$LevelStem_>, levelSettings?: $LevelSettings, ];
    export class $ConfirmExperimentalFeaturesScreen extends $Screen {
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
        constructor(enabledPacks: $Collection_<$Pack>, callback: $BooleanConsumer_);
    }
    export class $CreateWorldScreen$WorldTab extends $GridLayoutTab {
    }
    export class $EditGameRulesScreen$IntegerRuleEntry extends $EditGameRulesScreen$GameRuleEntry {
    }
    export class $WorldCreationUiState$SelectedGameMode extends $Enum<$WorldCreationUiState$SelectedGameMode> {
        static values(): $WorldCreationUiState$SelectedGameMode[];
        static valueOf(arg0: string): $WorldCreationUiState$SelectedGameMode;
        getInfo(): $Component;
        static SURVIVAL: $WorldCreationUiState$SelectedGameMode;
        gameType: $GameType;
        displayName: $Component;
        static CREATIVE: $WorldCreationUiState$SelectedGameMode;
        static DEBUG: $WorldCreationUiState$SelectedGameMode;
        static HARDCORE: $WorldCreationUiState$SelectedGameMode;
        get info(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$SelectedGameMode}.
     */
    export type $WorldCreationUiState$SelectedGameMode_ = "survival" | "hardcore" | "creative" | "debug";
    export class $CreateWorldScreen extends $Screen implements $IMixinCreateWorldScreen, $ExtendedCreateWorldScreen {
        popScreen(): void;
        static createTempDataPackDirFromExistingWorld(datapackDir: $Path_, minecraft: $Minecraft): $Path;
        repositionElements(): void;
        static createFromExisting(minecraft: $Minecraft, lastScreen: $Screen | null, levelSettings: $LevelSettings, settings: $WorldCreationContext_, tempDataPackDir: $Path_ | null): $CreateWorldScreen;
        localvar$iod000$yeetusexperimentus$dontShowWarning(showWarning: boolean): boolean;
        getUiState(): $WorldCreationUiState;
        static openFresh(minecraft: $Minecraft, lastScreen: $Screen | null): void;
        setOnInitBody_ModernWorldCreation(arg0: $Consumer_<any>): void;
        postPostRenderTask_ModernWorldCreation(arg0: $ExtendedCreateWorldScreen$MWCRenderTask_): void;
        invoke_openExperimentsScreen_ModernWorldCreation(worldDataConfiguration: $WorldDataConfiguration_): void;
        get_uiState_ModernWorldCreation(): $WorldCreationUiState;
        get_tabNavigationBar_ModernWorldCreation(): $TabNavigationBar;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static TAB_HEADER_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        get uiState(): $WorldCreationUiState;
        set onInitBody_ModernWorldCreation(value: $Consumer_<any>);
        get _uiState_ModernWorldCreation(): $WorldCreationUiState;
        get _tabNavigationBar_ModernWorldCreation(): $TabNavigationBar;
    }
}
