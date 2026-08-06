import { $Level } from "@package/net/minecraft/world/level";
import { $TagEmptyConditionWrapper, $FalseConditionWrapper, $AndConditionWrapper, $ItemExistsConditionWrapper, $TrueConditionWrapper, $ModLoadedConditionWrapper, $NotConditionWrapper, $OrConditionWrapper } from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/wrapper";
import { $Holder } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ICondition$IContext, $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $IsInBiomeCondition, $IsInDimensionTypeCondition, $IsInBiomeWithTagCondition, $IsInDimensionCondition } from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/condition";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
export * as wrapper from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/wrapper";
export * as condition from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/condition";

declare module "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension" {
    export class $OccultismConditionContext {
        static EMPTY: $OccultismConditionContext;
    }
    export interface $OccultismConditionContext extends $ICondition$IContext {
        level(): $ServerLevel;
        dimensionType(): $Holder<$DimensionType>;
        dimension(): $ResourceKey<$Level>;
        biome(): $Holder<$Biome>;
    }
    export class $ConditionVisitor {
    }
    export interface $ConditionVisitor {
        visit(arg0: $ModLoadedConditionWrapper, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $TagEmptyConditionWrapper, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $IsInBiomeCondition, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $IsInBiomeWithTagCondition, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $IsInDimensionCondition, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $IsInDimensionTypeCondition, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $AndConditionWrapper, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $OrConditionWrapper, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $TrueConditionWrapper, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $FalseConditionWrapper, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $NotConditionWrapper, arg1: $OccultismConditionContext): $MutableComponent;
        visit(arg0: $ItemExistsConditionWrapper, arg1: $OccultismConditionContext): $MutableComponent;
    }
    export class $ConditionWrapper<T extends $ICondition> {
    }
    export interface $ConditionWrapper<T extends $ICondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): T;
    }
}
