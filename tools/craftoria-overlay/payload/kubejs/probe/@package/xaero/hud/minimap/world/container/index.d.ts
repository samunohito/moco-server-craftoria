import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $List, $Map$Entry } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as config from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        setPath(arg0: $XaeroPath): void;
        getSubName(): string;
        getSession(): $MinimapSession;
        getLastNode(): string;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        getServerWaypointManager(): $ServerWaypointManager;
        containsSubContainer(arg0: $XaeroPath): boolean;
        removeName(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        getFullWorldName(arg0: string, arg1: string): string;
        getWorldsCopy(): $List<$MinimapWorld>;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getDirectoryPath(): $Path;
        removeWorld(arg0: string): void;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
        get session(): $MinimapSession;
        get lastNode(): string;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get serverWaypointManager(): $ServerWaypointManager;
        get worlds(): $Iterable<$MinimapWorld>;
        get worldsCopy(): $List<$MinimapWorld>;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get directoryPath(): $Path;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        updateConnectionsField(arg0: $WaypointSession): void;
        updateDimensionType(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
