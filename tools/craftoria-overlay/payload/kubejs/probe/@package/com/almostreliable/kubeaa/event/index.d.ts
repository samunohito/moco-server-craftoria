import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $UUID_ } from "@package/java/util";
import { $EmpowererRecipe } from "@package/de/ellpeck/actuallyadditions/mod/crafting";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/com/almostreliable/kubeaa/event" {
    export class $EmpowerEvent implements $KubeEvent {
        getState(): $BlockState;
        getLevel(): $ServerLevel;
        getPlayer(): $ServerPlayer;
        getPos(): $BlockPos;
        getRecipe(): $EmpowererRecipe;
        getRecipeId(): $ResourceLocation;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $RecipeHolder_<$EmpowererRecipe>, arg4: $UUID_);
        get state(): $BlockState;
        get level(): $ServerLevel;
        get player(): $ServerPlayer;
        get pos(): $BlockPos;
        get recipe(): $EmpowererRecipe;
        get recipeId(): $ResourceLocation;
    }
}
