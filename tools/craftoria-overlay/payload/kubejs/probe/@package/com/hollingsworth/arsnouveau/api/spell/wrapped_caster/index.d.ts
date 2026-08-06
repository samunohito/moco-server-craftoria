import { $Predicate_ } from "@package/java/util/function";
import { $Direction } from "@package/net/minecraft/core";
import { $SpellContext$CasterType } from "@package/com/hollingsworth/arsnouveau/api/spell";
import { $List } from "@package/java/util";
import { $InventoryManager, $FilterableItemHandler } from "@package/com/hollingsworth/arsnouveau/api/item/inv";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/hollingsworth/arsnouveau/api/spell/wrapped_caster" {
    export class $IWrappedCaster {
    }
    export interface $IWrappedCaster {
        getPosition(): $Vec3;
        getInventory(): $List<$FilterableItemHandler>;
        getFacingDirection(): $Direction;
        enoughMana(arg0: number): boolean;
        expendMana(arg0: number): void;
        getInvManager(): $InventoryManager;
        getNearbyBlockEntity(arg0: $Predicate_<$BlockEntity>): $BlockEntity;
        getCasterType(): $SpellContext$CasterType;
        get position(): $Vec3;
        get inventory(): $List<$FilterableItemHandler>;
        get facingDirection(): $Direction;
        get invManager(): $InventoryManager;
        get casterType(): $SpellContext$CasterType;
    }
}
