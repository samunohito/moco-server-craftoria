import { $SlotReference } from "@package/it/hurts/sskirillss/relics/system/casts/slots/base";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/it/hurts/sskirillss/relics/system/casts/abilities" {
    export class $AbilityReference {
        getSlot(): $SlotReference;
        getId(): string;
        setSlot(arg0: $SlotReference): void;
        setId(arg0: string): void;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): $AbilityReference;
        constructor(arg0: string, arg1: $SlotReference);
        constructor();
    }
}
