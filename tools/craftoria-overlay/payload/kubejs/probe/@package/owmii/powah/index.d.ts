import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";

declare module "@package/owmii/powah" {
    export class $ChargeableItemsEvent extends $Event {
        getPlayer(): $Player;
        getItems(): $List<$ItemStack>;
        constructor(arg0: $Player);
        get player(): $Player;
        get items(): $List<$ItemStack>;
    }
}
