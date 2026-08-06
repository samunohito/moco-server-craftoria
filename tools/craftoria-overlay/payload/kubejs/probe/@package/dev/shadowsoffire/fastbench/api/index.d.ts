import { $ResultContainer } from "@package/net/minecraft/world/inventory";

declare module "@package/dev/shadowsoffire/fastbench/api" {
    export class $ICraftingContainer {
    }
    export interface $ICraftingContainer {
        getResult(): $ResultContainer;
        get result(): $ResultContainer;
    }
    /**
     * Values that may be interpreted as {@link $ICraftingContainer}.
     */
    export type $ICraftingContainer_ = (() => $ResultContainer);
    export class $ICraftingScreen {
    }
    export interface $ICraftingScreen {
        getContainer(): $ICraftingContainer;
        get container(): $ICraftingContainer;
    }
    /**
     * Values that may be interpreted as {@link $ICraftingScreen}.
     */
    export type $ICraftingScreen_ = (() => $ICraftingContainer_);
}
