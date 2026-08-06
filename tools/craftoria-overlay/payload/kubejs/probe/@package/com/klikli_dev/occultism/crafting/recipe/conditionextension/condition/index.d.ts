import { $Level } from "@package/net/minecraft/world/level";
import { $ConditionVisitor, $ConditionWrapper, $OccultismConditionContext } from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ICondition$IContext_, $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";

declare module "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/condition" {
    export class $IsInBiomeCondition implements $ICondition, $ConditionWrapper<$IsInBiomeCondition> {
        test(arg0: $ICondition$IContext_): boolean;
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        biome(): $Holder<$Biome>;
        codec(): $MapCodec<$ICondition>;
        condition(): $IsInBiomeCondition;
        static CODEC: $MapCodec<$IsInBiomeCondition>;
        constructor(arg0: $Holder_<$Biome>);
    }
    export class $IsInDimensionCondition implements $ICondition, $ConditionWrapper<$IsInDimensionCondition> {
        test(arg0: $ICondition$IContext_): boolean;
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        dimension(): $ResourceKey<$Level>;
        codec(): $MapCodec<$ICondition>;
        condition(): $IsInDimensionCondition;
        static CODEC: $MapCodec<$IsInDimensionCondition>;
        constructor(arg0: $ResourceKey_<$Level>);
    }
    export class $IsInBiomeWithTagCondition implements $ICondition, $ConditionWrapper<$IsInBiomeWithTagCondition> {
        test(arg0: $ICondition$IContext_): boolean;
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        tag(): $TagKey<$Biome>;
        codec(): $MapCodec<$ICondition>;
        condition(): $IsInBiomeWithTagCondition;
        static CODEC: $MapCodec<$IsInBiomeWithTagCondition>;
        constructor(arg0: $TagKey_<$Biome>);
    }
    export class $IsInDimensionTypeCondition implements $ICondition, $ConditionWrapper<$IsInDimensionTypeCondition> {
        test(arg0: $ICondition$IContext_): boolean;
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        dimensionType(): $Holder<$DimensionType>;
        codec(): $MapCodec<$ICondition>;
        condition(): $IsInDimensionTypeCondition;
        static CODEC: $MapCodec<$IsInDimensionTypeCondition>;
        constructor(arg0: $Holder_<$DimensionType>);
    }
}
