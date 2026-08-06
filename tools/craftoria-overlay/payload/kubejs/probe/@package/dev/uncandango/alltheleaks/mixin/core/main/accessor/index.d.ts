import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Screen } from "@package/net/minecraft/client/gui/screens";

declare module "@package/dev/uncandango/alltheleaks/mixin/core/main/accessor" {
    export class $BaseScreenAccessor {
    }
    export interface $BaseScreenAccessor {
        atl$setPrevScreen(arg0: $Screen): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseScreenAccessor}.
     */
    export type $BaseScreenAccessor_ = ((arg0: $Screen) => void);
    export class $PlayerAdvancementsAccessor {
    }
    export interface $PlayerAdvancementsAccessor {
        getPlayer(): $ServerPlayer;
        get player(): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancementsAccessor}.
     */
    export type $PlayerAdvancementsAccessor_ = (() => $ServerPlayer);
}
