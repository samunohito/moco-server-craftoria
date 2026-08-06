import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $WorldSelectionList } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $ServerSelectionList, $ServerSelectionList$OnlineServerEntry, $JoinMultiplayerScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $EditBox, $Button } from "@package/net/minecraft/client/gui/components";
import { $LevelSummary } from "@package/net/minecraft/world/level/storage";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/illusivesoulworks/cherishedworlds/mixin/core" {
    export class $AccessorWorldSelectionScreen {
    }
    export interface $AccessorWorldSelectionScreen {
        getList(): $WorldSelectionList;
        getDeleteButton(): $Button;
        getSearchBox(): $EditBox;
        get list(): $WorldSelectionList;
        get deleteButton(): $Button;
        get searchBox(): $EditBox;
    }
    export class $AccessorJoinMultiplayerScreen {
    }
    export interface $AccessorJoinMultiplayerScreen {
        getDeleteButton(): $Button;
        getSelectionList(): $ServerSelectionList;
        get deleteButton(): $Button;
        get selectionList(): $ServerSelectionList;
    }
    export class $AccessorWorldSelectionListEntry {
    }
    export interface $AccessorWorldSelectionListEntry {
        getWorldSummary(): $LevelSummary;
        get worldSummary(): $LevelSummary;
    }
    /**
     * Values that may be interpreted as {@link $AccessorWorldSelectionListEntry}.
     */
    export type $AccessorWorldSelectionListEntry_ = (() => $LevelSummary);
    export class $AccessorWorldSelectionList {
    }
    export interface $AccessorWorldSelectionList {
        getCurrentlyDisplayedLevels(): $List<$LevelSummary>;
        callFillLevels(arg0: string, arg1: $List_<$LevelSummary>): void;
        get currentlyDisplayedLevels(): $List<$LevelSummary>;
    }
    export class $AccessorServerSelectionListEntry {
        static cherishedworlds$createEntry(arg0: $ServerSelectionList, arg1: $JoinMultiplayerScreen, arg2: $ServerData): $ServerSelectionList$OnlineServerEntry;
    }
    export interface $AccessorServerSelectionListEntry {
    }
}
