import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Connection } from "@package/net/minecraft/network";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $Set, $Set_ } from "@package/java/util";

declare module "@package/io/github/kosmx/emotes/arch/mixin" {
    export class $ServerChunkCacheAccessor {
    }
    export interface $ServerChunkCacheAccessor {
        getTrackedEntity(): $Int2ObjectMap<$EntityTrackerAccessor>;
        get trackedEntity(): $Int2ObjectMap<$EntityTrackerAccessor>;
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCacheAccessor}.
     */
    export type $ServerChunkCacheAccessor_ = (() => $Int2ObjectMap<$EntityTrackerAccessor>);
    export class $EntityTrackerAccessor {
    }
    export interface $EntityTrackerAccessor {
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $EntityTrackerAccessor}.
     */
    export type $EntityTrackerAccessor_ = (() => $Set_<$ServerPlayerConnection>);
    export class $ServerCommonPacketListenerAccessor {
    }
    export interface $ServerCommonPacketListenerAccessor {
        getConnection(): $Connection;
        get connection(): $Connection;
    }
    /**
     * Values that may be interpreted as {@link $ServerCommonPacketListenerAccessor}.
     */
    export type $ServerCommonPacketListenerAccessor_ = (() => $Connection);
}
