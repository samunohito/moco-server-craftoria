import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/klikli_dev/occultism/client/entities" {
    export class $SpiritJobClient {
        static create(): $SpiritJobClient;
        static create(arg0: string): $SpiritJobClient;
        static create(arg0: $ResourceLocation_): $SpiritJobClient;
        modelID(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
}
