
declare module "@package/net/swedz/tesseract/neoforge/compat/mi/api" {
    export class $ActiveRecipeHolder<R> {
    }
    export interface $ActiveRecipeHolder<R> {
        getRecipeTotalEuCost(arg0: R): number;
        hasActiveRecipe(): boolean;
        getActiveRecipe(): R;
        getRecipeEuCost(arg0: R): number;
        doConditionsMatchForRecipe(arg0: R): boolean;
        get activeRecipe(): R;
    }
}
