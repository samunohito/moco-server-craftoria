import { $ServerLevelAccessor, $ClipContext$Fluid_, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity, $Mob, $Entity, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List_ } from "@package/java/util";
import { $RawAnimation } from "@package/software/bernie/geckolib/animation";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Holder_, $RegistryAccess, $NonNullList, $Holder } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ConditionalEffect_, $Enchantment, $ItemEnchantments_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnchantmentValueEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Class } from "@package/java/lang";
import { $Vec3_, $HitResult, $Vec3, $Vec2, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Quaternionf, $Vector3f } from "@package/org/joml";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/io/redspace/ironsspellbooks/api/util" {
    export class $AnimationHolder {
        static pass(): $AnimationHolder;
        static none(): $AnimationHolder;
        getForMob(): ($RawAnimation) | undefined;
        getForPlayer(): ($ResourceLocation) | undefined;
        animatesLegs: boolean;
        isPass: boolean;
        constructor(arg0: $ResourceLocation_, arg1: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        get forMob(): ($RawAnimation) | undefined;
        get forPlayer(): ($ResourceLocation) | undefined;
    }
    export class $Utils {
        static saveAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: string, arg3: $HolderLookup$Provider): $CompoundTag;
        static loadAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: string, arg3: $HolderLookup$Provider): void;
        static packRGB(arg0: $Vector3f): number;
        static getAngle(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static getAngle(arg0: $Vec2, arg1: $Vec2): number;
        /**
         * @deprecated
         */
        static shouldHealEntity(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        static shouldHealEntity(arg0: $Entity, arg1: $Entity): boolean;
        static processEnchantment(arg0: $Level_, arg1: $ResourceKey_<$Enchantment>, arg2: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, arg3: $ItemEnchantments_): number;
        static performTaunt(arg0: $LivingEntity, arg1: number, arg2: $Predicate_<$Entity>): void;
        static performTaunt(arg0: $LivingEntity, arg1: $List_<$Entity>): void;
        static getRandomScaled(arg0: number): number;
        static deconstructRGB(arg0: number): $Vector3f;
        static raycastForBlock(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: $ClipContext$Fluid_): $BlockHitResult;
        static particleTrail(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: $ParticleOptions_): void;
        static getTargetBlock(arg0: $Level_, arg1: $LivingEntity, arg2: $ClipContext$Fluid_, arg3: number): $BlockHitResult;
        static setPotion(arg0: $ItemStack_, arg1: $Holder_<$Potion>): $ItemStack;
        static getRandomVec3(arg0: number): $Vec3;
        static checkMonsterSpawnRules(arg0: $ServerLevelAccessor, arg1: $MobSpawnType_, arg2: $BlockPos_, arg3: $RandomSource): boolean;
        static moveToRelativeGroundLevel(arg0: $Level_, arg1: $Vec3_, arg2: number, arg3: number): $Vec3;
        static moveToRelativeGroundLevel(arg0: $Level_, arg1: $Vec3_, arg2: number): $Vec3;
        static getPlayerSpellbookStack(arg0: $Player): $ItemStack;
        static softCapFormula(arg0: number): number;
        static stringTruncation(arg0: number, arg1: number): string;
        static hasLineOfSight(arg0: $Level_, arg1: $Entity, arg2: $Entity, arg3: boolean): boolean;
        static hasLineOfSight(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: boolean): boolean;
        static lerp(arg0: number, arg1: $Vec3_, arg2: $Vec3_): $Vec3;
        static clampedKnockbackResistanceFactor(arg0: $Entity, arg1: number, arg2: number): number;
        static createTremorBlockWithState(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: number): void;
        static enchant(arg0: $ItemStack_, arg1: $RegistryAccess, arg2: $ResourceKey_<$Enchantment>, arg3: number): void;
        static handleSpellTeleport(arg0: $AbstractSpell_, arg1: $Entity, arg2: $Vec3_): boolean;
        static validAntiMagicTarget(arg0: $Entity): boolean;
        static preCastTargetHelper(arg0: $Level_, arg1: $LivingEntity, arg2: $MagicData, arg3: $AbstractSpell_, arg4: number, arg5: number, arg6: boolean): boolean;
        static preCastTargetHelper(arg0: $Level_, arg1: $LivingEntity, arg2: $MagicData, arg3: $AbstractSpell_, arg4: number, arg5: number, arg6: boolean, arg7: $Predicate_<$LivingEntity>): boolean;
        static preCastTargetHelper(arg0: $Level_, arg1: $LivingEntity, arg2: $MagicData, arg3: $AbstractSpell_, arg4: number, arg5: number): boolean;
        static serverSideCancelCast(arg0: $ServerPlayer): void;
        static serverSideCancelCast(arg0: $ServerPlayer, arg1: boolean): void;
        static v3d(arg0: $Vector3f): $Vec3;
        static slerp(arg0: number, arg1: $Vec3_, arg2: $Vec3_): $Vec3;
        static applyCooldownReduction(arg0: number, arg1: $LivingEntity): number;
        static rotationFromDirection(arg0: $Vec3_): $Vec2;
        static v3f(arg0: $Vec3_): $Vector3f;
        static checkEntityIntersecting(arg0: $Entity, arg1: $Vec3_, arg2: $Vec3_, arg3: number): $HitResult;
        static getEnchantmentLevel(arg0: $Level_, arg1: $ItemStack_, arg2: $ResourceKey_<$Enchantment>): number;
        static getEnchantmentLevel(arg0: $Level_, arg1: $ResourceKey_<$Enchantment>, arg2: $ItemEnchantments_): number;
        static canBeUpgraded(arg0: $ItemStack_): boolean;
        static createTremorBlock(arg0: $Level_, arg1: $BlockPos_, arg2: number): void;
        static signedMin(arg0: number, arg1: number): number;
        static isSameItemSameComponentsIgnoreDurability(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static canHitWithRaycast(arg0: $Entity): boolean;
        static doMeleeAttack(arg0: $Mob, arg1: $Entity, arg2: $DamageSource_): boolean;
        static getPositionFromEntityLookDirection(arg0: $Entity, arg1: number): $Vec3;
        static setPlayerSpellbookStack(arg0: $Player, arg1: $ItemStack_): void;
        /**
         * @deprecated
         */
        static raycastForEntity(arg0: $Level_, arg1: $Entity, arg2: $Vec3_, arg3: $Vec3_, arg4: boolean): $HitResult;
        /**
         * @deprecated
         */
        static raycastForEntity(arg0: $Level_, arg1: $Entity, arg2: number, arg3: boolean): $HitResult;
        /**
         * @deprecated
         */
        static raycastForEntity(arg0: $Level_, arg1: $Entity, arg2: $Vec3_, arg3: $Vec3_, arg4: boolean, arg5: number, arg6: $Predicate_<$Entity>): $HitResult;
        /**
         * @deprecated
         */
        static raycastForEntity(arg0: $Level_, arg1: $Entity, arg2: number, arg3: boolean, arg4: number): $HitResult;
        static getWeaponDamage(arg0: $LivingEntity): number;
        static timeFromTicks(arg0: number, arg1: number): string;
        static smoothstep(arg0: number, arg1: number, arg2: number): number;
        static canImbue(arg0: $ItemStack_): boolean;
        static handleShriving(arg0: $ItemStack_): $ItemStack;
        static doMobBreakSuffocatingBlocks(arg0: $LivingEntity, arg1: $Vec3_): void;
        static doMobBreakSuffocatingBlocks(arg0: $LivingEntity): void;
        static serverSideInitiateQuickCast(arg0: $ServerPlayer, arg1: number): boolean;
        static sendTargetedNotification(arg0: $ServerPlayer, arg1: $LivingEntity, arg2: $AbstractSpell_): void;
        static serverSideInitiateCast(arg0: $ServerPlayer): boolean;
        static rotationBetweenVectors(arg0: $Vector3f, arg1: $Vector3f): $Quaternionf;
        /**
         * @deprecated
         */
        static raycastForEntityOfClass(arg0: $Level_, arg1: $Entity, arg2: $Vec3_, arg3: $Vec3_, arg4: boolean, arg5: $Class<$Entity>): $HitResult;
        static getStackTraceAsString(): string;
        static findRelativeGroundLevel(arg0: $Level_, arg1: $Vec3_, arg2: number): number;
        static intPow(arg0: number, arg1: number): number;
        static intPow(arg0: number, arg1: number): number;
        static enchantmentFromKey(arg0: $RegistryAccess, arg1: $ResourceKey_<$Enchantment>): $Holder<$Enchantment>;
        static getServerTick(): number;
        static getTargetOld(arg0: $Level_, arg1: $Player, arg2: $ClipContext$Fluid_, arg3: number): $BlockHitResult;
        static releaseUsingHelper(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): void;
        static addFreezeTicks(arg0: $LivingEntity, arg1: number, arg2: number): void;
        static addFreezeTicks(arg0: $LivingEntity, arg1: number): void;
        static spawnInWorld(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        static getRandomVec3f(arg0: number): $Vector3f;
        static random: $RandomSource;
        static NON_BASE_ATTRIBUTES: $Predicate<$Holder<$Attribute>>;
        static ONLY_MAGIC_ATTRIBUTES: $Predicate<$Holder<$Attribute>>;
        constructor();
        static get stackTraceAsString(): string;
        static get serverTick(): number;
    }
}
