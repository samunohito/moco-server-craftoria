import { $IHasTranslationKey } from "@package/mekanism/api/text";
import { $CachedValue } from "@package/mekanism/common/config/value";
import { $ModConfig$Type } from "@package/net/neoforged/fml/config";
import { $ModConfigSpec$Builder, $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
export * as value from "@package/mekanism/common/config/value";

declare module "@package/mekanism/common/config" {
    export class $IConfigTranslation {
        static getSectionTitle(title: string, isSection: boolean): string;
    }
    export interface $IConfigTranslation extends $IHasTranslationKey {
        tooltip(): string;
        button(): string;
        title(): string;
        applyToBuilder(builder: $ModConfigSpec$Builder): $ModConfigSpec$Builder;
    }
    export class $IMekanismConfig {
    }
    export interface $IMekanismConfig {
        save(): void;
        getFileName(): string;
        isLoaded(): boolean;
        clearCache(unloading: boolean): void;
        getTranslation(): string;
        addCachedValue(configValue: $CachedValue<never>): void;
        getConfigSpec(): $ModConfigSpec;
        getConfigType(): $ModConfig$Type;
        get fileName(): string;
        get loaded(): boolean;
        get translation(): string;
        get configSpec(): $ModConfigSpec;
        get configType(): $ModConfig$Type;
    }
}
