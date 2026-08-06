import { $HeartRenderEvent$Post, $HeartRenderEvent$Pre, $HeartRenderEvent, $HeartSingleRenderEvent, $HeartRegistry } from "@package/terrails/colorfulhearts/api/event";
import { $Event } from "@package/net/neoforged/bus/api";
import { $OverlayHeart, $Heart } from "@package/terrails/colorfulhearts/api/heart/drawing";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/terrails/colorfulhearts/api/neoforge/event" {
    export class $NeoHeartRegistryEvent extends $Event implements $IModBusEvent {
        registerOverlayHeart<T extends $OverlayHeart>(heart: T): T;
        constructor(registry: $HeartRegistry);
    }
    export class $NeoHeartUpdateEvent extends $Event {
        constructor();
    }
    export class $NeoHeartRenderEvent$Post extends $NeoHeartRenderEvent<$HeartRenderEvent$Post> {
        constructor(guiGraphics: $GuiGraphics, player: $Player, x: number, y: number, maxHealth: number, currentHealth: number, displayHealth: number, absorption: number, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart);
    }
    export class $NeoHeartSingleRenderEvent extends $Event {
        getIndex(): number;
        getX(): number;
        getEvent(): $HeartSingleRenderEvent;
        getGuiGraphics(): $GuiGraphics;
        getY(): number;
        isBlinking(): boolean;
        getHeart(): $Heart;
        isBlinkingHeart(): boolean;
        isHardcoreEnabled(): boolean;
        constructor(heart: $Heart, guiGraphics: $GuiGraphics, index: number, x: number, y: number, hardcore: boolean, blinking: boolean, blinkingHeart: boolean);
        get index(): number;
        get x(): number;
        get event(): $HeartSingleRenderEvent;
        get guiGraphics(): $GuiGraphics;
        get y(): number;
        get blinking(): boolean;
        get heart(): $Heart;
        get blinkingHeart(): boolean;
        get hardcoreEnabled(): boolean;
    }
    export class $NeoHeartRenderEvent<E extends $HeartRenderEvent> extends $Event {
        getX(): number;
        isHardcore(): boolean;
        getPlayer(): $Player;
        getEvent(): E;
        getGuiGraphics(): $GuiGraphics;
        getY(): number;
        isBlinking(): boolean;
        getHealth(): number;
        getMaxHealth(): number;
        getDisplayHealth(): number;
        getAbsorption(): number;
        getOverlayHeart(): ($OverlayHeart) | undefined;
        constructor(event: E);
        get x(): number;
        get hardcore(): boolean;
        get player(): $Player;
        get event(): E;
        get guiGraphics(): $GuiGraphics;
        get y(): number;
        get blinking(): boolean;
        get health(): number;
        get maxHealth(): number;
        get displayHealth(): number;
        get absorption(): number;
        get overlayHeart(): ($OverlayHeart) | undefined;
    }
    export class $NeoHeartRenderEvent$Pre extends $NeoHeartRenderEvent<$HeartRenderEvent$Pre> {
        isCancelled(): boolean;
        setY(y: number): void;
        setX(x: number): void;
        setCancelled(cancel: boolean): void;
        setBlinking(blinking: boolean): void;
        setHardcore(hardcore: boolean): void;
        setOverlayHeart(heart: $OverlayHeart): void;
        constructor(guiGraphics: $GuiGraphics, player: $Player, x: number, y: number, maxHealth: number, currentHealth: number, displayHealth: number, absorption: number, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart);
        set y(value: number);
        set x(value: number);
        set blinking(value: boolean);
        set hardcore(value: boolean);
        set overlayHeart(value: $OverlayHeart);
    }
}
