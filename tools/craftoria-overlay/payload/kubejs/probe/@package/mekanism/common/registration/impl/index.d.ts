import { $IChemicalConstant } from "@package/mekanism/common/base";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $PrimaryResource_ } from "@package/mekanism/common/resource";
import { $Supplier_, $UnaryOperator_ } from "@package/java/util/function";
import { $ChemicalStack, $Chemical, $ChemicalBuilder } from "@package/mekanism/api/chemical";
import { $MekanismDeferredRegister, $MekanismDeferredHolder, $DoubleWrappedRegistryObject } from "@package/mekanism/common/registration";
import { $IHasTranslationKey, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $BlockEntityType, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/mekanism/common/registration/impl" {
    export class $DeferredChemical<TYPE extends $Chemical> extends $MekanismDeferredHolder<$Chemical, TYPE> implements $IHasTextComponent, $IHasTranslationKey {
        getTextComponent(): $Component;
        asStack(size: number): $ChemicalStack;
        getTranslationKey(): string;
        constructor(key: $ResourceKey_<$Chemical>);
        get textComponent(): $Component;
        get translationKey(): string;
    }
    export class $SlurryRegistryObject<DIRTY extends $Chemical, CLEAN extends $Chemical> extends $DoubleWrappedRegistryObject<$Chemical, DIRTY, $Chemical, CLEAN> {
        getCleanSlurry(): $DeferredHolder<$Chemical, CLEAN>;
        constructor(dirtyRO: $DeferredChemical<DIRTY>, cleanRO: $DeferredChemical<CLEAN>);
        get cleanSlurry(): $DeferredHolder<$Chemical, CLEAN>;
    }
    export class $ChemicalDeferredRegister extends $MekanismDeferredRegister<$Chemical> {
        register(name: string, texture: $ResourceLocation_, barColor: number): $DeferredChemical<$Chemical>;
        register<CHEM extends $Chemical>(name: string, sup: $Supplier_<CHEM>): $DeferredChemical<CHEM>;
        register(name: string, color: number): $DeferredChemical<$Chemical>;
        register(constants: $IChemicalConstant): $DeferredChemical<$Chemical>;
        registerInfuse(name: string, tint: number): $DeferredChemical<$Chemical>;
        registerPigment(name: string, color: number): $DeferredChemical<$Chemical>;
        registerSlurry(baseName: string, builderModifier: $UnaryOperator_<$ChemicalBuilder>): $SlurryRegistryObject<$Chemical, $Chemical>;
        registerSlurry(resource: $PrimaryResource_): $SlurryRegistryObject<$Chemical, $Chemical>;
        constructor(modid: string);
    }
    export class $TileEntityTypeRegistryObject<BE extends $BlockEntity> extends $MekanismDeferredHolder<$BlockEntityType<never>, $BlockEntityType<BE>> {
        getTicker(isClient: boolean): $BlockEntityTicker<BE>;
        constructor(key: $ResourceKey_<$BlockEntityType<never>>);
    }
}
