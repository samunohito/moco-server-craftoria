import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/it/hurts/sskirillss/relics/system/casts/slots/base" {
    export class $SlotReference {
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): $SlotReference;
        gatherStack(arg0: $Player): $ItemStack;
        constructor();
    }
}
