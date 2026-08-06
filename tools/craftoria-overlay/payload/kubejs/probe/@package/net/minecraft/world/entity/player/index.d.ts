import { $EntityDynamicLightSource } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ListTag_, $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $EquipmentSlot_, $Pose_, $EntityType, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState, $HumanoidArm_, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $PlayerAccessor as $PlayerAccessor$1 } from "@package/io/redspace/ironslib/mixin";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AnimationStack, $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
import { $SignatureValidator_, $Unit, $SignatureValidator, $OptionEnum } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $PlayerDamageShieldInvoker } from "@package/com/telepathicgrunt/the_bumblezone/mixin/items";
import { $CapeHolder } from "@package/dev/tr7zw/waveycapes/versionless";
import { $InteractionResult, $MenuProvider, $InteractionHand, $InteractionHand_, $Nameable, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $SpellCaster } from "@package/cn/leolezury/eternalstarlight/common/entity/interfaces";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $IPlayerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $NotificationToastData_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $PlayerEnderChestContainer, $AbstractContainerMenu, $ClickAction_, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $InventoryAccessor } from "@package/com/hidoni/transmog/mixin";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $Item_, $Item, $ItemCooldowns, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $ThrowingComponent, $Component } from "@package/net/minecraft/network/chat";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $AnimationApplier } from "@package/dev/kosmx/playerAnim/impl/animation";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $PlayerData } from "@package/dev/tr7zw/notenoughanimations/access";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $MinecraftPlayer } from "@package/dev/tr7zw/waveycapes/versionless/nms";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $IAnimatedPlayer } from "@package/dev/kosmx/playerAnim/impl";
import { $CameraOperator, $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $InventoryKJS, $PlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Stat_ } from "@package/net/minecraft/stats";
import { $TeslaReceiverHolder } from "@package/net/swedz/extended_industrialization/machines/component/tesla/network";
import { $AttackHand, $EntityPlayer_BetterCombat } from "@package/net/bettercombat/api";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $StickyNoteWatcher } from "@package/net/swedz/little_big_redstone/entity/stickynote";
import { $UUID_, $Set_, $Stack, $Map, $OptionalInt, $UUID, $List, $Collection_, $List_, $Collection, $Optional } from "@package/java/util";
import { $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $WardenSpawnTracker } from "@package/net/minecraft/world/entity/monster/warden";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $AccessorPlayer } from "@package/com/illusivesoulworks/comforts/mixin";
import { $DataHolder } from "@package/dev/tr7zw/notenoughanimations/versionless/animations";
import { $Supplier_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $PlayerBridge } from "@package/dev/tonimatas/mekanismcurios/bridge";
import { $CuriosSlots, $CuriosSlots_ } from "@package/dev/tonimatas/mekanismcurios/util";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $IntList, $Int2IntMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $GameType_, $BaseCommandBlock, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Vector3 } from "@package/dev/tr7zw/waveycapes/versionless/util";
import { $Camera } from "@package/io/github/mortuusars/exposure/world/camera";
import { $PrivateKey, $PublicKey } from "@package/java/security";
import { $PlayerAccessor } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $PlayerEntityAccessor } from "@package/net/bettercombat/mixin/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $PlayerEntityAccessor as $PlayerEntityAccessor$1 } from "@package/de/dafuqs/spectrum/api/entity";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $BasicSimulation } from "@package/dev/tr7zw/waveycapes/versionless/sim";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $FoodProperties_, $FoodData } from "@package/net/minecraft/world/food";
import { $TemporaryPlayerData } from "@package/com/telepathicgrunt/the_bumblezone/entities";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $MicrochipWatcher } from "@package/net/swedz/little_big_redstone/block/microchip";
import { $ISupportTransmog } from "@package/io/redspace/ironslib/game/client";
import { $ETFPlayerEntity } from "@package/traben/entity_texture_features/features/player";
import { $SignBlockEntity, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $PlayerAttackProperties } from "@package/net/bettercombat/logic";

