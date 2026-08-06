import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        reset(arg0: $ConfigChannel): void;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        isAutoConfirm(): boolean;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        getSyncMessage(): $Component;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        hasPermission(arg0: $ConfigChannel): boolean;
        isClientSide(): boolean;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getDropdownNarration(): $Component;
        isAutoDefaultProfile(): boolean;
        getScreenTitleFormat(): string;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
        get clientSide(): boolean;
        get dropdownNarration(): $Component;
        get autoDefaultProfile(): boolean;
        get screenTitleFormat(): string;
    }
}
