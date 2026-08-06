import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $PotionContents, $PotionContents_ } from "@package/net/minecraft/world/item/alchemy";
import { $Climate$Sampler_, $Climate$ParameterPoint_, $Climate$ParameterPoint, $Climate$Sampler } from "@package/net/minecraft/world/level/biome";
import { $SpawnPlacementType_, $EntityType_, $Mob, $SpawnPlacements$SpawnPredicate_ } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $NoiseRouter_, $Heightmap$Types_, $WorldOptions, $NoiseRouter } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/yungnickyoung/minecraft/yungscavebiomes/mixin/accessor" {
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor {
        getServerLevelData(): $ServerLevelData;
        get serverLevelData(): $ServerLevelData;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelAccessor}.
     */
    export type $ServerLevelAccessor_ = (() => $ServerLevelData);
    export class $AbstractCauldronBlockAccessor {
    }
    export interface $AbstractCauldronBlockAccessor {
        callCanReceiveStalactiteDrip(arg0: $Fluid_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbstractCauldronBlockAccessor}.
     */
    export type $AbstractCauldronBlockAccessor_ = ((arg0: $Fluid) => boolean);
    export class $SpawnPlacementsAccessor {
        static callRegister<T extends $Mob>(arg0: $EntityType_<T>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<T>): void;
    }
    export interface $SpawnPlacementsAccessor {
    }
    export class $AbstractArrowAccessor {
    }
    export interface $AbstractArrowAccessor {
        callResetPiercedEntities(): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractArrowAccessor}.
     */
    export type $AbstractArrowAccessor_ = (() => void);
    export class $ArrowAccessor {
    }
    export interface $ArrowAccessor {
        callGetPotionContents(): $PotionContents;
    }
    /**
     * Values that may be interpreted as {@link $ArrowAccessor}.
     */
    export type $ArrowAccessor_ = (() => $PotionContents_);
    export class $NoiseChunkAccessor {
    }
    export interface $NoiseChunkAccessor {
        callCachedClimateSampler(arg0: $NoiseRouter_, arg1: $List_<$Climate$ParameterPoint_>): $Climate$Sampler;
    }
    /**
     * Values that may be interpreted as {@link $NoiseChunkAccessor}.
     */
    export type $NoiseChunkAccessor_ = ((arg0: $NoiseRouter, arg1: $List<$Climate$ParameterPoint>) => $Climate$Sampler_);
    export class $BrushableBlockEntityAccessor {
    }
    export interface $BrushableBlockEntityAccessor {
        setItem(arg0: $ItemStack_): void;
        set item(value: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $BrushableBlockEntityAccessor}.
     */
    export type $BrushableBlockEntityAccessor_ = ((arg0: $ItemStack) => void);
    export class $StructureManagerAccessor {
    }
    export interface $StructureManagerAccessor {
        getLevel(): $LevelAccessor;
        getWorldOptions(): $WorldOptions;
        get level(): $LevelAccessor;
        get worldOptions(): $WorldOptions;
    }
}
