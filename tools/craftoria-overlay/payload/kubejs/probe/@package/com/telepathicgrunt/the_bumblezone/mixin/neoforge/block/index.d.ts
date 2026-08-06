import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/telepathicgrunt/the_bumblezone/mixin/neoforge/block" {
    export class $FireBlockInvoker {
    }
    export interface $FireBlockInvoker {
        bumblezone$callSetFlammable(arg0: $Block_, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $FireBlockInvoker}.
     */
    export type $FireBlockInvoker_ = ((arg0: $Block, arg1: number, arg2: number) => void);
    export class $UseOnContextAccessor {
    }
    export interface $UseOnContextAccessor {
        bumblezone$getHitResult(): $BlockHitResult;
    }
    /**
     * Values that may be interpreted as {@link $UseOnContextAccessor}.
     */
    export type $UseOnContextAccessor_ = (() => $BlockHitResult);
}
