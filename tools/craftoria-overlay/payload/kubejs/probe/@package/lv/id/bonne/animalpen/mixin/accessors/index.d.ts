import { $Item } from "@package/net/minecraft/world/item";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $SuspiciousStewEffects, $SuspiciousStewEffects_ } from "@package/net/minecraft/world/item/component";
import { $Map } from "@package/java/util";

declare module "@package/lv/id/bonne/animalpen/mixin/accessors" {
    export class $MushroomCowAccessor {
    }
    export interface $MushroomCowAccessor {
        setStewEffects(arg0: $SuspiciousStewEffects_): void;
        set stewEffects(value: $SuspiciousStewEffects_);
    }
    /**
     * Values that may be interpreted as {@link $MushroomCowAccessor}.
     */
    export type $MushroomCowAccessor_ = ((arg0: $SuspiciousStewEffects) => void);
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        setWasTouchingWater(arg0: boolean): void;
        set wasTouchingWater(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = ((arg0: boolean) => void);
    export class $DispenserBlockAccessor {
        static getDispenserRegistry(): $Map<$Item, $DispenseItemBehavior>;
        static get dispenserRegistry(): $Map<$Item, $DispenseItemBehavior>;
    }
    export interface $DispenserBlockAccessor {
    }
}
