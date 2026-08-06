import { $TeslaNetwork, $TeslaNetworkPart } from "@package/net/swedz/extended_industrialization/machines/component/tesla/network";
import { $Comparable, $Enum } from "@package/java/lang";

declare module "@package/net/swedz/extended_industrialization/machines/component/tesla/network/receiver" {
    export class $TeslaReceiverState extends $Enum<$TeslaReceiverState> {
        static values(): $TeslaReceiverState[];
        static valueOf(arg0: string): $TeslaReceiverState;
        isSuccess(): boolean;
        isFailure(): boolean;
        static SUCCESS: $TeslaReceiverState;
        static TOO_FAR: $TeslaReceiverState;
        static MISMATCHING_VOLTAGE: $TeslaReceiverState;
        static UNLOADED_TRANSMITTER: $TeslaReceiverState;
        static UNDEFINED: $TeslaReceiverState;
        static NO_LINK: $TeslaReceiverState;
        get success(): boolean;
        get failure(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TeslaReceiverState}.
     */
    export type $TeslaReceiverState_ = "success" | "no_link" | "unloaded_transmitter" | "mismatching_voltage" | "too_far" | "undefined";
    export class $TeslaReceiver {
    }
    export interface $TeslaReceiver extends $TeslaNetworkPart, $Comparable<$TeslaReceiver> {
        compareTo(arg0: $TeslaReceiver): number;
        getPriority(): number;
        isMobile(): boolean;
        checkReceiveFrom(arg0: $TeslaNetwork): $TeslaReceiverState;
        getEnergyCapacity(): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getStoredEnergy(): number;
        get priority(): number;
        get mobile(): boolean;
        get energyCapacity(): number;
        get storedEnergy(): number;
    }
}
