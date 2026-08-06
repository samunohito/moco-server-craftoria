import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $GraveItem } from "@package/com/b1n_ry/yigd/data";
import { $Enum } from "@package/java/lang";

declare module "@package/com/b1n_ry/yigd/util" {
    export class $DropRule extends $Enum<$DropRule> {
        static values(): $DropRule[];
        static valueOf(arg0: string): $DropRule;
        static PUT_IN_GRAVE: $DropRule;
        static DESTROY: $DropRule;
        static KEEP: $DropRule;
        static DROP: $DropRule;
    }
    /**
     * Values that may be interpreted as {@link $DropRule}.
     */
    export type $DropRule_ = "drop" | "keep" | "destroy" | "put_in_grave";
    export class $GraveItemModificationConsumer {
    }
    export interface $GraveItemModificationConsumer {
        accept(arg0: $ItemStack_, arg1: number, arg2: $GraveItem): void;
    }
    /**
     * Values that may be interpreted as {@link $GraveItemModificationConsumer}.
     */
    export type $GraveItemModificationConsumer_ = ((arg0: $ItemStack, arg1: number, arg2: $GraveItem) => void);
}
