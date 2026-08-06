import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ISerializable } from "@package/io/redspace/ironsspellbooks/api/network";

declare module "@package/io/redspace/ironsspellbooks/gui/overlays" {
    export class $SpellSelection implements $ISerializable, $INBTSerializable<$CompoundTag> {
        isEmpty(): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        readFromBuffer(arg0: $FriendlyByteBuf): void;
        writeToBuffer(arg0: $FriendlyByteBuf): void;
        makeSelection(arg0: string, arg1: number): void;
        lastEquipmentSlot: string;
        equipmentSlot: string;
        index: number;
        lastIndex: number;
        constructor(arg0: string, arg1: number, arg2: string, arg3: number);
        constructor(arg0: string, arg1: number);
        constructor();
        get empty(): boolean;
    }
}
