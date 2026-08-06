import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ModItems$ITintable } from "@package/me/desht/modularrouters/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModularRouterBlockEntity } from "@package/me/desht/modularrouters/block/tile";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $TintColor } from "@package/me/desht/modularrouters/client/util";
import { $MRBaseItem } from "@package/me/desht/modularrouters/item";

declare module "@package/me/desht/modularrouters/item/upgrade" {
    export class $UpgradeItem extends $MRBaseItem implements $ModItems$ITintable {
        isCompatibleWith(arg0: $UpgradeItem): boolean;
        getItemTint(): $TintColor;
        getInstalledStackLimit(): number;
        processClientSync(arg0: $ModularRouterBlockEntity, arg1: $CompoundTag_): void;
        createUpdateTag(arg0: $ModularRouterBlockEntity): $CompoundTag;
        onCompiled(arg0: $ItemStack_, arg1: $ModularRouterBlockEntity): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
        get itemTint(): $TintColor;
        get installedStackLimit(): number;
    }
}
