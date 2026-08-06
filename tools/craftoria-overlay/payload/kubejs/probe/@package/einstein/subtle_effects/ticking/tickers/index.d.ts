import { $Level_ } from "@package/net/minecraft/world/level";
import { $RandomSource } from "@package/net/minecraft/util";
export * as entity from "@package/einstein/subtle_effects/ticking/tickers/entity";

declare module "@package/einstein/subtle_effects/ticking/tickers" {
    export class $LevelTicker extends $Ticker {
        constructor(arg0: $Level_, arg1: $RandomSource);
        constructor(arg0: $Level_);
    }
    export class $Ticker {
        remove(): void;
        isRemoved(): boolean;
        tick(): void;
        constructor();
        get removed(): boolean;
    }
}
