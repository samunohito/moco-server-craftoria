import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerConfigChangeListener } from "@package/xaero/lib/common/config/server/listener";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/server/sync";
export * as listener from "@package/xaero/lib/common/config/server/listener";

declare module "@package/xaero/lib/common/config/server" {
    export class $ServerConfigManager {
        getChannel(): $ConfigChannel;
        getRaw<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        setDefaultEnforcedProfileId(arg0: string): void;
        postLoad(): void;
        setServer(arg0: $MinecraftServer): void;
        setChangeListener(arg0: $ServerConfigChangeListener): void;
        getEffective<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        setChannel(arg0: $ConfigChannel): void;
        getPermissionBasedProfileId(arg0: $ServerPlayerData): string;
        hasServerProfileEditPermission(arg0: $ServerPlayerData): boolean;
        getEnforcedProfileForPlayer(arg0: $ServerPlayerData): $ConfigProfile;
        usesDefaultEnforcedProfile(arg0: $ServerPlayerData): boolean;
        usesDefaultEnforcedProfile(arg0: $ServerPlayer): boolean;
        getDefaultEnforcedProfile(): $ConfigProfile;
        getPermissionBasedProfile(arg0: $ServerPlayerData): $ConfigProfile;
        getServer(): $MinecraftServer;
        getRedirectorManager(): $OptionValueRedirectorManager;
        getProfileManager(): $ConfigProfileManager;
        getChangeListener(): $ServerConfigChangeListener;
        set defaultEnforcedProfileId(value: string);
        get defaultEnforcedProfile(): $ConfigProfile;
        get redirectorManager(): $OptionValueRedirectorManager;
        get profileManager(): $ConfigProfileManager;
    }
}
