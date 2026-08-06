import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/dev/qther/ars_unification/mixin" {
    export class $RecipeManagerAccessor {
    }
    export interface $RecipeManagerAccessor {
        getByName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        get byName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeManagerAccessor}.
     */
    export type $RecipeManagerAccessor_ = (() => $Map_<$ResourceLocation_, $RecipeHolder_<never>>);
}
