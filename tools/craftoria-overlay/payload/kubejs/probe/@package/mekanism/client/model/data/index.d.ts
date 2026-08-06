import { $ConnectionType_, $ConnectionType } from "@package/mekanism/common/lib/transmitter";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Map } from "@package/java/util";

declare module "@package/mekanism/client/model/data" {
    export class $TransmitterModelData {
        check(...types: $ConnectionType_[]): boolean;
        getConnectionType(side: $Direction_): $ConnectionType;
        setHasColor(hasColor: boolean): void;
        getHasColor(): boolean;
        getConnectionsMap(): $Map<$Direction, $ConnectionType>;
        setConnectionData(direction: $Direction_, connectionType: $ConnectionType_): void;
        constructor();
        get connectionsMap(): $Map<$Direction, $ConnectionType>;
    }
}
