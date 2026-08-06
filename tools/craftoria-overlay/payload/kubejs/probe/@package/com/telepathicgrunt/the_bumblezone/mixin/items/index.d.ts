import { $Level_, $ClipContext$Fluid_ } from "@package/net/minecraft/world/level";
import { $SpawnEggItem } from "@package/net/minecraft/world/item";
import { $EntityType, $Mob } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/telepathicgrunt/the_bumblezone/mixin/items" {
    export class $ItemAccessor {
        static bumblezone$callGetPlayerPOVHitResult(arg0: $Level_, arg1: $Player, arg2: $ClipContext$Fluid_): $BlockHitResult;
    }
    export interface $ItemAccessor {
    }
    export class $PlayerDamageShieldInvoker {
    }
    export interface $PlayerDamageShieldInvoker {
        bumblezone$callHurtCurrentlyUsedShield(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PlayerDamageShieldInvoker}.
     */
    export type $PlayerDamageShieldInvoker_ = ((arg0: number) => void);
    export class $SpawnEggItemAccessor {
        static bumblezone$getIdMap(): $Map<$EntityType<$Mob>, $SpawnEggItem>;
    }
    export interface $SpawnEggItemAccessor {
    }
}
