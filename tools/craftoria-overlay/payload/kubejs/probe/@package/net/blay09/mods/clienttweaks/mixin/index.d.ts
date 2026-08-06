import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List } from "@package/java/util";

declare module "@package/net/blay09/mods/clienttweaks/mixin" {
    export class $LivingEntityAccessor {
        static getDataEffectAmbienceId(): $EntityDataAccessor<boolean>;
        static getDataEffectParticles(): $EntityDataAccessor<$List<$ParticleOptions>>;
        static get dataEffectAmbienceId(): $EntityDataAccessor<boolean>;
        static get dataEffectParticles(): $EntityDataAccessor<$List<$ParticleOptions>>;
    }
    export interface $LivingEntityAccessor {
    }
    export class $ItemInHandRendererAccessor {
    }
    export interface $ItemInHandRendererAccessor {
        setOOffHandHeight(arg0: number): void;
        setOffHandHeight(arg0: number): void;
        set OOffHandHeight(value: number);
        set offHandHeight(value: number);
    }
    export class $AxeItemAccessor {
    }
    export interface $AxeItemAccessor {
        callGetStripped(arg0: $BlockState_): ($BlockState) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $AxeItemAccessor}.
     */
    export type $AxeItemAccessor_ = ((arg0: $BlockState) => ($BlockState_) | undefined);
}
