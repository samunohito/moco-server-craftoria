import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/dev/imb11/sounds/util" {
    export class $BlockAccessor {
    }
    export interface $BlockAccessor {
        sounds$prepareTagPair(arg0: $ResourceLocation_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockAccessor}.
     */
    export type $BlockAccessor_ = ((arg0: $ResourceLocation) => void);
}
