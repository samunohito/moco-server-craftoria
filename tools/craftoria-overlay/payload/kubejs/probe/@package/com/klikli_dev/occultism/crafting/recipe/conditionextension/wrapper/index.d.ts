import { $ConditionVisitor, $ConditionWrapper, $OccultismConditionContext } from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $TagEmptyCondition_, $TrueCondition, $ModLoadedCondition, $OrCondition_, $NotCondition_, $OrCondition, $ItemExistsCondition, $ModLoadedCondition_, $TagEmptyCondition, $AndCondition_, $AndCondition, $NotCondition, $FalseCondition } from "@package/net/neoforged/neoforge/common/conditions";

declare module "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/wrapper" {
    export class $ModLoadedConditionWrapper implements $ConditionWrapper<$ModLoadedCondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $ModLoadedCondition;
        constructor(arg0: $ModLoadedCondition_);
    }
    export class $NotConditionWrapper implements $ConditionWrapper<$NotCondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $NotCondition;
        constructor(arg0: $NotCondition_);
    }
    export class $AndConditionWrapper implements $ConditionWrapper<$AndCondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $AndCondition;
        constructor(arg0: $AndCondition_);
    }
    export class $OrConditionWrapper implements $ConditionWrapper<$OrCondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $OrCondition;
        constructor(arg0: $OrCondition_);
    }
    export class $ItemExistsConditionWrapper implements $ConditionWrapper<$ItemExistsCondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $ItemExistsCondition;
        constructor(arg0: $ItemExistsCondition);
    }
    export class $TagEmptyConditionWrapper implements $ConditionWrapper<$TagEmptyCondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $TagEmptyCondition;
        constructor(arg0: $TagEmptyCondition_);
    }
    export class $TrueConditionWrapper implements $ConditionWrapper<$TrueCondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $TrueCondition;
        constructor(arg0: $TrueCondition);
    }
    export class $FalseConditionWrapper implements $ConditionWrapper<$FalseCondition> {
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $FalseCondition;
        constructor(arg0: $FalseCondition);
    }
}
