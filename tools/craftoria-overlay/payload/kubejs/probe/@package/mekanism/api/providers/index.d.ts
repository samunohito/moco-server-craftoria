import { $ItemLike } from "@package/net/minecraft/world/level";
import { $ChemicalStack, $Chemical, $Chemical_ } from "@package/mekanism/api/chemical";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IHasTranslationKey, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICustomModule, $ModuleData_, $ModuleData } from "@package/mekanism/api/gear";

declare module "@package/mekanism/api/providers" {
    /**
     * @deprecated
     */
    export class $IBaseProvider {
    }
    export interface $IBaseProvider extends $IHasTextComponent, $IHasTranslationKey {
        getName(): string;
        getRegistryName(): $ResourceLocation;
        getTextComponent(): $Component;
        get name(): string;
        get registryName(): $ResourceLocation;
        get textComponent(): $Component;
    }
    /**
     * @deprecated
     */
    export class $IModuleDataProvider<MODULE extends $ICustomModule<MODULE>> {
    }
    export interface $IModuleDataProvider<MODULE extends $ICustomModule<MODULE>> extends $IBaseProvider {
        getRegistryName(): $ResourceLocation;
        getTranslationKey(): string;
        getModuleData(): $ModuleData<MODULE>;
        get registryName(): $ResourceLocation;
        get translationKey(): string;
        get moduleData(): $ModuleData<MODULE>;
    }
    /**
     * Values that may be interpreted as {@link $IModuleDataProvider}.
     */
    export type $IModuleDataProvider_<MODULE> = (() => $ModuleData_<MODULE>);
    /**
     * @deprecated
     */
    export class $IItemProvider {
    }
    export interface $IItemProvider extends $IBaseProvider, $ItemLike {
        getItemStack(): $ItemStack;
        getItemStack(arg0: number): $ItemStack;
        getRegistryName(): $ResourceLocation;
        getTextComponent(): $Component;
        getTranslationKey(): string;
        get registryName(): $ResourceLocation;
        get textComponent(): $Component;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $IItemProvider}.
     */
    export type $IItemProvider_ = (() => void);
    /**
     * @deprecated
     */
    export class $IChemicalProvider {
    }
    export interface $IChemicalProvider extends $IBaseProvider {
        getStack(arg0: number): $ChemicalStack;
        getRegistryName(): $ResourceLocation;
        getTextComponent(): $Component;
        getChemical(): $Chemical;
        getTranslationKey(): string;
        get registryName(): $ResourceLocation;
        get textComponent(): $Component;
        get chemical(): $Chemical;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $IChemicalProvider}.
     */
    export type $IChemicalProvider_ = (() => $Chemical_);
}
