import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/sonar/fluxnetworks/common/data" {
    export class $FluxDeviceConfigComponent extends $Record {
        priority(): (number) | undefined;
        limit(): (number) | undefined;
        getPriority(): number;
        withNetworkAndName(arg0: number, arg1: string): $FluxDeviceConfigComponent;
        withNetwork(arg0: number): $FluxDeviceConfigComponent;
        disableLimit(): (boolean) | undefined;
        getLimit(): number;
        customName(): (string) | undefined;
        networkId(): number;
        surgeMode(): (boolean) | undefined;
        static CODEC: $Codec<$FluxDeviceConfigComponent>;
        static EMPTY: $FluxDeviceConfigComponent;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FluxDeviceConfigComponent>;
        constructor(networkId: number, customName: (string) | undefined, priority: (number) | undefined, surgeMode: (boolean) | undefined, limit: (number) | undefined, disableLimit: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $FluxDeviceConfigComponent}.
     */
    export type $FluxDeviceConfigComponent_ = { priority?: (number) | undefined, networkId?: number, surgeMode?: (boolean) | undefined, customName?: (string) | undefined, disableLimit?: (boolean) | undefined, limit?: (number) | undefined,  } | [priority?: (number) | undefined, networkId?: number, surgeMode?: (boolean) | undefined, customName?: (string) | undefined, disableLimit?: (boolean) | undefined, limit?: (number) | undefined, ];
}
