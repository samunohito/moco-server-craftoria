import { $HashMap } from "@package/java/util";
import { $IServerNetworkInstance } from "@package/io/github/kosmx/emotes/server/network";

declare module "@package/io/github/kosmx/emotes/arch/network" {
    export class $EmotesMixinConnection {
    }
    export interface $EmotesMixinConnection {
        emotecraft$getRemoteVersions(): $HashMap<number, number>;
        emotecraft$setVersions(arg0: $HashMap<number, number>): void;
    }
    export class $EmotesMixinNetwork {
    }
    export interface $EmotesMixinNetwork {
        emotecraft$getServerNetworkInstance(): $IServerNetworkInstance;
    }
    /**
     * Values that may be interpreted as {@link $EmotesMixinNetwork}.
     */
    export type $EmotesMixinNetwork_ = (() => $IServerNetworkInstance);
}
