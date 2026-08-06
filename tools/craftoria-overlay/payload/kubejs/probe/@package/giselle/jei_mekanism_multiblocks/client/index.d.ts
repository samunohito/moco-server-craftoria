import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/giselle/jei_mekanism_multiblocks/client" {
    export class $ITooltipAccessor {
    }
    export interface $ITooltipAccessor {
        jei_mekanism_multiblocks$getMessage(): $Component;
        jei_mekanism_multiblocks$getNarration(): $Component;
    }
}
