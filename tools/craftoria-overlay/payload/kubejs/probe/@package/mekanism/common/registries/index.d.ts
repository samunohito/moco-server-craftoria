import { $Chemical } from "@package/mekanism/api/chemical";
import { $PrimaryResource } from "@package/mekanism/common/resource";
import { $EnumColor } from "@package/mekanism/api/text";
import { $DeferredChemical, $ChemicalDeferredRegister, $SlurryRegistryObject } from "@package/mekanism/common/registration/impl";
import { $Map } from "@package/java/util";

declare module "@package/mekanism/common/registries" {
    export class $MekanismChemicals {
        static GOLD: $DeferredChemical<$Chemical>;
        static FUNGI: $DeferredChemical<$Chemical>;
        static REDSTONE: $DeferredChemical<$Chemical>;
        static DIAMOND: $DeferredChemical<$Chemical>;
        static FISSILE_FUEL: $DeferredChemical<$Chemical>;
        static SUPERHEATED_SODIUM: $DeferredChemical<$Chemical>;
        static STEAM: $DeferredChemical<$Chemical>;
        static CHLORINE: $DeferredChemical<$Chemical>;
        static REFINED_OBSIDIAN: $DeferredChemical<$Chemical>;
        static ANTIMATTER: $DeferredChemical<$Chemical>;
        static PIGMENT_COLOR_LOOKUP: $Map<$EnumColor, $DeferredChemical<$Chemical>>;
        static HYDROFLUORIC_ACID: $DeferredChemical<$Chemical>;
        static SULFUR_TRIOXIDE: $DeferredChemical<$Chemical>;
        static POLONIUM: $DeferredChemical<$Chemical>;
        static HYDROGEN_CHLORIDE: $DeferredChemical<$Chemical>;
        static CHEMICALS: $ChemicalDeferredRegister;
        static URANIUM_OXIDE: $DeferredChemical<$Chemical>;
        static WATER_VAPOR: $DeferredChemical<$Chemical>;
        static ETHENE: $DeferredChemical<$Chemical>;
        static OSMIUM: $DeferredChemical<$Chemical>;
        static SPENT_NUCLEAR_WASTE: $DeferredChemical<$Chemical>;
        static SULFUR_DIOXIDE: $DeferredChemical<$Chemical>;
        static SODIUM: $DeferredChemical<$Chemical>;
        static CARBON: $DeferredChemical<$Chemical>;
        static PLUTONIUM: $DeferredChemical<$Chemical>;
        static BIO: $DeferredChemical<$Chemical>;
        static PROCESSED_RESOURCES: $Map<$PrimaryResource, $SlurryRegistryObject<$Chemical, $Chemical>>;
        static OXYGEN: $DeferredChemical<$Chemical>;
        static HYDROGEN: $DeferredChemical<$Chemical>;
        static URANIUM_HEXAFLUORIDE: $DeferredChemical<$Chemical>;
        static NUCLEAR_WASTE: $DeferredChemical<$Chemical>;
        static SULFURIC_ACID: $DeferredChemical<$Chemical>;
        static TIN: $DeferredChemical<$Chemical>;
        static BRINE: $DeferredChemical<$Chemical>;
        static LITHIUM: $DeferredChemical<$Chemical>;
    }
}
