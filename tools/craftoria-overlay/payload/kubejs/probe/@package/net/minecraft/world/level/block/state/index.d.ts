import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $BlockAccessor as $BlockAccessor$1 } from "@package/dev/imb11/sounds/mixin/accessors";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockAccessor } from "@package/dev/imb11/sounds/util";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $BlockPropertiesAccessor } from "@package/com/supermartijn642/core/mixin";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BlockSettingsLock } from "@package/de/cristelknight/doapi/neoforge/terraform/sign";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Block_, $Rotation_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $BlockStateFTBC } from "@package/dev/ftb/mods/ftbchunks/core";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Map, $Map$Entry, $List, $Map_, $Collection } from "@package/java/util";
import { $BlockBehaviourAccessor } from "@package/com/hollingsworth/arsnouveau/common/mixin";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $IState } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockBehaviourInvoker } from "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$2 } from "@package/com/yungnickyoung/minecraft/bettermineshafts/mixin";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $IBlockState, $IModelHoldingBlockState } from "@package/org/embeddedt/modernfix/duck";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StateCache, $IStateCacheAccessor } from "@package/xfacthd/framedblocks/api/block/cache";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $AccessorStateDefinitionBuilder } from "@package/xfacthd/framedblocks/mixin";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        getProperty(propertyName: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getOwner(): O;
        any(): S;
        getPossibleStates(): $ImmutableList<S>;
        static appendPropertyCodec<S extends $StateHolder<never, S>, T extends $Comparable<T>>(propertyCodec: $MapCodec_<S>, holderSupplier: $Supplier_<S>, value: string, property: $Property<T>): $MapCodec<S>;
        owner: O;
        get properties(): $Collection<$Property<never>>;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
        getCollisionShape(): $VoxelShape;
        isFaceSturdy(direction: $Direction_, supportType: $SupportType_): boolean;
        setCollisionShape(arg0: $VoxelShape): void;
        getFaceSturdy(): boolean[];
        setFaceSturdy(arg0: boolean[]): void;
        setOcclusionShapes(arg0: $VoxelShape[]): void;
        getOcclusionShapes(): $VoxelShape[];
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> implements $AccessorStateDefinitionBuilder {
        add(...properties: $Property<never>[]): $StateDefinition$Builder<O, S>;
        create(stateValueFunction: $Function_<O, S>, stateFunction: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        framedblocks$getProperties(): $Map<string, $Property<never>>;
        constructor(owner: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourInvoker, $BlockBehaviourAccessor$2, $BlockBehaviourAccessor, $BlockBehaviourKJS, $BlockAccessor, $BlockAccessor$1, $BlockBehaviourAccessor$1 {
        properties(): $BlockBehaviour$Properties;
        sounds$prepareTagPair(arg0: $ResourceLocation_): void;
        modify$hhj000$spectrum$applyBoomStackAfterBreak(arg0: $ItemStack_): $ItemStack;
        asItem(): $Item;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        setHasCollision(arg0: boolean): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setExplosionResistance(arg0: number): void;
        requiredFeatures(): $FeatureFlagSet;
        /**
         * @deprecated
         */
        getSoundType(state: $BlockState_): $SoundType;
        getLootTable(): $ResourceKey<$LootTable>;
        static simpleCodec<B extends $Block>(factory: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        modify$hhj000$spectrum$applyBoomStack(arg0: $Object): $Object;
        handler$kbp000$sounds$$manageCustomSounds(arg0: $BlockState_, arg1: $CallbackInfoReturnable<any>): void;
        setFriction(arg0: number): void;
        setJumpFactor(arg0: number): void;
        setSoundType(arg0: $SoundType_): void;
        setSpeedFactor(arg0: number): void;
        defaultMapColor(): $MapColor;
        defaultDestroyTime(): number;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        getKey(): $ResourceKey<$Block>;
        getTypeData(): $Map<string, $Object>;
        getId(): string;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        invokeGetFluidState(state: $BlockState_): $FluidState;
        invokeIsRandomlyTicking(state: $BlockState_): boolean;
        callCanSurvive(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        invokeGetSoundType(state: $BlockState_): $SoundType;
        create$getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        callUseItemOn(stack: $ItemStack_, state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
        set randomTickCallback(value: $Consumer_<any>);
        set isRandomlyTicking(value: boolean);
        set explosionResistance(value: number);
        get lootTable(): $ResourceKey<$LootTable>;
        set friction(value: number);
        set jumpFactor(value: number);
        set speedFactor(value: number);
        get key(): $ResourceKey<$Block>;
        get typeData(): $Map<string, $Object>;
        get id(): string;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get mod(): string;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateFTBC {
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        getFTBCIsWater(): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        isScaffolding(arg0: $LivingEntity): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        supportsExternalFaceHiding(): boolean;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        hasDynamicLightEmission(): boolean;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        isStickyBlock(): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        isSlimeBlock(): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        static PROPERTIES_TAG: string;
        static CODEC: $Codec<$BlockState>;
        destroySpeed: number;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get FTBCIsWater(): boolean;
        get empty(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
        get stickyBlock(): boolean;
        get slimeBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(owner: O, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $IModelHoldingBlockState, $BlockStateKJS, $IStateCacheAccessor {
        is(tag: $TagKey_<$Block>, predicate: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        is(holder: $HolderSet_<$Block>): boolean;
        is(tag: $TagKey_<$Block>): boolean;
        is(block: $Holder_<$Block>): boolean;
        is(block: $Block_): boolean;
        is(block: $ResourceKey_<$Block>): boolean;
        getOffset(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        /**
         * @deprecated
         * @return the blockstate with the given rotation. If inapplicable, returns itself.
         */
        rotate(rotation: $Rotation_): $BlockState;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        initCache(): void;
        /**
         * @return the blockstate mirrored in the given way. If inapplicable, returns itself.
         */
        mirror(mirror: $Mirror_): $BlockState;
        clearCache(): void;
        getBlock(): $Block;
        getSeed(pos: $BlockPos_): number;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        getLightBlock(level: $BlockGetter, pos: $BlockPos_): number;
        tick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        isAir(): boolean;
        attack(level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, level: $Level_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        canSurvive(level: $LevelReader, pos: $BlockPos_): boolean;
        onRemove(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        shouldSpawnTerrainParticles(): boolean;
        handler$eij000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        handler$gdo000$sereneseasons$onRandomTick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $RandomSource, arg3: $CallbackInfo): void;
        handler$zih000$iris$getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        handler$hah000$ars_nouveau$getArsSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        localvar$hhd000$spectrum$preventXPDropsWhenUsingResonance(arg0: boolean, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $ItemStack_): boolean;
        handler$joi000$modern_industrialization$getDestroyProgress(arg0: $Player, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CallbackInfoReturnable<any>): void;
        entityInside(level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        onExplosionHit(level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        isSuffocating(level: $BlockGetter, pos: $BlockPos_): boolean;
        randomTick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getDrops(lootParams: $LootParams$Builder): $List<$ItemStack>;
        onPlace(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        getTicker<T extends $BlockEntity>(level: $Level_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        canOcclude(): boolean;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        getRenderShape(): $RenderShape;
        hasBlockEntity(): boolean;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getDestroySpeed(level: $BlockGetter, pos: $BlockPos_): number;
        getFluidState(): $FluidState;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        isCollisionShapeFullBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasAnalogOutputSignal(): boolean;
        isRedstoneConductor(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * @return true if the collision box of this state covers the entire upper face of the blockspace
         */
        entityCanStandOnFace(level: $BlockGetter, pos: $BlockPos_, entity: $Entity, face: $Direction_): boolean;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        getSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        /**
         * @deprecated
         */
        liquid(): boolean;
        getDirectSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        isSignalSource(): boolean;
        getTags(): $Stream<$TagKey<$Block>>;
        modifyReturnValue$bef000$supplementaries$supp$modifyPlanterOffset(arg0: $Vec3_, arg1: $BlockGetter, arg2: $BlockPos_): $Vec3;
        handler$hoe000$fruitsdelight$getCollisionShape$passableLeave(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CollisionContext, arg3: $CallbackInfoReturnable<any>): void;
        handler$kan001$extended_industrialization$getDestroyProgress(arg0: $Player, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CallbackInfoReturnable<any>): void;
        getBlockHolder(): $Holder<$Block>;
        hasPostProcess(level: $BlockGetter, pos: $BlockPos_): boolean;
        spawnAfterBreak(level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        useWithoutItem(level: $Level_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        canBeReplaced(fluid: $Fluid_): boolean;
        canBeReplaced(): boolean;
        canBeReplaced(useContext: $BlockPlaceContext): boolean;
        isSolidRender(level: $BlockGetter, pos: $BlockPos_): boolean;
        isPathfindable(arg0: $PathComputationType_): boolean;
        getMenuProvider(level: $Level_, pos: $BlockPos_): $MenuProvider;
        onProjectileHit(level: $Level_, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        hasOffsetFunction(): boolean;
        mfix$getModel(): $BakedModel;
        mfix$setModel(arg0: $BakedModel): void;
        emissiveRendering(level: $BlockGetter, pos: $BlockPos_): boolean;
        getDestroyProgress(player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        entityCanStandOn(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        updateShape(direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        getMapColor(level: $BlockGetter, pos: $BlockPos_): $MapColor;
        isCacheInvalid(): boolean;
        isValidSpawn(level: $BlockGetter, pos: $BlockPos_, entityType: $EntityType_<never>): boolean;
        getShadeBrightness(level: $BlockGetter, pos: $BlockPos_): number;
        isViewBlocking(level: $BlockGetter, pos: $BlockPos_): boolean;
        getOcclusionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        skipRendering(state: $BlockState_, face: $Direction_): boolean;
        isRandomlyTicking(): boolean;
        handleNeighborChanged(level: $Level_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        getAnalogOutputSignal(level: $Level_, pos: $BlockPos_): number;
        propagatesSkylightDown(level: $BlockGetter, pos: $BlockPos_): boolean;
        useShapeForLightOcclusion(): boolean;
        hasLargeCollisionShape(): boolean;
        getBlockSupportShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getFaceOcclusionShape(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): $VoxelShape;
        handler$gib000$integrateddynamics$getSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        handler$gib000$integrateddynamics$getDirectSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        handler$edo000$xycraft_core$xycraft$onPlace(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $CallbackInfo): void;
        handler$edo000$xycraft_core$xycraft$onRemove(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $CallbackInfo): void;
        handler$eij000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        triggerEvent(level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        requiresCorrectToolForDrops(): boolean;
        getVisualShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        getPistonPushReaction(): $PushReaction;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, face: $Direction_, supportType: $SupportType_): boolean;
        framedblocks$getCache(): $StateCache;
        framedblocks$initCache(arg0: $StateCache): void;
        setRequiresTool(arg0: boolean): void;
        setLightEmission(arg0: number): void;
        setDestroySpeed(arg0: number): void;
        getInteractionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        instrument(): $NoteBlockInstrument;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        toString(): string;
        getWebIconURL(size: number): $RelativeURL;
        asHolder(): $Holder<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        static PROPERTIES_TAG: string;
        destroySpeed: number;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        get block(): $Block;
        get air(): boolean;
        get solid(): boolean;
        get renderShape(): $RenderShape;
        get fluidState(): $FluidState;
        get soundType(): $SoundType;
        get signalSource(): boolean;
        get blockHolder(): $Holder<$Block>;
        get cacheInvalid(): boolean;
        get randomlyTicking(): boolean;
        get pistonPushReaction(): $PushReaction;
        set requiresTool(value: boolean);
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $BlockSettingsLock, $BlockPropertiesAccessor {
        static of(): $BlockBehaviour$Properties;
        strength(destroyTime: number, explosionResistance: number): $BlockBehaviour$Properties;
        strength(destroyTime: number): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        terraform$lock(): void;
        randomTicks(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        sound(soundType: $SoundType_): $BlockBehaviour$Properties;
        isSuffocating(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        explosionResistance(destroyTime: number): $BlockBehaviour$Properties;
        mapColor(mapColor: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        mapColor(mapColor: $MapColor): $BlockBehaviour$Properties;
        mapColor(mapColor: $DyeColor_): $BlockBehaviour$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $BlockBehaviour$Properties;
        isRedstoneConductor(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        speedFactor(destroyTime: number): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        jumpFactor(destroyTime: number): $BlockBehaviour$Properties;
        hasPostProcess(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        emissiveRendering(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        isValidSpawn(isValidSpawn: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        isViewBlocking(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        pushReaction(pushReaction: $PushReaction_): $BlockBehaviour$Properties;
        destroyTime(destroyTime: number): $BlockBehaviour$Properties;
        friction(destroyTime: number): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(block: $Block_): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        offsetType(offsetType: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        lightLevel(lightEmission: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        instrument(instrument: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        getLootTableSupplier(): $Supplier<$ResourceKey<$LootTable>>;
        setLootTableSupplier(supplier: $Supplier_<$ResourceKey<$LootTable>>): void;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, value: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $FastMapStateHolder<any>, $StateHolderAccessor<any, any>, $IState<any> {
        /**
         * @return the value of the given Property for this state
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * @return an unmodifiable collection of all possible properties.
         */
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        getNeighborTable(): $Table<any, any, any>;
        cycle<T extends $Comparable<T>>(property: $Property<T>): $Object;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        redirect$eif000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        getStateMap(): $FastMap<any>;
        trySetValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        getStateIndex(): number;
        setStateMap(arg0: $FastMap<any>): void;
        populateNeighbours(possibleStateMap: $Map_<any, any>): void;
        setStateIndex(arg0: number): void;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        getOwner(): $Object;
        getCodec(): $MapCodec<$Object>;
        static PROPERTIES_TAG: string;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        get properties(): $Collection<$Property<never>>;
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        get owner(): $Object;
        get codec(): $MapCodec<$Object>;
    }
}
