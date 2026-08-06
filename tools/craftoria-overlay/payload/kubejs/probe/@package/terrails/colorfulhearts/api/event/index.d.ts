import { $OverlayHeart, $Heart } from "@package/terrails/colorfulhearts/api/heart/drawing";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/terrails/colorfulhearts/api/event" {
    export class $HeartRenderEvent$Post extends $HeartRenderEvent {
        constructor(guiGraphics: $GuiGraphics, player: $Player, x: number, y: number, maxHealth: number, currentHealth: number, displayHealth: number, absorption: number, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart);
    }
    export class $HeartRenderEvent {
        getX(): number;
        isHardcore(): boolean;
        getPlayer(): $Player;
        getGuiGraphics(): $GuiGraphics;
        getY(): number;
        isBlinking(): boolean;
        getHealth(): number;
        getMaxHealth(): number;
        getDisplayHealth(): number;
        getAbsorption(): number;
        getOverlayHeart(): ($OverlayHeart) | undefined;
        constructor(guiGraphics: $GuiGraphics, player: $Player, x: number, y: number, maxHealth: number, currentHealth: number, displayHealth: number, absorption: number, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart);
        get x(): number;
        get hardcore(): boolean;
        get player(): $Player;
        get guiGraphics(): $GuiGraphics;
        get y(): number;
        get blinking(): boolean;
        get health(): number;
        get maxHealth(): number;
        get displayHealth(): number;
        get absorption(): number;
        get overlayHeart(): ($OverlayHeart) | undefined;
    }
    export class $HeartRegistry {
        registerOverlayHeart<T extends $OverlayHeart>(heart: T): T;
        constructor();
    }
    export class $HeartSingleRenderEvent {
        getIndex(): number;
        getX(): number;
        getGuiGraphics(): $GuiGraphics;
        getY(): number;
        isBlinking(): boolean;
        getHeart(): $Heart;
        isBlinkingHeart(): boolean;
        isHardcoreEnabled(): boolean;
        constructor(heart: $Heart, guiGraphics: $GuiGraphics, index: number, x: number, y: number, hardcore: boolean, blinking: boolean, blinkingHeart: boolean);
        get index(): number;
        get x(): number;
        get guiGraphics(): $GuiGraphics;
        get y(): number;
        get blinking(): boolean;
        get heart(): $Heart;
        get blinkingHeart(): boolean;
        get hardcoreEnabled(): boolean;
    }
    export class $HeartRenderEvent$Pre extends $HeartRenderEvent {
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
