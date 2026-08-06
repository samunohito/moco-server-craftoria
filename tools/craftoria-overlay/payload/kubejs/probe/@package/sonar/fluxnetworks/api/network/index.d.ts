import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/sonar/fluxnetworks/api/network" {
    export class $SecurityLevel extends $Enum<$SecurityLevel> {
        getName(): string;
        static values(): $SecurityLevel[];
        static valueOf(arg0: string): $SecurityLevel;
        getId(): number;
        static fromId(arg0: number): $SecurityLevel;
        static PUBLIC: $SecurityLevel;
        static VALUES: $SecurityLevel[];
        static ENCRYPTED: $SecurityLevel;
        static PRIVATE: $SecurityLevel;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $SecurityLevel}.
     */
    export type $SecurityLevel_ = "public" | "encrypted" | "private";
    export class $NetworkMember {
        static create(arg0: $Player, arg1: $AccessLevel_): $NetworkMember;
        getPlayerUUID(): $UUID;
        writeNBT(arg0: $CompoundTag_): void;
        readNBT(arg0: $CompoundTag_): void;
        getAccessLevel(): $AccessLevel;
        setAccessLevel(arg0: $AccessLevel_): boolean;
        getCachedName(): string;
        constructor(arg0: $CompoundTag_);
        get playerUUID(): $UUID;
        get cachedName(): string;
    }
    export class $AccessLevel extends $Enum<$AccessLevel> {
        static values(): $AccessLevel[];
        static valueOf(arg0: string): $AccessLevel;
        getKey(): number;
        canUse(): boolean;
        static fromKey(arg0: number): $AccessLevel;
        getColor(): number;
        canDelete(): boolean;
        canEdit(): boolean;
        getFormattedName(): string;
        static SUPER_ADMIN: $AccessLevel;
        static OWNER: $AccessLevel;
        static BLOCKED: $AccessLevel;
        static ADMIN: $AccessLevel;
        static USER: $AccessLevel;
        get key(): number;
        get color(): number;
        get formattedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AccessLevel}.
     */
    export type $AccessLevel_ = "owner" | "admin" | "user" | "blocked" | "super_admin";
}
