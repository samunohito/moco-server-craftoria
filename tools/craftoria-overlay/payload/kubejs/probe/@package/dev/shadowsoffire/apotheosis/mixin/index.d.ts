import { $SpawnData, $Level_, $Level, $SpawnData_ } from "@package/net/minecraft/world/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as client from "@package/dev/shadowsoffire/apotheosis/mixin/client";

declare module "@package/dev/shadowsoffire/apotheosis/mixin" {
    export class $BaseSpawnerAccessor {
    }
    export interface $BaseSpawnerAccessor {
        callSetNextSpawnData(arg0: $Level_ | null, arg1: $BlockPos_, arg2: $SpawnData_): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseSpawnerAccessor}.
     */
    export type $BaseSpawnerAccessor_ = ((arg0: $Level, arg1: $BlockPos, arg2: $SpawnData) => void);
    export class $LivingEntityInvoker {
    }
    export interface $LivingEntityInvoker {
        callGetSoundVolume(): number;
        callGetDeathSound(): $SoundEvent;
        callActuallyHurt(arg0: $DamageSource_, arg1: number): void;
        callCheckTotemDeathProtection(arg0: $DamageSource_): boolean;
        callOnEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity | null): void;
    }
}
