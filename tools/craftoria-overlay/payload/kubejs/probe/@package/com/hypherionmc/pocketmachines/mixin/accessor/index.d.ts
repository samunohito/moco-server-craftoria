import { $ContainerListener_, $ContainerListener } from "@package/net/minecraft/world";
import { $MenuScreens$ScreenConstructor_, $Screen } from "@package/net/minecraft/client/gui/screens";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/hypherionmc/pocketmachines/mixin/accessor" {
    export class $MenuScreensAccess {
        static pocketmachines_register<M extends $AbstractContainerMenu, U extends $Screen>(arg0: $MenuType_<M>, arg1: $MenuScreens$ScreenConstructor_<M, U>): void;
    }
    export interface $MenuScreensAccess {
    }
    export class $SimpleContainerAccessor {
    }
    export interface $SimpleContainerAccessor {
        getListeners(): $List<$ContainerListener>;
        get listeners(): $List<$ContainerListener>;
    }
    /**
     * Values that may be interpreted as {@link $SimpleContainerAccessor}.
     */
    export type $SimpleContainerAccessor_ = (() => $List_<$ContainerListener_>);
}
