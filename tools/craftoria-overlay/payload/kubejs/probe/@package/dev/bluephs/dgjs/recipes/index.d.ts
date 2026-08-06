import { $ModifyCraftingItemKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Object } from "@package/java/lang";

declare module "@package/dev/bluephs/dgjs/recipes" {
    export class $DGJSModifyCraftingItemKubeEvent extends $ModifyCraftingItemKubeEvent {
        copy(arg0: $Object, arg1: $Object, ...arg2: string[]): $ItemStack;
        transfer(arg0: $Object, ...arg1: string[]): $ItemStack;
        setResult(arg0: $Object): $ItemStack;
        copyNbt(arg0: $Object, arg1: $Object): $ItemStack;
        copyComponents(arg0: $Object, arg1: $Object): $ItemStack;
        transferComponents(arg0: $Object): $ItemStack;
        copyLore(arg0: $Object, arg1: $Object): $ItemStack;
        copyDamage(arg0: $Object, arg1: $Object): $ItemStack;
        copyComponent(arg0: $Object, arg1: $Object, arg2: string): $ItemStack;
        transferLore(arg0: $Object): $ItemStack;
        copyRepairCost(arg0: $Object, arg1: $Object): $ItemStack;
        transferCustomName(arg0: $Object): $ItemStack;
        transferNbt(arg0: $Object): $ItemStack;
        copyDurability(arg0: $Object, arg1: $Object): $ItemStack;
        copyEnchantments(arg0: $Object, arg1: $Object): $ItemStack;
        copyCustomData(arg0: $Object, arg1: $Object): $ItemStack;
        transferCustomData(arg0: $Object): $ItemStack;
        transferDurability(arg0: $Object): $ItemStack;
        transferRepairCost(arg0: $Object): $ItemStack;
        copyCustomName(arg0: $Object, arg1: $Object): $ItemStack;
        transferComponent(arg0: $Object, arg1: string): $ItemStack;
        transferDamage(arg0: $Object): $ItemStack;
        copyStoredEnchantments(arg0: $Object, arg1: $Object): $ItemStack;
        transferStoredEnchantments(arg0: $Object): $ItemStack;
        transferEnchantments(arg0: $Object): $ItemStack;
        item: $ItemStack;
        grid: $RecipeInput;
        width: number;
        index: number;
        height: number;
        constructor(arg0: $RecipeInput, arg1: number, arg2: number, arg3: $ItemStack_, arg4: number);
        set result(value: $Object);
    }
}
