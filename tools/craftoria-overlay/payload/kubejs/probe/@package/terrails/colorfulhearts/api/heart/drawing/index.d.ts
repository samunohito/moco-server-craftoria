import { $Predicate_ } from "@package/java/util/function";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/terrails/colorfulhearts/api/heart/drawing" {
    export class $OverlayHeart {
        getId(): $ResourceLocation;
        isOpaque(): boolean;
        static build(id: $ResourceLocation_, condition: $Predicate_<$Player>): $OverlayHeart$Builder;
        getHealthDrawings(): $List<$HeartDrawing>;
        shouldDraw(player: $Player): boolean;
        getAbsorptionDrawings(): $List<$HeartDrawing>;
        get id(): $ResourceLocation;
        get opaque(): boolean;
        get healthDrawings(): $List<$HeartDrawing>;
        get absorptionDrawings(): $List<$HeartDrawing>;
    }
    export class $OverlayHeart$Builder {
        finish(): $OverlayHeart;
        transparent(): $OverlayHeart$Builder;
        addAbsorption(drawing: $HeartDrawing, r: number, g: number, b: number): $OverlayHeart$Builder;
        addAbsorption(drawing: $HeartDrawing, r: number, g: number, b: number, alpha: number, sourceFactor: number, destinationFactor: number): $OverlayHeart$Builder;
        addAbsorption(drawing: $HeartDrawing): $OverlayHeart$Builder;
        addAbsorption(first: $HeartDrawing, second: $HeartDrawing): $OverlayHeart$Builder;
        blankAbsorption(): $OverlayHeart$Builder;
        addHealth(drawing: $HeartDrawing, r: number, g: number, b: number, alpha: number, sourceFactor: number, destinationFactor: number): $OverlayHeart$Builder;
        addHealth(drawing: $HeartDrawing, r: number, g: number, b: number): $OverlayHeart$Builder;
        addHealth(first: $HeartDrawing, second: $HeartDrawing): $OverlayHeart$Builder;
        addHealth(drawing: $HeartDrawing): $OverlayHeart$Builder;
    }
    export class $HeartDrawing {
        getId(): $ResourceLocation;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean): void;
        static colorBlend(drawing: $HeartDrawing, id: $ResourceLocation_, r: number, g: number, b: number, a: number, sourceFactor: number, destinationFactor: number): $HeartDrawing;
        constructor();
        get id(): $ResourceLocation;
    }
    export class $Heart {
        isEmpty(): boolean;
        static full(drawing: $HeartDrawing, half: boolean, background: $Heart): $Heart;
        static full(drawing: $HeartDrawing): $Heart;
        static full(drawing: $HeartDrawing, background: $Heart): $Heart;
        static half(drawing: $HeartDrawing): $Heart;
        isContainer(): boolean;
        draw(guiGraphics: $GuiGraphics, x: number, y: number, hardcore: boolean, highlightContainer: boolean, highlightHeart: boolean): void;
        static CONTAINER_HALF: $Heart;
        static CONTAINER_NONE: $Heart;
        static CONTAINER_FULL: $Heart;
        get empty(): boolean;
        get container(): boolean;
    }
}
