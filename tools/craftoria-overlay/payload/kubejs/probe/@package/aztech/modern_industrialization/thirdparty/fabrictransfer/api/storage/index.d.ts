import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag } from "@package/net/minecraft/nbt";
import { $TransactionContext_ } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/transaction";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Iterator } from "@package/java/util";
import { $Iterable, $Class } from "@package/java/lang";
export * as base from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage/base";

declare module "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage" {
    export class $TransferVariant<O> {
    }
    export interface $TransferVariant<O> {
        isBlank(): boolean;
        getObject(): O;
        getComponentsPatch(): $DataComponentPatch;
        toNbt(arg0: $HolderLookup$Provider): $Tag;
        toPacket(arg0: $RegistryFriendlyByteBuf): void;
        isOf(arg0: O): boolean;
        get blank(): boolean;
        get object(): O;
        get componentsPatch(): $DataComponentPatch;
    }
    export class $StorageView<T> {
    }
    export interface $StorageView<T> {
        extract(arg0: T, arg1: number, arg2: $TransactionContext_): number;
        getResource(): T;
        getCapacity(): number;
        getAmount(): number;
        getUnderlyingView(): $StorageView<T>;
        isResourceBlank(): boolean;
        get resource(): T;
        get capacity(): number;
        get amount(): number;
        get underlyingView(): $StorageView<T>;
        get resourceBlank(): boolean;
    }
    export class $Storage<T> {
        static empty<T>(): $Storage<T>;
        static asClass<T>(): $Class<$Storage<T>>;
        [Symbol.iterator](): Iterator<$StorageView<$StorageView<T>>>
    }
    export interface $Storage<T> extends $Iterable<$StorageView<T>> {
        extract(arg0: $StorageView<T>, arg1: number, arg2: $TransactionContext_): number;
        insert(arg0: $StorageView<T>, arg1: number, arg2: $TransactionContext_): number;
        iterator(): $Iterator<$StorageView<$StorageView<T>>>;
        getVersion(): number;
        supportsExtraction(): boolean;
        supportsInsertion(): boolean;
        nonEmptyIterator(): $Iterator<$StorageView<$StorageView<T>>>;
        nonEmptyViews(): $Iterable<$StorageView<$StorageView<T>>>;
        [Symbol.iterator](): Iterator<$StorageView<$StorageView<T>>>
        get version(): number;
    }
}
