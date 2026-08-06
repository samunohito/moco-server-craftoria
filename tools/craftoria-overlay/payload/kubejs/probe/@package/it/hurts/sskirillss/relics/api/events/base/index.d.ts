import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/it/hurts/sskirillss/relics/api/events/base" {
    export class $RelicEvent extends $Event {
        getStack(): $ItemStack;
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity | null, arg1: $ItemStack_);
        get stack(): $ItemStack;
        get entity(): $LivingEntity;
    }
}
