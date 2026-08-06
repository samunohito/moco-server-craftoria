import { $ScrollAction, $ScrollAction_ } from "@package/dev/terminalmc/moremousetweaks/inventory/util";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";

declare module "@package/dev/terminalmc/moremousetweaks/util/inject" {
    export class $IRecipeBookWidget {
    }
    export interface $IRecipeBookWidget {
        mmt$scrollRecipeBook(arg0: number, arg1: number, arg2: number): $ScrollAction;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeBookWidget}.
     */
    export type $IRecipeBookWidget_ = ((arg0: number, arg1: number, arg2: number) => $ScrollAction_);
    export class $IScrollableRecipeBook {
    }
    export interface $IScrollableRecipeBook {
        mmt$onMouseScrollRecipeBook(arg0: number, arg1: number, arg2: number): $ScrollAction;
    }
    /**
     * Values that may be interpreted as {@link $IScrollableRecipeBook}.
     */
    export type $IScrollableRecipeBook_ = ((arg0: number, arg1: number, arg2: number) => $ScrollAction_);
    export class $IRecipeBookResults {
    }
    export interface $IRecipeBookResults {
        mmt$refreshResultButtons(): void;
        mmt$getPageCount(): number;
        mmt$setCurrentPage(arg0: number): void;
        mmt$getCurrentPage(): number;
    }
    export class $ISpecialScrollableScreen {
    }
    export interface $ISpecialScrollableScreen {
        mmt$onMouseScrolledSpecial(arg0: number, arg1: number, arg2: number): $ScrollAction;
    }
    /**
     * Values that may be interpreted as {@link $ISpecialScrollableScreen}.
     */
    export type $ISpecialScrollableScreen_ = ((arg0: number, arg1: number, arg2: number) => $ScrollAction_);
    export class $IMerchantScreen {
    }
    export interface $IMerchantScreen {
        mmt$getOfferIdOffset(): number;
        mmt$syncOfferId(): void;
        mmt$setOfferId(arg0: number): void;
    }
    export class $ISlot {
    }
    export interface $ISlot {
        mmt$getIndexInInv(): number;
        mmt$getIdInContainer(): number;
    }
    export class $IMerchantMenu {
    }
    export interface $IMerchantMenu {
        mmt$getOffer(arg0: number): $MerchantOffer;
        mmt$getResultSlot(): number;
    }
    export class $ISpecialClickableButtonWidget {
    }
    export interface $ISpecialClickableButtonWidget {
        mmt$mouseClicked(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ISpecialClickableButtonWidget}.
     */
    export type $ISpecialClickableButtonWidget_ = ((arg0: number) => boolean);
}
