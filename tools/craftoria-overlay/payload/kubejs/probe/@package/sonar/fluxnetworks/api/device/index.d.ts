import { $MenuProvider } from "@package/net/minecraft/world";
import { $GlobalPos } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/sonar/fluxnetworks/api/device" {
    export class $IFluxProvider {
    }
    export interface $IFluxProvider extends $MenuProvider {
        getDisplayName(): $Component;
        onPlayerOpened(arg0: $Player): void;
        onPlayerClosed(arg0: $Player): void;
        getNetworkID(): number;
        get displayName(): $Component;
        get networkID(): number;
    }
    export class $IFluxDevice {
    }
    export interface $IFluxDevice extends $IFluxProvider {
        getOwnerUUID(): $UUID;
        getDisplayStack(): $ItemStack;
        getCustomName(): string;
        isChunkLoaded(): boolean;
        getDeviceType(): $FluxDeviceType;
        getRawPriority(): number;
        getSurgeMode(): boolean;
        getDisableLimit(): boolean;
        isForcedLoading(): boolean;
        getRawLimit(): number;
        getTransferBuffer(): number;
        getGlobalPos(): $GlobalPos;
        getMaxTransferLimit(): number;
        readCustomTag(arg0: $CompoundTag_, arg1: number): void;
        writeCustomTag(arg0: $CompoundTag_, arg1: number): void;
        getTransferChange(): number;
        get ownerUUID(): $UUID;
        get displayStack(): $ItemStack;
        get customName(): string;
        get chunkLoaded(): boolean;
        get deviceType(): $FluxDeviceType;
        get rawPriority(): number;
        get surgeMode(): boolean;
        get disableLimit(): boolean;
        get forcedLoading(): boolean;
        get rawLimit(): number;
        get transferBuffer(): number;
        get globalPos(): $GlobalPos;
        get maxTransferLimit(): number;
        get transferChange(): number;
    }
    export class $FluxDeviceType extends $Enum<$FluxDeviceType> {
        static values(): $FluxDeviceType[];
        static valueOf(arg0: string): $FluxDeviceType;
        getId(): number;
        isController(): boolean;
        static fromId(arg0: number): $FluxDeviceType;
        isStorage(): boolean;
        isPoint(): boolean;
        isPlug(): boolean;
        static STORAGE: $FluxDeviceType;
        mColor: number;
        static CONTROLLER: $FluxDeviceType;
        static VALUES: $FluxDeviceType[];
        static PLUG: $FluxDeviceType;
        static POINT: $FluxDeviceType;
        get id(): number;
        get controller(): boolean;
        get storage(): boolean;
        get point(): boolean;
        get plug(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluxDeviceType}.
     */
    export type $FluxDeviceType_ = "point" | "plug" | "storage" | "controller";
}
