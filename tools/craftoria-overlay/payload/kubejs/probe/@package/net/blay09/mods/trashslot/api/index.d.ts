import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BalmEvent } from "@package/net/blay09/mods/balm/api/event";

declare module "@package/net/blay09/mods/trashslot/api" {
    export class $ItemTrashedEvent extends $BalmEvent {
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $TrashSlotEmptiedEvent extends $BalmEvent {
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $ItemTrashedEvent$Pre extends $ItemTrashedEvent {
        constructor(arg0: $Player, arg1: $ItemStack_);
    }
    export class $ItemUntrashedEvent extends $BalmEvent {
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $ItemTrashedEvent$Post extends $ItemTrashedEvent {
        constructor(arg0: $Player, arg1: $ItemStack_);
    }
}
