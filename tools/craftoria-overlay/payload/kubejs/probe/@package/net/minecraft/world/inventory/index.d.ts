import { $CraftingResultSlotAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $CraftingInput, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ICraftingContainer } from "@package/dev/shadowsoffire/fastbench/api";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Set_, $Map, $OptionalInt, $List, $List_ } from "@package/java/util";
import { $AbstractContainerMenuInvoker } from "@package/dev/shadowsoffire/fastbench/mixin";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $SlotAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $AbstractFurnaceMenuAccessor } from "@package/it/hurts/octostudios/immersiveui/mixin";
import { $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $SlotMixin } from "@package/com/almostreliable/merequester/mixin/accessors";
import { $Supplier_, $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $MerchantOffer, $MerchantOffers, $Merchant } from "@package/net/minecraft/world/item/trading";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey } from "@package/net/minecraft/tags";
import { $BigSlot } from "@package/com/periut/chisel/gui";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $StonecutterMenuAccessor } from "@package/einstein/subtle_effects/mixin/common";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ISlot, $IMerchantMenu } from "@package/dev/terminalmc/moremousetweaks/util/inject";
import { $AbstractContainerMenuAccessor } from "@package/net/blay09/mods/inventoryessentials/mixin";
import { $Stream } from "@package/java/util/stream";
import { $MerchantMenuAccessor } from "@package/de/maxhenkel/tradecycling/mixin";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ItemCombinerMenuAccessor } from "@package/de/ellpeck/actuallyadditions/mixin";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessorTransientCraftingContainer } from "@package/xfacthd/framedblocks/mixin";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(stack: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(furnaceMenu: $AbstractFurnaceMenu, furnaceContainer: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $ICraftingContainer {
        getResult(): $ResultContainer;
        static isHotbarSlot(index: number): boolean;
        getCraftSlots(): $CraftingContainer;
        handler$ege001$fastbench$quickMoveStack(arg0: $Player, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        static TEXTURE_EMPTY_SLOTS: $Map<$EquipmentSlot, $ResourceLocation>;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        craftSlots: $CraftingContainer;
        static SHIELD_SLOT: number;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        stateId: number;
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        static CONTAINER_ID: number;
        constructor(playerInventory: $Inventory, active: boolean, owner: $Player);
        get result(): $ResultContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(player: $Player, merchant: $Merchant, slots: $MerchantContainer, slot: number, xPosition: number, yPosition: number);
    }
    export class $SlotRanges {
        static nameToIds(name: string): $SlotRange;
        static allNames(): $Stream<string>;
        static singleSlotNames(): $Stream<string>;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(container: $Container, owner: $LivingEntity, slot: $EquipmentSlot_, slotIndex: number, x: number, y: number, emptyIcon: $ResourceLocation_ | null);
    }
    export class $ResultSlot extends $Slot implements $CraftingResultSlotAccessor {
        getInput(): $CraftingContainer;
        container: $Container;
        craftSlots: $CraftingContainer;
        x: number;
        index: number;
        y: number;
        slot: number;
        player: $Player;
        removeCount: number;
        constructor(player: $Player, craftSlots: $CraftingContainer, container: $Container, slot: number, xPosition: number, yPosition: number);
        get input(): $CraftingContainer;
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, inventory: $Inventory, horseContainer: $Container, horse: $AbstractHorse, columns: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        handler$bjl001$immersiveui$onTake(player: $Player, stack: $ItemStack_, ci: $CallbackInfo): void;
        canMoveIntoInputSlots(stack: $ItemStack_): boolean;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        resultSlotIndex: number;
        static TEMPLATE_SLOT: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        synchronizer: $ContainerSynchronizer;
        static BASE_SLOT: number;
        containerListeners: $List<$ContainerListener>;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeKJS {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        create(containerId: number, playerInventory: $Inventory): T;
        kjs$getKey(): $ResourceKey<any>;
        requiredFeatures(): $FeatureFlagSet;
        kjs$getId(): string;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        "constructor": $MenuType$MenuSupplier<T>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(_constructor: $MenuType$MenuSupplier_<T>, requiredFeatures: $FeatureFlagSet);
        get mod(): string;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<T>>;
        get idLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MenuType}.
     */
    export type $MenuType_<T> = RegistryTypes.Menu;
    export class $MerchantContainer implements $Container {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getActiveOffer(): $MerchantOffer;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        setSelectionHint(currentRecipeIndex: number): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        updateSellItem(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getFutureXp(): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        constructor(merchant: $Merchant);
        get activeOffer(): $MerchantOffer;
        get containerSize(): number;
        set selectionHint(value: number);
        get futureXp(): number;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        getLevels(): number;
        hasPayment(): boolean;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        getSecondaryEffect(): $Holder<$MobEffect>;
        static encodeEffect(effect: $Holder_<$MobEffect> | null): number;
        static decodeEffect(effectId: number): $Holder<$MobEffect>;
        getPrimaryEffect(): $Holder<$MobEffect>;
        updateEffects(primaryEffect: ($Holder_<$MobEffect>) | undefined, secondaryEffect: ($Holder_<$MobEffect>) | undefined): void;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, container: $Container);
        constructor(containerId: number, container: $Container, beaconData: $ContainerData, access: $ContainerLevelAccess_);
        get levels(): number;
        get secondaryEffect(): $Holder<$MobEffect>;
        get primaryEffect(): $Holder<$MobEffect>;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $ICraftingContainer {
        getResult(): $ResultContainer;
        /**
         * Reset the drag fields
         */
        beginPlacingRecipe(): void;
        finishPlacingRecipe(recipe: $RecipeHolder_<$CraftingRecipe>): void;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        handler$egd000$fastbench$quickMoveStack(arg0: $Player, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        stateId: number;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        craftSlots: $CraftingContainer;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get result(): $ResultContainer;
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(container: $Container, slot: number, x: number, y: number, menu: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        getRowCount(): number;
        /**
         * Gets the inventory associated with this chest container.
         * 
         * @see #field_75155_e
         */
        getContainer(): $Container;
        static threeRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        static threeRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        static twoRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fourRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fiveRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static oneRow(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(type: $MenuType_<never>, containerId: number, playerInventory: $Inventory, container: $Container, rows: number);
        get rowCount(): number;
        get container(): $Container;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, smokerContainer: $Container, smokerData: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        getBrewingTicks(): number;
        getFuel(): number;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, brewingStandContainer: $Container, brewingStandData: $ContainerData);
        get brewingTicks(): number;
        get fuel(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(containerId: number, playerInventory: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getBook(): $ItemStack;
        getPage(): number;
        static BUTTON_PREV_PAGE: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number);
        constructor(containerId: number, lectern: $Container, lecternData: $ContainerData);
        get book(): $ItemStack;
        get page(): number;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        getWidth(): number;
        getHeight(): number;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        getItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get items(): $List<$ItemStack>;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        getResultSlot(): $Slot;
        getSelectedBannerPatternIndex(): number;
        getBannerSlot(): $Slot;
        getPatternSlot(): $Slot;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        getDyeSlot(): $Slot;
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        registerUpdateListener(listener: $Runnable_): void;
        wrapOperation$bdd000$supplementaries$supp$flagStuff(arg0: $ItemStack_, arg1: $Operation_<any>): $Item;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): $Slot;
        get selectedBannerPatternIndex(): number;
        get bannerSlot(): $Slot;
        get patternSlot(): $Slot;
        get dyeSlot(): $Slot;
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(contents: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        handler$bdn000$supplementaries$supp$preventInsertion(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(container: $Container, slot: number, x: number, y: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer {
        setActiveChest(enderChestBlockEntity: $EnderChestBlockEntity): void;
        isActiveChest(enderChest: $EnderChestBlockEntity): boolean;
        items: $NonNullList<$ItemStack>;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getSlot(slot: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        hasSlot(slot: number): boolean;
        getNumOfInputSlots(): number;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        getResultSlotIndex(): number;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        getInputSlotIndexes(): $List<number>;
        get numOfInputSlots(): number;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        get resultSlotIndex(): number;
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        get inputSlotIndexes(): $List<number>;
    }
    export class $SlotRange {
        static of(name: string, values: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        size(): number;
        slots(): $IntList;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu {
        getGoldCount(): number;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        getEnchantmentSeed(): number;
        costs: number[];
        access: $ContainerLevelAccess;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        enchantmentSeed: $DataSlot;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        random: $RandomSource;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        enchantSlots: $Container;
        containerListeners: $List<$ContainerListener>;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get goldCount(): number;
    }
    export class $ContainerLevelAccess {
        static create(level: $Level_, pos: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess {
        execute(levelPosConsumer: $BiConsumer_<$Level, $BlockPos>): void;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>, defaultValue: T): T;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        handler$bbp000$supplementaries$supp$getItem(arg0: $Player, arg1: number, arg2: $CallbackInfoReturnable<any>, arg3: $ItemStack_, arg4: $Slot, arg5: $ItemStack_): void;
        handler$bbp000$supplementaries$supp$getItem(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $Level_, arg4: $BlockPos_, arg5: $CallbackInfo, arg6: $MapItemSavedData): void;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        container: $Container;
        static ADDITIONAL_SLOT: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu implements $ItemCombinerMenuAccessor {
        getResultSlot(): number;
        /**
         * Called when the Anvil Input Slot changes, calculates the new result and puts it in the output slot.
         */
        createResult(): void;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        getSlotToQuickMoveTo(stack: $ItemStack_): number;
        createInventorySlots(inventory: $Inventory): void;
        getInputSlots(): $Container;
        access: $ContainerLevelAccess;
        resultSlotIndex: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        inputSlots: $Container;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        constructor(type: $MenuType_<never> | null, containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        getRecipeUsed(): $RecipeHolder<never>;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        constructor();
        get containerSize(): number;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, furnaceContainer: $Container, furnaceData: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> implements $AbstractFurnaceMenuAccessor {
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        isLit(): boolean;
        getLitProgress(): number;
        getBurnProgress(): number;
        getContainer(): $Container;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        get lit(): boolean;
        get litProgress(): number;
        get burnProgress(): number;
        get container(): $Container;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
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
        static CONTAINER_SIZE: number;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        constructor(size: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu implements $StonecutterMenuAccessor {
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        /**
         * Returns the index of the selected recipe.
         */
        getSelectedRecipeIndex(): number;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Returns the index of the selected recipe.
         */
        getNumRecipes(): number;
        hasInputItem(): boolean;
        registerUpdateListener(listener: $Runnable_): void;
        getInputSlot(): $Slot;
        static INPUT_SLOT: number;
        container: $Container;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        get selectedRecipeIndex(): number;
        get numRecipes(): number;
        get inputSlot(): $Slot;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu {
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        container: $Container;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $AbstractContainerMenu implements $AbstractContainerMenuInvoker, $AbstractContainerMenuAccessor {
        getSlot(slotId: number): $Slot;
        getType(): $MenuType<never>;
        /**
         * Called when the container is closed.
         */
        removed(player: $Player): void;
        setData(id: number, data: number): void;
        clicked(slotId: number, button: number, clickType: $ClickType_, player: $Player): void;
        isValidSlotIndex(slotIndex: number): boolean;
        addDataSlot(intValue: $DataSlot): $DataSlot;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastFullState(): void;
        removeSlotListener(listener: $ContainerListener): void;
        /**
         * Handle when the stack in slot `index` is shift-clicked. Normally this moves the stack between the player inventory and the other inventory(s).
         */
        quickMoveStack(player: $Player, index: number): $ItemStack;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftType(clickedButton: number): number;
        /**
         * Handles the given Button-click on the server, currently only used by enchanting. Name is for legacy.
         */
        clickMenuButton(player: $Player, id: number): boolean;
        setRemoteCarried(stack: $ItemStack_): void;
        initializeContents(stateId: number, items: $List_<$ItemStack_>, carried: $ItemStack_): void;
        /**
         * Callback for when the crafting matrix is changed.
         */
        slotsChanged(container: $Container): void;
        incrementStateId(): number;
        synchronizeSlotToRemote(slotIndex: number, stack: $ItemStack_, supplier: $Supplier_<$ItemStack>): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        suppressRemoteUpdates(): void;
        static isValidQuickcraftType(dragMode: number, player: $Player): boolean;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        resumeRemoteUpdates(): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        sendAllDataToRemote(): void;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftHeader(clickedButton: number): number;
        setRemoteSlotNoCopy(slot: number, stack: $ItemStack_): void;
        createCarriedSlotAccess(): $SlotAccess;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        synchronizeCarriedToRemote(): void;
        updateDataSlotListeners(id: number, data: number): void;
        static getQuickcraftMask(quickCraftingHeader: number, quickCraftingType: number): number;
        /**
         * Puts an ItemStack in a slot.
         */
        setItem(slotId: number, stateId: number, stack: $ItemStack_): void;
        /**
         * Determines whether supplied player can use this container
         */
        stillValid(player: $Player): boolean;
        getCarried(): $ItemStack;
        setCarried(stack: $ItemStack_): void;
        /**
         * Checks if it's possible to add the given itemstack to the given slot.
         */
        static canItemQuickReplace(slot: $Slot | null, stack: $ItemStack_, stackSizeMatters: boolean): boolean;
        /**
         * Called to determine if the current slot is valid for the stack merging (double-click) code. The stack passed in is null for the initial slot that was double-clicked.
         */
        canTakeItemForPickAll(stack: $ItemStack_, slot: $Slot): boolean;
        static getQuickCraftPlaceCount(slots: $Set_<$Slot>, type: number, stack: $ItemStack_): number;
        wrapOperation$gol000$geckolib$forceGeckolibIdSync(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        /**
         * Returns a list if `ItemStacks`, for each slot.
         */
        getItems(): $NonNullList<$ItemStack>;
        tryItemClickBehaviourOverride(player: $Player, action: $ClickAction_, slot: $Slot, clickedItem: $ItemStack_, carriedItem: $ItemStack_): boolean;
        transferState(menu: $AbstractContainerMenu): void;
        addSlotListener(listener: $ContainerListener): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastChanges(): void;
        setRemoteSlot(slot: number, stack: $ItemStack_): void;
        setSynchronizer(synchronizer: $ContainerSynchronizer): void;
        /**
         * Like the version that takes an inventory. If the given BlockEntity is not an Inventory, 0 is returned instead.
         */
        static getRedstoneSignalFromBlockEntity(blockEntity: $BlockEntity | null): number;
        static getRedstoneSignalFromContainer(container: $Container | null): number;
        /**
         * Adds an item slot to this container
         */
        addSlot(slot: $Slot): $Slot;
        getStateId(): number;
        wrapOperation$gol000$geckolib$forceGeckolibSlotChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$gol000$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$edc000$azurelib$detectSlotChangeWithAzureID(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$edc000$azurelib$syncAzureIDWithRemote(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$edc000$azurelib$syncAzureIDWithRemote(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        findSlot(container: $Container, slotIndex: number): $OptionalInt;
        /**
         * Returns `true` if the player can "drag-spilt" items into this slot. Returns `true` by default. Called to check if the slot can be added to a list of Slots to split the held ItemStack across.
         */
        canDragTo(slot: $Slot): boolean;
        balm$getMenuType(): $MenuType<never>;
        /**
         * Merges provided ItemStack with the first available one in the container/player inventor between minIndex (included) and maxIndex (excluded). Args : stack, minIndex, maxIndex, negativDirection. [!] the Container implementation do not check if the item is valid for the slot
         */
        _moveItemStackTo(stack: $ItemStack_, startIndex: number, endIndex: number, reverseDirection: boolean): boolean;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        get type(): $MenuType<never>;
        set remoteCarried(value: $ItemStack_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $Slot implements $ISlot, $SlotAccessor, $SlotMixin, $BigSlot {
        /**
         * Decrease the size of the stack in slot (first int arg) by the amount of the second int arg. Returns the new stack.
         */
        remove(amount: number): $ItemStack;
        set(stack: $ItemStack_): void;
        /**
         * Returns if this slot contains a stack.
         */
        isActive(): boolean;
        /**
         * Helper function to get the stack in the slot.
         */
        getItem(): $ItemStack;
        /**
         * Returns if this slot contains a stack.
         */
        hasItem(): boolean;
        setBigSlot(bigSlot: boolean): $Slot;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        setByPlayer(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        setByPlayer(stack: $ItemStack_): void;
        onSwapCraft(numItemsCrafted: number): void;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        onQuickCraft(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        allowModification(player: $Player): boolean;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getContainerSlot(): number;
        /**
         * Returns if this slot contains a stack.
         */
        isHighlightable(): boolean;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        isSameInventory(arg0: $Slot): boolean;
        /**
         * Called when the stack in a Slot changes
         */
        setChanged(): void;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getMaxStackSize(): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getSlotIndex(): number;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        mmt$getIndexInInv(): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        mmt$getIdInContainer(): number;
        /**
         * Returns if this slot contains a stack.
         */
        isBigSlot(): boolean;
        safeInsert(stack: $ItemStack_, increment: number): $ItemStack;
        safeInsert(stack: $ItemStack_): $ItemStack;
        onTake(stack: $Player, arg1: $ItemStack_): void;
        tryRemove(count: number, decrement: number, player: $Player): ($ItemStack) | undefined;
        safeTake(count: number, decrement: number, player: $Player): $ItemStack;
        /**
         * Check if the stack is allowed to be placed in this slot, used for armor slots as well as furnace fuel.
         */
        mayPlace(stack: $ItemStack_): boolean;
        mayPickup(player: $Player): boolean;
        /**
         * Returns if this slot contains a stack.
         */
        isFake(): boolean;
        setY(numItemsCrafted: number): void;
        setX(numItemsCrafted: number): void;
        merequester$setX(numItemsCrafted: number): void;
        merequester$setY(numItemsCrafted: number): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(container: $Container, slot: number, x: number, y: number);
        get active(): boolean;
        get item(): $ItemStack;
        get containerSlot(): number;
        get highlightable(): boolean;
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get slotIndex(): number;
        get fake(): boolean;
    }
    export class $DataSlot {
        get(): number;
        set(value: number): void;
        static shared(data: number[], idx: number): $DataSlot;
        static standalone(): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        static forContainer(data: $ContainerData, idx: number): $DataSlot;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static getExtensionInfo(): $ExtensionInfo;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static FARMERSDELIGHT_COOKING: $RecipeBookType;
        static RUBINATED_NETHER_FREEZER: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static REFURBISHED_FURNITURE_FREEZER: $RecipeBookType;
        static REFURBISHED_FURNITURE_MICROWAVE: $RecipeBookType;
        static REFURBISHED_FURNITURE_OVEN: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker" | "farmersdelight_cooking" | "refurbished_furniture_freezer" | "refurbished_furniture_microwave" | "refurbished_furniture_oven" | "rubinated_nether_freezer";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        x(): number;
        y(): number;
        slotIndex(): number;
        mayPlace(): $Predicate<$ItemStack>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuSlotDefinition$SlotDefinition}.
     */
    export type $ItemCombinerMenuSlotDefinition$SlotDefinition_ = { y?: number, x?: number, slotIndex?: number, mayPlace?: $Predicate_<$ItemStack>,  } | [y?: number, x?: number, slotIndex?: number, mayPlace?: $Predicate_<$ItemStack>, ];
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer, $AccessorTransientCraftingContainer {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        fillStackedContents(contents: $StackedContents): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getItems(): $List<$ItemStack>;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        framedblocks$getItems(): $NonNullList<$ItemStack>;
        menu: $AbstractContainerMenu;
        items: $NonNullList<$ItemStack>;
        constructor(menu: $AbstractContainerMenu, width: number, height: number);
        constructor(menu: $AbstractContainerMenu, width: number, height: number, items: $NonNullList<$ItemStack_>);
        get containerSize(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendInitialData(container: $AbstractContainerMenu, items: $NonNullList<$ItemStack_>, carriedItem: $ItemStack_, initialData: number[]): void;
        sendDataChange(container: $AbstractContainerMenu, id: number, value: number): void;
        sendSlotChange(container: $AbstractContainerMenu, slot: number, itemStack: $ItemStack_): void;
        sendCarriedChange(containerMenu: $AbstractContainerMenu, stack: $ItemStack_): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu implements $IMerchantMenu, $MerchantMenuAccessor {
        setXp(level: number): void;
        tryMoveItems(level: number): void;
        canRestock(): boolean;
        getOffers(): $MerchantOffers;
        showProgressBar(): boolean;
        setSelectionHint(level: number): void;
        setCanRestock(canRestock: boolean): void;
        mmt$getOffer(arg0: number): $MerchantOffer;
        getTraderLevel(): number;
        getFutureTraderXp(): number;
        mmt$getResultSlot(): number;
        getTraderXp(): number;
        setMerchantLevel(level: number): void;
        setShowProgressBar(canRestock: boolean): void;
        /**
         * `ClientPacketListener` uses this to set offers for the client side MerchantContainer.
         */
        setOffers(offers: $MerchantOffers): void;
        getTrader(): $Merchant;
        getTradeContainer(): $MerchantContainer;
        stateId: number;
        trader: $Merchant;
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
        tradeContainer: $MerchantContainer;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, trader: $Merchant);
        set xp(value: number);
        set selectionHint(value: number);
        get traderLevel(): number;
        get futureTraderXp(): number;
        get traderXp(): number;
        set merchantLevel(value: number);
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(inputItem: $ItemStack_, additionalItem: $ItemStack_): $ItemStack;
        handler$ibj001$deeperdarker$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        static INPUT_SLOT: number;
        static ADDITIONAL_SLOT: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getRecipeUsed(): $RecipeHolder<never>;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        getSize(): number;
        getGridHeight(): number;
        recipeMatches(recipe: $RecipeHolder_<R>): boolean;
        getRecipeBookType(): $RecipeBookType;
        getResultSlotIndex(): number;
        getGridWidth(): number;
        handlePlacement(placeAll: boolean, recipe: $RecipeHolder_<never>, player: $ServerPlayer): void;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        /**
         * Reset the drag fields
         */
        clearCraftingContent(): void;
        shouldMoveToInventory(slotIndex: number): boolean;
        fillCraftSlotsStackedContents(itemHelper: $StackedContents): void;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(menuType: $MenuType_<never>, containerId: number);
        get size(): number;
        get gridHeight(): number;
        get recipeBookType(): $RecipeBookType;
        get resultSlotIndex(): number;
        get gridWidth(): number;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener {
        getContainer(): $Container;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        isPowered(): boolean;
        isSlotDisabled(slot: number): boolean;
        setSlotState(slot: number, enabled: boolean): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
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
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $CraftingContainer, containerData: $ContainerData);
        get container(): $Container;
        get powered(): boolean;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(player: $Player, container: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, blastFurnaceContainer: $Container, blastFurnaceData: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        setMaximumCost(arg0: number): void;
        setItemName(itemName: string): boolean;
        handler$bjg000$immersiveui$onTake(player: $Player, stack: $ItemStack_, ci: $CallbackInfo): void;
        static calculateIncreasedRepairCost(oldRepairCost: number): number;
        redirect$fnj000$apothic_enchanting$apoth_chargeOptimalLevels(arg0: $Player, arg1: number): void;
        modifyExpressionValue$jka000$ae2$setAnnihilationPlaneThreadLocal(arg0: boolean): boolean;
        handler$iac000$actuallyadditions$pickupMixin(arg0: $Player, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Gets the maximum xp cost
         */
        getCost(): number;
        handler$dma000$inventoryprofilesnext$onTakeOutputPre(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        handler$dma000$inventoryprofilesnext$onTakeOutputPost(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        constant$fnj000$apothic_enchanting$apoth_removeLevelCap(oldRepairCost: number): number;
        repairItemCountCost: number;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        itemName: string;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        static INPUT_SLOT: number;
        resultSlotIndex: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        synchronizer: $ContainerSynchronizer;
        containerListeners: $List<$ContainerListener>;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        set maximumCost(value: number);
        get cost(): number;
    }
    export interface $MenuType<T> extends RegistryMarked<RegistryTypes.MenuTag, RegistryTypes.Menu> {}
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        build(): $ItemCombinerMenuSlotDefinition;
        withResultSlot(slotIndex: number, x: number, y: number): $ItemCombinerMenuSlotDefinition$Builder;
        withSlot(slotIndex: number, x: number, y: number, mayPlace: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        constructor();
    }
}
