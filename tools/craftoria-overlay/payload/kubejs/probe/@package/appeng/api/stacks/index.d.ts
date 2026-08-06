import { $ItemLike_, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Spliterator, $Iterator, $List, $List_, $Collection, $Set } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $AEKeyFilter } from "@package/appeng/api/storage";
import { $Object2LongMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Class, $Object, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/stacks" {
    export class $AEKeyType {
        contains(arg0: $AEKey): boolean;
        filter(): $AEKeyFilter;
        getId(): $ResourceLocation;
        getKeyClass(): $Class<$AEKey>;
        getDescription(): $Component;
        static items(): $AEKeyType;
        getRawId(): number;
        static fromRawId(arg0: number): $AEKeyType;
        getTagNames(): $Stream<$TagKey<never>>;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        tryCast(arg0: $AEKey): $AEKey;
        static fluids(): $AEKeyType;
        getAmountPerOperation(): number;
        supportsFuzzyRangeSearch(): boolean;
        codec(): $MapCodec<$AEKey>;
        getAmountPerUnit(): number;
        readFromPacket(arg0: $RegistryFriendlyByteBuf): $AEKey;
        getUnitSymbol(): string;
        loadKeyFromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        getAmountPerByte(): number;
        static CODEC: $Codec<$AEKeyType>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$AEKeyType>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKeyType>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<$AEKey>, arg2: $Component_);
        get id(): $ResourceLocation;
        get keyClass(): $Class<$AEKey>;
        get description(): $Component;
        get rawId(): number;
        get tagNames(): $Stream<$TagKey<never>>;
        get amountPerOperation(): number;
        get amountPerUnit(): number;
        get unitSymbol(): string;
        get amountPerByte(): number;
    }
    /**
     * Values that may be interpreted as {@link $AEKeyType}.
     */
    export type $AEKeyType_ = RegistryTypes.Ae2Keytypes;
    export class $KeyCounter implements $Iterable<$Object2LongMap$Entry<$AEKey>> {
        remove(arg0: $AEKey): number;
        remove(arg0: $AEKey, arg1: number): void;
        size(): number;
        reset(): void;
        get(arg0: $AEKey): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $AEKey, arg1: number): void;
        iterator(): $Iterator<$Object2LongMap$Entry<$AEKey>>;
        addAll(arg0: $KeyCounter): void;
        set(arg0: $AEKey, arg1: number): void;
        keySet(): $Set<$AEKey>;
        removeAll(arg0: $KeyCounter): void;
        getFirstEntry<T extends $AEKey>(arg0: $Class<T>): $Object2LongMap$Entry<$AEKey>;
        getFirstEntry(): $Object2LongMap$Entry<$AEKey>;
        removeZeros(): void;
        removeEmptySubmaps(): void;
        getFirstKey<T extends $AEKey>(arg0: $Class<T>): T;
        getFirstKey(): $AEKey;
        findFuzzy(arg0: $AEKey, arg1: $FuzzyMode_): $Collection<$Object2LongMap$Entry<$AEKey>>;
        spliterator(): $Spliterator<$Object2LongMap$Entry<$AEKey>>;
        forEach(arg0: $Consumer_<$Object2LongMap$Entry<$AEKey>>): void;
        constructor();
        [Symbol.iterator](): Iterator<$Object2LongMap$Entry<$AEKey>>
        get empty(): boolean;
    }
    export class $GenericStack extends $Record {
        static isWrapped(arg0: $ItemStack_): boolean;
        static sum(arg0: $GenericStack_, arg1: $GenericStack_): $GenericStack;
        static writeBuffer(arg0: $GenericStack_, arg1: $RegistryFriendlyByteBuf): void;
        what(): $AEKey;
        static readBuffer(arg0: $RegistryFriendlyByteBuf): $GenericStack;
        amount(): number;
        static fromItemStack(arg0: $ItemStack_): $GenericStack;
        static writeTag(arg0: $HolderLookup$Provider, arg1: $GenericStack_): $CompoundTag;
        static unwrapItemStack(arg0: $ItemStack_): $GenericStack;
        static wrapInItemStack(arg0: $GenericStack_): $ItemStack;
        static wrapInItemStack(arg0: $AEKey, arg1: number): $ItemStack;
        static readTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $GenericStack;
        static fromFluidStack(arg0: $FluidStack_): $GenericStack;
        static getStackSizeOrZero(arg0: $GenericStack_): number;
        static FAULT_TOLERANT_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static CODEC: $Codec<$GenericStack>;
        static AMOUNT_FIELD: string;
        static FAULT_TOLERANT_NULLABLE_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GenericStack>;
        constructor(what: $AEKey, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $GenericStack}.
     */
    export type $GenericStack_ = { amount?: number, what?: $AEKey,  } | [amount?: number, what?: $AEKey, ];
    export class $AEItemKey extends $AEKey {
        matches(arg0: $Ingredient_): boolean;
        matches(arg0: $ItemStack_): boolean;
        static matches(arg0: $AEKey, arg1: $ItemStack_): boolean;
        static of(arg0: $ItemStack_): $AEItemKey;
        static of(arg0: $ItemLike_): $AEItemKey;
        static filter(): $AEKeyFilter;
        static is(arg0: $AEKey): boolean;
        is(arg0: $ItemLike_): boolean;
        getItem(): $Item;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEItemKey;
        getMaxStackSize(): number;
        isDamaged(): boolean;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $AEItemKey;
        toStack(): $ItemStack;
        toStack(arg0: number): $ItemStack;
        dropSecondary(): $AEItemKey;
        getReadOnlyStack(): $ItemStack;
        static CODEC: $Codec<$AEItemKey>;
        static MAP_CODEC: $MapCodec<$AEItemKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        get item(): $Item;
        get maxStackSize(): number;
        get damaged(): boolean;
        get readOnlyStack(): $ItemStack;
    }
    export interface $AEKeyType extends RegistryMarked<RegistryTypes.Ae2KeytypesTag, RegistryTypes.Ae2Keytypes> {}
    export class $AEKey {
        get<T>(arg0: $DataComponentType_<T>): T;
        matches(arg0: $GenericStack_): boolean;
        getId(): $ResourceLocation;
        getType(): $AEKeyType;
        getDisplayName(): $Component;
        static writeKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        toTag(arg0: $HolderLookup$Provider): $CompoundTag;
        fuzzyEquals(arg0: $AEKey, arg1: $FuzzyMode_): boolean;
        static readKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        getModId(): string;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        addDrops(arg0: number, arg1: $List_<$ItemStack_>, arg2: $Level_, arg3: $BlockPos_): void;
        isTagged(arg0: $TagKey_<never>): boolean;
        getAmountPerOperation(): number;
        supportsFuzzyRangeSearch(): boolean;
        getPrimaryKey(): $Object;
        static writeOptionalKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        static readOptionalKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        dropSecondary(): $AEKey;
        hasComponents(): boolean;
        getAmountPerUnit(): number;
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        wrapForDisplayOrFilter(): $ItemStack;
        getFuzzySearchMaxValue(): number;
        getFuzzySearchValue(): number;
        getUnitSymbol(): string;
        getAmountPerByte(): number;
        toTagGeneric(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromTagGeneric(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        static CODEC: $Codec<$AEKey>;
        static MAP_CODEC: $MapCodec<$AEKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        constructor();
        get id(): $ResourceLocation;
        get type(): $AEKeyType;
        get displayName(): $Component;
        get modId(): string;
        get amountPerOperation(): number;
        get primaryKey(): $Object;
        get amountPerUnit(): number;
        get fuzzySearchMaxValue(): number;
        get fuzzySearchValue(): number;
        get unitSymbol(): string;
        get amountPerByte(): number;
    }
    export class $AmountFormat extends $Enum<$AmountFormat> {
        static values(): $AmountFormat[];
        static valueOf(arg0: string): $AmountFormat;
        static SLOT_LARGE_FONT: $AmountFormat;
        static SLOT: $AmountFormat;
        static FULL: $AmountFormat;
    }
    /**
     * Values that may be interpreted as {@link $AmountFormat}.
     */
    export type $AmountFormat_ = "full" | "slot" | "slot_large_font";
}
