import { $ServerLevel } from "@package/net/minecraft/server/level";

declare module "@package/com/illusivesoulworks/comforts/common/util" {
    export class $ServerAware {
    }
    export interface $ServerAware {
        comforts$setServer(arg0: $ServerLevel): void;
        comforts$getServer(): $ServerLevel;
    }
}
