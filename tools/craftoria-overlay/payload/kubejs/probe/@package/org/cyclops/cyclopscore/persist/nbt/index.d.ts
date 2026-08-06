import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/org/cyclops/cyclopscore/persist/nbt" {
    export class $INBTProvider {
    }
    export interface $INBTProvider {
        readGeneratedFieldsFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeGeneratedFieldsToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
    }
    export class $INBTSerializable {
    }
    export interface $INBTSerializable {
        fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
    }
}
