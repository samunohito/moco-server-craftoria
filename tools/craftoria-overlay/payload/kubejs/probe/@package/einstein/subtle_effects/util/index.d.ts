import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $FluidDefinition_, $FluidDefinition } from "@package/einstein/subtle_effects/data";
import { $EntityTicker } from "@package/einstein/subtle_effects/ticking/tickers/entity";
import { $EntityType, $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $ChestLidController } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/einstein/subtle_effects/util" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        getWidth(): number;
        getHeight(): number;
        subtleEffects$force(): void;
        getZ(): number;
        getX(): number;
        setGravity(arg0: number): void;
        setAlpha(arg0: number): void;
        getY(): number;
        subtleEffects$wasForced(): boolean;
        setHasPhysics(arg0: boolean): void;
        subtleEffects$shouldIgnoreCulling(): boolean;
        subtleEffects$ignoresCulling(): void;
        getAlpha(): number;
        setSizes(arg0: number, arg1: number): void;
        getOldY(): number;
        getOldX(): number;
        getOldZ(): number;
        get width(): number;
        get height(): number;
        get z(): number;
        get x(): number;
        set gravity(value: number);
        get y(): number;
        set hasPhysics(value: boolean);
        get oldY(): number;
        get oldX(): number;
        get oldZ(): number;
    }
    export class $BubbleSetter {
    }
    export interface $BubbleSetter {
        subtleEffects$setupBubble(arg0: $SpriteSet, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BubbleSetter}.
     */
    export type $BubbleSetter_ = ((arg0: $SpriteSet, arg1: boolean) => void);
    export class $EntityTickerAccessor {
    }
    export interface $EntityTickerAccessor {
        subtleEffects$getTickers(): $Int2ObjectMap<$EntityTicker<never>>;
    }
    /**
     * Values that may be interpreted as {@link $EntityTickerAccessor}.
     */
    export type $EntityTickerAccessor_ = (() => $Int2ObjectMap<$EntityTicker<never>>);
    export class $DripParticleAccessor {
    }
    export interface $DripParticleAccessor {
        subtleEffects$isSilent(): boolean;
        subtleEffects$setSilent(): void;
    }
    export class $SpawnEggItemAccessor {
    }
    export interface $SpawnEggItemAccessor {
        subtleEffects$getDefaultEntityType(): $EntityType<never>;
    }
    /**
     * Values that may be interpreted as {@link $SpawnEggItemAccessor}.
     */
    export type $SpawnEggItemAccessor_ = (() => $EntityType_<never>);
    export class $FluidDefinitionAccessor {
    }
    export interface $FluidDefinitionAccessor {
        subtleEffects$setFluidDefinition(arg0: $FluidDefinition_): void;
        subtleEffects$getFluidDefinition(): $FluidDefinition;
    }
    export class $FrustumGetter {
    }
    export interface $FrustumGetter {
        subtleEffects$getCullingFrustum(): $Frustum;
    }
    /**
     * Values that may be interpreted as {@link $FrustumGetter}.
     */
    export type $FrustumGetter_ = (() => $Frustum);
    export class $FluidLogicAccessor {
        static subtleEffects$updateFluidDefinitionHeight(arg0: $Entity): void;
        static clientUpdateInWaterStateAndDoFluidPushing(arg0: $Entity): void;
    }
    export interface $FluidLogicAccessor {
        subtleEffects$cancelNextWaterSplash(): void;
        subtleEffects$getFluidDefinitionHeight(): $Object2DoubleMap<$FluidDefinition>;
        subtleEffects$setLastTouchedFluid(arg0: $FluidDefinition_): void;
        subtleEffects$getLastTouchedFluid(): $FluidDefinition;
    }
    export class $ChestAccessor {
    }
    export interface $ChestAccessor {
        subtleEffects$getLidController(): $ChestLidController;
    }
    /**
     * Values that may be interpreted as {@link $ChestAccessor}.
     */
    export type $ChestAccessor_ = (() => $ChestLidController);
    export class $HeartParticleAccessor {
    }
    export interface $HeartParticleAccessor {
        subtleEffects$setHeart(): void;
    }
    /**
     * Values that may be interpreted as {@link $HeartParticleAccessor}.
     */
    export type $HeartParticleAccessor_ = (() => void);
}
