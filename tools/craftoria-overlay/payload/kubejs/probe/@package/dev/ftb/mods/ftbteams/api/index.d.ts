import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Color4I, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TeamPropertyCollection, $TeamProperty } from "@package/dev/ftb/mods/ftbteams/api/property";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID, $List, $Map, $Collection, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as property from "@package/dev/ftb/mods/ftbteams/api/property";

declare module "@package/dev/ftb/mods/ftbteams/api" {
    export class $TeamManager {
    }
    export interface $TeamManager {
        getId(): $UUID;
        arePlayersInSameTeam(arg0: $UUID_, arg1: $UUID_): boolean;
        markDirty(): void;
        getServer(): $MinecraftServer;
        getExtraData(): $CompoundTag;
        getTeams(): $Collection<$Team>;
        getTeamByID(arg0: $UUID_): ($Team) | undefined;
        getTeamForPlayerID(arg0: $UUID_): ($Team) | undefined;
        getTeamForPlayer(arg0: $ServerPlayer): ($Team) | undefined;
        isChatRedirected(arg0: $ServerPlayer): boolean;
        createPartyTeam(arg0: $ServerPlayer, arg1: string, arg2: string, arg3: $Color4I): $Team;
        getTeamByName(arg0: string): ($Team) | undefined;
        setChatRedirected(arg0: $ServerPlayer, arg1: boolean): void;
        createServerTeam(commandSourceStack: $CommandSourceStack, name: string, description: string, color: $Color4I): $Team;
        createServerTeam(arg0: $CommandSourceStack, arg1: string, arg2: string, arg3: $Color4I, arg4: $UUID_): $Team;
        getKnownPlayerTeams(): $Map<$UUID, $Team>;
        getPlayerTeamForPlayerID(arg0: $UUID_): ($Team) | undefined;
        get id(): $UUID;
        get server(): $MinecraftServer;
        get extraData(): $CompoundTag;
        get teams(): $Collection<$Team>;
        get knownPlayerTeams(): $Map<$UUID, $Team>;
    }
    export class $TeamRank extends $Enum<$TeamRank> implements $StringRepresentable {
        static values(): $TeamRank[];
        static valueOf(name: string): $TeamRank;
        getDisplayName(): $Component;
        getIcon(): ($Icon) | undefined;
        isAtLeast(rank: $TeamRank_): boolean;
        getSerializedName(): string;
        isNoneOrBetter(): boolean;
        isEnemyOrWorse(): boolean;
        getPower(): number;
        isOwner(): boolean;
        isAllyOrBetter(): boolean;
        isMemberOrBetter(): boolean;
        isOfficerOrBetter(): boolean;
        isInvitedOrBetter(): boolean;
        getRemappedEnumConstantName(): string;
        static OWNER: $TeamRank;
        static INVITED: $TeamRank;
        static ALLY: $TeamRank;
        static NAME_MAP: $NameMap<$TeamRank>;
        static ENEMY: $TeamRank;
        static OFFICER: $TeamRank;
        static NONE: $TeamRank;
        static MEMBER: $TeamRank;
        get displayName(): $Component;
        get icon(): ($Icon) | undefined;
        get serializedName(): string;
        get noneOrBetter(): boolean;
        get enemyOrWorse(): boolean;
        get power(): number;
        get owner(): boolean;
        get allyOrBetter(): boolean;
        get memberOrBetter(): boolean;
        get officerOrBetter(): boolean;
        get invitedOrBetter(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TeamRank}.
     */
    export type $TeamRank_ = "enemy" | "none" | "ally" | "invited" | "member" | "officer" | "owner";
    export class $Team {
    }
    export interface $Team {
        getName(): $Component;
        getProperty<T>(arg0: $TeamProperty<T>): T;
        setProperty<T>(arg0: $TeamProperty<T>, arg1: T): void;
        getProperties(): $TeamPropertyCollection;
        getId(): $UUID;
        getOwner(): $UUID;
        isValid(): boolean;
        getMembers(): $Set<$UUID>;
        getShortName(): string;
        getTeamId(): $UUID;
        markDirty(): void;
        sendMessage(arg0: $UUID_, arg1: string): void;
        sendMessage(arg0: $UUID_, arg1: $Component_): void;
        getExtraData(): $CompoundTag;
        getRankForPlayer(arg0: $UUID_): $TeamRank;
        getOnlineMembers(): $Collection<$ServerPlayer>;
        getColoredName(): $Component;
        isServerTeam(): boolean;
        getPlayersByRank(arg0: $TeamRank_): $Map<$UUID, $TeamRank>;
        getMessageHistory(): $List<$TeamMessage>;
        isClientTeam(): boolean;
        getTeamInfo(): $List<$Component>;
        isPlayerTeam(): boolean;
        createParty(arg0: string, arg1: $Color4I): $Team;
        syncOnePropertyToTeam<T>(arg0: $TeamProperty<T>, arg1: T): void;
        isPartyTeam(): boolean;
        syncOnePropertyToAll<T>(arg0: $MinecraftServer, arg1: $TeamProperty<T>, arg2: T): void;
        getTypeTranslationKey(): string;
        get name(): $Component;
        get properties(): $TeamPropertyCollection;
        get id(): $UUID;
        get owner(): $UUID;
        get valid(): boolean;
        get members(): $Set<$UUID>;
        get shortName(): string;
        get teamId(): $UUID;
        get extraData(): $CompoundTag;
        get onlineMembers(): $Collection<$ServerPlayer>;
        get coloredName(): $Component;
        get serverTeam(): boolean;
        get messageHistory(): $List<$TeamMessage>;
        get clientTeam(): boolean;
        get teamInfo(): $List<$Component>;
        get playerTeam(): boolean;
        get partyTeam(): boolean;
        get typeTranslationKey(): string;
    }
    export class $TeamMessage {
    }
    export interface $TeamMessage {
        sender(): $UUID;
        text(): $Component;
        date(): number;
    }
}
