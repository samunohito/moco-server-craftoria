import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";

declare module "@package/com/telepathicgrunt/the_bumblezone/loot" {
    export class $EntityLootDropInterface {
    }
    export interface $EntityLootDropInterface {
        thebumblezone_performedEntityDrops(): void;
        thebumblezone_hasPerformedEntityDrops(): boolean;
    }
    export class $LootParamsBzVisitedLootInterface {
    }
    export interface $LootParamsBzVisitedLootInterface {
        addVisitedBzVisitedLootRL(arg0: $ResourceLocation_): void;
        getVisitedBzVisitedLootRL(): $Set<$ResourceLocation>;
        get visitedBzVisitedLootRL(): $Set<$ResourceLocation>;
    }
}
