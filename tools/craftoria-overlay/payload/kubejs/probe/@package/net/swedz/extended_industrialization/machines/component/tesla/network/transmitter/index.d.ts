import { $TeslaTransferLimits, $TeslaNetworkPart } from "@package/net/swedz/extended_industrialization/machines/component/tesla/network";

declare module "@package/net/swedz/extended_industrialization/machines/component/tesla/network/transmitter" {
    export class $TeslaTransmitter {
    }
    export interface $TeslaTransmitter extends $TeslaNetworkPart, $TeslaTransferLimits {
        extractEnergy(arg0: number, arg1: boolean): number;
        isInterdimensional(): boolean;
        transmitEnergy(arg0: number): number;
        get interdimensional(): boolean;
    }
}
