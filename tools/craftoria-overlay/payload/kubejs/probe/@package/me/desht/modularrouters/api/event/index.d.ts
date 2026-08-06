import { $ModuleItem } from "@package/me/desht/modularrouters/item/module";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $CompiledModule } from "@package/me/desht/modularrouters/logic/compiled";
import { $ModularRouterBlockEntity } from "@package/me/desht/modularrouters/block/tile";
import { $DataSlot } from "@package/net/minecraft/world/inventory";
import { $Map } from "@package/java/util";

declare module "@package/me/desht/modularrouters/api/event" {
    export class $ExecuteModuleEvent extends $Event implements $ICancellableEvent {
        getModule(): $CompiledModule;
        isExecuted(): boolean;
        getRouter(): $ModularRouterBlockEntity;
        setCanceled(arg0: boolean): void;
        setExecuted(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ModularRouterBlockEntity, arg1: $CompiledModule);
        get module(): $CompiledModule;
        get router(): $ModularRouterBlockEntity;
    }
    export class $RouterCompiledEvent$Modules extends $RouterCompiledEvent {
        constructor(arg0: $ModularRouterBlockEntity);
    }
    export class $AddModuleTargetEvent extends $Event {
        getModule(): $ItemStack;
        getContext(): $UseOnContext;
        isValid(): boolean;
        getModuleType(): $ModuleItem;
        setValid(arg0: boolean): void;
        constructor(arg0: $ModuleItem, arg1: $UseOnContext, arg2: boolean);
        get module(): $ItemStack;
        get context(): $UseOnContext;
        get moduleType(): $ModuleItem;
    }
    export class $RegisterRouterContainerData extends $Event {
        register(arg0: $ResourceLocation_, arg1: $DataSlot): void;
        getData(): $Map<$ResourceLocation, $DataSlot>;
        getRouter(): $ModularRouterBlockEntity;
        constructor(arg0: $ModularRouterBlockEntity);
        get data(): $Map<$ResourceLocation, $DataSlot>;
        get router(): $ModularRouterBlockEntity;
    }
    export class $RouterCompiledEvent$Upgrades extends $RouterCompiledEvent {
        constructor(arg0: $ModularRouterBlockEntity);
    }
    export class $RouterCompiledEvent extends $Event {
        getRouter(): $ModularRouterBlockEntity;
        constructor(arg0: $ModularRouterBlockEntity);
        get router(): $ModularRouterBlockEntity;
    }
}
