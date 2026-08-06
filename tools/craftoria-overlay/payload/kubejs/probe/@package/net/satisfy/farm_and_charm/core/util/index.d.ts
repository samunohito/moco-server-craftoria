import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/satisfy/farm_and_charm/core/util" {
    export class $SaturationTracker$SaturatedAnimal {
    }
    export interface $SaturationTracker$SaturatedAnimal {
        farm_and_charm$getSaturationTracker(): $SaturationTracker;
        farm_and_charm$setSaturationTracker(arg0: $SaturationTracker): void;
    }
    export class $SaturationTracker {
        level(): number;
        setLevel(level: number): void;
        tick(animal: $Animal): void;
        getLastFedTick(): number;
        getDecayDelay(): number;
        setFoodCounter(count: number): void;
        setLastFedTick(tick: number): void;
        setDecayDelay(delay: number): void;
        foodCounter(): number;
        tryFeed(animal: $Animal, player: $Player, hand: $InteractionHand_): void;
        dropExtraLoot(animal: $Animal, source: $DamageSource_): void;
        feedDirectly(animal: $Animal, amount: number): void;
        clientSync(syncedLevel: number, syncedFoodCounter: number): void;
        constructor();
    }
}
