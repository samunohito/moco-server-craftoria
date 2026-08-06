import { $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/org/cyclops/integrateddynamics/api/block/cable" {
    export class $ICable {
    }
    export interface $ICable {
        destroy(): void;
        isConnected(arg0: $Direction_): boolean;
        disconnect(arg0: $Direction_): void;
        canConnect(arg0: $ICable, arg1: $Direction_): boolean;
        getItemStack(): $ItemStack;
        updateConnections(arg0: boolean): void;
        updateConnections(): void;
        reconnect(arg0: $Direction_): void;
        get itemStack(): $ItemStack;
    }
    export class $ICableFakeable {
    }
    export interface $ICableFakeable {
        isRealCable(): boolean;
        setRealCable(arg0: boolean): void;
    }
}
