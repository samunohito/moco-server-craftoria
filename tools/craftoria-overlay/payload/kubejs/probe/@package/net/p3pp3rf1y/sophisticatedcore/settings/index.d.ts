import { $Consumer_ } from "@package/java/util/function";
import { $MainSettingsCategory } from "@package/net/p3pp3rf1y/sophisticatedcore/settings/main";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Class } from "@package/java/lang";
import { $Map, $List } from "@package/java/util";
export * as main from "@package/net/p3pp3rf1y/sophisticatedcore/settings/main";

declare module "@package/net/p3pp3rf1y/sophisticatedcore/settings" {
    export class $SettingsHandler {
        getTypeCategory<T extends $ISettingsCategory<never>>(arg0: $Class<T>): T;
        getCategoriesThatImplement<T>(arg0: $Class<T>): $List<T>;
        getGlobalSettingsCategory(): $MainSettingsCategory<never>;
        getNbt(): $CompoundTag;
        reloadFrom(arg0: $CompoundTag_): void;
        getSettingsCategories(): $Map<string, $ISettingsCategory<never>>;
        getGlobalSettingsCategoryName(): string;
        instantiateGlobalSettingsCategory(arg0: $CompoundTag_, arg1: $Consumer_<$CompoundTag>): $ISettingsCategory<never>;
        get globalSettingsCategory(): $MainSettingsCategory<never>;
        get nbt(): $CompoundTag;
        get settingsCategories(): $Map<string, $ISettingsCategory<never>>;
        get globalSettingsCategoryName(): string;
    }
    export class $ISettingsCategory<T extends $ISettingsCategory<never>> {
    }
    export interface $ISettingsCategory<T extends $ISettingsCategory<never>> {
        copyTo(arg0: T, arg1: number, arg2: number): void;
        isLargerThanNumberOfSlots(arg0: number): boolean;
        overwriteWith(arg0: T): void;
        reloadFrom(arg0: $CompoundTag_): void;
        deleteSlotSettingsFrom(arg0: number): void;
    }
}
