import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Slot } from "@package/net/minecraft/world/inventory";

declare module "@package/com/periut/chisel/mixins" {
    export class $HandledScreenAccessor {
    }
    export interface $HandledScreenAccessor {
        getHeldButtonType(): number;
        getTouchDragStack(): $ItemStack;
        getTouchIsRightClickDrag(): boolean;
        invokeCalculateOffset(): void;
        getTouchDragSlotStart(): $Slot;
        get heldButtonType(): number;
        get touchDragStack(): $ItemStack;
        get touchIsRightClickDrag(): boolean;
        get touchDragSlotStart(): $Slot;
    }
}
