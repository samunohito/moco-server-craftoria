import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Collection_, $UUID } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/easyvillagers/corelib/death" {
    export class $Death {
        getId(): $UUID;
        getTimestamp(): number;
        getPlayerUUID(): $UUID;
        getDimension(): string;
        getExperience(): number;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        getPosZ(): number;
        getModel(): number;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        getPosX(): number;
        getPosY(): number;
        getAllItems(): $NonNullList<$ItemStack>;
        static fromPlayer(arg0: $Player): $Death;
        getBlockPos(): $BlockPos;
        getEquipment(): $NonNullList<$ItemStack>;
        getPlayerName(): string;
        getMainInventory(): $NonNullList<$ItemStack>;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        getArmorInventory(): $NonNullList<$ItemStack>;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        get id(): $UUID;
        get timestamp(): number;
        get playerUUID(): $UUID;
        get dimension(): string;
        get experience(): number;
        get posZ(): number;
        get model(): number;
        get posX(): number;
        get posY(): number;
        get allItems(): $NonNullList<$ItemStack>;
        get blockPos(): $BlockPos;
        get equipment(): $NonNullList<$ItemStack>;
        get playerName(): string;
        get mainInventory(): $NonNullList<$ItemStack>;
        get additionalItems(): $NonNullList<$ItemStack>;
        get armorInventory(): $NonNullList<$ItemStack>;
        get offHandInventory(): $NonNullList<$ItemStack>;
    }
    export class $PlayerDeathEvent extends $Event {
        getSource(): $DamageSource;
        getPlayer(): $ServerPlayer;
        removeDrops(): void;
        storeDeath(): void;
        getDeath(): $Death;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get source(): $DamageSource;
        get player(): $ServerPlayer;
        get death(): $Death;
    }
}
