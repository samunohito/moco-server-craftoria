import { $RoomUpgradeInstance, $RoomUpgradeInstance_ } from "@package/dev/compactmods/machines/api/room/upgrade";

declare module "@package/dev/compactmods/machines/api/room/upgrade/event" {
    export class $RoomUpgradeComponentEvent {
    }
    export interface $RoomUpgradeComponentEvent {
        handle(arg0: $RoomUpgradeInstance_): void;
    }
    /**
     * Values that may be interpreted as {@link $RoomUpgradeComponentEvent}.
     */
    export type $RoomUpgradeComponentEvent_ = ((arg0: $RoomUpgradeInstance) => void);
}
