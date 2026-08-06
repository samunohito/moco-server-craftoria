import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List, $Map, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Triplet } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/fluids" {
    export class $FluidContainerList implements $Iterable<$FluidContainerList$Category> {
        iterator(): $Iterator<$FluidContainerList$Category>;
        getPossibleEmpty(): $Collection<$Item>;
        getCategories(): $List<$FluidContainerList$Category>;
        getFilled(arg0: $Item_): ($Item) | undefined;
        getEmpty(arg0: $Item_): ($Item) | undefined;
        getCategoryFromFilled(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getCategoryFromEmpty(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getPossibleFilled(): $Collection<$Item>;
        spliterator(): $Spliterator<$FluidContainerList$Category>;
        forEach(arg0: $Consumer_<$FluidContainerList$Category>): void;
        static CODEC: $Codec<$FluidContainerList>;
        constructor(arg0: $List_<$FluidContainerList$Category>);
        constructor();
        [Symbol.iterator](): Iterator<$FluidContainerList$Category>
        get possibleEmpty(): $Collection<$Item>;
        get categories(): $List<$FluidContainerList$Category>;
        get possibleFilled(): $Collection<$Item>;
    }
    export class $SoftFluid {
        isEnabled(): boolean;
        getFlowingTexture(): $ResourceLocation;
        getTintColor(): number;
        getStillTexture(): $ResourceLocation;
        getFoodProvider(): $FoodProvider;
        isEquivalent(arg0: $Holder_<$Fluid>): boolean;
        isFood(): boolean;
        getVanillaFluid(): $Holder<$Fluid>;
        getTintMethod(): $SoftFluid$TintMethod;
        static getFluidSpecificAttributes(arg0: $Fluid_): $Pair<number, $Component>;
        getEquivalentFluids(): $HolderSet<$Fluid>;
        getLuminosity(): number;
        getAverageTextureTintColor(): number;
        getPreservedComponents(): $HolderSet<$DataComponentType<never>>;
        getTranslatedName(): $Component;
        isColored(): boolean;
        afterInit(): void;
        getEmptyContainer(arg0: $Item_): ($Item) | undefined;
        getContainerList(): $FluidContainerList;
        getTextureOverride(): $ResourceLocation;
        /**
         * @deprecated
         */
        isEmptyFluid(): boolean;
        getFilledContainer(arg0: $Item_): ($Item) | undefined;
        static getRenderingData(arg0: $ResourceLocation_): $Triplet<$ResourceLocation, $ResourceLocation, number>;
        getEmissivity(): number;
        static BOTTLE_COUNT: number;
        isGenerated: boolean;
        static CODEC: $Codec<$SoftFluid>;
        static BUCKET_COUNT: number;
        static HOLDER_CODEC: $Codec<$Holder<$SoftFluid>>;
        static TRANSLATABLE_COMPONENT: $Codec<$Component>;
        static BOWL_COUNT: number;
        static WATER_BUCKET_COUNT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SoftFluid>>;
        constructor(arg0: $Holder_<$Fluid>);
        get enabled(): boolean;
        get flowingTexture(): $ResourceLocation;
        get tintColor(): number;
        get stillTexture(): $ResourceLocation;
        get foodProvider(): $FoodProvider;
        get food(): boolean;
        get vanillaFluid(): $Holder<$Fluid>;
        get tintMethod(): $SoftFluid$TintMethod;
        get equivalentFluids(): $HolderSet<$Fluid>;
        get luminosity(): number;
        get averageTextureTintColor(): number;
        get preservedComponents(): $HolderSet<$DataComponentType<never>>;
        get translatedName(): $Component;
        get colored(): boolean;
        get containerList(): $FluidContainerList;
        get textureOverride(): $ResourceLocation;
        get emptyFluid(): boolean;
        get emissivity(): number;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid}.
     */
    export type $SoftFluid_ = RegistryTypes.MoonlightSoftFluid;
    export class $FluidContainerList$Category {
        isEmpty(): boolean;
        getCapacity(): number;
        getFillSound(): $SoundEvent;
        getFirstFilled(): ($Item) | undefined;
        /**
         * @deprecated
         */
        getAmount(): number;
        getEmptyContainer(): $Item;
        getFilledItems(): $List<$Item>;
        getEmptySound(): $SoundEvent;
        static CODEC: $Codec<$FluidContainerList$Category>;
        get empty(): boolean;
        get capacity(): number;
        get fillSound(): $SoundEvent;
        get firstFilled(): ($Item) | undefined;
        get amount(): number;
        get emptyContainer(): $Item;
        get filledItems(): $List<$Item>;
        get emptySound(): $SoundEvent;
    }
    export interface $SoftFluid extends RegistryMarked<RegistryTypes.MoonlightSoftFluidTag, RegistryTypes.MoonlightSoftFluid> {}
    export class $SoftFluid$TintMethod extends $Enum<$SoftFluid$TintMethod> implements $StringRepresentable {
        static values(): $SoftFluid$TintMethod[];
        static valueOf(arg0: string): $SoftFluid$TintMethod;
        getSerializedName(): string;
        appliesToFlowing(): boolean;
        appliesToStill(): boolean;
        getRemappedEnumConstantName(): string;
        static FLOWING: $SoftFluid$TintMethod;
        static CODEC: $Codec<$SoftFluid$TintMethod>;
        static STILL_AND_FLOWING: $SoftFluid$TintMethod;
        static NO_TINT: $SoftFluid$TintMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid$TintMethod}.
     */
    export type $SoftFluid$TintMethod_ = "no_tint" | "flowing" | "still_and_flowing";
    export class $FoodProvider {
        isEmpty(): boolean;
        static create(arg0: $Item_, arg1: number): $FoodProvider;
        consume(arg0: $Player, arg1: $Level_, arg2: $Consumer_<$ItemStack>): boolean;
        getFoodItem(): $Item;
        getDivider(): number;
        static CODEC: $Codec<$FoodProvider>;
        static CUSTOM_PROVIDERS: $Map<$Item, $FoodProvider>;
        static EMPTY: $FoodProvider;
        get empty(): boolean;
        get foodItem(): $Item;
        get divider(): number;
    }
}
