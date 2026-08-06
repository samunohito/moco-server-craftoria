import { $Level } from "@package/net/minecraft/world/level";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";

declare module "@package/com/hollingsworth/arsnouveau/common/light" {
    export class $LambDynamicLight {
    }
    export interface $LambDynamicLight {
        ars_nouveau$shouldUpdateDynamicLight(): boolean;
        ars_nouveau$scheduleTrackedChunksRebuild(arg0: $LevelRenderer): void;
        ars_nouveau$isDynamicLightEnabled(): boolean;
        ars_nouveau$getDynamicLightY(): number;
        ars_nouveau$getDynamicLightZ(): number;
        ars_nouveau$getDynamicLightWorld(): $Level;
        ars_nouveau$resetDynamicLight(): void;
        ars_nouveau$updateDynamicLight(arg0: $LevelRenderer): boolean;
        ars_nouveau$setDynamicLightEnabled(arg0: boolean): void;
        ars_nouveau$getDynamicLightX(): number;
        ars_nouveau$dynamicLightTick(): void;
        ars_nouveau$getLuminance(): number;
    }
}
