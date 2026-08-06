import { $Level_, $Level, $SpawnData } from "@package/net/minecraft/world/level";
import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ShapedRecipePattern } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Set_, $List, $List_, $Set } from "@package/java/util";
import { $LockCode, $LockCode_ } from "@package/net/minecraft/world";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart$Type_, $Boat, $AbstractMinecart$Type } from "@package/net/minecraft/world/entity/vehicle";

declare module "@package/me/desht/pneumaticcraft/mixin/accessors" {
    export class $ServerPlayerGameModeAccess {
    }
    export interface $ServerPlayerGameModeAccess {
        isDestroyingBlock(): boolean;
        hasDelayedDestroy(): boolean;
        get destroyingBlock(): boolean;
    }
    export class $TooltipAccess {
    }
    export interface $TooltipAccess {
        getMessage(): $Component;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $TooltipAccess}.
     */
    export type $TooltipAccess_ = (() => $Component_);
    export class $BaseContainerBlockEntityAccess {
    }
    export interface $BaseContainerBlockEntityAccess {
        getLockKey(): $LockCode;
        get lockKey(): $LockCode;
    }
    /**
     * Values that may be interpreted as {@link $BaseContainerBlockEntityAccess}.
     */
    export type $BaseContainerBlockEntityAccess_ = (() => $LockCode_);
    export class $WitchAccess {
    }
    export interface $WitchAccess {
        setUsingTime(arg0: number): void;
        set usingTime(value: number);
    }
    /**
     * Values that may be interpreted as {@link $WitchAccess}.
     */
    export type $WitchAccess_ = ((arg0: number) => void);
    export class $BaseSpawnerAccess {
    }
    export interface $BaseSpawnerAccess {
        setRequiredPlayerRange(arg0: number): void;
        getRequiredPlayerRange(): number;
        getSpin(): number;
        setOSpin(arg0: number): void;
        getSpawnDelay(): number;
        setSpawnDelay(arg0: number): void;
        getNextSpawnData(): $SpawnData;
        get spin(): number;
        set OSpin(value: number);
        get nextSpawnData(): $SpawnData;
    }
    export class $BoatItemAccess {
    }
    export interface $BoatItemAccess {
        invokeGetBoat(arg0: $Level_, arg1: $HitResult, arg2: $ItemStack_, arg3: $Player): $Boat;
    }
    /**
     * Values that may be interpreted as {@link $BoatItemAccess}.
     */
    export type $BoatItemAccess_ = ((arg0: $Level, arg1: $HitResult, arg2: $ItemStack, arg3: $Player) => $Boat);
    export class $ShulkerAccess {
    }
    export interface $ShulkerAccess {
        callSetRawPeekAmount(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerAccess}.
     */
    export type $ShulkerAccess_ = ((arg0: number) => void);
    export class $BlockEntityTypeAccess {
    }
    export interface $BlockEntityTypeAccess {
        getValidBlocks(): $Set<$Block>;
        get validBlocks(): $Set<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTypeAccess}.
     */
    export type $BlockEntityTypeAccess_ = (() => $Set_<$Block_>);
    export class $ItemEntityAccess {
    }
    export interface $ItemEntityAccess {
        getAge(): number;
        setAge(arg0: number): void;
    }
    export class $MobAccess {
    }
    export interface $MobAccess {
        getHandDropChances(): number[];
        getArmorDropChances(): number[];
        get handDropChances(): number[];
        get armorDropChances(): number[];
    }
    export class $ServerPlayerAccess {
    }
    export interface $ServerPlayerAccess {
        setIsChangingDimension(arg0: boolean): void;
        set isChangingDimension(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerAccess}.
     */
    export type $ServerPlayerAccess_ = ((arg0: boolean) => void);
    export class $ShapedRecipeAccess {
    }
    export interface $ShapedRecipeAccess {
        getResult(): $ItemStack;
        getPattern(): $ShapedRecipePattern;
        get result(): $ItemStack;
        get pattern(): $ShapedRecipePattern;
    }
    export class $MinecartItemAccess {
    }
    export interface $MinecartItemAccess {
        getType(): $AbstractMinecart$Type;
        get type(): $AbstractMinecart$Type;
    }
    /**
     * Values that may be interpreted as {@link $MinecartItemAccess}.
     */
    export type $MinecartItemAccess_ = (() => $AbstractMinecart$Type_);
    export class $StructureTemplatePoolAccess {
    }
    export interface $StructureTemplatePoolAccess {
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        get templates(): $ObjectArrayList<$StructurePoolElement>;
    }
    export class $AbstractFurnaceBlockEntityAccess {
    }
    export interface $AbstractFurnaceBlockEntityAccess {
        setLitDuration(arg0: number): void;
        getCookingProgress(): number;
        setLitTime(arg0: number): void;
        getLitTime(): number;
        set litDuration(value: number);
        get cookingProgress(): number;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getBoardingCooldown(): number;
        setBoardingCooldown(arg0: number): void;
    }
}
