import { $TintColor } from "@package/me/desht/modularrouters/client/util";

declare module "@package/me/desht/modularrouters/core" {
    export class $ModItems$ITintable {
    }
    export interface $ModItems$ITintable {
        getItemTint(): $TintColor;
        get itemTint(): $TintColor;
    }
    /**
     * Values that may be interpreted as {@link $ModItems$ITintable}.
     */
    export type $ModItems$ITintable_ = (() => $TintColor);
}
