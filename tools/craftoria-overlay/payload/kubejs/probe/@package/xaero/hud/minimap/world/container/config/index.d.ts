import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        setLoaded(arg0: boolean): void;
        setSortType(arg0: $WaypointsSort_): void;
        getSortType(): $WaypointsSort;
        isIgnoreHeightmaps(): boolean;
        isSortReversed(): boolean;
        isTeleportationEnabled(): boolean;
        resetSubWorldConnections(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        setTeleportationEnabled(arg0: boolean): void;
        setIgnoreServerLevelId(arg0: boolean): void;
        isIgnoreServerLevelId(): boolean;
        getDefaultMultiworldId(): string;
        isUsingMultiworldDetection(): boolean;
        setDefaultMultiworldId(arg0: string): void;
        isUsingDefaultTeleportCommand(): boolean;
        setUsingMultiworldDetection(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        getServerTeleportCommandFormat(): string;
        setIgnoreHeightmaps(arg0: boolean): void;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        toggleSortType(): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
