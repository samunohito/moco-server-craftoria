import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $MachineProcessCondition$Context } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $MachineRecipe } from "@package/aztech/modern_industrialization/machines/recipe";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/mixin/accessor" {
    export class $CrafterComponentAccessor {
    }
    export interface $CrafterComponentAccessor {
        getConditionContext(): $MachineProcessCondition$Context;
        getActiveRecipe(): $RecipeHolder<$MachineRecipe>;
        get conditionContext(): $MachineProcessCondition$Context;
        get activeRecipe(): $RecipeHolder<$MachineRecipe>;
    }
    export class $ConfigurableStackAccessor<T> {
    }
    export interface $ConfigurableStackAccessor<T> {
        setPlayerLockable(arg0: boolean): void;
        setPipesInsert(arg0: boolean): void;
        setPlayerInsert(arg0: boolean): void;
        setPlayerLocked(arg0: boolean): void;
        setPipesExtract(arg0: boolean): void;
        setPlayerExtract(arg0: boolean): void;
        setLockedInstance(arg0: T): void;
        setMachineLocked(arg0: boolean): void;
        set playerLockable(value: boolean);
        set pipesInsert(value: boolean);
        set playerInsert(value: boolean);
        set playerLocked(value: boolean);
        set pipesExtract(value: boolean);
        set playerExtract(value: boolean);
        set lockedInstance(value: T);
        set machineLocked(value: boolean);
    }
}
