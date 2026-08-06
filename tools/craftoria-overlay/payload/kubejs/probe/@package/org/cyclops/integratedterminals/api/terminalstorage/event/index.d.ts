import { $Event } from "@package/net/neoforged/bus/api";
import { $ITerminalStorageTabClient, $ITerminalStorageTabCommon$ISlotPositionCallback_, $ITerminalStorageTabCommon_, $ITerminalButton, $ITerminalStorageTabCommon, $ITerminalStorageTabCommon$ISlotPositionCallback } from "@package/org/cyclops/integratedterminals/api/terminalstorage";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List_, $List } from "@package/java/util";
import { $ContainerTerminalStorageBase } from "@package/org/cyclops/integratedterminals/inventory/container";

declare module "@package/org/cyclops/integratedterminals/api/terminalstorage/event" {
    export class $TerminalStorageTabClientLoadButtonsEvent extends $Event {
        getContainer(): $ContainerTerminalStorageBase<any>;
        getButtons(): $List<$ITerminalButton<never, never, never>>;
        getClientTab(): $ITerminalStorageTabClient<never>;
        setButtons(arg0: $List_<$ITerminalButton<never, never, never>>): void;
        constructor(arg0: $ContainerTerminalStorageBase<any>, arg1: $ITerminalStorageTabClient<never>, arg2: $List_<$ITerminalButton<never, never, never>>);
        get container(): $ContainerTerminalStorageBase<any>;
        get clientTab(): $ITerminalStorageTabClient<never>;
    }
    export class $TerminalStorageScreenSizeEvent extends $Event {
        getWidth(): number;
        getHeight(): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        static getWidthHeight(): $Pair<number, number>;
        constructor(arg0: number, arg1: number);
        static get widthHeight(): $Pair<number, number>;
    }
    export class $TerminalStorageTabClientSearchFieldUpdateEvent extends $Event {
        getSearchString(): string;
        getClientTab(): $ITerminalStorageTabClient<never>;
        setSearchString(arg0: string): void;
        constructor(arg0: $ITerminalStorageTabClient<never>, arg1: string);
        get clientTab(): $ITerminalStorageTabClient<never>;
    }
    export class $TerminalStorageTabCommonLoadSlotsEvent extends $Event {
        getContainer(): $ContainerTerminalStorageBase<any>;
        setSlots(arg0: $List_<$Pair<$Slot, $ITerminalStorageTabCommon$ISlotPositionCallback_>>): void;
        getSlots(): $List<$Pair<$Slot, $ITerminalStorageTabCommon$ISlotPositionCallback>>;
        getCommonTab(): $ITerminalStorageTabCommon;
        constructor(arg0: $ITerminalStorageTabCommon_, arg1: $ContainerTerminalStorageBase<any>, arg2: $List_<$Pair<$Slot, $ITerminalStorageTabCommon$ISlotPositionCallback_>>);
        get container(): $ContainerTerminalStorageBase<any>;
        get commonTab(): $ITerminalStorageTabCommon;
    }
}
