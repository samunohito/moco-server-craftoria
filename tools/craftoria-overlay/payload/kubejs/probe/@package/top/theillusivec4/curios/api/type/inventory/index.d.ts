import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        grow(arg0: number): void;
        getStackInSlot(arg0: number): $ItemStack;
        shrink(arg0: number): void;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        getIdentifier(): string;
        getDropRule(): $ICurio$DropRule;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        removeModifier(arg0: $ResourceLocation_): void;
        getRenders(): $NonNullList<boolean>;
        getSlots(): number;
        isVisible(): boolean;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        clearModifiers(): void;
        getCosmeticStacks(): $IDynamicStackHandler;
        getActiveStates(): $NonNullList<boolean>;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        clearCachedModifiers(): void;
        getSyncTag(): $CompoundTag;
        updateActiveState(arg0: number): void;
        canToggleRendering(): boolean;
        getCachedModifiers(): $Set<$AttributeModifier>;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        hasCosmetic(): boolean;
        applySyncTag(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get identifier(): string;
        get dropRule(): $ICurio$DropRule;
        get renders(): $NonNullList<boolean>;
        get slots(): number;
        get visible(): boolean;
        get cosmeticStacks(): $IDynamicStackHandler;
        get activeStates(): $NonNullList<boolean>;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get syncTag(): $CompoundTag;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get sizeShift(): number;
    }
}
