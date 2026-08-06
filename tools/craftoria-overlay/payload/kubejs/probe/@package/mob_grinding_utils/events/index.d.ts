import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Mob, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";

declare module "@package/mob_grinding_utils/events" {
    export class $DirtSpawnEvent extends $Event implements $ICancellableEvent {
        getZ(): number;
        getX(): number;
        getWorld(): $LevelAccessor;
        getY(): number;
        getEntityLiving(): $LivingEntity;
        static checkEvent(arg0: $Mob, arg1: $LevelAccessor, arg2: number, arg3: number, arg4: number, arg5: $DirtSpawnEvent$DirtType_): $TriState;
        getDirt(): $DirtSpawnEvent$DirtType;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LevelAccessor, arg1: number, arg2: number, arg3: number, arg4: $LivingEntity, arg5: $DirtSpawnEvent$DirtType_);
        get z(): number;
        get x(): number;
        get world(): $LevelAccessor;
        get y(): number;
        get entityLiving(): $LivingEntity;
        get dirt(): $DirtSpawnEvent$DirtType;
    }
    export class $DirtSpawnEvent$DirtType extends $Enum<$DirtSpawnEvent$DirtType> {
        static values(): $DirtSpawnEvent$DirtType[];
        static valueOf(arg0: string): $DirtSpawnEvent$DirtType;
        static DREADFUL: $DirtSpawnEvent$DirtType;
        static DELIGHTFUL: $DirtSpawnEvent$DirtType;
    }
    /**
     * Values that may be interpreted as {@link $DirtSpawnEvent$DirtType}.
     */
    export type $DirtSpawnEvent$DirtType_ = "dreadful" | "delightful";
}
