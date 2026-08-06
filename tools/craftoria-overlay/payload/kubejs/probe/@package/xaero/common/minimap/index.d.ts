import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Item } from "@package/net/minecraft/world/item";
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$1 } from "@package/xaero/hud/minimap/player/tracker/synced";
import { $ClientSyncedTrackedPlayerManager } from "@package/xaero/common/minimap/radar/tracker/synced";
import { $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapElementOverMapRendererHandler } from "@package/xaero/common/minimap/element/render/over";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $MinimapRadar } from "@package/xaero/common/minimap/radar";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as radar from "@package/xaero/common/minimap/radar";
export * as region from "@package/xaero/common/minimap/region";
export * as waypoints from "@package/xaero/common/minimap/waypoints";
export * as render from "@package/xaero/common/minimap/render";
export * as highlight from "@package/xaero/common/minimap/highlight";
export * as write from "@package/xaero/common/minimap/write";
export * as mcworld from "@package/xaero/common/minimap/mcworld";
export * as element from "@package/xaero/common/minimap/element";

declare module "@package/xaero/common/minimap" {
    export class $MinimapProcessor {
        getLastMapDimensionScale(): number;
        getLastMapDimension(): $ResourceKey<$Level>;
        cleanup(): void;
        getForcedFairPlay(): boolean;
        getSession(): $MinimapSession;
        onClientTick(): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        getMinimapInterface(): $MinimapInterface;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        onPlayerTick(): void;
        updateMinimapItem(): void;
        static hasMinimapItem(arg0: $Player): boolean;
        getMinimapSize(): number;
        getMinimapItem(): $Item;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        isManualCaveMode(): boolean;
        setToResetImage(arg0: boolean): void;
        getMinimapZoom(): number;
        isToResetImage(): boolean;
        isEnlargedMap(): boolean;
        getMinimapWriter(): $MinimapWriter;
        getRadarSession(): $RadarSession;
        canUseFrameBuffer(): boolean;
        getFBOBufferSize(): number;
        getMinimapBufferSize(arg0: number): number;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        setLastMapDimensionScale(arg0: number): void;
        isCaveModeDisplayed(): boolean;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        getTargetZoom(): number;
        setServerModNetworkVersion(arg0: number): void;
        isConsideringNetherFairPlayMessage(): boolean;
        serverHasMod(): boolean;
        getServerModNetworkVersion(): number;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        toggleManualCaveMode(): void;
        updateZoom(): void;
        getNoMinimapMessageReceived(): boolean;
        checkFBO(): void;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get forcedFairPlay(): boolean;
        get session(): $MinimapSession;
        set fairPlayOnlyMessageReceived(value: boolean);
        get minimapInterface(): $MinimapInterface;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get minimapSize(): number;
        get minimapItem(): $Item;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get manualCaveMode(): boolean;
        get minimapZoom(): number;
        get minimapWriter(): $MinimapWriter;
        get radarSession(): $RadarSession;
        get FBOBufferSize(): number;
        get caveModeDisplayed(): boolean;
        get entityRadar(): $MinimapRadar;
        get targetZoom(): number;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        /**
         * @deprecated
         */
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        constructor(arg0: $HudMod);
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
    }
}
