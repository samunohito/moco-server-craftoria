import { $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $WorldCreationUiState } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $TabNavigationBar, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $List } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/de/keksuccino/modernworldcreation/mixin/mixins/common/client" {
    export class $IMixinCreateWorldScreen {
    }
    export interface $IMixinCreateWorldScreen {
        invoke_openExperimentsScreen_ModernWorldCreation(arg0: $WorldDataConfiguration_): void;
        get_uiState_ModernWorldCreation(): $WorldCreationUiState;
        get_tabNavigationBar_ModernWorldCreation(): $TabNavigationBar;
        get _uiState_ModernWorldCreation(): $WorldCreationUiState;
        get _tabNavigationBar_ModernWorldCreation(): $TabNavigationBar;
    }
    export class $IMixinTabNavigationBar {
    }
    export interface $IMixinTabNavigationBar {
        get_tabManager_ModernWorldCreation(): $TabManager;
        get _tabManager_ModernWorldCreation(): $TabManager;
    }
    /**
     * Values that may be interpreted as {@link $IMixinTabNavigationBar}.
     */
    export type $IMixinTabNavigationBar_ = (() => $TabManager);
    export class $IMixinScreen {
    }
    export interface $IMixinScreen {
        invoke_setInitialFocus_ModernWorldCreation(arg0: $GuiEventListener): void;
        get_narratables_ModernWorldCreation(): $List<$NarratableEntry>;
        get_renderables_ModernWorldCreation(): $List<$Renderable>;
        get_children_ModernWorldCreation(): $List<$GuiEventListener>;
        get _narratables_ModernWorldCreation(): $List<$NarratableEntry>;
        get _renderables_ModernWorldCreation(): $List<$Renderable>;
        get _children_ModernWorldCreation(): $List<$GuiEventListener>;
    }
}
