import { $LevelTicker } from "@package/einstein/subtle_effects/ticking/tickers";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/einstein/subtle_effects/ticking/tickers/entity" {
    export class $EntityTicker<T extends $Entity> extends $LevelTicker {
        getId(): number;
        setId(arg0: number): void;
        constructor(arg0: T, arg1: boolean);
        constructor(arg0: T);
    }
}
