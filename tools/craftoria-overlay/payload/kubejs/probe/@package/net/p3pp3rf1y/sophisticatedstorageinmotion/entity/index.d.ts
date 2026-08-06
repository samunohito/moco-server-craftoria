import { $BiFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StorageHolderBase } from "@package/net/p3pp3rf1y/sophisticatedstorage/entity";
import { $MovingStorageContainerMenu } from "@package/net/p3pp3rf1y/sophisticatedstorageinmotion/common/gui";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/p3pp3rf1y/sophisticatedstorageinmotion/entity" {
    export class $IMovingStorageEntity {
    }
    export interface $IMovingStorageEntity {
        getStorageItem(): $ItemStack;
        getStorageHolder(): $EntityStorageHolder<never>;
        getDropStack(arg0: $ItemStack_): $ItemStack;
        setStorageItem(arg0: $ItemStack_): void;
        instantiateExtraSlots(): $List<$Slot>;
        get storageHolder(): $EntityStorageHolder<never>;
    }
    export class $EntityStorageHolder<T extends $Entity> extends $StorageHolderBase {
        isLocked(arg0: $ItemStack_): boolean;
        pack(): boolean;
        onPlace(): void;
        hurt(arg0: $DamageSource_, arg1: number, arg2: $BiFunction_<$DamageSource, number, boolean>): boolean;
        setStorageItemFrom(arg0: $ItemStack_, arg1: boolean): void;
        createMenu(arg0: number, arg1: $Player): $MovingStorageContainerMenu<$Entity>;
        onDestroy(): void;
        readData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        saveData(arg0: $HolderLookup$Provider): $CompoundTag;
        setStorageItemAndCustomNameFromMovingStorageStack(arg0: $ItemStack_, arg1: boolean): void;
        constructor(arg0: T);
    }
}
