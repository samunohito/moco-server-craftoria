import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $Instrument, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FlowingFluid } from "@package/net/minecraft/world/level/material";
import { $SuspiciousStewEffects, $SuspiciousStewEffects_ } from "@package/net/minecraft/world/item/component";
import { $Biome$ClimateSettings, $Biome$ClimateSettings_ } from "@package/net/minecraft/world/level/biome";
import { $EquipmentSlot, $LivingEntity, $EquipmentSlot_, $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $Map, $UUID_, $List_ } from "@package/java/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $RegistryOps$RegistryInfoLookup } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MapDecoration, $MapBanner } from "@package/net/minecraft/world/level/saveddata/maps";

declare module "@package/de/dafuqs/spectrum/mixin/accessors" {
    export class $CachedRegistryInfoGetterAccessor {
    }
    export interface $CachedRegistryInfoGetterAccessor {
        getLookupProvider(): $HolderLookup$Provider;
        get lookupProvider(): $HolderLookup$Provider;
    }
    /**
     * Values that may be interpreted as {@link $CachedRegistryInfoGetterAccessor}.
     */
    export type $CachedRegistryInfoGetterAccessor_ = (() => $HolderLookup$Provider);
    export class $MooshroomEntityAccessor {
    }
    export interface $MooshroomEntityAccessor {
        getStewEffects(): $SuspiciousStewEffects;
        setStewEffects(arg0: $SuspiciousStewEffects_): void;
    }
    export class $StatusEffectInstanceAccessor {
    }
    export interface $StatusEffectInstanceAccessor {
        setAmplifier(arg0: number): void;
        setDuration(arg0: number): void;
        set amplifier(value: number);
        set duration(value: number);
    }
    export class $RegistryOpsAccessor {
    }
    export interface $RegistryOpsAccessor {
        getLookupProvider(): $RegistryOps$RegistryInfoLookup;
        get lookupProvider(): $RegistryOps$RegistryInfoLookup;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOpsAccessor}.
     */
    export type $RegistryOpsAccessor_ = (() => $RegistryOps$RegistryInfoLookup);
    export class $PersistentProjectileEntityAccessor {
    }
    export interface $PersistentProjectileEntityAccessor {
        getLife(): number;
        setLife(arg0: number): void;
    }
    export class $ItemEntityAccessor {
    }
    export interface $ItemEntityAccessor {
        getPickupDelay(): number;
        get pickupDelay(): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemEntityAccessor}.
     */
    export type $ItemEntityAccessor_ = (() => number);
    export class $MapStateAccessor {
    }
    export interface $MapStateAccessor {
        getBannerMarkers(): $Map<string, $MapBanner>;
        getDecorations(): $Map<string, $MapDecoration>;
        invokeRemoveDecoration(arg0: string): void;
        getTrackingPosition(): boolean;
        getTrackedDecorationCount(): number;
        setTrackedDecorationCount(arg0: number): void;
        invokeSetDecorationsDirty(): void;
        getUnlimitedTracking(): boolean;
        get bannerMarkers(): $Map<string, $MapBanner>;
        get decorations(): $Map<string, $MapDecoration>;
        get trackingPosition(): boolean;
        get unlimitedTracking(): boolean;
    }
    export class $WorldRendererAccessor {
        static invokeRenderShape(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $VoxelShape, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    export interface $WorldRendererAccessor {
    }
    export class $ExplosionAccessor {
    }
    export interface $ExplosionAccessor {
        getRadius(): number;
        get radius(): number;
    }
    /**
     * Values that may be interpreted as {@link $ExplosionAccessor}.
     */
    export type $ExplosionAccessor_ = (() => number);
    export class $ProjectileAttackGoalAccessor {
    }
    export interface $ProjectileAttackGoalAccessor {
        getProjectileAttackTarget(): $LivingEntity;
        get projectileAttackTarget(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $ProjectileAttackGoalAccessor}.
     */
    export type $ProjectileAttackGoalAccessor_ = (() => $LivingEntity);
    export class $GoatHornItemAccessor {
    }
    export interface $GoatHornItemAccessor {
        invokeGetInstrument(arg0: $ItemStack_): ($Holder<$Instrument>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $GoatHornItemAccessor}.
     */
    export type $GoatHornItemAccessor_ = ((arg0: $ItemStack) => ($Holder_<$Instrument>) | undefined);
    export class $FluidBlockAccessor {
    }
    export interface $FluidBlockAccessor {
        getFlowableFluid(): $FlowingFluid;
        get flowableFluid(): $FlowingFluid;
    }
    /**
     * Values that may be interpreted as {@link $FluidBlockAccessor}.
     */
    export type $FluidBlockAccessor_ = (() => $FlowingFluid);
    export class $DensityCapAccessor {
    }
    export interface $DensityCapAccessor {
        getCounts(): $Object2IntMap<$MobCategory>;
        get counts(): $Object2IntMap<$MobCategory>;
    }
    /**
     * Values that may be interpreted as {@link $DensityCapAccessor}.
     */
    export type $DensityCapAccessor_ = (() => $Object2IntMap<$MobCategory_>);
    export class $SlimeEntityAccessor {
    }
    export interface $SlimeEntityAccessor {
        invokeSetSize(arg0: number, arg1: boolean): void;
        invokeGetSoundVolume(): number;
        invokeGetSquishSound(): $SoundEvent;
        invokeGetParticleType(): $ParticleOptions;
    }
    export class $BundleContentsComponentBuilderAccessor {
    }
    export interface $BundleContentsComponentBuilderAccessor {
        getItems(): $List<$ItemStack>;
        get items(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $BundleContentsComponentBuilderAccessor}.
     */
    export type $BundleContentsComponentBuilderAccessor_ = (() => $List_<$ItemStack_>);
    export class $FoxEntityAccessor {
    }
    export interface $FoxEntityAccessor {
        invokeAddTrustedUUID(arg0: $UUID_): void;
    }
    /**
     * Values that may be interpreted as {@link $FoxEntityAccessor}.
     */
    export type $FoxEntityAccessor_ = ((arg0: $UUID) => void);
    export class $SimpleCriterionAccessor {
    }
    export interface $SimpleCriterionAccessor {
        spectrum$invokeTrigger(arg0: $ServerPlayer, arg1: $Predicate_<any>): void;
    }
    /**
     * Values that may be interpreted as {@link $SimpleCriterionAccessor}.
     */
    export type $SimpleCriterionAccessor_ = ((arg0: $ServerPlayer, arg1: $Predicate<any>) => void);
    export class $BundleContentsComponentAccessor {
        static invokeGetWeight(arg0: $ItemStack_): $Fraction;
    }
    export interface $BundleContentsComponentAccessor {
    }
    export class $TridentEntityAccessor {
    }
    export interface $TridentEntityAccessor {
        spectrum$setDealtDamage(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $TridentEntityAccessor}.
     */
    export type $TridentEntityAccessor_ = ((arg0: boolean) => void);
    export class $ExperienceDroppingBlockAccessor {
    }
    export interface $ExperienceDroppingBlockAccessor {
        getXpRange(): $IntProvider;
        get xpRange(): $IntProvider;
    }
    /**
     * Values that may be interpreted as {@link $ExperienceDroppingBlockAccessor}.
     */
    export type $ExperienceDroppingBlockAccessor_ = (() => $IntProvider_);
    export class $BiomeAccessor {
    }
    export interface $BiomeAccessor {
        getClimateSettings(): $Biome$ClimateSettings;
        get climateSettings(): $Biome$ClimateSettings;
    }
    /**
     * Values that may be interpreted as {@link $BiomeAccessor}.
     */
    export type $BiomeAccessor_ = (() => $Biome$ClimateSettings_);
    export class $MobEntityAccessor {
    }
    export interface $MobEntityAccessor {
        invokeGetEquipmentDropChance(arg0: $EquipmentSlot_): number;
    }
    /**
     * Values that may be interpreted as {@link $MobEntityAccessor}.
     */
    export type $MobEntityAccessor_ = ((arg0: $EquipmentSlot) => number);
}
