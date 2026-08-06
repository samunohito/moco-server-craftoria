import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/tonimatas/mekanismcurios/util" {
    export class $CuriosSlots extends $Enum<$CuriosSlots> {
        static values(): $CuriosSlots[];
        static valueOf(arg0: string): $CuriosSlots;
        getItem(): $Item;
        getItemStack(arg0: $Player): $ItemStack;
        static QIO: $CuriosSlots;
        static TELEPORTER: $CuriosSlots;
        static CURIOS_SLOT_STREAM_CODEC: $StreamCodec<$ByteBuf, $CuriosSlots>;
        get item(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $CuriosSlots}.
     */
    export type $CuriosSlots_ = "qio" | "teleporter";
}
