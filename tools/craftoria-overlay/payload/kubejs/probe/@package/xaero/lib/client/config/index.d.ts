import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $SingleConfigManager } from "@package/xaero/lib/common/config/single";
import { $ClientOptionValueRedirectorManager } from "@package/xaero/lib/client/config/option/value/redirect";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
import { $ClientConfigChangeListener } from "@package/xaero/lib/client/config/listener";
import { $SyncedConfigManager } from "@package/xaero/lib/client/config/sync";
export * as sync from "@package/xaero/lib/client/config/sync";
export * as option from "@package/xaero/lib/client/config/option";
export * as listener from "@package/xaero/lib/client/config/listener";
export * as channel from "@package/xaero/lib/client/config/channel";

declare module "@package/xaero/lib/client/config" {
    export class $ClientConfigManager {
        getChannel(): $ConfigChannel;
        getRaw<T>(arg0: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        shouldIgnoreServerEnforcement<T>(arg0: $ConfigOption<T>): boolean;
        shouldIgnoreServerEnforcement<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): boolean;
        postLoad(): void;
        getCurrentProfile(): $ConfigProfile;
        getEffective<T>(arg0: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        setChannel(arg0: $ConfigChannel): void;
        getRedirectorManager(): $ClientOptionValueRedirectorManager;
        getProfileManager(): $ConfigProfileManager;
        getServerSynced(): $SyncedConfigManager;
        getChangeListener(): $ClientConfigChangeListener;
        getPrimaryConfigManager(): $SingleConfigManager<$Config>;
        get currentProfile(): $ConfigProfile;
        get redirectorManager(): $ClientOptionValueRedirectorManager;
        get profileManager(): $ConfigProfileManager;
        get serverSynced(): $SyncedConfigManager;
        get changeListener(): $ClientConfigChangeListener;
        get primaryConfigManager(): $SingleConfigManager<$Config>;
    }
}
