import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";

declare module "@package/dev/bluephs/createvintageneoforged/compat/kubejs/wrapper" {
    export class $GeneratorsCreateOutput {
        static of(arg0: $ItemStack_): $ProcessingOutput;
        static of(arg0: $ItemStack_, arg1: number): $ProcessingOutput;
    }
    export interface $GeneratorsCreateOutput {
    }
}
