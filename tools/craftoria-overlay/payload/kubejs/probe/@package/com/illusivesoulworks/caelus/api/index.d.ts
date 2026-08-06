import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/com/illusivesoulworks/caelus/api" {
    export class $RenderCapeEvent extends $PlayerEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player);
    }
}
