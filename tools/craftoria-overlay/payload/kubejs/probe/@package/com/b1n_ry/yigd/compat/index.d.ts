import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $DropRule, $GraveItemModificationConsumer_ } from "@package/com/b1n_ry/yigd/util";
import { $DeathContext_, $GraveItem } from "@package/com/b1n_ry/yigd/data";
import { $List } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/b1n_ry/yigd/compat" {
    export class $InvModCompat<T> {
        static reloadModCompat(): void;
        static invCompatMods: $List<$InvModCompat<never>>;
    }
    export interface $InvModCompat<T> {
        clear(arg0: $ServerPlayer): void;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompatComponent<T>;
        getModName(): string;
        getNewComponent(arg0: $ServerPlayer): $CompatComponent<T>;
        get modName(): string;
    }
    export class $CompatComponent<T> {
        clear(): void;
        isEmpty(): boolean;
        merge(arg0: $CompatComponent<never>, arg1: $ServerPlayer): $NonNullList<$GraveItem>;
        containsAny(arg0: $Predicate_<$ItemStack>): boolean;
        removeItem(arg0: $Predicate_<$ItemStack>, arg1: number): boolean;
        getInventory(arg0: $ServerPlayer): T;
        writeNbt(arg0: $HolderLookup$Provider): $CompoundTag;
        dropItems(arg0: $ServerLevel, arg1: $Vec3_): void;
        handleGraveItems(arg0: $GraveItemModificationConsumer_): void;
        getAsGraveItemList(): $NonNullList<$GraveItem>;
        storeToPlayer(arg0: $ServerPlayer): $NonNullList<$ItemStack>;
        handleDropRules(arg0: $DeathContext_): void;
        containsGraveItems(): boolean;
        dropGraveItems(arg0: $ServerLevel, arg1: $Vec3_): void;
        pullBindingCurseItems(arg0: $ServerPlayer): $NonNullList<$ItemStack>;
        filterInv(arg0: $Predicate_<$DropRule>): $CompatComponent<T>;
        constructor(arg0: $ServerPlayer);
        constructor(arg0: T);
        get empty(): boolean;
        get asGraveItemList(): $NonNullList<$GraveItem>;
    }
}
