import { $IItemMatcher } from "@package/me/desht/modularrouters/api/matching";
import { $ModuleFlags } from "@package/me/desht/modularrouters/logic/settings";
import { $List } from "@package/java/util";

declare module "@package/com/matyrobbrt/mekanisticrouters/mixin" {
    export class $FilterAccess {
    }
    export interface $FilterAccess {
        mekrouters$getFlags(): $ModuleFlags;
        mekrouters$getMatchers(): $List<$IItemMatcher>;
    }
}
