import { $Level } from "@package/net/minecraft/world/level";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Team, $TeamManager } from "@package/dev/ftb/mods/ftbteams/api";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ChunkDimPos_, $ChunkDimPos } from "@package/dev/ftb/mods/ftblibrary/math";
import { $PrivacyProperty } from "@package/dev/ftb/mods/ftbteams/api/property";
import { $UUID, $Map, $UUID_, $Collection } from "@package/java/util";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Predicate_ } from "@package/java/util/function";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/dev/ftb/mods/ftbchunks/api" {
    export class $ChunkTeamData {
    }
    export interface $ChunkTeamData {
        claim(arg0: $CommandSourceStack, arg1: $ChunkDimPos_, arg2: boolean): $ClaimResult;
        getManager(): $ClaimedChunkManager;
        forceLoad(arg0: $CommandSourceStack, arg1: $ChunkDimPos_, arg2: boolean, arg3: boolean): $ClaimResult;
        forceLoad(source: $CommandSourceStack, pos: $ChunkDimPos_, checkOnly: boolean): $ClaimResult;
        allowMobGriefing(): boolean;
        getTeam(): $Team;
        canPlayerUse(arg0: $ServerPlayer, arg1: $PrivacyProperty): boolean;
        unclaim(source: $CommandSourceStack, pos: $ChunkDimPos_, checkOnly: boolean): $ClaimResult;
        unclaim(arg0: $CommandSourceStack, arg1: $ChunkDimPos_, arg2: boolean, arg3: boolean): $ClaimResult;
        canDoOfflineForceLoading(): boolean;
        isAlly(arg0: $UUID_): boolean;
        getMaxClaimChunks(): number;
        getClaimedChunks(): $Collection<$ClaimedChunk>;
        shouldHideClaims(): boolean;
        getLastLoginTime(): number;
        getTeamManager(): $TeamManager;
        unForceLoad(arg0: $CommandSourceStack, arg1: $ChunkDimPos_, arg2: boolean, arg3: boolean): $ClaimResult;
        unForceLoad(source: $CommandSourceStack, pos: $ChunkDimPos_, checkOnly: boolean): $ClaimResult;
        isTeamMember(arg0: $UUID_): boolean;
        setExtraForceLoadChunks(arg0: number): void;
        canExplosionsDamageTerrain(): boolean;
        getForceLoadedChunks(): $Collection<$ClaimedChunk>;
        checkMemberForceLoading(arg0: $UUID_): void;
        getExtraClaimChunks(): number;
        getExtraForceLoadChunks(): number;
        getMaxForceLoadChunks(): number;
        setExtraClaimChunks(arg0: number): void;
        allowPVP(): boolean;
        get manager(): $ClaimedChunkManager;
        get team(): $Team;
        get maxClaimChunks(): number;
        get claimedChunks(): $Collection<$ClaimedChunk>;
        get lastLoginTime(): number;
        get teamManager(): $TeamManager;
        get forceLoadedChunks(): $Collection<$ClaimedChunk>;
        get maxForceLoadChunks(): number;
    }
    export class $ProtectionPolicy extends $Enum<$ProtectionPolicy> {
        static values(): $ProtectionPolicy[];
        static valueOf(name: string): $ProtectionPolicy;
        isOverride(): boolean;
        shouldPreventInteraction(): boolean;
        static DENY: $ProtectionPolicy;
        static CHECK: $ProtectionPolicy;
        static ALLOW: $ProtectionPolicy;
        get override(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ProtectionPolicy}.
     */
    export type $ProtectionPolicy_ = "check" | "deny" | "allow";
    export class $ClaimResult {
        static success(): $ClaimResult;
        static customProblem(translationKey: string): $ClaimResult;
    }
    export interface $ClaimResult {
        getMessage(): $MutableComponent;
        isSuccess(): boolean;
        getResultId(): string;
        get message(): $MutableComponent;
        get resultId(): string;
    }
    /**
     * Values that may be interpreted as {@link $ClaimResult}.
     */
    export type $ClaimResult_ = (() => string);
    export class $Protection {
        static isFood(stack: $ItemStack_): boolean;
        static isBeneficialPotion(stack: $ItemStack_): boolean;
        static EDIT_FLUID: $Protection;
        static EDIT_BLOCK: $Protection;
        static RIGHT_CLICK_ITEM: $Protection;
        static INTERACT_ENTITY: $Protection;
        static ATTACK_NONLIVING_ENTITY: $Protection;
        static EDIT_AND_INTERACT_BLOCK: $Protection;
        static INTERACT_BLOCK: $Protection;
    }
    export interface $Protection {
        getProtectionPolicy(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $InteractionHand_, arg3: $ClaimedChunk, arg4: $Entity): $ProtectionPolicy;
    }
    /**
     * Values that may be interpreted as {@link $Protection}.
     */
    export type $Protection_ = ((arg0: $ServerPlayer, arg1: $BlockPos, arg2: $InteractionHand, arg3: $ClaimedChunk, arg4: $Entity) => $ProtectionPolicy_);
    export class $ClaimedChunkManager {
    }
    export interface $ClaimedChunkManager {
        shouldPreventInteraction(arg0: $Entity, arg1: $InteractionHand_, arg2: $BlockPos_, arg3: $Protection_, arg4: $Entity): boolean;
        getChunk(arg0: $ChunkDimPos_): $ClaimedChunk;
        getOrCreateData(arg0: $Team): $ChunkTeamData;
        getOrCreateData(arg0: $ServerPlayer): $ChunkTeamData;
        getBypassProtection(arg0: $UUID_): boolean;
        getClaimedChunksByTeam(arg0: $Predicate_<$ClaimedChunk>): $Map<$UUID, $Collection<$ClaimedChunk>>;
        setBypassProtection(arg0: $UUID_, arg1: boolean): void;
        getAllClaimedChunks(): $Collection<$ClaimedChunk>;
        isChunkForceLoaded(arg0: $ChunkDimPos_): boolean;
        getForceLoadedChunks(): $Map<$ResourceKey<$Level>, $Long2ObjectMap<$UUID>>;
        getForceLoadedChunks(arg0: $ResourceKey_<$Level>): $Long2ObjectMap<$UUID>;
        getPersonalData(arg0: $UUID_): $ChunkTeamData;
        get allClaimedChunks(): $Collection<$ClaimedChunk>;
    }
    export class $ClaimedChunk {
    }
    export interface $ClaimedChunk extends $ClaimResult {
        unload(arg0: $CommandSourceStack): void;
        getPos(): $ChunkDimPos;
        unclaim(arg0: $CommandSourceStack, arg1: boolean): void;
        getForceLoadExpiryTime(): number;
        setForceLoadExpiryTime(arg0: number): void;
        isActuallyForceLoaded(): boolean;
        hasForceLoadExpired(arg0: number): boolean;
        getTeamData(): $ChunkTeamData;
        getForceLoadedTime(): number;
        isForceLoaded(): boolean;
        getTimeClaimed(): number;
        get pos(): $ChunkDimPos;
        get actuallyForceLoaded(): boolean;
        get teamData(): $ChunkTeamData;
        get forceLoadedTime(): number;
        get forceLoaded(): boolean;
        get timeClaimed(): number;
    }
}
