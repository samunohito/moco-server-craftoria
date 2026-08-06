import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CastSource, $ICastData, $CastSource_, $AbstractSpell_, $ICastDataSerializable } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SpinAttackType, $SpinAttackType_ } from "@package/io/redspace/ironsspellbooks/player";
import { $UUID, $List, $Map_, $Map } from "@package/java/util";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $SpellSelection } from "@package/io/redspace/ironsspellbooks/gui/overlays";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ISerializable } from "@package/io/redspace/ironsspellbooks/api/network";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/io/redspace/ironsspellbooks/capabilities/magic" {
    export class $SyncedSpellData {
        static write(arg0: $FriendlyByteBuf, arg1: $SyncedSpellData): void;
        static read(arg0: $FriendlyByteBuf): $SyncedSpellData;
        loadNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getCastingSpellId(): string;
        getCastingSpellLevel(): number;
        setSpinAttackType(arg0: $SpinAttackType_): void;
        isSpellLearned(arg0: $AbstractSpell_): boolean;
        getPersistentData(arg0: $ServerPlayer): $SyncedSpellData;
        setEvasionHitsRemaining(arg0: number): void;
        getEvasionHitsRemaining(): number;
        syncToPlayer(arg0: $ServerPlayer): void;
        isCasting(): boolean;
        getCastingEquipmentSlot(): string;
        setSpellSelection(arg0: $SpellSelection): void;
        getSpellSelection(): $SpellSelection;
        forgetAllSpells(): void;
        getServerPlayerId(): number;
        subtractEvasionHit(): void;
        getHeartstopAccumulatedDamage(): number;
        setHeartstopAccumulatedDamage(arg0: number): void;
        doSync(): void;
        addHeartstopDamage(arg0: number): void;
        getSpinAttackType(): $SpinAttackType;
        setIsCasting(arg0: boolean, arg1: string, arg2: number, arg3: string): void;
        learnSpell(arg0: $AbstractSpell_): void;
        learnSpell(arg0: $AbstractSpell_, arg1: boolean): void;
        constructor(arg0: $LivingEntity);
        constructor(arg0: number);
        get castingSpellId(): string;
        get castingSpellLevel(): number;
        get casting(): boolean;
        get castingEquipmentSlot(): string;
        get serverPlayerId(): number;
    }
    export class $PlayerRecasts {
        removeAll(arg0: $RecastResult_): void;
        tick(arg0: number): void;
        removeRecast(arg0: $RecastInstance, arg1: $RecastResult_): void;
        removeRecast(arg0: string): void;
        loadNBTData(arg0: $ListTag_, arg1: $HolderLookup$Provider): void;
        saveNBTData(arg0: $HolderLookup$Provider): $ListTag;
        hasRecastForSpell(arg0: string): boolean;
        hasRecastForSpell(arg0: $AbstractSpell_): boolean;
        addRecast(arg0: $RecastInstance, arg1: $MagicData): boolean;
        decrementRecastCount(arg0: string): void;
        decrementRecastCount(arg0: $AbstractSpell_): void;
        getRecastInstance(arg0: string): $RecastInstance;
        syncToPlayer(arg0: $RecastInstance): void;
        syncAllToPlayer(): void;
        tickRecasts(): void;
        hasRecastsActive(): boolean;
        getRemainingRecastsForSpell(arg0: string): number;
        getRemainingRecastsForSpell(arg0: $AbstractSpell_): number;
        forceAddRecast(arg0: $RecastInstance): void;
        getActiveRecasts(): $List<$RecastInstance>;
        getAllRecasts(): $List<$RecastInstance>;
        syncRemoveToPlayer(arg0: string): void;
        isRecastActive(arg0: $RecastInstance): boolean;
        constructor(arg0: $Map_<string, $RecastInstance>);
        constructor(arg0: $ServerPlayer);
        constructor();
        get activeRecasts(): $List<$RecastInstance>;
        get allRecasts(): $List<$RecastInstance>;
    }
    export class $RecastResult extends $Enum<$RecastResult> {
        static values(): $RecastResult[];
        static valueOf(arg0: string): $RecastResult;
        isSuccess(): boolean;
        isFailure(): boolean;
        static USER_CANCEL: $RecastResult;
        static DEATH: $RecastResult;
        static COMMAND: $RecastResult;
        static TIMEOUT: $RecastResult;
        static COUNTERSPELL: $RecastResult;
        static USED_ALL_RECASTS: $RecastResult;
        get success(): boolean;
        get failure(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecastResult}.
     */
    export type $RecastResult_ = "timeout" | "counterspell" | "death" | "used_all_recasts" | "command" | "user_cancel";
    export class $PlayerCooldowns {
        tick(arg0: number): void;
        loadNBTData(arg0: $ListTag_): void;
        saveNBTData(): $ListTag;
        clearCooldowns(): void;
        isOnCooldown(arg0: $AbstractSpell_): boolean;
        addCooldown(arg0: string, arg1: number, arg2: number): void;
        addCooldown(arg0: $AbstractSpell_, arg1: number): void;
        addCooldown(arg0: $AbstractSpell_, arg1: number, arg2: number): void;
        addCooldown(arg0: string, arg1: number): void;
        getCooldownPercent(arg0: $AbstractSpell_): number;
        decrementCooldown(arg0: $CooldownInstance, arg1: number): boolean;
        syncToPlayer(arg0: $ServerPlayer): void;
        removeCooldown(arg0: string): boolean;
        getSpellCooldowns(): $Map<string, $CooldownInstance>;
        hasCooldownsActive(): boolean;
        setTickBuffer(arg0: number): void;
        static SPELL_ID: string;
        static COOLDOWN_REMAINING: string;
        static SPELL_COOLDOWN: string;
        constructor();
        get spellCooldowns(): $Map<string, $CooldownInstance>;
        set tickBuffer(value: number);
    }
    export class $CooldownInstance {
        decrement(): void;
        getCooldownRemaining(): number;
        getSpellCooldown(): number;
        getCooldownPercent(): number;
        decrementBy(arg0: number): void;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        get cooldownRemaining(): number;
        get spellCooldown(): number;
        get cooldownPercent(): number;
    }
    export class $RecastInstance implements $ISerializable, $INBTSerializable<$CompoundTag> {
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        getSpellId(): string;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getCastData(): $ICastDataSerializable;
        readFromBuffer(arg0: $FriendlyByteBuf): void;
        writeToBuffer(arg0: $FriendlyByteBuf): void;
        getRemainingRecasts(): number;
        getTicksRemaining(): number;
        getTotalRecasts(): number;
        getTicksToLive(): number;
        constructor();
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: $CastSource_, arg5: $ICastDataSerializable);
        get spellLevel(): number;
        get castSource(): $CastSource;
        get spellId(): string;
        get castData(): $ICastDataSerializable;
        get remainingRecasts(): number;
        get ticksRemaining(): number;
        get totalRecasts(): number;
        get ticksToLive(): number;
    }
    export class $TargetEntityCastData implements $ICastData {
        reset(): void;
        getTarget(arg0: $ServerLevel): $LivingEntity;
        getTargetUUID(): $UUID;
        getTargetPosition(arg0: $ServerLevel): $Vec3;
        constructor(arg0: $LivingEntity);
        get targetUUID(): $UUID;
    }
}
