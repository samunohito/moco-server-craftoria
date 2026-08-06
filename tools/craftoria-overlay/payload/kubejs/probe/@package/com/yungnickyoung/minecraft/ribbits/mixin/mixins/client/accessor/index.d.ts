import { $Entity } from "@package/net/minecraft/world/entity";
import { $OptionalInt } from "@package/java/util";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";

declare module "@package/com/yungnickyoung/minecraft/ribbits/mixin/mixins/client/accessor" {
    export class $SoundBufferAccessor {
    }
    export interface $SoundBufferAccessor {
        callGetAlBuffer(): $OptionalInt;
    }
    /**
     * Values that may be interpreted as {@link $SoundBufferAccessor}.
     */
    export type $SoundBufferAccessor_ = (() => $OptionalInt);
    export class $ClientLevelAccessor {
    }
    export interface $ClientLevelAccessor {
        callGetEntities(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelAccessor}.
     */
    export type $ClientLevelAccessor_ = (() => $LevelEntityGetter<$Entity>);
}
