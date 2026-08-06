import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Item$TooltipContext, $ItemDisplayContext_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $IVariable, $IValueType, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $MutableComponent, $Component_, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $IVariableModelBaked } from "@package/org/cyclops/integrateddynamics/api/client/model";
import { $IPartNetwork, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/org/cyclops/integrateddynamics/api/item" {
    export class $IVariableFacade {
    }
    export interface $IVariableFacade {
        validate(arg0: $INetwork, arg1: $IPartNetwork, arg2: $IVariableFacade$IValidator_, arg3: $IValueType<any>): void;
        getId(): number;
        isValid(): boolean;
        getLabel(): string;
        getVariable<V extends $IValue>(arg0: $INetwork, arg1: $IPartNetwork): $IVariable<V>;
        appendHoverText(arg0: $List_<$Component_>, arg1: $Item$TooltipContext): void;
        addModelOverlay(arg0: $IVariableModelBaked, arg1: $List_<$BakedQuad>, arg2: $RandomSource, arg3: $ModelData): void;
        getVariableItemOverrideModel(arg0: $BakedModel, arg1: $ItemStack_, arg2: $ClientLevel | null, arg3: $LivingEntity | null): $BakedModel;
        renderISTER(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getOutputType(): $IValueType<any>;
        get id(): number;
        get valid(): boolean;
        get label(): string;
        get outputType(): $IValueType<any>;
    }
    export class $IVariableFacade$IValidator {
    }
    export interface $IVariableFacade$IValidator {
        addError(arg0: $MutableComponent_): void;
    }
    /**
     * Values that may be interpreted as {@link $IVariableFacade$IValidator}.
     */
    export type $IVariableFacade$IValidator_ = ((arg0: $MutableComponent) => void);
}
