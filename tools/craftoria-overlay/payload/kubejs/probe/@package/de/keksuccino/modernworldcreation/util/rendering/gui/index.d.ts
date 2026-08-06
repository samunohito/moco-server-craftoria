import { $Consumer_ } from "@package/java/util/function";
import { $Tab } from "@package/net/minecraft/client/gui/components/tabs";

declare module "@package/de/keksuccino/modernworldcreation/util/rendering/gui" {
    export class $ExtendedTabManager {
    }
    export interface $ExtendedTabManager {
        hasTabChangeListener_ModernWorldCreation(): boolean;
        setTabChangeListener_ModernWorldCreation(arg0: $Consumer_<$Tab>): void;
        set tabChangeListener_ModernWorldCreation(value: $Consumer_<$Tab>);
    }
}
