import { $EndDragonFightAccessor } from "@package/com/yungnickyoung/minecraft/betterendisland/mixin/accessor";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel, $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $DragonRespawnStage, $DragonRespawnStage_, $IBetterDragonFight } from "@package/com/yungnickyoung/minecraft/betterendisland/world";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID, $List, $UUID_, $List_ } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/level/dimension/end" {
    export class $DragonRespawnAnimation extends $Enum<$DragonRespawnAnimation> {
        static values(): $DragonRespawnAnimation[];
        static valueOf(arg0: string): $DragonRespawnAnimation;
        tick(level: $ServerLevel, manager: $EndDragonFight, crystals: $List_<$EndCrystal>, ticks: number, pos: $BlockPos_): void;
        static SUMMONING_PILLARS: $DragonRespawnAnimation;
        static START: $DragonRespawnAnimation;
        static END: $DragonRespawnAnimation;
        static PREPARING_TO_SUMMON_PILLARS: $DragonRespawnAnimation;
        static SUMMONING_DRAGON: $DragonRespawnAnimation;
    }
    /**
     * Values that may be interpreted as {@link $DragonRespawnAnimation}.
     */
    export type $DragonRespawnAnimation_ = "start" | "preparing_to_summon_pillars" | "summoning_pillars" | "summoning_dragon" | "end";
    export class $EndDragonFight implements $IBetterDragonFight, $EndDragonFightAccessor {
        reset(active: boolean): void;
        addPlayer(arg0: $ServerPlayer): void;
        tick(): void;
        hasPreviouslyKilledDragon(): boolean;
        removePlayer(arg0: $ServerPlayer): void;
        tickBellSound(): void;
        hasDragonEverSpawned(): boolean;
        getDragonRespawnStage(): $DragonRespawnStage;
        setIsFirstExitPortalSpawn(active: boolean): void;
        getNumTimesDragonKilled(): number;
        isFirstExitPortalSpawn(): boolean;
        setHasDragonEverSpawned(active: boolean): void;
        doInitialDragonSpawn(): void;
        setNumTimesDragonKilled(arg0: number): void;
        saveData(): $EndDragonFight$Data;
        getCrystalsAlive(): number;
        onCrystalDestroyed(crystal: $EndCrystal, dmgSrc: $DamageSource_): void;
        updateDragon(dragon: $EnderDragon): void;
        getDragonUUID(): $UUID;
        setDragonKilled(dragon: $EnderDragon): void;
        tryRespawn(): void;
        handler$bkp000$betterendisland$EndDragonFight(arg0: $ServerLevel, arg1: number, arg2: $EndDragonFight$Data_, arg3: $BlockPos_, arg4: $CallbackInfo): void;
        handler$bkp000$betterendisland$setDragonKilled(arg0: $EnderDragon, arg1: $CallbackInfo): void;
        handler$bkp000$betterendisland$onCrystalDestroyed(arg0: $EndCrystal, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        handler$bkp000$betterendisland$resetSpikeCrystals(arg0: $CallbackInfo): void;
        /**
         * @deprecated
         */
        skipArenaLoadedCheck(): void;
        setDragonRespawnStage(arg0: $DragonRespawnStage_): void;
        advanceRespawnStage(arg0: $DragonRespawnStage_): void;
        /**
         * @deprecated
         */
        removeAllGateways(): void;
        resetSpikeCrystals(): void;
        handler$bkp000$betterendisland$tryRespawn(arg0: $CallbackInfo): void;
        handler$bkp000$betterendisland$tickFight(arg0: $CallbackInfo): void;
        getPortalLocation(): $BlockPos;
        invokeCreateNewDragon(): $EnderDragon;
        getPreviouslyKilled(): boolean;
        setPortalLocation(pos: $BlockPos_): void;
        getGateways(): $ObjectArrayList<number>;
        getDragonEvent(): $ServerBossEvent;
        static TIME_BETWEEN_PLAYER_SCANS: number;
        static ARENA_TICKET_LEVEL: number;
        static DRAGON_SPAWN_Y: number;
        constructor(level: $ServerLevel, seed: number, arg2: $EndDragonFight$Data_);
        constructor(level: $ServerLevel, seed: number, arg2: $EndDragonFight$Data_, data: $BlockPos_);
        get firstExitPortalSpawn(): boolean;
        get crystalsAlive(): number;
        get dragonUUID(): $UUID;
        set dragonKilled(value: $EnderDragon);
        get previouslyKilled(): boolean;
        get gateways(): $ObjectArrayList<number>;
        get dragonEvent(): $ServerBossEvent;
    }
    export class $EndDragonFight$Data extends $Record {
        gateways(): ($List<number>) | undefined;
        dragonUUID(): ($UUID) | undefined;
        exitPortalLocation(): ($BlockPos) | undefined;
        dragonKilled(): boolean;
        isRespawning(): boolean;
        previouslyKilled(): boolean;
        needsStateScanning(): boolean;
        static CODEC: $Codec<$EndDragonFight$Data>;
        static DEFAULT: $EndDragonFight$Data;
        constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: ($UUID_) | undefined, exitPortalLocation: ($BlockPos_) | undefined, gateways: ($List_<number>) | undefined);
        get respawning(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EndDragonFight$Data}.
     */
    export type $EndDragonFight$Data_ = { dragonUUID?: ($UUID_) | undefined, dragonKilled?: boolean, needsStateScanning?: boolean, isRespawning?: boolean, previouslyKilled?: boolean, exitPortalLocation?: ($BlockPos_) | undefined, gateways?: ($List_<number>) | undefined,  } | [dragonUUID?: ($UUID_) | undefined, dragonKilled?: boolean, needsStateScanning?: boolean, isRespawning?: boolean, previouslyKilled?: boolean, exitPortalLocation?: ($BlockPos_) | undefined, gateways?: ($List_<number>) | undefined, ];
}
