import { $IMixinKeyBinding } from "@package/org/anti_ad/mc/ipnext/mixin";
import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$1 } from "@package/traben/entity_model_features/mixin/mixins/accessor";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $HeadRenderable } from "@package/dzwdz/chat_heads/mixininterface";
import { $ISimpleOption } from "@package/com/ishland/c2me/client/uncapvd/mixin";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $IMixinOptions, $IMixinMinecraft } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor as $MinecraftAccessor$1, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $List_, $Collection, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $KeyMappingAccessor as $KeyMappingAccessor$2, $MouseHandlerAccessor as $MouseHandlerAccessor$2 } from "@package/net/blay09/mods/balm/mixin";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $AccessorMinecraft } from "@package/net/darkhax/bookshelf/common/mixin/access/client";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Thread, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $HeadData_, $HeadData } from "@package/dzwdz/chat_heads";
import { $File_, $File } from "@package/java/io";
import { $ChatHudLineAccessor } from "@package/com/wulian/chatimpressiveanimation/mixin";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $WidgetTooltipHolder, $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $StringSplitterAccessor, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/team/creative/creativecore/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $Narrator } from "@package/com/mojang/text2speech";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $KeyMappingAccessor } from "@package/net/blay09/mods/kuma/mixin";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec, $Codec_ } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $KeyMappingExtension } from "@package/com/matyrobbrt/keybindbundles/ii";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $MinecraftClientAccessor } from "@package/net/bettercombat/mixin/client";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $IMixinMouseHandler } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $MinecraftClientAccess } from "@package/net/puffish/skillsmod/access";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $Inventory, $ChatVisiblity, $PlayerModelPart } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $AccessorKeyMapping } from "@package/vazkii/patchouli/mixin/client";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $KeyMappingAccessorMixin } from "@package/immersive_aircraft/mixin/client";
import { $WeaponAttributes$Attack, $MinecraftClient_BetterCombat, $AttackHand } from "@package/net/bettercombat/api";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $MinecraftAccessor } from "@package/org/embeddedt/embeddium/impl/mixin/core/render";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $KeyMappingAccessor as $KeyMappingAccessor$1 } from "@package/com/hollingsworth/nuggets/mixin";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CameraAccessor } from "@package/dev/kosmx/playerAnim/mixin/firstPerson";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $IMixinMouseHandler, $MouseHandlerAccessor$1, $MouseHandlerAccessor$2, $MouseHandlerAccessor {
        setup(windowPointer: number): void;
        handler$hgc000$relics$onKeyPress(arg0: $CallbackInfo): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        grabMouse(): void;
        xpos(): number;
        ypos(): number;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        releaseMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        cursorEntered(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        setIgnoreFirstMove(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMouseGrabbed(): boolean;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        handleAccumulatedMovement(): void;
        getYVelocity(): number;
        getXVelocity(): number;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMiddlePressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isLeftPressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isRightPressed(): boolean;
        modifyExpressionValue$hma000$spectrum$makeMouseSluggish(arg0: $Object): $Object;
        modifyExpressionValue$hma000$spectrum$forceSmoothCamera(arg0: boolean): boolean;
        getMouseY(): number;
        getMouseX(): number;
        getLastHandleMovementTime(): number;
        getActiveButtonKonkrete(): number;
        create$setYPos(movementTime: number): void;
        create$setXPos(movementTime: number): void;
        mouseGrabbed: boolean;
        constructor(minecraft: $Minecraft);
        set up(value: number);
        get YVelocity(): number;
        get XVelocity(): number;
        get middlePressed(): boolean;
        get leftPressed(): boolean;
        get rightPressed(): boolean;
        get mouseY(): number;
        get mouseX(): number;
        get lastHandleMovementTime(): number;
        get activeButtonKonkrete(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getAccessToken(): string;
        getProfileId(): $UUID;
        getSessionId(): string;
        getXuid(): (string) | undefined;
        getClientId(): (string) | undefined;
        constructor(name: string, uuid: $UUID_, accessToken: string, xuid: (string) | undefined, clientId: (string) | undefined, type: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get accessToken(): string;
        get profileId(): $UUID;
        get sessionId(): string;
        get xuid(): (string) | undefined;
        get clientId(): (string) | undefined;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        handler$ijm000$nerb$onSetup(iterable: $Iterable_<any>, registryAccess: $RegistryAccess, ci: $CallbackInfo): void;
        getCollection(categories: $RecipeBookCategories_): $List<$RecipeCollection>;
        getCollections(): $List<$RecipeCollection>;
        setupCollections(recipes: $Iterable_<$RecipeHolder<never>>, registryAccess: $RegistryAccess): void;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
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
    export class $HotbarManager {
        get(index: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(gameDirectory: $Path_, fixerUpper: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isMouse(): boolean;
        isKeyboard(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get mouse(): boolean;
        get keyboard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        codec(): $Codec<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { codec?: $Codec_<any>, values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>,  } | [codec?: $Codec_<any>, values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(delay: number, arg1: number, period: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { period?: number, title?: string, message?: string, delay?: number,  } | [period?: number, title?: string, message?: string, delay?: number, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        /**
         * Saves a screenshot in the game directory with a time-stamped filename.
         */
        static grab(gameDirectory: $File_, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        static grab(gameDirectory: $File_, screenshotName: string | null, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        addRegion(buffer: $ByteBuffer, width: number, height: number, rowWidth: number, rowHeight: number): void;
        saveRow(): void;
        static takeScreenshot(framebuffer: $RenderTarget): $NativeImage;
        static SCREENSHOT_DIR: string;
        constructor(gameDirectory: $File_, width: number, height: number, rowHeight: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options implements $IMixinOptions {
        load(arg0: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        load(): void;
        /**
         * Send a client info packet with settings information to the server
         */
        save(): void;
        getFile(): $File;
        fov(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        glintSpeed(): $OptionInstance<number>;
        setKey(keyBinding: $KeyMapping, input: $InputConstants$Key): void;
        chatOpacity(): $OptionInstance<number>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        chatDelay(): $OptionInstance<number>;
        narrator(): $OptionInstance<$NarratorStatus>;
        fullscreen(): $OptionInstance<boolean>;
        guiScale(): $OptionInstance<number>;
        particles(): $OptionInstance<$ParticleStatus>;
        gamma(): $OptionInstance<number>;
        autoJump(): $OptionInstance<boolean>;
        touchscreen(): $OptionInstance<boolean>;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        entityDistanceScaling(): $OptionInstance<number>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        static genericValueOrOffLabel(text: $Component_, value: number): $Component;
        notificationDisplayTime(): $OptionInstance<number>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        chatHeightUnfocused(): $OptionInstance<number>;
        updateResourcePacks(resourcePackList: $PackRepository): void;
        darknessEffectScale(): $OptionInstance<number>;
        getBackgroundOpacity(opacity: number): number;
        setServerRenderDistance(serverRenderDistance: number): void;
        buildPlayerInformation(): $ClientInformation;
        getBackgroundColor(opacity: number): number;
        getBackgroundColor(chatColor: number): number;
        framerateLimit(): $OptionInstance<number>;
        glintStrength(): $OptionInstance<number>;
        rawMouseInput(): $OptionInstance<boolean>;
        mipmapLevels(): $OptionInstance<number>;
        enableVsync(): $OptionInstance<boolean>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        getCameraType(): $CameraType;
        setCameraType(pointOfView: $CameraType_): void;
        ambientOcclusion(): $OptionInstance<boolean>;
        renderDistance(): $OptionInstance<number>;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        bobView(): $OptionInstance<boolean>;
        dumpOptionsForReport(): string;
        getEffectiveRenderDistance(): number;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        /**
         * Send a client info packet with settings information to the server
         */
        onboardingAccessibilityFinished(): void;
        loadSelectedResourcePacks(resourcePackList: $PackRepository): void;
        getSoundSourceVolume(category: $SoundSource_): number;
        hideSplashTexts(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        sensitivity(): $OptionInstance<number>;
        showSubtitles(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        invertYMouse(): $OptionInstance<boolean>;
        chatLineSpacing(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        chatHeightFocused(): $OptionInstance<number>;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        panoramaSpeed(): $OptionInstance<number>;
        entityShadows(): $OptionInstance<boolean>;
        /**
         * Returns `true` if the client connect to a server using the native transport system.
         */
        useNativeTransport(): boolean;
        autoSuggestions(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        isModelPartEnabled(playerModelPart: $PlayerModelPart_): boolean;
        static genericValueLabel(text: $Component_, value: $Component_): $Component;
        static genericValueLabel(text: $Component_, value: number): $Component;
        toggleModelPart(modelPart: $PlayerModelPart_, enable: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        broadcastOptions(): void;
        chatColors(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        getSoundSourceOptionInstance(soundSource: $SoundSource_): $OptionInstance<number>;
        handler$eei000$chattoggle$loadHook(info: $CallbackInfo): void;
        chatLinks(): $OptionInstance<boolean>;
        operatorItemsTab(): $OptionInstance<boolean>;
        hideLightningFlash(): $OptionInstance<boolean>;
        simulationDistance(): $OptionInstance<number>;
        chatLinksPrompt(): $OptionInstance<boolean>;
        getMenuBackgroundBlurriness(): number;
        damageTiltStrength(): $OptionInstance<number>;
        screenEffectScale(): $OptionInstance<number>;
        fovEffectScale(): $OptionInstance<number>;
        getCloudsType(): $CloudStatus;
        handler$hfc000$bankstorage$onOptionChange(arg0: $CallbackInfo): void;
        textBackgroundOpacity(): $OptionInstance<number>;
        getModelPartsFancyMenu(): $Set<$PlayerModelPart>;
        invokeProcessOptionsFancyMenu(accessor: $Options$FieldAccess): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        keyMappings: $KeyMapping[];
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(minecraft: $Minecraft, gameDirectory: $File_);
        get file(): $File;
        set serverRenderDistance(value: number);
        get effectiveRenderDistance(): number;
        get cloudsType(): $CloudStatus;
        get modelPartsFancyMenu(): $Set<$PlayerModelPart>;
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        minInclusive(): number;
        maxInclusive(): number;
        validateValue(value: number): (number) | undefined;
        applyValueImmediately(): boolean;
        codec(): $Codec<number>;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        constructor(minInclusive: number, maxInclusive: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { minInclusive?: number, maxInclusive?: number, applyValueImmediately?: boolean,  } | [minInclusive?: number, maxInclusive?: number, applyValueImmediately?: boolean, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        modifyReturnValue$gia000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MOVEMENT: string;
        keyModifier: $KeyModifier;
        static CATEGORY_SORT_ORDER: $Map<string, number>;
        defaultKey: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_GAMEPLAY: string;
        category: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        keyModifierDefault: $KeyModifier;
        constructor(name: string, keyCode: number, category: string, needsToggle: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(id: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        validateValue(value: number): (number) | undefined;
        xmap<R>(encoder: $DoubleFunction_<R>, decoder: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        toSliderValue(value: number): number;
        codec(): $Codec<number>;
        applyValueImmediately(): boolean;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        fromSliderValue(value: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        advanceTime(time: number, arg1: boolean): number;
        updatePauseState(frozen: boolean): void;
        updateFrozenState(frozen: boolean): void;
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaTicks(): number;
        getDeltaTickResidual(): number;
        catnip$getDeltaTickResidual(): number;
        constructor(ticksPerSecond: number, time: number, arg2: $FloatUnaryOperator_);
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front";
    export class $GuiMessage$Line extends $Record implements $HeadRenderable {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        addedTime(): number;
        endOfEntry(): boolean;
        handler$fel000$chat_heads$chatheads$setOwnerForFirstLine(callbackInfo: $CallbackInfo): void;
        chatheads$getHeadData(): $HeadData;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_ | null, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { content?: $FormattedCharSequence_, endOfEntry?: boolean, addedTime?: number, tag?: $GuiMessageTag_,  } | [content?: $FormattedCharSequence_, endOfEntry?: boolean, addedTime?: number, tag?: $GuiMessageTag_, ];
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        sayNow(message: string): void;
        sayNow(message: $Component_): void;
        updateNarratorStatus(status: $NarratorStatus_): void;
        checkStatus(narratorEnabled: boolean): void;
        say(message: $Component_): void;
        sayChat(message: $Component_): void;
        narrator: $Narrator;
        static NO_TITLE: $Component;
        constructor(minecraft: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        minInclusive(): number;
        maxInclusive(): number;
        validateValue(value: number): (number) | undefined;
        encodableMaxInclusive(): number;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        createCycleButton(): boolean;
        maxSupplier(): $IntSupplier;
        codec(): $Codec<number>;
        applyValueImmediately(): boolean;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { maxSupplier?: $IntSupplier_, minInclusive?: number, encodableMaxInclusive?: number,  } | [maxSupplier?: $IntSupplier_, minInclusive?: number, encodableMaxInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
        applyValueImmediately(): boolean;
        fromSliderValue(value: number): T;
        toSliderValue(value: T): number;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        icon(): $GuiMessageTag$Icon;
        indicatorColor(): number;
        static systemSinglePlayer(): $GuiMessageTag;
        logTag(): string;
        static chatError(): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        static chatModified(originalText: string): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_ | null, arg2: $Component_ | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { icon?: $GuiMessageTag$Icon_, logTag?: string, text?: $Component_, indicatorColor?: number,  } | [icon?: $GuiMessageTag$Icon_, logTag?: string, text?: $Component_, indicatorColor?: number, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        close(): void;
        constructor(notifications: $ResourceLocation_, selector: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record implements $HeadRenderable, $ChatHudLineAccessor {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        icon(): $GuiMessageTag$Icon;
        addedTime(): number;
        chatheads$getHeadData(): $HeadData;
        chatheads$setHeadData(headData: $HeadData_): void;
        getCreationTick(): number;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_ | null, arg3: $GuiMessageTag_ | null);
        get creationTick(): number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { content?: $Component_, signature?: $MessageSignature_, addedTime?: number, tag?: $GuiMessageTag_,  } | [content?: $Component_, signature?: $MessageSignature_, addedTime?: number, tag?: $GuiMessageTag_, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getCategories(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        static getExtensionInfo(): $ExtensionInfo;
        getIconItems(): $List<$ItemStack>;
        static REFURBISHED_FURNITURE_MICROWAVE_ITEMS: $RecipeBookCategories;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_MICROWAVE_SEARCH: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_MISC: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_DRINKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_SEARCH: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_FOOD: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_MICROWAVE_BLOCKS: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_BLOCKS: $RecipeBookCategories;
        static RUBINATED_NETHER_FREEZABLE_MISC: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static FARMERSDELIGHT_COOKING_MEALS: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_BLOCKS: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_MISC: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_SEARCH: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_FOOD: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_MISC: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_MICROWAVE_MISC: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_MICROWAVE_FOOD: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_ITEMS: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_ITEMS: $RecipeBookCategories;
        static RUBINATED_NETHER_FREEZABLE_SEARCH: $RecipeBookCategories;
        static get extensionInfo(): $ExtensionInfo;
        get iconItems(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown" | "farmersdelight_cooking_drinks" | "farmersdelight_cooking_meals" | "farmersdelight_cooking_misc" | "farmersdelight_cooking_search" | "refurbished_furniture_freezer_blocks" | "refurbished_furniture_freezer_food" | "refurbished_furniture_freezer_items" | "refurbished_furniture_freezer_misc" | "refurbished_furniture_freezer_search" | "refurbished_furniture_microwave_blocks" | "refurbished_furniture_microwave_food" | "refurbished_furniture_microwave_items" | "refurbished_furniture_microwave_misc" | "refurbished_furniture_microwave_search" | "refurbished_furniture_oven_blocks" | "refurbished_furniture_oven_food" | "refurbished_furniture_oven_items" | "refurbished_furniture_oven_misc" | "refurbished_furniture_oven_search" | "rubinated_nether_freezable_misc" | "rubinated_nether_freezable_search";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        codec(): $Codec<T>;
        constructor(arg0: $List_<T>, arg1: $Codec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { values?: $List_<any>, codec?: $Codec_<any>,  } | [values?: $List_<any>, codec?: $Codec_<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(value: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        history(): $Collection<string>;
        addCommand(command: string): void;
        constructor(path: $Path_);
    }
    export class $Camera implements $CameraAccessor {
        reset(): void;
        setup(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number): void;
        move(zoom: number, dy: number, dx: number): void;
        getPosition(): $Vec3;
        getBlockAtCamera(): $BlockState;
        getLeftVector(): $Vector3f;
        tick(): void;
        rotation(): $Quaternionf;
        getXRot(): number;
        getYRot(): number;
        isInitialized(): boolean;
        getEntity(): $Entity;
        getUpVector(): $Vector3f;
        isDetached(): boolean;
        getRoll(): number;
        handler$hdh000$immersive_aircraft$ia$setup(area: $BlockGetter, entity: $Entity, thirdPerson: boolean, inverseView: boolean, tickDelta: number, ci: $CallbackInfo): void;
        handler$hfp000$relics$onRotationUpdate(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        setPosition(pos: $Vec3_): void;
        getLookVector(): $Vector3f;
        /**
         * @deprecated
         */
        setRotation(yRot: number, xRot: number): void;
        getNearPlane(): $Camera$NearPlane;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        getBlockPosition(): $BlockPos;
        handler$bei000$supplementaries$supp$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        handler$ifb001$perception$onSetup(blockGetter: $BlockGetter, entity: $Entity, bl: boolean, bl2: boolean, partialTicks: number, ci: $CallbackInfo): void;
        getMaxZoom(maxZoom: number): number;
        setDetached(arg0: boolean): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        eyeHeight: number;
        constructor();
        get blockAtCamera(): $BlockState;
        get leftVector(): $Vector3f;
        get XRot(): number;
        get YRot(): number;
        get initialized(): boolean;
        get entity(): $Entity;
        get upVector(): $Vector3f;
        get roll(): number;
        get lookVector(): $Vector3f;
        get nearPlane(): $Camera$NearPlane;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
        get blockPosition(): $BlockPos;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(style: $Style, currentPos: number, contentWidth: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(typeName: string): $User$Type;
        static byName(typeName: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        quickPlayData(): $GameConfig$QuickPlayData;
        realmsClient(): $RealmsClient;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient,  } | [quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any>, $ISimpleOption<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(value: $Object): void;
        static cachedConstantTooltip<T>(message: $Component_): $OptionInstance$TooltipSupplier<T>;
        static createBoolean(key: string, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, valueStringifier: $OptionInstance$CaptionBasedToString_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        createButton(options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<$Object>): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number): $AbstractWidget;
        createButton(options: $Options): $AbstractWidget;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        codec(): $Codec<$Object>;
        setCallbacks(arg0: $OptionInstance$ValueSet<$Object>): void;
        getInitialValue(): $Object;
        setCodec(arg0: $Codec_<$Object>): void;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, codec: $Codec_<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        set callbacks(value: $OptionInstance$ValueSet<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftClientAccess, $AccessorMinecraft, $MinecraftClientAccessor$1, $MinecraftClientAccessor, $MinecraftClient_BetterCombat, $IXaeroMinimapMinecraftClient, $IWorldMapMinecraftClient, $IMixinMinecraft, $MinecraftClientKJS, $MinecraftAccessor$1, $MinecraftAccessor {
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        run(): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        static getInstance(): $Minecraft;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        stop(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        destroy(): void;
        getConnection(): $ClientPacketListener;
        disconnect(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        disconnect(): void;
        disconnect(nextScreen: $Screen, keepResourcePacks: boolean): void;
        setLevel(level: $ClientLevel, reason: $ReceivingLevelScreen$Reason_): void;
        static crash(minecraft: $Minecraft | null, gameDirectory: $File_, crashReport: $CrashReport): void;
        getProxy(): $Proxy;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        tick(): void;
        setOverlay(loadingGui: $Overlay | null): void;
        getWindow(): $Window;
        setScreen(nextScreen: $Screen | null): void;
        delayCrash(report: $CrashReport): void;
        getFps(): number;
        getToasts(): $ToastComponent;
        static fillReport(minecraft: $Minecraft | null, languageManager: $LanguageManager | null, launchVersion: string, options: $Options | null, report: $CrashReport): void;
        /**
         * Adds core server Info (GL version, Texture pack, isModded, type), and the worldInfo to the crash report.
         */
        fillReport(theCrash: $CrashReport): $CrashReport;
        pauseGame(leftClick: boolean): void;
        getUser(): $User;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isPaused(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isDemo(): boolean;
        isBlocked(playerUUID: $UUID_): boolean;
        getOverlay(): $Overlay;
        handler$kco000$sounds$$open_close_inventory_sound_effect(arg0: $Screen, arg1: $CallbackInfo): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isRunning(): boolean;
        getProfiler(): $ProfilerFiller;
        getGuiSprites(): $GuiSpriteManager;
        getItemRenderer(): $ItemRenderer;
        renderBuffers(): $RenderBuffers;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsMultiplayer(): boolean;
        quickPlayLog(): $QuickPlayLog;
        realmsDataFetcher(): $RealmsDataFetcher;
        setWindowActive(leftClick: boolean): void;
        commandHistory(): $CommandHistory;
        directoryValidator(): $DirectoryValidator;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isLocalServer(): boolean;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateTitle(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        resizeDisplay(): void;
        getDebugOverlay(): $DebugScreenOverlay;
        multiplayerBan(): $BanDetails;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isGameLoadFinished(): boolean;
        getBlockRenderer(): $BlockRenderDispatcher;
        static checkModStatus(): $ModCheck;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getLaunchedVersion(): string;
        getModelManager(): $ModelManager;
        /**
         * Returns the save loader that is currently being used
         */
        getLevelSource(): $LevelStorageSource;
        setLastInputType(lastInputType: $InputType_): void;
        getChatStatus(): $Minecraft$ChatStatus;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getVersionType(): string;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isEnforceUnicode(): boolean;
        delayCrashRaw(report: $CrashReport): void;
        getFrameTimeNs(): number;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cursorEntered(): void;
        /**
         * Return the musicTicker's instance
         */
        getMusicManager(): $MusicManager;
        getCameraEntity(): $Entity;
        getGpuUtilization(): number;
        doWorldLoad(levelStorage: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, newWorld: boolean): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        handleKeybinds(): void;
        addCustomNbtData(stack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useFancyGraphics(): boolean;
        forceSetScreen(nextScreen: $Screen): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsRealms(): boolean;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        static getLauncherBrand(): string;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isNameBanned(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsTelemetry(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static renderNames(): boolean;
        clearClientLevel(nextScreen: $Screen): void;
        getNarrator(): $GameNarrator;
        getTutorial(): $Tutorial;
        isLocalPlayer(playerUUID: $UUID_): boolean;
        getGameProfile(): $GameProfile;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        updateMaxMipLevel(keyCount: number): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isSingleplayer(): boolean;
        setCameraEntity(viewingEntity: $Entity): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWindowActive(): boolean;
        getHotbarManager(): $HotbarManager;
        getSplashManager(): $SplashManager;
        delayTextureReload(): $CompletableFuture<void>;
        getLastInputType(): $InputType;
        getEntityModels(): $EntityModelSet;
        getTextureAtlas(location: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getLanguageManager(): $LanguageManager;
        getItemColors(): $ItemColors;
        getChatListener(): $ChatListener;
        getFixerUpper(): $DataFixer;
        getSkinManager(): $SkinManager;
        getSoundManager(): $SoundManager;
        getBlockColors(): $BlockColors;
        getBufferBuilders(): $RenderBuffers;
        getUpswingTicks(): number;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cancelUpswing(): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasTargetsInReach(): boolean;
        getComboCount(): number;
        getSwingProgress(): number;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getTitle(): string;
        getCurrentServer(): $ServerData;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        getProfileKeySignatureValidator(): $SignatureValidator;
        handler$jkj000$ae2$pickColor(arg0: $CallbackInfo): void;
        handler$jle000$ae2wtlib$pickBlock(arg0: $CallbackInfo, arg1: $ItemStack_, arg2: number): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        clearDownloadedResourcePacks(): void;
        handler$dab000$prism$runTick(tickWorld: boolean, callbackInfo: $CallbackInfo): void;
        handler$kfb001$iceberg$runTick(tickWorld: boolean, callbackInfo: $CallbackInfo): void;
        handler$dln006$bridgingmod$onTick(ci: $CallbackInfo): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasSingleplayerServer(): boolean;
        clearResourcePacksOnError(throwable: $Throwable, errorMessage: $Component_ | null, gameLoadCookie: $Minecraft$GameLoadCookie_ | null): void;
        /**
         * Returns the currently running integrated server
         */
        getSingleplayerServer(): $IntegratedServer;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        debugFpsMeterKeyPress(keyCount: number): void;
        emergencySaveAndCrash(report: $CrashReport): void;
        reloadResourcePacks(): $CompletableFuture<void>;
        getMainRenderTarget(): $RenderTarget;
        debugClientMetricsStart(logger: $Consumer_<$Component>): boolean;
        getDownloadedPackSource(): $DownloadedPackSource;
        getMinecraftSessionService(): $MinecraftSessionService;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useAmbientOcclusion(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        extraTelemetryAvailable(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useShaderTransparency(): boolean;
        updateReportEnvironment(reportEnvironment: $ReportEnvironment_): void;
        getTelemetryManager(): $ClientTelemetryManager;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        telemetryOptInExtra(): boolean;
        createWorldOpenFlows(): $WorldOpenFlows;
        getResourcePackRepository(): $PackRepository;
        getResourcePackDirectory(): $Path;
        getSituationalMusic(): $Music;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        showOnlyReducedInfo(): boolean;
        getReportingContext(): $ReportingContext;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isTextFilteringEnabled(): boolean;
        getProgressListener(): $StoringChunkProgressListener;
        getPlayerSocialManager(): $PlayerSocialManager;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        prepareForMultiplayer(): void;
        /**
         * Gets the sprite uploader used for paintings.
         */
        getPaintingTextures(): $PaintingTextureManager;
        grabPanoramixScreenshot(gameDirectory: $File_, width: number, height: number): $Component;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        canValidateProfileKeys(): boolean;
        /**
         * Gets the sprite uploader used for potions.
         */
        getMobEffectTextures(): $MobEffectTextureManager;
        shouldEntityAppearGlowing(entity: $Entity): boolean;
        getScheduledEvents(): $ScheduledEvents;
        getXaeroWorldMap_fps(): number;
        getCurrentAttackHand(): $AttackHand;
        getXaeroMinimap_fps(): number;
        wrapOperation$kch000$sounds$$hotbar_keybind_sound_effect(arg0: $Inventory, arg1: number, arg2: $Operation_<any>): void;
        redirect$gdj000$glitchcore$startUseItem_getItemInHand(arg0: $LocalPlayer, arg1: $InteractionHand_): $ItemStack;
        handler$dmd000$inventoryprofilesnext$handleInputEvents(arg0: $CallbackInfo): void;
        getTextureManager(): $TextureManager;
        getVanillaPackResources(): $VanillaPackResources;
        handler$dln000$bridgingmod$onItemUse(info: $CallbackInfo): void;
        handler$gdj001$glitchcore$onStartUseItem(arg0: $CallbackInfo): void;
        handler$gdj000$glitchcore$onEndTick(arg0: $CallbackInfo): void;
        handler$gdj000$glitchcore$onBeginTick(arg0: $CallbackInfo): void;
        handler$cof000$revelationary$onLogout(arg0: $Screen, arg1: boolean, arg2: $CallbackInfo): void;
        handler$bkn000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        getResourceManager(): $ResourceManager;
        modify$heg000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$ehl000$irons_spellbooks$changeGlowOutline(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        handler$zjp000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$heg000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        /**
         * Retrieves the `Locale` set by the player.
         * Useful for creating string and number formatters.
         */
        getLocale(): $Locale;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        popGuiLayer(): void;
        pushGuiLayer(nextScreen: $Screen): void;
        getCursorTarget(): $Entity;
        getCurrentAttack(): $WeaponAttributes$Attack;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWeaponSwingInProgress(): boolean;
        /**
         * Return the singleton Minecraft instance for the game
         */
        self(): $Minecraft;
        tell(message: $Component_): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isCtrlDown(): boolean;
        getName(): $Component;
        isKeyBindDown(id: string): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isShiftDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(defaultText: string): void;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isAltDown(): boolean;
        setTitle(defaultText: string): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setCurrentScreen(nextScreen: $Screen): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getCurrentWorldName(): string;
        getKeyBindPressedTicks(id: string): number;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(defaultText: string): void;
        getCurrentScreen(): $Screen;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setActivePostShader(id: $ResourceLocation_): void;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getTimer(): $DeltaTracker$Timer;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        setAttackCooldown(keyCount: number): void;
        getMissTime(): number;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        create$setMissTime(keyCount: number): void;
        getReloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        bookshelf$getFontManager(): $FontManager;
        embeddium$getGameThread(): $Thread;
        openChatScreenFancyMenu(defaultText: string): void;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        itemColors: $ItemColors;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        blockRenderer: $BlockRenderDispatcher;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        level: $ClientLevel;
        gameDirectory: $File;
        gameThread: $Thread;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        clientTickCount: number;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(gameConfig: $GameConfig);
        static get instance(): $Minecraft;
        get connection(): $ClientPacketListener;
        get proxy(): $Proxy;
        get window(): $Window;
        get fps(): number;
        get toasts(): $ToastComponent;
        get user(): $User;
        get paused(): boolean;
        get demo(): boolean;
        get running(): boolean;
        get profiler(): $ProfilerFiller;
        get guiSprites(): $GuiSpriteManager;
        get itemRenderer(): $ItemRenderer;
        get localServer(): boolean;
        get debugOverlay(): $DebugScreenOverlay;
        get gameLoadFinished(): boolean;
        get launchedVersion(): string;
        get modelManager(): $ModelManager;
        get levelSource(): $LevelStorageSource;
        get chatStatus(): $Minecraft$ChatStatus;
        get versionType(): string;
        get enforceUnicode(): boolean;
        get frameTimeNs(): number;
        get musicManager(): $MusicManager;
        get gpuUtilization(): number;
        static get launcherBrand(): string;
        get nameBanned(): boolean;
        get narrator(): $GameNarrator;
        get tutorial(): $Tutorial;
        get gameProfile(): $GameProfile;
        get singleplayer(): boolean;
        get hotbarManager(): $HotbarManager;
        get splashManager(): $SplashManager;
        get entityModels(): $EntityModelSet;
        get languageManager(): $LanguageManager;
        get chatListener(): $ChatListener;
        get fixerUpper(): $DataFixer;
        get skinManager(): $SkinManager;
        get soundManager(): $SoundManager;
        get blockColors(): $BlockColors;
        get bufferBuilders(): $RenderBuffers;
        get upswingTicks(): number;
        get comboCount(): number;
        get swingProgress(): number;
        get currentServer(): $ServerData;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get profileKeySignatureValidator(): $SignatureValidator;
        get singleplayerServer(): $IntegratedServer;
        get mainRenderTarget(): $RenderTarget;
        get downloadedPackSource(): $DownloadedPackSource;
        get minecraftSessionService(): $MinecraftSessionService;
        get telemetryManager(): $ClientTelemetryManager;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get resourcePackRepository(): $PackRepository;
        get resourcePackDirectory(): $Path;
        get situationalMusic(): $Music;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get reportingContext(): $ReportingContext;
        get textFilteringEnabled(): boolean;
        get progressListener(): $StoringChunkProgressListener;
        get playerSocialManager(): $PlayerSocialManager;
        get paintingTextures(): $PaintingTextureManager;
        get mobEffectTextures(): $MobEffectTextureManager;
        get scheduledEvents(): $ScheduledEvents;
        get xaeroWorldMap_fps(): number;
        get currentAttackHand(): $AttackHand;
        get xaeroMinimap_fps(): number;
        get textureManager(): $TextureManager;
        get vanillaPackResources(): $VanillaPackResources;
        get resourceManager(): $ResourceManager;
        get locale(): $Locale;
        get cursorTarget(): $Entity;
        get currentAttack(): $WeaponAttributes$Attack;
        get weaponSwingInProgress(): boolean;
        get ctrlDown(): boolean;
        get shiftDown(): boolean;
        get altDown(): boolean;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get currentWorldName(): string;
        set statusMessage(value: $Component_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set activePostShader(value: $ResourceLocation_);
        get displayName(): $Component;
        get timer(): $DeltaTracker$Timer;
        set attackCooldown(value: number);
        get missTime(): number;
        get reloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
    }
    export class $Camera$NearPlane {
        getTopRight(): $Vec3;
        getBottomRight(): $Vec3;
        getBottomLeft(): $Vec3;
        getPointOnPlane(leftScale: number, upScale: number): $Vec3;
        getTopLeft(): $Vec3;
        get topRight(): $Vec3;
        get bottomRight(): $Vec3;
        get bottomLeft(): $Vec3;
        get topLeft(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified";
    export class $KeyboardHandler {
        setup(window: number): void;
        handler$hgb000$relics$onKeyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        tick(): void;
        handler$gdi000$glitchcore$onKeyInput(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$cfi000$emi$onChar(window: number, codePoint: number, modifiers: number, info: $CallbackInfo): void;
        handler$cfi000$emi$onKey(window: number, key: number, scancode: number, action: number, modifiers: number, info: $CallbackInfo): void;
        keyPress(windowPointer: number, arg1: number, key: number, scanCode: number, action: number): void;
        getClipboard(): string;
        setClipboard(string: string): void;
        static DEBUG_CRASH_TIME: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(codePoint: number, style: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startRecovery(error: $Throwable): void;
        startReload(reloadReason: $ResourceLoadStateTracker$ReloadReason_, packs: $List_<$PackResources>): void;
        fillCrashReport(report: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        validateValue(value: T): (T) | undefined;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        codec(): $Codec<T>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(part: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altCondition(): $BooleanSupplier;
        altValues(): $List<T>;
        codec(): $Codec<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { altValues?: $List_<any>, codec?: $Codec_<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, altCondition?: $BooleanSupplier_, values?: $List_<any>,  } | [altValues?: $List_<any>, codec?: $Codec_<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, altCondition?: $BooleanSupplier_, values?: $List_<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter implements $StringSplitterAccessor {
        splitLines(content: $FormattedText, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: string, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: string, maxWidth: number, style: $Style, withNewLines: boolean, linePos: $StringSplitter$LinePosConsumer_): void;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, prefix: $FormattedText): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, splitifier: $BiConsumer_<$FormattedText, boolean>): void;
        stringWidth(content: $FormattedText): number;
        stringWidth(content: string | null): number;
        stringWidth(content: $FormattedCharSequence_): number;
        componentStyleAtWidth(content: $FormattedCharSequence_, maxWidth: number): $Style;
        componentStyleAtWidth(content: $FormattedText, maxWidth: number): $Style;
        plainTailByWidth(content: string, maxWidth: number, style: $Style): string;
        headByWidth(content: $FormattedText, maxWidth: number, style: $Style): $FormattedText;
        plainHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        static getWordPosition(content: string, skipCount: number, cursorPoint: number, includeWhitespace: boolean): number;
        formattedHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        formattedIndexByWidth(content: string, maxWidth: number, style: $Style): number;
        plainIndexAtWidth(content: string, maxWidth: number, style: $Style): number;
        findLineBreak(content: string, maxWidth: number, style: $Style): number;
        getWidthProvider(): $StringSplitter$WidthProvider;
        constructor(widthProvider: $StringSplitter$WidthProvider_);
        get widthProvider(): $StringSplitter$WidthProvider;
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyMappingExtension, $KeyMappingAccessor, $IMixinKeyBinding, $KeyMappingAccessor$2, $KeyMappingAccessorMixin, $AccessKeyMapping, $KeyMappingAccessor$1, $AccessorKeyMapping {
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDefault(): boolean;
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(keysym: number, scancode: number): boolean;
        static set(key: $InputConstants$Key, held: boolean): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static setAll(): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetToggleKeys(): void;
        static click(key: $InputConstants$Key): void;
        setKey(key: $InputConstants$Key): void;
        getCategory(): string;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isUnbound(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDown(): boolean;
        setDown(value: boolean): void;
        getDefaultKey(): $InputConstants$Key;
        /**
         * Returns `true` if the `KeyMapping` is set to a mouse key and the key matches.
         */
        matchesMouse(key: number): boolean;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        same(binding: $KeyMapping): boolean;
        saveString(): string;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static releaseAll(): void;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getTranslatedKeyMessage(): $Component;
        getKeyConflictContext(): $IKeyConflictContext;
        setKeyModifierAndCode(keyModifier: $KeyModifier_, keyCode: $InputConstants$Key): void;
        getDefaultKeyModifier(): $KeyModifier;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        incrementClickCount(): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        restoreToOriginalKey(): void;
        setKeyConflictContext(keyConflictContext: $IKeyConflictContext): void;
        /**
         * Returns a supplier which gets a keybind's current binding (eg, `key.forward` returns W by default), or the keybind's name if no such keybind exists (eg, `key.invalid` returns key.invalid)
         */
        static createNameSupplier(key: string): $Supplier<$Component>;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        consumeClick(): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        takeOverForBundle(): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        kbb$unregister(): void;
        getKeyModifier(): $KeyModifier;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetMapping(): void;
        static getAllKeyMappings$patchouli_$md$f87c94$4(): $Map<any, any>;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getDisplayName(): $Component;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        setToDefault(): void;
        /**
         * @return true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
         */
        isActiveAndMatches(keyCode: $InputConstants$Key): boolean;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        hasKeyModifierConflict(binding: $KeyMapping): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isConflictContextAndModifierActive(): boolean;
        getKey(): $InputConstants$Key;
        setPressed(value: boolean): void;
        getKeyCode(): $InputConstants$Key;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        getPressed(): boolean;
        setTimesPressed(arg0: number): void;
        getTimesPressed(): number;
        getClickCount(): number;
        setClickCount(arg0: number): void;
        controlling$getKey(): $InputConstants$Key;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MOVEMENT: string;
        keyModifier: $KeyModifier;
        static CATEGORY_SORT_ORDER: $Map<string, number>;
        defaultKey: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_GAMEPLAY: string;
        category: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        keyModifierDefault: $KeyModifier;
        constructor(name: string, keyCode: number, category: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        constructor(name: string, type: $InputConstants$Type_, keyCode: number, category: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        get default(): boolean;
        get name(): string;
        get unbound(): boolean;
        get translatedKeyMessage(): $Component;
        get defaultKeyModifier(): $KeyModifier;
        static get allKeyMappings$patchouli_$md$f87c94$4(): $Map<any, any>;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get keyCode(): $InputConstants$Key;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(name: string, value: T, stringValuefier: $Function_<string, T>, valueStringifier: $Function_<T, string>): T;
        process(name: string, value: number): number;
        process(name: string, value: string): string;
        process(name: string, value: boolean): boolean;
        process(name: string, value: number): number;
    }
    export class $DebugQueryHandler {
        queryBlockEntityTag(pos: $BlockPos_, tag: $Consumer_<$CompoundTag>): void;
        queryEntityTag(entId: number, tag: $Consumer_<$CompoundTag>): void;
        handleResponse(transactionId: number, tag: $CompoundTag_ | null): boolean;
        constructor(connection: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        shouldNarrateSystem(): boolean;
        shouldNarrateChat(): boolean;
        static byId(id: number): $NarratorStatus;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(isLocalServer: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(caption: $Component_, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(instance: $OptionInstance<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
