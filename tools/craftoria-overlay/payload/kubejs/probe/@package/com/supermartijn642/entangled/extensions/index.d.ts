import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Set, $Set_ } from "@package/java/util";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/supermartijn642/entangled/extensions" {
    export class $BlockCapabilityExtension {
    }
    export interface $BlockCapabilityExtension {
        entangled_getIdentifier(): $ResourceLocation;
        entangled_storeIdentifier(identifier: $ResourceLocation_): void;
    }
    export class $RegisterCapabilitiesEventExtension {
    }
    export interface $RegisterCapabilitiesEventExtension {
        entangled_getRegisteredCapabilities(): $Set<$BlockCapability<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $RegisterCapabilitiesEventExtension}.
     */
    export type $RegisterCapabilitiesEventExtension_ = (() => $Set_<$BlockCapability<never, never>>);
}
