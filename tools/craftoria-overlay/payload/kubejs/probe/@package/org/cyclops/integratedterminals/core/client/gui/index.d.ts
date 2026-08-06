import { $HandlerWrappedTerminalCraftingOption, $HandlerWrappedTerminalCraftingPlan } from "@package/org/cyclops/integratedterminals/core/terminalstorage/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IngredientComponent, $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $ITerminalStorageLocation } from "@package/org/cyclops/integratedterminals/api/terminalstorage/location";

declare module "@package/org/cyclops/integratedterminals/core/client/gui" {
    export class $CraftingOptionGuiData<T, M, L> {
        getLocation(): $ITerminalStorageLocation<L>;
        getChannel(): number;
        copyWithAmount(arg0: number): $CraftingOptionGuiData<T, M, L>;
        getComponent(): $IngredientComponent<T, M>;
        getAmount(): number;
        getLocationInstance(): L;
        static readFromPacketBuffer(arg0: $RegistryFriendlyByteBuf): $CraftingOptionGuiData<any, any, any>;
        getTabName(): string;
        writeToPacketBuffer(arg0: $RegistryFriendlyByteBuf): void;
        getCraftingPlan(): $HandlerWrappedTerminalCraftingPlan;
        getCraftingOption(): $HandlerWrappedTerminalCraftingOption<T>;
        constructor(arg0: $IngredientComponent_<T, M>, arg1: string, arg2: number, arg3: $HandlerWrappedTerminalCraftingOption<T> | null, arg4: number, arg5: $HandlerWrappedTerminalCraftingPlan, arg6: $ITerminalStorageLocation<L>, arg7: L);
        get location(): $ITerminalStorageLocation<L>;
        get channel(): number;
        get component(): $IngredientComponent<T, M>;
        get amount(): number;
        get locationInstance(): L;
        get tabName(): string;
        get craftingPlan(): $HandlerWrappedTerminalCraftingPlan;
        get craftingOption(): $HandlerWrappedTerminalCraftingOption<T>;
    }
}
