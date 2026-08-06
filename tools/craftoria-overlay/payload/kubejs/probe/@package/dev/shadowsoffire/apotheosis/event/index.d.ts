import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";

declare module "@package/dev/shadowsoffire/apotheosis/event" {
    export class $GetItemSocketsEvent extends $Event {
        getStack(): $ItemStack;
        getSockets(): number;
        setSockets(arg0: number): void;
        constructor(arg0: $ItemStack_, arg1: number);
        get stack(): $ItemStack;
    }
    export class $ItemSocketingEvent extends $Event {
        setOutput(arg0: $ItemStack_): void;
        getOutput(): $ItemStack;
        getInputStack(): $ItemStack;
        getInputGem(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_);
        get inputStack(): $ItemStack;
        get inputGem(): $ItemStack;
    }
    export class $CanSocketGemEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        getInputStack(): $ItemStack;
        getInputGem(): $ItemStack;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_);
        get inputStack(): $ItemStack;
        get inputGem(): $ItemStack;
    }
}
