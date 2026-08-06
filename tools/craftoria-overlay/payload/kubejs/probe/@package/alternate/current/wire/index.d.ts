import { $Consumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $Enum } from "@package/java/lang";

declare module "@package/alternate/current/wire" {
    export class $WireHandler$NodeProvider {
    }
    export interface $WireHandler$NodeProvider {
        getNeighbor(arg0: $Node, arg1: number): $Node;
    }
    /**
     * Values that may be interpreted as {@link $WireHandler$NodeProvider}.
     */
    export type $WireHandler$NodeProvider_ = ((arg0: $Node, arg1: number) => $Node);
    export class $Config {
        static forLevel(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess): $Config;
    }
    export interface $Config {
        load(): void;
        save(arg0: boolean): void;
        setEnabled(arg0: boolean): void;
        getEnabled(): boolean;
        getUpdateOrder(): $UpdateOrder;
        setUpdateOrder(arg0: $UpdateOrder_): void;
    }
    export class $UpdateOrder extends $Enum<$UpdateOrder> {
        static values(): $UpdateOrder[];
        static valueOf(arg0: string): $UpdateOrder;
        id(): string;
        static byId(arg0: string): $UpdateOrder;
        directNeighbors(arg0: number): number[];
        forEachNeighbor(arg0: $WireHandler$NodeProvider_, arg1: $Node, arg2: number, arg3: $Consumer_<$Node>): void;
        cardinalNeighbors(arg0: number): number[];
        static HORIZONTAL_FIRST_INWARD: $UpdateOrder;
        static VERTICAL_FIRST_OUTWARD: $UpdateOrder;
        static HORIZONTAL_FIRST_OUTWARD: $UpdateOrder;
        static VERTICAL_FIRST_INWARD: $UpdateOrder;
    }
    /**
     * Values that may be interpreted as {@link $UpdateOrder}.
     */
    export type $UpdateOrder_ = "horizontal_first_outward" | "horizontal_first_inward" | "vertical_first_outward" | "vertical_first_inward";
    export class $WireNode extends $Node {
    }
    export class $WireHandler {
        getConfig(): $Config;
        onWireAdded(arg0: $BlockPos_): void;
        onWireRemoved(arg0: $BlockPos_, arg1: $BlockState_): void;
        onWireUpdated(arg0: $BlockPos_): boolean;
        constructor(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess);
        get config(): $Config;
    }
    export class $Node {
        isSignalSource(): boolean;
        isConductor(): boolean;
        isWire(): boolean;
        asWire(): $WireNode;
        get signalSource(): boolean;
        get conductor(): boolean;
        get wire(): boolean;
    }
}
