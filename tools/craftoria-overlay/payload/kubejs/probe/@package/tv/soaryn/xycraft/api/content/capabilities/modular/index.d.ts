import { $Rarity, $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Enum } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $ItemCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/tv/soaryn/xycraft/api/content/capabilities/modular" {
    export interface $IModule extends RegistryMarked<RegistryTypes.XycraftModulesTag, RegistryTypes.XycraftModules> {}
    export class $ModuleType extends $Enum<$ModuleType> {
        static values(): $ModuleType[];
        static valueOf(arg0: string): $ModuleType;
        isCompatible(arg0: $ModuleType_): boolean;
        getRarity(): $Rarity;
        static isUnspecialized(arg0: $ModuleType_): boolean;
        static Specialization: $ModuleType;
        static Legendary: $ModuleType;
        static Base: $ModuleType;
        static Mythic: $ModuleType;
        SubTextColor: number;
        get rarity(): $Rarity;
    }
    /**
     * Values that may be interpreted as {@link $ModuleType}.
     */
    export type $ModuleType_ = "base" | "legendary" | "specialization" | "mythic";
    export class $IModule {
        static ITEM: $ItemCapability<$IModule, void>;
    }
    export interface $IModule {
        isCompatibleWith(arg0: $List_<$IModule_>): boolean;
        onAdded(arg0: $ItemStack_): void;
        onRemoved(arg0: $ItemStack_): void;
        getModuleType(): $ModuleType;
        incompatibleWith(): $List<$IModule>;
        isValidFor(arg0: $ItemStack_): boolean;
        get moduleType(): $ModuleType;
    }
    /**
     * Values that may be interpreted as {@link $IModule}.
     */
    export type $IModule_ = RegistryTypes.XycraftModules;
}
