import { $Level_ } from "@package/net/minecraft/world/level";
import { $RegisterEvent, $NewRegistryEvent } from "@package/net/neoforged/neoforge/registries";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IIngredientComponentStorage, $IIngredientComponentStorageWrapperHandler } from "@package/org/cyclops/commoncapabilities/api/ingredient/storage";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Comparator, $List, $List_, $Collection } from "@package/java/util";
import { $ICapabilityGetter, $IngredientComponentCapability } from "@package/org/cyclops/commoncapabilities/api/ingredient/capability";
import { $Function_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Comparable, $Object, $Class } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BaseCapability, $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as capability from "@package/org/cyclops/commoncapabilities/api/ingredient/capability";
export * as storage from "@package/org/cyclops/commoncapabilities/api/ingredient/storage";

declare module "@package/org/cyclops/commoncapabilities/api/ingredient" {
    export class $IngredientComponentCategoryType<T, M, C> {
        getName(): $ResourceLocation;
        getClassifier(): $Function<T, C>;
        getCategoryType(): $Class<C>;
        getMatchCondition(): M;
        isReferenceEqual(): boolean;
        isPrimaryQuantifier(): boolean;
        constructor(arg0: $ResourceLocation_, arg1: $Class<C>, arg2: boolean, arg3: $Function_<T, C>, arg4: M, arg5: boolean);
        get name(): $ResourceLocation;
        get classifier(): $Function<T, C>;
        get categoryType(): $Class<C>;
        get matchCondition(): M;
        get referenceEqual(): boolean;
        get primaryQuantifier(): boolean;
    }
    export class $IIngredientMatcher<T, M> {
    }
    export interface $IIngredientMatcher<T, M> extends $Comparator<T> {
        toString(arg0: T): string;
        isInstance(arg0: $Object): boolean;
        hash(arg0: T): number;
        isEmpty(arg0: T): boolean;
        matches(arg0: T, arg1: T, arg2: M): boolean;
        copy(arg0: T): T;
        getDisplayName(arg0: T): $MutableComponent;
        getEmptyInstance(): T;
        getQuantity(arg0: T): number;
        withQuantity(arg0: T, arg1: number): T;
        withCondition(arg0: M, arg1: M): M;
        getAnyMatchCondition(): M;
        localize(arg0: T): string;
        getExactMatchNoQuantityCondition(): M;
        getExactMatchCondition(): M;
        matchesExactly(arg0: T, arg1: T): boolean;
        conditionCompare(arg0: M, arg1: M): number;
        hasCondition(arg0: M, arg1: M): boolean;
        getMaximumQuantity(): number;
        withoutCondition(arg0: M, arg1: M): M;
        get emptyInstance(): T;
        get anyMatchCondition(): M;
        get exactMatchNoQuantityCondition(): M;
        get exactMatchCondition(): M;
        get maximumQuantity(): number;
    }
    export interface $IngredientComponent<T, M> extends RegistryMarked<RegistryTypes.CommoncapabilitiesIngredientcomponentsTag, RegistryTypes.CommoncapabilitiesIngredientcomponents> {}
    export class $IPrototypedIngredient<T, M> {
        static serialize<T, M>(arg0: $HolderLookup$Provider, arg1: $IPrototypedIngredient<T, M>): $CompoundTag;
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $PrototypedIngredient<any, any>;
    }
    export interface $IPrototypedIngredient<T, M> extends $Comparable<$IPrototypedIngredient<never, never>> {
        getCondition(): M;
        getComponent(): $IngredientComponent<$IPrototypedIngredient<never, never>, M>;
        getPrototype(): $IPrototypedIngredient<never, never>;
        get condition(): M;
        get component(): $IngredientComponent<$IPrototypedIngredient<never, never>, M>;
        get prototype(): $IPrototypedIngredient<never, never>;
    }
    export class $IIngredientSerializer<T, M> {
    }
    export interface $IIngredientSerializer<T, M> {
        serializeInstance(arg0: $HolderLookup$Provider, arg1: T): $Tag;
        serializeCondition(arg0: M): $Tag;
        deserializeInstance(arg0: $HolderLookup$Provider, arg1: $Tag_): T;
        deserializeCondition(arg0: $Tag_): M;
    }
    export class $IngredientInstanceWrapper<T, M> implements $Comparable<$IngredientInstanceWrapper<T, M>> {
        compareTo(arg0: $IngredientInstanceWrapper<$IngredientInstanceWrapper<T, M>, M>): number;
        getInstance(): $IngredientInstanceWrapper<T, M>;
        getComponent(): $IngredientComponent<$IngredientInstanceWrapper<T, M>, M>;
        constructor(arg0: $IngredientComponent_<$IngredientInstanceWrapper<T, M>, M>, arg1: $IngredientInstanceWrapper<T, M>);
        get instance(): $IngredientInstanceWrapper<T, M>;
        get component(): $IngredientComponent<$IngredientInstanceWrapper<T, M>, M>;
    }
    export class $IngredientComponent<T, M> implements $Comparable<$IngredientComponent<never, never>> {
        getName(): $ResourceLocation;
        compareTo(arg0: $IngredientComponent_<never, never>): number;
        wrap(arg0: $IngredientComponent_<never, never>): $IngredientInstanceWrapper<$IngredientComponent<never, never>, M>;
        getCapability<TC>(arg0: $IngredientComponentCapability<TC, void>): (TC) | undefined;
        getMatcher(): $IIngredientMatcher<$IngredientComponent<never, never>, M>;
        gatherCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        static onRegistriesCreate(arg0: $NewRegistryEvent): void;
        static onRegistriesFilled(arg0: $RegisterEvent): void;
        getItemStorage<O, C>(arg0: $ItemStack_, arg1: C): $IIngredientComponentStorage<$IngredientComponent<never, never>, M>;
        getCategoryTypes(): $List<$IngredientComponentCategoryType<$IngredientComponent<never, never>, M, never>>;
        getBlockStorage<O, C>(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity | null, arg4: C): $IIngredientComponentStorage<$IngredientComponent<never, never>, M>;
        getEntityStorage<O, C>(arg0: $Entity, arg1: C): $IIngredientComponentStorage<$IngredientComponent<never, never>, M>;
        getSerializer(): $IIngredientSerializer<$IngredientComponent<never, never>, M>;
        setTranslationKey(arg0: string): $IngredientComponent<$IngredientComponent<never, never>, M>;
        getTranslationKey(): string;
        getStorage<O, C>(arg0: $Class<O>, arg1: $ICapabilityGetter<C>, arg2: C): $IIngredientComponentStorage<$IngredientComponent<never, never>, M>;
        static getIngredientComponentForStorageCapability(arg0: $BaseCapability<never, never>): $IngredientComponent<never, never>;
        getStorageWrapperHandlerCapabilities(): $Collection<$BaseCapability<never, never>>;
        setStorageWrapperHandler<S>(arg0: $BaseCapability<never, never>, arg1: $IIngredientComponentStorageWrapperHandler<$IngredientComponent_<never, never>, M, S, never>): void;
        getPrimaryQuantifier(): $IngredientComponentCategoryType<$IngredientComponent<never, never>, M, never>;
        getStorageWrapperHandler<S, C>(arg0: $BaseCapability<S, never>): $IIngredientComponentStorageWrapperHandler<$IngredientComponent<never, never>, M, S, C>;
        static ENERGY: $IngredientComponent<number, boolean>;
        static ITEMSTACK: $IngredientComponent<$ItemStack, number>;
        static FLUIDSTACK: $IngredientComponent<$FluidStack, number>;
        static REGISTRY: $Registry<$IngredientComponent<never, never>>;
        constructor(arg0: string, arg1: $IIngredientMatcher<$IngredientComponent_<never, never>, M>, arg2: $IIngredientSerializer<$IngredientComponent_<never, never>, M>, arg3: $List_<$IngredientComponentCategoryType<$IngredientComponent_<never, never>, M, never>>);
        constructor(arg0: $ResourceLocation_, arg1: $IIngredientMatcher<$IngredientComponent_<never, never>, M>, arg2: $IIngredientSerializer<$IngredientComponent_<never, never>, M>, arg3: $List_<$IngredientComponentCategoryType<$IngredientComponent_<never, never>, M, never>>);
        get name(): $ResourceLocation;
        get matcher(): $IIngredientMatcher<$IngredientComponent<never, never>, M>;
        get categoryTypes(): $List<$IngredientComponentCategoryType<$IngredientComponent<never, never>, M, never>>;
        get serializer(): $IIngredientSerializer<$IngredientComponent<never, never>, M>;
        get storageWrapperHandlerCapabilities(): $Collection<$BaseCapability<never, never>>;
        get primaryQuantifier(): $IngredientComponentCategoryType<$IngredientComponent<never, never>, M, never>;
    }
    /**
     * Values that may be interpreted as {@link $IngredientComponent}.
     */
    export type $IngredientComponent_<T, M> = RegistryTypes.CommoncapabilitiesIngredientcomponents;
}
