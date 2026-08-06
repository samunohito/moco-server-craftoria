import { $BlockSensitiveBufferBuilder } from "@package/net/irisshaders/iris/vertices";

declare module "@package/dev/djefrey/colorwheel" {
    export class $ColorwheelBufferBuilder {
    }
    export interface $ColorwheelBufferBuilder extends $BlockSensitiveBufferBuilder {
        clrwlEndBlock(): void;
        clrwlBeginBlock(block: number, renderType: number, lightEmission: number, isTerrain: boolean, posX: number, posY: number, posZ: number): void;
    }
}
