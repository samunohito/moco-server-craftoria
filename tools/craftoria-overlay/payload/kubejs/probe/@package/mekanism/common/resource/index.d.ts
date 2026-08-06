import { $TagKey } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";

declare module "@package/mekanism/common/resource" {
    export class $ResourceType extends $Enum<$ResourceType> {
        static values(): $ResourceType[];
        static valueOf(name: string): $ResourceType;
        isVanilla(): boolean;
        getRegistryPrefix(): string;
        getBaseTagPath(): string;
        usedByPrimary(resource: $PrimaryResource_): boolean;
        static DUST: $ResourceType;
        static DIRTY_DUST: $ResourceType;
        static RAW: $ResourceType;
        static CRYSTAL: $ResourceType;
        static CLUMP: $ResourceType;
        static ENRICHED: $ResourceType;
        static SHARD: $ResourceType;
        static INGOT: $ResourceType;
        static NUGGET: $ResourceType;
        get vanilla(): boolean;
        get registryPrefix(): string;
        get baseTagPath(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceType}.
     */
    export type $ResourceType_ = "shard" | "crystal" | "dust" | "dirty_dust" | "clump" | "ingot" | "raw" | "nugget" | "enriched";
    export class $PrimaryResource extends $Enum<$PrimaryResource> implements $IResource {
        static values(): $PrimaryResource[];
        static valueOf(name: string): $PrimaryResource;
        has(type: $ResourceType_): boolean;
        isVanilla(): boolean;
        getRawResourceBlockInfo(): $BlockResourceInfo;
        getResourceBlockInfo(): $BlockResourceInfo;
        getTint(): number;
        getOreTag(): $TagKey<$Item>;
        getRegistrySuffix(): string;
        static URANIUM: $PrimaryResource;
        static GOLD: $PrimaryResource;
        static TIN: $PrimaryResource;
        static IRON: $PrimaryResource;
        static COPPER: $PrimaryResource;
        static OSMIUM: $PrimaryResource;
        static LEAD: $PrimaryResource;
        get vanilla(): boolean;
        get rawResourceBlockInfo(): $BlockResourceInfo;
        get resourceBlockInfo(): $BlockResourceInfo;
        get tint(): number;
        get oreTag(): $TagKey<$Item>;
        get registrySuffix(): string;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryResource}.
     */
    export type $PrimaryResource_ = "iron" | "gold" | "osmium" | "copper" | "tin" | "lead" | "uranium";
    export class $BlockResourceInfo extends $Enum<$BlockResourceInfo> implements $IResource {
        static values(): $BlockResourceInfo[];
        static valueOf(name: string): $BlockResourceInfo;
        getMapColor(): $MapColor;
        isPortalFrame(): boolean;
        burnsInFire(): boolean;
        getRegistrySuffix(): string;
        modifyProperties(properties: $BlockBehaviour$Properties): $BlockBehaviour$Properties;
        static URANIUM: $BlockResourceInfo;
        static RAW_TIN: $BlockResourceInfo;
        static REFINED_GLOWSTONE: $BlockResourceInfo;
        static REFINED_OBSIDIAN: $BlockResourceInfo;
        static RAW_OSMIUM: $BlockResourceInfo;
        static RAW_URANIUM: $BlockResourceInfo;
        static CHARCOAL: $BlockResourceInfo;
        static BRONZE: $BlockResourceInfo;
        static STEEL: $BlockResourceInfo;
        static TIN: $BlockResourceInfo;
        static RAW_LEAD: $BlockResourceInfo;
        static OSMIUM: $BlockResourceInfo;
        static LEAD: $BlockResourceInfo;
        static FLUORITE: $BlockResourceInfo;
        get mapColor(): $MapColor;
        get portalFrame(): boolean;
        get registrySuffix(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockResourceInfo}.
     */
    export type $BlockResourceInfo_ = "osmium" | "raw_osmium" | "tin" | "raw_tin" | "lead" | "raw_lead" | "uranium" | "raw_uranium" | "charcoal" | "fluorite" | "bronze" | "steel" | "refined_obsidian" | "refined_glowstone";
    export class $IResource {
    }
    export interface $IResource {
        getRegistrySuffix(): string;
        get registrySuffix(): string;
    }
    /**
     * Values that may be interpreted as {@link $IResource}.
     */
    export type $IResource_ = (() => string);
}
