import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";

declare module "@package/com/hollingsworth/arsnouveau/common/mixin/jar" {
    export class $MobAccessorMixin {
    }
    export interface $MobAccessorMixin {
        callGetAmbientSound(): $SoundEvent;
    }
    /**
     * Values that may be interpreted as {@link $MobAccessorMixin}.
     */
    export type $MobAccessorMixin_ = (() => $SoundEvent_);
}
