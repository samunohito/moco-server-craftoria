import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/com/hollingsworth/arsnouveau/api/nbt" {
    export class $ITagSerializable {
    }
    export interface $ITagSerializable {
        serialize(): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $ITagSerializable}.
     */
    export type $ITagSerializable_ = (() => $CompoundTag_);
}
