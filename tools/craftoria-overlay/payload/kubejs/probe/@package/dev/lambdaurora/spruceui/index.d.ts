import { $SpruceWidget } from "@package/dev/lambdaurora/spruceui/widget";
export * as widget from "@package/dev/lambdaurora/spruceui/widget";
export * as util from "@package/dev/lambdaurora/spruceui/util";
export * as option from "@package/dev/lambdaurora/spruceui/option";

declare module "@package/dev/lambdaurora/spruceui" {
    export class $Position implements $SprucePositioned {
        static of(x: number, y: number): $Position;
        static of(anchor: $SprucePositioned, x: number, y: number): $Position;
        copy(): $Position;
        move(x: number, y: number): $Position;
        static origin(): $Position;
        getAnchor(): $SprucePositioned;
        getX(): number;
        static center(parent: $SpruceWidget, y: number): $Position;
        static center(width: number, y: number): $Position;
        static center(anchor: $SprucePositioned, width: number, y: number): $Position;
        getY(): number;
        getRelativeX(): number;
        setRelativeX(x: number): void;
        setAnchor(anchor: $SprucePositioned): void;
        getRelativeY(): number;
        setRelativeY(y: number): void;
        get x(): number;
        get y(): number;
    }
}
