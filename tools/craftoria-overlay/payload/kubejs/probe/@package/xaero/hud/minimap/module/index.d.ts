import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapDimensionHelper, $MinimapWorldManager } from "@package/xaero/hud/minimap/world";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapWorldManagerIO } from "@package/xaero/hud/minimap/world/io";
import { $HudMod } from "@package/xaero/common";
import { $ModuleSession, $HudModule } from "@package/xaero/hud/module";
import { $Minecraft } from "@package/net/minecraft/client";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $MinimapWorldState, $MinimapWorldStateUpdater } from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/module" {
    export class $MinimapSession extends $ModuleSession<$MinimapSession> {
        getProcessor(): $MinimapProcessor;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getConfiguredWidth(): number;
        getWorldManager(): $MinimapWorldManager;
        getWaypointSession(): $WaypointSession;
        getRadarSession(): $RadarSession;
        getHideMinimapUnderF3(): boolean;
        getHideMinimapUnderScreen(): boolean;
        getWorldState(): $MinimapWorldState;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getDimensionHelper(): $MinimapDimensionHelper;
        getMc(): $Minecraft;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get processor(): $MinimapProcessor;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get configuredWidth(): number;
        get worldManager(): $MinimapWorldManager;
        get waypointSession(): $WaypointSession;
        get radarSession(): $RadarSession;
        get hideMinimapUnderF3(): boolean;
        get hideMinimapUnderScreen(): boolean;
        get worldState(): $MinimapWorldState;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get dimensionHelper(): $MinimapDimensionHelper;
        get mc(): $Minecraft;
    }
}
