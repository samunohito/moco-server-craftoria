import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BalmEvent } from "@package/net/blay09/mods/balm/api/event";
import { $Animal } from "@package/net/minecraft/world/entity/animal";

declare module "@package/net/blay09/mods/farmingforblockheads/api" {
    export class $FeedingTroughEvent extends $BalmEvent {
        getEntity(): $Animal;
        getItemStack(): $ItemStack;
        getBlockEntity(): $BlockEntity;
        shouldPlayEffect(): boolean;
        setShouldPlayEffect(arg0: boolean): void;
        constructor(arg0: $BlockEntity, arg1: $Animal, arg2: $ItemStack_);
        get entity(): $Animal;
        get itemStack(): $ItemStack;
        get blockEntity(): $BlockEntity;
    }
}
