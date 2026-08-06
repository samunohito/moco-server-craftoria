import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $CraftingOptionGuiData } from "@package/org/cyclops/integratedterminals/core/client/gui";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/org/cyclops/integratedterminals/api/terminalstorage/location" {
    export class $ITerminalStorageLocation<L> {
    }
    export interface $ITerminalStorageLocation<L> {
        getName(): $ResourceLocation;
        openContainerFromClient<T, M>(arg0: $CraftingOptionGuiData<T, M, L>): void;
        openContainerFromServer<T, M>(arg0: $CraftingOptionGuiData<T, M, L>, arg1: $Level_, arg2: $ServerPlayer): void;
        readFromPacketBuffer(arg0: $RegistryFriendlyByteBuf): L;
        openContainerCraftingPlan<T, M>(arg0: $CraftingOptionGuiData<T, M, L>, arg1: $Level_, arg2: $ServerPlayer): void;
        writeToPacketBuffer(arg0: $RegistryFriendlyByteBuf, arg1: L): void;
        openContainerCraftingOptionAmount<T, M>(arg0: $CraftingOptionGuiData<T, M, L>, arg1: $Level_, arg2: $ServerPlayer): void;
        get name(): $ResourceLocation;
    }
}
