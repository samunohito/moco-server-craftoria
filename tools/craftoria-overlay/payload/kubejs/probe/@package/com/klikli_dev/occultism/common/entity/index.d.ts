import { $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
export * as job from "@package/com/klikli_dev/occultism/common/entity/job";
export * as spirit from "@package/com/klikli_dev/occultism/common/entity/spirit";

declare module "@package/com/klikli_dev/occultism/common/entity" {
    export class $IFilterConfigurable {
    }
    export interface $IFilterConfigurable {
        getName(): $Component;
        getId(): number;
        getEntity(): $LivingEntity;
        getInventory(): $ItemStackHandler;
        getFilterItems(): $ItemStackHandler;
        setTagFilter(arg0: string): void;
        getTagFilter(): string;
        setFilterBlacklist(arg0: boolean): void;
        isFilterBlacklist(): boolean;
        get name(): $Component;
        get id(): number;
        get entity(): $LivingEntity;
        get inventory(): $ItemStackHandler;
        get filterItems(): $ItemStackHandler;
    }
}
