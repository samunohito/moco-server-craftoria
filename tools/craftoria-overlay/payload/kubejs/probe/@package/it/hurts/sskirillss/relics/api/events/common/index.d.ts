import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Slot, $ClickAction, $AbstractContainerMenu, $ClickAction_ } from "@package/net/minecraft/world/inventory";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $PlayerContainerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/it/hurts/sskirillss/relics/api/events/common" {
    export class $ContainerSlotClickEvent extends $PlayerContainerEvent implements $ICancellableEvent {
        getSlot(): $Slot;
        getAction(): $ClickAction;
        getHeldStack(): $ItemStack;
        getSlotStack(): $ItemStack;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $AbstractContainerMenu, arg2: $Slot, arg3: $ClickAction_, arg4: $ItemStack_, arg5: $ItemStack_);
        get slot(): $Slot;
        get action(): $ClickAction;
        get heldStack(): $ItemStack;
        get slotStack(): $ItemStack;
    }
    export class $EntityBlockSpeedFactorEvent extends $EntityEvent {
        getState(): $BlockState;
        getSpeedFactor(): number;
        setSpeedFactor(arg0: number): void;
        constructor(arg0: $Entity, arg1: $BlockState_, arg2: number);
        get state(): $BlockState;
    }
    export class $LivingSlippingEvent extends $LivingEvent {
        getState(): $BlockState;
        getFriction(): number;
        setFriction(arg0: number): void;
        constructor(arg0: $LivingEntity, arg1: $BlockState_, arg2: number);
        get state(): $BlockState;
    }
    export class $FluidCollisionEvent extends $LivingEvent implements $ICancellableEvent {
        getFluid(): $FluidState;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $FluidState);
        get fluid(): $FluidState;
    }
    export class $TooltipDisplayEvent extends $Event {
        getStack(): $ItemStack;
        getWidth(): number;
        getHeight(): number;
        getGraphics(): $GuiGraphics;
        getX(): number;
        getY(): number;
        constructor(arg0: $ItemStack_, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number);
        get stack(): $ItemStack;
        get width(): number;
        get height(): number;
        get graphics(): $GuiGraphics;
        get x(): number;
        get y(): number;
    }
}
