import { $Holder_, $HolderSet_, $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/kekecreations/arts_and_crafts/common/item/palette" {
    export interface $PaintbrushPalette extends RegistryMarked<RegistryTypes.ArtsAndCraftsPaintbrushPaletteTag, RegistryTypes.ArtsAndCraftsPaintbrushPalette> {}
    export class $PaintbrushPalette extends $Record {
        mappings(): $Map<$Holder<$Item>, $Holder<$Block>>;
        blocks(): $HolderSet<$Block>;
        static CODEC: $Codec<$PaintbrushPalette>;
        constructor(blocks: $HolderSet_<$Block>, mappings: $Map_<$Holder_<$Item>, $Holder_<$Block>>);
    }
    /**
     * Values that may be interpreted as {@link $PaintbrushPalette}.
     */
    export type $PaintbrushPalette_ = RegistryTypes.ArtsAndCraftsPaintbrushPalette | { blocks?: $HolderSet_<$Block>, mappings?: $Map_<$Holder_<$Item>, $Holder_<$Block>>,  } | [blocks?: $HolderSet_<$Block>, mappings?: $Map_<$Holder_<$Item>, $Holder_<$Block>>, ];
}
