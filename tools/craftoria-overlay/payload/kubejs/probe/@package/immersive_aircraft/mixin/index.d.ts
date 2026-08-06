import { $ContainerSynchronizer } from "@package/net/minecraft/world/inventory";
export * as client from "@package/immersive_aircraft/mixin/client";

declare module "@package/immersive_aircraft/mixin" {
    export class $ServerPlayerEntityMixin {
    }
    export interface $ServerPlayerEntityMixin {
        getContainerSynchronizer(): $ContainerSynchronizer;
        ic$nextContainerCounter(): void;
        getContainerCounter(): number;
        get containerSynchronizer(): $ContainerSynchronizer;
        get containerCounter(): number;
    }
}
