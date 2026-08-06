import { $IItemHandler } from "@package/net/neoforged/neoforge/items";

declare module "@package/snownee/autochefsdelight/mixin" {
    export class $RecipeWrapperAccess {
    }
    export interface $RecipeWrapperAccess {
        getInv(): $IItemHandler;
        get inv(): $IItemHandler;
    }
    /**
     * Values that may be interpreted as {@link $RecipeWrapperAccess}.
     */
    export type $RecipeWrapperAccess_ = (() => $IItemHandler);
}
