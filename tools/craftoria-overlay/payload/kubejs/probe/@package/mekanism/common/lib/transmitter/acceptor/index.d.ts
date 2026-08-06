import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $TileEntityTransmitter } from "@package/mekanism/common/tile/transmitter";
import { $Set_, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $BlockCapabilityCache, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/mekanism/common/lib/transmitter/acceptor" {
    export class $AcceptorCache<ACCEPTOR> extends $AbstractAcceptorCache<ACCEPTOR, $AcceptorCache$CacheBasedInfo<ACCEPTOR>> {
        currentAcceptorConnections: number;
        constructor(transmitterTile: $TileEntityTransmitter, capability: $BlockCapability<ACCEPTOR, $Direction_>);
    }
    export class $AbstractAcceptorCache<ACCEPTOR, INFO extends $AcceptorInfo<ACCEPTOR>> {
        getCachedAcceptor(side: $Direction_): ACCEPTOR;
        initializeCache(level: $ServerLevel): void;
        getConnectedAcceptor(side: $Direction_): ACCEPTOR;
        getConnectedAcceptors(sides: $Set_<$Direction_>): $List<ACCEPTOR>;
        currentAcceptorConnections: number;
    }
    export class $AcceptorInfo<ACCEPTOR> {
    }
    export interface $AcceptorInfo<ACCEPTOR> {
        acceptor(): ACCEPTOR;
    }
    /**
     * Values that may be interpreted as {@link $AcceptorInfo}.
     */
    export type $AcceptorInfo_<ACCEPTOR> = (() => ACCEPTOR);
    export class $AcceptorCache$CacheBasedInfo<ACCEPTOR> extends $Record implements $AcceptorInfo<ACCEPTOR> {
        cache(): $BlockCapabilityCache<ACCEPTOR, $Direction>;
        acceptor(): ACCEPTOR;
        constructor(cache: $BlockCapabilityCache<ACCEPTOR, $Direction_>);
    }
    /**
     * Values that may be interpreted as {@link $AcceptorCache$CacheBasedInfo}.
     */
    export type $AcceptorCache$CacheBasedInfo_<ACCEPTOR> = { cache?: $BlockCapabilityCache<any, $Direction_>,  } | [cache?: $BlockCapabilityCache<any, $Direction_>, ];
}
