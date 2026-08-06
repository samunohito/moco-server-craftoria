import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ITerminalStorageTabServer, $TerminalClickType } from "@package/org/cyclops/integratedterminals/api/terminalstorage";
import { $IVariable } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $IPositionedAddonsNetworkIngredients, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $IIngredientComponentStorageObservable$StorageChangeEvent, $IIngredientComponentStorageObservable$IIndexChangeObserver } from "@package/org/cyclops/integrateddynamics/api/ingredient";
import { $List_ } from "@package/java/util";
import { $ValueTypeOperator$ValueOperator } from "@package/org/cyclops/integrateddynamics/core/evaluate/variable";
export * as crafting from "@package/org/cyclops/integratedterminals/core/terminalstorage/crafting";

declare module "@package/org/cyclops/integratedterminals/core/terminalstorage" {
    export class $TerminalStorageTabIngredientComponentServer<T, M> implements $ITerminalStorageTabServer, $IIngredientComponentStorageObservable$IIndexChangeObserver<T, M> {
        getName(): $ResourceLocation;
        init(): void;
        onChange(arg0: $IIngredientComponentStorageObservable$StorageChangeEvent<T, M>): void;
        updateActive(): void;
        getNetwork(): $INetwork;
        getIngredientNetwork(): $IPositionedAddonsNetworkIngredients<T, M>;
        updateFilter(arg0: $List_<$IVariable<$ValueTypeOperator$ValueOperator>>, arg1: $TerminalStorageTabIngredientComponentCommon<never, never>): void;
        deInit(): void;
        handleStorageSlotClick(arg0: $AbstractContainerMenu, arg1: $ServerPlayer, arg2: $TerminalClickType, arg3: number, arg4: T, arg5: number, arg6: number, arg7: T, arg8: boolean): void;
        constructor(arg0: $ResourceLocation_, arg1: $INetwork, arg2: $IngredientComponent_<T, M>, arg3: $IPositionedAddonsNetworkIngredients<T, M>, arg4: $ServerPlayer);
        get name(): $ResourceLocation;
        get network(): $INetwork;
        get ingredientNetwork(): $IPositionedAddonsNetworkIngredients<T, M>;
    }
}
