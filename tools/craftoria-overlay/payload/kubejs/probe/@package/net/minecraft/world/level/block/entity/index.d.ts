import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $RecipeType, $RecipeManager$CachedCheck, $CampfireCookingRecipe, $CraftingInput, $CraftingInput$Positioned, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $EntityType, $LivingEntity, $Pose } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $AccessorBaseContainerBlockEntity, $AccessorBannerBlockEntity } from "@package/net/darkhax/bookshelf/common/mixin/access/block";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $BeaconLightBehavior_, $BeaconLightBehavior } from "@package/dev/lambdaurora/lambdynlights/api/behavior";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ChestAccessor } from "@package/einstein/subtle_effects/util";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $PlayerModelPart_, $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $LecternBlockEntityAccessor } from "@package/io/github/mortuusars/exposure/mixin";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $AbstractFurnaceBlockEntityAccess, $BaseContainerBlockEntityAccess, $BlockEntityTypeAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $BeaconBlockEntityLightSource } from "@package/dev/lambdaurora/lambdynlights/echo";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Set_, $Map, $List, $List_, $Set, $UUID } from "@package/java/util";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $BrushableBlockEntityAccessor as $BrushableBlockEntityAccessor$2 } from "@package/com/hollingsworth/arsnouveau/common/mixin";
import { $Supplier_, $ObjIntConsumer_, $UnaryOperator_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $RegistryAccess, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $BlockEntityAccessor, $BrushableBlockEntityAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $AbstractFurnaceBlockEntityAccessor } from "@package/corundum/rubinated_nether/mixin/accessors";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable, $Record, $Object } from "@package/java/lang";
import { $AccessorMixinBaseContainerBlockEntity, $AccessorMixinBrushableBlockEntity } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $IBlockEntity } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $AzAnimatorAccessor, $AzAnimator } from "@package/mod/azure/azurelib/common/animation";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EMFEntity } from "@package/traben/entity_model_features/utils";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BrushableBlockEntityAccessor as $BrushableBlockEntityAccessor$1 } from "@package/com/yungnickyoung/minecraft/yungscavebiomes/mixin/accessor";
import { $Team } from "@package/net/minecraft/world/scores";
import { $DecoratedPotBlockEntityAccessor } from "@package/com/kekecreations/arts_and_crafts/core/mixin";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ETFPlayerEntity } from "@package/traben/entity_texture_features/features/player";
import { $AbstractFurnaceBlockEntityAccess as $AbstractFurnaceBlockEntityAccess$1 } from "@package/snownee/jade/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sculkCatalyst: $SculkCatalystBlockEntity): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper {
        static pushItemsTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $HopperBlockEntity): void;
        static getContainerAt(level: $Level_, pos: $BlockPos_): $Container;
        setCooldown(cooldownTime: number): void;
        /**
         * @return `false` if the `container` has any room to place items in
         */
        static isFullContainer(container: $Container, direction: $Direction_): boolean;
        static suckInItems(level: $Level_, hopper: $Hopper): boolean;
        isGridAligned(): boolean;
        static getItemsAtAndAbove(level: $Level_, hopper: $Hopper): $List<$ItemEntity>;
        getLastUpdateTime(): number;
        isOnCustomCooldown(): boolean;
        static addItem(container: $Container, item: $ItemEntity): boolean;
        /**
         * Attempts to place the passed stack in the container, using as many slots as required.
         * @return any leftover stack
         */
        static addItem(source: $Container | null, destination: $Container, stack: $ItemStack_, direction: $Direction_ | null): $ItemStack;
        static entityInside(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity, blockEntity: $HopperBlockEntity): void;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        getSuckAabb(): $AABB;
        static MOVE_ITEM_SPEED: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        static HOPPER_CONTAINER_SIZE: number;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set cooldown(value: number);
        get gridAligned(): boolean;
        get lastUpdateTime(): number;
        get onCustomCooldown(): boolean;
        get levelX(): number;
        get levelZ(): number;
        get levelY(): number;
        get suckAabb(): $AABB;
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity implements $ETFPlayerEntity {
        static clear(): void;
        static setup(services: $Services_, mainThreadExecutor: $Executor_): void;
        setOwner(owner: $ResolvableProfile_ | null): void;
        getOwnerProfile(): $ResolvableProfile;
        static fetchGameProfile(profileUuid: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileName: string): $CompletableFuture<($GameProfile) | undefined>;
        static animation(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SkullBlockEntity): void;
        etf$getUuidAsString(): string;
        etf$getInventory(): $Inventory;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        etf$isTeammate(player: $Player): boolean;
        etf$getEntity(): $Entity;
        etf$getName(): $Component;
        etf$isPartVisible(part: $PlayerModelPart_): boolean;
        getAnimation(partialTick: number): number;
        getNoteBlockSound(): $ResourceLocation;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set owner(value: $ResolvableProfile_ | null);
        get ownerProfile(): $ResolvableProfile;
        get noteBlockSound(): $ResourceLocation;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        setOutputSignal(output: number): void;
        getOutputSignal(): number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        static byName(name: string): ($JigsawBlockEntity$JointType) | undefined;
        getSerializedName(): string;
        getTranslatedName(): $Component;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get serializedName(): string;
        get translatedName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        getOpenness(partialTicks: number): number;
        shouldBeOpen(shouldBeOpen: boolean): void;
        tickLid(): void;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        get<T>(component: $DataComponentType_<T>): T;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable, $BeaconBlockEntityLightSource {
        getName(): $Component;
        getDisplayName(): $Component;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BeaconBlockEntity): void;
        /**
         * Sets the custom name for this beacon.
         */
        setCustomName(name: $Component_ | null): void;
        lambdynlights$getDynamicLightBeam(): $BeaconLightBehavior;
        lambdynlights$setDynamicLightBeam(beam: $BeaconLightBehavior_): void;
        getCustomName(): $Component;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        lambdynlights$getLevels(): number;
        static playSound(level: $Level_, pos: $BlockPos_, sound: $SoundEvent_): void;
        hasCustomName(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        primaryPower: $Holder<$MobEffect>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        secondaryPower: $Holder<$MobEffect>;
        static DATA_SECONDARY: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        levels: number;
        static DATA_PRIMARY: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessage(index: number, isFiltered: boolean): $Component;
        setColor(color: $DyeColor_): $SignText;
        getColor(): $DyeColor;
        hasAnyClickCommands(player: $Player): boolean;
        setMessage(index: number, text: $Component_, filteredText: $Component_): $SignText;
        setMessage(index: number, text: $Component_): $SignText;
        getMessages(isFiltered: boolean): $Component[];
        setHasGlowingText(hasGlowingText: boolean): $SignText;
        getRenderMessages(renderMessagesFiltered: boolean, formatter: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        hasMessage(player: $Player): boolean;
        hasGlowingText(): boolean;
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(messages: $Component_[], filteredMessages: $Component_[], color: $DyeColor_, hasGlowingText: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(color: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, color: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        openersCounter: $ContainerOpenersCounter;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $BlockEntityTypeAccess, $BlockEntityTypeExtension<any> {
        static getKey(blockEntityType: $BlockEntityType_<never>): $ResourceLocation;
        create(pos: $BlockPos_, state: $BlockState_): $Object;
        isValid(state: $BlockState_): boolean;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        getBlockEntity(level: $BlockGetter, pos: $BlockPos_): $Object;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        getValidBlocks(): $Set<$Block>;
        neoforge$setValidBlocks(validBlocks: $Set_<$Block_>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        validBlocks: $Set<$Block>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(factory: $BlockEntityType$BlockEntitySupplier_<$Object>, validBlocks: $Set_<$Block_>, dataType: $Type<never>);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        recipeType: $RecipeType<$AbstractCookingRecipe>;
        static DATA_COOKING_TOTAL_TIME: number;
        static DATA_COOKING_PROGRESS: number;
        static BURN_TIME_STANDARD: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        static BURN_COOL_SPEED: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable {
        getCookableRecipe(stack: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        static particleTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        static cooldownTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        placeFood(entity: $LivingEntity | null, food: $ItemStack_, cookTime: number): boolean;
        /**
         * @return the items currently held in this campfire
         */
        getItems(): $NonNullList<$ItemStack>;
        static cookTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        dowse(): void;
        clearContent(): void;
        static ATTACHMENTS_NBT_KEY: string;
        cookingTime: number[];
        cookingProgress: number[];
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity {
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        openersCounter: $ContainerOpenersCounter;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        getHeight(): number;
        getColor(): number;
        constructor(color: number);
        get height(): number;
        get color(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(distance: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(tag: $CompoundTag_ | null): $PotDecorations;
        save(tag: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
        constructor(back: $Item_, left: $Item_, right: $Item_, front: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { front?: ($Item_) | undefined, back?: ($Item_) | undefined, left?: ($Item_) | undefined, right?: ($Item_) | undefined,  } | [front?: ($Item_) | undefined, back?: ($Item_) | undefined, left?: ($Item_) | undefined, right?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity, $ChestAccessor {
        static getOpenCount(level: $BlockGetter, pos: $BlockPos_): number;
        static swapContents(chest: $ChestBlockEntity, otherChest: $ChestBlockEntity): void;
        getOpenNess(partialTicks: number): number;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ChestBlockEntity): void;
        subtleEffects$getLidController(): $ChestLidController;
        openersCounter: $ContainerOpenersCounter;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(entity: $Entity): $BeehiveBlockEntity$Occupant;
        static create(ticksInHive: number): $BeehiveBlockEntity$Occupant;
        createEntity(level: $Level_, pos: $BlockPos_): $Entity;
        entityData(): $CustomData;
        minTicksInHive(): number;
        ticksInHive(): number;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { minTicksInHive?: number, entityData?: $CustomData, ticksInHive?: number,  } | [minTicksInHive?: number, entityData?: $CustomData, ticksInHive?: number, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $BlockEntityAccessor, $EMFEntity, $ETFEntity, $AzAnimatorAccessor<any, any>, $Cullable, $IBlockEntity {
        getType(): $BlockEntityType<never>;
        setLevel(level: $Level_): void;
        getLevel(): $Level;
        applyComponentsFromItemStack(stack: $ItemStack_): void;
        handler$gjn000$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        /**
         * @deprecated
         */
        setBlockState(blockState: $BlockState_): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isRemoved(): boolean;
        components(): $DataComponentMap;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setChanged(): void;
        setCulled(value: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isWet(): boolean;
        emf$age(): number;
        emf$prevX(): number;
        emf$getX(): number;
        emf$prevY(): number;
        emf$getY(): number;
        emf$prevZ(): number;
        emf$getZ(): number;
        emf$getYaw(): number;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setTimeout(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isSneaking(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isSprinting(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isInLava(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$hasPassengers(): boolean;
        setAnimator(arg0: $AzAnimator<any, any>): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isGlowing(): boolean;
        emf$getVelocity(): $Vec3;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isForcedVisible(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isAlive(): boolean;
        emf$getVariableMap(): $Map<any, any>;
        emf$getTypeString(): string;
        getAnimatorOrNull(): $AzAnimator<any, any>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isInvisible(): boolean;
        emf$prevPitch(): number;
        emf$getPitch(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isOnFire(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$hasVehicle(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isOnGround(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        onlyOpCanSetNbt(): boolean;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        getBlockState(): $BlockState;
        collectComponents(): $DataComponentMap;
        applyComponents(components: $DataComponentMap_, patch: $DataComponentPatch_): void;
        static addEntityType(tag: $CompoundTag_, entityType: $BlockEntityType_<never>): void;
        getUpdateTag(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearRemoved(): void;
        setComponents(components: $DataComponentMap_): void;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        isValidBlockState(arg0: $BlockState_): boolean;
        saveCustomOnly(registries: $HolderLookup$Provider): $CompoundTag;
        static getPosFromTag(tag: $CompoundTag_): $BlockPos;
        loadWithComponents(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        loadCustomOnly(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        saveCustomAndMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        removeComponentsFromTag(tag: $CompoundTag_): void;
        fillCrashReportCategory(reportCategory: $CrashReportCategory): void;
        static parseCustomNameSafe(customName: string, registries: $HolderLookup$Provider): $Component;
        getRenderAttachmentData(): $Object;
        saveWithFullMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithoutMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        getRenderData(): $Object;
        etf$getArmorItems(): $Iterable<any>;
        etf$getVelocity(): $Vec3;
        etf$getCustomName(): $Component;
        etf$getPose(): $Pose;
        etf$getOptifineId(): number;
        etf$getEntityKey(): string;
        etf$getBlockY(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$canBeBright(): boolean;
        etf$distanceTo(entity: $Entity): number;
        etf$getType(): $EntityType<any>;
        etf$getHandItems(): $Iterable<any>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$isBlockEntity(): boolean;
        etf$getWorld(): $Level;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$hasCustomName(): boolean;
        etf$getUuid(): $UUID;
        etf$getBlockPos(): $BlockPos;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setRemoved(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isCulled(): boolean;
        triggerEvent(id: number, type: number): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isTouchingWater(): boolean;
        getBlockPos(): $BlockPos;
        setOutOfCamera(value: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isOutOfCamera(): boolean;
        static loadStatic(pos: $BlockPos_, state: $BlockState_, tag: $CompoundTag_, registries: $HolderLookup$Provider): $BlockEntity;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        etf$getNbt(): $CompoundTag;
        etf$getScoreboardTeam(): $Team;
        etf$getItemsEquipped(): $Iterable<any>;
        etf$getOptifineVehicleId(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasLevel(): boolean;
        saveWithId(registries: $HolderLookup$Provider): $CompoundTag;
        saveToItem(stack: $ItemStack_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onLoad(): void;
        /**
         * Called when you receive a TileEntityData packet for the location this
         * TileEntity is currently in. On the client, the NetworkManager will always
         * be the remote server. On the server, it will be whomever is responsible for
         * sending the packet.
         */
        onDataPacket(net: $Connection, pkt: $ClientboundBlockEntityDataPacket, lookupProvider: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        requestModelDataUpdate(): void;
        /**
         * Allows you to return additional model data.
         * This data can be used to provide additional functionality in your `BakedModel`.
         * You need to schedule a refresh of you model data via `#requestModelDataUpdate()` if the result of this function changes.
         * 
         * This method is always called on the main client thread.
         */
        getModelData(): $ModelData;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onChunkUnloaded(): void;
        handleUpdateTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        invalidateCapabilities(): void;
        etf$getETFRenderState(): $ETFEntityRenderState;
        getAnimator(): ($AzAnimator<$Object, $Object>) | undefined;
        bumblezone$setType(arg0: $BlockEntityType_<never>): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get type(): $BlockEntityType<never>;
        get forcedVisible(): boolean;
        get animatorOrNull(): $AzAnimator<any, any>;
        get persistentData(): $CompoundTag;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get renderAttachmentData(): $Object;
        get renderData(): $Object;
        get blockPos(): $BlockPos;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer {
        isClosed(): boolean;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ShulkerBoxBlockEntity): void;
        loadFromTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        getColor(): $DyeColor;
        handler$bdm000$supplementaries$supp$preventInsertion(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        getProgress(partialTicks: number): number;
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        getBoundingBox(state: $BlockState_): $AABB;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        openCount: number;
        lockKey: $LockCode;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        static ROWS: number;
        constructor(color: $DyeColor_ | null, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get closed(): boolean;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        get color(): $DyeColor;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity implements $BrushableBlockEntityAccessor, $AccessorMixinBrushableBlockEntity, $BrushableBlockEntityAccessor$2, $BrushableBlockEntityAccessor$1 {
        getItem(): $ItemStack;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        getHitDirection(): $Direction;
        brushingCompleted(player: $Player): void;
        unpackLootTable(player: $Player): void;
        brush(startTick: number, arg1: $Player, player: $Direction_): boolean;
        wrapOperation$clp000$lootr$tryLoadLootTable(arg0: $CompoundTag_, arg1: string, arg2: number, arg3: $Operation_<any>): boolean;
        checkReset(): void;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        lootr$getLootTable(): $ResourceKey<$LootTable>;
        setLootTableSeed(arg0: number): void;
        setItem(stack: $ItemStack_): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        bumblezone$callDropContent(player: $Player): void;
        lootr$getLootTableSeed(): number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get hitDirection(): $Direction;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity, $ChestAccessor {
        getOpenNess(partialTicks: number): number;
        stillValid(player: $Player): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        recheckOpen(): void;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $EnderChestBlockEntity): void;
        subtleEffects$getLidController(): $ChestLidController;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $AccessorMixinBaseContainerBlockEntity, $AccessorBaseContainerBlockEntity, $BaseContainerBlockEntityAccess {
        getName(): $Component;
        isEmpty(): boolean;
        getDisplayName(): $Component;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        stillValid(player: $Player): boolean;
        static canUnlock(player: $Player, code: $LockCode_, displayName: $Component_): boolean;
        canOpen(player: $Player): boolean;
        getCustomName(): $Component;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
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
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        hasCustomName(): boolean;
        self(): $Container;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        bookshelf$name(arg0: $Component_): void;
        invokeGetItems(): $NonNullList<$ItemStack>;
        setLockKey(arg0: $LockCode_): void;
        getLockKey(): $LockCode;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        get displayName(): $Component;
        get customName(): $Component;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> {
        static of<T extends $BlockEntity>(factory: $BlockEntityType$BlockEntitySupplier_<T>, ...validBlocks: $Block_[]): $BlockEntityType$Builder<T>;
        build(dataType: $Type<never>): $BlockEntityType<T>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        isAutomatic(): boolean;
        markConditionMet(): boolean;
        isConditional(): boolean;
        wasConditionMet(): boolean;
        setAutomatic(auto: boolean): void;
        onModeSwitch(): void;
        getMode(): $CommandBlockEntity$Mode;
        setPowered(auto: boolean): void;
        isPowered(): boolean;
        getCommandBlock(): $BaseCommandBlock;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get conditional(): boolean;
        get mode(): $CommandBlockEntity$Mode;
        get commandBlock(): $BaseCommandBlock;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(registry: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(item: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getSculkSpreader(): $SculkSpreader;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        static PULSE_TICKS: number;
        constructor(blockState: $BlockState_, positionSource: $PositionSource);
        get sculkSpreader(): $SculkSpreader;
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer {
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getRedstoneSignal(): number;
        setTriggered(triggered: boolean): void;
        fillStackedContents(contents: $StackedContents): void;
        setCraftingTicksRemaining(craftingTicksRemaining: number): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, crafter: $CrafterBlockEntity): void;
        isSlotDisabled(slot: number): boolean;
        setSlotState(slot: number, state: boolean): void;
        isTriggered(): boolean;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        getItems(): $List<$ItemStack>;
        static CONTAINER_WIDTH: number;
        static CONTAINER_HEIGHT: number;
        static DATA_TRIGGERED: number;
        static SLOT_ENABLED: number;
        static CONTAINER_SIZE: number;
        static SLOT_DISABLED: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get width(): number;
        get height(): number;
        get redstoneSignal(): number;
        set craftingTicksRemaining(value: number);
        get items(): $List<$ItemStack>;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        frontText: $SignText;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BrewingStandBlockEntity): void;
        static isBrewable(potionBrewing: $PotionBrewing, items: $NonNullList<$ItemStack_>): boolean;
        static DATA_BREW_TIME: number;
        static DATA_FUEL_USES: number;
        fuel: number;
        brewTime: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        static FUEL_USES: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
    }
    export class $StructureBlockEntity extends $BlockEntity {
        getMirror(): $Mirror;
        setSeed(seed: number): void;
        getSeed(): number;
        unloadStructure(): void;
        placeStructure(level: $ServerLevel): void;
        /**
         * Saves the template, either updating the local version or writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(writeToDisk: boolean): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(): boolean;
        getStructurePos(): $BlockPos;
        setMode(mode: $StructureMode_): void;
        getMode(): $StructureMode;
        setPowered(ignoreEntities: boolean): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isPowered(): boolean;
        placeStructureIfSameSize(level: $ServerLevel): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isStructureLoadable(): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getRotation(): $Rotation;
        setMirror(mirror: $Mirror_): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        detectSize(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowAir(): boolean;
        setShowAir(ignoreEntities: boolean): void;
        usedBy(player: $Player): boolean;
        createdBy(author: $LivingEntity): void;
        setStructureName(structureName: $ResourceLocation_ | null): void;
        setStructureName(metaData: string | null): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        hasStructureName(): boolean;
        getStructureSize(): $Vec3i;
        setStructureSize(structureSize: $Vec3i): void;
        setStructurePos(structurePos: $BlockPos_): void;
        getStructureName(): string;
        setIgnoreEntities(ignoreEntities: boolean): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowBoundingBox(): boolean;
        loadStructureInfo(level: $ServerLevel): boolean;
        getMetaData(): string;
        setMetaData(metaData: string): void;
        setIntegrity(integrity: number): void;
        setRotation(rotation: $Rotation_): void;
        setShowBoundingBox(ignoreEntities: boolean): void;
        getIntegrity(): number;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isIgnoreEntities(): boolean;
        static createRandom(seed: number): $RandomSource;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static MAX_SIZE_PER_AXIS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get structureLoadable(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $AbstractFurnaceBlockEntityAccessor, $AbstractFurnaceBlockEntityAccess, $AbstractFurnaceBlockEntityAccess$1 {
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        static invalidateCache(): void;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getBurnDuration(fuel: $ItemStack_): number;
        getRecipeUsed(): $RecipeHolder<never>;
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        fillStackedContents(helper: $StackedContents): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        static callGetTotalCookTime$rubinated_nether_$md$f87c94$0(level: $Level_, blockEntity: $AbstractFurnaceBlockEntity): number;
        isLit(): boolean;
        awardUsedRecipesAndPopExperience(player: $ServerPlayer): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $AbstractFurnaceBlockEntity): void;
        getRecipesToAwardAndPopExperience(level: $ServerLevel, popVec: $Vec3_): $List<$RecipeHolder<never>>;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static isFuel(stack: $ItemStack_): boolean;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        setLitDuration(arg0: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingProgress(): number;
        callCanBurn(arg0: $RegistryAccess, arg1: $RecipeHolder_<never>, arg2: $NonNullList<$ItemStack_>, arg3: number, arg4: $AbstractFurnaceBlockEntity): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        rubinatedNether$getLitTime(): number;
        callGetBurnDuration(fuel: $ItemStack_): number;
        rubinatedNether$setLitTime(arg0: number): void;
        rubinatedNether$getItems(): $NonNullList<$ItemStack>;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingTotalTime(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        rubinatedNether$getCookingTotalTime(): number;
        rubinatedNether$setCookingTotalTime(arg0: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        rubinatedNether$getCookingProgress(): number;
        rubinatedNether$setCookingProgress(arg0: number): void;
        rubinatedNether$getQuickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        rubinatedNether$setLitDuration(arg0: number): void;
        setLitTime(arg0: number): void;
        callIsLit(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getLitTime(): number;
        static DATA_LIT_DURATION: number;
        recipeType: $RecipeType<$AbstractCookingRecipe>;
        static DATA_COOKING_TOTAL_TIME: number;
        static DATA_COOKING_PROGRESS: number;
        static BURN_TIME_STANDARD: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        static BURN_COOL_SPEED: number;
        get lit(): boolean;
        set litDuration(value: number);
        get cookingProgress(): number;
        get cookingTotalTime(): number;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable, $Clearable {
        getName(): $Component;
        static bookAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, enchantingTable: $EnchantingTableBlockEntity): void;
        setCustomName(customName: $Component_ | null): void;
        getCustomName(): $Component;
        clearContent(): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        static ATTACHMENTS_NBT_KEY: string;
        time: number;
        oRot: number;
        flip: number;
        open: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        isEmpty(): boolean;
        getOccupantCount(): number;
        isFull(): boolean;
        isSedated(): boolean;
        storeBee(occupant: $BeehiveBlockEntity$Occupant_): void;
        emptyAllLivingFromHive(player: $Player | null, state: $BlockState_, releaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, beehive: $BeehiveBlockEntity): void;
        isFireNearby(): boolean;
        addOccupant(occupant: $Entity): void;
        static getHoneyLevel(state: $BlockState_): number;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get empty(): boolean;
        get occupantCount(): number;
        get full(): boolean;
        get sedated(): boolean;
        get fireNearby(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        isRemoved(): boolean;
        tick(): void;
        getPos(): $BlockPos;
        get type(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        setEntityId(type: $EntityType_<never>, random: $RandomSource): void;
        getSpawner(): $BaseSpawner;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        handler$hhf000$spectrum$allowPlacingSpawnerWithBlockData(arg0: $CallbackInfoReturnable<any>): void;
        spawner: $BaseSpawner;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BellBlockEntity extends $BlockEntity {
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        onHit(direction: $Direction_): void;
        ticks: number;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        shaking: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        static CONTAINER_SIZE: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        setText(text: $SignText, isFrontText: boolean): boolean;
        getText(isFrontText: boolean): $SignText;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sign: $SignBlockEntity): void;
        getBackText(): $SignText;
        getFrontText(): $SignText;
        getTextLineHeight(): number;
        updateSignText(player: $Player, isFrontText: boolean, filteredText: $List_<$FilteredText_>): void;
        getMaxTextLineWidth(): number;
        playerIsTooFarAwayToEdit(uuid: $UUID_): boolean;
        updateText(updater: $UnaryOperator_<$SignText>, isFrontText: boolean): boolean;
        isWaxed(): boolean;
        setAllowedPlayerEditor(playWhoMayEdit: $UUID_ | null): void;
        getPlayerWhoMayEdit(): $UUID;
        canExecuteClickCommands(isFrontText: boolean, player: $Player): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        executeClickCommandsIfPresent(player: $Player, level: $Level_, pos: $BlockPos_, frontText: boolean): boolean;
        static createCommandSourceStack(player: $Player | null, level: $Level_, pos: $BlockPos_): $CommandSourceStack;
        isFacingFrontText(player: $Player): boolean;
        setWaxed(isWaxed: boolean): boolean;
        handler$hhf000$spectrum$allowPlacingSpawnerWithBlockData(arg0: $CallbackInfoReturnable<any>): void;
        static ATTACHMENTS_NBT_KEY: string;
        frontText: $SignText;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType_<any>, pos: $BlockPos_, blockState: $BlockState_);
        get backText(): $SignText;
        get textLineHeight(): number;
        get maxTextLineWidth(): number;
        set allowedPlayerEditor(value: $UUID_ | null);
        get playerWhoMayEdit(): $UUID;
        get signInteractionFailedSoundEvent(): $SoundEvent;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem {
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, jukebox: $JukeboxBlockEntity): void;
        splitTheItem(amount: number): $ItemStack;
        onSongChanged(): void;
        tryForcePlaySong(): void;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(stack: $ItemStack_): void;
        handler$kdi000$sounds$$jukebox_use_sound_effect(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        handler$zhn000$yungsapi$checkIfLevelNull(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        getTheItem(): $ItemStack;
        setTheItem(stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getComparatorOutput(): number;
        getSongPlayer(): $JukeboxSongPlayer;
        popOutTheItem(): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        isEmpty(): boolean;
        getItem(amount: number): $ItemStack;
        removeTheItem(): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        removeItemNoUpdate(amount: number): $ItemStack;
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
        getMaxStackSize(stack: $ItemStack_): number;
        self(): $Container;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        getStackInSlot(amount: number): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        static SONG_ITEM_TAG_ID: string;
        jukeboxSongPlayer: $JukeboxSongPlayer;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get comparatorOutput(): number;
        get songPlayer(): $JukeboxSongPlayer;
        get containerSize(): number;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(pos: $BlockPos_, state: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(face: $Direction_): boolean;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        add(layer: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(layers: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        /**
         * @deprecated
         */
        addIfRegistered(patterns: $HolderGetter<$BannerPattern_>, patternKey: $ResourceKey_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        setLastVibrationFrequency(lastVibrationFrequency: number): void;
        createVibrationUser(): $VibrationSystem$User;
        getLastVibrationFrequency(): number;
        getListener(): $VibrationSystem$Listener;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        getTrialSpawner(): $TrialSpawner;
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        markUpdated(): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get trialSpawner(): $TrialSpawner;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $DispenserBlockEntityAccessor {
        insertItem(stack: $ItemStack_): $ItemStack;
        getRandomSlot(random: $RandomSource): number;
        getItems(): $NonNullList<$ItemStack>;
        static CONTAINER_SIZE: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        isCoolingDown(): boolean;
        getPortalPosition(level: $ServerLevel, pos: $BlockPos_): $Vec3;
        static beamAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        static triggerCooldown(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getSpawnPercent(partialTicks: number): number;
        setExitPosition(exitPortal: $BlockPos_, exactTeleport: boolean): void;
        isSpawning(): boolean;
        getCooldownPercent(partialTicks: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static portalTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get coolingDown(): boolean;
        get particleAmount(): number;
        get spawning(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        recipeType: $RecipeType<$AbstractCookingRecipe>;
        static DATA_COOKING_TOTAL_TIME: number;
        static DATA_COOKING_PROGRESS: number;
        static BURN_TIME_STANDARD: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        static BURN_COOL_SPEED: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatterns {
        static register(context: $BootstrapContext<$BannerPattern_>, resourceKey: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(context: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        unpackLootTable(player: $Player | null): void;
        wrapOperation$cmb000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        handler$cmb000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        wrapOperation$cmb000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        recipeType: $RecipeType<$AbstractCookingRecipe>;
        static DATA_COOKING_TOTAL_TIME: number;
        static DATA_COOKING_PROGRESS: number;
        static BURN_TIME_STANDARD: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        static BURN_COOL_SPEED: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        assetId(): $ResourceLocation;
        translationKey(): string;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { assetId?: $ResourceLocation_, translationKey?: string,  } | [assetId?: $ResourceLocation_, translationKey?: string, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider, $LecternBlockEntityAccessor {
        getDisplayName(): $Component;
        getRedstoneSignal(): number;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_, player: $Player | null): void;
        getBook(): $ItemStack;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        clearContent(): void;
        getPage(): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        hasBook(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        getDataAccess(): $ContainerData;
        getBookAccess(): $Container;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static SLOT_BOOK: number;
        static NUM_DATA: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get redstoneSignal(): number;
        get page(): number;
        get dataAccess(): $ContainerData;
        get bookAccess(): $Container;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable, $AccessorBannerBlockEntity {
        getName(): $Component;
        getItem(): $ItemStack;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        getCustomName(): $Component;
        fromItem(stack: $ItemStack_, color: $DyeColor_): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        setName(arg0: $Component_): void;
        static MAX_PATTERNS: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_, baseColor: $DyeColor_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get item(): $ItemStack;
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get customName(): $Component;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        isGridAligned(): boolean;
        getSuckAabb(): $AABB;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
        get levelX(): number;
        get levelZ(): number;
        get levelY(): number;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container {
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
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
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getLastInteractedSlot(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        clearContent(): void;
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
        getMaxStackSize(stack: $ItemStack_): number;
        self(): $Container;
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
        static MAX_BOOKS_IN_STORAGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        items: $NonNullList<$ItemStack>;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get lastInteractedSlot(): number;
        get containerSize(): number;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        isActive(): boolean;
        getActiveRotation(partialTick: number): number;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        isHunting(): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        tickCount: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get active(): boolean;
        get hunting(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ContainerOpenersCounter {
        decrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        incrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getName(): $ResourceLocation;
        setName(name: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(name: $ResourceLocation_): void;
        generate(level: $ServerLevel, maxDepth: number, keepJigsaws: boolean): void;
        getSelectionPriority(): number;
        setPlacementPriority(placementPriority: number): void;
        setSelectionPriority(placementPriority: number): void;
        getPlacementPriority(): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getJoint(): $JigsawBlockEntity$JointType;
        setPool(pool: $ResourceKey_<$StructureTemplatePool>): void;
        setJoint(joint: $JigsawBlockEntity$JointType_): void;
        getFinalState(): string;
        setFinalState(finalState: string): void;
        static TARGET: string;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        static JOINT: string;
        static NAME: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { pattern?: $Holder_<$BannerPattern>, color?: $DyeColor_,  } | [pattern?: $Holder_<$BannerPattern>, color?: $DyeColor_, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem, $DecoratedPotBlockEntityAccessor {
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        getPotAsItem(): $ItemStack;
        splitTheItem(amount: number): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        static createDecoratedPotItem(decorations: $PotDecorations_): $ItemStack;
        getDecorations(): $PotDecorations;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        getTheItem(): $ItemStack;
        setTheItem(item: $ItemStack_): void;
        getDirection(): $Direction;
        setFromItem(item: $ItemStack_): void;
        wobble(style: $DecoratedPotBlockEntity$WobbleStyle_): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        unpackLootTable(player: $Player | null): void;
        wrapOperation$cmb000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        handler$cmb000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        wrapOperation$cmb000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
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
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        removeTheItem(): $ItemStack;
        clearContent(): void;
        self(): $Container;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        getStackInSlot(amount: number): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        setDecorations(arg0: $PotDecorations_): void;
        static TAG_SHERDS: string;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        static EVENT_POT_WOBBLES: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get potAsItem(): $ItemStack;
        get containerBlockEntity(): $BlockEntity;
        get direction(): $Direction;
        set fromItem(value: $ItemStack_);
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        static tryGetPlayer(entity: $Entity | null): $ServerPlayer;
        getVibrationData(): $VibrationSystem$Data;
        getListener(): $VibrationSystem$Listener;
        tryRespond(level: $ServerLevel): void;
        tryShriek(level: $ServerLevel, player: $ServerPlayer | null): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
}
