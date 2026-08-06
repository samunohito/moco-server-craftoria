import { $HandledScreenAccessor as $HandledScreenAccessor$1 } from "@package/dev/emi/emi/mixin/accessor";
import { $IMixinAbstractContainerScreen } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $RecipeUpdateListener, $AbstractFurnaceRecipeBookComponent, $RecipeBookComponent } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $ICraftingContainer, $ICraftingScreen } from "@package/dev/shadowsoffire/fastbench/api";
import { $HandledScreenAccessor } from "@package/com/periut/chisel/mixins";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$1 } from "@package/yalter/mousetweaks/mixin";
import { $IAntiquable } from "@package/net/mehvahdjukaar/supplementaries/common/block";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Random, $Map, $List, $List_ } from "@package/java/util";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$2 } from "@package/net/blay09/mods/balm/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $AbstractContainerScreenAccessor } from "@package/it/hurts/octostudios/immersiveui/mixin";
import { $SimpleContainer, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ScrollAction } from "@package/dev/terminalmc/moremousetweaks/inventory/util";
import { $DrawsOnLeft } from "@package/dev/shadowsoffire/placebo/util";
import { $HorseInventoryMenu, $ChestMenu, $FurnaceMenu, $LecternMenu, $ClickType_, $BeaconMenu, $CartographyTableMenu, $StonecutterMenu, $AnvilMenu, $Slot, $ShulkerBoxMenu, $ItemCombinerMenu, $EnchantmentMenu, $CrafterMenu, $CraftingMenu, $SmokerMenu, $ContainerSynchronizer, $BlastFurnaceMenu, $MerchantMenu, $SmithingMenu, $HopperMenu, $GrindstoneMenu, $DispenserMenu, $AbstractContainerMenu, $BrewingStandMenu, $AbstractFurnaceMenu, $InventoryMenu, $LoomMenu, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $ExtraScreenData } from "@package/it/hurts/octostudios/immersiveui/compat";
import { $BaseCommandBlock } from "@package/net/minecraft/world/level";
import { $CreativeModeTab, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EditBox, $AbstractButton, $Renderable, $WidgetTooltipHolder, $Button, $Button$OnPress_ } from "@package/net/minecraft/client/gui/components";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CreativeTabsScreenPage } from "@package/net/neoforged/neoforge/client/gui";
import { $IMerchantScreen, $IScrollableRecipeBook, $ISpecialClickableButtonWidget, $ISpecialScrollableScreen, $ISlot } from "@package/dev/terminalmc/moremousetweaks/util/inject";
import { $SlotWrapperAccessor, $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$3, $CreativeModeInventoryScreenAccessor as $CreativeModeInventoryScreenAccessor$1 } from "@package/net/blay09/mods/inventoryessentials/mixin";
import { $CreativeModeInventoryScreenAccessor } from "@package/de/dafuqs/fractal/mixin/client";
import { $ISubTabLocation } from "@package/de/dafuqs/fractal/interfaces";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$4 } from "@package/de/maxhenkel/tradecycling/mixin";
import { $AtomicBoolean } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ApothEnchantmentScreen$SuperRender } from "@package/dev/shadowsoffire/apothic_enchanting/table";
import { $RenderInfo, $MouseInfo } from "@package/it/hurts/octostudios/immersiveui/client";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $SignBlockEntity, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as tooltip from "@package/net/minecraft/client/gui/screens/inventory/tooltip";

