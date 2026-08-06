import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MerchantContainer } from "@package/net/minecraft/world/inventory";
import { $Merchant } from "@package/net/minecraft/world/item/trading";

declare module "@package/de/maxhenkel/tradecycling/mixin" {
    export class $MerchantMenuAccessor {
    }
    export interface $MerchantMenuAccessor {
        getTrader(): $Merchant;
        getTradeContainer(): $MerchantContainer;
        get trader(): $Merchant;
        get tradeContainer(): $MerchantContainer;
    }
    export class $VillagerAccessor {
    }
    export interface $VillagerAccessor {
        invokeUpdateSpecialPrices(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerAccessor}.
     */
    export type $VillagerAccessor_ = ((arg0: $Player) => void);
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        getTopPos(): number;
        getLeftPos(): number;
        get topPos(): number;
        get leftPos(): number;
    }
}
