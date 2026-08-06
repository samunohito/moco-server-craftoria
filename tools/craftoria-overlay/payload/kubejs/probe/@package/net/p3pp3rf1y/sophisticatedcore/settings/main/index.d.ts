import { $Consumer_ } from "@package/java/util/function";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ISettingsCategory, $MainSetting } from "@package/net/p3pp3rf1y/sophisticatedcore/settings";

declare module "@package/net/p3pp3rf1y/sophisticatedcore/settings/main" {
    export class $MainSettingsCategory<T extends $MainSettingsCategory<never>> implements $ISettingsCategory<T> {
        copyTo(arg0: T, arg1: number, arg2: number): void;
        isLargerThanNumberOfSlots(arg0: number): boolean;
        getPlayerSettingsTagName(): string;
        overwriteWith(arg0: T): void;
        getSettingValue<S>(arg0: $MainSetting<S>): (S) | undefined;
        reloadFrom(arg0: $CompoundTag_): void;
        setSettingValue<S>(arg0: $MainSetting<S>, arg1: S): void;
        deleteSlotSettingsFrom(arg0: number): void;
        removeSetting<S>(arg0: $MainSetting<S>): void;
        static NAME: string;
        constructor(arg0: $CompoundTag_, arg1: $Consumer_<$CompoundTag>, arg2: string);
        get playerSettingsTagName(): string;
    }
}