declare module "@package/net/minecraft/client/gui/screens/inventory" {
    export class $SmithingScreen extends $ItemCombinerScreen<$SmithingMenu> {
        containerTick(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        static ARMOR_STAND_TRANSLATION: $Vector3f;
        snapbackStartY: number;
        static EMPTY_SLOT_SMITHING_TEMPLATES: $List<$ResourceLocation>;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static ARMOR_STAND_ANGLE: $Quaternionf;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        static MISSING_TEMPLATE_TOOLTIP: $Component;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static ERROR_TOOLTIP: $Component;
        topPos: number;
        font: $Font;
        constructor(menu: $SmithingMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentScreen extends $AbstractContainerScreen<$EnchantmentMenu> implements $ApothEnchantmentScreen$SuperRender {
        tickBook(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderBook(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        handler$bji000$immersiveui$onMouseClicked(d: number, e: number, i: number, ci: $CallbackInfoReturnable<any>): void;
        containerTick(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        apoth_superRender(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        oFlip: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        random: $RandomSource;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        flipT: number;
        oOpen: number;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        flip: number;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        flipA: number;
        last: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        time: number;
        topPos: number;
        open: number;
        font: $Font;
        constructor(menu: $EnchantmentMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookViewScreen$BookAccess extends $Record implements $IAntiquable {
        pages(): $List<$Component>;
        /**
         * Returns the size of the book
         */
        getPageCount(): number;
        getPage(page: number): $FormattedText;
        static fromItem(stack: $ItemStack_): $BookViewScreen$BookAccess;
        supplementaries$isAntique(): boolean;
        supplementaries$setAntique(arg0: boolean): void;
        constructor(arg0: $List_<$Component_>);
        get pageCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $BookViewScreen$BookAccess}.
     */
    export type $BookViewScreen$BookAccess_ = { pages?: $List_<$Component_>,  } | [pages?: $List_<$Component_>, ];
    export class $BeaconScreen$BeaconPowerButton extends $BeaconScreen$BeaconScreenButton {
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
    export class $CyclingSlotBackground {
        tick(icons: $List_<$ResourceLocation_>): void;
        render(containerMenu: $AbstractContainerMenu, guiGraphics: $GuiGraphics, partialTick: number, x: number, y: number): void;
        constructor(slotIndex: number);
    }
    export class $ShulkerBoxScreen extends $AbstractContainerScreen<$ShulkerBoxMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $ShulkerBoxMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$SlotWrapper extends $Slot implements $ISlot, $SlotWrapperAccessor {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $CommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        updateGui(): void;
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
        constructor(autoCommandBlock: $CommandBlockEntity);
    }
    export class $BrewingStandScreen extends $AbstractContainerScreen<$BrewingStandMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $BrewingStandMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen extends $EffectRenderingInventoryScreen<$CreativeModeInventoryScreen$ItemPickerMenu> implements $CreativeModeInventoryScreenAccessor, $ISubTabLocation, $ISpecialScrollableScreen, $CreativeModeInventoryScreenAccessor$1 {
        mmt$onMouseScrolledSpecial(arg0: number, arg1: number, arg2: number): $ScrollAction;
        static handleHotbarLoadOrSave(client: $Minecraft, index: number, load: boolean, save: boolean): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        fractal$getX2(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        fractal$getY(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        fractal$getX(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        fractal$getH2(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        fractal$getH(): number;
        containerTick(): void;
        getCurrentPage(): $CreativeTabsScreenPage;
        setCurrentPage(arg0: $CreativeTabsScreenPage): void;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        isInventoryOpen(): boolean;
        static getSelectedTab$fractal_$md$f87c94$0(): $CreativeModeTab;
        handler$dca000$fractal$mouseClicked(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        handler$dca000$fractal$renderSubTabs(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        handler$kcf000$sounds$$choose_item_sound_effect(arg0: $Slot, arg1: number, arg2: number, arg3: $ClickType_, arg4: $CallbackInfo): void;
        wrapWithCondition$dca000$fractal$wrapParentTitle(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: boolean): boolean;
        handler$kcf000$sounds$$mass_item_delete_sound_effect(arg0: $Slot, arg1: number, arg2: number, arg3: $ClickType_, arg4: $CallbackInfo): void;
        handler$kcf000$sounds$$pre_item_delete_sound_effect(arg0: $Slot, arg1: number, arg2: number, arg3: $ClickType_, arg4: $CallbackInfo): void;
        handler$kcf000$sounds$$inventory_typing_sound_effect(arg0: $CallbackInfo): void;
        modifyExpressionValue$kcf000$sounds$$creative_tab_item_swap(arg0: boolean): boolean;
        modifyExpressionValue$kcf000$sounds$$creative_tab_item_clone(arg0: boolean): boolean;
        handler$eef000$xycraft_core$simpleCreativeMenu$mouseClicked(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getCONTAINER(): $SimpleContainer;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        static selectedTab: $CreativeModeTab;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        destroyItemSlot: $Slot;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(player: $LocalPlayer, enabledFeatures: $FeatureFlagSet, displayOperatorCreativeTab: boolean);
        get inventoryOpen(): boolean;
        static get selectedTab$fractal_$md$f87c94$0(): $CreativeModeTab;
        get CONTAINER(): $SimpleContainer;
    }
    export class $AbstractCommandBlockEditScreen extends $Screen {
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
    export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        canSeeEffects(): boolean;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
    }
    export class $DispenserScreen extends $AbstractContainerScreen<$DispenserMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $DispenserMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$CustomCreativeSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $BookViewScreen extends $Screen {
        /**
         * I'm not sure why this exists. The function it calls is public and does all the work.
         */
        setPage(pageNum: number): boolean;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        setBookAccess(bookAccess: $BookViewScreen$BookAccess_): void;
        modify$beh000$supplementaries$supp$setTatteredBookTexture(arg0: $ResourceLocation_): $ResourceLocation;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        constructor(bookAccess: $BookViewScreen$BookAccess_);
        set page(value: number);
        set bookAccess(value: $BookViewScreen$BookAccess_);
    }
    export class $BeaconScreen extends $AbstractContainerScreen<$BeaconMenu> {
        containerTick(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $BeaconMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $ContainerScreen extends $AbstractContainerScreen<$ChestMenu> implements $MenuAccess<$ChestMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $ChestMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconCancelButton extends $BeaconScreen$BeaconSpriteScreenButton {
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
    export class $InventoryScreen extends $EffectRenderingInventoryScreen<$InventoryMenu> implements $RecipeUpdateListener, $IScrollableRecipeBook {
        static renderEntityInInventory(guiGraphics: $GuiGraphics, x: number, y: number, scale: number, translate: $Vector3f, pose: $Quaternionf, cameraOrientation: $Quaternionf | null, entity: $LivingEntity): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        containerTick(): void;
        mmt$onMouseScrollRecipeBook(arg0: number, arg1: number, arg2: number): $ScrollAction;
        static renderEntityInInventoryFollowsAngle(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        handler$iae000$patchouli$onGuiInitPost(arg0: $CallbackInfo): void;
        static renderEntityInInventoryFollowsMouse(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        yMouse: number;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        xMouse: number;
        topPos: number;
        font: $Font;
        constructor(player: $Player);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $HopperScreen extends $AbstractContainerScreen<$HopperMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $HopperMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookEditScreen$DisplayCache {
    }
    export class $FurnaceScreen extends $AbstractFurnaceScreen<$FurnaceMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        shouldBurst: $AtomicBoolean;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        topPos: number;
        font: $Font;
        constructor(menu: $FurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $MerchantScreen$TradeOfferButton extends $Button implements $ISpecialClickableButtonWidget {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getIndex(): number;
        mmt$mouseClicked(button: number): boolean;
        renderToolTip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
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
        constructor(x: $MerchantScreen, y: number, index: number, onPress: number, arg4: $Button$OnPress_);
        get index(): number;
    }
    export class $CartographyTableScreen extends $AbstractContainerScreen<$CartographyTableMenu> {
        handler$bej000$supplementaries$supp$animateSlots(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        localvar$bej000$supplementaries$supp$setAntiqueInk(arg0: $ItemStack_): $ItemStack;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $CartographyTableMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $LoomScreen extends $AbstractContainerScreen<$LoomMenu> {
        modifyExpressionValue$bfd000$supplementaries$supp$swapFlag(arg0: $ItemStack_): $ItemStack;
        handler$bfd000$supplementaries$supp$renderFlags(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $LoomMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractFurnaceScreen<T extends $AbstractFurnaceMenu> extends $AbstractContainerScreen<T> implements $RecipeUpdateListener, $IScrollableRecipeBook {
        init(): void;
        handler$bje000$immersiveui$render(guiGraphics: $GuiGraphics, i: number, j: number, f: number, ci: $CallbackInfo): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        containerTick(): void;
        mmt$onMouseScrollRecipeBook(arg0: number, arg1: number, arg2: number): $ScrollAction;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        shouldBurst: $AtomicBoolean;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        topPos: number;
        font: $Font;
        constructor(menu: T, recipeBookComponent: $AbstractFurnaceRecipeBookComponent, playerInventory: $Inventory, title: $Component_, texture: $ResourceLocation_, listProgressSprite: $ResourceLocation_, burnProgressSprite: $ResourceLocation_);
    }
    export class $SmokerScreen extends $AbstractFurnaceScreen<$SmokerMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        shouldBurst: $AtomicBoolean;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        topPos: number;
        font: $Font;
        constructor(menu: $SmokerMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentNames {
        static getInstance(): $EnchantmentNames;
        /**
         * Resets the underlying random number generator using a given seed.
         */
        initSeed(seed: number): void;
        getRandomName(fontRenderer: $Font, maxWidth: number): $FormattedText;
        static get instance(): $EnchantmentNames;
    }
    export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess<T>, $AbstractContainerScreenAccessor, $ExtraScreenData, $HandledScreenAccessor$1, $DrawsOnLeft, $AbstractContainerScreenAccessor$2, $AbstractContainerScreenAccessor$1, $IMixinAbstractContainerScreen, $AbstractContainerScreenAccessor$3, $AbstractContainerScreenAccessor$4, $HandledScreenAccessor {
        getMenu(): T;
        handler$fma000$apothic_attributes$apoth_superMouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfoReturnable<any>): void;
        getSlotColor(arg0: number): number;
        getRenderInfo(): $RenderInfo;
        clearDraggingState(): void;
        getSlotUnderMouse(): $Slot;
        renderFloatingItem(guiGraphics: $GuiGraphics, stack: $ItemStack_, x: number, y: number, text: string): void;
        getMouseInfo(): $MouseInfo;
        drawSlotHighlightBackBig(partialTick: $GuiGraphics): void;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, blitOffset: number): void;
        getExpandingProgress(): $Map<any, any>;
        handler$bjd000$immersiveui$renderFunkyItem(guiGraphics: $GuiGraphics, itemStack: $ItemStack_, i: number, j: number, string: string, ci: $CallbackInfo): void;
        handler$bjd000$immersiveui$fixHovering(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number, ci: $CallbackInfo, i: number, j: number, k: number, slot: $Slot): void;
        handler$bjd000$immersiveui$resetOldMouse(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number, ci: $CallbackInfo): void;
        handler$bjd000$immersiveui$resetOldMouse2(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number, ci: $CallbackInfo): void;
        handler$bjd000$immersiveui$renderBg(guiGraphics: $GuiGraphics, i: number, j: number, f: number, ci: $CallbackInfo): void;
        getTooltipFromContainerItem(stack: $ItemStack_): $List<$Component>;
        recalculateQuickCraftRemaining(): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getYSize(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiLeft(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiTop(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getXSize(): number;
        handler$bjm000$immersiveui$renderSize(guiGraphics: $GuiGraphics, itemstack: $ItemStack_, slot: $Slot, countString: string, ci: $CallbackInfo): void;
        handler$bjd000$immersiveui$renderSize(guiGraphics: $GuiGraphics, slot: $Slot, ci: $CallbackInfo): void;
        getRandom(): $Random;
        findSlot(mouseX: number, arg1: number): $Slot;
        renderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        isHovering(slot: $Slot, mouseX: number, arg2: number): boolean;
        drawOnLeft(arg0: $GuiGraphics, arg1: $List_<$FormattedText>, arg2: number): void;
        drawOnLeft(arg0: $GuiGraphics, arg1: $List_<$FormattedText>, arg2: number, arg3: number): void;
        __ths(): $AbstractContainerScreen<never>;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getImageHeight(): number;
        callIsHovering(slot: $Slot, mouseX: number, arg2: number): boolean;
        getFocusedSlot(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeldButtonType(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBackgroundWidth(): number;
        invokeGetSlotAt(mouseX: number, arg1: number): $Slot;
        getHoveredSlot(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getImageWidth(): number;
        callRenderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        getTouchDragStack(): $ItemStack;
        callHasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, guiLeft: number): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        getTouchIsRightClickDrag(): boolean;
        mousetweaks$invokeFindSlot(mouseX: number, arg1: number): $Slot;
        invokeCalculateOffset(): void;
        get_hoveredSlot_FancyMenu(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBackgroundHeight(): number;
        get_draggingItem_FancyMenu(): $ItemStack;
        getTouchDragSlotStart(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        /**
         * Called when the mouse is clicked over a slot or outside the gui.
         */
        mousetweaks$invokeSlotClicked(slot: $Slot, slotId: number, mouseButton: number, type: $ClickType_): void;
        /**
         * Sets the focus state of the GUI element.
         */
        mousetweaks$setSkipNextRelease(focused: boolean): void;
        /**
         * Sets the focus state of the GUI element.
         */
        mousetweaks$setIsQuickCrafting(focused: boolean): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        mousetweaks$getQuickCraftingButton(): number;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        mousetweaks$getIsQuickCrafting(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTopPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getLeftPos(): number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
        get menu(): T;
        get renderInfo(): $RenderInfo;
        get slotUnderMouse(): $Slot;
        get mouseInfo(): $MouseInfo;
        get expandingProgress(): $Map<any, any>;
        get YSize(): number;
        get guiLeft(): number;
        get guiTop(): number;
        get XSize(): number;
        get random(): $Random;
        get x(): number;
        get focusedSlot(): $Slot;
        get heldButtonType(): number;
        get backgroundWidth(): number;
        get touchDragStack(): $ItemStack;
        get touchIsRightClickDrag(): boolean;
        get _hoveredSlot_FancyMenu(): $Slot;
        get backgroundHeight(): number;
        get _draggingItem_FancyMenu(): $ItemStack;
        get touchDragSlotStart(): $Slot;
        get y(): number;
    }
    export class $CreativeInventoryListener implements $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BlastFurnaceScreen extends $AbstractFurnaceScreen<$BlastFurnaceMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        shouldBurst: $AtomicBoolean;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        topPos: number;
        font: $Font;
        constructor(menu: $BlastFurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CrafterScreen extends $AbstractContainerScreen<$CrafterMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $CrafterMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $HorseInventoryScreen extends $AbstractContainerScreen<$HorseInventoryMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $HorseInventoryMenu, inventory: $Inventory, horse: $AbstractHorse, inventoryColumns: number);
    }
    export class $BeaconScreen$BeaconConfirmButton extends $BeaconScreen$BeaconSpriteScreenButton {
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
    export class $BeaconScreen$BeaconUpgradePowerButton extends $BeaconScreen$BeaconPowerButton {
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
    export class $MinecartCommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        getCommandBlock(): $BaseCommandBlock;
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
        constructor(commandBlock: $BaseCommandBlock);
        get commandBlock(): $BaseCommandBlock;
    }
    export class $ItemCombinerScreen<T extends $ItemCombinerMenu> extends $AbstractContainerScreen<T> implements $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_, menuResource: $ResourceLocation_);
    }
    export class $LecternScreen extends $BookViewScreen implements $MenuAccess<$LecternMenu> {
        getMenu(): $LecternMenu;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(menu: $LecternMenu, playerInventory: $Inventory, title: $Component_);
        get menu(): $LecternMenu;
    }
    export class $SignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static MAGIC_TEXT_SCALE: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static MAGIC_SCALE_NUMBER: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $CraftingScreen extends $AbstractContainerScreen<$CraftingMenu> implements $RecipeUpdateListener, $IScrollableRecipeBook, $ICraftingScreen {
        getContainer(): $ICraftingContainer;
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        containerTick(): void;
        mmt$onMouseScrollRecipeBook(arg0: number, arg1: number, arg2: number): $ScrollAction;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CRAFTING_TABLE_LOCATION: $ResourceLocation;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $CraftingMenu, playerInventory: $Inventory, title: $Component_);
        get container(): $ICraftingContainer;
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $MerchantScreen extends $AbstractContainerScreen<$MerchantMenu> implements $IMerchantScreen {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        mmt$getOfferIdOffset(): number;
        postButtonClick(): void;
        mmt$syncOfferId(): void;
        mmt$setOfferId(keyCode: number): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        scrollOff: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        shopItem: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        tradeOfferButtons: $MerchantScreen$TradeOfferButton[];
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $MerchantMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconSpriteScreenButton extends $BeaconScreen$BeaconScreenButton {
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
    export class $BookEditScreen$Pos2i {
    }
    export class $JigsawBlockEditScreen extends $Screen {
        static isValidResourceLocation(location: string): boolean;
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
        constructor(jigsawEntity: $JigsawBlockEntity);
    }
    export class $BeaconScreen$BeaconScreenButton extends $AbstractButton implements $BeaconScreen$BeaconButton {
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
    export class $CreativeModeInventoryScreen$ItemPickerMenu extends $AbstractContainerMenu {
        /**
         * Updates the gui slot's ItemStacks based on scroll position.
         */
        scrollTo(pos: number): void;
        canScroll(): boolean;
        handler$kcg000$sounds$$constructor_sounds_capture(arg0: $Player, arg1: $CallbackInfo): void;
        handler$kcg000$sounds$$item_delete_sound_effect(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        handler$kcg000$sounds$$inventory_scroll_sound_effect(arg0: number, arg1: $CallbackInfo): void;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        items: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(player: $Player);
    }
    export class $BookEditScreen$LineInfo {
    }
    export class $BeaconScreen$BeaconButton {
    }
    export interface $BeaconScreen$BeaconButton {
    }
    /**
     * Values that may be interpreted as {@link $BeaconScreen$BeaconButton}.
     */
    export type $BeaconScreen$BeaconButton_ = (() => void);
    export class $BookEditScreen extends $Screen {
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
        constructor(owner: $Player, book: $ItemStack_, hand: $InteractionHand_);
    }
    export class $HangingSignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static MAGIC_BACKGROUND_SCALE: number;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $StonecutterScreen extends $AbstractContainerScreen<$StonecutterMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $StonecutterMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $MenuAccess<T extends $AbstractContainerMenu> {
    }
    export interface $MenuAccess<T extends $AbstractContainerMenu> {
        getMenu(): T;
        get menu(): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuAccess}.
     */
    export type $MenuAccess_<T> = (() => T);
    export class $AnvilScreen extends $ItemCombinerScreen<$AnvilMenu> {
        handler$kfh001$equipmentcompare$keyPressed(i: number, j: number, k: number, info: $CallbackInfoReturnable<any>): void;
        constant$foe001$apothic_enchanting$apoth_removeLevelCap(arg0: number): number;
        renderFg(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        name: $EditBox;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $AnvilMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractSignEditScreen extends $Screen {
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
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean);
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean, title: $Component_);
    }
    export class $GrindstoneScreen extends $AbstractContainerScreen<$GrindstoneMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(menu: $GrindstoneMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $PageButton extends $Button implements $IAntiquable {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        supplementaries$isAntique(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        supplementaries$setAntique(focused: boolean): void;
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
        constructor(x: number, y: number, isForward: boolean, onPress: $Button$OnPress_, playTurnSound: boolean);
    }
    export class $StructureBlockEditScreen extends $Screen {
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
        constructor(structure: $StructureBlockEntity);
    }
}
