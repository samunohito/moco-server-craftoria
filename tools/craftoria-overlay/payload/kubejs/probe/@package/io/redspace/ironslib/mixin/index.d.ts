import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";

declare module "@package/io/redspace/ironslib/mixin" {
    export class $PlayerAccessor {
        static getDataPlayerModeCustomisation(): $EntityDataAccessor<number>;
        static get dataPlayerModeCustomisation(): $EntityDataAccessor<number>;
    }
    export interface $PlayerAccessor {
    }
}
