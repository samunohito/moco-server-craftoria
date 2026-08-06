import { $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CyclopsBlockEntity } from "@package/org/cyclops/cyclopscore/blockentity";
import { $ICable } from "@package/org/cyclops/integrateddynamics/api/block/cable";
import { $BlockEntityMultipartTicking } from "@package/org/cyclops/integrateddynamics/core/blockentity";

declare module "@package/org/cyclops/integrateddynamics/capability/cable" {
    export class $CableDefault implements $ICable {
        isConnected(arg0: $Direction_): boolean;
        disconnect(arg0: $Direction_): void;
        canConnect(arg0: $ICable, arg1: $Direction_): boolean;
        getItemStack(): $ItemStack;
        updateConnections(arg0: boolean): void;
        reconnect(arg0: $Direction_): void;
        updateConnections(): void;
        constructor();
        get itemStack(): $ItemStack;
    }
    export class $CableTile<T extends $CyclopsBlockEntity> extends $CableDefault {
        constructor(arg0: T);
    }
    export class $CableTileMultipartTicking extends $CableTile<$BlockEntityMultipartTicking> {
        isForceDisconnected(arg0: $Direction_): boolean;
        constructor(arg0: $BlockEntityMultipartTicking);
    }
}
