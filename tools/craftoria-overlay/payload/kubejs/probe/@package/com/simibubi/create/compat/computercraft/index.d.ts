import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ComputerEvent } from "@package/com/simibubi/create/compat/computercraft/events";
import { $IPeripheral } from "@package/dan200/computercraft/api/peripheral";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
export * as events from "@package/com/simibubi/create/compat/computercraft/events";

declare module "@package/com/simibubi/create/compat/computercraft" {
    export class $AbstractComputerBehaviour extends $BlockEntityBehaviour {
        removePeripheral(): void;
        getPeripheralCapability(): $IPeripheral;
        prepareComputerEvent(arg0: $ComputerEvent): void;
        hasAttachedComputer(): boolean;
        setHasAttachedComputer(arg0: boolean): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AbstractComputerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
        get peripheralCapability(): $IPeripheral;
    }
}
