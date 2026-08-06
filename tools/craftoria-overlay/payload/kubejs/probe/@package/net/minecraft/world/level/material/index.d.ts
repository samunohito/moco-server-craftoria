import { $MapCodec_, $Codec } from "@package/com/mojang/serialization";
import { $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FlowingFluidAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map$Entry } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderSet_, $Holder, $BlockPos_, $Direction_, $Holder$Reference, $Registry, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Reference2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $IFluidStateExtension, $IFluidExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $FlowingFluidAccessor as $FlowingFluidAccessor$1 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks";
import { $FluidDefinition_, $FluidDefinition } from "@package/einstein/subtle_effects/data";
import { $StateDefinition, $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $IFlowableFluid } from "@package/com/ishland/c2me/base/mixin/access";
import { $Explosion, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $FluidDefinitionAccessor } from "@package/einstein/subtle_effects/util";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $InjectedFluidExtension } from "@package/dev/architectury/extensions/injected";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/material" {
    export class $EmptyFluid extends $Fluid {
        getFlow(blockReader: $BlockGetter, pos: $BlockPos_, fluidState: $FluidState): $Vec3;
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        constructor();
    }
    export class $LavaFluid$Flowing extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export interface $Fluid extends RegistryMarked<RegistryTypes.FluidTag, RegistryTypes.Fluid> {}
    export class $LavaFluid$Source extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $WaterFluid extends $FlowingFluid {
        createLegacyBlock(state: $FluidState): $BlockState;
        animateTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        getDropOff(level: $LevelReader): number;
        getSlopeFindDistance(level: $LevelReader): number;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
        get dripParticle(): $ParticleOptions;
    }
    export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
        static values(): $MapColor$Brightness[];
        static valueOf(arg0: string): $MapColor$Brightness;
        static byId(id: number): $MapColor$Brightness;
        static LOWEST: $MapColor$Brightness;
        static HIGH: $MapColor$Brightness;
        static LOW: $MapColor$Brightness;
        modifier: number;
        id: number;
        static NORMAL: $MapColor$Brightness;
    }
    /**
     * Values that may be interpreted as {@link $MapColor$Brightness}.
     */
    export type $MapColor$Brightness_ = "low" | "normal" | "high" | "lowest";
    export class $Fluid implements $IFluidExtension, $FluidDefinitionAccessor, $InjectedFluidExtension, $FluidKJS {
        /**
         * @deprecated
         */
        is(tag: $TagKey_<$Fluid>): boolean;
        getShape(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getHeight(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): number;
        defaultFluidState(): $FluidState;
        getKey(): $ResourceKey<any>;
        subtleEffects$setFluidDefinition(arg0: $FluidDefinition_): void;
        getAmount(state: $FluidState): number;
        getBucket(): $Item;
        getOwnHeight(state: $FluidState): number;
        isSame(fluid: $Fluid_): boolean;
        getStateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        /**
         * Returns the type of this fluid.
         * 
         * Important: This MUST be overridden on your fluid, otherwise an
         * error will be thrown.
         */
        getFluidType(): $FluidType;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Fluid>;
        getId(): string;
        subtleEffects$getFluidDefinition(): $FluidDefinition;
        isSource(state: $FluidState): boolean;
        getTickDelay(level: $LevelReader): number;
        getPickupSound(): ($SoundEvent) | undefined;
        asHolder(): $Holder$Reference<any>;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(state: $FluidState, entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(state: $FluidState, level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(state: $FluidState, boat: $Boat): boolean;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        arch$holder(): $Holder<$Fluid>;
        getAmount(): number;
        getFluid(): $Fluid;
        getRegistry(): $Registry<$Fluid>;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        isEmpty(): boolean;
        arch$registryName(): $ResourceLocation;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getIdLocation(): $ResourceLocation;
        copy(amount: number): $FluidLike;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        get key(): $ResourceKey<any>;
        get bucket(): $Item;
        get stateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        get fluidType(): $FluidType;
        get id(): string;
        get pickupSound(): ($SoundEvent) | undefined;
        get fluid(): $Fluid;
        get registry(): $Registry<$Fluid>;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get empty(): boolean;
        get mod(): string;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get idLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $Fluid}.
     */
    export type $Fluid_ = RegistryTypes.Fluid;
    export class $MapColor {
        getPackedId(brightness: $MapColor$Brightness_): number;
        calculateRGBColor(brightness: $MapColor$Brightness_): number;
        static getColorFromPackedId(packedId: number): number;
        static byId(id: number): $MapColor;
        col: number;
        static WOOD: $MapColor;
        static CRIMSON_STEM: $MapColor;
        static TERRACOTTA_LIGHT_BLUE: $MapColor;
        static PODZOL: $MapColor;
        static WARPED_WART_BLOCK: $MapColor;
        static COLOR_LIGHT_GREEN: $MapColor;
        static COLOR_BLACK: $MapColor;
        static TERRACOTTA_GREEN: $MapColor;
        static WARPED_NYLIUM: $MapColor;
        static FIRE: $MapColor;
        static GRASS: $MapColor;
        static TERRACOTTA_ORANGE: $MapColor;
        static GLOW_LICHEN: $MapColor;
        static COLOR_CYAN: $MapColor;
        id: number;
        static NONE: $MapColor;
        static WOOL: $MapColor;
        static QUARTZ: $MapColor;
        static WATER: $MapColor;
        static TERRACOTTA_YELLOW: $MapColor;
        static SAND: $MapColor;
        static SNOW: $MapColor;
        static DIRT: $MapColor;
        static LAPIS: $MapColor;
        static DEEPSLATE: $MapColor;
        static COLOR_YELLOW: $MapColor;
        static COLOR_LIGHT_GRAY: $MapColor;
        static TERRACOTTA_LIGHT_GRAY: $MapColor;
        static CRIMSON_NYLIUM: $MapColor;
        static TERRACOTTA_BLUE: $MapColor;
        static WARPED_HYPHAE: $MapColor;
        static METAL: $MapColor;
        static TERRACOTTA_GRAY: $MapColor;
        static WARPED_STEM: $MapColor;
        static PLANT: $MapColor;
        static GOLD: $MapColor;
        static DIAMOND: $MapColor;
        static COLOR_RED: $MapColor;
        static MATERIAL_COLORS: $MapColor[];
        static COLOR_ORANGE: $MapColor;
        static COLOR_BLUE: $MapColor;
        static NETHER: $MapColor;
        static TERRACOTTA_BLACK: $MapColor;
        static TERRACOTTA_PINK: $MapColor;
        static COLOR_MAGENTA: $MapColor;
        static TERRACOTTA_WHITE: $MapColor;
        static COLOR_GRAY: $MapColor;
        static COLOR_LIGHT_BLUE: $MapColor;
        static TERRACOTTA_LIGHT_GREEN: $MapColor;
        static COLOR_GREEN: $MapColor;
        static COLOR_PURPLE: $MapColor;
        static EMERALD: $MapColor;
        static ICE: $MapColor;
        static COLOR_BROWN: $MapColor;
        static TERRACOTTA_PURPLE: $MapColor;
        static TERRACOTTA_BROWN: $MapColor;
        static TERRACOTTA_MAGENTA: $MapColor;
        static RAW_IRON: $MapColor;
        static COLOR_PINK: $MapColor;
        static TERRACOTTA_RED: $MapColor;
        static CRIMSON_HYPHAE: $MapColor;
        static STONE: $MapColor;
        static TERRACOTTA_CYAN: $MapColor;
        static CLAY: $MapColor;
        constructor(id: number, col: number);
    }
    export class $WaterFluid$Source extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $FlowingFluid extends $Fluid implements $FlowingFluidAccessor$1, $FlowingFluidAccessor, $IFlowableFluid {
        getSource(): $Fluid;
        getSource(falling: boolean): $FluidState;
        canHoldFluid(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        tick(level: $Level_, pos: $BlockPos_, state: $FluidState): void;
        getFlow(blockReader: $BlockGetter, pos: $BlockPos_, fluidState: $FluidState): $Vec3;
        getFlowing(level: number, falling: boolean): $FluidState;
        getFlowing(): $Fluid;
        invokeReceivesFlow(direction: $Direction_, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, spreadPos: $BlockPos_, spreadState: $BlockState_): boolean;
        /**
         * Returns the number of immediately adjacent source blocks of the same fluid that lie on the horizontal plane.
         */
        bumblezone$callSourceNeighborCount(level: $LevelReader, pos: $BlockPos_): number;
        bumblezone$callCanPassThroughWall(direction: $Direction_, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, spreadPos: $BlockPos_, spreadState: $BlockState_): boolean;
        bumblezone$callSpreadToSides(level: $Level_, pos: $BlockPos_, fluidState: $FluidState, blockState: $BlockState_): void;
        invokeGetLevelDecreasePerBlock(level: $LevelReader): number;
        create$getNewLiquid(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FluidState;
        invokeIsMatchingAndStill(state: $FluidState): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $PushReaction extends $Enum<$PushReaction> {
        static values(): $PushReaction[];
        static valueOf(arg0: string): $PushReaction;
        static DESTROY: $PushReaction;
        static BLOCK: $PushReaction;
        static PUSH_ONLY: $PushReaction;
        static IGNORE: $PushReaction;
        static NORMAL: $PushReaction;
    }
    /**
     * Values that may be interpreted as {@link $PushReaction}.
     */
    export type $PushReaction_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
    export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IFluidStateExtension {
        isEmpty(): boolean;
        holder(): $Holder<$Fluid>;
        getType(): $Fluid;
        is(fluid: $Fluid_): boolean;
        is(fluids: $HolderSet_<$Fluid>): boolean;
        is(tag: $TagKey_<$Fluid>): boolean;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getHeight(level: $BlockGetter, pos: $BlockPos_): number;
        createLegacyBlock(): $BlockState;
        tick(level: $Level_, pos: $BlockPos_): void;
        getAmount(): number;
        getFlow(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        getOwnHeight(): number;
        randomTick(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        animateTick(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        getTags(): $Stream<$TagKey<$Fluid>>;
        shouldRenderBackwardUpFace(level: $BlockGetter, pos: $BlockPos_): boolean;
        isRandomlyTicking(): boolean;
        /**
         * @deprecated
         */
        getExplosionResistance(): number;
        isSource(): boolean;
        isSourceOfType(fluid: $Fluid_): boolean;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(level: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns the type of this fluid.
         */
        getFluidType(): $FluidType;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        canExtinguish(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(boat: $Boat): boolean;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        static PROPERTIES_TAG: string;
        static AMOUNT_MAX: number;
        static CODEC: $Codec<$FluidState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static AMOUNT_FULL: number;
        static NAME_TAG: string;
        constructor(owner: $Fluid_, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$FluidState>);
        get empty(): boolean;
        get type(): $Fluid;
        get amount(): number;
        get ownHeight(): number;
        get tags(): $Stream<$TagKey<$Fluid>>;
        get randomlyTicking(): boolean;
        get source(): boolean;
        get dripParticle(): $ParticleOptions;
        get fluidType(): $FluidType;
    }
    export class $WaterFluid$Flowing extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $Fluids {
        static LAVA: $FlowingFluid;
        static FLOWING_WATER: $FlowingFluid;
        static EMPTY: $Fluid;
        static FLOWING_LAVA: $FlowingFluid;
        static WATER: $FlowingFluid;
        constructor();
    }
    export class $LavaFluid extends $FlowingFluid {
        getSpreadDelay(level: $Level_, pos: $BlockPos_, currentState: $FluidState, newState: $FluidState): number;
        createLegacyBlock(state: $FluidState): $BlockState;
        randomTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        animateTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        getDropOff(level: $LevelReader): number;
        getSlopeFindDistance(level: $LevelReader): number;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
        get dripParticle(): $ParticleOptions;
    }
    export class $FogType extends $Enum<$FogType> {
        static values(): $FogType[];
        static valueOf(arg0: string): $FogType;
        static LAVA: $FogType;
        static POWDER_SNOW: $FogType;
        static NONE: $FogType;
        static WATER: $FogType;
    }
    /**
     * Values that may be interpreted as {@link $FogType}.
     */
    export type $FogType_ = "lava" | "water" | "powder_snow" | "none";
}
