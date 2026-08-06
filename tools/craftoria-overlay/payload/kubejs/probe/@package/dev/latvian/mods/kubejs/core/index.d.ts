import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot_, $EntityType, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $Minecraft } from "@package/net/minecraft/client";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_, $ItemPredicate, $ItemBuilder, $ItemStackKey, $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $DisplayInfo, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ScheduledEvents$ScheduledEvent, $SlotFilter_, $WrappedJS, $ScheduledEvents, $NotificationToastData_, $ScheduledEvents$Callback_, $WithCodec, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SpecialEquality, $ToStringJS } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ScriptType, $ScriptTypeHolder } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component_, $ClickEvent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Duration_ } from "@package/java/time";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonElement } from "@package/com/google/gson";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $EntityArrayList, $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Registry, $Holder_, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ItemMatch, $FluidMatch, $Replaceable, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable, $Iterable_, $Record, $Object, $IllegalStateException } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $InputStream } from "@package/java/io";
import { $Explosion, $ItemLike_, $EntityGetter, $GameRules$Value, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagManager, $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { AbstractClientPlayer, $AbstractClientPlayer, LocalPlayer } from "@package/net/minecraft/client/player";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BufferedImage } from "@package/java/awt/image";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $EntityPotionEffectsJS, $KubeRayTraceResult } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableDataComponentHolderFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as mixin from "@package/dev/latvian/mods/kubejs/core/mixin";

