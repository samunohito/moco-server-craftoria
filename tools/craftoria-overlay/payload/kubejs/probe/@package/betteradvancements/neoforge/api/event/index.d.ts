import { $AdvancementNode, $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IBetterAdvancementEntryGui } from "@package/betteradvancements/common/api";
import { $IAdvancementDrawConnectionsEvent, $IAdvancementMovedEvent } from "@package/betteradvancements/common/api/event";
import { $List } from "@package/java/util";

declare module "@package/betteradvancements/neoforge/api/event" {
    export class $AdvancementDrawConnectionsEvent extends $Event implements $IAdvancementDrawConnectionsEvent {
        getAdvancement(): $AdvancementNode;
        getExtraConnections(): $List<$AdvancementHolder>;
        constructor(advancement: $AdvancementNode);
        get advancement(): $AdvancementNode;
        get extraConnections(): $List<$AdvancementHolder>;
    }
    export class $AdvancementMovedEvent extends $Event implements $IAdvancementMovedEvent {
        getX(): number;
        getY(): number;
        getAdvancement(): $AdvancementNode;
        constructor(gui: $IBetterAdvancementEntryGui);
        get x(): number;
        get y(): number;
        get advancement(): $AdvancementNode;
    }
}
