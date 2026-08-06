import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";

declare module "@package/einstein/subtle_effects/mixin/client/entity" {
    export class $AbstractHorseAccessor {
    }
    export interface $AbstractHorseAccessor {
        getEatSound(): $SoundEvent;
        get eatSound(): $SoundEvent;
    }
    /**
     * Values that may be interpreted as {@link $AbstractHorseAccessor}.
     */
    export type $AbstractHorseAccessor_ = (() => $SoundEvent_);
}
