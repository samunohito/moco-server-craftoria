import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $WidgetTooltipHolder, $EditBox, $StateSwitchingButton, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $ClientRecipeBook, $RecipeBookCategories, $RecipeBookCategories_ } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $IRecipeBookWidget, $IRecipeBookResults } from "@package/dev/terminalmc/moremousetweaks/util/inject";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ScrollAction } from "@package/dev/terminalmc/moremousetweaks/inventory/util";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics, $ComponentPath } from "@package/net/minecraft/client/gui";
import { $PlaceRecipe } from "@package/net/minecraft/recipebook";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $RecipeBook } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/recipebook" {
    export class $OverlayRecipeComponent$OverlayRecipeButton extends $AbstractWidget implements $PlaceRecipe<$Ingredient> {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        addItemToSlot(item: $Ingredient_, slot: number, maxAmount: number, x: number, y: number): void;
        placeRecipe(width: number, height: number, outputSlot: number, recipe: $RecipeHolder_<never>, ingredients: $Iterator<$Ingredient_>, maxAmount: number): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        recipe: $RecipeHolder<never>;
        x: number;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        height: number;
    }
    export class $RecipeBookComponent implements $PlaceRecipe<$Ingredient>, $Renderable, $GuiEventListener, $NarratableEntry, $RecipeShownListener, $IRecipeBookWidget {
        init(width: number, height: number, minecraft: $Minecraft, widthTooNarrow: boolean, menu: $RecipeBookMenu<never, never>): void;
        handler$cfl000$emi$toggleOpen(info: $CallbackInfo): void;
        tick(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        renderTooltip(guiGraphics: $GuiGraphics, x: number, y: number, mouseX: number, mouseY: number): void;
        hasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, x: number, y: number, width: number): boolean;
        handler$djn001$moremousetweaks$mouseClicked(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        updateScreenPosition(width: number, imageWidth: number): number;
        mmt$scrollRecipeBook(arg0: number, arg1: number, arg2: number): $ScrollAction;
        handler$djn000$moremousetweaks$keyPressed(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isVisible(): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        slotClicked(slot: $Slot | null): void;
        recipesUpdated(): void;
        renderGhostRecipe(guiGraphics: $GuiGraphics, leftPos: number, topPos: number, arg3: boolean, partialTick: number): void;
        toggleVisibility(): void;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
        initVisuals(): void;
        addItemToSlot(item: $Ingredient_, slot: number, maxAmount: number, x: number, y: number): void;
        setupGhostRecipe(recipe: $RecipeHolder_<never>, slots: $List_<$Slot>): void;
        placeRecipe(width: number, height: number, outputSlot: number, recipe: $RecipeHolder_<never>, ingredients: $Iterator<$Ingredient_>, maxAmount: number): void;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
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
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isActive(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        stackedContents: $StackedContents;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
        get visible(): boolean;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get active(): boolean;
        get tabOrderGroup(): number;
    }
    export class $SmeltingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        stackedContents: $StackedContents;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $AbstractFurnaceRecipeBookComponent extends $RecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        stackedContents: $StackedContents;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $SmokingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        stackedContents: $StackedContents;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $RecipeBookTabButton extends $StateSwitchingButton {
        getCategory(): $RecipeBookCategories;
        startAnimation(minecraft: $Minecraft): void;
        updateVisibility(recipeBook: $ClientRecipeBook): boolean;
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
        constructor(category: $RecipeBookCategories_);
        get category(): $RecipeBookCategories;
    }
    export class $GhostRecipe {
        size(): number;
        get(index: number): $GhostRecipe$GhostIngredient;
        clear(): void;
        render(guiGraphics: $GuiGraphics, minecraft: $Minecraft, leftPos: number, topPos: number, offset: boolean, partialTick: number): void;
        addIngredient(ingredient: $Ingredient_, x: number, y: number): void;
        getRecipe(): $RecipeHolder<never>;
        setRecipe(recipe: $RecipeHolder_<never>): void;
        constructor();
    }
    export class $OverlayRecipeComponent$OverlayRecipeButton$Pos {
    }
    export class $OverlayRecipeComponent$OverlaySmeltingRecipeButton extends $OverlayRecipeComponent$OverlayRecipeButton {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        recipe: $RecipeHolder<never>;
        x: number;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        height: number;
    }
    export class $RecipeCollection {
        canCraft(handler: $StackedContents, width: number, height: number, book: $RecipeBook): void;
        /**
         * Checks if recipebook is not empty
         */
        hasFitting(): boolean;
        getRecipes(): $List<$RecipeHolder<never>>;
        getRecipes(craftable: boolean): $List<$RecipeHolder<never>>;
        registryAccess(): $RegistryAccess;
        /**
         * Checks if recipebook is not empty
         */
        hasCraftable(): boolean;
        /**
         * Checks if recipebook is not empty
         */
        hasKnownRecipes(): boolean;
        isCraftable(recipe: $RecipeHolder_<never>): boolean;
        updateKnownRecipes(book: $RecipeBook): void;
        getDisplayRecipes(craftable: boolean): $List<$RecipeHolder<never>>;
        /**
         * Checks if recipebook is not empty
         */
        hasSingleResultItem(): boolean;
        constructor(registryAccess: $RegistryAccess, recipes: $List_<$RecipeHolder_<never>>);
    }
    export class $RecipeUpdateListener {
    }
    export interface $RecipeUpdateListener {
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $GhostRecipe$GhostIngredient {
        getItem(): $ItemStack;
        getX(): number;
        getY(): number;
        constructor(ingredient: $GhostRecipe, x: $Ingredient_, y: number, arg3: number);
        get item(): $ItemStack;
        get x(): number;
        get y(): number;
    }
    export class $RecipeBookPage implements $IRecipeBookResults {
        init(minecraft: $Minecraft, x: number, y: number): void;
        getLastClickedRecipeCollection(): $RecipeCollection;
        getMinecraft(): $Minecraft;
        getRecipeBook(): $RecipeBook;
        render(guiGraphics: $GuiGraphics, x: number, y: number, mouseX: number, mouseY: number, partialTick: number): void;
        addListener(listener: $RecipeBookComponent): void;
        setInvisible(): void;
        renderTooltip(guiGraphics: $GuiGraphics, x: number, y: number): void;
        mouseClicked(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number, arg5: number, arg6: number): boolean;
        mmt$refreshResultButtons(): void;
        getLastClickedRecipe(): $RecipeHolder<never>;
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
        updateCollections(recipeCollections: $List_<$RecipeCollection>, resetPageNumber: boolean): void;
        mmt$getPageCount(): number;
        mmt$setCurrentPage(arg0: number): void;
        mmt$getCurrentPage(): number;
        handler$djp000$moremousetweaks$mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfoReturnable<any>, arg8: $Iterator<any>, arg9: $RecipeButton): void;
        static ITEMS_PER_PAGE: number;
        constructor();
        get lastClickedRecipeCollection(): $RecipeCollection;
        get minecraft(): $Minecraft;
        get recipeBook(): $RecipeBook;
        get lastClickedRecipe(): $RecipeHolder<never>;
    }
    export class $BlastingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        stackedContents: $StackedContents;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $OverlayRecipeComponent implements $Renderable, $GuiEventListener {
        init(minecraft: $Minecraft, collection: $RecipeCollection, x: number, y: number, arg4: number, arg5: number, arg6: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setVisible(focused: boolean): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isVisible(): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
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
        getRecipeCollection(): $RecipeCollection;
        getLastRecipeClicked(): $RecipeHolder<never>;
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
        static BUTTON_SIZE: number;
        constructor();
        get recipeCollection(): $RecipeCollection;
        get lastRecipeClicked(): $RecipeHolder<never>;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $RecipeShownListener {
    }
    export interface $RecipeShownListener {
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeShownListener}.
     */
    export type $RecipeShownListener_ = ((arg0: $List<$RecipeHolder<never>>) => void);
    export class $RecipeButton extends $AbstractWidget {
        init(collection: $RecipeCollection, recipeBookPage: $RecipeBookPage): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        getRecipe(): $RecipeHolder<never>;
        getCollection(): $RecipeCollection;
        getTooltipText(): $List<$Component>;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isOnlyOption(): boolean;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static TICKS_TO_SWAP: number;
        height: number;
        constructor();
        get recipe(): $RecipeHolder<never>;
        get collection(): $RecipeCollection;
        get tooltipText(): $List<$Component>;
        get onlyOption(): boolean;
    }
}
