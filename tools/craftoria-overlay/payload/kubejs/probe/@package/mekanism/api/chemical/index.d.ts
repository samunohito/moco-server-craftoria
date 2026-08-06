import { $IWithData, $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $IHasTranslationKey, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Item, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";
import { $ToDoubleFunction_, $Function_, $ToIntBiFunction_, $Consumer_, $Predicate_, $BiFunction_, $ToLongBiFunction_, $ToDoubleBiFunction_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Holder_, $HolderSet_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Class } from "@package/java/lang";
import { $IChemicalProvider } from "@package/mekanism/api/providers";
import { $ChemicalAttribute, $ChemicalAttributeValidator, $IChemicalAttributeContainer } from "@package/mekanism/api/chemical/attribute";
import { $IChemicalAttribute } from "@package/mekanism/api/datamaps/chemical/attribute";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as attribute from "@package/mekanism/api/chemical/attribute";

declare module "@package/mekanism/api/chemical" {
    export class $ChemicalBuilder {
        static builder(arg0: $ResourceLocation_): $ChemicalBuilder;
        static builder(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        "with"(arg0: $ChemicalAttribute): $ChemicalBuilder;
        tint(arg0: number): $ChemicalBuilder;
        /**
         * @deprecated
         */
        ore(arg0: $TagKey_<$Item>): $ChemicalBuilder;
        /**
         * @deprecated
         */
        ore(arg0: $ResourceLocation_): $ChemicalBuilder;
        getTexture(): $ResourceLocation;
        /**
         * @deprecated
         */
        gaseous(): $ChemicalBuilder;
        static pigment(): $ChemicalBuilder;
        getTint(): number;
        /**
         * @deprecated
         */
        getOreTag(): $TagKey<$Item>;
        static infuseType(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        isGaseous(): boolean;
        /**
         * @deprecated
         */
        getAttributeMap(): $Map<$Class<$ChemicalAttribute>, $ChemicalAttribute>;
        static dirtySlurry(): $ChemicalBuilder;
        static cleanSlurry(): $ChemicalBuilder;
        get texture(): $ResourceLocation;
        get oreTag(): $TagKey<$Item>;
        get attributeMap(): $Map<$Class<$ChemicalAttribute>, $ChemicalAttribute>;
    }
    export class $ChemicalStack implements $IHasTextComponent, $IHasTranslationKey, $IChemicalAttributeContainer<$ChemicalStack>, $IWithData<$Chemical> {
        /**
         * @deprecated
         */
        get<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        isEmpty(): boolean;
        split(arg0: number): $ChemicalStack;
        save(arg0: $HolderLookup$Provider): $Tag;
        save(arg0: $HolderLookup$Provider, arg1: $Tag_): $Tag;
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($ChemicalStack) | undefined;
        copy(): $ChemicalStack;
        is(arg0: $HolderSet_<$Chemical>): boolean;
        is(arg0: $Chemical_): boolean;
        is(arg0: $Predicate_<$Holder<$Chemical>>): boolean;
        is(arg0: $Holder_<$Chemical>): boolean;
        is(arg0: $TagKey_<$Chemical>): boolean;
        /**
         * @deprecated
         */
        getAttributes(): $Collection<$ChemicalAttribute>;
        grow(arg0: number): void;
        getData<T>(arg0: $DataMapType<$Chemical_, T>): T;
        /**
         * @deprecated
         */
        has(arg0: $Class<$ChemicalAttribute>): boolean;
        setAmount(arg0: number): void;
        copyWithAmount(arg0: number): $ChemicalStack;
        static fixedAmountCodec(arg0: number): $Codec<$ChemicalStack>;
        static parseOptional(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ChemicalStack;
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        shrink(arg0: number): void;
        getChemicalColorRepresentation(): number;
        getAmount(): number;
        limitSize(arg0: number): void;
        /**
         * @deprecated
         */
        getTypeRegistryName(): $ResourceLocation;
        appendHoverText(arg0: $Item$TooltipContext, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
        getTags(): $Stream<$TagKey<$Chemical>>;
        getTextComponent(): $Component;
        getChemical(): $Chemical;
        copyAndClear(): $ChemicalStack;
        getTranslationKey(): string;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        getChemicalTint(): number;
        getChemicalHolder(): $Holder<$Chemical>;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        static isSameChemical(arg0: $ChemicalStack, arg1: $ChemicalStack): boolean;
        isRadioactive(): boolean;
        getRadioactivity(): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<$ChemicalStack, ATTRIBUTE, V>, arg2: V): V;
        static LENIENT_OPTIONAL_CODEC: $Codec<$ChemicalStack>;
        static CODEC: $Codec<$ChemicalStack>;
        /**
         * @deprecated
         */
        static CHEMICAL_NON_EMPTY_CODEC: $Codec<$Chemical>;
        static MAP_CODEC: $MapCodec<$ChemicalStack>;
        static OPTIONAL_CODEC: $Codec<$ChemicalStack>;
        static CHEMICAL_NON_EMPTY_HOLDER_CODEC: $Codec<$Holder<$Chemical>>;
        static EMPTY: $ChemicalStack;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChemicalStack>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChemicalStack>;
        /**
         * @deprecated
         */
        constructor(arg0: $Chemical_, arg1: number);
        constructor(arg0: $Holder_<$Chemical>, arg1: number);
        get empty(): boolean;
        get attributes(): $Collection<$ChemicalAttribute>;
        get chemicalColorRepresentation(): number;
        get typeRegistryName(): $ResourceLocation;
        get tags(): $Stream<$TagKey<$Chemical>>;
        get textComponent(): $Component;
        get chemical(): $Chemical;
        get translationKey(): string;
        get chemicalTint(): number;
        get chemicalHolder(): $Holder<$Chemical>;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        get radioactive(): boolean;
        get radioactivity(): number;
    }
    export class $Chemical implements $IChemicalProvider, $IChemicalAttributeContainer<$Chemical> {
        /**
         * @deprecated
         */
        get<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        save(arg0: $HolderLookup$Provider): $Tag;
        /**
         * @deprecated
         */
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($Chemical) | undefined;
        /**
         * @deprecated
         */
        is(arg0: $TagKey_<$Chemical>): boolean;
        /**
         * @deprecated
         */
        getAttributes(): $Collection<$ChemicalAttribute>;
        /**
         * @deprecated
         */
        has(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        addAttribute(arg0: $ChemicalAttribute): void;
        getIcon(): $ResourceLocation;
        /**
         * @deprecated
         */
        static parseOptional(arg0: $HolderLookup$Provider, arg1: string): $Chemical;
        /**
         * @deprecated
         */
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        updateFromDataMap(arg0: $Holder_<$Chemical>): void;
        getColorRepresentation(): number;
        /**
         * @deprecated
         */
        getTags(): $Stream<$TagKey<$Chemical>>;
        getTextComponent(): $Component;
        getChemical(): $Chemical;
        getTranslationKey(): string;
        getModernAttributes(): $List<$IChemicalAttribute>;
        static parseOptionalHolder(arg0: $HolderLookup$Provider, arg1: string): $Holder<$Chemical>;
        /**
         * @deprecated
         */
        getLegacyAttributes(): $Collection<$ChemicalAttribute>;
        getTint(): number;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        getOreTag(): $TagKey<$Item>;
        /**
         * @deprecated
         */
        isGaseous(): boolean;
        /**
         * @deprecated
         */
        isGaseousLegacy(): boolean;
        /**
         * @deprecated
         */
        isEmptyType(): boolean;
        static parseHolder(arg0: $HolderLookup$Provider, arg1: $Tag_): ($Holder<$Chemical>) | undefined;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        /**
         * @deprecated
         */
        getAsHolder(): $Holder<$Chemical>;
        isRadioactive(): boolean;
        getRadioactivity(): number;
        hasAttributesWithValidation(): boolean;
        getStack(arg0: number): $ChemicalStack;
        getRegistryName(): $ResourceLocation;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<$Chemical, ATTRIBUTE, V>, arg2: V): V;
        getName(): string;
        /**
         * @deprecated
         */
        static CODEC: $Codec<$Chemical>;
        static HOLDER_CODEC: $Codec<$Holder<$Chemical>>;
        static HOLDER_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Chemical>>;
        /**
         * @deprecated
         */
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Chemical>;
        constructor(arg0: $ChemicalBuilder);
        get attributes(): $Collection<$ChemicalAttribute>;
        get icon(): $ResourceLocation;
        get colorRepresentation(): number;
        get tags(): $Stream<$TagKey<$Chemical>>;
        get textComponent(): $Component;
        get chemical(): $Chemical;
        get translationKey(): string;
        get modernAttributes(): $List<$IChemicalAttribute>;
        get legacyAttributes(): $Collection<$ChemicalAttribute>;
        get tint(): number;
        get oreTag(): $TagKey<$Item>;
        get gaseous(): boolean;
        get gaseousLegacy(): boolean;
        get emptyType(): boolean;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        get asHolder(): $Holder<$Chemical>;
        get radioactive(): boolean;
        get radioactivity(): number;
        get registryName(): $ResourceLocation;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $Chemical}.
     */
    export type $Chemical_ = RegistryTypes.MekanismChemical;
    export interface $Chemical extends RegistryMarked<RegistryTypes.MekanismChemicalTag, RegistryTypes.MekanismChemical> {}
    export class $IChemicalHandler {
    }
    export interface $IChemicalHandler {
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        getChemicalInTank(arg0: number): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        getChemicalTankCapacity(arg0: number): number;
        get chemicalTanks(): number;
    }
    export class $IMekanismChemicalHandler {
    }
    export interface $IMekanismChemicalHandler extends $ISidedChemicalHandler, $IContentsListener {
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        getChemicalTanks(arg0: $Direction_): $List<$IChemicalTank>;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getCountChemicalTanks(arg0: $Direction_): number;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
        canHandleChemicals(): boolean;
    }
    export class $ISidedChemicalHandler {
    }
    export interface $ISidedChemicalHandler extends $IChemicalHandler {
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getSideFor(): $Direction;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        getChemicalInTank(arg0: number): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getCountChemicalTanks(arg0: $Direction_): number;
        getChemicalTankCapacity(arg0: number): number;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        get sideFor(): $Direction;
        get chemicalTanks(): number;
    }
    export class $IChemicalTank {
    }
    export interface $IChemicalTank extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): $ChemicalStack;
        insert(arg0: $ChemicalStack, arg1: $Action_, arg2: $AutomationType_): $ChemicalStack;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        getType(): $Chemical;
        getStack(): $ChemicalStack;
        getCapacity(): number;
        isValid(arg0: $ChemicalStack): boolean;
        getNeeded(): number;
        setStack(arg0: $ChemicalStack): void;
        setEmpty(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        shrinkStack(arg0: number, arg1: $Action_): number;
        getStored(): number;
        isTypeEqual(arg0: $Holder_<$Chemical>): boolean;
        /**
         * @deprecated
         */
        isTypeEqual(arg0: $Chemical_): boolean;
        isTypeEqual(arg0: $ChemicalStack): boolean;
        growStack(arg0: number, arg1: $Action_): number;
        setStackSize(arg0: number, arg1: $Action_): number;
        setStackUnchecked(arg0: $ChemicalStack): void;
        getAttributeValidator(): $ChemicalAttributeValidator;
        getTypeHolder(): $Holder<$Chemical>;
        get type(): $Chemical;
        get capacity(): number;
        get needed(): number;
        get stored(): number;
        set stackUnchecked(value: $ChemicalStack);
        get attributeValidator(): $ChemicalAttributeValidator;
        get typeHolder(): $Holder<$Chemical>;
    }
}