declare module "@package/net/minecraft/world/entity/player" {
    export class $ProfileKeyPair extends $Record {
        publicKey(): $ProfilePublicKey;
        privateKey(): $PrivateKey;
        dueRefresh(): boolean;
        refreshedAfter(): $Instant;
        static CODEC: $Codec<$ProfileKeyPair>;
        constructor(arg0: $PrivateKey, arg1: $ProfilePublicKey_, arg2: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $ProfileKeyPair}.
     */
    export type $ProfileKeyPair_ = { privateKey?: $PrivateKey, publicKey?: $ProfilePublicKey_, refreshedAfter?: $Instant,  } | [privateKey?: $PrivateKey, publicKey?: $ProfilePublicKey_, refreshedAfter?: $Instant, ];
    export class $ProfilePublicKey$Data extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        key(): $PublicKey;
        keySignature(): number[];
        hasExpired(gracePeriod: $Duration_): boolean;
        hasExpired(): boolean;
        expiresAt(): $Instant;
        static CODEC: $Codec<$ProfilePublicKey$Data>;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $Instant, arg1: $PublicKey, arg2: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey$Data}.
     */
    export type $ProfilePublicKey$Data_ = { key?: $PublicKey, expiresAt?: $Instant, keySignature?: number[],  } | [key?: $PublicKey, expiresAt?: $Instant, keySignature?: number[], ];
    export class $Abilities {
        getFlyingSpeed(): number;
        setFlyingSpeed(flyingSpeed: number): void;
        addSaveData(compound: $CompoundTag_): void;
        loadSaveData(compound: $CompoundTag_): void;
        getWalkingSpeed(): number;
        setWalkingSpeed(flyingSpeed: number): void;
        invulnerable: boolean;
        /**
         * @deprecated
         */
        mayfly: boolean;
        instabuild: boolean;
        mayBuild: boolean;
        flying: boolean;
        constructor();
    }
    export class $Inventory implements $Container, $Nameable, $InventoryAccessor {
        getName(): $Component;
        /**
         * Reads from the given tag list and fills the slots in the inventory with the correct items.
         */
        load(listTag: $ListTag_): void;
        isEmpty(): boolean;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(slot: number, stack: $ItemStack_): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(stack: $ItemStack_): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        contains(stack: $ItemStack_): boolean;
        contains(predicate: $Predicate_<$ItemStack>): boolean;
        contains(tag: $TagKey_<$Item>): boolean;
        /**
         * Writes the inventory out as a list of compound tags. This is where the slot indices are used (+100 for armor, +80 for crafting).
         */
        save(listTag: $ListTag_): $ListTag;
        /**
         * Copy the ItemStack contents from another InventoryPlayer instance
         */
        replaceWith(playerInventory: $Inventory): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getItem(slot: number): $ItemStack;
        handler$hep000$bankstorage$onInsertStack(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$jhm000$moonlight$ml$fireDropEvent(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        hasAnyMatching(predicate: $Predicate_<any>): boolean;
        /**
         * Change the selected item in the hotbar after a mouse scroll. Select the slot to the left if `direction` is positive, or to the right if negative.
         */
        swapPaint(direction: number): void;
        pickSlot(index: number): void;
        handler$dmg000$inventoryprofilesnext$setPickedItemPre(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        handler$dmg000$inventoryprofilesnext$setPickedItemPost(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        handler$dmg000$inventoryprofilesnext$getEmptySlot(arg0: $CallbackInfoReturnable<any>): void;
        handler$kci000$sounds$$hotbar_pick_sound_effect(arg0: number, arg1: $CallbackInfo): void;
        handler$kci000$sounds$$hotbar_scroll_sound_effect(arg0: number, arg1: $CallbackInfo): void;
        handler$dmg000$inventoryprofilesnext$addStackPre(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$dmg000$inventoryprofilesnext$addStackPost(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$jhm000$moonlight$ml$restoreNotDropped(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        /**
         * Drop all armor and main inventory items.
         */
        tick(): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getArmor(slot: number): $ItemStack;
        fillStackedContents(stackedContent: $StackedContents): void;
        placeItemBackInInventory(stack: $ItemStack_): void;
        placeItemBackInInventory(stack: $ItemStack_, sendPacket: boolean): void;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        addResource(stack: $ItemStack_): number;
        addResource(slot: number, stack: $ItemStack_): number;
        /**
         * Returns the item stack currently held by the player.
         */
        getSelected(): $ItemStack;
        removeItem(stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Drop all armor and main inventory items.
         */
        dropAll(): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        setPickedItem(stack: $ItemStack_): void;
        static isHotbarSlot(index: number): boolean;
        getDestroySpeed(state: $BlockState_): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingItem(stack: $ItemStack_): number;
        removeFromSelected(removeStack: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getFreeSlot(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        static getSelectionSize(): number;
        clearOrCountMatchingItems(stackPredicate: $Predicate_<$ItemStack>, maxCount: number, inventory: $Container): number;
        hasRemainingSpaceForItem(destination: $ItemStack_, origin: $ItemStack_): boolean;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getSlotWithRemainingSpace(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSuitableHotbarSlot(): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingUnusedItem(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Drop all armor and main inventory items.
         */
        clearContent(): void;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
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
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getMaxStackSize(stack: $ItemStack_): number;
        getDisplayName(): $Component;
        getCustomName(): $Component;
        hasCustomName(): boolean;
        self(): $Container;
        /**
         * Drop all armor and main inventory items.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
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
        setStackInSlot(index: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
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
        setTimesChanged(index: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getTimesChanged(): number;
        static NOT_FOUND_INDEX: number;
        armor: $NonNullList<$ItemStack>;
        static INVENTORY_SIZE: number;
        static POP_TIME_DURATION: number;
        static SLOT_OFFHAND: number;
        static ALL_ARMOR_SLOTS: number[];
        items: $NonNullList<$ItemStack>;
        offhand: $NonNullList<$ItemStack>;
        selected: number;
        static HELMET_SLOT_ONLY: number[];
        player: $Player;
        constructor(player: $Player);
        get name(): $Component;
        set pickedItem(value: $ItemStack_);
        get freeSlot(): number;
        static get selectionSize(): number;
        get suitableHotbarSlot(): number;
        get containerSize(): number;
        get displayName(): $Component;
        get customName(): $Component;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $PlayerModelPart extends $Enum<$PlayerModelPart> {
        getName(): $Component;
        static values(): $PlayerModelPart[];
        static valueOf(arg0: string): $PlayerModelPart;
        getId(): string;
        getMask(): number;
        getBit(): number;
        static RIGHT_PANTS_LEG: $PlayerModelPart;
        static LEFT_PANTS_LEG: $PlayerModelPart;
        static JACKET: $PlayerModelPart;
        static RIGHT_SLEEVE: $PlayerModelPart;
        static HAT: $PlayerModelPart;
        static LEFT_SLEEVE: $PlayerModelPart;
        static CAPE: $PlayerModelPart;
        get id(): string;
        get mask(): number;
        get bit(): number;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelPart}.
     */
    export type $PlayerModelPart_ = "cape" | "jacket" | "left_sleeve" | "right_sleeve" | "left_pants_leg" | "right_pants_leg" | "hat";
    export class $StackedContents$RecipePicker {
    }
    export class $ProfilePublicKey extends $Record {
        data(): $ProfilePublicKey$Data;
        createSignatureValidator(): $SignatureValidator;
        static createValidated(signatureValidator: $SignatureValidator_, profileId: $UUID_, data: $ProfilePublicKey$Data_): $ProfilePublicKey;
        static EXPIRED_PROFILE_PUBLIC_KEY: $Component;
        static EXPIRY_GRACE_PERIOD: $Duration;
        static TRUSTED_CODEC: $Codec<$ProfilePublicKey>;
        constructor(arg0: $ProfilePublicKey$Data_);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey}.
     */
    export type $ProfilePublicKey_ = { data?: $ProfilePublicKey$Data_,  } | [data?: $ProfilePublicKey$Data_, ];
    export class $Player$BedSleepingProblem extends $Enum<$Player$BedSleepingProblem> {
        static values(): $Player$BedSleepingProblem[];
        static valueOf(arg0: string): $Player$BedSleepingProblem;
        getMessage(): $Component;
        static OBSTRUCTED: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_HERE: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_NOW: $Player$BedSleepingProblem;
        static NOT_SAFE: $Player$BedSleepingProblem;
        static OTHER_PROBLEM: $Player$BedSleepingProblem;
        static TOO_FAR_AWAY: $Player$BedSleepingProblem;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Player$BedSleepingProblem}.
     */
    export type $Player$BedSleepingProblem_ = "not_possible_here" | "not_possible_now" | "too_far_away" | "obstructed" | "other_problem" | "not_safe";
    export class $ChatVisiblity extends $Enum<$ChatVisiblity> implements $OptionEnum {
        static values(): $ChatVisiblity[];
        static valueOf(arg0: string): $ChatVisiblity;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ChatVisiblity;
        getCaption(): $Component;
        static SYSTEM: $ChatVisiblity;
        static HIDDEN: $ChatVisiblity;
        static FULL: $ChatVisiblity;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatVisiblity}.
     */
    export type $ChatVisiblity_ = "full" | "system" | "hidden";
    export class $StackedContents {
        clear(): void;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null, amount: number): boolean;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null): boolean;
        accountStack(stack: $ItemStack_): void;
        accountStack(stack: $ItemStack_, amount: number): void;
        accountSimpleStack(stack: $ItemStack_): void;
        static getStackingIndex(stack: $ItemStack_): number;
        static fromStackingIndex(stackingIndex: number): $ItemStack;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, stackingIndexList: $IntList | null): number;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, amount: number, stackingIndexList: $IntList | null): number;
        contents: $Int2IntMap;
        constructor();
    }
    export class $ProfilePublicKey$ValidationException extends $ThrowingComponent {
        constructor(arg0: $Component_);
    }
    export class $Player extends $LivingEntity implements $IPlayerExtension, $PlayerAttackProperties, $EntityPlayer_BetterCombat, $CameraHolder, $CameraOperator, $PlayerAccessor, $IQuiverEntity, $TemporaryPlayerData, $PlayerDamageShieldInvoker, $PlayerAccessor$1, $ISupportTransmog, $Trackable, $PlayerData, $ETFPlayerEntity, $IAnimatedPlayer, $SpellCaster, $PlayerBridge, $PlayerEntityAccessor, $PlayerEntityAccessor$1, $EntityDynamicLightSource, $AccessorPlayer, $CapeHolder, $MicrochipWatcher, $StickyNoteWatcher, $TeslaReceiverHolder, $PlayerKJS {
        getData(holder: $DataHolder<any>, builder: $Supplier_<any>): $Object;
        /**
         * Drops an item into the world.
         */
        drop(itemStack: $ItemStack_, includeThrowerName: boolean): $ItemEntity;
        /**
         * Creates and drops the provided item. Depending on the dropAround, it will drop the item around the player, instead of dropping the item from where the player is pointing at. Likewise, if includeThrowerName is true, the dropped item entity will have the thrower set as the player.
         */
        drop(droppedItem: $ItemStack_, dropAround: boolean, includeThrowerName: boolean): $ItemEntity;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        modifyExpressionValue$eli000$additionalentityattributes$additionalEntityAttributes$applyCriticalBonusDamage(adjustTicks: number): number;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isIgnoringFallDamageFromCurrentImpulse(): boolean;
        handler$hjp000$spectrum$updateSwimming(arg0: $CallbackInfo): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        bumblezonePlayerTickOffGroundInHeavyAir(): number;
        localvar$hok000$fruitsdelight$canEat(canAlwaysEat: boolean): boolean;
        handler$gfp000$bettercombat$post_Tick(ci: $CallbackInfo): void;
        handler$cjh001$notenoughanimations$tick(info: $CallbackInfo): void;
        localvar$hjp000$spectrum$addExperience(currentAir: number): number;
        setIgnoreFallDamageFromCurrentImpulse(ignoreFallDamageFromCurrentImpulse: boolean): void;
        modifyExpressionValue$hgn004$reliquified_ars_nouveau$elytraOverride(canAlwaysEat: boolean): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        respawn(): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        attack(target: $Entity): void;
        /**
         * Checks, whether the player is in Creative mode.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isCreative(): boolean;
        addItem(stack: $ItemStack_): boolean;
        getPrefixes(): $Collection<$MutableComponent>;
        setLastDeathLocation(lastDeathLocation: ($GlobalPos_) | undefined): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        tryToStartFallFlying(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpNeededForNextLevel(): number;
        getWardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        /**
         * Returns the InventoryEnderChest of this player.
         */
        getEnderChestInventory(): $PlayerEnderChestContainer;
        onEnchantmentPerformed(enchantedItem: $ItemStack_, levelCost: number): void;
        hasCorrectToolForDrops(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasCorrectToolForDrops(state: $BlockState_): boolean;
        /**
         * Add experience levels to this player.
         */
        giveExperiencePoints(levels: number): void;
        setEntityOnShoulder(entityCompound: $CompoundTag_): boolean;
        getLastDeathLocation(): ($GlobalPos) | undefined;
        blockActionRestricted(level: $Level_, pos: $BlockPos_, gameMode: $GameType_): boolean;
        entityInteractionRange(): number;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSecondaryUseActive(): boolean;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityLeft(): $CompoundTag;
        openMinecartCommandBlock(commandEntity: $BaseCommandBlock): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityRight(): $CompoundTag;
        startAutoSpinAttack(ticks: number, damage: number, itemStack: $ItemStack_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSleepingLongEnough(): boolean;
        triggerRecipeCrafted(recipe: $RecipeHolder_<never>, items: $List_<$ItemStack_>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetCurrentImpulseContext(): void;
        /**
         * Add experience levels to this player.
         */
        giveExperienceLevels(levels: number): void;
        setReducedDebugInfo(ignoreFallDamageFromCurrentImpulse: boolean): void;
        /**
         * Add experience levels to this player.
         */
        setItemSwapAnimationTimer(levels: number): void;
        getWatchedMicrochip(): $BlockPos;
        getPlayerExecutingExposure(): $Optional<any>;
        /**
         * Returns a String to use as this entity's name in the scoreboard/entity selector systems
         */
        etf$getUuidAsString(): string;
        /**
         * Returns a String to use as this entity's name in the scoreboard/entity selector systems
         */
        getMainHandIdleAnimation(): string;
        getWatchedStickyNote(): number;
        getExposureAuthorEntity(): $Entity;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeActiveExposureCamera(): void;
        canInteractWithEntity(entity: $Entity, distance: number): boolean;
        canInteractWithEntity(boundingBox: $AABB_, distance: number): boolean;
        getExposureCameraOperator(): $Optional<any>;
        supplementaries$getQuiver(): $ItemStack;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getLastAnimationSwapTick(): number;
        canInteractWithBlock(pos: $BlockPos_, distance: number): boolean;
        setRotateBodyToHead(ignoreFallDamageFromCurrentImpulse: boolean): void;
        /**
         * Returns a String to use as this entity's name in the scoreboard/entity selector systems
         */
        getOffHandIdleAnimation(): string;
        /**
         * Add experience levels to this player.
         */
        spectrum$setSleepTimer(levels: number): void;
        setActiveExposureCamera(camera: $Camera): void;
        setWatchedMicrochip(pos: $BlockPos_): void;
        setWatchedStickyNote(arg0: number): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        canUseGameMasterBlocks(): boolean;
        supplementaries$setQuiver(stack: $ItemStack_): void;
        /**
         * Add experience levels to this player.
         */
        setLastAnimationSwapTick(levels: number): void;
        getCraftingGrid(): $InventoryKJS;
        blockInteractionRange(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getItemSwapAnimationTimer(): number;
        openMenu(menu: $MenuProvider | null): $OptionalInt;
        /**
         * Add a stat once
         */
        resetStat(stat: $Stat_<never>): void;
        interactOn(entityToInteractOn: $Entity, hand: $InteractionHand_): $InteractionResult;
        canEat(canAlwaysEat: boolean): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isHurt(): boolean;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        crit(target: $Entity): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        magicCrit(target: $Entity): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isScoping(): boolean;
        setMainArm(hand: $HumanoidArm_): void;
        isUpdated(currentAir: number): number;
        /**
         * Add experience levels to this player.
         */
        setUpdated(levels: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        setDirty(): void;
        getWCUUID(): $UUID;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getScore(): number;
        /**
         * Add experience levels to this player.
         */
        setScore(levels: number): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayBuild(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isAffectedByFluids(): boolean;
        playStepSound(pos: $BlockPos_, state: $BlockState_): void;
        wrapOperation$hjp000$spectrum$forceSwimmingState(arg0: $Player, arg1: $Pose_, arg2: $Operation_<any>): void;
        modifyReturnValue$hok000$fruitsdelight$getFoodData(arg0: $FoodData): $FoodData;
        handler$hde000$immersive_aircraft$getDestroySpeed(cir: $CallbackInfoReturnable<any>): void;
        handler$gfp000$bettercombat$getEquippedStack_Pre(slot: $EquipmentSlot_, cir: $CallbackInfoReturnable<any>): void;
        getCooldowns(): $ItemCooldowns;
        getAbilities(): $Abilities;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isLocalPlayer(): boolean;
        /**
         * Returns the GameProfile for this player
         */
        getGameProfile(): $GameProfile;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isReducedDebugInfo(): boolean;
        /**
         * Returns whether this player can modify the block at a certain location with the given stack.
         * 
         * The position being queried is `pos.offset(facing.getOpposite())`.
         * 
         * @return Whether this player may modify the queried location in the current world
         * @see ItemStack#canPlaceOn(Block)
         * @see ItemStack#canEditBlocks()
         * @see PlayerCapabilities#allowEdit
         */
        mayUseItemAt(pos: $BlockPos_, facing: $Direction_, stack: $ItemStack_): boolean;
        /**
         * Add experience levels to this player.
         */
        setComboCount(levels: number): void;
        /**
         * @deprecated
         */
        getDestroySpeed(state: $BlockState_): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getComboCount(): number;
        getCurrentAttack(): $AttackHand;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetAttackStrengthTicker(): void;
        displayClientMessage(chatComponent: $Component_, actionBar: boolean): void;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        getAttackStrengthScale(adjustTicks: number): number;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isTextFilteringEnabled(): boolean;
        getActiveExposureCamera(): $Camera;
        causeFoodExhaustion(yaw: number): void;
        awardStat(statKey: $ResourceLocation_): void;
        /**
         * Add a stat once
         */
        awardStat(stat: $Stat_<never>): void;
        /**
         * Adds a value to a statistic field.
         */
        awardStat(stat: $Stat_<never>, increment: number): void;
        awardStat(stat: $ResourceLocation_, increment: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getLuck(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentItemAttackStrengthDelay(): number;
        etf$getInventory(): $Inventory;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isRotateBodyToHead(): boolean;
        setLastRotations(lastRotations: number[]): void;
        setSideSword(stack: $ItemStack_): void;
        mci$setSlot(arg0: $CuriosSlots_): void;
        getPoseOverwrite(): $Pose;
        setPoseOverwrite(pose: $Pose_): void;
        getLastHeldItems(): $ItemStack[];
        getSimulation(): $BasicSimulation;
        setSimulation(simulation: $BasicSimulation): void;
        getTeslaReceivers(): $Collection<any>;
        mci$getSlot(): $CuriosSlots;
        getLastRotations(): number[];
        etf$isTeammate(other: $Player): boolean;
        getAnimationStack(): $AnimationStack;
        etf$getEntity(): $Entity;
        etf$getName(): $Component;
        getSideSword(): $ItemStack;
        /**
         * @deprecated
         */
        etf$isPartVisible(part: $PlayerModelPart_): boolean;
        getStages(): $Stages;
        getInventory(): $InventoryKJS;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        bumblezonePlayerInHeavyAir(): boolean;
        setDisableBodyRotation(ignoreFallDamageFromCurrentImpulse: boolean): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isDisableBodyRotation(): boolean;
        redirect$gfp000$bettercombat$getMainHandStack_Redirect(instance: $Player): $ItemStack;
        getData(): $AttachedData<any>;
        atl$getBaseClass(): $Class<any>;
        getScoreboard(): $Scoreboard;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tryResetCurrentImpulseContext(): void;
        modify$gfp000$bettercombat$getHand(hand: $InteractionHand_): $InteractionHand;
        updateTutorialInventoryAction(carried: $ItemStack_, clicked: $ItemStack_, action: $ClickAction_): void;
        /**
         * Handler for `World#setEntityState`
         */
        setCombatFlags(id: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopFallFlying(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        hasContainerOpen(): boolean;
        /**
         * Returns the player's FoodStats object.
         */
        getFoodData(): $FoodData;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onUpdateAbilities(): void;
        getSuffixes(): $Collection<$MutableComponent>;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getEnchantmentSeed(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startFallFlying(): void;
        startSleepInBed(bedPos: $BlockPos_): $Either<$Player$BedSleepingProblem, $Unit>;
        awardRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        refreshDisplayName(): void;
        setForcedPose(pose: $Pose_ | null): void;
        getForcedPose(): $Pose;
        getCombatFlags(): number;
        awardRecipesByKey(recipes: $List_<$ResourceLocation_>): void;
        resetRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSleepTimer(): number;
        isModelPartShown(part: $PlayerModelPart_): boolean;
        static createAttributes(): $AttributeSupplier$Builder;
        stopSleepInBed(wakeImmediately: boolean, updateLevelForSleepingPlayers: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        closeMenu(): void;
        getDigSpeed(arg0: $BlockState_, arg1: $BlockPos_ | null): number;
        canHarmPlayer(other: $Player): boolean;
        /**
         * Add experience levels to this player.
         */
        increaseScore(levels: number): void;
        openCommandBlock(commandBlockEntity: $CommandBlockEntity): void;
        openHorseInventory(horse: $AbstractHorse, inventory: $Container): void;
        getEnchantedDamage(entity: $Entity, damage: number, damageSource: $DamageSource_): number;
        openJigsawBlock(jigsawBlockEntity: $JigsawBlockEntity): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sweepAttack(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        disableShield(): void;
        openStructureBlock(structureEntity: $StructureBlockEntity): void;
        sendMerchantOffers(containerId: number, offers: $MerchantOffers, villagerLevel: number, villagerXp: number, showProgress: boolean, canRestock: boolean): void;
        openTextEdit(signEntity: $SignBlockEntity, isFrontText: boolean): void;
        playNotifySound(sound: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number): void;
        openItemGui(stack: $ItemStack_, hand: $InteractionHand_): void;
        modifyExpressionValue$hab000$ars_nouveau$elytraOverride(canAlwaysEat: boolean): boolean;
        redirect$gfp000$bettercombat$setStackInHand_Redirect(instance: $Player, handArg: $InteractionHand_, itemStack: $ItemStack_): void;
        static getDataPlayerModeCustomisation$irons_lib_$md$f87c94$1(): $EntityDataAccessor<any>;
        handler$ebh000$artifacts$eat(level: $Level_, stack: $ItemStack_, properties: $FoodProperties_, cir: $CallbackInfoReturnable<any>): void;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        getPlayerAwardedForExposure(): $Optional<any>;
        getLastPlayerAnimatorPosition(): $Vector3;
        playerAnimator_getAnimation(id: $ResourceLocation_): $IAnimation;
        playerAnimator_getAnimation(): $AnimationApplier;
        setLastPlayerAnimatorPosition(lastPlayerAnimatorPosition: $Vector3): void;
        playerAnimator_setAnimation(id: $ResourceLocation_, animation: $IAnimation): $IAnimation;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        getExposureCameraActionAnim(adjustTicks: number): number;
        irons_lib$getArmorBySlotRaw(slot1: $EquipmentSlot_): $ItemStack;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * The maximum size for #extraDataWriter is 32600 bytes.
         */
        openMenu(menuProvider: $MenuProvider, extraDataWriter: $Consumer_<$RegistryFriendlyByteBuf>): $OptionalInt;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * Use `FriendlyByteBuf#readBlockPos()` to read the position you pass to this method.
         */
        openMenu(menuProvider: $MenuProvider, pos: $BlockPos_): $OptionalInt;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFakePlayer(): boolean;
        isCloseEnough(entity: $Entity, distance: number): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayFly(): boolean;
        asHolderEntity(): $Entity;
        getServerPlayerAwardedForExposure(): ($ServerPlayer) | undefined;
        getServerPlayerExecutingExposure(): ($ServerPlayer) | undefined;
        asOperatorEntity(): $LivingEntity;
        getActiveExposureCameraOptional(): ($Camera) | undefined;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        supplementaries$hasQuiver(): boolean;
        wrap(): $WeakReference<$Trackable>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startTracking(): void;
        /**
         * @deprecated
         */
        getAnimation(): $AnimationApplier;
        incorrectSimulation(sim: $BasicSimulation): boolean;
        simulate(abstractClientPlayer: $MinecraftPlayer): void;
        /**
         * Add experience levels to this player.
         */
        updateSimulation(levels: number): void;
        createSimulation(): $BasicSimulation;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSelectedSlot(): number;
        /**
         * Add experience levels to this player.
         */
        setSelectedSlot(levels: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        boostElytraFlight(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendInventoryUpdate(): void;
        addItemCooldown(item: $Item_, ticks: number): void;
        getOpenInventory(): $AbstractContainerMenu;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        /**
         * Checks if the player is fake.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFake(): this is $FakePlayer;
        give(stack: $ItemStack_): void;
        /**
         * Add experience levels to this player.
         */
        addXP(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXp(): number;
        /**
         * Add experience levels to this player.
         */
        setXp(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        setFoodLevel(levels: number): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isMiningBlock(): boolean;
        setMouseItem(stack: $ItemStack_): void;
        setSaturation(yaw: number): void;
        getMouseItem(): $ItemStack;
        addExhaustion(yaw: number): void;
        /**
         * Add experience levels to this player.
         */
        setXpLevel(levels: number): void;
        giveInHand(stack: $ItemStack_): void;
        getStats(): $PlayerStatsJS;
        addFood(hunger: number, saturation: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getFoodLevel(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSaturation(): number;
        /**
         * Add experience levels to this player.
         */
        addXPLevels(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpLevel(): number;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
        bumblezone$callHurtCurrentlyUsedShield(yaw: number): void;
        /**
         * Add experience levels to this player.
         */
        setSleepCounter(levels: number): void;
        invokeSetShoulderEntityRight(compound: $CompoundTag_): void;
        invokeSetShoulderEntityLeft(compound: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        lastHurtByPlayerTime: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        ars_Nouveau$motions: $Stack<any>;
        yHeadRot: number;
        yCloakO: number;
        an_isRewinding: boolean;
        noPhysics: boolean;
        fallFlyTicks: number;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        s_bee: $EntityType<any>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        the_server: $MinecraftServer;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        level: $Level;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(level: $Level_, pos: $BlockPos_, yRot: number, gameProfile: $GameProfile);
        get ignoringFallDamageFromCurrentImpulse(): boolean;
        set ignoreFallDamageFromCurrentImpulse(value: boolean);
        get creative(): boolean;
        get prefixes(): $Collection<$MutableComponent>;
        get xpNeededForNextLevel(): number;
        get wardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        get enderChestInventory(): $PlayerEnderChestContainer;
        set entityOnShoulder(value: $CompoundTag_);
        get secondaryUseActive(): boolean;
        get shoulderEntityLeft(): $CompoundTag;
        get shoulderEntityRight(): $CompoundTag;
        get sleepingLongEnough(): boolean;
        get playerExecutingExposure(): $Optional<any>;
        get mainHandIdleAnimation(): string;
        get exposureAuthorEntity(): $Entity;
        get exposureCameraOperator(): $Optional<any>;
        get offHandIdleAnimation(): string;
        get craftingGrid(): $InventoryKJS;
        get hurt(): boolean;
        get scoping(): boolean;
        set mainArm(value: $HumanoidArm_);
        get WCUUID(): $UUID;
        get affectedByFluids(): boolean;
        get cooldowns(): $ItemCooldowns;
        get localPlayer(): boolean;
        get gameProfile(): $GameProfile;
        get currentAttack(): $AttackHand;
        get textFilteringEnabled(): boolean;
        get luck(): number;
        get currentItemAttackStrengthDelay(): number;
        get lastHeldItems(): $ItemStack[];
        get teslaReceivers(): $Collection<any>;
        get animationStack(): $AnimationStack;
        get stages(): $Stages;
        get scoreboard(): $Scoreboard;
        get foodData(): $FoodData;
        get suffixes(): $Collection<$MutableComponent>;
        get enchantmentSeed(): number;
        get sleepTimer(): number;
        static get dataPlayerModeCustomisation$irons_lib_$md$f87c94$1(): $EntityDataAccessor<any>;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get playerAwardedForExposure(): $Optional<any>;
        get fakePlayer(): boolean;
        get serverPlayerAwardedForExposure(): ($ServerPlayer) | undefined;
        get serverPlayerExecutingExposure(): ($ServerPlayer) | undefined;
        get activeExposureCameraOptional(): ($Camera) | undefined;
        get animation(): $AnimationApplier;
        get openInventory(): $AbstractContainerMenu;
        get fake(): boolean;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        set sleepCounter(value: number);
    }
}
