import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RelicEvent } from "@package/it/hurts/sskirillss/relics/api/events/base";

declare module "@package/it/hurts/sskirillss/relics/api/events/leveling" {
    export class $ExperienceAddEvent extends $RelicEvent implements $ICancellableEvent {
        setAmount(arg0: number): void;
        getAmount(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity | null, arg1: $ItemStack_, arg2: number);
    }
}
