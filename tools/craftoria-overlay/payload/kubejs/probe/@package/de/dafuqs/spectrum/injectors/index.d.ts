import { $FoodProperties$Builder } from "@package/net/minecraft/world/food";

declare module "@package/de/dafuqs/spectrum/injectors" {
    export class $MapDecorationInjector {
    }
    export interface $MapDecorationInjector {
        spectrum$setScale(arg0: number): void;
        spectrum$getScale(): number;
    }
    export class $FoodComponentBuilderInjector {
    }
    export interface $FoodComponentBuilderInjector {
        spectrum$setEatSeconds(arg0: number): $FoodProperties$Builder;
    }
    export class $StatusEffectInstanceInjector {
    }
    export interface $StatusEffectInstanceInjector {
        spectrum$setAmplifier(arg0: number): void;
        spectrum$setDuration(arg0: number): void;
    }
}
