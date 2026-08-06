import { $Level_ } from "@package/net/minecraft/world/level";
import { $TeslaTransmitter } from "@package/net/swedz/extended_industrialization/machines/component/tesla/network/transmitter";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $TeslaTowerTier_ } from "@package/net/swedz/extended_industrialization/machines/blockentity/multiblock/teslatower";
import { $MIEnergyStorage, $CableTier } from "@package/aztech/modern_industrialization/api/energy";
import { $Collection } from "@package/java/util";
import { $TeslaReceiver } from "@package/net/swedz/extended_industrialization/machines/component/tesla/network/receiver";
import { $WorldPos_, $WorldPos } from "@package/net/swedz/tesseract/neoforge/api";
export * as transmitter from "@package/net/swedz/extended_industrialization/machines/component/tesla/network/transmitter";
export * as receiver from "@package/net/swedz/extended_industrialization/machines/component/tesla/network/receiver";

declare module "@package/net/swedz/extended_industrialization/machines/component/tesla/network" {
    export class $TeslaNetworkPart {
    }
    export interface $TeslaNetworkPart {
        getPosition(): $WorldPos;
        getNetwork(): $TeslaNetwork;
        getSourcePosition(): $WorldPos;
        getNetworkKey(): $WorldPos;
        setNetwork(arg0: $WorldPos_): void;
        hasNetwork(): boolean;
        getCableTier(): $CableTier;
        get position(): $WorldPos;
        get sourcePosition(): $WorldPos;
        get networkKey(): $WorldPos;
        get cableTier(): $CableTier;
    }
    export class $TeslaNetworkHolder {
    }
    export interface $TeslaNetworkHolder {
        getTeslaNetworks(): $TeslaNetworkCache;
        get teslaNetworks(): $TeslaNetworkCache;
    }
    export class $TeslaNetwork implements $MIEnergyStorage, $TeslaTransferLimits$Delegate {
        remove(arg0: $TeslaReceiver): void;
        extract(arg0: number, arg1: boolean): number;
        add(arg0: $TeslaReceiver): void;
        key(): $WorldPos;
        getCapacity(): number;
        canConnect(arg0: $CableTier): boolean;
        getAmount(): number;
        receive(arg0: number, arg1: boolean): number;
        canReceive(): boolean;
        canExtract(): boolean;
        updateAll(): void;
        getTransmitter(): $TeslaTransmitter;
        receiverCount(): number;
        loadedReceiverCount(): number;
        getDelegateTransferLimits(): $TeslaTransferLimits;
        isTransmitterLoaded(): boolean;
        hasTransmitter(): boolean;
        unloadTransmitter(): void;
        loadTransmitter(arg0: $TeslaTransmitter): void;
        canConnect(arg0: string): boolean;
        getMaxTransfer(): number;
        getMaxDistance(): number;
        getCableTier(): $CableTier;
        getPassiveDrain(): number;
        /**
         * @deprecated
         */
        extractEnergy(arg0: number, arg1: boolean): number;
        /**
         * @deprecated
         */
        getMaxEnergyStored(): number;
        /**
         * @deprecated
         */
        getEnergyStored(): number;
        /**
         * @deprecated
         */
        receiveEnergy(arg0: number, arg1: boolean): number;
        constructor(arg0: $TeslaNetworkCache, arg1: $WorldPos_);
        get capacity(): number;
        get amount(): number;
        get transmitter(): $TeslaTransmitter;
        get delegateTransferLimits(): $TeslaTransferLimits;
        get transmitterLoaded(): boolean;
        get maxTransfer(): number;
        get maxDistance(): number;
        get cableTier(): $CableTier;
        get passiveDrain(): number;
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
    export class $TeslaNetworkCache {
        get(arg0: $Level_, arg1: $BlockPos_): $TeslaNetwork;
        get(arg0: $WorldPos_): $TeslaNetwork;
        exists(arg0: $Level_, arg1: $BlockPos_): boolean;
        exists(arg0: $WorldPos_): boolean;
        constructor();
    }
    export class $TeslaReceiverHolder {
    }
    export interface $TeslaReceiverHolder {
        getTeslaReceivers(): $Collection<$TeslaReceiver>;
        get teslaReceivers(): $Collection<$TeslaReceiver>;
    }
    export class $TeslaTransferLimits {
        static of(arg0: $CableTier, arg1: $TeslaTowerTier_): $TeslaTransferLimits;
        static of(arg0: $CableTier, arg1: number, arg2: number, arg3: number): $TeslaTransferLimits;
    }
    export interface $TeslaTransferLimits {
        getMaxTransfer(): number;
        getMaxDistance(): number;
        getCableTier(): $CableTier;
        getPassiveDrain(): number;
        get maxTransfer(): number;
        get maxDistance(): number;
        get cableTier(): $CableTier;
        get passiveDrain(): number;
    }
    export class $TeslaTransferLimits$Delegate {
    }
    export interface $TeslaTransferLimits$Delegate extends $TeslaTransferLimits {
        getMaxTransfer(): number;
        getMaxDistance(): number;
        getCableTier(): $CableTier;
        getDelegateTransferLimits(): $TeslaTransferLimits;
        getPassiveDrain(): number;
        get maxTransfer(): number;
        get maxDistance(): number;
        get cableTier(): $CableTier;
        get delegateTransferLimits(): $TeslaTransferLimits;
        get passiveDrain(): number;
    }
    /**
     * Values that may be interpreted as {@link $TeslaTransferLimits$Delegate}.
     */
    export type $TeslaTransferLimits$Delegate_ = (() => $TeslaTransferLimits);
}