declare module "@package/dev/latvian/mods/kubejs/core" {
    export class $EntityKJS {
    }
    export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        getScriptType(): $ScriptType;
        setY(y: number): void;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setX(x: number): void;
        spawn(): void;
        setZ(z: number): void;
        getNbt(): $CompoundTag;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        mergeNbt(tag: $CompoundTag_): $Entity;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        getMotionX(): number;
        setMotionX(x: number): void;
        getServer(): $MinecraftServer;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getMotionZ(): number;
        getType(): string;
        setPosition(x: number, y: number, z: number): void;
        setPosition(block: $LevelBlock): void;
        setMotionZ(z: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        getLevel(): $Level;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        getMotionY(): number;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        get displayName(): $Component;
        get name(): $Component;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        set y(value: number);
        set x(value: number);
        set z(value: number);
        get self(): boolean;
        get facing(): $Direction;
        get passengers(): $EntityArrayList;
        get teamId(): string;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get animal(): boolean;
        get server(): $MinecraftServer;
        get username(): string;
        get type(): string;
        get level(): $Level;
        get teamName(): string;
        get profile(): $GameProfile;
        get player(): boolean;
        get frame(): boolean;
        get living(): boolean;
        get monster(): boolean;
        get waterCreature(): boolean;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
    }
    export class $IngredientSupplierKJS {
    }
    export interface $IngredientSupplierKJS {
        kjs$asIngredient(): $Ingredient;
    }
    export class $FluidStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $FluidStackKJS extends $Replaceable, $SpecialEquality, $WithCodec, $FluidLike, $FluidMatch, $MutableDataComponentHolderFunctions, $RegistryObjectKJS<$Fluid> {
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        kjs$getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$copy(amount: number): $FluidLike;
        kjs$getId(): string;
        kjs$getAmount(): number;
        kjs$getFluid(): $Fluid;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$asHolder(): $Holder<$Fluid>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getCodec(): $Codec<never>;
        kjs$isEmpty(): boolean;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        self(): $EntityGetter;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        kjs$self(): $SizedIngredient;
        kjs$toFlatJson(): $JsonElement;
        kjs$toNestedJson(): $JsonElement;
        kjs$asIngredient(): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        getKey(): $ResourceKey<T>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getId(): string;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        getRegistry(): $Registry<T>;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        get key(): $ResourceKey<T>;
        get mod(): string;
        get id(): string;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<T>>;
        get idLocation(): $ResourceLocation;
        get registry(): $Registry<T>;
        get registryId(): $ResourceKey<$Registry<T>>;
    }
    export class $DiggerItemKJS {
    }
    export interface $DiggerItemKJS {
        kjs$getMineableTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $DiggerItemKJS}.
     */
    export type $DiggerItemKJS_ = (() => $TagKey_<$Block>);
    export class $EntityCollectionKJS {
    }
    export interface $EntityCollectionKJS {
        getPlayers(): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        get players(): $EntityArrayList;
        get entities(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollectionKJS}.
     */
    export type $EntityCollectionKJS_ = (() => $Iterable_<$Entity>);
    export class $CreativeModeTabKJS {
    }
    export interface $CreativeModeTabKJS {
        kjs$setDisplayName(component: $Component_): void;
        kjs$setIcon(icon: $ItemStack_): void;
    }
    export class $WithPersistentData {
    }
    export interface $WithPersistentData extends $MessageSenderKJS {
        getPersistentData(): $CompoundTag;
        get persistentData(): $CompoundTag;
    }
    export class $TagLoaderKJS<T> {
    }
    export interface $TagLoaderKJS<T> {
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$getRegistry(): $Registry<T>;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        get item(): $ItemStack;
        get frame(): boolean;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        getKey(): $ResourceKey<$Block>;
        getBlock(): $Block;
        getTypeData(): $Map<string, $Object>;
        getId(): string;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        get key(): $ResourceKey<$Block>;
        get block(): $Block;
        get typeData(): $Map<string, $Object>;
        get id(): string;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        swing(hand: $InteractionHand_): void;
        swing(): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        rayTrace(): $KubeRayTraceResult;
        setOffHandItem(item: $ItemStack_): void;
        getOffHandItem(): $ItemStack;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        isUndead(): boolean;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageHeldItem(): void;
        isLiving(): this is $LivingEntity;
        getDefaultMovementSpeed(): number;
        setDefaultMovementSpeed(speed: number): void;
        setMovementSpeedAddition(speed: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setLegsArmorItem(item: $ItemStack_): void;
        setMainHandItem(item: $ItemStack_): void;
        getReachDistance(): number;
        getMainHandItem(): $ItemStack;
        getHeadArmorItem(): $ItemStack;
        getLegsArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        getChestArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        setHeadArmorItem(item: $ItemStack_): void;
        getFeetArmorItem(): $ItemStack;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        getTotalMovementSpeed(): number;
        set maxHealth(value: number);
        get undead(): boolean;
        get living(): boolean;
        set movementSpeedAddition(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        self(): $EntityGetter;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelKJS}.
     */
    export type $ServerLevelKJS_ = (() => void);
    export class $ClientPacketListenerKJS {
    }
    export interface $ClientPacketListenerKJS {
        kjs$sessionData(): $KubeSessionData;
    }
    export class $TagManagerKJS {
    }
    export interface $TagManagerKJS extends $ReloadableServerResourceHolderKJS {
    }
    export class $MinecraftServerKJS {
    }
    export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS, $EntityCollectionKJS {
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        sendData(channel: string, data: $CompoundTag_): void;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getMcEntities(): $Iterable<$Entity>;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getOverworld(): $ServerLevel;
        get name(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get overworld(): $ServerLevel;
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
    }
    export class $DataSenderKJS {
    }
    export interface $DataSenderKJS {
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
    }
    export class $RecipeLikeKJS {
    }
    export interface $RecipeLikeKJS {
        getMod(): string;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        getType(): $ResourceLocation;
        getSerializer(): $RecipeSerializer<never>;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        setGroup(group: string): void;
        getSchema(): $RecipeSchema;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getOrCreateId(): $ResourceLocation;
        getGroup(): string;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        get mod(): string;
        get type(): $ResourceLocation;
        get serializer(): $RecipeSerializer<never>;
        get schema(): $RecipeSchema;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get orCreateId(): $ResourceLocation;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        self(): $EntityGetter;
        tell(message: $Component_): void;
        getName(): $Component;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        setTime(time: number): void;
        getDimension(): $ResourceLocation;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getSide(): $ScriptType;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        isOverworld(): boolean;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        get name(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        set time(value: number);
        get dimension(): $ResourceLocation;
        get side(): $ScriptType;
        get overworld(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $FluidIngredient;
        withAmount(amount: number): $SizedFluidIngredient;
        getCodec(): $Codec<never>;
        get codec(): $Codec<never>;
    }
    export class $WindowKJS$KJSScaledIconProvider extends $Record implements $Supplier<number[]> {
        target(): number;
        original(): $BufferedImage;
        get(): number[];
        constructor(original: $BufferedImage, target: number);
    }
    /**
     * Values that may be interpreted as {@link $WindowKJS$KJSScaledIconProvider}.
     */
    export type $WindowKJS$KJSScaledIconProvider_ = { target?: number, original?: $BufferedImage,  } | [target?: number, original?: $BufferedImage, ];
    export class $PlayerSelector {
        static name(name: string): $PlayerSelector;
        static wrap(o: $Object): $PlayerSelector;
        static identity(player: $ServerPlayer): $PlayerSelector;
        static uuid(uuid: $UUID_): $PlayerSelector;
        static fuzzyName(name: string): $PlayerSelector;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $PlayerSelector {
        or(fallback: $PlayerSelector_): $PlayerSelector;
        getPlayer(server: $MinecraftServer): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSelector}.
     */
    export type $PlayerSelector_ = ((server: $MinecraftServer) => $ServerPlayer);
    export class $LocalClientPlayerKJS {
    }
    export interface $LocalClientPlayerKJS extends $ClientPlayerKJS {
        notify(notification: $NotificationToastData_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        getMinecraft(): $Minecraft;
        set activePostShader(value: $ResourceLocation_);
        get self(): boolean;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get minecraft(): $Minecraft;
    }
    /**
     * Values that may be interpreted as {@link $LocalClientPlayerKJS}.
     */
    export type $LocalClientPlayerKJS_ = (() => void);
    export class $WithAttachedData<T> {
    }
    export interface $WithAttachedData<T> extends $MessageSenderKJS {
        getData(): $AttachedData<T>;
        get data(): $AttachedData<T>;
    }
    /**
     * Values that may be interpreted as {@link $WithAttachedData}.
     */
    export type $WithAttachedData_<T> = (() => $AttachedData<T>);
    export class $LazyComponentKJS {
    }
    export interface $LazyComponentKJS extends $Supplier<$Component> {
        get(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LazyComponentKJS}.
     */
    export type $LazyComponentKJS_ = (() => $Component_);
    export class $CustomIngredientKJS {
    }
    export interface $CustomIngredientKJS extends $ItemPredicate {
        getItems(): $Stream<$ItemStack>;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getStackArray(): $ItemStack[];
        kjs$asIngredient(): $Ingredient;
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        getAmount(): number;
        getFluid(): $Fluid;
        getRegistry(): $Registry<$Fluid>;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        isEmpty(): boolean;
        get amount(): number;
        get fluid(): $Fluid;
        get registry(): $Registry<$Fluid>;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get empty(): boolean;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$getInt(rule: string): number;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$set(rule: string, value: string): void;
        kjs$get(rule: string): $GameRules$Value<never>;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        getCraftingGrid(): $InventoryKJS;
        getSelectedSlot(): number;
        setSelectedSlot(index: number): void;
        boostElytraFlight(): void;
        sendInventoryUpdate(): void;
        addItemCooldown(item: $Item_, ticks: number): void;
        getOpenInventory(): $AbstractContainerMenu;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        give(item: $ItemStack_): void;
        addXP(xp: number): void;
        getXp(): number;
        setXp(xp: number): void;
        setStatusMessage(message: $Component_): void;
        spawn(): void;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        getStages(): $Stages;
        setFoodLevel(foodLevel: number): void;
        isMiningBlock(): boolean;
        setMouseItem(item: $ItemStack_): void;
        setSaturation(saturation: number): void;
        getMouseItem(): $ItemStack;
        addExhaustion(exhaustion: number): void;
        setXpLevel(levels: number): void;
        getInventory(): $InventoryKJS;
        giveInHand(item: $ItemStack_): void;
        getStats(): $PlayerStatsJS;
        addFood(hunger: number, saturation: number): void;
        getFoodLevel(): number;
        getSaturation(): number;
        addXPLevels(levels: number): void;
        getXpLevel(): number;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
        get fake(): boolean;
        set statusMessage(value: $Component_);
        get username(): string;
        get profile(): $GameProfile;
        get player(): boolean;
        get stages(): $Stages;
        get miningBlock(): boolean;
        get inventory(): $InventoryKJS;
        get stats(): $PlayerStatsJS;
        get inventoryChangeListener(): $KubeJSInventoryListener;
    }
    /**
     * Values that may be interpreted as {@link $PlayerKJS}.
     */
    export type $PlayerKJS_ = (() => void);
    export class $FireworkRocketEntityKJS {
    }
    export interface $FireworkRocketEntityKJS {
        setLifetimeKJS(lifetime: number): void;
        set lifetimeKJS(value: number);
    }
    /**
     * Values that may be interpreted as {@link $FireworkRocketEntityKJS}.
     */
    export type $FireworkRocketEntityKJS_ = ((lifetime: number) => void);
    export class $SizedFluidIngredientKJS {
    }
    export interface $SizedFluidIngredientKJS extends $Replaceable, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $SizedFluidIngredient;
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        self(): $RecipeHolder<never>;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        getSerializer(): $RecipeSerializer<never>;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        setGroup(group: string): void;
        getSchema(): $RecipeSchema;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getRecipe(): $Recipe<never>;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getOrCreateId(): $ResourceLocation;
        getGroup(): string;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        get serializer(): $RecipeSerializer<never>;
        get schema(): $RecipeSchema;
        get recipe(): $Recipe<never>;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get orCreateId(): $ResourceLocation;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
    }
    export class $MessageSenderKJS {
    }
    export interface $MessageSenderKJS {
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get displayName(): $Component;
        get name(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        self(): $AdvancementNode;
        getTitle(): $Component;
        getDisplayText(): $Component;
        getDescription(): $Component;
        addChild(a: $AdvancementNode): void;
        getDisplay(): $DisplayInfo;
        getParent(): $AdvancementNode;
        getChildren(): $Set<$AdvancementNode>;
        hasDisplay(): boolean;
        getId(): $ResourceLocation;
        get title(): $Component;
        get displayText(): $Component;
        get description(): $Component;
        get display(): $DisplayInfo;
        get parent(): $AdvancementNode;
        get children(): $Set<$AdvancementNode>;
        get id(): $ResourceLocation;
    }
    export class $BlockBuilderProvider {
    }
    export interface $BlockBuilderProvider {
        getBlockBuilder(): $BlockBuilder;
        get blockBuilder(): $BlockBuilder;
    }
    export class $RecipeInputKJS {
    }
    export interface $RecipeInputKJS {
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        getBlock(level: $Level_): $LevelBlock;
        getStackInSlot(slot: number): $ItemStack;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        isEmpty(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        setBlockBuilder(b: $BlockBuilder): void;
        getBlock(): $Block;
        setNameKey(key: string): void;
        getBlockStates(): $List<$BlockState>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        setRequiresTool(v: boolean): void;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        set blockBuilder(value: $BlockBuilder);
        get block(): $Block;
        set nameKey(value: string);
        get blockStates(): $List<$BlockState>;
        set requiresTool(value: boolean);
        set lightEmission(value: number);
        set destroySpeed(value: number);
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        getSpawnLocation(): $LevelBlock;
        setSpawnLocation(c: $LevelBlock): void;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        unlockAdvancement(id: $ResourceLocation_): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        setSelectedSlot(index: number): void;
        notify(builder: $NotificationToastData_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        setMouseItem(item: $ItemStack_): void;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        set creativeMode(value: boolean);
        set selectedSlot(value: number);
        set activePostShader(value: $ResourceLocation_);
        get serverPlayer(): boolean;
        get miningBlock(): boolean;
        set mouseItem(value: $ItemStack_);
        get stats(): $PlayerStatsJS;
        get op(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        toString(): string;
        getWebIconURL(size: number): $RelativeURL;
        asHolder(): $Holder<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        setRequiresTool(v: boolean): void;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        set requiresTool(value: boolean);
        set lightEmission(value: number);
        set destroySpeed(value: number);
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getScheduledEvents(): $ScheduledEvents;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setHasCollision(v: boolean): void;
        setIsRandomlyTicking(v: boolean): void;
        setExplosionResistance(v: number): void;
        setFriction(v: number): void;
        setJumpFactor(v: number): void;
        setSoundType(v: $SoundType_): void;
        setSpeedFactor(v: number): void;
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set hasCollision(value: boolean);
        set isRandomlyTicking(value: boolean);
        set explosionResistance(value: number);
        set friction(value: number);
        set jumpFactor(value: number);
        set soundType(value: $SoundType_);
        set speedFactor(value: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getItem(): $Item;
        setCraftingRemainder(i: $Item_): void;
        getTypeItemStackKey(): $ItemStackKey;
        getTypeData(): $Map<string, $Object>;
        setNameKey(key: string): void;
        getItemBuilder(): $ItemBuilder;
        setItemBuilder(b: $ItemBuilder): void;
        setCanRepair(repairable: boolean): void;
        getRegistry(): $Registry<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        get item(): $Item;
        set craftingRemainder(value: $Item_);
        get typeItemStackKey(): $ItemStackKey;
        get typeData(): $Map<string, $Object>;
        set nameKey(value: string);
        set canRepair(value: boolean);
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        forEach(action: $Consumer_<$Component>): void;
        self(): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        darkAqua(): $MutableComponent;
        darkRed(): $MutableComponent;
        darkPurple(): $MutableComponent;
        darkGray(): $MutableComponent;
        obfuscated(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        darkGreen(): $MutableComponent;
        lightPurple(): $MutableComponent;
        noColor(): $MutableComponent;
        insertion(s: string): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        clickOpenUrl(url: string): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        hasStyle(): boolean;
        darkBlue(): $MutableComponent;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        hasSiblings(): boolean;
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        gold(): $MutableComponent;
        green(): $MutableComponent;
        getCodec(): $Codec<never>;
        font(s: $ResourceLocation_): $MutableComponent;
        yellow(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        bold(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        black(): $MutableComponent;
        red(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        gray(): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        blue(): $MutableComponent;
        aqua(): $MutableComponent;
        white(): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        self(): $Minecraft;
        tell(message: $Component_): void;
        getTitle(): string;
        isCtrlDown(): boolean;
        getName(): $Component;
        isKeyBindDown(id: string): boolean;
        isShiftDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        isAltDown(): boolean;
        setTitle(t: string): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setCurrentScreen(gui: $Screen): void;
        getCurrentWorldName(): string;
        getKeyBindPressedTicks(id: string): number;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getCurrentScreen(): $Screen;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setActivePostShader(id: $ResourceLocation_): void;
        get ctrlDown(): boolean;
        get name(): $Component;
        get shiftDown(): boolean;
        get altDown(): boolean;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get currentWorldName(): string;
        set statusMessage(value: $Component_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set activePostShader(value: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientKJS}.
     */
    export type $MinecraftClientKJS_ = (() => void);
    export class $WindowKJS {
    }
    export interface $WindowKJS {
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
    }
    export class $RecipeManagerKJS {
    }
    export interface $RecipeManagerKJS extends $ReloadableServerResourceHolderKJS {
        kjs$getRecipeIdMap(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        kjs$replaceRecipes(byName: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
    }
    export class $ContainerKJS {
    }
    export interface $ContainerKJS extends $InventoryKJS {
        self(): $Container;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        getStackInSlot(slot: number): $ItemStack;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        setChanged(): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get mutable(): boolean;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        and(ingredient: $Ingredient_): $Ingredient;
        except(subtracted: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        self(): $Ingredient;
        withCount(count: number): $SizedIngredient;
        isWildcard(): boolean;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        containsAnyTag(): boolean;
        asStack(): $SizedIngredient;
        getStackArray(): $ItemStack[];
        getTagKey(): $TagKey<$Item>;
        asIngredient(): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getCodec(): $Codec<never>;
        get wildcard(): boolean;
        get stackArray(): $ItemStack[];
        get tagKey(): $TagKey<$Item>;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        getLifespan(): number;
        setLifespan(lifespan: number): void;
        setNoDespawn(): void;
        isItem(): this is $ItemEntity;
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        setNoPickUpDelay(): void;
        setInfinitePickUpDelay(): void;
        setDefaultPickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setTicksUntilDespawn(ticks: number): void;
    }
    export class $NoMixinException extends $IllegalStateException {
        constructor();
    }
    export class $ReloadableServerResourceHolderKJS {
    }
    export interface $ReloadableServerResourceHolderKJS {
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
    }
    export class $ItemStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemStackKJS extends $SpecialEquality, $WithCodec, $IngredientSupplierKJS, $ToStringJS, $Replaceable, $ItemComponentFunctions, $MutableDataComponentHolderFunctions, $ItemMatch, $RegistryObjectKJS<$Item> {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        withCount(c: number): this;
        withCustomName(name: $Component_): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        areItemsEqual(other: $ItemStack_): boolean;
        withLore(lines: $Component_[]): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        toItemString(): string;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        getHarvestSpeed(): number;
        getHarvestSpeed(block: $LevelBlock): number;
        getComponentString(): string;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        areComponentsEqual(other: $ItemStack_): boolean;
        getEnchantments(): $ItemEnchantments;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getBlock(): $Block;
        getTypeData(): $Map<string, $Object>;
        getId(): string;
        asIngredient(): $Ingredient;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        asHolder(): $Holder<$Item>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getIdLocation(): $ResourceLocation;
        getRegistry(): $Registry<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        toStringJS(): string;
        getCodec(): $Codec<$ItemStack>;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get key(): $ResourceKey<$Item>;
        get componentString(): string;
        get enchantments(): $ItemEnchantments;
        get mod(): string;
        get block(): $Block;
        get typeData(): $Map<string, $Object>;
        get id(): string;
        get idLocation(): $ResourceLocation;
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get codec(): $Codec<$ItemStack>;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        notify(notification: $NotificationToastData_): void;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        isMiningBlock(): boolean;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        get clientPlayer(): boolean;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
