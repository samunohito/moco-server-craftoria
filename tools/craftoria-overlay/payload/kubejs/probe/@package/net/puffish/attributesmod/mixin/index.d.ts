import { $Holder$Reference } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceKey } from "@package/net/minecraft/resources";
import { $AttributeModifier$Operation, $AttributeModifier, $AttributeModifier$Operation_, $AttributeModifier_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Collection_ } from "@package/java/util";

declare module "@package/net/puffish/attributesmod/mixin" {
    export class $EntityAttributeInstanceInvoker {
    }
    export interface $EntityAttributeInstanceInvoker {
        invokeGetModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttributeInstanceInvoker}.
     */
    export type $EntityAttributeInstanceInvoker_ = ((arg0: $AttributeModifier$Operation) => $Collection_<$AttributeModifier_>);
    export class $SimpleRegistryAccessor<T> {
    }
    export interface $SimpleRegistryAccessor<T> {
        getIdToEntry(): $Map<$ResourceLocation, $Holder$Reference<T>>;
        getKeyToEntry(): $Map<$ResourceKey<T>, $Holder$Reference<T>>;
        get idToEntry(): $Map<$ResourceLocation, $Holder$Reference<T>>;
        get keyToEntry(): $Map<$ResourceKey<T>, $Holder$Reference<T>>;
    }
}
