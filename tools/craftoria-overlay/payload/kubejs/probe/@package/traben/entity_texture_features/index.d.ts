import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID_, $Set } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as config from "@package/traben/entity_texture_features/config";
export * as utils from "@package/traben/entity_texture_features/utils";
export * as features from "@package/traben/entity_texture_features/features";
export * as mixin from "@package/traben/entity_texture_features/mixin";

declare module "@package/traben/entity_texture_features" {
    /**
     * @deprecated
     */
    export class $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {
    }
    export interface $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {
        toInt(arg0: $ETFEntityRenderState): number;
    }
    /**
     * Values that may be interpreted as {@link $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction}.
     */
    export type $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction_ = ((arg0: $ETFEntityRenderState) => number);
    export class $ETFApi$ETFVariantSuffixProvider {
        static getVariantProviderOrNull(propertiesFileIdentifier: $ResourceLocation_, vanillaIdentifier: $ResourceLocation_, ...suffixKeyName: string[]): $ETFApi$ETFVariantSuffixProvider;
    }
    export interface $ETFApi$ETFVariantSuffixProvider {
        size(): number;
        getSuffixForETFEntity(arg0: $ETFEntityRenderState): number;
        getAllSuffixes(): $Set<number>;
        entityCanUpdate(arg0: $UUID_): boolean;
        getSuffixForBlockEntity(entityToBeTested: $BlockEntity): number;
        getSuffixForEntity(entityToBeTested: $Entity): number;
        /**
         * @deprecated
         */
        setRandomSupplier(entityRandomSeedFunction: $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction_): void;
        get allSuffixes(): $Set<number>;
        set randomSupplier(value: $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction_);
    }
}
